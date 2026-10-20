// The Concierge: Telegram webhook. Answers every tap and message within seconds, with no AI.
// It records the change in the repo; the Editor (hourly Claude routine) does the thinking.
import { NextResponse, type NextRequest } from "next/server";
import { getPost, getPosts, section, setMeta, appendFeedback } from "@/lib/posts";
import { updateFile, writeFile } from "@/lib/store";
import { tg, send, esc } from "@/lib/telegram";
import { nextRun, fmtAms } from "@/lib/team";
import { addRequest } from "@/lib/requests";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

const INBOX = "brand-hq/inbox";
const stamp = () => new Date().toISOString().slice(0, 16).replace("T", " ") + " UTC";
const ams = (d: Date) => d.toLocaleDateString("en-CA", { timeZone: "Europe/Amsterdam" });
const nextEditor = () => {
  const n = nextRun("checkin");
  if (!n) return "the next check-in";
  const time = n.toLocaleTimeString("en-GB", { timeZone: "Europe/Amsterdam", hour: "2-digit", minute: "2-digit" });
  return ams(n) === ams(new Date()) ? time : `${fmtAms(n).split(",")[0]} at ${time}`;
};

type Msg = {
  message_id: number;
  chat: { id: number };
  text?: string;
  caption?: string;
  document?: { file_id: string; file_name?: string };
  reply_to_message?: { text?: string };
};
type Update = { callback_query?: { id: string; data?: string; message?: Msg }; message?: Msg };

export async function POST(req: NextRequest) {
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET;
  if (!secret || req.headers.get("x-telegram-bot-api-secret-token") !== secret) {
    return new NextResponse("forbidden", { status: 403 });
  }
  const u = (await req.json()) as Update;
  try {
    if (u.callback_query) await onTap(u.callback_query);
    else if (u.message && String(u.message.chat.id) === String(process.env.TELEGRAM_CHAT_ID)) await onMessage(u.message);
  } catch (e) {
    console.error("[concierge]", e);
    await send("⚠️ I couldn't save that just now. Please try again in a minute.");
  }
  return NextResponse.json({ ok: true }); // always 200, so Telegram doesn't retry forever
}

async function onTap(q: NonNullable<Update["callback_query"]>) {
  const [act, ...rest] = (q.data || "").split(":");
  const pid = rest.join(":");
  await tg("answerCallbackQuery", { callback_query_id: q.id, text: "Got it" });
  if (String(q.message?.chat.id) !== String(process.env.TELEGRAM_CHAT_ID)) return;
  const p = await getPost(pid);
  if (!p) return void (await send("I can't find that post anymore. It may have been archived."));
  const title = esc(p.title);

  if (act === "approve") {
    await updateFile(p.path, (raw) => setMeta(raw, { status: "approved" }), `brand-hq(app): approve ${pid} (telegram)`);
    await send(`✅ Approved: <i>${title}</i>. You'll get the post kit on ${p.date} around 08:00.`);
  } else if (act === "back") {
    await updateFile(p.path, (raw) => setMeta(raw, { status: "revising" }), `brand-hq(app): send back ${pid} (telegram)`);
    await send(`✏️ What should change in <i>${title}</i>? Reply to this message.\n\nref: ${pid}`, undefined, {
      reply_markup: { force_reply: true, input_field_placeholder: "Your feedback…" },
    });
  } else if (act === "read") {
    await send(esc(section(p.body, "Post")) || "(no text yet)");
    const fc = section(p.body, "First comment");
    if (fc) await send("💬 <b>First comment</b>\n\n" + esc(fc));
  } else if (act === "posted") {
    await updateFile(p.path, (raw) => setMeta(raw, { status: "posted", posted_at: new Date().toISOString().slice(0, 10) }), `brand-hq(app): posted ${pid} (telegram)`);
    await send("🎉 Logged as posted. Forward me your LinkedIn analytics export at the end of the week.");
  } else if (act === "skip") {
    await updateFile(p.path, (raw) => setMeta(raw, { status: "skipped" }), `brand-hq(app): skip ${pid} (telegram)`);
    await send("⏭ Skipped. The Brand Manager will rebalance the plan next Monday.");
  }
}

async function onMessage(m: Msg) {
  const text = (m.text || m.caption || "").trim();
  const ref = m.reply_to_message?.text?.match(/ref: (\S+)/)?.[1];

  if (ref && text) {
    const p = await getPost(ref);
    if (!p) return void (await send("I can't find that post anymore."));
    await updateFile(
      p.path,
      (raw) => appendFeedback(setMeta(raw, { status: "revising" }), text, stamp()),
      `brand-hq(app): send back ${ref} (telegram)`,
    );
    await send(`👍 Got it. Your feedback is saved on <i>${esc(p.title)}</i>.\nThe Editor revises it at ${nextEditor()} and sends you v2 here.`);
    return;
  }

  if (m.document) {
    const f = await tg<{ file_path: string }>("getFile", { file_id: m.document.file_id });
    if (!f) return void (await send("I couldn't download that file. Telegram bots can only fetch files up to 20 MB."));
    const res = await fetch(`https://api.telegram.org/file/bot${process.env.TELEGRAM_BOT_TOKEN}/${f.file_path}`);
    const name = new Date().toISOString().replace(/[-:T]/g, "").slice(0, 14) + "-" + (m.document.file_name || "upload").replace(/[^\w.\-]/g, "_");
    await writeFile(`${INBOX}/${name}`, Buffer.from(await res.arrayBuffer()), `brand-hq(app): inbox file ${name} (telegram)`);
    await send("📊 Saved. The Analyst folds it into your results on its next run.");
    return;
  }

  if (text.startsWith("/plan")) {
    const up = (await getPosts()).filter((p) => !["posted", "skipped", "on_hold"].includes(p.status)).slice(0, 8);
    await send("🗓 <b>Coming up</b>\n" + (up.map((p) => `${p.date} · ${esc(p.title)} · <i>${p.status.replace(/_/g, " ")}</i>`).join("\n") || "Nothing planned yet."));
    return;
  }

  if (text.startsWith("/start") || text.startsWith("/help")) {
    await send("Hi! Tap the buttons on drafts to approve or send back. Send me any idea or request as a message, /plan for what's coming, or forward your LinkedIn analytics export.");
    return;
  }

  if (text) {
    await addRequest(text, "telegram");
    await send(`📥 Saved. The Editor picks it up at ${nextEditor()}; ideas go into Monday's plan.`);
  }
}

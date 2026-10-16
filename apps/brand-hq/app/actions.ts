"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getPost, setMeta, replaceSection, appendFeedback } from "@/lib/posts";
import { updateFile } from "@/lib/store";
import { COOKIE, sessionValue } from "@/lib/auth";
import { notify } from "@/lib/telegram";

const stamp = () => new Date().toISOString().slice(0, 16).replace("T", " ") + " UTC";

async function mustPost(id: string) {
  const p = await getPost(id);
  if (!p) throw new Error(`Post not found: ${id}`);
  return p;
}

function done(id: string) {
  revalidatePath("/", "layout");
  redirect(`/review/${id}?ok=1`);
}

export async function approve(id: string) {
  const p = await mustPost(id);
  await updateFile(p.path, (raw) => setMeta(raw, { status: "approved" }), `brand-hq(app): approve ${id}`);
  await notify(`✅ Approved in Brand HQ: <i>${p.title}</i>. The post kit arrives on ${p.date} around 08:00.`);
  done(id);
}

export async function sendBack(id: string, form: FormData) {
  const comment = String(form.get("comment") || "").trim();
  if (!comment) redirect(`/review/${id}?err=comment`);
  const p = await mustPost(id);
  await updateFile(
    p.path,
    (raw) => appendFeedback(setMeta(raw, { status: "revising" }), comment, stamp()),
    `brand-hq(app): send back ${id}`,
  );
  done(id);
}

export async function saveEdit(id: string, form: FormData) {
  const text = String(form.get("text") || "").trim();
  if (!text) redirect(`/review/${id}?err=text`);
  const p = await mustPost(id);
  await updateFile(p.path, (raw) => replaceSection(raw, "Post", text), `brand-hq(app): edit ${id}`);
  done(id);
}

export async function markPosted(id: string) {
  const p = await mustPost(id);
  await updateFile(
    p.path,
    (raw) => setMeta(raw, { status: "posted", posted_at: new Date().toISOString().slice(0, 10) }),
    `brand-hq(app): posted ${id}`,
  );
  done(id);
}

export async function login(form: FormData) {
  const pw = process.env.APP_PASSWORD;
  const given = String(form.get("password") || "");
  if (!pw || given !== pw) redirect("/login?err=1");
  (await cookies()).set(COOKIE, await sessionValue(pw), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 90,
  });
  redirect("/");
}

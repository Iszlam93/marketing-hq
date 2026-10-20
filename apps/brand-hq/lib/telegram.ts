// Telegram Bot API helpers. Used by app actions (notify) and the webhook bot (app/api/telegram).
type Button = { text: string; callback_data: string };

export async function tg<T = unknown>(method: string, body: Record<string, unknown>): Promise<T | null> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return null;
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const j = (await res.json()) as { ok: boolean; result: T };
    return j.ok ? j.result : null;
  } catch {
    return null;
  }
}

export async function send(html: string, buttons?: Button[][], extra: Record<string, unknown> = {}) {
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (!chat) return null;
  return tg<{ message_id: number }>("sendMessage", {
    chat_id: Number(chat),
    text: html,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    ...(buttons ? { reply_markup: { inline_keyboard: buttons } } : {}),
    ...extra,
  });
}

/** Keeps the Telegram chat in sync when actions happen in the app. Never blocks an app action. */
export async function notify(html: string) {
  await send(html);
}

export const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Optional: keeps the Telegram chat in sync when actions happen in the app.
export async function notify(html: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) return;
  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: Number(chat), text: html, parse_mode: "HTML", disable_web_page_preview: true }),
      cache: "no-store",
    });
  } catch {
    // never block an app action on Telegram
  }
}

// Requests and ideas from Telegram and the app's Requests box. The Editor (hourly routine) handles them.
import { appendLine, readFile } from "./store";

export const REQUESTS_FILE = "brand-hq/inbox/requests.md";
const HEADER =
  "# Requests and ideas\n\nFrom Telegram and the app's Requests box. The Editor handles each line on its next run, then deletes it and logs what it did.";

export async function addRequest(text: string, from: "telegram" | "app") {
  const line = `- ${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC · ${from}: ${text.replace(/\s*\n+\s*/g, " ").trim()}`;
  await appendLine(REQUESTS_FILE, line, HEADER, `brand-hq(app): request (${from})`);
}

export async function openRequests(): Promise<string[]> {
  const f = await readFile(REQUESTS_FILE);
  return f ? f.content.split("\n").filter((l) => l.startsWith("- ")).map((l) => l.slice(2)) : [];
}

// The Brand HQ agent team and its real activity (from the repo's commit history under brand-hq/).
import path from "path";
import { storeMode } from "./store";

export type Agent = {
  id: string;
  name: string;
  role: string;
  does: string[];
  schedule: string;
  model: string;
  routineUrl?: string;
  instructions?: string; // repo path
  match?: RegExp; // commit messages that belong to this agent
};

const ROUTINES = "https://claude.ai/code/routines/";

export const TEAM: Agent[] = [
  {
    id: "bm", name: "Brand Manager", role: "Owns the goal and the weekly plan",
    does: ["Keeps the next 30 days planned (max 2 posts a week)", "Drafts the coming week in your voice", "Researches AI news for AI takes", "Sends drafts for approval and a weekly summary"],
    schedule: "Mondays 07:00", model: "Claude Opus 5.5",
    routineUrl: ROUTINES + "trig_01Hz43Zmo45JJxJjkkKtA8mC", instructions: "brand-hq/routines/weekly-planner.md", match: /weekly plan/i,
  },
  {
    id: "checkin", name: "Editor", role: "Revisions, requests, posting day",
    does: ["Revises drafts you send back", "Handles your requests and ideas", "Sends the post kit on posting day", "Reminds you the day before"],
    schedule: "Hourly, 07:00–22:00", model: "Claude Sonnet 5.5",
    routineUrl: ROUTINES + "trig_01Dh7DMnD9gsdLTbeLrY2PhZ", instructions: "brand-hq/routines/check-in.md", match: /check-in/i,
  },
  {
    id: "writer", name: "Writer", role: "Writes in your voice",
    does: ["Writes from your real material, never invents", "Follows the Voice rules and rationed devices", "Marks missing facts as [add: …]"],
    schedule: "Inside the Brand Manager and check-in runs", model: "Claude", instructions: "docs/brand-hq/VOICE.md",
  },
  {
    id: "designer", name: "Designer", role: "Swiss Grid visuals",
    does: ["Specs each visual (cover, carousel, build log)", "Renders 1080×1350 images and carousel PDFs", "Keeps the brand kit consistent"],
    schedule: "Inside the Brand Manager run", model: "Claude + renderer", instructions: "docs/brand-hq/BRAND-KIT.md",
  },
  {
    id: "reminder", name: "Concierge", role: "Your Telegram bot, instant replies",
    does: ["Answers every tap and message within seconds (no AI, free)", "Saves approvals, feedback, requests and files", "Tells you when the Editor will pick it up"],
    schedule: "Always on · @Pers_Iszlam93bot", model: "Code on Vercel", instructions: "apps/brand-hq/app/api/telegram/route.ts", match: /\(telegram\)|\(app\)/i,
  },
];

export type Activity = { when: string; who: string; agentId: string | null; message: string };

function classify(msg: string): { who: string; agentId: string | null } {
  if (/weekly plan/i.test(msg)) return { who: "Brand Manager", agentId: "bm" };
  if (/check-in/i.test(msg)) return { who: "Check-in agent", agentId: "checkin" };
  if (/\(telegram\)/i.test(msg)) return { who: "You, via Telegram", agentId: "reminder" };
  if (/\(app\)/i.test(msg)) return { who: "You, in the app", agentId: null };
  return { who: "Claude (setup)", agentId: null };
}

export async function getActivity(limit = 30): Promise<Activity[]> {
  try {
    if (storeMode === "local") {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { execFileSync } = require("child_process") as typeof import("child_process");
      const root = process.env.LOCAL_REPO_ROOT || path.resolve(process.cwd(), "..", "..");
      try { execFileSync("git", ["fetch", "-q"], { cwd: root, stdio: "pipe", timeout: 8000 }); } catch { /* offline */ }
      const out = execFileSync("git", ["log", "origin/main", `-n${limit}`, "--pretty=%aI\t%s", "--", "brand-hq"], { cwd: root, stdio: "pipe" }).toString();
      return out.trim().split("\n").filter(Boolean).map((l) => {
        const [when, ...rest] = l.split("\t");
        const message = rest.join("\t");
        return { when, message, ...classify(message) };
      });
    }
    const repo = process.env.GITHUB_REPO || "Iszlam93/marketing-hq";
    const res = await fetch(`https://api.github.com/repos/${repo}/commits?path=brand-hq&per_page=${limit}`, {
      cache: "no-store",
      headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, Accept: "application/vnd.github+json" },
    });
    const items = (await res.json()) as { commit: { message: string; author: { date: string } } }[];
    return items.map((c) => {
      const message = c.commit.message.split("\n")[0];
      return { when: c.commit.author.date, message, ...classify(message) };
    });
  } catch {
    return [];
  }
}

/** Next run times, in UTC terms (cron: Mon 06:00 UTC; hourly 05–20 UTC). */
export function nextRun(agentId: string, now = new Date()): Date | null {
  const d = new Date(now);
  if (agentId === "bm") {
    d.setUTCHours(6, 0, 0, 0);
    while (d.getUTCDay() !== 1 || d <= now) d.setUTCDate(d.getUTCDate() + 1);
    return d;
  }
  if (agentId === "checkin") {
    d.setUTCMinutes(0, 0, 0);
    do d.setUTCHours(d.getUTCHours() + 1); while (d.getUTCHours() < 5 || d.getUTCHours() > 20);
    return d;
  }
  return null;
}

export function fmtAms(d: Date | string): string {
  return new Date(d).toLocaleString("en-GB", { timeZone: "Europe/Amsterdam", weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}

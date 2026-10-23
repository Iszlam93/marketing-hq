import { listFiles, readFile } from "./store";

export const POSTS_DIR = "brand-hq/posts";

export type Post = {
  id: string;
  date: string; // YYYY-MM-DD
  time: string;
  pillar: string;
  title: string;
  status: string;
  visual_style: string;
  path: string;
  body: string;
  meta: Record<string, string>;
};

export const PILLARS: Record<string, { share: number; color: string; short: string }> = {
  "Building with AI in public": { share: 40, color: "var(--c3)", short: "Building in public" },
  "Product marketing craft": { share: 35, color: "var(--c2)", short: "PMM craft" },
  "AI for marketers": { share: 15, color: "var(--c4)", short: "AI for marketers" },
  "Journey & learning": { share: 10, color: "var(--c1)", short: "Journey" },
};

export const STATUS: Record<string, { label: string; tone: string }> = {
  planned: { label: "Planned", tone: "neutral" },
  awaiting_review: { label: "Awaiting your review", tone: "amber" },
  on_hold: { label: "On hold", tone: "neutral" },
  drafting: { label: "Drafting", tone: "accent" },
  drafted: { label: "Draft ready", tone: "amber" },
  needs_approval: { label: "Needs your approval", tone: "amber" },
  revising: { label: "Revising", tone: "accent" },
  approved: { label: "Approved", tone: "good" },
  kit_sent: { label: "Post kit sent", tone: "accent" },
  posted: { label: "Posted", tone: "good" },
  skipped: { label: "Skipped", tone: "neutral" },
};

export const NEEDS_YOU = ["needs_approval", "drafted", "awaiting_review"];

export function parse(raw: string, path: string): Post | null {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  const meta: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^"|"$/g, "");
  }
  return {
    id: meta.id || path.split("/").pop()!.replace(/\.md$/, ""),
    date: meta.date || "",
    time: meta.time || "08:30",
    pillar: meta.pillar || "",
    title: meta.title || "(untitled)",
    status: meta.status || "planned",
    visual_style: meta.visual_style || "hand-drawn",
    path,
    body: m[2],
    meta,
  };
}

export async function getPosts(): Promise<Post[]> {
  const files = (await listFiles(POSTS_DIR)).filter((f) => f.endsWith(".md"));
  const posts = await Promise.all(
    files.map(async (f) => {
      const r = await readFile(f);
      return r ? parse(r.content, f) : null;
    }),
  );
  return (posts.filter(Boolean) as Post[]).sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
}

export async function getVisuals(id: string): Promise<{ images: string[]; pdf: string | null }> {
  const files = (await listFiles(`brand-hq/design/out/${id}`)).map((f) => f.split("/").pop()!);
  return {
    images: files.filter((f) => f.endsWith(".png")).sort().map((f) => `/api/visual/${id}/${f}`),
    pdf: files.includes("carousel.pdf") ? `/api/visual/${id}/carousel.pdf` : null,
  };
}

export function parsePoll(text: string): { question: string; options: string[] } | null {
  const q = text.match(/question:\s*(.+)/);
  if (!q) return null;
  return { question: q[1].trim(), options: [...text.matchAll(/^\s+-\s+(.+)$/gm)].map((m) => m[1].trim()) };
}

export async function getPost(id: string) {
  return (await getPosts()).find((p) => p.id === id) || null;
}

export function section(body: string, name: string): string {
  const re = new RegExp(`^## ${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\n([\\s\\S]*?)(?=^## |$(?![\\s\\S]))`, "m");
  const m = body.match(re);
  return m ? m[1].trim() : "";
}

// ---- pure edit helpers (used by server actions) ----
export function setMeta(raw: string, kv: Record<string, string>): string {
  let out = raw.replace(/\r\n/g, "\n");
  for (const [k, v] of Object.entries(kv)) {
    const re = new RegExp(`^${k}:.*$`, "m");
    const end = out.indexOf("\n---\n", 4);
    const fm = out.slice(0, end);
    out = re.test(fm) ? fm.replace(re, `${k}: ${v}`) + out.slice(end) : fm + `\n${k}: ${v}` + out.slice(end);
  }
  return out;
}

export function replaceSection(raw: string, name: string, text: string): string {
  const re = new RegExp(`(^## ${name}\\s*\\n)([\\s\\S]*?)(?=^## |$(?![\\s\\S]))`, "m");
  return re.test(raw) ? raw.replace(re, `$1${text.trim()}\n\n`) : raw.trimEnd() + `\n\n## ${name}\n${text.trim()}\n`;
}

/** Adds a dated line at the end of the ## Feedback section, wherever that section sits in the file. */
export function appendFeedback(raw: string, text: string, when: string): string {
  const line = `- ${when}: ${text.replace(/\n+/g, " ")}`;
  const out = raw.replace(/\r\n/g, "\n").trimEnd();
  const re = /(^## Feedback\s*\n)([\s\S]*?)(?=^## |$(?![\s\S]))/m;
  if (!re.test(out)) return `${out}\n\n## Feedback\n${line}\n`;
  return out.replace(re, (_m, head: string, body: string) => `${head}${body.trimEnd() ? body.trimEnd() + "\n" : ""}${line}\n\n`).trimEnd() + "\n";
}

// ---- dates (Europe/Amsterdam) ----
export function todayISO(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Amsterdam" }).format(new Date());
}
export function addDays(iso: string, n: number): string {
  const d = new Date(iso + "T12:00:00Z");
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}
export function fmtDate(iso: string): string {
  const d = new Date(iso + "T12:00:00Z");
  return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" });
}
export function weekday(iso: string): number {
  return new Date(iso + "T12:00:00Z").getUTCDay();
}

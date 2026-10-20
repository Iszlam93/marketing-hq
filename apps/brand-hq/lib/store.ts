// Reads and writes repo files. Two modes:
// - github: GITHUB_TOKEN set (production on Vercel) -> GitHub Contents API, commits on write.
// - local:  no token (development) -> the repo checkout on disk.
import { promises as fs } from "fs";
import path from "path";

const REPO = process.env.GITHUB_REPO || "Iszlam93/marketing-hq";
const BRANCH = process.env.GITHUB_BRANCH || "main";
const TOKEN = process.env.GITHUB_TOKEN;
const LOCAL_ROOT = process.env.LOCAL_REPO_ROOT || path.resolve(process.cwd(), "..", "..");

export const storeMode = TOKEN ? "github" : "local";

async function gh(pathname: string, init?: RequestInit) {
  const res = await fetch(`https://api.github.com${pathname}`, {
    ...init,
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init?.headers || {}),
    },
  });
  if (!res.ok) {
    const err = new Error(`GitHub ${res.status}: ${await res.text()}`) as Error & { status?: number };
    err.status = res.status;
    throw err;
  }
  return res.json();
}

const enc = (p: string) => p.split("/").map(encodeURIComponent).join("/");

export async function listFiles(dir: string): Promise<string[]> {
  if (storeMode === "local") {
    try {
      return (await fs.readdir(path.join(LOCAL_ROOT, dir))).map((f) => `${dir}/${f}`);
    } catch {
      return [];
    }
  }
  try {
    const items = (await gh(`/repos/${REPO}/contents/${enc(dir)}?ref=${BRANCH}`)) as { path: string; type: string }[];
    return items.filter((i) => i.type === "file").map((i) => i.path);
  } catch (e) {
    if ((e as { status?: number }).status === 404) return [];
    throw e;
  }
}

export async function readFile(p: string): Promise<{ content: string; sha?: string } | null> {
  if (storeMode === "local") {
    try {
      return { content: (await fs.readFile(path.join(LOCAL_ROOT, p), "utf8")).replace(/\r\n/g, "\n") };
    } catch {
      return null;
    }
  }
  try {
    const f = (await gh(`/repos/${REPO}/contents/${enc(p)}?ref=${BRANCH}`)) as { content: string; sha: string };
    return { content: Buffer.from(f.content, "base64").toString("utf8").replace(/\r\n/g, "\n"), sha: f.sha };
  } catch (e) {
    if ((e as { status?: number }).status === 404) return null;
    throw e;
  }
}

/** Local mode: commit and push the change so the cloud agents see it (same effect as the GitHub API path). */
function syncLocal(p: string, message: string) {
  if (process.env.LOCAL_GIT_SYNC === "off") return;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { execFileSync } = require("child_process") as typeof import("child_process");
  const git = (...args: string[]) => execFileSync("git", args, { cwd: LOCAL_ROOT, stdio: "pipe" });
  try {
    git("add", p);
    git("commit", "-m", message);
    try {
      git("pull", "--rebase", "--autostash", "-q");
    } catch {
      /* offline or conflict: push below will report */
    }
    git("push", "-q");
  } catch (e) {
    console.error("[brand-hq] local git sync failed:", (e as Error).message);
  }
}

/** Binary read (images, PDFs) for the visual route. */
export async function readBinary(p: string): Promise<Buffer | null> {
  if (storeMode === "local") {
    try {
      return await fs.readFile(path.join(LOCAL_ROOT, p));
    } catch {
      return null;
    }
  }
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${enc(p)}?ref=${BRANCH}`, {
      cache: "no-store",
      headers: { Authorization: `Bearer ${TOKEN}`, Accept: "application/vnd.github.raw+json", "X-GitHub-Api-Version": "2022-11-28" },
    });
    if (!res.ok) return null;
    return Buffer.from(await res.arrayBuffer());
  } catch {
    return null;
  }
}

/** Read-modify-write with one retry if an agent committed in between. */
export async function updateFile(p: string, transform: (old: string) => string, message: string) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const cur = await readFile(p);
    if (!cur) throw new Error(`File not found: ${p}`);
    const next = transform(cur.content);
    if (next === cur.content) return;
    if (storeMode === "local") {
      await fs.writeFile(path.join(LOCAL_ROOT, p), next, "utf8");
      syncLocal(p, message);
      return;
    }
    try {
      await gh(`/repos/${REPO}/contents/${enc(p)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, content: Buffer.from(next, "utf8").toString("base64"), sha: cur.sha, branch: BRANCH }),
      });
      return;
    } catch (e) {
      const s = (e as { status?: number }).status;
      if ((s === 409 || s === 422) && attempt === 0) continue;
      throw e;
    }
  }
}

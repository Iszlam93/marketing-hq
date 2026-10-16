import { marked } from "marked";
import { getPosts, fmtDate } from "@/lib/posts";
import { readFile } from "@/lib/store";
import { PageHead, PostRow, StatusPill } from "@/components/ui";

export default async function History() {
  const posts = (await getPosts()).filter((p) => ["posted", "skipped"].includes(p.status)).reverse();
  const results = (await readFile("brand-hq/results.md"))?.content;
  return (
    <div className="stack">
      <PageHead title="History & results" sub="Everything posted through Brand HQ, plus the results from the analytics exports you forward to the bot." />
      <section className="card">
        <div className="card-head"><span className="eyebrow">Posted</span></div>
        {posts.length ? posts.map((p) => (
          <PostRow key={p.id} p={p} right={<span className="row"><span className="mono small muted">{p.meta.posted_at ? fmtDate(p.meta.posted_at) : ""}</span><StatusPill status={p.status} /></span>} />
        )) : <div className="empty">Nothing posted through Brand HQ yet. Tap “Posted” in Telegram, or “Mark as posted” here, after each post.</div>}
      </section>
      <section className="card md" dangerouslySetInnerHTML={{ __html: marked.parse(results || "## Results\nNo results yet. Forward your weekly LinkedIn analytics export (.xlsx) to the Telegram bot.") as string }} />
    </div>
  );
}

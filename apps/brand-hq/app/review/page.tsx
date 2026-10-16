import Link from "next/link";
import { getPosts, todayISO, fmtDate, section } from "@/lib/posts";
import { PageHead, PillarChip, StatusPill } from "@/components/ui";

export default async function Review() {
  const today = todayISO();
  const posts = (await getPosts()).filter((p) => p.date >= today && !["posted", "skipped"].includes(p.status));
  const order = ["needs_approval", "drafted", "revising", "approved", "kit_sent", "planned", "drafting"];
  posts.sort((a, b) => order.indexOf(a.status) - order.indexOf(b.status) || a.date.localeCompare(b.date));
  return (
    <div className="stack">
      <PageHead title="Review" sub="Every upcoming post. Open one to see it as it will look on LinkedIn, then approve, edit or send it back." />
      <div className="review-grid">
        {posts.map((p) => {
          const text = section(p.body, "Post");
          return (
            <Link key={p.id} href={`/review/${p.id}`} className="card review-card">
              <div className="row" style={{ justifyContent: "space-between" }}>
                <span className="rv-kind">{fmtDate(p.date)} · {p.time}</span>
                <StatusPill status={p.status} />
              </div>
              <b style={{ fontSize: 15, lineHeight: 1.35 }}>{p.title}</b>
              <PillarChip pillar={p.pillar} />
              <p className="muted small clamp">{text ? text.split("\n").filter(Boolean).slice(0, 2).join(" ") : "Not drafted yet. The Monday planner drafts it in its week."}</p>
              {text.includes("[add:") ? <span className="pill amber" style={{ alignSelf: "flex-start" }}>Needs a real detail from you</span> : null}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

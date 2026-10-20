import Link from "next/link";
import { getPosts, getVisuals, todayISO, fmtDate, section } from "@/lib/posts";
import { approveAll } from "@/app/actions";
import { PageHead, PillarChip, StatusPill } from "@/components/ui";

export default async function Review() {
  const today = todayISO();
  const posts = (await getPosts()).filter((p) => p.date >= today && !["posted", "skipped"].includes(p.status));
  const thumbs = Object.fromEntries(await Promise.all(posts.map(async (p) => [p.id, (await getVisuals(p.id)).images[0] || null] as const)));
  const ready = posts.filter((p) => ["awaiting_review", "needs_approval", "drafted"].includes(p.status) && section(p.body, "Post") && !section(p.body, "Post").includes("[add:"));
  const order = ["awaiting_review", "needs_approval", "drafted", "revising", "approved", "kit_sent", "planned", "drafting"];
  posts.sort((a, b) => order.indexOf(a.status) - order.indexOf(b.status) || a.date.localeCompare(b.date));
  return (
    <div className="stack">
      <PageHead title="Review" sub="Every upcoming post. Open one to see it as it will look on LinkedIn, then approve, edit or send it back." />
      {ready.length ? (
        <form action={approveAll} className="card row" style={{ justifyContent: "space-between" }}>
          <span><b>{ready.length} posts ready to approve.</b> <span className="muted small">Posts with an [add: …] spot or no text yet are left out.</span></span>
          <button className="btn good">Approve all {ready.length}</button>
        </form>
      ) : null}
      <div className="review-grid">
        {posts.map((p) => {
          const text = section(p.body, "Post");
          return (
            <Link key={p.id} href={`/review/${p.id}`} className="card review-card">
              <div className="row" style={{ justifyContent: "space-between" }}>
                <span className="rv-kind">{fmtDate(p.date)} · {p.time}</span>
                <StatusPill status={p.status} />
              </div>
              {thumbs[p.id] ? <img src={thumbs[p.id]!} alt="" className="thumb" /> : null}
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

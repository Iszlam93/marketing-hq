import Link from "next/link";
import { getPosts, todayISO, addDays, fmtDate, weekday, section, NEEDS_YOU, PILLARS } from "@/lib/posts";
import { PageHead, PostRow, StatusPill } from "@/components/ui";

export default async function Today() {
  const posts = await getPosts();
  const today = todayISO();
  const upcoming = posts.filter((p) => p.date >= today && !["posted", "skipped"].includes(p.status));
  const needs = upcoming.filter((p) => NEEDS_YOU.includes(p.status));
  const revising = upcoming.filter((p) => p.status === "revising");
  const approved = upcoming.filter((p) => ["approved", "kit_sent"].includes(p.status));
  const in30 = posts.filter((p) => p.date >= today && p.date < addDays(today, 30) && p.status !== "skipped");
  const posted = posts.filter((p) => p.status === "posted");
  const placeholders = upcoming.filter((p) => section(p.body, "Post").includes("[add:"));
  const mon = addDays(today, -((weekday(today) + 6) % 7));
  const week = posts.filter((p) => p.date >= mon && p.date <= addDays(mon, 6));
  let nextFri = today;
  while (weekday(nextFri) !== 5) nextFri = addDays(nextFri, 1);
  const next = upcoming[0];

  return (
    <div className="stack">
      <PageHead title="Today" sub={`${fmtDate(today)} · what needs you, and what's coming up`} />

      <section className="card brief">
        <div className="brief-av" style={{ fontSize: 11 }}>BM</div>
        <div>
          <h2>Brand Manager briefing</h2>
          <p>
            {needs.length
              ? `${needs.length} draft${needs.length > 1 ? "s" : ""} waiting for your approval. `
              : "Nothing waiting for approval. "}
            {next ? `Next post: “${next.title}” on ${fmtDate(next.date)} at ${next.time}. ` : "No upcoming posts planned yet. "}
            {in30.length} posts planned in the next 30 days.
            {placeholders.length ? ` ${placeholders.length} draft${placeholders.length > 1 ? "s need" : " needs"} a real detail from you (marked [add:]).` : ""}
          </p>
        </div>
        <div className="brief-cta">
          {needs.length ? <span className="pill amber">{needs.length} to approve</span> : <span className="pill good">All approved</span>}
          <Link className="btn sm" href="/review">Open Review</Link>
        </div>
      </section>

      <div className="kpis">
        <div className="card kpi"><span className="kpi-label">Waiting for you</span><div className="kpi-val num">{needs.length}</div><span className="small muted">drafts to approve</span></div>
        <div className="card kpi"><span className="kpi-label">Approved, upcoming</span><div className="kpi-val num">{approved.length}</div><span className="small muted">kit arrives on the day</span></div>
        <div className="card kpi"><span className="kpi-label">Planned, next 30 days</span><div className="kpi-val num">{in30.length}</div><span className="small muted">max 2 a week</span></div>
        <div className="card kpi"><span className="kpi-label">Posted via Brand HQ</span><div className="kpi-val num">{posted.length}</div><span className="small muted">logged in the calendar</span></div>
      </div>

      <div className="grid-2">
        <section className="card">
          <div className="card-head"><span className="eyebrow">Needs you</span></div>
          {needs.map((p) => <PostRow key={p.id} p={p} right={<span className="btn sm primary">Review</span>} />)}
          {revising.map((p) => <PostRow key={p.id} p={p} right={<StatusPill status="revising" />} />)}
          {placeholders.filter((p) => !NEEDS_YOU.includes(p.status)).map((p) => (
            <PostRow key={p.id + "-ph"} p={p} right={<span className="pill amber">Add a real detail</span>} />
          ))}
          {!needs.length && !revising.length && !placeholders.length ? <div className="empty">Nothing needs you right now.</div> : null}
          <div className="lrow" style={{ borderBottom: 0 }}>
            <span className="muted small">✉ {fmtDate(nextFri)} · This Week in AI is scheduled in your newsletter app</span>
          </div>
        </section>
        <section className="card">
          <div className="card-head"><span className="eyebrow">This week</span><Link className="btn sm ghost" href="/plan">30-day plan</Link></div>
          {week.length ? week.map((p) => <PostRow key={p.id} p={p} />) : <div className="empty">No posts this week.</div>}
        </section>
      </div>

      <section className="card">
        <div className="card-head"><span className="eyebrow">Pillar balance · next 30 days</span><span className="muted small">planned / target</span></div>
        <div className="balance">
          {Object.entries(PILLARS).map(([name, p]) => {
            const c = in30.filter((x) => x.pillar === name).length;
            const pct = in30.length ? Math.round((c / in30.length) * 100) : 0;
            return (
              <div className="bal-row" key={name}>
                <span className="row" style={{ gap: 7 }}><span className="p-dot" style={{ ["--c" as string]: p.color }}></span>{name}</span>
                <div className="bal-track"><div className="bal-fill" style={{ ["--c" as string]: p.color, width: `${pct}%` }}></div><div className="bal-target" style={{ left: `${p.share}%` }}></div></div>
                <span className="mono small">{pct}% / {p.share}%</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

import { TEAM, getActivity, nextRun, fmtAms } from "@/lib/team";
import { getPosts, todayISO, NEEDS_YOU } from "@/lib/posts";
import { PageHead } from "@/components/ui";

const POS: Record<string, [number, number]> = { you: [480, 46], bm: [480, 156], writer: [130, 280], designer: [365, 280], checkin: [600, 280], reminder: [835, 280] };

export default async function Team() {
  const [activity, posts] = await Promise.all([getActivity(30), getPosts()]);
  const today = todayISO();
  const waiting = posts.filter((p) => p.date >= today && NEEDS_YOU.includes(p.status)).length;
  const last: Record<string, string | undefined> = {};
  for (const a of activity) if (a.agentId && !last[a.agentId]) last[a.agentId] = a.when;
  const node = (id: string, title: string, sub: string, color: string, w = 200) => {
    const [x, y] = POS[id];
    return (
      <g key={id} className="node s-idle">
        <rect className="n-box" x={x - w / 2} y={y - 30} width={w} height={60} rx={9} />
        <rect className="n-band" x={x - w / 2} y={y - 30} width={4} height={60} rx={2} style={{ fill: color }} />
        <text className="n-name" x={x - w / 2 + 16} y={y - 4}>{title}</text>
        <text className="n-role" x={x - w / 2 + 16} y={y + 15}>{sub}</text>
      </g>
    );
  };
  return (
    <div className="stack">
      <PageHead title="Team & agents" sub="Your Brand HQ team: who does what, when they run, and what they actually did." />

      <section className="card">
        <div className="card-head"><span className="eyebrow">Org chart</span><span className="muted small">{waiting} post{waiting === 1 ? "" : "s"} waiting for your approval</span></div>
        <div className="tbl-wrap">
          <svg className="org bh" viewBox="0 0 960 330" role="img" aria-label="You, then the Brand Manager, then Writer, Designer, Check-in agent and Reminder" style={{ minWidth: 720 }}>
            <path className="edge" d="M480 76 V126" />
            {["writer", "designer", "checkin", "reminder"].map((id) => (
              <path key={id} className="edge" d={`M480 186 V220 H${POS[id][0]} V250`} />
            ))}
            {node("you", "You", `Approve · ${waiting} waiting`, "#111")}
            {node("bm", "Brand Manager", last.bm ? `Last run ${fmtAms(last.bm)}` : "Mondays 07:00", "#E5462C", 230)}
            {node("writer", "Writer", "Your voice", "#3A5FB5")}
            {node("designer", "Designer", "Swiss Grid visuals", "#8A56A8")}
            {node("checkin", "Check-in agent", last.checkin ? `Last run ${fmtAms(last.checkin)}` : "Hourly 07–22", "#0A7470")}
            {node("reminder", "Reminder", "Telegram bot", "#B4761C")}
          </svg>
        </div>
      </section>

      <div className="team-cards">
        {TEAM.map((a) => {
          const nx = nextRun(a.id);
          return (
            <section key={a.id} className="card stack" style={{ gap: 10 }}>
              <div className="row" style={{ justifyContent: "space-between" }}>
                <b style={{ fontSize: 16 }}>{a.name}</b>
                <span className="pill neutral">{a.model}</span>
              </div>
              <span className="muted small">{a.role}</span>
              <ul className="rules">{a.does.map((d) => <li key={d}>{d}</li>)}</ul>
              <dl className="kv" style={{ gridTemplateColumns: "repeat(2,minmax(0,1fr))" }}>
                <div><dt>Schedule</dt><dd>{a.schedule}</dd></div>
                <div><dt>Last run</dt><dd>{last[a.id] ? fmtAms(last[a.id]!) : a.match ? "No changes logged yet" : "Runs inside other agents"}</dd></div>
                {nx ? <div><dt>Next run</dt><dd>{fmtAms(nx)}</dd></div> : null}
              </dl>
              <div className="row">
                {a.routineUrl ? <a className="btn sm primary" href={a.routineUrl} target="_blank">Manage: run, pause, schedule</a> : null}
                {a.instructions ? <a className="btn sm" href={`https://github.com/Iszlam93/marketing-hq/blob/main/${a.instructions}`} target="_blank">Instructions</a> : null}
              </div>
            </section>
          );
        })}
      </div>

      <section className="card">
        <div className="card-head"><span className="eyebrow">Recent activity</span><span className="muted small">What the team changed in your content, newest first</span></div>
        <ol className="feed" style={{ maxHeight: 420 }}>
          {activity.map((a, i) => (
            <li key={i} style={{ gridTemplateColumns: "150px 12px minmax(0,1fr)" }}>
              <time>{fmtAms(a.when)}</time>
              <span className="dot" style={{ ["--c" as string]: a.agentId === "bm" ? "#E5462C" : a.agentId === "checkin" ? "#0A7470" : "var(--muted)" }}></span>
              <span><b style={{ fontWeight: 600 }}>{a.who}</b> · {a.message.replace(/^brand-hq(\(app\))?:\s*/i, "")}</span>
            </li>
          ))}
          {!activity.length ? <li><span></span><span></span><span className="muted">No activity yet.</span></li> : null}
        </ol>
      </section>

      <section className="card">
        <div className="card-head"><span className="eyebrow">Team management</span></div>
        <ul className="rules">
          <li><b>Run, pause or reschedule an agent:</b> use the <b>Manage</b> button on its card. It opens the agent in Claude.</li>
          <li><b>Change how they write or design:</b> edit the Voice and Brand Kit pages in your Notion Brand HQ. Every agent reads them on each run.</li>
          <li><b>Change what they do:</b> edit their Instructions, or tell me and I'll update them.</li>
          <li><b>Chat with the Brand Manager:</b> coming with the online version (Vercel), using your Claude API key.</li>
        </ul>
      </section>
    </div>
  );
}

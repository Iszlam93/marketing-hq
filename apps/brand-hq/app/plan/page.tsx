import Link from "next/link";
import { getPosts, todayISO, addDays, weekday, fmtDate, PILLARS, STATUS } from "@/lib/posts";
import { PageHead } from "@/components/ui";

export default async function Plan() {
  const posts = await getPosts();
  const today = todayISO();
  const start = addDays(today, -((weekday(today) + 6) % 7) - 7); // Monday of last week
  const days = Array.from({ length: 42 }, (_, i) => addDays(start, i));
  const in30 = posts.filter((p) => p.date >= today && p.date < addDays(today, 30) && p.status !== "skipped");
  return (
    <div className="stack">
      <PageHead title="30-day plan" sub="Tuesday and Thursday at 08:30, max 2 a week. Friday is your newsletter, scheduled in its own app." />
      <section className="card">
        <div className="tbl-wrap">
          <div className="cal7">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => <div className="dh" key={d}>{d}</div>)}
            {days.map((d) => {
              const items = posts.filter((p) => p.date === d);
              const isFri = weekday(d) === 5;
              return (
                <div key={d} className={`cell ${d < today ? "past" : ""} ${d === today ? "today" : ""}`}>
                  <span className="dn"><span>{fmtDate(d).replace(/^\w+ /, "")}</span>{d === today ? <b style={{ color: "var(--accent)" }}>today</b> : null}</span>
                  {items.map((p) => (
                    <Link key={p.id} href={`/review/${p.id}`} className="citem" style={{ ["--c" as string]: PILLARS[p.pillar]?.color || "var(--muted)" }}>
                      <span className="st">{STATUS[p.status]?.label || p.status}</span>
                      {p.title}
                    </Link>
                  ))}
                  {isFri ? <div className="citem ext"><span className="st">Newsletter · other app</span>This Week in AI</div> : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="card">
        <div className="card-head"><span className="eyebrow">Pillar balance · next 30 days</span><span className="muted small">bar = planned · line = target</span></div>
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

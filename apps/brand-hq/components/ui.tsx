import Link from "next/link";
import { PILLARS, STATUS, fmtDate, type Post } from "@/lib/posts";

export function PillarChip({ pillar }: { pillar: string }) {
  const p = PILLARS[pillar];
  return (
    <span className="pchip" style={{ ["--c" as string]: p?.color || "var(--muted)" }}>
      <i></i>
      {p?.short || pillar}
    </span>
  );
}

export function StatusPill({ status }: { status: string }) {
  const s = STATUS[status] || { label: status, tone: "neutral" };
  return <span className={`pill ${s.tone}`}>{s.label}</span>;
}

export function PageHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <header style={{ marginBottom: 18 }}>
      <h1 style={{ fontSize: 23, fontWeight: 700, letterSpacing: "-.015em" }}>{title}</h1>
      {sub ? <div className="muted" style={{ fontSize: 13, marginTop: 3 }}>{sub}</div> : null}
    </header>
  );
}

export function PostRow({ p, right }: { p: Post; right?: React.ReactNode }) {
  return (
    <Link href={`/review/${p.id}`} className="lrow linkrow">
      <span className="row">
        <span className="mono small muted" style={{ width: 92 }}>{fmtDate(p.date)}</span>
        <PillarChip pillar={p.pillar} />
        <b>{p.title}</b>
      </span>
      {right ?? <StatusPill status={p.status} />}
    </Link>
  );
}

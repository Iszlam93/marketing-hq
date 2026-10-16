import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, section, fmtDate } from "@/lib/posts";
import { approve, sendBack, saveEdit, markPosted } from "@/app/actions";
import { PillarChip, StatusPill } from "@/components/ui";
import LinkedInPreview from "@/components/LinkedInPreview";

export default async function ReviewPost({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ ok?: string; err?: string }>;
}) {
  const { id } = await params;
  const sp = await searchParams;
  const p = await getPost(id);
  if (!p) notFound();
  const text = section(p.body, "Post");
  const comment = section(p.body, "First comment");
  const visual = section(p.body, "Visual");
  const why = section(p.body, "Why");
  const notes = section(p.body, "Notes");
  const feedback = section(p.body, "Feedback");
  const revision = section(p.body, "Revision note");
  const canAct = ["needs_approval", "drafted", "revising", "approved"].includes(p.status) && !!text;
  const hasPlaceholder = text.includes("[add:");

  return (
    <div className="stack">
      <Link href="/review" className="small muted">← All posts</Link>
      <section className="card">
        <div className="rv-head">
          <div>
            <div className="row" style={{ marginBottom: 6 }}>
              <span className="rv-kind">{fmtDate(p.date)} · {p.time}</span>
              <StatusPill status={p.status} />
            </div>
            <h2>{p.title}</h2>
            <div className="row" style={{ marginTop: 6 }}>
              <PillarChip pillar={p.pillar} />
              <span className="muted small">Visual: {p.visual_style}</span>
            </div>
          </div>
          <div className="rv-actions">
            {canAct && p.status !== "approved" ? (
              <form action={approve.bind(null, p.id)}>
                <button className="btn good" disabled={hasPlaceholder} title={hasPlaceholder ? "Fill the [add: …] detail first" : ""}>Approve</button>
              </form>
            ) : null}
            {p.status === "approved" || p.status === "kit_sent" ? (
              <form action={markPosted.bind(null, p.id)}>
                <button className="btn">Mark as posted</button>
              </form>
            ) : null}
          </div>
        </div>

        {sp.ok ? <div className="note" style={{ marginBottom: 14 }}>Saved to GitHub. The agents will pick it up on their next run.</div> : null}
        {sp.err ? <div className="note" style={{ marginBottom: 14, background: "var(--bad-soft)" }}>Please add some text first.</div> : null}
        {hasPlaceholder ? (
          <div className="note" style={{ marginBottom: 14, background: "var(--amber-soft)" }}>
            This draft has an <b>[add: …]</b> spot that needs a real detail from you. Use <b>Edit text</b> to fill it in, then approve.
          </div>
        ) : null}
        {why ? <div className="note" style={{ marginBottom: 14 }}><b>Why this post, why now:</b> {why}</div> : null}
        {revision ? <div className="note" style={{ marginBottom: 14 }}><b>Last revision:</b> {revision}</div> : null}

        {text ? (
          <div className="stage">
            <LinkedInPreview text={text} date={fmtDate(p.date)} time={p.time} visual={visual} style={p.visual_style} />
          </div>
        ) : (
          <div className="empty">Not drafted yet. The Monday planner drafts posts in the week before they go out.</div>
        )}

        {comment ? (
          <div style={{ marginTop: 14 }}>
            <div className="eyebrow" style={{ marginBottom: 6 }}>First comment</div>
            <div className="copybox">{comment}</div>
          </div>
        ) : null}

        {canAct ? (
          <div className="grid-2" style={{ marginTop: 18 }}>
            <details className="card act">
              <summary><b>Edit text</b> <span className="muted small">· change the post yourself</span></summary>
              <form action={saveEdit.bind(null, p.id)} className="stack" style={{ marginTop: 10, gap: 8 }}>
                <textarea name="text" defaultValue={text} rows={16} className="ta" />
                <button className="btn primary" style={{ alignSelf: "flex-start" }}>Save text</button>
              </form>
            </details>
            <details className="card act">
              <summary><b>Send back</b> <span className="muted small">· ask the Writer for a revision</span></summary>
              <form action={sendBack.bind(null, p.id)} className="stack" style={{ marginTop: 10, gap: 8 }}>
                <textarea name="comment" rows={5} className="ta" placeholder="e.g. Shorter hook, and end with a sharper question" />
                <button className="btn" style={{ alignSelf: "flex-start" }}>Send back</button>
                <span className="hint">The revised draft comes back within about an hour (next check-in).</span>
              </form>
            </details>
          </div>
        ) : null}

        {notes && notes !== "- none" ? (
          <div style={{ marginTop: 14 }}><div className="eyebrow" style={{ marginBottom: 6 }}>Notes</div><div className="copybox">{notes}</div></div>
        ) : null}
        {feedback ? (
          <div style={{ marginTop: 14 }}><div className="eyebrow" style={{ marginBottom: 6 }}>Feedback history</div><div className="copybox">{feedback}</div></div>
        ) : null}
      </section>
    </div>
  );
}

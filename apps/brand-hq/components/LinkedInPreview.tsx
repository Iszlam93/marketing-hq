"use client";
import { useState } from "react";

export default function LinkedInPreview({
  text, date, time, images, pdf, poll,
}: {
  text: string; date: string; time: string;
  images: string[]; pdf: string | null;
  poll: { question: string; options: string[] } | null;
}) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [more, setMore] = useState(false);
  const [slide, setSlide] = useState(0);
  const long = text.length > 210 && !more;
  const shown = long ? text.slice(0, text.lastIndexOf(" ", 200)) : text;
  const carousel = images.length > 1;
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div className="seg">
        <button aria-pressed={device === "desktop"} onClick={() => setDevice("desktop")}>Desktop</button>
        <button aria-pressed={device === "mobile"} onClick={() => setDevice("mobile")}>Mobile</button>
      </div>
      <article className={`li ${device}`}>
        <div className="li-head">
          <div className="li-av" style={{ background: "#111" }}>IE</div>
          <div>
            <b>Islam Elsaeed</b>
            <span>B2B product marketer who builds with AI</span>
            <span>{date} · {time}</span>
          </div>
        </div>
        <div className="li-text">
          {shown}
          {long ? <>… <button className="li-more" onClick={() => setMore(true)}>see more</button></> : null}
        </div>
        {poll ? (
          <div className="li-poll">
            <b>{poll.question}</b>
            {poll.options.map((o) => <div className="li-opt" key={o}>{o}</div>)}
            <span>Poll · 1 week</span>
          </div>
        ) : null}
        {images.length ? (
          <div className="li-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images[carousel ? slide : 0]} alt={carousel ? `Slide ${slide + 1}` : "Post visual"} />
            {carousel ? (
              <div className="li-car">
                <button onClick={() => setSlide((s) => Math.max(0, s - 1))} disabled={slide === 0}>‹</button>
                <span>{slide + 1} / {images.length}</span>
                <button onClick={() => setSlide((s) => Math.min(images.length - 1, s + 1))} disabled={slide === images.length - 1}>›</button>
              </div>
            ) : null}
          </div>
        ) : null}
        <div className="li-stats"><span>Preview</span><span>{carousel ? `Document · ${images.length} pages` : "0 comments"}</span></div>
        <div className="li-actions"><span>Like</span><span>Comment</span><span>Repost</span><span>Send</span></div>
      </article>
      {pdf ? <a className="btn sm" href={pdf} target="_blank">Open carousel PDF</a> : null}
    </div>
  );
}

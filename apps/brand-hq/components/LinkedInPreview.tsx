"use client";
import { useState } from "react";

export default function LinkedInPreview({
  text, date, time, visual, style,
}: { text: string; date: string; time: string; visual: string; style: string }) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [more, setMore] = useState(false);
  const long = text.length > 210 && !more;
  const shown = long ? text.slice(0, text.lastIndexOf(" ", 200)) : text;
  const violet = /violet/i.test(style);
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div className="seg">
        <button aria-pressed={device === "desktop"} onClick={() => setDevice("desktop")}>Desktop</button>
        <button aria-pressed={device === "mobile"} onClick={() => setDevice("mobile")}>Mobile</button>
      </div>
      <article className={`li ${device}`}>
        <div className="li-head">
          <div className="li-av" style={{ background: "#16151c" }}>IE</div>
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
        {visual ? (
          violet ? (
            <div className="vi" style={{ aspectRatio: "auto" }}>
              <div className="vi-hero"><div className="vi-eye">Visual brief · violet editorial</div><h4 style={{ fontSize: 17 }}>{visual}</h4></div>
            </div>
          ) : (
            <div className="hd" style={{ aspectRatio: "auto" }}>
              <div className="hd-card"><span className="hd-tab">{/screenshot/i.test(style) ? "Screenshot" : "Visual brief"}</span><div style={{ fontSize: 14, color: "#3a3d48" }}>{visual}</div></div>
            </div>
          )
        ) : null}
        <div className="li-stats"><span>Preview</span><span>0 comments</span></div>
        <div className="li-actions"><span>Like</span><span>Comment</span><span>Repost</span><span>Send</span></div>
      </article>
    </div>
  );
}

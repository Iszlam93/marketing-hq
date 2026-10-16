import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import { getPosts, NEEDS_YOU } from "@/lib/posts";
import { storeMode } from "@/lib/store";

export const metadata: Metadata = { title: "Brand HQ", description: "Islam's LinkedIn personal brand team" };
export const dynamic = "force-dynamic";

const themeBoot = `(function(){var t=null;try{t=localStorage.getItem('bhq-theme')}catch(e){}if(!t){t=(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'}document.documentElement.setAttribute('data-theme',t)})();`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let pending = 0;
  try {
    pending = (await getPosts()).filter((p) => NEEDS_YOU.includes(p.status)).length;
  } catch {
    pending = 0;
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Caveat:wght@600;700&family=IBM+Plex+Sans:wght@400;600;700&family=IBM+Plex+Mono:wght@500;600&family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body>
        <div className="app">
          <aside className="side">
            <div className="logo">
              <div className="logo-mark bh">IE</div>
              <div>
                <b>Brand HQ</b>
                <span>LinkedIn personal brand team</span>
              </div>
            </div>
            <Nav pending={pending} />
            <div className="side-foot">
              Live data from GitHub{storeMode === "local" ? " (local mode)" : ""}. Agents run hourly, 07:00–22:00.
            </div>
          </aside>
          <main className="main">
            <div className="topbar" style={{ justifyContent: "flex-end", marginBottom: 6 }}>
              <div className="top-right">
                <span className="live">
                  <i></i>Live
                </span>
                <ThemeToggle />
              </div>
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

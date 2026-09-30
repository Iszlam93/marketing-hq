# AI Marketing Team + Campaign Command Center

## Context
The project folder is empty; this is a new build. The goal is an AI marketing team: an **Orchestrator that is the team's CMO** (it owns strategy, priorities and budget, and reports to Islam as its CEO), with a **Campaign Planner** directly under it, and specialist agents under the Planner (Content, SEO/Competitive, Analyst). The team is run from **one live web app**, where Islam plans and controls campaigns, watches stats update in real time, **sees every proposal as a visual preview** before approving or rejecting it, and adds new data connections over time.

Decisions already made:
- Claude Agent SDK backend
- Runs locally first
- First connectors: HubSpot, LinkedIn, Google Analytics and Google Ads, each with mock data so the app works before any credentials exist
- Four specialist roles

Design rules:
- **Human in the loop, visually.** Agents never publish or spend. They produce drafts, briefs and decision cards, and a person approves them in the app after seeing each one drawn as it will actually appear (post mockups, email frames, timelines, charts).
- **Connectors are plug-ins.** A new source means one new file that implements a shared interface. The app itself doesn't change.
- **Live by default.** Every change (new metrics, an agent step, a new decision) is pushed to the browser over a WebSocket.

## Architecture
```
apps/web     Next.js 15 (App Router) + Tailwind + shadcn/ui + Recharts   → localhost:3000
apps/server  Fastify + Socket.IO + Claude Agent SDK + scheduler          → localhost:4000
packages/core  shared types, zod schemas, Drizzle DB schema (SQLite → Postgres later)
```
- The monorepo uses pnpm workspaces with TypeScript throughout.
- The database is SQLite (`data/marketing.db`) through Drizzle ORM. Moving to Postgres later is a config change.
- The event bus is an in-process EventEmitter, relayed to browsers by Socket.IO. Channels: `metrics:update`, `run:step`, `decision:new`, `campaign:update`.

## Data model (packages/core/src/db/schema.ts)
- `playbooks`: id, type, name, phases, taskTemplates, defaultChannels, kpis (JSON). Seeded from `packages/core/src/playbooks/`.
- `tasks`: id, campaignId, phase, title, assignedAgent, deliverableType, dueDate, dependsOn, status. These are created from the playbook and drive the timeline and board.
- `campaigns`: id, name, **type (playbook id)**, goal, status (draft/planned/live/paused/done), budget, start/end dates, channels, brief (JSON)
- `assets`: id, campaignId, type (blog/social/email/landing/ad), channel, title, body, status (draft/in_review/approved/published), createdBy (agent or user)
- `metrics`: time series with source, metric, value, ts, campaignId?, dimensions (JSON)
- `connections`: connectorId, status, encrypted config, lastSyncAt, syncIntervalSec
- `agent_runs` and `run_steps`: task, agent, status, tokens and cost, streamed steps (thinking, tool call, result)
- `decisions`: the approval queue. Fields: title, rationale, proposedAction (JSON), agent, status (pending/approved/rejected), campaignId
- `brand`: voice, pillars, banned terms, ICP. Every content agent reads this.
- `strategy`: the CMO's working memory. Annual and quarterly objectives, OKRs, total budget and allocations, positioning, priorities, and a decision log (what it decided and why).
- `briefings`: CMO executive briefings (daily/weekly), with wins, risks, decisions needed and recommendations

## Connector plug-in system (apps/server/src/connectors/)
- `types.ts`: `interface Connector { id; name; icon; configSchema (zod); testConnection(cfg); sync(cfg, since): MetricPoint[]; actions?: Record<string, ConnectorAction> }`
- `registry.ts`: finds every connector automatically, so adding a file registers it
- `mock/` holds a realistic data generator for each source (trends, weekday seasonality, noise, campaign lift). It is used when a connection has no credentials:
  - `hubspot.ts`: contacts, MQLs, email opens/clicks, deals
  - `linkedin.ts`: impressions, engagement, followers, ad spend/CTR
  - `google-analytics.ts`: sessions, users, conversions, top pages
  - `google-ads.ts`: spend, clicks, CPC, conversions, ROAS
- Real implementations go in the same files behind the same interface: the HubSpot private-app token, LinkedIn Marketing API OAuth, GA4 Data API and Google Ads API. Real APIs are phase 3.
- `scheduler.ts` runs each active connection on its own interval, writes to `metrics`, and emits `metrics:update`.

## Agent team (apps/server/src/agents/)
Hierarchy: **Orchestrator → Campaign Planner → specialists**
```
You (web app)
  └─ CMO / Orchestrator (claude-opus-5-5): owns marketing strategy, priorities and the total budget; runs the team; reports to you
       └─ Campaign Planner (claude-opus-5-5): turns each goal into a campaign plan, splits it into tasks, assigns and reviews specialist work
            ├─ Content & Copy (claude-sonnet-5)
            ├─ SEO & Competitive (claude-sonnet-5)
            └─ Analyst (claude-sonnet-5)
```
- `cmo.ts` (**the Orchestrator is the CMO**): calls `query()` from `@anthropic-ai/claude-agent-sdk`. Its system prompt makes it act and reason as the team's Chief Marketing Officer, not just a router. It:
  - **Owns strategy.** Keeps the marketing strategy, quarterly objectives and OKRs, positioning and ICP (stored in `strategy`) up to date, and checks every request against them.
  - **Manages the portfolio.** Sees all campaigns together, sets priorities, flags overlap or gaps (e.g. two launches in the same week, no top-of-funnel activity), and decides what is worth doing.
  - **Owns the budget.** Splits the total marketing budget across campaigns and channels. It approves the Planner's budget requests or pushes back, and moves money based on Analyst findings.
  - **Delegates.** Anything about a campaign goes to the Campaign Planner with a clear mandate (goal, budget cap, deadline, priority). Quick questions go straight to a specialist ("how are we doing?" goes to the Analyst).
  - **Reviews quality.** It is the final reviewer before anything reaches you: strategic fit, brand, whether the numbers make sense. Weak work goes back to the team.
  - **Reports to you as its CEO.** It writes a short executive briefing (wins, risks, decisions needed, recommendations with its point of view) and escalates only what needs your call.
  - **Pushes back.** It tells you when a request conflicts with strategy or budget and offers an alternative, instead of just carrying it out.
- **Campaign type comes first.** The Planner's first step is to pick the campaign type, either from your choice in the New Campaign wizard or inferred from your request and confirmed with you. It then loads that type's **playbook**, and the playbook drives everything after it.

### Campaign playbooks (packages/core/src/playbooks/*.ts)
Each playbook defines: phases, task templates (which specialist, which deliverable, relative due date, dependencies), required assets, default channels and budget split, KPIs and benchmarks, and approval checkpoints.

| Type | Phases → signature tasks | Key KPIs |
|---|---|---|
| **Product Launch** | Pre-launch (positioning, messaging house, teaser posts, waitlist page, press kit) → Launch day (announcement blog, press release, email blast, LinkedIn/ads burst) → Post-launch (case study, nurture, retargeting, results report) | Sign-ups, demos, pipeline, share of voice |
| **Webinar / Event** | Setup (landing page, speaker brief) → Promotion (3-email invite sequence, social countdown, partner promo) → Live (reminders, run-of-show) → Follow-up (recording email, attendee vs. no-show nurture, clips) | Registrations, show-up rate, post-event MQLs |
| **Lead Gen / Demand Gen** | Offer (gated asset, landing page) → Paid and organic distribution (ads, posts, SEO) → Nurture → Handoff to sales | Leads, CPL, MQL→SQL |
| **Nurture / Email sequence** | Segment → sequence map with branches → copy → A/B tests | Open, click, conversion, unsubscribe |
| **Brand / Awareness** | Narrative → content series → thought leadership → paid reach | Reach, engagement, followers, branded search |
| **Partner / Co-marketing** | Joint value prop → co-branded assets → partner enablement kit → joint webinar or offer | Partner-sourced leads, partner engagement |
| **Re-engagement / Win-back** | Dormant segment → win-back offer → 3-touch sequence → sunset rule | Reactivation rate |
| **Content / SEO program** | Keyword cluster → editorial calendar → pillar and cluster posts → refresh cycle | Organic sessions, rankings, conversions |

- Playbooks are **data, not code**, so you can edit them or add new types later in `/settings/playbooks` (stored in the `playbooks` table, with the files above as defaults).
- The Planner can adapt a playbook: add, remove or re-time tasks to fit the budget and dates. Its changes to the playbook are shown in the plan preview.

- `campaign-planner.ts`: once the type is set, builds the campaign brief (objective, audience, messaging, channel mix, budget split, week-by-week calendar, KPIs) as **structured JSON** so the UI can draw it. It then sends tasks to the specialists and checks their output against the brief before anything goes up for approval.
- Specialists, one file each with a prompt and allowed tools:
  - `content.ts`: channel-specific copy, then a brand-review pass against the `brand` table. Output is structured per channel (post text, image prompt/alt, CTA, subject line and so on) so it can be previewed.
  - `seo.ts`: keyword ideas, content gaps, competitor briefs (web search tool)
  - `analyst.ts`: reads metrics, finds anomalies and trends, proposes decisions with a before/after projection ("shift €X from LinkedIn to Search")
- `tools.ts`: an in-process MCP server built with `createSdkMcpServer` and `tool()`. Tools: `get_metrics`, `list_campaigns`, `get_campaign`, `create_campaign_draft`, `save_asset`, `propose_decision`, `get_brand`. There is no tool that publishes or spends; those steps happen only after approval in the UI.
- `runner.ts`: wraps each run. It streams SDK messages into `run_steps`, emits `run:step`, and tracks tokens and cost.
- Triggers:
  - A chat message to the orchestrator from the UI
  - A button on a campaign ("Plan this", "Write assets", "Analyze")
  - A scheduled daily analyst sweep that creates decision cards
- `ANTHROPIC_API_KEY` goes in `apps/server/.env`.

## Web app (apps/web/app/)
- `/` **Command Center**: a **CMO briefing** card at the top (a one-paragraph executive summary plus "needs your call" items), then KPI tiles (spend, leads, CTR, CPL, ROAS) with sparklines, a live activity feed, the pending decisions queue (approve/reject), and active campaigns
- `/campaigns/new` **New Campaign wizard**:
  1. Pick a campaign type from cards (Launch, Webinar, Lead Gen and so on)
  2. Goal, budget, dates, audience
  3. Preview the playbook's phases and tasks
  4. "Send to Planner"
- `/campaigns` and `/campaigns/[id]`: list and board views, with phases and tasks from the playbook. The detail page has the brief, a timeline/calendar, assets with inline edit and approve, performance charts filtered to the campaign, and agent action buttons
- `/team`: a **live org chart** (Orchestrator → Planner → specialists, drawn with React Flow). Nodes light up as each agent works, and lines animate as tasks are handed off. Also an orchestrator chat panel and a run history with a live, step-by-step transcript.
- `/review` **Visual Review Room**: every item waiting for approval opens as a visual preview, never raw text (see below)
- `/content`: asset library, filterable by channel and status
- `/analytics`: charts per source and across sources, with a date range and comparison
- `/connections`: connector catalog from the registry (add, configure through a form built from `configSchema`, test, sync now, status and last sync)
- `/settings`: brand voice, ICP, budgets, model choices

### Visual previews before approval (apps/web/components/previews/)
Every approvable item is drawn the way it will actually look. It can be approved, rejected, edited inline, or sent back with a comment; comments go back to the agent that made it.
- **Campaign plan**:
  - Visual brief card (goal, audience, key message)
  - Gantt/calendar timeline of every asset and flight
  - Budget split donut by channel
  - Funnel with projected KPIs
  - Channel map
- **LinkedIn / social post**: pixel-accurate post mockup (avatar, text with "see more" fold, image, reactions bar), with desktop and mobile views
- **Email**: inbox row (sender, subject, preheader) plus the rendered email in a desktop/mobile frame
- **Landing page**: live rendered page in a browser frame, with a viewport toggle
- **Ads (Google Search, LinkedIn Ads)**: ad-unit mockups with character-limit checks
- **Blog**: rendered article with SEO panel (keyword, meta title and description, SERP snippet preview)
- **Analyst decision**: current vs. projected chart, the evidence, and the expected impact, before you approve the change
- **Images**: first as placeholder frames with the agent's image prompt. Later, generated or designed through Canva/Figma connectors.

Each preview component takes the agent's structured JSON output, so a new asset type means a new schema in `packages/core` plus a preview component.

- The client uses one `useLiveSocket()` hook (Socket.IO) together with TanStack Query, so live events update the cached data in place.
- The `dataviz` skill guides the charts.

## Wireframes (key screens)

**1. Command Center (`/`)**
```
┌──────────┬──────────────────────────────────────────────────────────────────┐
│ ◆ MKT HQ │  Command Center                         ● Live   Last 30 days ▾  │
│          ├──────────┬──────────┬──────────┬──────────┬──────────────────────┤
│          │ 🧭 CMO briefing: Leads +12% WoW, driven by Search. LinkedIn CPL  │
│          │ is rising, so I recommend shifting €800. Q4 Launch plan is ready │
│          │ for your review. Needs your call: 2 items →                      │
│          ├──────────┬──────────┬──────────┬──────────┬──────────────────────┤
│ Command  │ Spend    │ Leads    │ CTR      │ CPL      │ ROAS                 │
│ Campaigns│ €12.4k   │ 842 ▲12% │ 2.9% ▲   │ €14.7 ▼  │ 3.4x ▲               │
│ Review(3)│ ╱╲╱‾╲╱   │ ╱‾╱╲╱‾   │ ‾╲╱‾╲╱   │ ╲╱╲_╱    │ ╱╱‾╲╱‾               │
│ Team     ├──────────┴──────────┴──────────┼─────────────────────────────────┤
│ Content  │ Performance by channel         │ ⚑ Decisions waiting (3)         │
│ Analytics│  ▇▇▇▇▇▇▇ LinkedIn              │ ┌─────────────────────────────┐ │
│ Connect  │  ▇▇▇▇▇ Google Ads              │ │ Analyst: move €800 LinkedIn │ │
│ Settings │  ▇▇▇▇ HubSpot email            │ │ → Search (+18% leads proj.) │ │
│          │  ▇▇ Organic (GA4)              │ │ [Preview] [✓ Approve] [✕]   │ │
│          ├────────────────────────────────┤ └─────────────────────────────┘ │
│          │ Live activity                  │ Planner: Q4 Launch plan ready   │
│          │ 14:02 Content drafted 4 posts  │ Content: 4 LinkedIn posts ready │
│          │ 14:01 HubSpot sync +23 contacts│                                 │
└──────────┴────────────────────────────────┴─────────────────────────────────┘
```

**2. Team (`/team`): live org chart + chat**
```
                    ┌──────────────────┐
                    │ 🧭 CMO           │  ● working
                    │ (Orchestrator)   │
                    └────────┬─────────┘
                             │ "Plan Q4 launch"
                    ┌────────▼─────────┐
                    │ 🗺 Campaign      │  ● working
                    │    Planner       │
                    └──┬──────┬──────┬─┘
            ┌──────────▼┐ ┌───▼─────┐ ┌▼──────────┐
            │ ✍ Content │ │ 🔎 SEO  │ │ 📊 Analyst│
            │ ● drafting│ │ ✓ done  │ │ ○ idle    │
            └───────────┘ └─────────┘ └───────────┘
 ┌ Chat with CMO ───────────────────────────────────────────────────┐
 │ You: Launch campaign for the new BC app, €5k, 6 weeks, ISVs      │
 │ CMO: This fits Q4 OKR #1 (ISV pipeline). €5k is 22% of Q4 budget,│
 │ so I'll pause the brand series to fund it. Planner has a Launch  │
 │ mandate: 300 MQLs, €5k cap, go-live W0. Plan in about 2 min.     │
 └──────────────────────────────────────────────────────────────────┘
```

**2b. New Campaign wizard: step 1, pick the type**
```
 New campaign   ① Type ─ ② Goal & budget ─ ③ Playbook preview ─ ④ Send to Planner
┌────────────────┐ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│ 🚀 Product      │ │ 🎤 Webinar /    │ │ 🎯 Lead Gen     │ │ 💌 Nurture      │
│    Launch       │ │    Event        │ │                 │ │    Sequence     │
│ 3 phases·18 tasks│ │ 4 phases·14 tasks│ │ 4 phases·12 tasks│ │ 4 phases·9 tasks │
│ ✓ selected      │ │                 │ │                 │ │                 │
└────────────────┘ └────────────────┘ └────────────────┘ └────────────────┘
┌────────────────┐ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│ 📣 Brand /      │ │ 🤝 Partner /    │ │ 🔁 Re-engage /  │ │ 📚 Content /    │
│    Awareness    │ │    Co-marketing │ │    Win-back     │ │    SEO program  │
└────────────────┘ └────────────────┘ └────────────────┘ └────────────────┘
 Launch playbook: Pre-launch (W-4→W0) ▸ Launch day (W0) ▸ Post-launch (W+1→W+4)
```

**3. Visual Review Room (`/review`): campaign plan (Launch type)**
```
┌ Q4 App Launch · Campaign plan · by Campaign Planner ─── [✓ Approve] [✎] [💬] ┐
│ Goal: 300 MQLs   Audience: ISV partners   Message: "Ship to AppSource faster"│
├──────────────────────────────────────────────┬───────────────────────────────┤
│ Phase        │ PRE-LAUNCH  │LAUNCH│ POST-LAUNCH │ Budget €5,000                 │
│              W-4  W-3  W-2  W-1  W0   W+1  W+2 │      ╭───╮  LinkedIn 45%      │
│ Messaging    ██                                │     │ ◔ │  Search   30%      │
│ Teasers/wait      ████████                     │      ╰───╯  Email    10%      │
│ Press kit              ██                      │             Content  15%      │
│ Announcement                 ◆ blog·PR·email   │ Playbook changes by Planner:  │
│ Ads burst                    ████████          │ + partner teaser (budget ok)  │
│ Case study/nurt                    ██████████  │ − press tour (no budget)      │
├──────────────────────────────────────────────┴───────────────────────────────┤
│ Funnel (projected)  Reach 120k ▸ Clicks 3.6k ▸ Leads 540 ▸ MQL 300 ▸ Opps 45 │
└──────────────────────────────────────────────────────────────────────────────┘
```

**4. Visual Review Room: assets**
```
┌ LinkedIn post (mockup) ───────── [Desktop|Mobile] ┐ ┌ Email ── [Desktop|Mobile] ┐
│ (◯) Your Brand · 1,204 followers                  │ │ Inbox                      │
│ Shipping your BC app to AppSource shouldn't take  │ │ ▸ Your Brand Your app in  │
│ months. Here's how 40 ISVs cut it to weeks… …more │ │   AppSource in 3 weeks – … │
│ ┌───────────────────────────────────────────────┐ │ │┌──────────────────────────┐│
│ │            [ image: prompt shown ]            │ │ ││  Hi {first_name},        ││
│ └───────────────────────────────────────────────┘ │ ││  …        [Book a demo]  ││
│ 👍❤ 0 · Comment · Repost                          │ │└──────────────────────────┘│
│ Brand check ✓ tone  ✓ terms  ⚠ claim needs source │ │ Subject 42/60 ✓            │
│ [✓ Approve] [✎ Edit] [💬 Send back to Content]    │ │ [✓] [✎] [💬]               │
└───────────────────────────────────────────────────┘ └────────────────────────────┘
```

## Build phases
0. **Clickable visual mockup, first**: an HTML prototype of these screens, including the type picker with realistic sample data, published as a private artifact for sign-off. No backend code is written until the look is approved.
1. **Foundation**: monorepo, DB schema and migrations, Fastify and Socket.IO, mock connectors and scheduler, Command Center and Analytics on live mock data, Connections page
2. **Agent team + visual review**: Orchestrator → Campaign Planner → specialists, custom tools, run streaming, live org chart and chat, Visual Review Room with preview components (plan, social, email, landing, ads, blog, decision), approve/reject/comment loop back to agents
3. **Real connectors**: HubSpot first, then GA4, Google Ads and LinkedIn, with encrypted credential storage and OAuth callback routes
4. **Later**: approved actions run through connector `actions` (e.g. schedule a HubSpot email), budget alerts, more connectors, auth, and Postgres plus a cloud deploy

## Verification
- `pnpm install && pnpm dev` starts web on :3000 and server on :4000
- The Command Center's KPI tiles tick up as mock syncs run, with no page refresh
- Enabling or disabling a mock connection on `/connections` makes its metrics appear or stop
- In the wizard, choosing **Product Launch** vs. **Webinar** gives different phases and tasks in the preview. After planning, the campaign board shows the playbook tasks, each assigned to the right specialist.
- "Plan this campaign" lights up Orchestrator → Planner → specialists on the `/team` org chart. The plan appears in `/review` as a timeline, budget donut and funnel. Draft posts appear as LinkedIn mockups and emails in inbox frames. A comment sent back causes a revision; approving updates the status everywhere.
- Unit tests (Vitest) for mock generators and the connector registry; an integration test for a scripted agent run with a stubbed SDK

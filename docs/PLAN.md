# Marketing HQ: plan

## Context
Marketing HQ is an AI marketing team run from one live web app, built so a **product marketing manager** recognises their own work in it. An **AI CMO** orchestrates the team. The work is organised in **three layers**, the way product marketing actually runs:

1. **Foundations:** positioning, ICP and personas, the buying committee (DMU), the competitive landscape and research interviews. This is the **source of truth**. It's versioned and changes only when evidence or a release justifies it.
2. **Materials:** sales enablement, partner enablement and customer proof, all built from the approved foundations.
3. **Go-to-market & campaigns:** launches (with tiers and cross-team readiness) and campaigns from playbooks.

Results, win/loss and new insights flow back into Foundations. When the foundations change, every asset built on the old version is flagged as out of date.

Design rules:
- **Human in the loop, visually.** Agents never publish or spend. Every proposal is reviewed the way it will actually look (battlecard, one-pager, post, diff of a foundations change) and approved by a person.
- **Foundations are the source of truth.** Every material and campaign records which foundation sections and which version it was built from.
- **Connectors are plug-ins.** A new data source is one new file behind a shared interface.
- **Live by default.** New data, agent steps and decisions are pushed to the browser over a WebSocket.
- **Day and night.** The app has a light and a dark theme, switchable from the top bar.

What PMMs need, and what the app answers:

| PMM need or pain | Where the app answers it |
|---|---|
| Positioning and messaging everyone uses | Foundations library, versioned, with a messaging house |
| Insight scattered across calls, reviews, CRM | Research Interviews and Analyst agents; Gong, G2 and Salesforce connectors |
| Battlecards and decks that go stale | Source links and automatic "out of date" flags |
| Proving impact | Win rate, competitive win rate, pipeline influenced, adoption, enablement usage |
| Launch chaos | Launch tiers, launch calendar, readiness board for each team |
| Getting Sales to use content | Highspot usage data in the Materials library |

## Architecture
```
apps/web     Next.js 15 (App Router) + Tailwind + shadcn/ui + Recharts   → localhost:3000
apps/server  Fastify + Socket.IO + Claude Agent SDK + scheduler          → localhost:4000
packages/core  shared types, zod schemas, Drizzle DB schema, playbooks
```
- pnpm workspaces, TypeScript throughout.
- SQLite (`data/marketing.db`) through Drizzle ORM; Postgres later through config.
- Event bus: an in-process EventEmitter relayed by Socket.IO. Channels: `metrics:update`, `run:step`, `review:new`, `foundations:version`, `material:stale`.

## Agent team (apps/server/src/agents/)
```
                              CMO  (claude-opus-5-5)
            strategy · priorities · budget · final review · reports to you
                     + Analyst (measures all three layers, reports to CMO)
                               │
 1  FOUNDATIONS lead   Positioning & Messaging · ICP & DMU · Competitive Landscape
                       · Research Interviews (discovery, win/loss, churn)
                               │  built from the approved version
 2  MATERIALS lead     Sales Enablement · Partner Enablement · Customer Proof
                       (case studies, testimonial and partner interviews)
                               │
 3  GO-TO-MARKET lead  Launches (tier, release date, readiness) · Campaigns
                       · Content & Copy · SEO
     ↺ results and insights go back to Foundations; content built on old versions is flagged
```
- **CMO** (`cmo.ts`, Opus): acts as Chief Marketing Officer, not a router.
  - Owns strategy and budget.
  - Sets priorities across all launches and campaigns.
  - Delegates each piece of work to the right layer lead with a clear mandate.
  - Does the final review before anything reaches you.
  - Pushes back when a request conflicts with strategy or budget.
  - Writes an executive briefing.
- **Analyst** (Sonnet) sits beside the CMO. It covers win rate, competitive win rate, pipeline influenced, adoption, message tests and campaign results, and it proposes changes backed by evidence.
- **Layer leads** (Opus): each lead plans the work in its layer, assigns its specialists, and checks their output against the foundations.
- **Specialists** (Sonnet): one file each, with a prompt and allowed tools.
- **Phased build:** Phase 2 starts with the CMO, Analyst, the three leads, and Positioning, Sales Enablement and Content. The other specialists follow.
- `tools.ts` is an in-process MCP server built with `createSdkMcpServer`. Tools:
  - `get_foundations(version?)`, `propose_foundation_change`
  - `get_feature_catalog`, `add_feature`
  - `list_materials`, `save_material`
  - `get_metrics`, `create_launch`, `create_campaign`
  - `propose_decision`

  No tool publishes or spends.
- `runner.ts` streams SDK messages into `run_steps`, emits `run:step`, and tracks tokens and cost.

## Foundations: stable, versioned, updated by releases
- **Documents:**
  - positioning (Dunford-style: alternatives, unique attributes, value, target customers, category)
  - messaging house (umbrella and pillars with proof points)
  - ICP
  - personas
  - DMU map (roles, influence, what each needs)
  - competitive landscape
  - **feature catalog** (value prop, personas, differentiator, status, release date)
- **Versions:** every approved change creates an immutable snapshot (`v2.0`, `v2.1`, `v3.0`) with what changed, why (which release or insight), who approved it and when. Any two versions can be compared, and you can roll back.
- **Release impact check.** On each new release, the Foundations lead classifies the impact:

| Impact | Example | Result | Approval |
|---|---|---|---|
| None | Bug fixes, dark mode | Added to the feature catalog only | Automatic |
| Messaging | Feature adds a value or proof point | Minor version (v2.0 → v2.1) | You |
| Positioning | New segment, category or competitive shift | Major version (v2 → v3) | CMO, then you |

- **Changes arrive as a diff** in the Review Room, with old and new side by side. You can approve, edit or reject them. You can also edit the foundations directly, which saves a new version.
- **Scoped staleness:** each material stores the foundation sections it was built from. A change flags only the materials that use the changed sections.
- **Storage:** database tables, plus every approved version exported as Markdown to `foundations/` in the Git repo (a second copy with history). Notion sync comes later.

## Go-to-market playbooks (packages/core/src/playbooks/)
Each playbook has phases, task templates (specialist from any layer, deliverable, relative date, dependencies), KPIs, channels and approval checkpoints. Playbooks are data, editable in the app.

| Type | Signature tasks | KPIs |
|---|---|---|
| **T1 launch** | Foundations check → launch messaging, battlecard update, sales training, deck → announcement, PR, email, ads → adoption push, results report | Pipeline, adoption, win rate |
| **T2 launch** | Feature messaging, enablement brief, release blog, in-app and email | Adoption |
| **Competitive response** | Competitor move analysis → battlecard refresh → objection handling → targeted campaign | Competitive win rate |
| **New segment / ICP** | Research interviews → ICP and persona update → messaging → pilot campaign | Pipeline in segment |
| **Pricing & packaging change** | Positioning check → pricing page, sales guidance, FAQ → customer comms | Conversion, churn |
| **Feature adoption** | Usage analysis → in-app guides, emails, webinar | Feature adoption |
| **Webinar / event** | Landing page, invite sequence, run of show, follow-up | Registrations, MQLs |
| **Demand gen** | Offer, landing page, ads, nurture, handoff | Leads, cost per lead |

Launches also get a **readiness board** covering Product, Sales, CS, Marketing, Web, Pricing and Legal. Each team is red, amber or green, with checklist items.

## Data model (packages/core/src/db/schema.ts)
- `foundation_docs` (type, current version), `foundation_versions` (immutable snapshot JSON, changelog, reason, approvedBy, approvedAt)
- `features` (name, valueProp, personas, differentiator, status, releaseDate, impact)
- `change_requests` (release or insight → proposed diff, impact level, status)
- `materials` (type, title, body JSON, builtFrom sections and version, status: current, out of date or update proposed, usage)
- `launches` (product or feature, tier, releaseDate, readiness JSON), `campaigns` (playbook, goal, budget, status), `tasks` (layer, agent, deliverable, due, dependsOn, status)
- `playbooks`, `metrics`, `connections`, `agent_runs`, `run_steps`, `review_items`, `briefings`

## Connectors (apps/server/src/connectors/)
- **Shared interface:** `id`, `configSchema`, `testConnection`, `sync(since)`, optional `actions`. A registry finds connectors automatically, and each one has mock data until real credentials are added.
- **Initial set:**
  - Salesforce (pipeline, win rate)
  - HubSpot (marketing)
  - Gong (call insights)
  - G2 (reviews)
  - Jira or Productboard (release dates, which feed the release impact check)
  - Amplitude (feature adoption)
  - Highspot (enablement usage)
  - LinkedIn and GA4 (channels)

## Web app (apps/web/app/)
- **Top bar:** live status, a **Day/Night switch** (remembered per browser, defaulting to the system setting).
- `/` **Command Center**:
  - CMO briefing
  - KPIs: win rate, competitive win rate, pipeline influenced, adoption, enablement usage, launch readiness
  - win rate by competitor
  - foundations status
  - upcoming launches
  - decisions waiting
  - live activity
- `/review` **Review Room**: visual previews of foundations diffs, launch plans (GTM canvas, timeline, readiness), battlecards, one-pagers, social posts and message tests. You can approve, edit, reject or send back with a comment.
- `/team` **Team & CMO**: org chart of the three layers with live status, a CMO chat and the run transcript.
- `/foundations`: tabs for Positioning, ICP & personas, Buying committee, Competitive, Feature catalog and History. It also has a **New release** flow with an impact check, plus direct editing that saves a version.
- `/materials`: library of assets, showing what each was built from, its version, status and usage, with out-of-date flags.
- `/gtm`: launch calendar, launches with readiness boards, campaigns, and a **New launch or campaign** wizard (choose a playbook, set the goal, preview, send to the CMO).
- `/connections`: connector catalog with status and sync.

The clickable reference for all screens is `prototype/index.html`.

## Build phases
0. **Clickable prototype** ✅ (PMM edition, three layers, Day/Night)
1. **Foundation:** monorepo, DB schema and migrations, Fastify and Socket.IO, mock connectors and scheduler, Command Center and Connections on live mock data, Foundations library with versioning
2. **Agent team + visual review:** CMO, Analyst, layer leads, first specialists, run streaming, org chart and chat, Review Room previews, release impact check, scoped staleness
3. **Real connectors:** Salesforce or HubSpot first, then Jira, Gong, Amplitude, Highspot, G2. Encrypted credentials, OAuth routes.
4. **More agents and reach:** remaining specialists, approved actions through connectors, Markdown export of foundations to Git, Notion sync, auth, Postgres and cloud deploy

## Verification
- `pnpm install && pnpm dev` starts web on :3000 and server on :4000.
- KPIs update live as mock syncs run. Pausing a connector stops its data.
- **New release flow:**
  1. Adding "Dark mode" goes to the feature catalog only.
  2. "Deal Risk Scoring" produces a v2.1 diff for approval.
  3. "Board Reporting" produces a v3.0 proposal that needs CMO review.
  4. Approving a change creates a version, and only the materials built on the changed sections are flagged.
- The wizard gives different tasks for each playbook. Sending one lights up the CMO, the right layer lead and the right specialists on the org chart. The plan lands in the Review Room.
- The Day/Night switch flips every screen, and the choice survives a reload.
- Vitest for playbooks, version bumping and staleness scoping. Integration test for a scripted agent run with a stubbed SDK.

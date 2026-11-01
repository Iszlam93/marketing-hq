# Marketing HQ v2: CTO design brief

Owner: CTO (Claude Opus 5.5). Written 29 Oct 2026. Codex (Product Owner) turns this into the PRD and challenges it.

## Why v2
I built slice 1 as a read-only Kimchi walkthrough. Islam rejected it: "This is bad".

What he actually wants is a **PMM version of Brand HQ**. That means a working AI product-marketing team that he runs from one app:
- He makes requests easily, with context and links.
- An **orchestrator** plans each request and hands work to **specialist agents**.
- The agents grow stronger over time because Islam can **add skills** easily.
- **Notion is the office.** Every request, asset, campaign and result lands there.
- The work covers GTM campaigns, many kinds of assets, and business-impact tracking.

## Constraints (fixed)
- **Subscriptions only. No paid APIs.**
  - Agent work runs in Claude Code: cloud routines on the subscription, or local runs.
  - Codex is allowed through the ChatGPT login.
  - The app itself calls no LLM.
- **Same stack as Brand HQ.** Next.js 15, React 19, no UI library, its own CSS, and `lib/store.ts`:
  - local disk in development
  - the GitHub Contents API in production
- I don't enter tokens or passwords for Islam. Today the app has no Notion token.
  - Only the agents, through the Claude Notion connector, read and write Notion.
- The app speaks in the first person "I". No Kimchi or Cast AI branding. Kimchi is only the sample product.
- Humans approve: no asset is final until Islam approves it.

## Architecture

```
Islam ──► App (requests, review, campaigns, impact, team, skills)
             │ writes request / approval / KPI files in the repo (marketing-hq/…)
             ▼
        Orchestrator (Claude Code; hourly routine + "run now" locally)
             │ reads new requests and decisions, plans, delegates
             ├─► Researcher         ┐
             ├─► Positioning lead   │ specialist subagents in .claude/agents/*.md,
             ├─► Content writer     │ each with skills in .claude/skills/<skill>/SKILL.md
             ├─► Enablement lead    │
             ├─► GTM / launch lead  │
             └─► Analyst (impact)   ┘
             │ writes assets to the repo and to Notion, and updates statuses
             ▼
        Notion "Marketing HQ" office: Requests · Assets · Campaigns · Agent runs
```

### Where each kind of data lives
| Data | Where | Why |
|---|---|---|
| Requests (queue and state) | `marketing-hq/requests/<id>.json` | The app can write it with no Notion token, like Brand HQ's requests |
| Assets (deliverables) | `marketing-hq/assets/<id>.md` plus a Notion page | The repo copy gives the app something to review; Notion is the office copy |
| Campaigns and KPIs | `marketing-hq/campaigns/<id>.json` plus a Notion row | Impact tracking |
| Products (context) | `marketing-hq/products/<id>.md` | Agents read it for product truth. Kimchi is the sample product |
| Agents | `.claude/agents/pmm-*.md` | The native Claude Code subagent format. Front matter lists each agent's skills |
| Skills | `.claude/skills/<name>/SKILL.md` | The native skill format. Adding a skill means adding a folder; nothing else changes |
| Agent runs | `marketing-hq/runs.jsonl` plus the Notion Agent runs database | Feeds the Team page |

**Syncing with Notion:**
- The orchestrator mirrors to Notion on every run.
- If Islam changes an asset's status in Notion (Approved or Changes requested), the orchestrator reads that back as well.

### Request lifecycle
`new → planned → in_progress → in_review → (changes_requested → in_progress) → approved → done`

1. **Islam submits a request** with:
   - a type (from a request-type list), a title, a product, a campaign (optional)
   - a brief, links, a due date and a priority
2. **The orchestrator plans the request.** It writes `plan.tasks[]`. Each task is `{agent, skill, title, dependsOn}`.
   - Example, battlecard: Researcher (competitor-research) → Positioning (positioning) → Enablement (battlecard).
3. **The agents run in dependency order.** Each one writes an asset and a log line.
4. **The request goes to review** (`in_review`). Islam approves the asset, or sends it back with a comment, in the app or in Notion.
5. **On approval:** the asset is marked final, and it is linked to its campaign if it has one.

### Request types, first set
Each type maps to a default plan that the orchestrator can adapt:
- GTM / launch plan
- Campaign plan
- Positioning & messaging
- Competitive battlecard
- One-pager / sales asset
- Content piece (blog, LinkedIn, email sequence)
- Customer / market research
- Impact report

### Business impact
- **Each campaign has:**
  - an objective
  - KPIs (name, target, actual, unit, source)
  - a results log
  - linked requests and assets
- **Islam enters KPI actuals in the app.** There are no live connectors in v2, because none are free.
- The Analyst agent writes impact reports on request, and weekly if a routine is set up for it.

### Skills: how they grow
- A skill is a folder with a `SKILL.md` that holds:
  - when to use it
  - inputs
  - the step-by-step method
  - the output template
  - a quality checklist
  - "why a PMM does this", which serves the learning goal
- Agents list their skills in front matter.
- **The app's Skills page** lists every skill and which agents use it. It has an "Add a skill" form that writes a new SKILL.md from a template. That form edits the repo, as Brand HQ's actions do.
- **Seed skills** come from my real Kimchi work:
  - ICP discovery from job ads
  - forum voice-of-customer
  - A/B test design with statistics
  - custom one-pager
  - logic tree
  - competitive research
  - positioning
  - battlecard
  - launch plan
  - campaign plan
  - email sequence
  - impact report

## App screens (proposal)
1. **Home (desk):**
   - a "New request" box at the top
   - what needs my review
   - requests in flight, grouped by status
   - campaign KPIs at a glance
2. **Request detail:** the brief, the orchestrator's plan (tasks, agents, skills, status), the activity log, and the assets with Approve / Send back.
3. **Asset view:** the rendered markdown, its Notion link, Approve or Send back with a comment, and the version.
4. **Campaigns:** a list and a detail page with KPIs (target vs actual, editable actuals) and linked requests and assets.
5. **Team:** the orchestrator and agents (role, skills, model, last runs), plus recent agent activity.
6. **Skills:** the library, which agent uses which skill, the skill's content, and "Add a skill".
7. Optional: **Products** (product context pages).

## Open questions for the Product Owner
1. Is this the right first scope? What would you cut to ship a usable v2 fast?
2. Request intake: what is the minimum form that still gives agents enough context?
3. Is a manual KPI entry enough to say "I track business impact"? What should the minimum impact model be?
4. Should the plan go straight to the agents, or wait for Islam to approve it first?
5. What acceptance tests prove the loop works end to end: request → plan → agents → Notion → review → approved?

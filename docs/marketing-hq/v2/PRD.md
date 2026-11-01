# Marketing HQ v2 — Release 1 PRD

**Owner:** Product Owner  
**Goal:** Give Islam a working product marketing desk: request work, see the agent plan, review assets, approve them, and track campaign results. The repo is the queue and source of state. Agents write the office copy to Notion.

## 1. Verdict and scope decisions

The brief gets the core right: Marketing HQ should work like Brand HQ, with a simple request box, visible agent activity, human review, and repo files that an hourly Claude Code routine can pick up. Keeping LLM calls and the Notion token out of the app is the right boundary.

Change three things for release 1:

- **Make the app the authority for approvals.** Agents mirror status to Notion. Reading approval changes back from Notion creates two competing decision sources; defer that until conflict handling exists.
- **Make agent activity and review version specific.** A run log must identify its request and task; an approval must identify the exact asset version. A revised asset needs a new approval.
- **Keep the screens focused.** Show assets inside Request detail; a separate Asset screen adds navigation without adding a decision. Include a small Products screen because agents need maintained product facts.

Cut automatic weekly impact reports, live data connectors, and in-app agent execution. Release 1 provides an hourly routine and a link or documented command to run it locally.

### Answers to the five open questions

1. **First scope:** ship the request → plan → asset → Notion → review → status loop, plus manual campaign KPIs, team visibility, and skill addition. The cuts above keep that loop usable.
2. **Minimum intake:** required *type, title, product, brief*. Optional *campaign and source links*. Due date and priority sit under “More detail.” Product context supplies standing facts; the brief states the specific ask and audience.
3. **Impact:** manual entry is sufficient for release 1 if every campaign has an objective, a dated outcome KPI with target and actual, a source, and a short results log. Label impact as **reported outcome**, not proven attribution.
4. **Plan approval:** the orchestrator starts agents after planning. Islam reviews deliverables. The plan remains visible, and he can request changes. A second approval gate would slow every routine request.
5. **Acceptance:** use a real request, agent run, and Notion workspace in a release test. Verify the Notion page exists and matches the repo asset before review is offered; verify approval reaches Notion and survives a repeat routine run.

## 2. Release 1 experience

| Screen | Purpose and contents | Actions |
|---|---|---|
| **My desk** | New request form; “Needs my review”; requests by status; campaign outcome KPIs and last update; next orchestrator run. | Submit request; open request or campaign. |
| **Request detail** | Brief and sources; product/campaign links; task plan with agent, skill, dependency and status; activity; rendered asset versions and Notion links; sync errors. | “I approve” or “I want changes” per asset version; send back with required comment. |
| **My campaigns** | Campaign list and detail: objective, period, primary KPI, supporting KPIs, target versus actual, source and as-of date, results log, linked requests/assets. | Create campaign; enter actual and source; add result note; request an impact report. |
| **My team** | Orchestrator and specialist roles, assigned skills, last run and outcome, next scheduled run, recent activity. | Open routine or agent instructions; open affected request. |
| **My skills** | Skill library, method and output template, agent assignments. | Add a skill from a constrained template; select an existing agent to receive it. |
| **My products** | Product facts: description, audience, approved claims, evidence links, claims to avoid, last updated. | Create and edit context. |

**Intake form:** type, title, product and brief are required. Campaign and links are optional. Due date and priority are optional advanced fields. Show an example brief that asks for audience, desired output and decision to support; do not require those as separate fields. Validate links and lengths, and show the saved request immediately as `new`.

**Lifecycle:** `new → planned → in_progress → in_review → approved → done`. A send-back moves the affected task to `changes_requested → in_progress`, increments its asset version and returns it to review. `approved` means Islam approved every current deliverable; `done` means the orchestrator confirmed the approved status on the corresponding Notion pages. A failed Notion write leaves the request in its current state with a visible sync error.

## 3. Request types and default plans

The orchestrator may add or skip tasks when the brief warrants it, but it must record why. Each plan names the agent, skill, output and dependencies before work starts.

| Type | Default agent → skill chain |
|---|---|
| GTM / launch plan | Research → **ICP discovery from job ads**; Strategy → **positioning**, **launch plan** |
| Campaign plan | Strategy → **logic tree**, **campaign plan**, **A/B test design with statistics** |
| Positioning & messaging | Research → **forum voice-of-customer**; Strategy → **positioning** |
| Competitive battlecard | Research → **competitive research**; Strategy → **positioning**; Content → **battlecard** |
| One-pager / sales asset | Strategy → **positioning**; Content → **custom one-pager** |
| Content piece | Strategy → **positioning**; Content → **email sequence** for email, or a content-piece skill for blog/LinkedIn |
| Customer / market research | Research → **ICP discovery from job ads** and/or **forum voice-of-customer** |
| Impact report | Analyst → **impact report** |

The content-piece skill must be seeded alongside the brief’s list so blog and LinkedIn requests have a defined method. Agents cite evidence, distinguish observation from inference, and mark missing facts for Islam instead of inventing them.

## 4. Data contract

Use Brand HQ’s Next.js 15, React 19, CSS and `lib/store.ts` pattern: local repo files in development, GitHub Contents API in production. The authenticated app writes only repo files. It holds no Notion credential and calls no LLM.

| Path | Contract and owner |
|---|---|
| `marketing-hq/requests/<id>.json` | App creates immutable intake fields. Orchestrator owns `status`, `plan.tasks[]`, task state, asset IDs, timestamps and sync state. Each task has stable `id`, `agentId`, `skillIds[]`, `title`, `dependsOn[]`, `outputAssetId` and `status`. |
| `marketing-hq/decisions/<id>.json` | App creates one decision per asset version: `requestId`, `assetId`, `version`, `decision`, `comment`, `decidedAt`. Orchestrator consumes it idempotently. This avoids app and agent editing the same request file for review. |
| `marketing-hq/assets/<id>.md` | Agent owns Markdown with structured metadata: `id`, `requestId`, `taskId`, `title`, `version`, `status`, `notionPageId`, `notionUrl`, `updatedAt`, sources. Asset enters review only after the Notion page is confirmed. |
| `marketing-hq/campaigns/<id>.json` | App owns objective, period, KPI definitions and dated actual entries; agents may add a results summary through a separate result event or report asset. KPI: `name`, `unit`, `target`, optional `baseline`, `actual`, `asOf`, `source`. |
| `marketing-hq/products/<id>.md` | App owns product context. Agents read it; approved claims require evidence. |
| `marketing-hq/runs/<run-id>.json` | Orchestrator writes one record per run, with time, request/task IDs, agent, outcome and error. Replace the proposed shared `runs.jsonl`: concurrent GitHub Contents API appends are fragile. |
| `.claude/agents/pmm-*.md`, `.claude/skills/<slug>/SKILL.md` | Native agent and skill instructions. Adding a skill through the app also updates the selected agent’s skill list; adding a folder alone does **not** assign it. |

The orchestrator creates or updates Notion Request, Asset, Campaign and Agent run pages using its connector. It records Notion IDs in repo metadata and retries failed writes without creating duplicates. Repo status wins on rerun. Notion edits to approval status are outside release 1; the office pages should direct Islam to approve in the app.

## 5. Agent roster and seed skills

| Agent | Job | Seed skills |
|---|---|---|
| **Orchestrator** | Pick up requests and decisions, plan dependencies, delegate, check outputs, mirror state to Notion, report failures. | Request planning and quality checks; Notion sync procedure. |
| **Research** | Gather and qualify customer, segment and competitor evidence. | ICP discovery from job ads; forum voice-of-customer; competitive research. |
| **Strategy** | Turn evidence into the market bet, message, launch and test plan. | Logic tree; positioning; launch plan; campaign plan; A/B test design with statistics. |
| **Content** | Produce reviewable customer-facing and sales assets from approved facts. | Custom one-pager; battlecard; email sequence; content piece. |
| **Analyst** | Interpret manually recorded outcomes, gaps and next decisions. | Impact report. |

Each skill defines when to use it, inputs, method, output template, quality checks and why a PMM does it. The Add skill form writes a validated slug and template, requires an agent assignment, and shows the new assignment on My team. It must not accept arbitrary file paths.

## 6. User stories and acceptance

1. **Request intake:** Given I have a product context, when I submit a valid request, then I see its ID, brief and `new` status on My desk and in its repo file.
2. **Planning:** Given a new request, when the orchestrator runs, then it records a dependency ordered plan with named agents and skills, changes status to `planned`, and creates or updates its Notion Request page.
3. **Production:** Given a planned request, when agents complete tasks, then each deliverable has a repo version, source notes, an accessible Notion Asset page and a run record. The request enters `in_review` only when its pages are confirmed.
4. **Review and revision:** Given a current asset in review, when I send it back with a comment, then the agent sees that decision, produces a higher version and asks for review again; an approval of the older version cannot approve the revision.
5. **Approval and sync:** Given all current assets in review, when I approve them in the app, then the repo records my version-specific decisions. On the next run, the orchestrator marks the assets approved in Notion and the request `done`. Repeating that run creates no duplicate pages or decisions.
6. **Impact:** Given a campaign with a target and source, when I enter a dated actual, then My campaigns shows target versus actual and its as-of date. An impact report uses those values, names the source and does not claim causation from the numbers alone.
7. **Skill growth:** Given an existing agent, when I add and assign a valid skill, then it appears in My skills and My team, and the next agent run can use its instructions.

## 7. Definition of done and non-goals

**Done** means the seven stories pass, including one live end-to-end test with real Notion pages; the app’s review and sync-error states are clear; repo writes withstand a retry or conflicting GitHub update; all user-facing copy uses first person “I”; the interface uses generic product examples and no sample-product branding; and no asset is final without Islam’s approval.

**Non-goals:** paid APIs, app-side LLM calls, app-side Notion access, live CRM or analytics connectors, automatic KPI collection or attribution, approval from Notion, publishing assets to external channels, autonomous approval, weekly report automation, and a separate asset screen.
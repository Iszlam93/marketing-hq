# Marketing HQ v2: data contract (release 1)

Owner: CTO. This contract is binding for the app, the agents and the orchestrator. It implements [PRD.md](PRD.md); where the two differ, this file wins.

All paths are relative to the repo root.
- **In development**, the app reads and writes local disk.
- **In production**, it uses the GitHub Contents API, the same as Brand HQ's `lib/store.ts`.

## Ownership rule
- **The app creates files.** After that, it edits only the files it owns: campaigns, products, skills, and the `skills:` line of an agent file.
- **The orchestrator owns request state, assets and runs.**
- Approvals are separate decision files, so the app and the agents never edit the same file.

## IDs
- The ID format is `[a-z0-9-]`, 3–80 characters, used as the file name.
- **Requests:** `r-YYYYMMDD-<slug>`
- **Assets:** `<requestId>--<taskId>`, for example `r-20261029-copilot-battlecard--t3`
- **Campaigns:** `c-<slug>`
- **Products:** `<slug>`
- **Runs:** `run-YYYYMMDDTHHMMSS-<agentId>-<rand4>`

## Request: `marketing-hq/requests/<id>.json`
```ts
type RequestType = "auto" | "gtm-launch" | "campaign-plan" | "positioning" | "battlecard" | "one-pager" | "content-piece" | "research" | "impact-report";
type RequestStatus = "new" | "planned" | "in_progress" | "in_review" | "approved" | "done" | "blocked";
type TaskStatus = "pending" | "in_progress" | "in_review" | "changes_requested" | "approved" | "blocked" | "skipped";

type Task = {
  id: string;                 // "t1", "t2", …
  agentId: "research" | "strategy" | "content" | "analyst";
  skillIds: string[];         // folder names under .claude/skills/
  title: string;
  dependsOn: string[];        // task ids
  outputAssetId: string | null;
  status: TaskStatus;
  note?: string;              // why it was added, skipped or blocked
};

type Request = {
  // intake: the app writes these once, and they never change
  id: string; type: RequestType; title: string; productId: string; brief: string;
  campaignId?: string; links: { label: string; href: string }[];
  due?: string;               // YYYY-MM-DD
  priority?: "low" | "normal" | "high";
  createdAt: string;          // ISO
  // state: owned by the orchestrator
  status: RequestStatus;
  plan: { createdAt: string; rationale: string; chosenType?: Exclude<RequestType, "auto">; tasks: Task[] } | null;  // chosenType set only when type is "auto"
  notion: { pageId: string; url: string; syncedAt: string } | null;
  syncError?: string;         // shown in the app when set
  updatedAt: string;
};
```

### Request type labels
| type | label |
|---|---|
| gtm-launch | GTM / launch plan |
| campaign-plan | Campaign plan |
| positioning | Positioning & messaging |
| battlecard | Competitive battlecard |
| one-pager | One-pager / sales asset |
| content-piece | Content piece |
| research | Customer / market research |
| impact-report | Impact report |

These labels are exactly the Notion "Type" options.

## Asset: `marketing-hq/assets/<id>.md`
The asset file holds the current version. When a revision replaces it, the orchestrator copies the previous version to `marketing-hq/assets/history/<id>--v<N>.md` first.

Front matter is simple `key: value` lines, the same parser as Brand HQ posts:
```
---
id: r-20261029-copilot-battlecard--t3
requestId: r-20261029-copilot-battlecard
taskId: t3
title: Battlecard: … vs …
agentId: content
skillIds: battlecard, positioning
version: 1
status: in_review          # draft | in_review | changes_requested | approved
notionPageId: …
notionUrl: https://app.notion.com/p/…
updatedAt: 2026-10-29T14:00:00Z
---
<the asset in Markdown>

## Sources
- …
```

**Rules:**
- An asset enters `in_review` only after its Notion page exists and the body matches.
- An agent marks every missing fact `**[add: …]**`. It never invents one.

## Decision: `marketing-hq/decisions/<assetId>--v<version>.json`
Only the app writes decision files, one per asset version.
```ts
type Decision = { requestId: string; assetId: string; version: number; decision: "approve" | "changes"; comment: string; decidedAt: string };
```
- `comment` is required when `decision` is `"changes"`.
- **The app must refuse to write a decision** if:
  - the asset's current `version` differs from the version being decided, or
  - its status is not `in_review`.
- The orchestrator never edits decision files. It applies each one once, and that is idempotent, because it looks at the asset's status for that version.

## Campaign: `marketing-hq/campaigns/<id>.json` (owned by the app)
```ts
type KpiEntry = { asOf: string; actual: number; source: string; note?: string };
type Kpi = { id: string; name: string; unit: string; target: number; baseline?: number; primary: boolean; entries: KpiEntry[] };
type Campaign = {
  id: string; name: string; productId: string; objective: string;
  period: { start: string; end: string };
  status: "planned" | "live" | "done";
  kpis: Kpi[];                         // exactly one has primary: true
  results: { date: string; note: string }[];
  createdAt: string; updatedAt: string;
};
```
- The "actual" of a KPI is its newest entry by `asOf`.
- **The UI calls this a "reported outcome".** It never claims attribution.
- The orchestrator mirrors each campaign to Notion and keeps the Notion IDs in `marketing-hq/state/notion-campaigns.json`.
- The orchestrator never edits campaign files. Requests link to a campaign through `campaignId`.

## Product: `marketing-hq/products/<id>.md` (owned by the app)
Front matter: `id`, `name`, `updated`.

Sections, in this order:
- `## Description`
- `## Audience`
- `## Approved claims`: each one is a bullet with its evidence, as `— source: …`
- `## Claims to avoid`
- `## Evidence links`

## Run: `marketing-hq/runs/<runId>.json` (written by the orchestrator)
```ts
type Run = { id: string; agentId: "orchestrator" | "research" | "strategy" | "content" | "analyst"; trigger: "schedule" | "local";
  startedAt: string; endedAt: string; requestId?: string; taskId?: string; outcome: "ok" | "error" | "skipped"; summary: string; error?: string };
```
- One file per orchestrator pass.
- One file per specialist task execution.

## Agents and skills
**Agents** live in `.claude/agents/pmm-<agentId>.md`, as native Claude Code subagents.
- The agent IDs are `orchestrator`, `research`, `strategy`, `content` and `analyst`.
- Front matter: `name: pmm-<agentId>`, `description`, `model`, `skills: a, b, c` (comma-separated, on one line, because the app edits this line), and `tools`.

**Skills** live in `.claude/skills/<skillId>/SKILL.md`.
- Front matter: `name: <skillId>`, `description`.
- The body has these sections, in this order:
  - `## When to use`
  - `## Inputs`
  - `## Method`
  - `## Output template`
  - `## Quality checks`
  - `## Why a PMM does this`

**Skill IDs (seed):**
- request-planning, notion-sync
- icp-discovery-job-ads, forum-voice-of-customer, competitive-research
- logic-tree, positioning, launch-plan, campaign-plan, ab-test-design
- custom-one-pager, battlecard, email-sequence, content-piece
- impact-report

**When the app adds a skill**, it:
1. validates the ID against `^[a-z0-9][a-z0-9-]{2,40}$` and refuses an ID that already exists
2. writes the SKILL.md from the template
3. appends the skill ID to exactly one existing agent's `skills:` line

## Default plans (orchestrator)
| type | tasks (agent → skills) |
|---|---|
| gtm-launch | research → icp-discovery-job-ads; strategy → positioning; strategy → launch-plan |
| campaign-plan | strategy → logic-tree; strategy → campaign-plan, ab-test-design |
| positioning | research → forum-voice-of-customer; strategy → positioning |
| battlecard | research → competitive-research; strategy → positioning; content → battlecard |
| one-pager | strategy → positioning; content → custom-one-pager |
| content-piece | strategy → positioning; content → content-piece or email-sequence |
| research | research → icp-discovery-job-ads and/or forum-voice-of-customer |
| impact-report | analyst → impact-report |

**Rules for adapting the plan:**
- The orchestrator may add tasks or skip them.
- It must record why in `plan.rationale` or in the task's `note`.
- **Every task produces exactly one asset.** For example, a battlecard request ends with 3 assets: research notes, positioning, and the battlecard.

## Notion office
The parent page is "Marketing HQ": https://app.notion.com/p/407265ea4dd8819e9d65fb5b3cec46e5

| Database | Data source | Key |
|---|---|---|
| Requests | `collection://6fc50b54-52df-4f29-8cfa-38e2230c5cbd` | Request ID |
| Assets | `collection://4276fb4d-e2cd-4ecf-90e0-43f04d2401aa` | Asset ID (Request is a relation; Skills is text, so new skills never need a schema change) |
| Campaigns | `collection://fd0952ef-e881-4e86-9f32-f724a5d9c692` | Campaign ID |
| Agent runs | `collection://135ee071-27c9-499d-aaf5-361ca427f392` | Run ID |

- **Repo status wins.** Before creating a page, the orchestrator looks it up by key, so a rerun never makes duplicates.
- In release 1, approval status set in Notion is ignored.

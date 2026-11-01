# Marketing HQ v2: team log

## Why v2
Islam rejected v1, a read-only Kimchi walkthrough. What he wants is a PMM version of Brand HQ:
- requests in the app
- an orchestrator that delegates to specialist agents
- skills he can add over time
- Notion as the office
- GTM campaigns, assets, and business impact

## Team
| Role | Model | Why this model |
|---|---|---|
| CTO | Claude Opus 5.5 | Owns the architecture, the binding data contract, the Notion office, integration, the end-to-end test and final QA |
| Product Owner | Codex gpt-6-sol (high reasoning) | Turns the CTO brief into the PRD and challenges it. A second vendor gives an independent view |
| Frontend engineer | Claude Opus | Builds the app; code and UI judgement matter most |
| Content author | Claude Sonnet | Writes the agents and the 15 skills from Islam's real Kimchi work; strong at long reading and structured writing |
| Acceptance reviewer | Codex gpt-6-sol | Reviews the build against the PRD |

## Timeline (29 Oct 2026)
1. **CTO** wrote [DESIGN-BRIEF.md](DESIGN-BRIEF.md), modelled on Brand HQ:
   - the app writes requests to the repo
   - the orchestrator routine plans and delegates to subagents with skills
   - Notion is the office
2. **Product Owner (Codex)** wrote [PRD.md](PRD.md). The CTO accepted its 3 changes:
   - The app is the only place to approve; Notion mirrors it, so there's one source of truth and no conflicts.
   - Approvals are tied to an asset version; a revision needs a new approval.
   - No separate asset screen; a Products screen added instead.

   It also replaced the shared `runs.jsonl` with one file per run, because GitHub appends are fragile.
3. **CTO** wrote the binding [DATA-CONTRACT.md](DATA-CONTRACT.md) and set up the Notion office under "Marketing HQ":
   - 4 databases: Requests, Assets (related to Requests), Campaigns, Agent runs
   - the v1 Projects and Steps databases are kept as an archive
4. **Running in parallel:**
   - Frontend engineer (Opus): building the app (6 screens)
   - Content author (Sonnet): writing the 5 agents, the 15 skills, the sample product and the orchestrator routine

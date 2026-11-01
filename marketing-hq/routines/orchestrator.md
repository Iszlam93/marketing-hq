# Marketing HQ: Orchestrator (scheduled routine, hourly)

You are the Marketing HQ orchestrator. Act as the `pmm-orchestrator` agent and follow `.claude/agents/pmm-orchestrator.md` for one full pass. Do not improvise a different procedure.

The file formats are in `docs/marketing-hq/v2/DATA-CONTRACT.md`. The skills are in `.claude/skills/`. The specialists are `pmm-research`, `pmm-strategy`, `pmm-content` and `pmm-analyst`. Delegate to them with the Agent tool.

## Trigger
- Run as a scheduled cloud routine, or the prompt says "trigger: schedule", or the environment variable `CLAUDE_CODE_REMOTE` is `true`: trigger is `schedule`.
- Otherwise (a local command): trigger is `local`.
- Put the trigger in every run file you write.

## Hard rules
- Never invent facts, numbers, customers or quotes. Use `**[add: ...]**`.
- Never post, send or submit anything externally. Never contact anyone.
- Public sources only. No paid APIs.
- Only change files inside `marketing-hq/`.
- Never edit decision files, campaign files or product files.
- Repo status wins. Ignore approval status set in Notion.
- At most 6 task executions per pass.
- Never put secrets in files.
- On any Notion failure, set `syncError` on the request, leave its state as it is, and carry on.
- If git fails, stop quietly. The next run retries.
- Commit only when something changed, with the message `marketing-hq: orchestrator <ISO time>`.

## Run it locally
From the repo root:
```
claude -p "Run the Marketing HQ orchestrator: follow marketing-hq/routines/orchestrator.md"
```

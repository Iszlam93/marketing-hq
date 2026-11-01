---
name: request-planning
description: Turn a new Marketing HQ request into a dependency-ordered task plan using the default plan for its type, then adapt it to the brief. Use when a request has status "new", or when the plan needs a task added or skipped.
---

# Request planning

## When to use
- A request file has `status: "new"` and `plan: null`.
- A brief shows that a default task is not needed, or that one more is.
- Never re-plan a request that already has a plan. Add or skip tasks with a `note` instead.

## Inputs
- `marketing-hq/requests/<id>.json`: `type`, `title`, `brief`, `productId`, `campaignId`, `links`, `due`, `priority`.
- `marketing-hq/products/<productId>.md`.
- `marketing-hq/campaigns/<campaignId>.json`, if the request has one.
- Existing assets for the same product or campaign (`marketing-hq/assets/`), which may already cover a task.

## Method
1. Read the brief twice. Write down in one line each: the audience, the output wanted, and the decision it supports. If one is missing, plan anyway and record the gap in `plan.rationale`. Do not stop to ask.
2. **If `type` is `"auto"`** (Islam did not pick one): choose the closest of the 8 types below from the brief, set `plan.chosenType` to it, and start `plan.rationale` with the choice and why, in plain words ("The brief asks for a page a seller can send, so I planned it as a One-pager."). Never change the intake `type` field.
   Then start from the default plan for the type (or `plan.chosenType`):

| type | tasks (agent, skills) |
|---|---|
| gtm-launch | research: icp-discovery-job-ads; strategy: positioning; strategy: launch-plan |
| campaign-plan | strategy: logic-tree; strategy: campaign-plan + ab-test-design |
| positioning | research: forum-voice-of-customer; strategy: positioning |
| battlecard | research: competitive-research; strategy: positioning; content: battlecard |
| one-pager | strategy: positioning; content: custom-one-pager |
| content-piece | strategy: positioning; content: content-piece (blog, LinkedIn) or email-sequence (email) |
| research | research: icp-discovery-job-ads and/or forum-voice-of-customer |
| impact-report | analyst: impact-report |

3. Adapt the plan with these rules:
   - **Skip** a task when a current, approved asset already covers it for the same product and audience. Set `status: "skipped"`, link the asset id in `note`, and let later tasks list that asset as input.
   - **Add** a task when the brief needs evidence the default chain lacks. Examples: the brief names competitors but the type is `positioning` (add competitive-research); the brief asks "which message wins" (add ab-test-design); the brief asks for a one-pager for a named company (add icp-discovery-job-ads or a research task on that company).
   - For `research`, choose the skill from the brief: job ads for "who is hiring / which segment", forum for "what do buyers say / what hurts".
   - For `content-piece`, choose `email-sequence` only when the brief says email or sequence. Otherwise `content-piece`.
   - Keep the plan small. Five tasks or fewer is normal. Never add a task only to look thorough.
4. Give tasks ids `t1`, `t2`, ... in the order they will run. Set `dependsOn` from the real data flow: positioning depends on research; content depends on positioning; launch-plan depends on positioning. A task with no inputs depends on nothing.
5. Set `outputAssetId` to `<requestId>--<taskId>` for every task, including skipped ones that you replace with an existing asset (use `null` for a skipped task). **Every non-skipped task produces exactly one asset.** A battlecard request ends with 3 assets.
6. Set `status: "pending"` on every new task, `agentId` to one of research, strategy, content, analyst, and `skillIds` to existing folders under `.claude/skills/`. Check the folders exist.
7. Write `plan.rationale`: two to five short sentences. Say which default you started from, what you changed, and why. Quote the brief's words when they drove a change.
8. Check the product file exists and has approved claims. If the audience or claims are empty, add a note in the rationale so Islam sees the risk early.

## Output template
Write this into the request JSON (the orchestrator edits only these fields):
```json
"plan": {
  "createdAt": "<UTC ISO>",
  "rationale": "<Default plan for battlecard. I added nothing. I skipped nothing. Reason: ...>",
  "tasks": [
    { "id": "t1", "agentId": "research", "skillIds": ["competitive-research"],
      "title": "<plain title, verb first>", "dependsOn": [],
      "outputAssetId": "<requestId>--t1", "status": "pending", "note": "<only if added or skipped>" }
  ]
}
```
and set `"status": "planned"`, `"updatedAt": "<UTC ISO>"`.

## Quality checks
- [ ] `plan.rationale` exists and names the default used and every change.
- [ ] Every task has a unique id, a valid `agentId`, existing `skillIds`, a verb-first `title`.
- [ ] `dependsOn` only references earlier task ids; no cycles.
- [ ] Every non-skipped task has `outputAssetId` = `<requestId>--<taskId>` and every id is 3 to 80 characters of `[a-z0-9-]`.
- [ ] Every added or skipped task has a `note`.
- [ ] The final task of the chain produces what the brief asked for.
- [ ] JSON is valid and no intake field was changed.

## Why a PMM does this
A PMM spends a lot of time deciding what not to do. A plan is a set of choices about evidence, message and test, in the right order. Skipping a step you already have is as senior as adding one you lack. Writing the rationale down lets other people challenge your reasoning before work starts, which is cheaper than challenging it after.

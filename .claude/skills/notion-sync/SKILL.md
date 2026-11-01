---
name: notion-sync
description: Exact procedure for mirroring requests, assets, campaigns and agent runs to the Marketing HQ office in Notion without creating duplicates. Use whenever the orchestrator must create or update a Notion page, or confirm one.
---

# Notion sync

## When to use
- After planning a request (Request page).
- After an asset passes checks, before it goes to `in_review` (Asset page).
- After an approval or change request is applied (Asset status).
- When mirroring campaigns and writing run records.
- To confirm Notion before setting a request `done`.

The repo is the source of truth. Notion is the office copy. Approval set in Notion is ignored in release 1.

## Inputs
- The repo file to mirror (request JSON, asset `.md`, campaign JSON, run JSON).
- Parent page "Marketing HQ": https://app.notion.com/p/407265ea4dd8819e9d65fb5b3cec46e5
- Data sources:

| Database | Data source | Key property |
|---|---|---|
| Requests | `collection://6fc50b54-52df-4f29-8cfa-38e2230c5cbd` | Request ID |
| Assets | `collection://4276fb4d-e2cd-4ecf-90e0-43f04d2401aa` | Asset ID (Request is a relation) |
| Campaigns | `collection://fd0952ef-e881-4e86-9f32-f724a5d9c692` | Campaign ID |
| Agent runs | `collection://135ee071-27c9-499d-aaf5-361ca427f392` | Run ID |

## Method
1. **Learn the schema once per pass.** Use `notion-fetch` on each data source URL you need. Read the property names and select options it returns. Use those exact names. The contract names these properties: the key (Request ID, Asset ID, Campaign ID, Run ID), `Request` (relation on Assets) and `Type` (select on Requests). For every other property, match by meaning (title, status, agent, version, due, priority, links). If a property you need does not exist, skip it and record that in the run summary. Never create properties.
2. **Look up before you create.** Always. Run `notion-query-data-sources` on the data source filtering the key property equal to the repo id. If that is not available, use `notion-search` with the id as the query and keep only results whose key property matches exactly.
   - One match: update that page. Use `notion-update-page`.
   - No match: create it with `notion-create-pages` and the data source as parent.
   - More than one match: use the oldest, update it, and put a warning in the run summary. Never delete pages.
3. **Request page** (Requests data source). Title = request title. Properties: Request ID, Type (see mapping below), Status (the repo status), Product, Priority, Due, Brief (or put the brief as the first paragraph of the body), Sync error (only if set). Body: brief, links, then the plan as a short table (task, agent, skills, status). Rewrite the body on every update so it matches the repo.
4. **Asset page** (Assets data source). Title = asset `title`. Properties: Asset ID = the asset `id`, Version, Status, Agent, Skills. **Set the Request relation** to the Request page of `requestId` (look the Request page up first; if it is missing, create it, then link). The **asset body goes in the page content**: take the markdown below the front matter, including `## Sources`, and write it as the page content. Do not put front matter in the page. **Build the content with `python marketing-hq/scripts/notion_body.py <asset path>`**: it strips the front matter and turns Markdown pipe tables into Notion `<table>` blocks (Notion does not render pipe tables). Skills is a **text** property: write the skill ids comma-separated.
5. **Match check.** After writing, `notion-fetch` the page. Compare: title, version, status, and that the first heading, the last heading and the `## Sources` entries of the body are present. If they differ, rewrite the body once, re-check, and if it still differs use the error path.
6. **Write IDs back to the repo.** Put the page id in `notionPageId` and the page URL in `notionUrl` in the asset front matter (or in the request's `notion` object: `{ "pageId", "url", "syncedAt" }`, UTC ISO time). Never leave placeholders. Do this before moving the asset to `in_review`.
7. **Status updates.** When an asset becomes `approved`, `changes_requested` or `in_review`, update the Status property (and Version) on the Asset page. The body only changes when the version changes.
8. **Campaign page** (Campaigns data source). Key = campaign id. Properties: name, product, objective, period, status, primary KPI with target and newest actual with its `asOf` and source. Body: all KPIs with entries and the results log. Label them "reported outcome". Record the page in `marketing-hq/state/notion-campaigns.json` as `{ "<campaignId>": { "pageId", "url", "syncedAt" } }`. Create the folder and file if missing.
9. **Run page** (Agent runs data source). Key = the run id. Properties: Run ID, agent, trigger, outcome, started, ended, request, task. Body: the summary and error. Create once. If a page with that Run ID exists, do nothing.
10. **Request `done` check.** Query the Request page and every Asset page of the request. Done only if all asset pages show the approved status and the version matches the repo.

### Request type labels (the Notion "Type" options, exact)
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

## Output template
There is no asset for this skill. Its output is state:
- the Notion page exists once, with body equal to the repo file
- repo file holds `notionPageId` and `notionUrl` (asset) or `notion.pageId`, `notion.url`, `notion.syncedAt` (request)
- on failure: `syncError` on the request, for example `"Notion: could not create the Asset page for t2 (timeout)"`, and a run file with `outcome: "error"`

## Quality checks
- [ ] The page was looked up by key before any create call.
- [ ] Exactly one page exists for the key after the call.
- [ ] Property names match what `notion-fetch` returned, not guesses.
- [ ] Type uses the label from the table, character for character.
- [ ] Asset body is in the page content and matches the repo markdown.
- [ ] The Request relation on the Asset page points to the right Request page.
- [ ] `notionPageId` and `notionUrl` are written back and are not empty.
- [ ] No page was deleted. No approval was read from Notion.
- [ ] A rerun changes nothing when the repo has not changed.

## Why a PMM does this
A PMM works in several tools and must keep one version of the truth. Lookup-before-create is the same habit as keeping one master copy of a messaging doc and linking to it. When two places disagree, the team stops trusting both. Deciding up front which one wins removes that argument.

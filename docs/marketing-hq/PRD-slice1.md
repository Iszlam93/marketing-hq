# Marketing HQ — Slice 1 PRD: Kimchi walkthrough

## Problem and job

I need to show how a PMM moves from evidence to a GTM decision, using work I can defend in an interview.  
The original prototype shows an AI team; it does not yet teach that decision process through a real project.  
**Slice 1’s one job:** make my Kimchi project a clear, read-only walkthrough of the seven-step PMM cycle.

## Users and moments of use

- **I’m rehearsing for an interview:** I move through the bet, evidence, test, caveats and possible next decisions without hunting through separate documents.
- **I’m learning the PMM role:** at each step, I can see why a PMM does it, what good work looks like and common mistakes.
- **A hiring manager is viewing my portfolio:** they can follow my reasoning, distinguish evidence from assumptions, and see that the campaign was planned rather than run.

## Screens

Use Brand HQ’s Next.js 15 and React 19 app shell, navigation, theme switch, server-side project reader and own-CSS approach. Read project data from `marketing-hq/projects/<id>.json` under the binding data contract. Kimchi is example content; use no Kimchi or Cast AI logos, colours or app branding.

### 1. Home — `/`

**Top to bottom:** Marketing HQ header; Day/Night switch; one-sentence explanation of the seven-step cycle; “Projects” heading; project rows showing name, objective, segment, status, current step, updated date and “Open walkthrough” link; short note that this slice is a read-only example and the AI team comes later.

**Empty and edge states:** If there are no project files, show “No projects yet” and explain that project creation is coming in slice 2. If one project cannot be read, show a clear error for that project without implying its work is complete. Long names wrap; no horizontal page overflow.

### 2. Project walkthrough — `/projects/[id]/steps/[n]`

`/projects/[id]` opens step 1. Step URLs are shareable.

**Top to bottom:** breadcrumb back to Projects; project name, objective, mode, status and updated date; compact bet summary (segment, buyer, trigger, headline, budget, timeline); labelled links to key artifacts; seven-step rail with step number, title, phase and status; selected step’s question and confidence where supplied; sections in this order: **What I did**, **What I found**, **Metrics** (value and visible source), **Output** (summary and links), **Decision**, **Caveats**, **Why a PMM does this** (why, signs of good work, common mistakes, and inline term definitions); Previous/Next links; link to the in-role loop.

Steps 1–4 are labelled **Prepared**. Steps 5–7 are labelled **In role** and must visibly distinguish planned actions and decision rules from observed results. The Kimchi test has not run; the page must not imply that clicks, calls, pilots or scale outcomes happened.

**Empty and edge states:** For zero metrics, show “No measured result for this step.” For zero links or caveats, omit the list and use a short, accurate label where context is needed. A missing or inaccessible artifact is identified without a dead link. Unknown projects or step numbers show a useful 404 with a link home. Missing required project data is an error, never silently replaced with invented copy.

### 3. In-role decision loop — `/projects/[id]/loop`

**Top to bottom:** breadcrumb; title and explanation that these are decisions to take **if** results arrive; compact reminder of the test’s objective; five or six outcome rows from `loop`, each showing **If**, **Then I**, and the step it reopens, with a link back to that step; closing link to the walkthrough.

The outcomes must cover a promising result, a message change, a segment or buy-versus-build challenge, weak response, and an inconclusive or under-delivered test. Show the contract’s `win`, `loop` and `wait` tones with text as well as colour. Do not present any branch as an actual result.

**Empty and edge states:** If the loop is absent or invalid, show an honest “Decision loop unavailable” state and a way back. Long conditions wrap on a phone.

A separate glossary screen is unnecessary in slice 1: terms appear beside the step where they matter.

## User stories and acceptance criteria

1. **Find a project.** Given the Kimchi JSON exists, when I open `/`, then I see its objective, status, current step and a working walkthrough link.

2. **Understand the example’s scope.** Given I am on Home, when I read the introduction, then I can tell this is a read-only worked example and that no AI team is running.

3. **Follow the cycle.** Given I open the project, when I use the rail or Previous/Next links, then I can visit all seven steps in contract order and see each step’s phase and status.

4. **Share a specific step.** Given I copy a step URL, when another person opens it directly, then the same step is selected without first visiting Home.

5. **Explain my reasoning.** Given I open any step, when I read it, then I can find its question, what I did, what I found, output, decision and caveats in the stated order.

6. **Trace a number.** Given a step shows a metric, when I inspect it, then its source is visible; no unsourced number is presented as a measured result.

7. **Open the work.** Given an output has a valid link, when I select it, then it opens the linked published artifact or repo-relative source. An unavailable artifact is labelled and has no dead action.

8. **Learn the role.** Given I open any step, when I reach “Why a PMM does this,” then I see the reason, signs of good work, common mistakes and any relevant terms in plain English.

9. **Separate plan from results.** Given I open steps 5–7, when I read their status and content, then I can identify what was planned and cannot mistake a threshold or possible outcome for an observed campaign result.

10. **Use the decision loop.** Given I open the loop, when I choose an outcome, then I see the conditional decision and can follow its `reopens` link to the relevant step.

11. **Handle missing data.** Given there are no projects, an unknown ID, an invalid step or a missing required field, when I open the relevant route, then I get the specified empty or error state rather than a broken page or fabricated content.

## Non-functional requirements

- Works at phone width, including the seven-step rail and outcome rows, without horizontal page overflow.
- Light and dark themes work on every screen; the choice survives reload, following Brand HQ’s pattern.
- All navigation and the theme switch work by keyboard, with visible focus, semantic headings, readable labels and sufficient text/background contrast. Colour alone never communicates status.
- Project content is rendered on the server from the JSON. No client-side project-data fetch, paid API, agent call or loading sequence is needed to read the walkthrough.
- Type-check and production build pass cleanly. Local use needs no API credentials.

## Explicit non-goals

Creating or editing projects; running an AI team; live campaign execution or result collection; approvals, publishing or spending; connectors; Notion sync; authentication; cloud deployment; the original prototype’s full foundations, materials and launch workspace.

## Roadmap

- **Slice 2:** New-project intake for both `discover` and `icp_exists` modes, writing the same project contract.
- **Slice 3:** AI team work through Claude Code routines, with human review before external actions and no paid API dependency.
- **Slice 4:** Live Notion mirror and sync, then deployment using the Brand HQ local-disk/GitHub data pattern.

## Definition of done — acceptance review

I can start the app locally, open Kimchi from Home, traverse and deep-link all seven steps, and use every loop branch. The project has exactly seven ordered steps and five or six valid outcomes under the CTO’s contract. Every displayed number has a source; claims and links trace to `docs/kimchi/*` or the published artifacts. Prepared work, proposed in-role work and actual results are unmistakable. Home and error states work. The three screens pass a phone-width, keyboard, contrast, light-theme and dark-theme review. No client project-data fetch or paid API is used, and type-check and build pass.
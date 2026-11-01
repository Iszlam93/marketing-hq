# Marketing HQ: make it easy (UX brief)

Owner: CTO. Written 1 Nov 2026. Islam: "the app seems very difficult to understand. It should be easy to use, a great experience."

## What is wrong today (CTO review of the live app)
1. **No feedback after a request.** I submit, the page reloads, and nothing tells me it worked. Islam submitted "Summer campaign" twice for this reason.
2. **I can't see whether anything is happening.** The request page shows a status chip and a technical plan table. It never says what the team is doing now or what happens next.
3. **Jargon everywhere.** Orchestrator, task, asset, dependsOn, agentId, request IDs like `r-20261029-…`, skill IDs, "v1". It reads like a database, not a desk.
4. **Too much at once.**
   - The desk opens with a giant "01" and a 6-field form.
   - The request page shows the brief, an activity log, a rationale paragraph, a plan table and the full assets, all at the same weight.
5. **Mono uppercase labels everywhere** make the screens feel like code.

## Principles
- **One question per screen.** Each screen answers what I came for: "ask my team", "what's happening", "is this good?"
- **Plain words.**
  - Orchestrator → **Team lead**
  - Task → **Step**
  - Asset → **Deliverable**
  - Request → **Request**
  - Skills → **Skills** (Islam's word)
  - No IDs on screen, except under "Behind the scenes".
- **Always say what happens next, and when.** For example: "Waiting for the team lead. Next check at 20:15."
- **One main button per screen.**
- **Progressive disclosure:** technical detail lives under a collapsed "Behind the scenes" section.

## Screens

### Home (`/`), "Ask my team"
1. **Ask box at the top**, big and friendly. "What do you need?"
   - **Step 1, pick what you want:** 8 cards in a grid. Each one has a name and a one-line plain description:
     - Launch plan
     - Campaign plan
     - Positioning
     - Battlecard
     - One-pager
     - Content
     - Research
     - Impact report
   - **Step 2, describe it:**
     - **Brief:** one textarea with a guided placeholder: "Who is it for? What do you want back? What decision will it help you make?"
     - **Product:** a select, preselected when there is only one real product. Hide `demo-` products when a real one exists.
     - **Title:** optional. If it's empty, use the first line of the brief, up to 80 characters.
     - **"More options":** campaign, links, due date, priority.
   - **Button:** "Send to my team".
2. **After submit:**
   - redirect to the new request's page with a success banner: "Sent. The team lead will pick it up at 20:15."
   - **Duplicate guard:** if the same type and brief were sent less than 15 minutes ago, open that request instead of making a second one, with the banner "You already sent this. Here it is."
3. **Below the ask box: "My work"**, three plain groups:
   - **Waiting for me:** deliverables to review, the most important.
   - **My team is on it:** in progress.
   - **Done.**

   Each request is a card with:
   - its title and its type in words
   - a one-line status sentence (see "Status sentences")
   - a small progress bar, done steps out of total steps
   - its age ("2 hours ago")
4. **Campaign results:** a compact strip, only when campaigns exist.

### Request page (`/requests/[id]`), "What's happening"
1. **Title**, then the **status sentence** in large type, then a **5-step progress tracker**: Received → Planned → Working → Ready for me → Done. The current step is highlighted.
2. **If waiting for the team lead:** "Nothing has started yet. The team lead checks every hour at :15 (next: 20:15)."
3. **Steps:** a simple numbered list, written as sentences. Each one gets a state badge in words (Waiting / Working now / Ready for me / Approved / Needs changes). For example:
   - "1 · Strategy writes the positioning. **Ready for me**"
   - "2 · Content writes the one-pager. **Working now**"
4. **Deliverables to review**, one card per deliverable:
   - the title, who made it, and when
   - a readable preview: the first about 25 lines, then "Read all"
   - "Open in Notion"
   - **[I approve]** as the main button, and **[Ask for changes]**, which opens a comment box.
   - **After a decision:** the buttons are replaced by "You approved this. The team lead will file it at the next check." or "You asked for changes. The team will revise it."
5. **My brief:** collapsed by default when the request has deliverables.
6. **Behind the scenes:** collapsed. It holds the plan rationale, the IDs, the skills, the dependencies, the activity log and the versions.
7. **Auto-refresh:** while the request is not Done, the page refreshes every 30 seconds and shows a small "Updated just now".

### Status sentences (one source of truth, used everywhere)
| State | Sentence |
|---|---|
| new | "Waiting for the team lead. Next check at HH:MM." |
| planned | "Planned in N steps. Work starts at the next check." |
| in_progress | "<Agent> is working on step k of N: <step title>." (Use the first in-progress step. If none is in progress, "Step k of N is next.") |
| in_review (some deliverables wait) | "N deliverables are ready for me to review." |
| approved | "All approved. The team lead files it in Notion at the next check." |
| done | "Done. Everything is approved and filed in Notion." |
| blocked / syncError | "Stuck: <reason in plain words>." (red) |

### Team, Skills, Products, Campaigns
- **Same voice.** Team shows people cards: Team lead, Research, Strategy, Content, Analyst. Each card says what they do in one sentence, their skills as chips, and "Last worked: 2 hours ago on <request title>".
- **Skills:** cards with a plain description. "Add a skill" stays, with the form split into two simple steps.
- **Campaigns:** a target vs actual bar per KPI, in plain labels.

## Visual direction: Swiss Grid, made friendly
- Keep the palette:
  - Paper `#F7F6F3`
  - Ink `#111`
  - Vermilion `#E5462C` as the single accent, for main buttons, "Waiting for me" and the current progress step
  - Rule `#D9D7D1`
- Keep Inter Tight.
- **Remove the giant section numerals.**
- **Headings** are sentence case, 28–36px. **Body** is 16px, line-height 1.55.
- **Mono only** for times and tiny metadata, never for labels or buttons. Labels are sentence case, not uppercase.
- **Generous whitespace:** max content width about 1080px, and more space between sections than inside them.
- **Cards:** white on paper with a 1px rule border and 8px radius. Friendly, not boxy. No shadows.
- **Buttons:** 44px tall, sentence case. The main one is a vermilion fill; the secondary one has an ink outline.
- **Must work at 375px wide.**

## Making status real (data side)
- **The orchestrator commits and pushes after each state change:** planned, step started, step ready for review, decision applied. A pass therefore shows progress live, not only at the end.
- **The local app pulls before reads,** throttled to once every 30 seconds (`git pull --ff-only -q`, failures ignored). So the cloud routine's progress appears in the local app.
- **The next check time:** hourly at :15, 07:00–22:00 Europe/Amsterdam. It's computed in one helper, so changing the schedule means one edit.

## Product Owner review (Codex): accepted, these override the sections above
Codex's verdict on the first draft was "No, not easy enough". The CTO accepted all 5 changes:

1. **Receipt.** The request page shows a lasting receipt at the top: "Request sent. My team will check it by HH:MM." It stays after a refresh, until the team lead has planned the request.

   On a repeat submission, I see "You already sent this request." with two choices: **View it** and **Send a separate request**. Sending a separate request posts again with `allowDuplicate=1`.
2. **Describe first, classify later.** The ask box leads with "What would you like the team to make?":
   - the brief textarea
   - 4 example chips: Campaign plan, One-pager, Battlecard, Positioning
   - "See all request types" for the other types

   **Type is optional.** With no type picked, the request is saved with `type: "auto"`, and the team lead picks the type when it plans (contract change below).
3. **No product yet:**
   - If no real (non-demo) product exists, the ask box shows "Add my product details to send my first request" and one **Add a product** button.
   - The draft brief is kept in the URL or session, and I return to it afterwards.
   - With one real product, it's preselected and the field is hidden behind "Product: X · change".
4. **Honest timing:**
   - Never say "work starts at". Say "My team will check this by HH:MM."
   - Show "Last update: <relative time>" from the request's `updatedAt`.
   - If the expected check time has passed by more than 20 minutes with no change, show "Running late: my team hasn't picked this up yet."
5. **The review card:**
   - Show **Read the full deliverable** next to the preview, with the Sources list visible before **I approve**.
   - After a decision, a saved receipt names the version: "Saved: I approved version 1." or "Saved: I asked for changes on version 1."
   - When a revision arrives, the card says "New version 2. Please review again."

### Contract change: `type: "auto"`
- **App:** `RequestType` gains `"auto"`. A request with no type picked gets `type: "auto"`.
- **Orchestrator** (request-planning): when `type` is `"auto"`, choose the closest of the 8 types from the brief. Write the choice and the reason in `plan.rationale` ("The brief asks for …, so I planned it as a Campaign plan"), and set `plan.chosenType` to it. Never rewrite the intake `type`.
- **UI:** the type label is `plan.chosenType` when it's set. Before planning, it's "Team lead will decide".

### Acceptance checks (browser, first-time user, no help)
1. **First request:**
   - Start with no real product: add a product, then send a request.
   - Point to the receipt, refresh, and find the request again.
   - Send the same ask again: it opens the existing request with an explanation.
2. **What's happening:** on a request in progress, say what the team is doing now, when it last changed and what happens next. The answers match the underlying state.
3. **Review:**
   - Open a ready deliverable's full content and sources.
   - Ask for a specific change, and see the saved receipt.
   - When the revision arrives, the page asks for review of the new version.

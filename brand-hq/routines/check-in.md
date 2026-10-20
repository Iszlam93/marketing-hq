# Brand HQ: Editor (check-in, runs hourly 07:00–22:00 Amsterdam)

You handle Islam's approvals and reminders for LinkedIn posts. Keep each run short. **Never post to LinkedIn. Only message Islam's Telegram chat.**

The voice guide is `docs/brand-hq/VOICE.md`. The calendar is `brand-hq/posts/*.md`, with status in the front matter.

## Steps
0. **Skip `on_hold` posts completely.** No kits, no reminders, no revisions.
1. **Sync Telegram:** `python brand-hq/scripts/bhq.py poll`. When the Concierge webhook is live this does nothing: the Concierge has already saved approvals, send-backs, feedback and files in the repo (commits marked `(telegram)`), so just `git pull`.
1b. **Requests:** read `brand-hq/inbox/requests.md`. For each line under the header:
   - A change to a post or the calendar ("move Thursday's post", "shorter hook on the 5 Nov post"): do it, following VOICE.md.
   - An idea: append it to `brand-hq/inbox/ideas.md` for Monday's plan.
   - A question: answer it with `bhq.py notify`.
   - Then delete the line and send one `bhq.py notify` per request saying what you did ("Done: moved … to …").
2. **Revisions:** for each post with `status: revising` that has a `## Feedback` entry newer than its last `## Revision note`:
   - Rewrite the post following the feedback and VOICE.md. Never invent facts; use `**[add: …]**` instead.
   - Add or replace `## Revision note` with one line saying what changed.
   - Set `status: awaiting_review`, then run `bhq.py review <id>`. Islam gets v2 in Telegram with the buttons.

   If a post is `revising` but has no new feedback yet, leave it.
3. **Posting day:** compute today's date and time in **Europe/Amsterdam**. For each post dated today with `status: approved`, if local time is 07:00 or later, run `bhq.py kit <id>`.
4. **Reminders:** for each post dated **tomorrow** with `status: needs_approval` or `drafted`, unless `reminded:` already equals today's date:
   - Send `bhq.py notify "⏳ Tomorrow's post still needs your approval: <title>. Tap Approve on the draft above, or reply /plan."`
   - Then run `bhq.py status`-style editing to add `reminded: <today>` to its front matter (edit the file directly).
5. **Missed posts:** if a post dated **yesterday** is still `approved` or `kit_sent`, send one notify asking if it went out. Add `reminded: <today>` so you don't ask twice.
6. **Notion mirror:** if you have Notion tools, update each changed post's page in the Posts database (`collection://fb74c6e1-26a1-41c2-bfa3-d5e696b7b928`, match on Post ID): Status, Title, Feedback and the body text.
7. **Save:** if anything under `brand-hq/` changed, `git add brand-hq && git commit -m "brand-hq: check-in <date time>" && git push`. If nothing changed, don't commit.

## Rules
- Only change files inside `brand-hq/`.
- Never put secrets in files.
- If Telegram or git fails, stop quietly. The next run will retry.

# Brand HQ: the working system

The working system behind Islam's LinkedIn personal brand. Scheduled cloud agents plan and draft posts. Islam approves them in Telegram, then posts them himself.

## How it works
```
Monday (weekly planner)            Every 2 hours (check-in)              Telegram (you)
──────────────────────            ────────────────────────              ──────────────
read voice + plan + results   →   read your taps and replies     ←→   ✅ Approve / ✏️ Send back
keep 30 days planned              revise drafts you sent back           reply with what to change
draft the next 9 days             send the post kit on posting day      ✅ Posted / ⏭ Skip
send drafts for approval          remind you the day before             send ideas as plain text
weekly summary                                                          forward analytics exports
```

## Files
- `posts/`: one Markdown file per post. The front matter holds date, pillar, status and so on. Sections: Why, Post, First comment, Visual, Notes, Feedback.
- `routines/`: instructions for the two scheduled agents.
- `scripts/bhq.py`: the Telegram and calendar helper (standard library only).
- `inbox/`: ideas you send the bot, and analytics files you forward.
- `state/`: Telegram sync position.
- `results.md`: results summaries (created by the planner).

**Status flow:** planned → drafted → needs_approval → approved → kit_sent → posted. A send-back sets `revising`; a skip sets `skipped`.

## Telegram bot
@Pers_Iszlam93bot.

**What you can send it:**
- Tap the buttons on drafts and post kits.
- Reply to "What should change?" with your feedback.
- Send `/plan` to see what's coming up.
- Send any other text, and it's saved as an idea for the planner.
- Forward your LinkedIn analytics export (.xlsx) once a week.

## Secrets
`TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`:
- **Local runs:** read from `.env` in the repo root, which Git ignores.
- **Cloud runs:** set as environment variables in the Claude cloud environment.

Never commit them.

## Run locally
```
python brand-hq/scripts/bhq.py list
python brand-hq/scripts/bhq.py poll
python brand-hq/scripts/bhq.py review <post-id>
```

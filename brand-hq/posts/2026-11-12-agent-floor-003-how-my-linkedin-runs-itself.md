---
id: 2026-11-12-agent-floor-003-how-my-linkedin-runs-itself
date: 2026-11-12
time: "08:30"
pillar: Building with AI in public
format: image
series: THE AGENT FLOOR
issue: "003"
title: "How my LinkedIn runs itself"
visual_style: swiss-grid
foundation: v1.0
status: awaiting_review
---

## Why
Concrete and practical: exactly how the system works and what it costs you each week. Easy for others to save and share.

## Post
Here's what runs my LinkedIn now, and what it costs me each week.

Every Monday at 07:00 a planner agent reads my calendar, my results and my notes. It keeps the next 30 days planned and drafts the coming week's posts in my voice.

The drafts arrive on Telegram with two buttons: approve, or send back with a comment. If I send one back, the revision comes back within the hour.

**[add: posting day, either "On posting day I get a reminder with the post ready to copy." or "On posting day it publishes itself at 08:30." This depends on whether auto-posting is live by then.]**

Everything lives in one GitHub repository: a small text file per post, with its status at the top. No database, and a simple web app on top so I can see the month at a glance.

What it costs me: about 15 minutes a week to read drafts and tap a button. What it took to build: a few evenings, and a lot of rejected drafts.

If you're starting out, build the approval step first. Automation is the easy part. Trusting it takes longer.

## First comment
This is part 3 of The Agent Floor. Parts 1 and 2: [links]

## Visual
template: buildlog
series: THE AGENT FLOOR
issue: 003
context: Brand HQ
headline: My LinkedIn runs on a calendar file and *two agents*.
screenshot: brand-hq/design/shots/brand-hq-plan.png

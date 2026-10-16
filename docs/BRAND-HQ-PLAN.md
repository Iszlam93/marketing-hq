# Brand HQ: plan

## Context
Brand HQ is the second app in the Marketing HQ codebase. It's an AI team that runs Islam's **LinkedIn personal brand**. The goal right now is **exposure during a job search**: be visible and credible to the hiring managers and recruiters behind the roles he's targeting.

It reuses Marketing HQ's building blocks: orchestrator and agents, Review Room with visual previews, versioned source of truth, live activity, and the Day/Night theme.

## Decisions made
- **Same codebase as Marketing HQ**, as a second app: `apps/marketing-hq`, `apps/brand-hq`, shared `packages/core` and `packages/ui`.
- **Cadence:** at most **2 LinkedIn posts a week**, plus the Friday newsletter.
- **The Friday newsletter ("This Week in AI") is out of scope.** It's written and scheduled in a separate app. Brand HQ only shows it on the calendar as a fixed, already-scheduled Friday item, so the Planner works around it (for example, no AI-news post on Fridays, and no duplicating the newsletter's topics).
- **Publishing:** after approval, the app reminds Islam at the planned time with the post and image ready to copy, and he posts himself. Auto-publishing can come later.
- **Reminders and approvals:** pushed to a **Telegram bot**, with buttons to approve or send back and a copy-ready post kit on posting day. The in-app panel stays as a backup.
- **Target roles and companies:** read from Islam's **Notion job tracker**. The Notion connector needs authorizing first; the prototype uses sample roles.

## Where the profile is today (from linkedin.com/in/islam-el-saeed)
- **Positioning in use:** B2B product marketer, 9+ years. Builds AI solutions and explores marketing automation instead of waiting for development cycles.
- **Recent themes:**
  - building in public (Marketing HQ, the MarketMap tool)
  - the "This Week in AI" newsletter
  - reposts of AI lab announcements
- **Gap to close:** the headline still lists the former employer as the current role. The app treats the former employer as off-limits in all content.

## The team
```
                         YOU (approve)
                              │
                 Brand Manager (orchestrator)
     goal: visibility with hiring managers for target roles · final review
                              │
      ┌───────────────────────┼────────────────────────┐
  Content Planner         Executors                 Reminder
  post history ·          Writer · Designer         approvals due,
  30-day rolling plan                               posting slots
```
- **Brand Manager:** owns the goal and the weekly priorities. Keeps every post on-message for the job search, does the final review, and pushes back (pillar balance, repetition, weak hooks, off-limits topics).
- **Content Planner:** keeps the post history and a **30-day rolling plan** (about 8 posts, plus the Friday newsletter shown as fixed). It decides what goes next, balancing pillars, timing and job-search moments from Notion, such as an interview week at a target company.
- **Writer:** post text, carousel scripts, hooks, first comment.
- **Designer:** visuals in Islam's two house styles:
  - **hand-drawn** for personal, career and building-in-public posts
  - **violet editorial** for AI explainers

  It produces single images and carousels.
- **Reminder:** an in-app panel and badges for approvals waiting, posts due today, and the Friday newsletter (as a heads-up only).

## Personal Brand Foundation (source of truth, versioned)
- **Positioning (proposed):** "B2B product marketer who builds with AI: I test ideas in days, not quarters."
- **Audience:** hiring managers and recruiters for target PMM roles (from Notion), plus B2B marketers.
- **Content pillars (proposed):**

| Pillar | Share | Examples |
|---|---|---|
| Building with AI in public | ~40% | Marketing HQ, MarketMap, what I built this week and what broke |
| Product marketing craft | ~35% | Positioning, launches, GTM lessons from 9 years in B2B |
| AI for marketers | ~15% | Practical takes, complementing (not repeating) the Friday newsletter |
| Journey & learning | ~10% | Where I started (Egypt to the Netherlands), how I learn, what I have built |

- **Voice:** plain, practical, first person, honest about what's prototype and what's real.
- **Proof points:** 9+ years in B2B; CIM qualified; Marketing HQ; MarketMap; the newsletter.
- **Off-limits:** former employer names and branding; confidential work details.

## Weekly rhythm
| When | What happens |
|---|---|
| Monday | The Planner refreshes the 30-day plan. This week's 2 drafts are ready to review as LinkedIn mockups. |
| Tuesday and Thursday (default slots) | Reminder at the planned time: text, image and first comment ready to copy. You mark it posted and add the results later. |
| Friday | "This Week in AI" appears as scheduled (handled by the other app) |

## Screens
- **Today:** what's due, approvals waiting, reminders, Brand Manager briefing
- **Calendar:** 30-day plan by pillar, with the Friday newsletter shown as fixed. Gaps and pillar imbalance are highlighted.
- **Review Room:** posts as LinkedIn mockups (desktop and mobile), carousels slide by slide, approve, edit or send back
- **Foundation:** positioning, audience, pillars, voice, proof points, off-limits, with version history
- **Targets:** roles and companies from Notion, and how the plan supports each one
- **History & results:** every post with its pillar and results, and what's working
- **Team:** org chart with live status, plus a Brand Manager chat

## Integrations and constraints
- **Post history:** start from the LinkedIn data export (it includes your posts). After that, the app logs everything it creates and everything you mark as posted.
- **Results:** personal post analytics are not open to regular apps. Start with the **weekly LinkedIn analytics export, forwarded to the Telegram bot** (about 1 minute a week), which the agent imports. Later options: apply for LinkedIn API access, or Claude in Chrome reading the analytics page.
- **Notion job tracker:** read target companies, roles, status and interview dates. Needs the Notion connector authorized.
- **Newsletter:** none. It's shown on the calendar only.

## Build phases
0. **Clickable prototype** in the Marketing HQ style, with sample data, for sign-off
1. **Foundation:** shared monorepo, Brand HQ app shell, Personal Brand Foundation, post history import, calendar
2. **Agents:** Brand Manager, Planner, Writer, Designer, Review Room, in-app reminders
3. **Notion:** target roles and companies, and interview timing in the plan
4. **Later:** LinkedIn auto-publish, results import, engagement agent (comment suggestions on target-company posts)

## Path to autopilot (agreed 16 Oct 2026)
1. **Real content.**
   - Voice guide: [brand-hq/VOICE.md](brand-hq/VOICE.md), built from Islam's own posts.
   - First 4-week plan with all 8 posts fully drafted: [brand-hq/PLAN-2026-10-20_to_11-13.md](brand-hq/PLAN-2026-10-20_to_11-13.md).
   - These move into a **Notion "Brand HQ content calendar"** database, linked to the job tracker, once the Notion connector is stable.
2. **Scheduled cloud agents, which run without the laptop:**
   - **Monday 07:00:** read the tracker, calendar and results. Top up the 30-day plan, draft the next 2 posts, write the visual brief, and set status to "Needs approval". Send to Telegram.
   - **Tuesday and Thursday 07:30:** push the post kit if the post is approved, or flag it if not.
   - **Monthly:** review results against the success measures, and propose changes to pillars or timing.
3. **Brand HQ app** as the front end over the same data. The Designer renders the images. LinkedIn auto-posting after approval is optional.

## Success measures (monthly)
- Profile views from hiring managers and recruiters
- Recruiter and inbound messages
- Interviews where posts or projects come up
- Follower growth among PMM and B2B marketing people

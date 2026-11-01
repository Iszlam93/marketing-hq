# Kimchi Sr. PMM take-home: handoff

Last updated: 26 Oct 2026. Read this first in any new session, then carry on from "Open items".

## The assignment

- **Role:** Senior Product Marketing Manager, Kimchi AI Coding Platform, EMEA (Cast AI).
- **What's due:** due **Wednesday 28 Oct 2026** to Cast AI's management team. The panel is 60 minutes, mostly Q&A.
- **The brief:** PDF at `C:\Users\IslamElsaeed\Downloads\Sr. PMM Practical Exercise_ Kimchi.pdf`. Its text is in `scratchpad/codex-panel/0-brief.txt` if that folder still exists. It asks for:
  - one bet: segment, positioning and message
  - evidence and confidence, plus exclusions
  - an executable test with decisions per outcome, including inconclusive
- **Limits:** max 2 pages, public sources only, about 4 hours.

## How Islam wants to work

- First person **"I"**, never "we".
- Plain English, explain before changing anything, and wait for "yes" before edits.
- Visual, specific, senior-level work, with a source for every number.
- Public sources only. LinkedIn is read-only.
- No Kimchi branding on any **published** page. Branded versions stay as local files only.
- Don't export the PDF until Islam approves.

## The pages

All published pages are private claude.ai artifacts; share them via each page's Share menu. Scratchpad source files live in the old session's temp folder. The links below are the reliable way back.

| Page | Link | Local branded file |
|---|---|---|
| **Submission (2 pages, the deliverable)** | https://claude.ai/artifact/24V8A9GgQjqpJ1ggtTovjG | – |
| Appendix (reference: campaign detail, 7 promises, voices and AI use, **Sources**) | https://claude.ai/artifact/PoNSdsbQi6p3AdqHnYn3Ja | – |
| Raisin one-pager (custom, tier 1 example) | https://claude.ai/artifact/88KhU4yjEEV9LS5hdm4e81 | `docs/kimchi/one-pagers/raisin.html` |
| Finance one-pager (generic, tier 2, the ad's download) | https://claude.ai/artifact/4Uut7tbqiYkxeBuQdAsGyU | `docs/kimchi/one-pagers/finance-general.html` |
| Logic tree (objective → 4 branches → in-role loop) | https://claude.ai/artifact/QygeLubfpN49uRuaph96ad | – |
| GTM overview (older; still says "we" and has the old message) | https://claude.ai/artifact/3MszJRG1Mxr6BjAY5fYkVa | – |
| Detailed Claude Doc (older) | https://claude.ai/artifact/6kCLK5VMEGEEMp44kf78UR | – |

To edit a published page from a new session, `read` it with the Artifact tool, which saves the full HTML locally, then edit and publish to the same URL.

**Fit check:**
- Each `.page` (submission) and `.sheet` (one-pagers) must measure ≤ 1122–1123 px.
- Edge headless method: append a script that sets `document.title` to the scrollHeights, then run `msedge --headless=new --dump-dom` and read the title.

## The bet, in short

- **Segment:** UK + EU financial services, up to 5,000 staff.
  - **Buyer:** the current platform owner.
  - **Trigger:** the firm is hiring an AI-rollout role.
- **Headline:** "Roll out coding agents across engineering. Stay in control."
- **Positioning ends:** "…it's one platform, and it already reports on Claude Code." It says "reports", not "covers": the Claude Code integration is telemetry only, per Kimchi's docs.
- **Evidence funnel:** 4 LinkedIn searches, UK + EU, 90 days: 998 postings → 73 AI-rollout jobs → 21 finance (29%) → 11 firms ≤5,000.
- **Ads:**
  - A1 control
  - A2 "See what your AI-made PRs cost." (Cost per PR)
  - A3 "Scale coding agents. Keep security in the loop."
  - A4 = A1 shown to tech
- **ABM tiers:**
  - Tier 1: 7 firms 1:1 (Raisin, Kraken, bunch, 9fin, Accelerant, Taktile, SIX). SIX is kept as the only Claude Code rollout. Germany gets LinkedIn only.
  - Tier 2: 300 finance look-alikes.
  - Tier 3: 300 tech, A4 only.
- **Budget:** ~$5k over 7 weeks. 15,400 impressions per ad.
- **Winner rule:** ~21+ clicks ahead and above 0.55%.
  - 90% sure it isn't luck.
  - A clear winner is caught ~2 in 3 with three ads (re-simulated).
- **Impact:** 3+ technical calls from 3 firms, and 1 sponsor agrees to scope a pilot.

## Decisions Islam has made

- **Keep:** the 7-step rail, the "How I chose" path, the 2x2, and the "After week 7" decision table (the brief requires it).
- **Keep SIX** in tier 1, with its reason.
- **Hours stay at ~4.5 h.** Own it in the room: "I went over the 4-hour guide; the time line is accurate."
- **Kept despite Codex:** the Ad Library point ("no rival names DORA in its ads") and the timeline strip.

## Reviews

- Codex panel review: `docs/kimchi/PANEL-REVIEW-codex.md`
- Codex 4/5 plan: `docs/kimchi/PANEL-4of5-codex.md`
- Codex re-score: `docs/kimchi/PANEL-RESCORE-codex.md`
- **Latest scores:**
  - Segment, exclusions and seniority are at 4.
  - Evidence, test, statistics and positioning were at 3 before the last round of fixes, which targeted them.
  - Brief fit stays at 3 because of the hours.
- **Mock interview questions:** `docs/kimchi/INTERVIEW-QUESTIONS.md`. Some answers there still say "demos" and older wording, so check them against the current pages.

## Open items

1. **Finance one-pager chip:** Islam dislikes "Based on 11 UK and EU finance job ads for AI-platform roles, 90 days to Oct 2026". The options are:
   - (a) "What 11 of your peers are hiring to build, right now" (recommended)
   - (b) "Banks, insurers and fintechs across the UK and EU are hiring for this"
   - (c) remove the chip

   Waiting for a choice. Update both the branded file and the online page.
2. **Kimchi's own LinkedIn (26 Oct):** Islam was asked whether to add it to the appendix's Sources page.
   - **What the page says:** the tagline "The governed AI coding platform", 1,986 followers, and an About text that leads with "2.5x cheaper" and routing, then "hard budget caps per user, team, and key" and "self-hosted in your VPC".
   - **Recent posts:** hard caps vs alerts, "LLM bill doubled", self-hosting for security reviews, build-vs-buy inference (KubeAuto Day Berlin). Nothing on finance or DORA.
   - **Panel use:** "your posts already talk control; I aim it at finance".
3. **Optional:** a final Codex re-score of the latest versions.
4. **Rehearsal:** the presentation scripts were given in chat. The structure is:
   - an opening
   - section 1, the bet
   - section 2, using the four moves "brief → listen → narrow → count"
   - section 3, evidence
   - page 2: exclusions, then the test
   - the close
5. **Wednesday:** export the submission to PDF **only after Islam approves**, then he sends it.
6. **Later:** align the old GTM overview and Claude Doc with the final version, if needed.

## Evidence files (docs/kimchi)

| File | What it holds |
|---|---|
| `finance-size-check.md` | the 90-day funnel and all job links |
| `tier1-accounts.md` | account scoring A–F |
| `competitor-messaging.md` | 12 sites |
| `ad-library-reviews.md` | Ad Library notes |
| `product-walkthrough.md` | what Islam saw in Kimchi on 24 Oct |
| `EVIDENCE.md` | forums, Hacker News and analysts |
| `news-factcheck.md` | Barclays, Goldman, MUFG and others |
| `test-benchmarks.md` | test benchmarks |
| `jobs-raw-90d/` | raw job-search results |

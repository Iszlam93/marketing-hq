# Kimchi's first EMEA bet (draft v2, 26 Oct 2026)

Working draft for discussion, not the submission. Every number has a source in `docs/kimchi/`. **Shows** = a source says it. **Assumes** = my judgement.

---

## 1. The bet

**Who first:** platform and engineering leaders in UK and EU companies of about 200–5,000 staff, whose developers already use more than one AI coding tool (Claude Code, Cursor, Copilot), and who now have to roll out agents across the whole team.

**How I spot them:** the company is hiring an AI-rollout, AI-platform or developer-productivity role. That's the moment someone owns the problem and has a budget.

**Positioning statement**
> For platform and engineering leaders whose teams already use several AI coding tools and are moving to agents, Kimchi is the AI platform that puts one budget and one view over all of them: hard limits per team, user and key, the cost of each merged pull request, and its own agents that work remotely on tasks developers hand them. Unlike Claude Code or Cursor, which control only their own tool, and gateways like LiteLLM, which see model calls but not the work, Kimchi governs the coding work itself, and can move into your own cloud when security asks.

**Primary message**
> **Every coding agent. One budget.**
> Keep Claude Code and Cursor. Kimchi sits over them: a hard budget per team, what each merged PR cost, and agents that take tasks off your developers' plate.

**What the seller says**
> "Your developers picked their own AI tools, and that's fine. What you don't have is one budget and one bill. Kimchi gives you that without taking anyone's tool away. When security asks, it runs inside your own cloud."

---

## 2. The evidence

**What the evidence shows**

| Signal | What it shows | Source | Confidence |
|---|---|---|---|
| Agent spend is rising and unpredictable | Bills moving from $20–100 to $2,000–5,000 per developer per month | Gartner via The Register, 24 Jun 2026 | High |
| Nobody sees it until it's too late | $4,000 in a week unnoticed; a bill doubling monthly to ~$60k; $40k/month shadow spend on team keys | r/EngineeringManagers, Jun 2026 | High |
| The pain spans several tools | A startup asks how to cap spend "across several vendors and harnesses" | Hacker News, Sep 2026 | Medium (one thread) |
| Companies allow more than one tool | Salesforce, PayPal, Datadog allow Cursor, Claude Code and Copilot | Blind (unverified) | Low |
| Someone is being hired to own it | 73 AI-rollout jobs in UK + EU in 90 days; tech largest, finance 29% | My LinkedIn Jobs search, 24 Oct | High |
| Kimchi can do it today | Proxy over Claude Code, Cursor, Codex; hard-stop budgets per team, user, key | docs.kimchi.dev | High (docs) |
| I saw it in the product | Budgets screen, cost per merged PR, Claude Code usage in the same report | My own use, 24 Oct | High |
| Rivals can't | Claude Code, Cursor and Copilot cap only themselves; Kilo and Devin govern only their own agent | Competitor scan, 26 Oct | Medium |

**What I'm assuming**
- That *many* target companies run more than one AI coding tool. I have threads, not a count. **The test checks this.**
- That the person hiring an AI-rollout role buys rather than builds. A free gateway (LiteLLM) is the build option.
- That "one budget over every tool" matters more to them than the best single tool.

**Overall confidence: medium-low.** The pain is strong. "Several tools" and "buy, not build" are the weak links.

**What I left out, and what would bring it back**

| Cut | Why | Back if |
|---|---|---|
| Individual developers | They came for free credits and left when credits ended (Kimchi Discord) | Free use converts to paid teams |
| Price-led message ("2.5x cheaper") | Kilo owns "zero markup"; the 2.5x is Cast AI's own test | Independent proof of cost and quality |
| "AI engineer" outcome message | Devin owns it, with bank proof and a $10M guarantee | Kimchi has 2–3 outcome case studies |
| Self-hosting as the headline | It needs a Cast AI-connected cluster, which is friction for a new buyer | Self-hosting works without Cast AI |
| Banks only | No bank on record using Kimchi's open models, which are Chinese-origin | Product confirms model allow-lists and audit |
| Claims I won't make | "Caps every run" (no per-run cap); "every AI tool" (reporting covers some); "proves ROI" | Product confirms each one |
| Channels | Dev communities (users, not buyers); X (can't target by role); events (too slow for a 7-week test) | Later, for awareness |

---

## 3. The test: 7 weeks, about $5k

**What I'm testing:** which message makes platform leaders act, and whether "several tools" is real enough that they'll take a pilot.

**Channel and targeting**
- **LinkedIn ads + lead form.** Titles: Head of Platform Engineering, Director or VP Engineering, AI Enablement Lead, Developer Productivity Lead. UK + EU, 200–5,000 staff, software and financial services.
- **Cell 1, hiring now:** companies from the 73 AI-rollout job ads. 1:1 outreach: a LinkedIn note and emails from the sales team.
- **Cell 2, look-alikes:** about 300 similar companies, ads only.
- **Cell 3, Cast AI customers in EMEA:** one email from Cast AI's existing channel. The cost is $0, and it shows whether trust in Cast AI changes the response.

**Three angles** (same image and offer, only the headline changes)
- **A. Control across tools:** "Every coding agent. One budget."
- **B. Runaway cost:** "Your agents work all night. So does the meter."
- **C. Value:** "Know what a pull request costs before your CFO asks."

**Offer:** a 30-minute guided setup that puts one budget over the team's existing Claude Code. The download alternative is "AI coding spend checklist". Every lead form asks one question: "Which AI coding tools does your team use?" That counts "several tools" directly.

**Timeline**
- **Weeks 1–2, no spend:** 5–8 calls with platform leads. Product confirms the per-run cap question and which tools the reporting covers.
- **Weeks 3–6:** ads and outreach live.
- **Week 7:** decide.

**Budget**
- LinkedIn ads: 3 angles × ~15,400 impressions at ~$70 per 1,000 ≈ $3,230
- 1:1 company ads: ~$500
- Sales Navigator: ~$120–360
- **Total ≈ $3,900–4,100,** plus ~$2,100 held back if the result is inconclusive

**Success and kill criteria** (set before launch)

| | Success | Kill |
|---|---|---|
| Message | One angle leads by ~21+ clicks at 15,400 impressions each (90% sure it isn't luck), and its click rate is above 0.55% | All three below 0.3% |
| "Several tools" | Over half of leads name 2+ tools | Under a quarter do |
| Buying signal | 3+ qualified calls from 3 companies, and 1 agrees to scope a pilot | 0 qualified calls |

**What I do in each outcome**

| Outcome | Decision |
|---|---|
| One angle wins, several tools confirmed, pilot scoped | Scale that angle; build a "vs Claude Code admin" comparison page and a case study from the pilot |
| Good response, no clear winner | Keep the audience; test the offer next (pilot vs download) |
| Ads weak, but 1:1 hiring firms engage | The trigger works and the message doesn't; rewrite in their words from the calls |
| Most leads use one tool only | "One budget over all tools" is wrong; switch to angle B or C as the lead, for single-tool teams |
| Only Cast AI customers respond | The story doesn't travel yet; sell to the installed base first and build proof |
| Nothing anywhere | Recheck pain, buyer and channel from step 1 |
| Inconclusive (fewer than 15,400 impressions per ad) | Extend the top two angles (~$2.1k), then decide |

---

## Time and AI use (to fill in)
Actual hours: ___ (the brief asks for this; restarting added time, report it honestly).
AI use: Claude ran research agents and helped draft. My decisions: the audience, the cuts, the message and the test design.
</content>
</invoke>

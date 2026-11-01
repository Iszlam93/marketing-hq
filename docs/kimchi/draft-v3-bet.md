# Kimchi's first EMEA bet (draft v3, 26 Oct 2026)

Working draft, not the submission. **Shows** = a source says it. **Assumes** = my judgement. Sources are in `docs/kimchi/`.

---

## 0. How I chose the direction

I re-read three things before choosing.
- **The brief:** move teams from individual AI use to operating agents reliably at scale. The role is **EMEA**.
- **The product:** autonomous remote agents, hard budgets, any model, and it runs in your own cloud.
- **The competitors:** Devin owns *outcome*, Kilo owns *freedom*, and Claude Code, Cursor and Copilot own *the best single tool*. All of them run on US vendors' clouds.

Three directions, scored on the same five questions:

| | A. Agents for Europe's controlled code | B. Agents as infrastructure (platform teams) | C. One budget over every tool (v2) |
|---|---|---|---|
| Is the pain visible in public? | Medium: DORA guidance, IBM Bob launch, IP bans on Reddit, anger at vendor lock-in | High: spend threads, Gartner | High for spend; low for "several tools" |
| Is there a findable trigger? | Yes: AI-rollout jobs at EU finance and industrial firms (SIX, Commerzbank, Nordea, Atlas Copco) | Yes: AI-platform jobs | Weak: no count of multi-tool firms |
| Who owns the budget? | Platform lead, with security co-signing | Platform lead | Platform lead |
| Why Kimchi beats the alternative | **Strong:** Claude Code, Cursor and Devin keep models or the "brain" in a US vendor's cloud; Kimchi runs in your cloud or in an EU region | Medium: caps exist elsewhere | Weak: free gateways (LiteLLM) do much of it |
| Uses what only Kimchi has | Self-hosting, open models, region choice, Cast AI's infrastructure | Cast AI's infrastructure | The proxy |
| Fits an EMEA role | **Yes, it's EMEA-specific** | Partly | Partly |

**I chose A.** It's the only direction where Kimchi's differences decide the deal rather than add to it. It's also the one a US-led team is most likely to under-weight.

---

## 1. The bet

**Who first:** UK and EU companies of about 200–5,000 staff whose source code is under strict rules about where it goes and who can access it, and who are now rolling out coding agents.
- **Where to find them:** financial services and insurance (DORA); industrial, automotive and engineering software (IP-heavy); suppliers to the public sector.
- **Trigger:** they're hiring an AI-rollout, AI-platform or developer-tools role.
- **Buyer:** the platform or engineering leader. The security lead co-signs.

**Positioning statement**
> For engineering leaders at European companies that must keep source code under their own control, Kimchi is the AI platform that lets developers hand coding tasks to autonomous agents that run in an EU region or inside the company's own cloud. Models are chosen per task, with a hard budget per team and a record of what every agent did. Unlike Claude Code, Cursor or Devin, which run on a US vendor's cloud and models, Kimchi lets you decide where the agents run, which models they use, and keeps working if a vendor changes terms or goes down.

**Primary message**
> **Your code stays in Europe. Your agents keep shipping.**
> Autonomous coding agents that run in an EU region or inside your own cloud, on models you approve, with a hard budget per team. Bring Claude or GPT on your own key, only where you choose.

**What the seller says**
> "Your security team will ask three things: where the code goes, which models touch it, and what happens if a vendor cuts you off. Kimchi answers all three before the review starts."

---

## 2. The evidence

**What the evidence shows**

| Signal | What it shows | Source | Confidence |
|---|---|---|---|
| EU rules reach AI vendors | DORA brings AI vendors into contract registers and exit plans; banks self-host to keep providers off the register | Dynamiq; Digiwit | Medium (analyst blogs) |
| Banks already build this pattern | Coding agents restricted to approved destinations, calls through a bank-run gateway | VirtusLab | Medium |
| Big vendors see the demand | IBM launched self-hosted Bob on 1 Oct 2026, pitched on keeping code in-house | IBM newsroom | High |
| Analysts frame lock-in as central | Exit rights and sovereignty are core to 2026 agent vendor choice | Kai Waehner, Q3 2026 | Medium |
| Developers fear vendor dependence | Anthropic's no-notice OpenCode block (1,274-point HN thread); weekly limits; June 2026 outages | Hacker News; research-q3 | Medium |
| Code is being kept from AI tools | AI banned in a repo "because of IP concerns" | r/ExperiencedDevs, 339 upvotes | Low (one thread) |
| The roles exist in Europe | SIX "Development Tools (Claude Code)", Commerzbank "Agent Engineering", Nordea "AI Gateway", Atlas Copco "Software Delivery" | LinkedIn Jobs, 24 Oct | High |
| Kimchi can do it | Self-hosted in your cluster; serverless in France, Israel, US; region per workload; frontier on your own key | Trust centre; docs | High (vendor) |
| Rivals can't, fully | Devin's "brain" stays in Cognition's cloud; Cursor offers no VPC; Claude Code's models run on the provider | Competitor scan | Medium |

**What I'm assuming**
- That "where the code goes" is a **blocker** today, not a nice-to-have. The evidence comes mostly from analysts, vendors and job ads, not practitioners. **The test measures this directly.**
- That a European buyer accepts open models that are **Chinese-origin** (Kimi, MiniMax, GLM) when they run inside their own cloud. No bank is on record doing this. This is the biggest risk.
- That Kimchi can **pin** work to the EU region only and switch off external providers. The trust centre says you choose the region per workload; I haven't confirmed it.

**Overall confidence: medium-low.** The demand is credible and Kimchi fits it uniquely, but the buyer's view of model origin is unknown.

**What I'd ask product for** (the senior PMM part)
- An **EU-origin model option** (for example Mistral's coding models) in the router, so the sovereignty story doesn't depend on Chinese-origin weights.
- A **"security review pack"**: one document covering where everything runs, model origins, audit and certificates (Cast AI Group level).

**What I left out, and what would bring it back**

| Cut | Why | Back if |
|---|---|---|
| Cost-led message ("2.5x cheaper") | Kilo owns price; the 2.5x is Cast AI's own test | Independent proof |
| "AI engineer" outcome message | Devin owns it, with bank proof | Kimchi has outcome case studies |
| "One budget over every tool" (v2) | Weak evidence that firms run several tools; free gateways compete | Lead forms show most teams run 2+ tools |
| US companies | No residency pressure; the US rivals are at home | EMEA story proves out |
| Individual developers | They churned when credits ended | Free use converts to teams |
| Claims I won't make | "Sovereign certified"; "code never leaves" for serverless; "EU-only" until pinning is confirmed; "caps every run" | Product confirms each one |
| Channels | Dev communities (users, not buyers); X; events (too slow for 7 weeks); cold email in Germany (strict rules) | Later, for awareness |

---

## 3. The test: 7 weeks, about $4–5k

**What I'm testing:** whether "control over where code and models run" is what makes European platform leaders act, and whether it's a real blocker.

**Channel and targeting**
- **LinkedIn ads + lead form.** Titles: Head of Platform Engineering, Director or VP Engineering, AI Enablement Lead, Head of Developer Tools. UK, DACH, Nordics, Benelux, France. 200–5,000 staff. Finance, insurance, industrial and automotive software, public-sector suppliers.
- **Cell 1, hiring now:** firms from the AI-rollout job ads. 1:1: a LinkedIn note plus emails (LinkedIn only in Germany).
- **Cell 2, look-alikes:** about 300 similar firms, ads only.
- **Cell 3, control group:** the same ad to non-regulated tech firms, to check whether regulated firms really respond better.

**Three angles** (same image and offer, only the headline changes)
- **A. Residency:** "Your code stays in Europe. Your agents keep shipping."
- **B. Independence:** "Coding agents no vendor can switch off."
- **C. Security review:** "The coding agent your security team can say yes to."

**Offer:** the **security review pack** as the download. It's what the co-signer needs. The follow-up offers a guided pilot in the EU region. Every lead form asks one question: **"What blocks coding agents at your company today?"** The choices are security and data, cost, quality, or nothing. That measures the core assumption directly.

**Timeline**
- **Weeks 1–2, no spend:** 5–8 calls with platform and security leads. Product confirms EU pinning, external routing off, and model allow-lists.
- **Weeks 3–6:** live.
- **Week 7:** decide.

**Budget:** 3 angles × ~15,400 impressions at ~$70 per 1,000 ≈ $3,230; control cell ~$1,080; 1:1 company ads ~$500; Sales Navigator ~$120–360. **≈ $4,900–5,200**, plus ~$2,100 held back if inconclusive.

**Success and kill criteria** (set before launch)

| | Success | Kill |
|---|---|---|
| Message | One angle leads by ~21+ clicks at 15,400 impressions each, and its click rate is above 0.55% | All three below 0.3% |
| Blocker | 40%+ of regulated leads pick "security and data" | Under 15% do |
| Regulated vs control | Regulated cells respond clearly better | Control cell responds as well or better |
| Buying signal | 3+ qualified calls from 3 firms, and 1 agrees to scope a pilot | 0 qualified calls |

**What I do in each outcome**

| Outcome | Decision |
|---|---|
| An angle wins, security is the blocker, pilot scoped | Scale it; build the security pack into a public page; push the EU-model request |
| Good response, but "cost" is the top blocker | The audience is right and the reason is wrong; retest with a cost angle |
| Control cell responds as well | Regulation isn't the driver; widen to all European firms with angle B (independence) |
| Calls stall on Chinese-origin models | Pause; make the EU-model option a product priority before scaling |
| Ads weak, but 1:1 hiring firms engage | The trigger works and the message doesn't; rewrite in their words |
| Nothing anywhere | Recheck pain, buyer and channel from the start |
| Inconclusive (fewer than 15,400 impressions per ad) | Extend the top two angles (~$2.1k), then decide |

---

## Gaps to close before writing the 2 pages
1. Practitioner evidence that "where code goes" blocks AI coding in Europe (job-ad wording, forum threads). It's thin today.
2. Confirm in the docs: EU-only pinning, external routing off, model allow-lists.
3. Fill in actual hours and the AI-use note.
</content>
</invoke>

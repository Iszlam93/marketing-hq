# ICP lens 1b: UK/EU tech vs finance, what AI-rollout job ads actually ask for

Read 27 Oct 2026. Public LinkedIn job views only (no login). Tech = 17 ads read in full. Finance = the 15 ads from [icp-lens1-job-descriptions.md](icp-lens1-job-descriptions.md), re-coded for two new categories (pace, build vs buy).

## 1. Method

- **Where the ads came from.** The tech company list in [JOB-POSTINGS-ANALYSIS.md](JOB-POSTINGS-ANALYSIS.md) (UK + EU), job IDs from `jobs-raw/` and `jobs-raw-90d/`, sizes from the LinkedIn labels in [finance-size-check.md](finance-size-check.md).
- **How each ad was read.** Opened the LinkedIn public job view (`linkedin.com/jobs/view/<id>`, which redirects to a country subdomain), asked for the full text coded against the categories below, and kept one short quote per code as proof. No login, no sign-up, no paid API.
- **Quote caveat.** The fetch tool summarises the page, so quotes are as returned, trimmed to under 15 words. They are close to the ad text but I did not diff them against the page. Treat them as proof of meaning, not citable verbatim text.
- **Dedup.** One ad per company (n8n, ElevenLabs and Esko post the same role several times).
- **Size.** LinkedIn's company-size label (from finance-size-check.md). Many ads show no size on the page. Where the ad body gives a headcount, it is noted.
- **Categories.** a Engineering/platform role (vs business-AI adoption) · b Governance, policy or compliance as a core duty · c Spend/cost/usage limits or tracking · d AI coding tools or agents for developers named · e Gateway/routing across several models or vendors · f Measuring adoption or value · g Regulation named · h PACE · i BUILD vs BUY · j Size.
- **Coding rules I applied (stricter than a loose read).**
  - b = governance, policy, access control, audit or compliance named as a duty. "Guardrails" or "evaluation frameworks" alone = N.
  - e = routing/gateway/orchestration stated across several models or vendors. A gateway alone = N.
  - g = regulation tied to the role. Legal boilerplate in the ad (applicant privacy notices, NYC hiring-law text) = N.
  - h = **Y** only for explicit speed, urgency or a timeline ("move fast", "first 90 days", "rapidly", "accelerating adoption"). **w (weak)** for market-pace or company-growth wording, or "scale" language that is not about the rollout. Both counts are shown.
  - i = **Build** (build/own platform or internal tools, no vendor evaluation), **Buy** (adopt/evaluate vendor tools, no build), **Both**, **Unclear**.

## 2. Tech ads read (17)

Date read for all rows: 27 Oct 2026. Source: `https://www.linkedin.com/jobs/view/<id>/` (redirects to the country version).

| # | Company | Title | Size (LinkedIn) | ID / URL |
|---|---|---|---|---|
| T1 | n8n | Internal AI Enablement Lead | 51-200 (ad body says "over 260") | https://www.linkedin.com/jobs/view/4479018985/ |
| T2 | ABC Fitness | Senior AI Platform Engineer | 1,001-5,000 | https://www.linkedin.com/jobs/view/4481686624/ |
| T3 | 8COM Cyber Security | AI Productivity & Orchestration Specialist | 51-200 | https://www.linkedin.com/jobs/view/4467096402/ |
| T4 | CatalystOne Solutions | AI Operations Engineer | 201-500 | https://www.linkedin.com/jobs/view/4469753487/ |
| T5 | CoreView | AI Operations Engineer | 51-200 | https://www.linkedin.com/jobs/view/4474198614/ |
| T6 | ElevenLabs | Engineering - Internal AI Transformation | 501-1,000 | https://www.linkedin.com/jobs/view/4474353944/ |
| T7 | Esko | Senior AI Platform Engineer - Knowledge & Reasoning | 1,001-5,000 | https://www.linkedin.com/jobs/view/4475832354/ |
| T8 | Okta | Staff Product Manager - Developer Productivity | 5,001-10,000 | https://www.linkedin.com/jobs/view/4473158593/ |
| T9 | Riskified | Senior AI Platform Engineer | 501-1,000 (ad body says "750+") | https://www.linkedin.com/jobs/view/4476566751/ |
| T10 | Actian | AI Enablement Lead (Data Intelligence) | 501-1,000 | https://www.linkedin.com/jobs/view/4472188157/ |
| T11 | Legora | AI Enablement Lead | 501-1,000 | https://www.linkedin.com/jobs/view/4456510477/ |
| T12 | Phorest Software | AI Enablement Engineer | 201-500 | https://www.linkedin.com/jobs/view/4476187134/ |
| T13 | Preply | Senior ML Platform Engineer (GenAI Platform) | 501-1,000 | https://www.linkedin.com/jobs/view/4478162018/ |
| T14 | Xensam | AI Enablement Engineer | 51-200 | https://www.linkedin.com/jobs/view/4442748781/ |
| T15 | Taktile | Senior AI Enablement Engineer | 201-500 | https://www.linkedin.com/jobs/view/4474311519/ |
| T16 | Rydoo | AI Transformation Engineer | 201-500 (ad body says ~200) | https://www.linkedin.com/jobs/view/4466316335/ |
| T17 | Personio | Senior Product Manager - Internal AI | 1,001-5,000 (ad body says 1,500) | https://www.linkedin.com/jobs/view/4421182639/ |

Flag: Taktile is in the tech list of the brief, but finance-size-check.md labels it "Financial Services". It stays in tech here; the sensitivity is in section 5.

### Codes with proof quotes

Y/N, then quote. "none" = no supporting text found.

**T1 n8n.** a N "turn n8n's internal AI and automation capabilities into something every function can confidently use" (business enablement). b N (governance is nice-to-have only: "familiar with access or governance models"). c N. d N. e N. f Y "Check whether the things built are still in use four weeks later". g N. **h w** "so they can automate faster, smarter, and without limits" (about users, not rollout). **i Build** "build a brand-new enablement function from the ground up".

**T2 ABC Fitness.** a Y "you will own platform deliverables end to end". b N (policy is set elsewhere: gateway "executes routing and other policies but does not define them"). c Y "release gates, agent reliability, and cost per request". d Y "Use coding agents and other AI development tools effectively" (no product named). e N (LLM gateway and routing named, several vendors not stated). f Y "quality, reliability, latency, adoption, and cost metrics". g N. **h Y** "We move fast, support one another, and have fun along the way." **i Build** "The AI Platform team builds the foundational capabilities".

**T3 8COM.** a N (works with business departments to automate; role is business-AI). b N (only "responsible use" best practices). c N. d N. e N (orchestrating several models and agents is mentioned, not a gateway). f N. g N. **h N**. **i Build** (German) "entwickelst du AI-Agenten, intelligente Workflows und Automatisierungen".

**T4 CatalystOne.** a Y "You'll build the systems, automations and AI-powered solutions". b N. c Y "cost management". d Y "Today we use Claude Code and Anthropic models". e N. f Y "adoption and value measurement". g N. **h Y** "By day 90, we'd expect you to have taken ownership". **i Both** build: same quote as a; evaluate: "If something better comes along and you can make the case for it".

**T5 CoreView.** a Y "Design, build, deploy, and iterate on internal AI agents". b Y "Establish governance frameworks: monitoring, logging, quality assurance". c N. d N. e N. f N (agent performance tracking only, no adoption or value). g N. **h w** "Stay current on the rapidly evolving AI/agent landscape". **i Both** build: "Design, build, deploy, and iterate on internal AI agents"; buy: "Evaluate, select, and own the company's agentic workflow platform(s)".

**T6 ElevenLabs.** a Y "Engineering - Internal AI Transformation". b Y "AI-native workflows are reliable, auditable, and safe". c N. d N (Claude and n8n named only as tools to build agents). e N. f Y "measuring the impact". g N. **h Y** "We move fast through rapid experimentation". **i Build** "Building reusable automation services, patterns and shared templates".

**T7 Esko.** a Y "you will help shape and build this capability". b N. c N. d N. e N. f Y "measurable improvements in AI agent and service effectiveness". g Y "regulatory requirements (FDA, EMA, QRD)" (domain rules for the product, not AI rules). **h N**. **i Build** "building knowledge and reasoning as a shared capability of Esko's AI Platform". Note: this looks product-facing, less about governing internal AI use.

**T8 Okta.** a Y "This is a highly technical internal platform role". b Y "Own org-wide adoption, clearing security, legal, and privacy hurdles along the way". c Y "spend management for rapidly evolving, consumption-priced technologies" (preferred skills). d Y "from coding agents and MCPs to build, CI/CD, and code review systems". e N. f Y "connecting tool usage directly to hard engineering outcomes". g N (only NYC hiring-law boilerplate). **h w** "the industry playbook is being rewritten monthly". **i Both** build: "own building and operating the capabilities that make our engineers fast"; buy: "Run hands-on, structured evaluations of inner- and outer-loop tooling".

**T9 Riskified.** a Y "Design, build, and maintain reusable AI capabilities". b N (evaluation frameworks and guardrails only). c N (usage tracking, not spend). d Y "High proficiency with AI-assisted coding tools such as Copilot, Cursor". e N. f Y "track adoption company-wide to build lasting impact". g N. **h Y** "ship features quickly and at scale". **i Build** "Develop and maintain our internal MCP server" (Claude Code/Copilot CLI are listed as skills, not purchases).

**T10 Actian.** a Y "architect, scale, and own our AI enablement strategy end-to-end". b N (guardrails and evaluation only: "Establish strict guardrails, evaluation frameworks, and monitoring tools"). c Y "Actively monitor and manage cloud and API compute spend". d N. e Y "centralized API gateways" with model-provider management (partial). f Y "Define and track operational metrics for the AI Enablement function". g N. **h Y** "deploy AI safely, rapidly, and at scale". **i Both** build: "builds the foundational platforms, tooling, and frameworks"; buy: "Evaluate and manage partnerships with AI model providers".

**T11 Legora.** a N (training, workshops, guidelines; no engineering duty stated: "Run training, workshops, and documentation that help teams adopt AI."). b Y "Draft and operationalize guidelines, access policies, and usage guardrails." c N. d N. e N. f N. g N. **h Y** "Put the standards in place that let us move fast safely." **i Build** "we're not just watching that happen, we're building it from the inside" (no vendor evaluation).

**T12 Phorest.** a Y "This is a highly autonomous hands-on Staff engineering role." b Y (secondary) "create reusable capabilities, governance and ways of working". c Y "engineering, tooling and model costs versus the value created". d N. e N. f Y "Establish a baseline before each engagement and measure the outcomes afterwards". g N. **h Y** "In your first 90 days". **i Both** build: "Build production systems teams can depend on"; buy: "pragmatic build-vs-buy decisions based on value, capability, cost".

**T13 Preply.** a Y "Senior ML Platform Engineer (GenAI Platform)". b Y "Embed platform guardrails alongside Security and Privacy experts to enforce policies". c Y "token budgeting, and cost allocation controls". d N. e Y "automated routing, quota controls, and resilient fallback systems across model vendors". f N. g N. **h w** "accelerating our vision to transform education" (company mission). **i Build** "We build the shared infrastructure that helps product teams develop". Note: serves product teams, not only internal developers.

**T14 Xensam.** a Y "Drive AI adoption across the company" plus self-hosted infrastructure duties. b N. c N. d Y "platforms like ChatGPT, Codex, and other commercial APIs". e N. f N. g N. **h w** "Stay ahead of the curve so we're not playing catch-up". **i Both** build: "Build and maintain self-hosted AI infrastructure including open-source models"; integrate: "integrating them into internal workflows and tools".

**T15 Taktile.** a Y "Build internal tools and agents end-to-end". b Y "establish guardrails, access scoping, and audit trails". c N. d N. e N. f Y "measuring success by active usage and time saved". g N (GDPR text appears as an applicant-privacy notice). **h w** "We're growing rapidly with enterprise customers" (company growth). **i Build** same quote as a ("connecting Taktile's SaaS stack" is internal integration, not vendor buying).

**T16 Rydoo.** a Y "Design, build, and deploy internal tools powered by AI". b N (one light bullet: "Ensure secure and compliant use of data in all solutions"). c N. d N. e Y "Leverage multiple models and providers depending on the use case". f Y "Clear productivity gains are observed in key workflows". g N. **h Y** "Move quickly from prototype to production-ready solutions". **i Both** build: "create the shared building blocks that AI solutions sit on"; integrate: "Integrate AI capabilities into existing systems".

**T17 Personio.** a N (internal AI transformation product manager working with departments: "Personio is on the path to becoming an AI-first company"). b N. c N. d N (n8n, Zapier, Make, Claude skills are no-code tools, not developer tools). e N. f Y "Define the outcomes of the transformation with department leadership". g N. **h N** (fast-moving was about the candidate's background). **i Both** build: "Prototype hands-on in no-code and low-code tools"; vendor tools: building in n8n, Zapier, Make.

### Skipped or not read

| Company / role | Why |
|---|---|
| Collibra, AI Enablement Manager (4475010593) | Not read. LinkedIn returned HTTP 429 on two tries. Title is business-side enablement. |
| Duck Creek, Senior PM Agentic AI Platform (4460978646) | Not opened. Title says a vendor product manager for its own agentic platform (customer-facing). Judged from the title only. |
| Esko, Manager Agentic AI (4478798128) | Not read (rate limit). Esko is already in the set with T7. |
| Scurri, AI Platform Engineer | No job ID in the raw lists, no ad found. |
| Rest of n8n / ElevenLabs / Esko / Preply / Personio / Rydoo duplicates | Same role posted several times; one ad each. |
| US-only companies | Out of scope. |

## 3. Finance re-code for h (pace) and i (build vs buy)

Re-read 27 Oct 2026 through the same LinkedIn public views. For 9fin I used the quote from icp-lens1 notes (marked "from notes"); the ad I opened was the "Senior AI Platform Engineer" posting (4436231421). Nordea's LinkedIn post had expired, so I used the Nordea careers page.

| # | Company | h pace | i build vs buy |
|---|---|---|---|
| F1 | SIX | N "none" | **Both** build: "Prototype and integrate AI-powered workflows when off-the-shelf solutions don't fit"; buy: "Continuously evaluate, benchmark and assess the latest AI tools and platforms" |
| F2 | Nordea | **Y** "accelerating the adoption of AI-enabled capabilities across the bank" (careers page) | **Both** build: "extending that same platform approach to an AI Gateway"; vendor: "integration platforms that connect Nordea, including Kong and Kafka" |
| F3 | LSEG | **Y** "accelerating workforce productivity" | **Both** build: "building enterprise AI productivity platform capabilities from the ground up"; integrate: "connector and MCP integrations between AI platforms and enterprise systems" |
| F4 | If Insurance | N (only "Screening and interviewing will start immediately", which is hiring pace) | **Unclear** "building the tools and ways of working that make adoption responsible"; vendor wording only "vendor management" |
| F5 | Commerzbank (DTC Bulgaria) | **w** "shaping and scaling the AI transformation of the bank" | **Build** "Designing, building, and optimizing agents based on modern GenAI technologies" (also "Integrating existing enterprise tools") |
| F6 | Raisin | **w** "improves quality as well as speed" | **Both** "Create reusable building blocks for AI tools"; "including build-versus-buy choices" |
| F7 | Shine | **w** "a startup or scale-up environment" | **Build** "Design, build, and ship custom AI tools, agents, and automations" |
| F8 | Kraken | **w** "AI tooling is deployed at scale across the org." | **Both** "Build internal tooling that extends the platform."; "close them by evaluating vendors or building internally." |
| F9 | Ayvens | **Y** "accelerating AI adoption across Ayvens" | **Buy** "large-scale adoption of AI tools such as Copilot Chat and Copilot Studio"; no build language |
| F10 | Barclays | N ("scalable" describes the capabilities only) | **Build** "building self-service platform capabilities, reusable templates, golden paths" (Bedrock operation is a skill) |
| F11 | Invesco | **Y** "allow application teams to rapidly adopt AI technologies" | **Build** "Build, maintain, version, and manage the lifecycle of Terraform modules" |
| F12 | Bloomberg | N "none" | **Build** "Architect, build, and diagnose multi-tenant GenAI platform systems" (open-source stack, no vendor evaluation) |
| F13 | 9fin | **Y** (from notes) "move quickly, safely, and at scale" | **Both** "building the platform from the ground up"; "Continuously evaluate emerging AI technologies" |
| F14 | Accelerant | N "none" | **Build** "Build production AI agents and services" |
| F15 | Macro Hive | N "none" | **Build** "Internal tools for market dailies, consensus summaries and sales-ready content" |

## 4. Counts, tech vs finance

Tech N = 17. Finance N = 15. Finance a-g and size are from icp-lens1 (23 Oct); h and i are the new re-code above.

| Category | Tech (of 17) | Tech % | Finance (of 15) | Finance % |
|---|---|---|---|---|
| a Engineering/platform role | 13 | 76% | 11 | 73% |
| b Governance/policy/compliance core duty | 7 | 41% | 11 | 73% |
| c Spend/cost/usage tracking | 6 | 35% | 5 | 33% |
| d AI coding tools/agents for developers | 5 | 29% | 5 | 33% |
| e Gateway/routing across models/vendors | 3 | 18% | 5 | 33% |
| f Measuring adoption or value | 12 | 71% | 6 | 40% |
| g Regulation named | 1 | 6% | 4 | 27% |
| h PACE, strict Y | 8 | 47% | 5 | 33% |
| h PACE, strict + weak | 14 | 82% | 9 | 60% |
| i Build only | 9 | 53% | 7 | 47% |
| i Both | 8 | 47% | 6 | 40% |
| i Buy only | 0 | 0% | 1 | 7% |
| i Unclear | 0 | 0% | 1 | 7% |
| j Size 1,000+ employees | 4 (ABC, Esko, Okta, Personio) | 24% | 11 | 73% |
| j Size under 1,000 | 13 | 76% | 4 | 27% |

Which tech ads hit what: b = CoreView, ElevenLabs, Okta, Legora, Phorest, Preply, Taktile. c = ABC, CatalystOne, Okta, Actian, Phorest, Preply. d = ABC, CatalystOne, Okta, Riskified, Xensam. e = Actian, Preply, Rydoo. g = Esko. h strict = ABC, CatalystOne, ElevenLabs, Riskified, Actian, Legora, Phorest, Rydoo.

Four tech ads hit b, c and either d or e together: Okta (b, c, d), Phorest (b, c), Preply (b, c, e), Actian (c, e). Only Okta covers b, c and d.

## 5. Conclusion

### What the data shows
- **Control need (b) is lower in tech: 41% vs 73%.** The gap is mostly regulated-firm language (policy enforcement, audit, vendor risk). Spend tracking (c) is the same, 35% vs 33%. Coding tools named (d) is the same, 29% vs 33%. Gateway/multi-vendor routing (e) is lower, 18% vs 33%. Regulation named (g) is far lower, 6% vs 27%, and the one tech hit (Esko) is product regulation, not AI rules.
- **Pace (h) is common in both.** Strict: 47% tech vs 33% finance. With weak mentions: 82% vs 60%. Tech ads use "move fast", "first 90 days" and "rapidly" more directly. Finance ads more often say "accelerating adoption" or are silent.
- **Build vs buy (i): both lean build.** Tech: 9 Build, 8 Both, 0 Buy. Finance: 7 Build, 6 Both, 1 Buy. Almost no ad says the hire will only choose and buy vendor tools. About half (8 of 17 tech, 6 of 15 finance) mention evaluating or integrating vendor tools next to building.
- **Tech is smaller.** 76% of the tech ads are from companies under 1,000 employees. Finance is 73% at 1,000+.
- **Measuring adoption or value (f) is far more common in tech: 71% vs 40%.**

### My judgement
- **Tech does not show the same need for control, but it is not absent.** About 4 in 10 tech ads treat governance as a duty, and a third track spend. That is a real buyer need, just less rule-driven than finance. The need in tech reads as cost control and sensible limits, not compliance.
- **Pace is a message worth testing for both, and more natural for tech.** "Set budgets and limits before the work runs" can be framed as how to move fast without surprise bills. The ads support speed as the concern; I did not find ads asking for a way to limit speed.
- **Build-leaning ads are a risk for any vendor.** Most hires are asked to build platforms, so Kimchi would be competing with an internal build, not only with other vendors. That holds in both industries. The "Both" ads (about half) are the opening: those hires also evaluate vendor tools.
- **Should tech stay in the target?** Keep it as a secondary segment, not a replacement for finance. Reasons: control signals are weaker and smaller companies buy less. Reasons to keep it: spend tracking and coding-agent mentions match finance, pace is stronger, and tech companies decide faster. Best test: tech companies with 1,000+ staff (ABC Fitness, Okta, Esko, Personio) and those whose ads hit b + c together (Okta, Phorest, Preply). This is a judgement from 17 and 15 ads, not a proven result.

## 6. Limits

- **Small samples.** 17 tech and 15 finance ads. One ad moves a percentage by 6 to 7 points. Differences under about 15 points (c, d, i) should be read as "similar".
- **Different selection.** Finance ads were picked in the 23 Oct read (platform/enablement roles at known firms). Tech ads are all UK/EU ads in the 24-27 Oct list. Neither is a random sample.
- **Quote extraction.** A summarising fetch tool returned the text; I could not diff quotes against the pages. Two Okta and Taktile regulation hits were recognised as boilerplate and coded N; other boilerplate may remain.
- **Judgement coding.** b, e, h and i needed calls (rules in section 1). A different reader could move a handful of cells. The "weak" pace split is shown for that reason.
- **Business-AI ads are in both sets** (a = N): tech has n8n, 8COM, Legora, Personio; finance has If, Shine, Ayvens (and Commerzbank mixed). I kept them so the percentages stay comparable. I skipped only customer-facing/product-vendor titles and unreadable ads.
- **Taktile.** LinkedIn labels it Financial Services and it appears in the finance size list. Moving it to finance changes tech to 16 ads: b 6/16, c 6/16, f 11/16, h strict 8/16, i Build 8, Both 8. No conclusion changes.
- **Rate limits.** LinkedIn returned HTTP 429 for some reads; I retried. A direct curl fetch was refused by the environment, so only the fetch tool was used.
- **Ads show intent, not purchases.** Same limit as the finance set. Sizes are LinkedIn labels at 24 Oct, and they vary from the headcounts written in some ad bodies.

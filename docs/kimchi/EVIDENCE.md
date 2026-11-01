# Kimchi exercise: evidence pack

Public sources only, gathered 23 Oct 2026. Each line is marked **Shows** (what the source says) or **Assumes** (our inference). Vendor pages are the vendor's own claims, not independent facts.

**Not evidence:** anything from the first-round interview, and Islam's own experience. These can be mentioned in discussion, clearly labelled, but the bet must stand on public sources.

## 1. What Kimchi says it is
- **Shows:** "The governed AI coding platform". Hard budget caps per user, team, key and model. Cost attribution per developer, team, model and tag. Multi-model routing. VPC, on-prem or serverless deployment. Studio, Teleport, Workspaces and Code Review. Logos: Akamai, WeWork, Roku, Hugging Face, Cisco, Yotpo, Swisscom. [kimchi.dev](https://kimchi.dev/)
- **Shows:** The enterprise page sells to "enterprises and regulated teams". It offers SSO/SAML/SCIM, prompt-level audit to a SIEM, scoped secrets, and an approved skills and MCP registry. It cites SOC 2 Type II, ISO 27001, HIPAA-ready, and design around DORA. It claims about 88% of requests go to self-hosted open models. No case studies or outcome metrics. [kimchi.dev/enterprise](https://kimchi.dev/enterprise)
- **Shows:** Pricing runs Open Source (free CLI), Coder $20/mo, Teams $35/seat, Enterprise custom, and Code Review $15/user. [kimchi.dev/pricing](https://kimchi.dev/pricing)
- **Shows:** Launched May 2026 with a bottom-up pitch ($50 free credits, import from Claude Code and OpenCode, cost per token). [Launch post](https://kimchi.dev/blog/say-hello-to-kimchi). The early adopter programme is now closed. [kimchi.dev/earlyadopters](https://kimchi.dev/earlyadopters)
- **Shows:** GA in July 2026. Cast AI claims it is 2.5x cheaper than a commercial-only baseline in shadow mode, with Akamai named as a user. [IT Brief](https://itbrief.co.uk/story/cast-ai-launches-kimchi-coding-with-production-support), [Techzine](https://www.techzine.eu/news/devops/142903/cast-ais-kimchi-coding-agent-reaches-general-availability/)
- **Assumes:** The site still carries the launch-era bottom-up and cost story next to the newer enterprise and governance story. That is two stories at once, which the brief says they can't afford.

## 2. Parent company and installed base
- **Shows:** Cast AI had about 2,100 customers (TechCrunch, 2025). It is a Kubernetes automation and cloud cost platform. Named users include Akamai, BMW, FICO, Hugging Face, NielsenIQ and Swisscom. It raised a $108M Series C in 2025. [TechCrunch](https://techcrunch.com/2025/04/30/cast-ai-raises-108m-to-get-the-max-out-of-ai-kubernetes-and-other-workloads), [Cast AI press release](https://cast.ai/press-release/cast-ai-closes-108m-series-c-round/)
- **Assumes:** Cast AI's buyer (platform engineering, FinOps) is close to, but not the same as, the person who owns AI coding tools.

## 3. Demand signals: the "governed agent rollout" job exists
- **Shows:** A Parsons role starts with a 3–6 month mandate to enable coding agents (Copilot, Claude Code), with model calls routed through company-controlled cloud environments. [WeAreDevelopers](https://www.wearedevelopers.com/jobs/ext/7367549/ai-platform-engineer)
- **Shows:** A ServiceNow principal engineer role aims at enabling 200+ engineers to use agentic AI safely, with guardrails on data privacy and cost. [ServiceNow careers](https://careers.servicenow.com/jobs/744000141430384/principal-systems-engineer/)
- **Shows:** A GenAI Enablement Lead role in Warsaw embeds AI in the internal developer platform and champions "safe and compliant" use. [justjoin.it](https://justjoin.it/job-offer/hirexa-gen-ai-enablement-lead-warszawa-ai)
- **Shows:** AI platform leader specs converge on model catalogs, golden paths, guardrails and governance. [Augment guide](https://www.augmentcode.com/guides/ai-platform-engineering-leader-job-spec)
- **Shows:** 61% of 100 engineering organisations run agents of some kind (Coder assessment, via Spectro Cloud). [Spectro Cloud](https://spectrocloud.com/blog/ai-agents-are-production-workloads)
- **Assumes:** The champion is a new role: platform engineering or AI enablement lead, with a mandate and a budget line.

## 4. Pain signals: shadow AI, approved-tool lists, invisible spend
- **Shows:** Companies keep approved-tool lists (for example Copilot Enterprise, Claude Code Enterprise, Cursor Business) and ban personal tiers. Blocking alone pushes usage to personal devices, so the advice is to offer a governed alternative. [Maxim on shadow AI](https://www.getmaxim.ai/articles/shadow-ai-coding-tools/), [AI Policy Desk](https://www.aipolicydesk.com/blog/ai-coding-tools-governance-policy-github-copilot-cursor-2026)
- **Shows:** Anthropic's billing shows total spend without a per-developer, per-team or per-project breakdown. Third-party trackers are appearing (Vantage, pointfive). [Maxim on Claude Code costs](https://www.getmaxim.ai/articles/top-5-tools-for-claude-code-cost-management/), [pointfive](https://www.pointfive.co/blog/how-to-track-coding-agent-spend-across-your-team)
- **Shows:** Agent spend follows the work given to agents, not headcount. Seat-based budgeting breaks. [nOps](https://www.nops.io/blog/ai-roi-in-software-engineering/)
- **Assumes:** The pain is sharpest where security forces a single approved vendor while engineers want agents. Islam's own employer is Copilot-only. That's an anecdote, not evidence.

## 4b. Community and analyst signals (first-hand reads)
- **Shows (Hacker News, about Sept 2026, 10 comments):** A mid-size startup asks how to cap agent spend across several vendors and harnesses. Replies: hard monthly caps just move spend to the last week of the month. A visible budget gauge works better. Retry loops burn most tokens. One commenter's usage is 10x lower than teammates' and they can't explain why. **Nobody mentions security, approved tools or sovereignty.** [Ask HN: control cost](https://news.ycombinator.com/item?id=49673825)
- **Shows (Hacker News, about Mar 2026):** Self-reported spend ranges from $40/month to $15,000 in one month. No one mentions visibility or governance tooling. [Ask HN: spend](https://news.ycombinator.com/item?id=47484203)
- **Shows (Blind, unverified):** Salesforce, PayPal, Datadog and GetYourGuide allow several tools (Cursor, Claude Code, Copilot). **No company in the thread is Copilot-only.** Google restricts external AI. [Blind](https://www.teamblind.com/post/companies-that-allow-usage-of-ai-gn674gks)
- **Shows (Gartner via The Register, 24 Jun 2026):** Bills are moving from $20–100 to $2,000–5,000 per developer per month as vendors switch from seats to consumption. Leaders lack insight into token billing. More tokens don't mean more productivity. Gartner recommends **model routing**: small models for routine tasks, frontier models for complex ones. [The Register](https://www.theregister.com/ai-and-ml/2026/06/24/ai-coding-agents-could-soon-cost-more-than-the-developers-using-them/5260864)
- **Shows (Tabnine reviews, aggregators):** Security teams approve Tabnine "where competitors get blocked". The cons are air-gapped operational overhead and weaker completion quality than large models. [aicodereview.cc](https://aicodereview.cc/tool/tabnine), [rfp.wiki](https://www.rfp.wiki/artificial-intelligence/tabnine)
- **Shows (LinkedIn, organic):** No Kimchi or Cast AI ads found by search. The LinkedIn Ad Library must be checked by hand. Organic posts frame Kimchi as governance, sovereignty and cost observability "in the product, not add-ons".
- **Correction:** The "Copilot-only shop" pain isn't supported by the community sources found so far. The loudest public pain is **unpredictable agent spend with no attribution**. Sovereignty evidence comes mostly from vendors, analysts, job posts and IBM's move, not from practitioners.

## 5. Regulated and sovereignty signals
- **Shows:** DORA reaches AI vendors through contracts (register of information, exit strategy, data locations). There is no blanket EU-residency rule. Banks often self-host to keep the model provider off the DORA register for that workload. [Dynamiq](https://www.getdynamiq.ai/post/think-global-act-local-how-data-residency-regulations-influence-banks-llm-use), [Digiwit](https://digiwit.ai/blog/dora-onpremise-ai)
- **Shows:** A bank coding-agent pattern restricts outbound traffic to approved destinations and runs model calls through a bank-controlled LLM gateway. [VirtusLab](https://virtuslab.com/blog/ai/how-banks-govern-autonomous-ai-software-development)
- **Shows:** IBM launched self-hosted Bob (1 Oct 2026), pitched on keeping IP and source code in-house. That shows large vendors see the same demand. [IBM newsroom](https://newsroom.ibm.com/2026-10-01-ibm-introduces-self-hosted-deployment-for-ibm-bob-to-help-enterprises-advance-ai-sovereignty-and-governance)
- **Shows:** Analysts frame vendor lock-in and exit rights as central to 2026 agentic AI vendor choices. [Kai Waehner, Q3 2026](https://www.kai-waehner.de/blog/2026/08/04/trusted-agentic-ai-landscape-q3-2026-enterprise-vendor-selection-sovereignty-and-lock-in/)
- **Assumes:** "Exit strategy" under DORA is a stronger hook for EU financial services than "sovereignty" in the abstract.

## 6. Competitive landscape
- **Air-gapped assistants:** Tabnine (SaaS, VPC, on-prem, fully offline; the agentic tier is about $59/user). [eesel](https://www.eesel.ai/blog/tabnine-overview)
- **Autonomous remote agents:** Devin by Cognition (Windsurf was rebranded Devin Desktop in June 2026). [Wikipedia](https://en.wikipedia.org/wiki/Cognition_AI)
- **Enterprise context:** Augment Code (large codebases). [Rework](https://resources.rework.com/tools/ai-tools/best-ai-coding-tools-2026)
- **Self-hosted IBM Bob, open agents** (OpenHands, Cline, OpenCode) on private models. [OpenHands](https://www.openhands.dev/blog/open-source-ai-coding-agents)
- **AI gateways** (budgets and virtual keys): Portkey, now part of Palo Alto Networks; LiteLLM (supply-chain incident in March 2026); Bifrost. Gateways govern the model call, not what the agent does. [Future AGI](https://futureagi.com/blog/portkey-alternatives-2026)
- **Assumes:** Kimchi's defensible space is the combination of agent runtime, governance and choice of open or flagship models inside the perimeter. No competitor here shows all four.

## 6b. Kimchi's own Discord (public community server, read 23 Oct 2026)
Server "Kimchi.dev": about 1,800 members. Anyone can join with the invite on kimchi.dev. Read: #announcements, #introductions, #feedback, #general, #release-updates, plus a server-wide keyword search. Author names in grouped messages are sometimes misattributed by the reader, so quotes are attributed by channel and date, not by person.

**Onboarding**
- **Shows:** The two onboarding questions are "What's your primary AI coding tool today?" (Copilot / Claude Code, Codex, Gemini CLI / Cursor / other) and "How did you hear about Kimchi?" (X / LinkedIn / email invite / GitHub). Kimchi segments its community by the tool people switch from.

**Who the community is**
- **Shows (#introductions, Jun–Oct):** Members are overwhelmingly individual developers and hobbyists (India, Indonesia, Kenya, LATAM and others) building personal projects. One 24 Jun intro: "closely resembles claude code but is generous in terms of free credits". A banking-IT support specialist (5 Jun) is the only enterprise-adjacent intro. None of about 140 intros present as a platform, security or engineering leader buying for a team.
- **Shows (search counts across the whole server):** "credits" 526 results. "company" 19 (mostly complaints). "budget" 13. "self-host" 7. "enterprise" 3. "governance" 2. "privacy" 1.

**What happened to the bottom-up motion (#announcements timeline)**
- 9–11 Jun: signups paused twice; "100% capacity". Too much free-tier demand.
- 23 Jun: graduates from Early Access. 30 Jun: early access credits end, new free users get $10.
- 1–8 Jul (#feedback): wave of complaints. "Feeling betrayed", "scammer", "this is blatant fraud". "When kimchi costing same like claude code… will buy claude code itself".
- 13 Jul: staff reply positions against Claude Code on **no lock-in to one model provider** and multi-model routing, not on price.
- 13–16 Aug (#general): "glad i left kimchi for good", "Just literally anything but Kimchi". Users recommend OpenCode Go ($5), Freebuff and Cursor.
- 17 Aug: the Community plan loses free inference. The OSS harness stays.
- 29 Sep – 20 Oct: the server fails Discord's activity requirements and is removed from Server Discovery.
- 11 Oct (#general), staff: "This is for Kimchi.dev - the Governed AI coding platform".

**Where the product is heading (#release-updates)**
- **Shows:** Weekly update (Oct): "org policy enforced end-to-end" (permission modes, ferment elevation gate, **org usage-reporting**), built-in MCP gateway, `/session-costs` per session, model and workspace.

**Small team and enterprise signals**
- **Shows (#feedback, 19 Oct):** One user wants scheduled, long-running agent jobs for their team via Slack ("reports are preran… so we can all have what's needed before the day starts").
- **Shows (#feedback, 29 May):** A developer on an enterprise Claude plan describes a $200 personal monthly allowance, after which they're "back to… manual coding mode until end of the month". Per-developer caps hurt the developer too.
- **Shows (#general, 2 Oct):** A visitor notes there's no enterprise trial, only the community edition.
- **Shows (public YouTube):** An independent video review of Kimchi by Justin Garrison is titled "Anthropic would never let you do this" (6 Sep).

**What it means (Assumes)**
- The public community is the bottom-up audience Kimchi moved away from. It is price-led, churns when free credits stop, and doesn't represent the enterprise buyer. That's strong public evidence for **excluding individual developers and price-led messaging** from the first bet.
- The enterprise buyer isn't visible in public communities. We'll have to reach them directly (outbound, Cast AI base, events), which shapes the test design.

## 6a. Reddit (threads picked by Islam, read through the PullPush archive)
- **Shows ([r/EngineeringManagers, Jun 2026](https://www.reddit.com/r/EngineeringManagers/comments/1uai5wa/is_ai_token_spend_becoming_a_real_problem_inside/)):**
  - A large US financial firm is now in "tokenomics" meetings, with senior leaders split on capping.
  - A mid-size fintech found one workflow had run up about $4,000 in a week unnoticed; its CTO joined a #llm-costs channel.
  - At another firm, the bill doubled monthly for 5 months to about $60k: "What I cannot do is point at commensurate cash flow."
  - Finance flagged $40k/month in shadow spend from team-owned keys.
  - "Cost per accepted change, not cost per developer."
  - Several replies are vendor plugs and are ignored.
- **Shows ([r/EngineeringManagers, Aug 2026](https://www.reddit.com/r/EngineeringManagers/comments/1vgract/whats_been_the_most_frustrating_or_expensive/)):** "Code generation scaled much faster than the engineering controls around it." Review overload, AI prose in PRs, an $80 test run that had to be locked down, and a CTO asking "where do we store our data".
- **Shows ([r/ExperiencedDevs, Aug 2026, 339 upvotes](https://www.reddit.com/r/ExperiencedDevs/comments/1vg0cx8/what_do_you_do_when_a_developer_submits_ai/)):** AI tools are banned in a repo "because of IP concerns", and a developer used them anyway. Shadow AI against a sovereignty rule.
- **Shows ([r/ExperiencedDevs, Jul 2026, removed by moderators](https://www.reddit.com/r/ExperiencedDevs/comments/1v6n7d7/2yrs_at_current_company_new_project_is_99_ai/)):** A whole MVP was generated by Claude, and reviewers approve PRs they don't understand.
- **Assumes:** Spend visibility and proving value are buyer-voiced pains, and they show up in financial services. Sovereignty appears only indirectly.

## 6c. Kimchi GitHub (public issues)
- **Shows:** #1242 "setup-tools exposes credentials and changes Claude/Codex configuration without backups". Onboarding trust gap for a governance-led message. [GitHub issues](https://github.com/getkimchi/kimchi/issues)
- **Shows:** Docs offer per-developer OpenTelemetry usage reporting for Claude Code. Kimchi can govern tools teams already use, not just its own agent. [Kimchi docs](https://docs.kimchi.dev/docs)

## 7. What's missing
- No public customer stories or outcome numbers for Kimchi.
- No community discussion found (Hacker News, Reddit). Software Advice shows 0 reviews. [Software Advice](https://www.softwareadvice.co.uk/software/548863/Kimchi)
- Not checked yet: ad libraries (LinkedIn, Meta), competitor G2 reviews, and Kimchi's own Discord.

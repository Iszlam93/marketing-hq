# Tier 1 account briefs (11 companies)

Built 24 Oct 2026. Job ads were read in full on LinkedIn (read-only, logged-in Chrome, one tab, closed afterwards). Company facts come from public web sources only. "Not found" means the public sources I checked did not say. Size and industry are LinkedIn's own labels.

Scoring: yes / partly / no per item A to F. Overall is set by the count of "yes" only: strong 5-6, likely 3-4, weak 0-2. "Partly" is shown but not counted.

- A = developer- or engineering-facing (coding agents or a platform for engineers)
- B = governance, policy or audit named
- C = spend, cost or usage control named
- D = several models or vendors (needs routing)
- E = data, security or regulation named
- F = a dedicated AI platform / enablement team exists or is being built

## Summary table

| Company | LinkedIn size | HQ country | Regulator (public) | A B C D E F | Overall | Best angle |
|---|---|---|---|---|---|---|
| Raisin | 501-1,000 | Germany | BaFin (Raisin Bank AG, full banking licence) | Y Y Y Y Y Y | strong (6) | Control |
| Kraken (Payward) | 1,001-5,000 | US | CBI (MiCA), FCA e-money licence (secondary source), EU VASP registrations | P Y Y Y Y Y | strong (5) | Control |
| bunch | 51-200 | Germany | Not found (ISO 27001 only) | P Y Y Y Y Y | strong (5) | Data inside |
| 9fin (2 roles) | 501-1,000 | UK | Not found (no FCA permission stated) | P Y Y P Y Y | likely (4) | Control |
| Taktile | 201-500 | Germany | Not found (vendor; ISO 27001, SOC Type 2) | P Y N P Y Y | likely (3) | Control |
| Accelerant | 501-1,000 | Cayman Islands (profile; unverified) | Insurers rated AM Best A-; Lloyd's consortium; licences not confirmed | Y P Y N P Y | likely (3) | Proving value |
| Macro Hive (BGC) | 11-50 | UK | Not found for Macro Hive itself (parent BGC has an FCA benchmark licence) | P Y Y P P P | weak (2) | Control |
| National Wealth Fund | 201-500 | UK | Not FCA/PRA authorised (secondary source); HM Treasury owned | N Y N N Y P | weak (2) | Proving value |
| SIX | 1,001-5,000 | Switzerland | FINMA and SNB (market infrastructure entities) | Y N N P N P | weak (1) | Proving value |
| Optasia | 201-500 | Dubai (per press; Athens office) | JSE-listed; licences not found | N P N P P P | weak (0) | Proving value |
| Shine (Cegid) | 1,001-5,000 | France | ACPR (payment institution no. 71758) | N N N N P P | weak (0) | Proving value |

Read this table with one caution. The score rewards ads that name governance, spend and routing. SIX scores "weak" by that rule, yet it is the only ad that names Claude Code and a developer rollout. See its section.

---

## 1. Raisin

**Company**
- What it does: savings and investment marketplace connecting consumers with banks in the EU, UK and US. Source: job ad.
- HQ: Germany (Berlin). Markets: EU, UK, US. LinkedIn: Financial Services, 501-1,000 employees (ad says 800+).
- Regulated: yes. Raisin Bank AG holds a full banking licence under the German Banking Act (registration no. 100112), supervised by BaFin; Raisin Bank is regulated by the Central Bank of Ireland for conduct of business in Ireland. Source: https://www.raisin.com/en-ie/site-information and Raisin's Irish terms PDF https://www.raisin.ie/app/uploads/2022/02/2023-04-16_agb_ie_stand-april-2023-docx-google-docs.pdf. UK FCA status: not found.

**Job ad** (https://www.linkedin.com/jobs/view/4475234224/)
- Title: AI Platform Engineer (m/f/d). Berlin, Germany, hybrid. Team: AI Enablement ("builds Raisin's internal AI platform"). Reports to: not stated.
- Duties:
  - Build and run shared services giving governed access to AI models and tools.
  - Connect AI agents safely to internal systems and data, with identity, permissions and review.
  - Build agentic workflows across the dev lifecycle: planning, code review, testing, release.
  - Create reusable building blocks (agent instructions, skills, integrations) for engineering teams.
  - Help engineers adopt AI-assisted development and measure effect on delivery.
  - Turn security, legal and compliance requirements into controls the platform enforces.
- Tools, models, vendors named: none by name. Mentions LLM gateways, MCP, managed model services, OAuth/OIDC, OpenTelemetry, AWS, "AI coding assistants".
- Quotes:
  - Governance/audit: "authentication, routing across providers, usage limits, guardrails, and audit logging"
  - Spend: "observability for reliability, usage, and cost"
  - Security/regulation: "Because Raisin operates in regulated financial services, security and compliance are core"
  - Data: "the controls that keep data secure and usage auditable"
  - Developers/coding agents: "from AI-assisted coding to agentic workflows"
  - Measuring value: "Measure adoption, reliability, cost, and impact"
  - Models: "Make principled model choices based on cost, latency, and quality."

**Public AI signals**
- No Raisin blog, press or talk on AI found. Other Raisin postings (AI Engineer, Berlin, 2026) describe the same AI Enablement team and "shared foundations, guidance, and reusable solutions". Source: https://www.indexventures.com/startup-jobs/raisin/ai-engineer-mfd/ . Public AI governance statement: not found.

**Fit**
- A yes: "agentic workflows that support teams across the development lifecycle"
- B yes: "usage limits, guardrails, and audit logging"
- C yes: "observability for reliability, usage, and cost"
- D yes: "routing across providers"
- E yes: "security and compliance are core"
- F yes: "AI Enablement builds Raisin's internal AI platform"
- Overall: strong (6/6).

**Best angle: Control.** "governed access to AI models and tools" plus "routing across providers, usage limits, guardrails, and audit logging" is Kimchi's pitch in the ad's own words. Raisin is also building it from scratch ("You will join early"), so build-vs-buy is open.

**Open questions:** who the role reports to; whether Raisin already uses a gateway or vendor; which coding agents engineers use today; UK regulatory status; any public AI policy.

---

## 2. Kraken (Payward)

**Company**
- What it does: crypto and multi-asset exchange (spot, margin, futures, staking, payments). Parent is Payward (Kraken, NinjaTrader, others). Source: job ad.
- HQ: US (not verified in this run; the ad is a Payward ad with a US legal notice). Markets: 190+ countries. LinkedIn: Financial Services, 1,001-5,000.
- Regulated: yes, several. MiCA licence from the Central Bank of Ireland (June 2025); VASP registrations in Ireland, Belgium, France, Italy, Netherlands, Poland, Spain; an FCA e-money licence reported by a secondary source. Source: https://www.businesswire.com/news/home/20250625529871/en/Kraken-Secures-MiCA-License-from-Central-Bank-of-Ireland-Cementing-Leadership-in-European-Crypto-Markets . FCA detail not confirmed on the FCA register.

**Job ad** (https://www.linkedin.com/jobs/view/4467546957/)
- Title: AI Platform Engineer, Enablement and Governance Operations. Spain, remote. Team: Enterprise Transformation ("owns Kraken's internal AI platform"). Reports to: not stated.
- Duties:
  - Design and build the technical layer of the AI platform; close capability gaps by buying or building.
  - Own the governed integration gateway (connector onboarding, OAuth, federated identity).
  - Build agent scaffolding, reusable skills, prompt assets, evaluation harnesses for model changes.
  - Configure and operate tiered spend controls: caps by role and tier, alerting, exception queues.
  - Implement controls behind data handling, retention and model eligibility (SSO, SCIM, entitlements).
  - Run enablement and administer the enterprise AI estate (model turn-ups, deprecation, seats).
- Tools, models, vendors named: Okta (or equivalent), OAuth, SCIM, SSO, MCP, Python, Jira/Confluence admin. No model vendors named.
- Quotes:
  - Spend: "Tiered spend controls are live, a governed integration gateway is in production"
  - Spend: "Set caps by role and tier, build alerting rules"
  - Governance: "technical controls behind policy on data handling, retention, and model eligibility"
  - Regulation: "system inventory is being built against real regulatory obligations"
  - Data: "retention terms differ by model class"
  - Developers: "explain a technical capability... to compliance, traders, and backend engineers"
  - Measuring: "run monthly reconciliation against vendor commitments"

**Public AI signals**
- Other Payward postings describe Claude-based workflows as already running core operations ("Claude-powered workflows, agentic pipelines"). Source: https://jobs.blockchaincapital.com/companies/kraken/jobs/76134229-principal-business-operations-ai-automation . This is recruiting copy, not an announcement.
- Founding DevRel posting aims at MCP servers, SDKs and "agent-friendly" launches. Source: https://jobs.dcg.co/companies/kraken/jobs/81465673-founding-devrel-lead . Public governance statement: not found.

**Fit**
- A partly: platform for the whole company incl. backend engineers; no coding-agent rollout named
- B yes: "technical controls behind policy"
- C yes: "tiered spend controls"
- D yes: "model eligibility" and "model class"
- E yes: data handling, retention, regulatory obligations
- F yes: "Enterprise Transformation owns Kraken's internal AI platform"
- Overall: strong (5; A partly).

**Best angle: Control.** "Tiered spend controls are live, a governed integration gateway is in production": Kraken has already built the first version, so the pitch is replace-or-extend, and "eliminate the current single author risk in cap automation" shows the pain.

**Open questions:** what the gateway and spend caps are built on; which AI vendors are approved; coding-agent usage in engineering; reporting line.

---

## 3. bunch

**Company**
- What it does: AI-native operating platform and fund services for private-markets fund managers (fund administration, document extraction, LP reporting). Source: LinkedIn About and https://www.bunch.capital/ .
- HQ: Germany (founded Berlin 2021). Markets: Germany, Luxembourg, UK, Netherlands. LinkedIn: Financial Services, 51-200 (ad says 130+).
- Regulated: not found. The website shows no BaFin or CSSF licence number; it shows ISO 27001 and says it combines AI with "deep regulatory expertise" (LinkedIn About). Tax work is done by a separate legal entity. Needs a register check.

**Job ad** (https://www.linkedin.com/jobs/view/4468219494/)
- Title: Senior Applied AI Engineer, AI Platform. Portugal, remote. Team: AI Platform. Reports to: not stated (final interview with the CTO; works with DevX).
- Duties:
  - Build and ship agents for fund-operations workflows, integrated with authorization.
  - Build the evaluation layer (regression suites in CI, human review).
  - Own AI application architecture, MCP, guardrails, approvals, human-in-the-loop.
  - Run it in production: versioned rollout, rate limits, provider fallback, regional failover.
  - Make shared evaluation and observability something other teams consume.
- Tools, models, vendors named: Mastra, Vercel ai-sdk, Google Vertex (Gemini) with AWS Bedrock fallback in EU regions, Datadog, Kubernetes on AWS, NestJS, FusionAuth, Retool, LangGraph.
- Quotes:
  - Data: "multi-provider fallback inside EU data residency"
  - Governance: "guardrails, approvals, and human-in-the-loop controls"
  - Spend: "token usage, estimated cost, latency, failures and retries per provider"
  - Spend: "rate limits, provider fallback, and regional failover"
  - Platform: "the platform that lets every other team at bunch ship the same way"
  - Measuring: "move the numbers that matter — accuracy, latency, cost"

**Public AI signals**
- Series B (US$35m, May 2026); website describes "AI-Native Private Markets Infrastructure". Source: https://ventureburn.com/bunch-secures-35m-to-transform-private-markets/ and https://www.bunch.capital/ .
- Partnership with Luxembourg Fund Services for "AI-native infrastructure" (title only read): https://www.bunch.capital/blog-posts/bunch-enters-strategic-partnership-with-luxembourg-fund-services-to-bring-ai-native-infrastructure-to-europes-leading-fund-market .
- bunch's own engineering blog on Mastra or data residency: not found. Public AI governance statement: not found.

**Fit**
- A partly: platform for other engineers, but agents are for a product, not coding agents
- B yes: "guardrails, approvals, and human-in-the-loop controls"
- C yes: "token usage, estimated cost"
- D yes: Gemini with Bedrock fallback
- E yes: "EU data residency"
- F yes: "AI Platform team"
- Overall: strong (5; A partly).

**Best angle: Data inside.** "multi-provider fallback inside EU data residency" is a hard design rule: any control layer must route across models without data leaving the EU.

**Open questions:** whether bunch holds any financial licence; whether engineers use coding agents internally; reporting line; who owns spend today.

---

## 4. 9fin (two roles)

**Company**
- What it does: AI-native data, news and analytics platform for global debt markets; 300+ institutional clients. Source: https://9fin.com/about .
- HQ: UK (London). Markets: global, rapid US expansion. LinkedIn: Financial Services, 501-1,000.
- Regulated: not found. Site shows 9fin Limited (company no. 10451957) and no financial authorisation. It claims ISO/IEC 42001:2023 certification (announced 30 Sept 2026), described as "independently assessed AI governance". Source: https://9fin.com/about (certificate not independently checked).

**Job ads**
- Role 1 (the ID you gave, https://www.linkedin.com/jobs/view/4471519627/): AI Engineering Lead, GenAI Platform. London, hybrid. Team: AI Engineering. Reports to the Head of AI. Note: the earlier notes list this company's job as "Senior AI Platform Engineer"; that is the other role below.
- Role 2 (https://www.linkedin.com/jobs/view/4436231421/, found by LinkedIn search): Senior AI Platform Engineer. London, hybrid. Works with the Engineering Lead.
- Duties (Lead): lead the GenAI Platform team; set direction; "own the delivery and operation of reliable, secure and scalable platform capabilities"; make the platform easy for other engineers to adopt; partner on evaluation.
- Duties (Senior): build the "enterprise AI platform"; prompt management, model serving, "AI gateways, and evaluation services"; APIs, SDKs, developer tooling for self-service AI development; AI observability incl. "cost optimisation"; set standards for "governance, Responsible AI".
- Tools, models, vendors named: AWS Bedrock and AgentCore, MCP, Arize Phoenix, Langfuse, Langsmith, LangGraph, LangChain, DSPy, CrewAI, Kubernetes, vector databases.
- Quotes:
  - Governance: "testing, governance, Responsible AI, deployment, and operational excellence"
  - Spend: "monitoring, tracing, evaluation, cost optimisation, and production quality measurement"
  - Routing (bonus): "AI gateways and model routing"
  - Data: "Platforms handling sensitive data in finance or other high-trust environments"
  - Developers: "self-service AI development across engineering teams"
  - Platform stage: "Rather than inheriting a mature internal platform"
  - Budget: "AI experimentation budget of £800 (UK) per employee to trial AI tools"

**Public AI signals**
- ISO/IEC 42001 claim, "Private 9fin", MCP Connector, 9fin AI. Source: https://9fin.com/about . A search found no independent confirmation of the certificate.
- Press: reported funding talks at about a US$1bn valuation (Feb 2026). Source: https://www.bloomberg.com/news/articles/2026-02-06/credit-data-firm-9fin-seeks-1-billion-valuation-in-fund-talks . Internal coding-agent policy: not found.

**Fit**
- A partly: platform for engineers building AI products, no coding agents named
- B yes: "governance, Responsible AI"
- C yes: "cost optimisation"
- D partly: "AI gateways and model routing" is a bonus item, not a duty
- E yes: "sensitive data in finance"
- F yes: GenAI platform team, early stage
- Overall: likely (4; A and D partly).

**Best angle: Control.** The ad wants "AI gateways and model routing" and "governance, Responsible AI" from a platform "built from the ground up". Their ISO 42001 claim also shows governance sells to their own customers.

**Open questions:** whether the platform serves internal coding agents or only product AI; FCA status; who runs the £800 per-person tool budget; which models they route across.

---

## 5. Taktile

**Company**
- What it does: "Agentic Decision Platform" for banks and insurers (agents, rules, human oversight for credit, fraud, claims). Customers named: Monzo, Mercury, Faire, Pleo. Source: job ad and https://www.taktile.com/ .
- HQ: Germany (Berlin); offices in New York, London, São Paulo, Iași. LinkedIn: Financial Services, 201-500.
- Regulated: not found for Taktile itself (software vendor). Site lists ISO 27001, SOC Type 2, GDPR and "EU AI Act readiness".

**Job ad** (https://www.linkedin.com/jobs/view/4474311519/)
- Title: Senior AI Enablement Engineer (the body text says "Data Engineer (AI Enablement)"). Berlin, hybrid. Team: AI Enablement. Reports to: not stated.
- Duties:
  - Embed across Engineering, GTM, Customer Success, Finance and Ops to find where AI removes friction.
  - Build internal tools and agents end-to-end on the SaaS stack.
  - Drive adoption via workshops, pairing, office hours; measure active usage and time saved.
  - Partner with Security and IT on guardrails, access scoping and audit trails.
  - Track new models and tools and bring them in.
- Tools, models, vendors named: Claude, Python, AWS, Snowflake, dbt, Terraform, Notion, Linear, HubSpot, Gong, Ramp, MCP.
- Quotes:
  - Governance: "guardrails, access scoping, and audit trails that protect customer data"
  - Value: "measuring success by active usage and time saved rather than features shipped"
  - Regulation: "Experience handling unstructured data or AI governance in regulated industries"
  - Platform: "As our first dedicated Data Engineer to AI Enablement"
  - Models: "bringing high-value models and tools back into the business"

**Public AI signals**
- Taktile Labs publishes AI-in-finance research (benchmarks on agents for KYC and AML, and "AI in AML: a guide to governance and implementation", March 2026). Source: https://www.taktile.com/ (labs.taktile.com not opened). These are product research, not internal AI policy.
- Another 2026 posting is for an AI Enablement Lead: https://www.indexventures.com/startup-jobs/taktile/ai-operations-lead/ . Internal AI governance statement: not found.

**Fit**
- A partly: engineering is one of several user groups; DX is "nice to have"
- B yes: "audit trails"
- C no: no spend or cost control
- D partly: stack names Claude only; "bringing high-value models" implies more
- E yes: "protect customer data"
- F yes: "first dedicated" AI Enablement hire
- Overall: likely (3).

**Best angle: Control.** "Guardrails, access scoping, and audit trails that protect customer data": governance is the stated job and the company sells to regulated banks, so it must show its own AI use is controlled.

**Open questions:** whether Taktile has a platform team beyond this single hire; spend today on Claude; whether engineers use coding agents under any policy; reporting line.

---

## 6. Accelerant

**Company**
- What it does: data-driven risk exchange linking specialty-insurance underwriters (MGAs) with risk capital; 20+ countries, 250 specialty products. Source: job ad.
- HQ: Cayman Islands per one company profile (unverified); large UK and US operations. LinkedIn: Insurance, 501-1,000. Listed (NYSE: ARX).
- Regulated: partly known. Its insurers hold an AM Best A- rating (ad); it launched an ARX consortium with Lloyd's (https://www.reinsurancene.ws/accelerant-expands-lloyds-partnership-with-launch-of-arx-consortium/ ). Which entities hold which licences and regulators: not found. Some press (low-quality outlet) reports unconfirmed regulatory scrutiny of related-party ties; not relied on.

**Job ad** (https://www.linkedin.com/jobs/view/4475234570/)
- Title: AI Platform Engineer. Greater London, remote (UK right to work). Team: works across squads and AI Guilds; "in close partnership with AI Platform Architect". Reports to: not stated.
- Duties:
  - Build production AI agents and services; reusable AI components.
  - Support development teams on AI implementations and "AI-driven Development initiatives".
  - Collaborate with Compliance and ARX PS teams.
  - Co-own AI workflow environments (e.g. n8n) with DevOps.
  - Implement RAG, prompt management, versioning and evaluation tooling.
  - Establish AI observability, monitoring and cost tracking.
- Tools, models, vendors named: n8n, vector databases. No model vendors.
- Quotes:
  - Spend: "Establish AI observability, monitoring, and cost tracking practices"
  - Developers: "Provides hands-on support for AI-driven Development initiatives"
  - Governance: "Collaborate with Compliance and ARX PS teams"
  - Standards: "Contributes to AI standards evolution through implementation feedback"

**Public AI signals**
- Q1 2026 earnings call: management cited higher output per engineer and a productivity lift of "more than 24%" from AI, and plans to invest gains in AI-enabled teams. Source: https://www.nasdaq.com/articles/accelerant-q1-earnings-call-highlights .
- Oct 2024 launch of a digital platform with AI risk scoring and LLM-based claims assessment. Source: https://secure.businesswire.com/news/home/20241031124563/en/Accelerant-Announces-Public-Launch-of-Revolutionary-Digital-Platform-with-Enhanced-AI-Capabilities . Public AI governance statement: not found.

**Fit**
- A yes: "Support development teams on AI implementations"
- B partly: Compliance named, no "governance" or audit
- C yes: "cost tracking"
- D no: no multiple models or vendors named
- E partly: Compliance named; no data or security wording
- F yes: AI Guild, AI Platform Architect
- Overall: likely (3).

**Best angle: Proving value.** Management already tells investors AI gave "more than 24%" more output per engineer, and the ad asks for "cost tracking". They have a number to defend and need spend and usage data to back it.

**Open questions:** AI tools and models in use; who owns the AI Platform Architect role; licence map; whether the headline productivity figure is measured from tool data.

---

## 7. Macro Hive (BGC Group)

**Company**
- What it does: independent global-macro strategy and AI analytics for institutional investors; acquired by BGC Group (Oct 2025). Source: https://www.businesswire.com/news/home/20251006195952/en/BGC-Group-Announces-Acquisition-of-Macro-Hive-to-Expand-Agency-Business .
- HQ: UK (London area); parent BGC is US-listed. Users in 160 countries. LinkedIn: Financial Services, 11-50.
- Regulated: not found for Macro Hive. Parent BGC's subsidiary BGC Brokers L.P. is an FCA-registered benchmark administrator (https://www.businesswire.com/news/home/20260127251252/en/BGC-Authorized-as-an-FCA-Registered-Benchmark-Administrator ); this does not cover Macro Hive.

**Job ad** (https://www.linkedin.com/jobs/view/4464875479/)
- Title: AI Platform Engineer, Agent Infrastructure and Product APIs. London area, on-site. Team: not named. Reports to: not stated.
- Duties:
  - Own agent runtime infrastructure and APIs between data, models and user interfaces.
  - Authentication, permissions, logging and monitoring.
  - Model and tool orchestration.
  - Usage, cost and error tracking.
  - Review queues and audit trails.
  - Internal tools for market dailies, consensus summaries, sales-ready content.
- Tools, models, vendors named: Python, FastAPI, LLM APIs; ChatGPT as an example of an LLM in the company blurb.
- Quotes:
  - Governance: "Review queues and audit trails"
  - Security: "Authentication, permissions, logging and monitoring"
  - Spend: "Usage, cost and error tracking"
  - Orchestration: "Model/tool orchestration"
  - Mission: "Turn agents, quant models and data into reliable products and workflows."

**Public AI signals**
- Company page says it uses LLMs for research and "alpha signals". Source: LinkedIn About. No 2025-26 engineering posts or governance statements found; a targeted search found nothing.

**Fit**
- A partly: engineers build agent infrastructure for a product, not for engineers' coding
- B yes: "Review queues and audit trails"
- C yes: "Usage, cost and error tracking"
- D partly: "Model/tool orchestration", vendors not named
- E partly: permissions and logging; no data or regulation named
- F partly: one platform role in an 11-50 firm
- Overall: weak (2). Also very small; likely a single buyer-builder.

**Best angle: Control.** "Review queues and audit trails" and "Usage, cost and error tracking" describe a control layer. At this size they may build it in-house, so the pitch is "don't build it".

**Open questions:** team size; whether BGC group IT controls tools; regulatory perimeter after the BGC deal.

---

## 8. National Wealth Fund

**Company**
- What it does: UK government-owned investor mobilising private capital into infrastructure and clean energy (£27.8bn). Source: job ad.
- HQ: UK (Leeds office in ad). LinkedIn: Banking, 201-500.
- Regulated: reported as not authorised or regulated by the FCA or PRA, owned by HM Treasury; a Treasury exemption order is also reported. Secondary sources only: https://beta.motherbase.ai/company/146503-national-wealth-fund . Check legislation.gov.uk before using.

**Job ad** (https://www.linkedin.com/jobs/view/4477806936/)
- Title: AI Enablement and Product Manager. Leeds, hybrid (3 days). 12-month fixed term, £75-80k, closes 25 Oct 2026. Team: not named. Reports to: not stated.
- Duties:
  - Lead discovery with business functions on Microsoft 365 Copilot, Copilot Studio and AI agents.
  - Product lead for prioritised AI initiatives (requirements, outcome measures, non-functional needs).
  - Take products from prototype and pilot to scaled operational adoption.
  - Track Copilot adoption and benefits.
  - Coordinate with business, technology, data, risk, governance, Commercial, Finance, AI Champions.
- Tools, models, vendors named: Microsoft 365 Copilot, Copilot Studio, Agent Builder, Power Platform, Azure AI, Microsoft Fabric.
- Quotes:
  - Governance: "security, auditability, resilience and supportability"
  - Control: "relevant risk or control indicators"
  - Value: "evidence business benefits"
  - Purpose: "responsible, measurable adoption of Microsoft 365 Copilot"
  - Commercial: "support value-for-money assessment" (desirable skill)

**Public AI signals**
- No NWF statement on AI strategy or policy found. Source checked via search only. Governance doc: not found.

**Fit**
- A no: business-user Copilot, engineers "retain responsibility for solution design"
- B yes: "auditability" and control indicators
- C no
- D no: Microsoft only
- E yes: "security", "access controls"
- F partly: AI Champions and a Community of Practice, no platform team; this is a 12-month contract
- Overall: weak (2).

**Best angle: Proving value.** "evidence business benefits" and "Track Copilot adoption and benefits" make measurement the whole job. Fit is poor for a coding-agent control layer; low priority.

**Open questions:** whether engineers use coding agents at all; who in technology owns tooling; public AI policy; procurement route.

---

## 9. SIX

**Company**
- What it does: operator of Swiss and Spanish exchanges and financial-market infrastructure (securities services, financial information, payments). Source: LinkedIn About.
- HQ: Switzerland. LinkedIn: Financial Services, 1,001-5,000 (about 4,000 staff in 19 countries).
- Regulated: yes. FINMA licenses SIX's market-infrastructure entities (e.g. SIX x-clear as central counterparty, SIX SIS as central securities depository); the Swiss National Bank oversees systemically important ones. Source: https://www.six-group.com/en/company/governance/monitoring-and-regulation.html (via search result).

**Job ad** (https://www.linkedin.com/jobs/view/4479849435/)
- Title: AI Solutions Lead, Development Tools (Claude Code). Warsaw, hybrid. Team: Software Engineering Practice Team. Reports to: not stated. (SIX's own site lists a near-identical "SDLC AI Engineer" posting: https://jobs.six-group.com/job/Warsaw-SDLC-AI-Engineer/1275175801/ .)
- Duties:
  - Own the AI roadmap for the software development lifecycle.
  - Evaluate, benchmark and assess AI tools and platforms.
  - Prototype AI workflows using agent frameworks.
  - Drive adoption: rollout strategy, pilots, workshops, "tracking measurable adoption outcomes".
  - First project: rollout of Claude Code for developers.
- Tools, models, vendors named: Claude Code, "modern agent frameworks".
- Quotes:
  - Developers: "rollout Claude Code for the Developers"
  - Scope: "putting agentic AI into the hands of product owners, business analysts, architects, testers and developers"
  - Measuring: "tracking measurable adoption outcomes"
  - Adoption: "drive adoption of new tools and practices across engineering teams, not just make them available"
  - Evaluation: "Continuously evaluate, benchmark and assess the latest AI tools and platforms"

**Public AI signals**
- Only job postings found; no SIX press, blog or talk on Claude Code or AI engineering policy. Source: https://www.efinancialcareers.com/jobs-Poland-Warsaw-AI_Solutions_Lead_-_Development_Tools_Claude_Code.id24351396 . Public governance statement: not found.

**Fit**
- A yes: Claude Code for developers
- B no: governance not named in the ad
- C no
- D partly: evaluates "tools and platforms", but Claude Code is the named product
- E no: not named in the ad (SIX is regulated, but the ad is silent)
- F partly: sits in the Software Engineering Practice team, no AI platform team named
- Overall: weak (1) by count. In practice the strongest developer match of the eleven.

**Best angle: Proving value.** "tracking measurable adoption outcomes" and "not just make them available" mean this lead will be judged on usage and results from a Claude Code rollout. Governance and spend control would follow as the rollout scales in a FINMA-supervised firm.

**Open questions:** how many developers; whether Anthropic is contracted directly; security review of Claude Code; whether policy and cost owners sit elsewhere (technology governance).

---

## 10. Optasia

**Company**
- What it does: AI-driven credit decisioning and mobile-financial-services platform for telcos, banks and wallets in emerging markets; over a billion credit decisions a month. Source: LinkedIn About.
- HQ: described as Dubai-based in press (https://businesstech.co.za/news/business/839361/dubai-based-finance-company-heading-to-the-jse/ ); this ad is Athens. Markets: Africa and Asia (432m users, per ad). LinkedIn: Financial Services, 201-500. JSE-listed (2025).
- Regulated: licences not found. JSE listing in the Consumer Lending subsection; a Nigeria regulatory suspension and fine was reported in 2026 (https://fm.co.za/2026-05-03-optasia-more-than-meets-the-ai/ ). Operates through partners who hold the lending capital.

**Job ad** (https://www.linkedin.com/jobs/view/4468603190/)
- Title: AI Enablement and Adoption Lead. Athens, hybrid. Team: People team. Reports to: not stated.
- Duties:
  - Own company-wide AI enablement strategy, roadmap and learning journeys.
  - Deliver an AI curriculum and coaching; build an AI Champions network.
  - Teach staff to build assistants, workflows and agents with Claude and Copilot.
  - Run internal AI communications and a self-service learning hub.
  - Measure adoption and impact; partner with IT and Security on policies.
- Tools, models, vendors named: Claude, Microsoft Copilot.
- Quotes:
  - Measuring: "tracking participation, capability, usage and business value"
  - Security: "promote responsible and secure use of AI"
  - Tools: "Strong hands-on experience with a variety of Generative AI tools, including Claude"
  - Scope: "company-wide AI learning and adoption strategy"

**Public AI signals**
- LinkedIn About says every product runs on "the same governed architecture", with "explainable models" and decision logic that stands "up to regulatory scrutiny". This is about its credit product, not employee AI. Source: LinkedIn company page.
- FY2025 results (Oct 2026): revenue up 76%; low default rate (secondary source). No internal AI policy found.

**Fit**
- A no: learning programme for all staff, not engineering
- B partly: "responsible and secure use", policies
- C no
- D partly: Claude and Copilot named
- E partly: IT and Security partnership, no data wording
- F partly: People-team enablement, no platform
- Overall: weak (0).

**Best angle: Proving value.** "tracking participation, capability, usage and business value" is the core ask. Low fit for a developer control layer.

**Open questions:** whether engineers use coding agents; who owns AI tool contracts; South African and other regulator exposure.

---

## 11. Shine (Cegid)

**Company**
- What it does: financial copilot for small businesses (invoicing, accounting, payroll, accounts, payments, financing); part of Cegid since June 2026. Source: job ad and https://www.cegid.com/global/news/cegid-acquires-shine/ .
- HQ: France (also Germany, Denmark, Netherlands). 400,000+ small businesses. LinkedIn: Information Technology & Services, 1,001-5,000.
- Regulated: yes. Shine is approved by the ACPR (France) as a payment institution, no. 71758 per Shine's legal notice; Cegid's release says Shine France is ACPR-regulated. Source: https://www.businesswire.com/news/home/20251126586228/en . Completion date of the deal (8 June 2026) rests on a secondary source.

**Job ad** (https://www.linkedin.com/jobs/view/4463048973/)
- Title: Head of AI Enablement (CEO Office). Berlin, on-site. Team: new team in the CEO's office. Reports to the Head of Business Performance.
- Duties:
  - Work with Finance, HR, Sales, Support teams as an "AI evangelist".
  - Design, build and ship custom AI tools, agents and automations per team.
  - Coach teams through an adoption journey.
  - Track and report adoption and impact.
  - Own what you build end-to-end.
- Tools, models, vendors named: LangGraph and MCP as examples. No vendors.
- Quotes:
  - Measuring: "measurable time saved, quality improved, or new capability unlocked"
  - Scope: "not part of the engineering org's dedicated AI-native platform team"
  - Focus: "not just building tools for other engineers"
  - Team: "a small, new team inside the CEO's office"

**Public AI signals**
- Cegid describes the combined group as an "AI-driven platform" for small businesses and accountants. Source: https://www.cegid.com/global/news/cegid-acquires-shine/ . No Shine AI governance statement found.

**Fit**
- A no (explicitly excluded)
- B no
- C no
- D no
- E partly: regulated industry is a "strong plus"
- F partly: new small team, business-facing
- Overall: weak (0).

**Best angle: Proving value.** "Number of workflows meaningfully transformed" and "Real business impact" are the metrics. The ad rules out an engineering platform, so this is a deprioritise-or-nurture account.

**Open questions:** whether Cegid's engineering org has its own AI platform team; how the Cegid merger changes tool buying.

---

## Patterns across the 11

Counts are of "yes" unless stated; "partly" in brackets.

| Pattern | Count | Which |
|---|---|---|
| A. Developer- or engineering-facing | 3 of 11 (+5 partly) | yes: Raisin, Accelerant, SIX. partly: Macro Hive, bunch, Taktile, 9fin, Kraken |
| B. Governance, policy or audit named | 7 of 11 (+2 partly) | Macro Hive, bunch, NWF, Taktile, Raisin, 9fin, Kraken. partly: Optasia, Accelerant |
| C. Spend, cost or usage control named | 6 of 11 | Macro Hive, bunch, Raisin, 9fin, Accelerant, Kraken |
| D. Several models or vendors / routing | 3 of 11 (+5 partly) | Raisin, Kraken, bunch. partly: Macro Hive, Optasia, Taktile, 9fin, SIX |
| E. Data, security or regulation named | 6 of 11 (+4 partly) | bunch, NWF, Taktile, Raisin, 9fin, Kraken |
| F. Dedicated AI platform / enablement team | 6 of 11 (+5 partly) | bunch, Taktile, Raisin, 9fin, Accelerant, Kraken |
| Overall strong / likely / weak | 3 / 3 / 5 | strong: Raisin, Kraken, bunch. likely: 9fin, Taktile, Accelerant. weak: Macro Hive, NWF, SIX, Optasia, Shine |
| Regulated by a named regulator in public sources | 5 of 11 | Raisin (BaFin), Kraken (CBI, FCA), SIX (FINMA), Shine (ACPR), plus Accelerant partly (AM Best, Lloyd's). Unconfirmed: bunch, 9fin, Taktile, Macro Hive, Optasia. NWF: not FCA/PRA regulated |
| Names Claude or Anthropic tooling | 4 of 11 | SIX (Claude Code), Optasia (Claude, Copilot), Taktile (Claude), plus Kraken in other postings |
| Names Microsoft Copilot | 2 of 11 | NWF, Optasia |
| Best angle | Control 5, proving value 5, data inside 1 | Control: Raisin, Kraken, 9fin, Taktile, Macro Hive. Proving value: Accelerant, SIX, NWF, Optasia, Shine. Data inside: bunch |
| Public AI governance statement from the company | 1 of 11 | 9fin (ISO/IEC 42001 claim; not independently verified) |
| Hiring a platform role vs a business-adoption role | 7 platform / 4 business | platform: Raisin, Kraken, bunch, 9fin, Accelerant, Macro Hive, Taktile (builds tools, also adoption). business: NWF, Optasia, Shine, SIX (SIX is dev-adoption) |

Takeaways:
- Raisin, Kraken and bunch are the three accounts where the ad already describes a control layer. They are the best first targets.
- Spend control is named by 6 of 11 and governance by 7 of 11, but routing across several models is explicit in only 3. Lead with control and spend, not routing.
- Seven of 11 describe a platform builder. Those buyers are engineers, so expect build-versus-buy conversations.
- SIX is the lone ad with a Claude Code rollout named; it is the strongest "proving value" story despite the weak score.

## Limits

- Job ads are single snapshots; LinkedIn applicant counts and dates were not recorded.
- Only role titles are recorded for reporting lines. Employee posts on company pages were ignored.
- Public AI signals for most companies are thin: no blog, press or talk found for Raisin, bunch, NWF, Optasia, Taktile (internal), Macro Hive, Shine and SIX beyond job postings. Absence in a quick public search is not proof of absence.
- Regulatory status is the weakest field. Several entries rely on secondary sources (NWF, Kraken's FCA licence, Shine's completion date). None was checked on FCA, BaFin, CSSF or other official registers. Verify before use in any outbound copy.
- Some facts came from search summaries rather than the primary page (SIX regulation, Accelerant Q1 call, Optasia news). The SIX about page returned 404 and accelerant.ai returned 403.
- 9fin's second role was found via LinkedIn search (job ID 4436231421), not the ID you supplied; the ID you supplied is the Engineering Lead role. Earlier notes in `icp-lens1-job-descriptions.md` described only the Senior AI Platform Engineer for 9fin.
- Fit scores follow the yes-count rule exactly and were scored from the ad text alone. "Partly" judgments (especially A for platform roles) are my reading and are open to change.
- LinkedIn sizes are LinkedIn's own bands and differ from what companies state (Raisin, bunch).
- Kraken's HQ country is from general knowledge, not a source read in this run.

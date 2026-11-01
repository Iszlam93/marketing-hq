# Q2: Who are Kimchi's real direct competitors?

Date: 2026-10-26. Public sources only, no sign-ups, no paid APIs.
Labels: **Shows** = a source says it. **Assumes** = my inference. Quotes are under 15 words.
Values in the matrix: Yes / Partly / No / Unknown. Unknown means I found no primary evidence. It does not mean No.

## 0. Headline

The earlier scan was wrong in one important way. Gateways (Portkey, LiteLLM, Kong, Cloudflare) and ROI dashboards (DX, Jellyfish, LinearB) are not on the same shortlist as Kimchi. They are components or partners (Tier C). The real shortlist has two groups.

- **Group 1, the frontier-vendor suites** that a buyer already has or will default to: Claude Code, OpenAI Codex, GitHub Copilot, Cursor, plus Devin. Gartner's first "Enterprise AI Coding Agents" Magic Quadrant (20 May 2026) names Anthropic, Cursor, GitHub and OpenAI as Leaders and Cognition as a Challenger. (Shows) https://virtualizationreview.com/articles/2026/06/05/ai-firms-push-cloud-giants-from-leaders-quadrant-in-gartner-ai-coding-report.aspx
- **Group 2, the model-neutral governed challengers** that look most like Kimchi: Kilo Code, Cline Enterprise, Coder Agents, OpenCode Enterprise, Warp. They offer multi-model routing, bring-your-own or local models, and self-hosting.

Kimchi is also a layer that can sit in front of Group 1 tools. Its own post says it works with Claude Code, Cursor, Codex CLI, Cline, OpenCode, Continue, Windsurf and Zed, and "Nobody switches tools." (Shows) https://dev.to/getkimchi/keep-claude-code-cursor-and-the-rest-of-your-stack-put-kimchis-proxy-in-front-59hi

Consequence (Assumes): Kimchi is both a competitor and a complement to Group 1. That is a positioning problem and an opportunity.

## 1. Definition and test

**Direct competitor test.** A product is a direct competitor if a buyer rolling out AI coding agents across an engineering org, who needs spend and policy control, would put it on the same shortlist. All three conditions are required:
1. It runs or governs coding agents for developers (not only an API proxy or a dashboard).
2. It gives an admin some spend or policy control (budgets, model allowlists, SSO, audit).
3. A buyer could choose it instead of Kimchi, not just alongside it.

**How I tested it** (all public; what was and was not available):
- **Analyst lists.** Gartner 2026 MQ coverage (via press and vendor posts; the report itself is paywalled). Shows. Coverage warns that most public detail comes from vendors named as Leaders: https://codex.danielvaughan.com/2026/05/31/gartner-magic-quadrant-enterprise-ai-coding-agents-codex-cli-leader-positioning/
- **Aggregator "alternatives" pages.** Slashdot's Kimchi vs Devin Desktop page lists these as alternatives: JetBrains Junie, Cline, Bolt.new, Cursor, Amp, OpenCode, Devin, Cosine. Its suggested comparisons add Claude Code, GitHub Copilot, Gemini Code Assist, Cody. (Shows; the page also says Kimchi has no on-prem listed, which is stale against Kimchi's pricing page.) https://slashdot.org/software/comparison/Devin-Desktop-vs-Kimchi/
- **Kimchi's own integration list**, which shows the tools it expects to sit beside (see above).
- **Third-party "top enterprise coding agents" lists.** Northflank's 2026 list ranks Claude Code, Codex, Copilot, Cursor, Devin, Windsurf, and does not mention Kimchi. Shows. https://northflank.com/blog/top-enterprise-coding-agents
- **Vendor docs** for each product (spend limits, deployment, audit).
- **Not available / not found:** no Reddit or Hacker News threads comparing Kimchi turned up, and no job ads naming a stack. Treat community sentiment and win/loss data as an open gap. Kimchi is new (GA July 2026), so there is little third-party comparison content yet. (Assumes)
- Kimchi's own site and press name no competitors. Shows. https://kimchi.dev and https://www.techzine.eu/news/devops/142903/cast-ais-kimchi-coding-agent-reaches-general-availability/

## 2. Kimchi baseline (what we compare against)

| Fact | Status | Source |
|---|---|---|
| Hard caps by user, team, API key or model; requests stop at the limit | Shows | https://kimchi.dev |
| Budgets at org, team, user, key or provider; fallback to an open model possible | Shows (Kimchi's own post) | https://dev.to/getkimchi/keep-claude-code-cursor-and-the-rest-of-your-stack-put-kimchis-proxy-in-front-59hi |
| Auto router picks model per step; mostly open-weight models | Shows | https://www.techzine.eu/news/devops/142903/cast-ais-kimchi-coding-agent-reaches-general-availability/ |
| VPC/Kubernetes/on-prem is Enterprise tier only | Shows | https://kimchi.dev/pricing |
| Workspaces (persistent cloud machines), Teleport, Studio, Code Review | Shows | https://kimchi.dev |
| Pricing: Open Source free; Coder $20/mo; Teams $35/seat/mo; Enterprise custom; Code Review add-on $15/user/mo | Shows | https://kimchi.dev/pricing |
| ISO 27001, SOC 2 Type II, GDPR. Audit logging or SIEM export is not described on the homepage | Shows | https://kimchi.dev |
| Named logos: Akamai, WeWork, Roku, Hugging Face, Cisco, Yotpo, Swisscom. No bank or insurer named | Shows | https://kimchi.dev |
| Savings claims (2.5x cheaper; about 60% drop in Claude Code cost for 150+ Cast AI developers) are Cast AI's own tests | Shows (self-reported) | techzine and dev.to links above |

## 3. Tiered map

Tier A = head-to-head. Tier B = partial overlap. Tier C = adjacent or complementary.

### Tier A (same shortlist)

**A1. Claude Code (Anthropic), Teams/Enterprise and Console**
- What / sells to: terminal and IDE coding agent, sold per seat (Teams/Enterprise) or per token (Console, Bedrock, Vertex, Foundry) to engineering orgs. Shows. https://code.claude.com/docs/en/costs
- Spend/policy: on Teams/Enterprise, spend limits at org, group or member level once usage credits are on; Console has workspace spend limits; managed settings; OpenTelemetry export. Shows. https://code.claude.com/docs/en/costs
- Deployment: SaaS, or cloud providers, or a self-hosted "Claude apps gateway" with SSO, per-group model access, per-user spend limits and OTLP. Shows. https://code.claude.com/docs/en/claude-apps-gateway
- Models: Claude models only. Assumes (the docs describe Claude through each provider; none mention other vendors' models).
- Pricing: per-seat allowance with 5-hour and weekly windows, plus usage credits; average about $13 per developer per active day. Shows. https://code.claude.com/docs/en/costs
- Regulated/finance: Barclays targets 50% of developers on Claude Code by end 2026. Shows (a target, not a result). https://anthropic.com/news/barclays-scales-claude
- Weakness vs Kimchi: Claude-only; no cross-vendor cost view. Kimchi's post says Claude Code has no built-in real-time per-user cost attribution (self-interested claim, but the docs do route per-user numbers through OTel or a gateway). Shows.
- Strength vs Kimchi: the frontier model, a Gartner Leader, and a named bank rollout; admins can cap spend natively. Shows.

**A2. OpenAI Codex (Business/Enterprise)**
- What / sells to: coding agent in CLI, IDE, app and cloud, sold as ChatGPT workspace seats or Codex-only token-billed seats. Shows. https://developers.openai.com/codex/pricing.md
- Spend/policy: RBAC, groups, Compliance API for audit records, `requirements.toml` local policy, analytics API, workspace credits. Spend controls live on a separate page I could not read. Shows. https://learn.chatgpt.com/docs/enterprise/admin-setup
- Deployment: local clients plus Codex Cloud (off by default for Enterprise); data-residency options. No customer-VPC option found. Shows / Unknown. Same source.
- Models: OpenAI models. Other vendors: Unknown.
- Regulated/finance: Cisco and Rakuten named for Codex; OpenAI lists Commonwealth Bank and Morgan Stanley as business customers, not Codex-specific. Shows. https://openai.com/index/codex-now-generally-available
- Weakness vs Kimchi: single vendor; no VPC deployment found; spend controls are credit-based, not per-key hard caps (Assumes).
- Strength vs Kimchi: Gartner Leader, Compliance API audit trail, large installed base.

**A3. GitHub Copilot (Business/Enterprise, cloud agent)**
- What / sells to: IDE assistant plus cloud coding agent, sold per seat with metered "AI credits" (1 credit = $0.01). Shows. https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/billing/organizations-and-enterprises/usage-based-billing
- Spend/policy: budgets at user, cost-center, org and enterprise level. A user whose budget runs out loses access; "no automatic fallback to lower-cost models." Up to 1,000 cost centers per enterprise. Shows. https://github.blog/changelog/2026-06-26-cost-center-limit-increased-to-1000-per-enterprise/
- Deployment: SaaS; cloud agent can run on self-hosted runners (Ubuntu x64 only, native firewall off). Shows. https://github.blog/changelog/2025-10-28-copilot-coding-agent-now-supports-self-hosted-runners
- Audit: agent session streaming to a SIEM, in public preview (July 2026). Shows. https://github.blog/changelog/2026-07-03-copilot-agent-session-streaming-is-now-in-public-preview/
- Models: multiple models with per-model cost multipliers; BYOK not mentioned. Shows / Unknown.
- Regulated/finance: none found in this search. Unknown.
- Weakness vs Kimchi: no fallback to cheaper models at the cap; GitHub-centric; self-hosted runner limits (Shows).
- Strength vs Kimchi: already inside the buyer's GitHub contract; cost centers map to finance; Gartner Leader with the highest Ability to Execute (per one summary of the report; Shows, secondary).

**A4. Cursor (Teams/Enterprise)**
- What / sells to: AI IDE with cloud agents and CLI, sold per seat plus pooled usage. Shows. https://cursor.com/docs/enterprise
- Spend/policy: team, member and group limits; SCIM-driven per-group limits; admin-only controls; Billing Groups for chargeback. Enforcement has a short lag, so "usage can briefly exceed your spend limit." Shows. https://cursor.com/help/account-and-billing/spend-limits and https://cursor.com/docs/account/teams/scim
- Audit: enterprise audit logs, streamable to security tools, plus OpenTelemetry export. Shows. https://cursor.com/docs/enterprise
- Deployment: SaaS plus MDM and self-hosted CLI patterns, PrivateLink for source control. No VPC deployment of the product on the page. Shows.
- Compliance: SOC 2 Type II, GDPR, HIPAA BAA for Enterprise. Shows. Same page.
- Regulated/finance: Coinbase, PayPal, Stripe named in secondary roundups; no bank found. Shows (secondary). https://sqmagazine.co.uk/cursor-ai-statistics/
- Weakness vs Kimchi: spend caps lag; no open-model routing or VPC deployment found.
- Strength vs Kimchi: strongest developer pull and Gartner's furthest "Completeness of Vision"; mature admin and audit story.

**A5. Devin / Cognition (includes Windsurf lineage; "Devin Desktop")**
- What / sells to: autonomous cloud engineer plus desktop IDE; Cognition acquired Windsurf in July 2025. Shows. https://www.techcrunch.com/2025/07/14/cognition-maker-of-the-ai-coding-agent-devin-acquires-windsurf/ Slashdot lists Devin Desktop under Cognition with Free, Pro, Teams ($35/user/mo) and Enterprise tiers. Shows. https://slashdot.org/software/comparison/Devin-Desktop-vs-Kimchi/ (Assumes Windsurf is now folded into Devin Desktop; not confirmed.)
- Spend/policy: per-user monthly ACU caps and org-level ACU limits, across local and cloud use (per-user caps in beta). Shows. https://docs.devin.ai/enterprise/features/usage-policies
- Deployment: "Customer Dedicated Deployment" in a single-tenant VPC; the "brain" stays in Cognition's cloud. Shows. https://docs.devin.ai/enterprise/vpc/overview
- Models: Unknown for Devin; Windsurf supported multiple models. Shows (secondary: Northflank).
- Regulated/finance: Citi and Goldman Sachs cited as Devin users (Cognition's claim as relayed by press). Shows (secondary). https://pulse2.com/cognition-raises-over-1-billion-at-a-26-billion-valuation-as-devin-adoption-accelerates-across-enterprises/
- Weakness vs Kimchi: ACU pricing is hard to forecast; one vendor's models; "brain" not in the customer's VPC (Shows for the last point).
- Strength vs Kimchi: bank references and an autonomous-agent track record; a Gartner Challenger.

**A6. Kilo Code (Enterprise)** — closest like-for-like among the challengers
- What / sells to: open-source-rooted agent in VS Code, JetBrains, CLI, cloud, Slack, with a model gateway and code review; sold to teams and enterprises. Shows. https://kilo.ai/enterprise
- Spend/policy: sub-organizations with funds distributed from an enterprise balance, spend analytics by developer/model/team/project, provider and model allowlists, an "Auto Efficient" router that picks a cheaper model per step. Shows. Same page.
- Admin: SSO/SAML, OIDC, SCIM, RBAC, audit logs, SOC 2 materials. Shows.
- Deployment: EU and regional routes, local or private models; a full VPC option is not described. Shows / Unknown.
- Models: 500+ hosted, BYOK and local models. Shows.
- Pricing: gateway passes model cost through with no token markup; platform fees separate; custom Enterprise quote, 14-day trial. Shows.
- Regulated/finance: none named. Customers are small (70-engineer firm). Unknown.
- Weakness vs Kimchi: no VPC deployment described; no regulated names; hard-cap semantics unclear (prepaid balances suggest caps, Assumes).
- Strength vs Kimchi: broad model list, SCIM and audit already listed, and a visible "migrate from Cursor" offer.

**A7. Cline Enterprise**
- What / sells to: open-source agent with an enterprise tier; VPC, on-prem or air-gapped. Shows. https://cline.bot/enterprise
- Spend/policy: SSO, global model-access config, MCP controls; the sample dashboard shows spend by user and model. Explicit budget caps not described. Shows / Unknown.
- Models: bring your own inference (Bedrock, Vertex, Azure OpenAI, local) across many families. Shows.
- Regulated/finance: Samsung reported as beta tester; no finance names. Shows.
- Weakness vs Kimchi: no hard caps, audit logs or pricing described on the page.
- Strength vs Kimchi: "Cline doesn't see your code or prompts" in a VPC, and the full model choice.

**A8. Coder Agents (Coder)**
- What / sells to: self-hosted, model-agnostic coding-agent control plane that runs agents in Coder workspaces; targets regulated and air-gapped shops. Shows. https://www.infoq.com/news/2026/05/coder-agents-self-hosted-ai/
- Spend/policy: centralizes model access, prompt management, execution policy and observability. AI Bridge adds central authentication, model access control and usage logging. Budgets: not described. Shows / Unknown. https://coder.com/blog/ai-development-infrastructure-for-hybrid-human-and-agent-teams
- Deployment: customer-owned infrastructure, air-gap capable. Shows.
- Models: Claude, OpenAI, Gemini, Bedrock or self-hosted. Shows (press summary).
- Also complementary: "Agent Relay" runs Cursor's tool calls inside Coder environments (private preview). Shows. https://sdtimes.com/ai/coder-and-spacexai-bring-agentic-coding-to-regulated-enterprises/
- Weakness vs Kimchi: no cost-attribution or budget feature found; no customers named.
- Strength vs Kimchi: strongest self-hosted and air-gapped story; agents isolated from laptops.

**A9. IBM Bob (self-hosted, 1 Oct 2026)** — Tier A only in sovereign / air-gapped / IBM-shop deals; otherwise Tier B (Assumes)
- What: IBM announced self-hosted Bob for on-prem, private, sovereign and air-gapped use on 1 Oct 2026. Backend runs on a customer-operated Red Hat OpenShift cluster. Self-hosted models: Nvidia Nemotron and Poolside Laguna; hybrid can use external models. One outlet gives 24 Sep as the GA date. Pricing and sizing not published. Shows. https://siliconangle.com/?p=849058 and https://www.storagereview.com/de/news/ibm-bob-self-hosted-air-gapped-agentic-development-nemotron-poolside-laguna
- Spend/policy: Bobalytics tracks Bob's contributions and says it helps "optimize the costs"; no cap described. Shows. https://bob.ibm.com
- Regulated/finance: IBM's base is regulated; no named bank in what I read. Unknown.
- Weakness vs Kimchi: no published pricing, narrow self-hosted model list, no hard caps found.
- Strength vs Kimchi: IBM sales motion and air-gap credibility in banks and governments (Assumes).

### Tier B (partial overlap, one capability)

| Product | What it overlaps on | Weakness vs Kimchi | Strength vs Kimchi | Source |
|---|---|---|---|---|
| Warp (Oz agents) | Budget caps per team, model allowlists, bring-your-own LLM, Warp-hosted/self-hosted/hybrid, cloud agents. Shows. Could move to Tier A if the page claims hold (Assumes). | No audit logs or pricing on the page; terminal-centred. | Runs Claude Code, Codex or Warp Agent under one admin layer. | https://www.warp.dev/enterprise |
| Augment Code | Context engine plus agents; SOC 2 Type II, ISO 42001, HIPAA. Credits are bought separately from seat tiers (Standard up to 200 seats, Enterprise up to 600, Advanced unlimited) and overage is billed in arrears. | Credit policy shows no per-user cap or pooling. VPC/air-gap claims appear only in third-party pages and conflict, so Unknown. | Deep codebase context; indemnification clause. | https://docs.augmentcode.com/models/credits-policy and https://www.augmentcode.com/security |
| Factory.ai | Model-agnostic agents; SSO, SOC 2, ISO 42001; Blackstone and Nav (fintech) as customers. Shows. | Spend controls, audit, VPC all not described. | The only finance-named logo in this set (Blackstone, an investment firm). | https://factory.com/enterprise |
| Sourcegraph Amp | Coding agent; Sourcegraph moved to credit pricing with a self-hosted option in its Enterprise plan (secondary source). Amp's own enterprise page was a sign-in screen, so most facts are Unknown. | Not enough evidence. | Code search heritage. | https://pricingsaas.com/companies/sourcegraph/diffs/2026Q2 |
| OpenCode Enterprise / OpenCode Go | Open-source agent; Enterprise integrates with your SSO and internal AI gateway and charges no token fee if you bring your own gateway; SOC 2 Type 2 report in its trust center. Go is a $10/month plan for open coding models (individual). Shows. | No budget controls on its enterprise page, so it needs a gateway (Tier C) beside it. | Free, widely adopted, model-neutral. Kimchi's own post lists OpenCode as a supported client. | https://opencode.ai/enterprise and https://opencode.ai/docs/go/ |
| JetBrains AI Enterprise / Junie | IDE-bound agent; pooled, reassignable AI credits; BYOK (OpenAI, Anthropic first). BYOK use is excluded from adoption metrics. Gartner: Niche Player. | Admin cost view misses BYOK traffic; no on-prem found. | Sits in the IDE a large share of Java and Kotlin teams already use (Assumes). | https://blog.jetbrains.com/ai/2025/08/a-simpler-more-transparent-model-for-ai-quotas/ and https://www.jetbrains.com/help/jetbrains-console/ai-adoption-and-usage.html |
| Amazon Kiro / Amazon Q Developer | Credit tiers (Pro to Power); overage cap set in AWS Service Quotas for IAM Identity Center teams. Gartner: AWS is a Challenger. | Cap is account-wide, not per team/key (Shows from the article's wording). | AWS billing and identity already in place. | https://kiro.dev/docs/enterprise/billing/ and https://dev.classmethod.jp/articles/kiro-service-quotas-overage-cap/ |
| Google Gemini Code Assist / Jules | Enterprise edition works inside VPC Service Controls perimeters. Gartner: Google is a Challenger. Budgets, Jules admin: Unknown. | Not enough evidence for spend control. | Google Cloud perimeter controls. | https://docs.cloud.google.com/gemini/docs/codeassist/security-privacy-compliance |
| Tabnine | Gartner's only Visionary. Acquired by Tricentis on 30 Jul 2026 to feed its testing agents; independent roadmap uncertain (Assumes). Air-gapped and BYO-model claims come from third-party reviews. | Ownership change; unclear standalone focus. | Long air-gapped history in regulated shops (Assumes). | https://www.tricentis.com/news/tricentis-acquires-tabnine and https://sdtimes.com/ai/tricentis-acquires-tabnine-to-further-scale-agentic-quality-engineering-for-the-enterprise/ |
| Continue | Open-source assistant and CLI; Kimchi lists it as a client. Enterprise features not found on the page I read, so Unknown. | Not enough evidence. | Open source. | https://docs.continue.dev/ |

### Tier C (adjacent or complementary: possible partners or components)

- **AI gateways: LiteLLM, Portkey, Bifrost, Kong, Cloudflare.** They provide budgets, virtual keys and logging in front of the model API, not a coding agent. Claude's own docs name LiteLLM as an LLM-gateway option for spend by key. Shows. https://code.claude.com/docs/en/llm-gateway (cited in https://code.claude.com/docs/en/costs). Vendor-written comparisons say LiteLLM core is MIT with budgets and virtual keys and Portkey adds hosted observability; pricing figures conflict across sources (Unknown). https://api7.ai/portkey-vs-litellm. One vendor article treats them as the "governance layer" for Claude Code and Cursor: https://www.getmaxim.ai/articles/top-5-ai-governance-tools-for-coding-agents-in-2026.md
  - Weakness vs Kimchi: no agent, no router tuned for coding steps, no code review. Strength: already deployed in platform teams; Kimchi could be run beside or on top of them (Assumes).
- **Engineering-ROI tools: DX, Jellyfish, LinearB.** I did not research these in this pass, so every claim about them is Unknown. Assumes they measure outcomes (cycle time, adoption) and do not enforce spend. They are partners for the "prove ROI" half of the buyer's problem.
- **Dropped (not coding-agent platforms for an org rollout, Assumes):** Replit and Bolt (app builders for individuals; Bolt appears only as a Slashdot alternative), Cosine (listed on Slashdot, not investigated).

## 4. Comparison matrix

Legend: Y = Yes, P = Partly, N = No, U = Unknown. "S" = Shows (source says it), "A" = Assumes. Sources are in section 3 unless noted.

| Product | Hard spend caps | Per-team / key budgets | Multi-model | Open / self-hosted models | VPC / on-prem | Remote autonomous agents | Audit / SIEM | Cross-vendor reporting |
|---|---|---|---|---|---|---|---|---|
| **Kimchi (baseline)** | Y (S) | Y (S) | Y (S) | Y (S) | Y, Enterprise tier (S) | Y, Workspaces (S) | U (not on homepage) | Y, incl. Claude Code via OTel (S) |
| Claude Code | Y, usage-credit limits (S) | Y, org/group/member, workspace (S) | N, Claude only (A) | N (A) | P, via self-hosted gateway or cloud (S) | Y, web/remote (S, docs mention Claude Code on web) | P, OTLP and gateway audit events (S) | N (A) |
| OpenAI Codex | P, credits; spend page unread (S/U) | P (U) | U | U | U | Y, Codex Cloud (S) | Y, Compliance API (S); SIEM U | N (A) |
| GitHub Copilot | Y, budgets stop access (S) | Y, cost centers, user, org (S) | P, many models, no BYOK stated (S/U) | U | P, self-hosted runners (S) | Y, cloud agent (S) | P, SIEM streaming in preview (S) | P, third-party agents draw AI credits (S) |
| Cursor | P, short enforcement lag (S) | Y, team/member/group (S) | P, admins restrict models (S) | U | P, self-hosted CLI, PrivateLink (S) | Y, cloud agents (S, Northflank) | Y, audit logs plus streaming (S) | N (A) |
| Devin / Cognition | Y, per-user and org ACU (S, per-user in beta) | P, tiers and orgs (S) | U | U | P, single-tenant VPC, brain in Cognition cloud (S) | Y (S) | U | N (A) |
| Kilo Code | P, balances and sub-org funds (S/A) | Y, sub-orgs (S) | Y (S) | Y, BYOK and local (S) | P, local/private models, no VPC stated (S) | Y, Cloud surface (S) | Y, audit logs (S) | P, own gateway analytics (S) |
| Cline Enterprise | U | U | Y (S) | Y (S) | Y, VPC/on-prem/air-gap (S) | U | U | P, spend dashboard (S) |
| Coder Agents | U | U | Y (S) | Y, self-hosted models (S) | Y, air-gap capable (S) | Y (S) | P, usage logging via AI Bridge (S) | P, central across LLMs (S) |
| IBM Bob (self-hosted) | U | U | P, Nemotron, Laguna, hybrid external (S) | Y, on-prem models (S) | Y, OpenShift, air-gapped (S) | U | U | N (A) |
| Warp | Y, team budget caps (S) | Y (S) | Y, BYO LLM (S) | P, own endpoints (S) | P, self-hosted/hybrid (S) | Y, Oz cloud agents (S) | U | P, runs Claude Code and Codex (S) |
| Augment Code | U | U | U | U | U (conflicting sources) | U | U | N (A) |
| Factory.ai | U | U | Y, "model-agnostic" (S) | U | U | U | U | U |
| Sourcegraph Amp | U | U | U | U | P, self-hosted in Sourcegraph Enterprise (S, secondary) | U | U | U |
| OpenCode Enterprise | U, defers to your gateway (S) | U | Y (S) | Y, local/your provider (S) | P (S) | U | U | N (A) |
| JetBrains AI / Junie | P, pooled credits (S) | P (S) | P, BYOK OpenAI/Anthropic (S) | U | U | U | U | N, BYOK not in metrics (S) |
| Amazon Kiro / Q | P, account-wide overage cap (S) | U | U | U | U | U | U | N (A) |
| Gemini Code Assist | U | U | U | U | P, VPC Service Controls (S) | U | U | N (A) |
| Tabnine (Tricentis) | U | U | P, BYO model (S, third party) | P (S, third party) | P, air-gapped claims (third party) | U | U | N (A) |

Matrix sources by row: Claude Code https://code.claude.com/docs/en/costs and https://code.claude.com/docs/en/claude-apps-gateway; Codex https://learn.chatgpt.com/docs/enterprise/admin-setup; Copilot the GitHub usage-based-billing, self-hosted-runner and session-streaming links in 3-A3; Cursor https://cursor.com/docs/enterprise; Devin https://docs.devin.ai/enterprise/features/usage-policies and /vpc/overview; Kilo https://kilo.ai/enterprise; Cline https://cline.bot/enterprise; Coder the InfoQ and Coder blog links; Bob the SiliconAngle and StorageReview links; Warp https://www.warp.dev/enterprise; others as in the Tier B table.

## 5. Who Kimchi most often loses to or is compared against

No public win/loss data exists (Assumes: Kimchi is too new). The ranking below combines the available evidence and is my judgment.

1. **Claude Code** (Anthropic). Kimchi's own proxy is built to sit in front of it, and Cast AI's savings claim is measured against it. The buyer's default is to keep Claude Code and cap it natively (org, group, member limits) or add LiteLLM. Barclays shows a regulated buyer choosing it directly. Shows (the proxy and savings claim, Barclays); the "default" part is Assumes. https://dev.to/getkimchi/keep-claude-code-cursor-and-the-rest-of-your-stack-put-kimchis-proxy-in-front-59hi
2. **Cursor.** On Slashdot's alternatives and suggested comparisons for Kimchi; a Gartner Leader with enterprise audit, SIEM and per-group limits. Kimchi's post targets Cursor spend visibility. Shows. https://slashdot.org/software/comparison/Devin-Desktop-vs-Kimchi/
3. **GitHub Copilot.** On Slashdot's suggested comparisons; a Gartner Leader; cost centers and budgets already map to finance, and it sits inside the buyer's GitHub contract. Shows (list, Gartner); the contract advantage is Assumes.
4. **Devin / Cognition.** The only vendor Slashdot directly pairs with Kimchi, and a Gartner Challenger with bank references and a VPC option. Shows.
5. **Kilo Code, with Cline and OpenCode as runners-up.** Most like Kimchi in design (cost-based router, model allowlists, BYOK and local models, SCIM and audit). Cline and OpenCode are on Slashdot's alternatives list. Shows (features, list); "most likely to be shortlisted by cost-focused buyers" is Assumes.

Also watch: OpenAI Codex (a Leader that did not appear on the Kimchi comparison lists but is on every enterprise shortlist) and IBM Bob in sovereign or air-gapped deals (Assumes).

## 6. Gaps and cautions

- Gartner's report is paywalled; positions come from vendor and press coverage.
- Many vendor pages say "contact sales" for spend caps and audit. Unknown means not found, not absent.
- I did not read Amp's, Augment's or Tabnine's own deployment docs, or the Codex spend-controls page. Those cells stay Unknown.
- Kimchi's savings figures are self-reported tests.
- Third-party sources (Slashdot, Northflank, Maxim) have their own commercial interests; Maxim and Northflank sell competing products.
- Not done: community threads (Reddit, HN), job-ad stack mentions, and win/loss interviews. Worth asking Kimchi's team for them.

## 7. Plain-English summary (10 lines)

1. A "real" competitor is something a company would put on the same shortlist when deciding how to give all its engineers AI coding agents with spending limits.
2. AI gateways (Portkey, LiteLLM) and ROI dashboards (DX, Jellyfish) are not on that shortlist. They are parts you could use alongside Kimchi.
3. The shortlist today has two groups: the big names (Claude Code, OpenAI Codex, GitHub Copilot, Cursor, Devin) and the model-neutral challengers (Kilo, Cline, Coder, OpenCode, Warp).
4. Gartner's first report on this market (May 2026) ranks Anthropic, Cursor, GitHub and OpenAI as leaders, which is why buyers start with them.
5. Most big vendors now offer some spending caps, so "hard budget caps" alone is no longer a unique selling point (Claude Code, Copilot and Devin all have them).
6. Kimchi's clearest edges are picking the cheapest suitable model for each step, using open models, running inside the customer's own cloud, and showing one cost view across tools.
7. Kimchi can also sit in front of Claude Code and Cursor, so it is partly a rival and partly an add-on. The story needs to say which.
8. Banks are citing Claude Code (Barclays) and Devin (Citi, Goldman); Kimchi's site shows no bank or insurer yet, which is a gap to address.
9. I found no public win/loss data, forum threads or job ads about Kimchi, so the "most compared" ranking is based on comparison sites and product overlap, not sales results.
10. IBM Bob (self-hosted since 1 Oct 2026) and Coder are the ones to watch for security-first buyers who want everything inside their own walls.

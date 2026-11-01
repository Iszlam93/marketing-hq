# Q3: Why would anyone choose Kimchi over Claude Code, Codex, Copilot or Cursor?

Researched 26 Oct 2026. Public sources only, no paid APIs, no sign-ups. Every claim is marked **Shows** (a source says it; vendor pages are the vendor's own claim) or **Assumes** (my inference or an unverified point). Read with `EVIDENCE.md`, whose Discord and Reddit findings are not repeated here.

**Method limits, stated up front**
- Reddit's live site was blocked and the PullPush archive returned almost nothing on Kimchi. HN search found no discussion of Kimchi beyond one Kimchi blog submission (9 points, 0 comments).
- I did not find Justin Garrison's video via search. Its title is only in EVIDENCE.md.
- No independent head-to-head of Kimchi vs Claude Code was found.
- OpenAI's docs moved to learn.chatgpt.com; the developers.openai.com URLs redirect there. Only two of its pages were readable.
- Shows: Kimchi's GitHub repo had no issue about model quality in the 19 newest items. Items are mostly cost attribution (PR-cost ledger) and SSO/org-policy fixes. [GitHub API](https://api.github.com/repos/getkimchi/kimchi/issues)

---

## 1. What Claude Code and Codex already give an enterprise buyer

### Claude Code (Anthropic docs)
| Capability | What the docs say | Mark |
|---|---|---|
| Plans and SSO | Teams has SSO, billing management and server-managed settings. Enterprise adds domain capture, role-based permissions and compliance API access. [third-party-integrations](https://code.claude.com/docs/en/third-party-integrations) | Shows |
| Managed settings | Security teams set managed permissions that "cannot be overwritten by local configuration". `allowedProviders` restricts which backends a machine may use. [same page](https://code.claude.com/docs/en/third-party-integrations) | Shows |
| Spend caps | Teams/Enterprise: spend limits at organisation, group or member level (once usage credits are on). Console: workspace spend limits. Cloud: the cloud provider's budgets. [costs](https://code.claude.com/docs/en/costs) | Shows |
| Usage analytics | Per-user, per-model spend report with CSV, adoption dashboard, Enterprise Analytics API, Claude Code Analytics API. [costs](https://code.claude.com/docs/en/costs) | Shows |
| OpenTelemetry | Exports cost, token, session and tool-decision metrics and events per request; admins lock it in managed settings. Cost is "a client-side estimate, not a billing figure". [monitoring-usage](https://code.claude.com/docs/en/monitoring-usage) | Shows |
| Contracted-rate reporting | `modelPricing` managed setting makes the dashboards match your contract. [costs](https://code.claude.com/docs/en/costs) | Shows |
| Data retention | Commercial: 30 days standard; zero data retention for qualified Enterprise accounts, set per organisation; no training on commercial data. [data-usage](https://code.claude.com/docs/en/data-usage) | Shows |
| Cloud deployment | Bedrock, Google Cloud Agent Platform (Vertex), Microsoft Foundry, Claude Platform on AWS. Audit comes from IAM/CloudTrail, Cloud Audit Logs, Azure Monitor. Customer-managed keys on Bedrock and Google. [data-usage](https://code.claude.com/docs/en/data-usage) | Shows |
| Gateways | Self-hosted "Claude apps gateway" gives IdP sign-in, per-user spend limits and OTLP metrics. Third-party gateways such as LiteLLM can attribute spend per key. [costs](https://code.claude.com/docs/en/costs) | Shows |
| Rate limits | TPM/RPM recommendations by team size; seat allowance resets on a 5-hour and weekly window. [costs](https://code.claude.com/docs/en/costs) | Shows |

**What Claude Code does not offer**
- Shows: Anthropic "doesn't support routing Claude Code to non-Claude models through any gateway". [llm-gateway](https://code.claude.com/docs/en/llm-gateway) So no other vendors' models and no self-hosted open models, supported.
- Shows: Cloud-provider usage is not covered by Anthropic's own dashboards. Per-user attribution there needs OpenTelemetry, a gateway or a proxy. [costs](https://code.claude.com/docs/en/costs)
- Shows: Spend inside the seat allowance "isn't metered in dollars". [costs](https://code.claude.com/docs/en/costs)
- Assumes: No cross-tool budget (one cap across Claude Code, Codex and Cursor). Nothing in these docs describes one, which is not proof it never will.
- Assumes: Data residency is "which cloud region" (Bedrock/Vertex/Foundry), not "model weights in my own cluster". Claude's weights are never in the customer's VPC.

### Codex (OpenAI docs, now at learn.chatgpt.com)
| Capability | What the docs say | Mark |
|---|---|---|
| RBAC and admin | Roles and workspace permissions; SSO, groups, provisioning are linked pages. [admin-setup](https://learn.chatgpt.com/docs/enterprise/admin-setup) | Shows |
| Analytics | Workspace analytics plus an Analytics API for Codex. [admin-setup](https://learn.chatgpt.com/docs/enterprise/admin-setup) | Shows |
| Audit | Compliance API for audit and investigation records. [admin-setup](https://learn.chatgpt.com/docs/enterprise/admin-setup) | Shows |
| Spend controls | Usage limits and spend controls when Codex uses workspace credits. [admin-setup](https://learn.chatgpt.com/docs/enterprise/admin-setup) | Shows |
| Managed config | `requirements.toml` pushes permission profiles and feature switches to app, CLI and IDE. [admin-setup](https://learn.chatgpt.com/docs/enterprise/admin-setup) | Shows |
| Residency and keys | Data residency for eligible workloads; Enterprise Key Management; "Work doesn't support UAE inference residency". [admin-setup](https://learn.chatgpt.com/docs/enterprise/admin-setup) | Shows |
| Other providers | The security page lists Amazon Bedrock (including GovCloud and via LiteLLM) and gateway connection pages. [security](https://learn.chatgpt.com/docs/security) | Shows |
| OpenTelemetry, ZDR | Not found in the pages I could read. | Unverified |
| Codex can point at non-OpenAI endpoints via custom provider config | From my background knowledge of the open-source CLI; not confirmed in this session. | Assumes |

**Honest read:** the "governance gap" in a single-vendor stack is smaller than Kimchi's pitch implies. A buyer who is happy with one vendor already gets SSO, caps, analytics, audit, retention controls and cloud deployment. The gap is about breadth (many vendors, open models, one budget) not basic control.

---

## 2. Real voices (beyond the Discord file)

| Voice | What it says | Source | Mark |
|---|---|---|---|
| Vendor-harness lock-in is real | Anthropic blocked OpenCode's use of subscription logins with no advance notice; the HN thread reached 1,274 points and 619 comments. Developers accepted the logic but objected to the rollout. From 4 Apr 2026 subscription limits can't be used with third-party harnesses. | [New Stack](https://thenewstack.io/anthropic-claudecode-opencode-split/), [VentureBeat](https://venturebeat.com/ai/anthropic-cracks-down-on-unauthorized-claude-usage-by-third-party-harnesses/) | Shows |
| Switching away from Claude | A r/opencodeCLI user cancelled Max after the block, then tried Claude Code and wrote up complaints. Score 75, Mar 2026. | [Reddit](https://www.reddit.com/r/opencodeCLI/comments/1ryl1l6/my_brief_and_bad_experience_with_claude_code/) | Shows |
| Weekly-limit backlash | Developers reported hitting limits "in 30 minutes" and waiting hours. Anthropic said it affects 5% of users. | [VentureBeat](https://venturebeat.com/ai/anthropic-throttles-claude-rate-limits-devs-call-foul), [Pillitteri](https://pasqualepillitteri.it/en/news/13403/claude-code-weekly-limits-25-percent-17-cut) | Shows |
| Outages | Incidents in June 2026 hit Claude Code; one outlet counted ten disruptions in about three weeks (unverified). An 85-minute 23 Jun outage was cited to argue CI needs fallback providers (the poster sells a product). | [tech-insider](https://tech-insider.org/claude-outage-june-2026/), [Pillitteri](https://pasqualepillitteri.it/en/news/5993/claude-down-june-23-2026-elevated-errors-models), [r/Tidra](https://www.reddit.com/r/Tidra/comments/1ufnlci/claude_went_down_for_85_minutes_across_every/) | Shows (secondary) |
| Cross-model use is a habit | "Stop Using One Model for Everything", cross-model review catches defects. Score 1, a tip post. | [Reddit](https://www.reddit.com/user/mcsee1/comments/1v7gpxg/ai_coding_tip_029_stop_using_one_model_for/) | Shows (weak) |
| Open models good for budget users | A 2025 HN commenter's favourite was GLM-4.5; "Kimi K2 is also good". Old and individual. | [HN comment](https://wuu73.org/blog/aiguide1.html) | Shows (weak) |
| Open-model quality gap | Kilo Code's launch-day test: Opus 4.7 scored 91/100, Kimi K2.6 scored 68/100 on one spec. Gap concentrated in scheduling and streaming. Tensorlake also favoured Opus. | [search summary of Kilo Code / Tensorlake](https://tensorlake.ai/blog/claude-opus-4-7-vs-kimi-k2-6-real-world-coding-test) | Shows (one test each) |
| Harness matters as much as model | A benchmark cited in a pro-OpenCode article credits much of Claude Code's results to the harness. Promotional source. | [gitconnected](https://levelup.gitconnected.com/opencode-the-best-claude-code-alternative-87b17e384d58) | Shows (weak) |
| Kimchi demand from practitioners | No Hacker News or Reddit discussion of Kimchi found. 0 reviews on Software Advice. | [Software Advice](https://www.softwareadvice.co.uk/software/548863/Kimchi) | Shows |
| Spend pain, multi-vendor | See EVIDENCE.md 4b: HN thread on capping spend across vendors; Gartner on $2,000-5,000 per developer per month. | EVIDENCE.md | Shows |

Assumes: The strongest "why switch" evidence is about **being locked into one vendor's terms** (blocks, limits, outages), not about governance. Governance demand shows up in job posts and analyst writing, not in developer threads.

---

## 3. Reasons table

| # | Reason | Who cares | Evidence | Does Kimchi truly solve it? | Could Claude Code / Codex close the gap soon? |
|---|---|---|---|---|---|
| 1 | Lower cost via open models and routing | Finance, platform lead; developers if free | Kimchi blog lists Kimi K2.6 at $4.50, MiniMax M2.7 at $1.20, Nemotron at $0.75 per 1M output vs "Avg. proprietary" $12.10 ([blog](https://kimchi.dev/blog/say-hello-to-kimchi)). GA claim "2.5x cheaper" in shadow mode ([Techzine](https://www.techzine.eu/news/devops/142903/cast-ais-kimchi-coding-agent-reaches-general-availability/)) | **Partly.** Price per token is lower (Shows). Total cost depends on retries, quality and the unnamed baseline (see section 4) | Partly. Vendors already offer cheaper tiers (Sonnet, Haiku, effort levels). They will not route to rivals' models. |
| 2 | No single-vendor lock-in | Platform lead, procurement, security | Anthropic: no non-Claude models via gateways ([docs](https://code.claude.com/docs/en/llm-gateway)); OpenCode block ([New Stack](https://thenewstack.io/anthropic-claudecode-opencode-split/)) | **Yes in design** for model choice. Kimchi lists commercial, open and self-hosted models ([governance post](https://kimchi.dev/blog/why-agentic-ai-governance-cant-be-bolted-on)). Whether you get lock-in to Kimchi/Cast AI instead is open | Unlikely. It's their business model. Codex gateways and Bedrock widen choice a little. |
| 3 | Outage resilience | Developers, platform lead | June 2026 incidents ([tech-insider](https://tech-insider.org/claude-outage-june-2026/)) | **Partly / Unverified.** Multi-model routing could fail over; no Kimchi doc found promising failover SLAs | Partly. Bedrock/Vertex are alternative hosts for Claude, so they can reduce single-endpoint risk. |
| 4 | Rate limits | Developers | Weekly-limit backlash ([VentureBeat](https://venturebeat.com/ai/anthropic-throttles-claude-rate-limits-devs-call-foul)). Kimchi launch post: "No rate limits, no token caps" | **Unverified.** That was a launch-era claim. Discord shows free credits then ended (EVIDENCE.md 6b). Paid plans' limits not found | Yes. API/credit billing already removes seat windows; vendors can raise limits. |
| 5 | Data stays in my VPC | Security, regulated buyers | Kimchi enterprise page claims VPC/on-prem and about 88% of requests to self-hosted open models (EVIDENCE.md 1). Claude weights never run in your VPC. Bedrock/Vertex keep data in your cloud account ([data-usage](https://code.claude.com/docs/en/data-usage)) | **Partly.** True for open models Kimchi hosts. If you route to Claude through Kimchi, the prompt still leaves to that provider. Kimchi docs index did not address VPC data flow | Partly. Cloud deployments already satisfy many buyers. Weights in your cluster: not for Anthropic or OpenAI frontier models. |
| 6 | One budget across tools | Finance, platform lead | HN: how to cap spend across several vendors (EVIDENCE.md 4b). Claude Code and Codex each have caps in their own console only | **Partly.** Kimchi has per-key/team/user caps and token reporting from Claude Code and Codex into its console ([docs](https://docs.kimchi.dev/docs)). Docs do not describe one hard cap spanning both tools. Reporting is not enforcement | Unlikely from either vendor. Gateways (LiteLLM, Portkey) are the real rival. |
| 7 | Audit and governance of agent actions | Security | Kimchi claims prompt-level audit to SIEM, SPIFFE agent identity, tamper-evident trail ([post](https://kimchi.dev/blog/why-agentic-ai-governance-cant-be-bolted-on)). Claude Code has OTel events and tool decisions; Codex has a Compliance API | **Unverified.** Claims not independently tested; blog says "all-or-nothing" enforcement without a verification method. GitHub #1242 shows a setup trust issue (EVIDENCE.md 6c) | Yes. Both vendors keep adding admin features quickly (Claude apps gateway, managed settings). |
| 8 | Regulated exit strategy (DORA) | Compliance, risk, EU financial services | DORA reaches AI vendors through contracts and exit plans ([Dynamiq](https://www.getdynamiq.ai/post/think-global-act-local-how-data-residency-regulations-influence-banks-llm-use)) | **Partly.** Swapping models behind one control plane makes an exit plan easier to write. No public Kimchi DORA evidence beyond "design around DORA" | Partly. Cloud-hosted Claude plus contract terms is what most banks do today. |
| 9 | Open-model quality is good enough | Developers | Kilo Code 91 vs 68, Tensorlake favours Opus (section 2) | **No / not yet shown.** Public tests favour frontier on hard tasks. Kimchi's routing sends hard tasks to a reasoning model (Kimi K2.6) and can use commercial models | Not needed: they own the frontier. |
| 10 | Works with tools I already use (Claude Code, OpenCode, Codex) | Developers, platform lead | Kimchi's CLI configures installed tools to use its models ([Cast AI docs](https://docs.cast.ai/docs/ai-enabler-serverless-kimchi-cli)); GitHub #1523/#1524 add work adapters for Claude Code and Codex | **Yes** (Shows). Strategically useful: it needs no rip-and-replace | N/A |

---

## 4. The specific questions

**Cost: open vs frontier, and the "2.5x cheaper in shadow mode" claim**
- Shows: Kimchi's launch table gives output prices for three open models and a single "Avg. proprietary" baseline of $12.10 per 1M output tokens. The proprietary models in that average are not named. The "94% difference" compares one cheap model to that average, not a routed workload. [blog](https://kimchi.dev/blog/say-hello-to-kimchi)
- Shows: The 2.5x claim comes from Cast AI's own "shadow mode" tests against a commercial-only baseline, with "matching or exceeding" results on spec-match and test-pass rates. Press describes few method details; Akamai is named as a user. [Techzine](https://www.techzine.eu/news/devops/142903/cast-ais-kimchi-coding-agent-reaches-general-availability/)
- Shows: Moonshot (maker of Kimi) claims 76% lower delivered cost than Claude, also a vendor figure, and Kimi is about 8x cheaper per token than Opus 4.7. [search summary](https://theneuron.ai/explainer-articles/kimi-k26-just-shipped-open-weight-claude-level-coding-at-76-the-cost-with-a-300-agent-swarm-as-the-real-story/)
- Assumes: 2.5x is plausible. If open models cost 8x less per token and some tasks need retries or a frontier fallback, a blended 2.5x is the kind of number you would expect. That is a reasoning, not proof.
- Assumes (credibility gaps): the baseline model mix, task set, who judged quality, whether retries and failed runs are counted, whether the "commercial-only" baseline used prompt caching and the cheaper tiers (Sonnet/Haiku), and whether hosting cost for self-hosted GPUs is in the Kimchi side. Anthropic's own docs say average cost is about $150-250 per developer per month and recommend smaller models for routine work, so the real comparison is against a well-tuned Claude setup, not a naive Opus-everywhere one. [costs](https://code.claude.com/docs/en/costs)
- Shows: Gartner's June 2026 advice is to use model routing. The idea is mainstream even if Kimchi's numbers are not verified. (EVIDENCE.md 4b)

**Rate limits and lock-in:** see rows 2-4. Shows: the best public evidence is vendor behaviour (block, weekly limits), not Kimchi praise. Assumes: Kimchi's own history (credits ended, "scammer" complaints, EVIDENCE.md 6b) shows it also changes terms on users, so "no lock-in" is about models, not about Kimchi's pricing.

**Data staying in VPC:** see row 5. Shows: the claim is vendor-made. Assumes: the buyer who needs it is already served by Bedrock/Vertex unless policy forbids sending code to any frontier lab.

**Central budgets across tools:** see row 6. Shows: Claude Code's own docs point to OpenTelemetry and gateways for cross-provider attribution, which is the gap Kimchi fills. [costs](https://code.claude.com/docs/en/costs)

**Regulated sector / DORA:** Shows: exit strategy and register-of-information duties apply through contracts. Assumes: a multi-model control plane helps document exit, but Kimchi itself becomes a new critical third party on that register.

**Model quality gap:** Shows: two public tests favour Opus on hard tasks. Shows: Claude Code's strength is partly harness. Assumes: for routine tasks (tests, refactors, docs) open models probably suffice, which is the premise of routing. No independent data was found for Kimchi's routing choosing correctly.

---

## 5. The cases

### Strongest honest case FOR Kimchi
- Shows: A single-vendor stack cannot give you a model from another vendor, an open model, or a self-hosted model. Anthropic says so in writing.
- Shows: Cost visibility and caps across more than one tool is a real, loudly voiced pain (HN, Gartner, EngineeringManagers). Claude Code's docs themselves send you to third-party gateways for it.
- Shows: Kimchi works alongside Claude Code and Codex, so adoption does not require a switch. It can be the control layer, not the agent.
- Assumes: For a platform team told "enable agents safely for 500 engineers across clouds", one control plane with caps, org policy and attribution beats stitching Claude analytics, Codex analytics, Copilot billing and LiteLLM.

### Strongest honest case AGAINST
- Shows: Claude Code and Codex already deliver SSO, caps, analytics, audit, retention and cloud deployment. A buyer who standardises on one vendor loses little on governance.
- Shows: Public tests show open models trail the frontier on hard coding tasks.
- Shows: Kimchi's cost numbers are vendor-made against an unnamed baseline.
- Shows: No customer story, no independent review, 0 Software Advice reviews, no HN or Reddit discussion. Its public community is price-led and complained when credits ended (EVIDENCE.md 6b).
- Shows: In July-August some Discord users said they would buy Claude Code instead or had left for OpenCode and Cursor once pricing changed (EVIDENCE.md 6b).
- Assumes: Adding a platform adds a vendor, a new third party for DORA, and a new place where the harness, router and gateway can fail. The "avoid lock-in" benefit is partly swapped for Cast AI lock-in.

### Buyer situations where Kimchi wins (Assumes, built from the evidence)
1. **Multi-vendor platform team with a spend problem.** Engineers already use Claude Code, Codex and Cursor; finance wants one view and caps; nobody wants to force one tool. Kimchi's reporting layer fits (rows 6, 10).
2. **Regulated or sovereignty-driven buyer who cannot send some code to frontier labs.** Open models run in their cluster; frontier models only where allowed (rows 5, 8). Wins if the open-model quality is enough for that workload.
3. **Cast AI's existing Kubernetes/FinOps customers.** Same buyer, same budget logic, existing trust (EVIDENCE.md 2). Assumes: the AI-coding owner is nearby, not identical.

### Buyer situations where Kimchi clearly loses (Assumes)
1. **Startup or small team happy with Claude Code or Cursor.** Needs the best model, tolerates one vendor, has little governance need. Open-model quality gap and the extra tool outweigh the saving.
2. **Enterprise that has standardised on Copilot, Claude Enterprise or Codex and has deep vendor relations.** Built-in controls are good enough; procurement favours the incumbent; Kimchi has no public references to overcome that.
3. **Individual developer shopping on price.** Free credits ended, community churned, and OpenCode, Freebuff and cheap subscriptions undercut it (EVIDENCE.md 6b).

---

## 6. What I could not verify (so do not state as fact)
- Kimchi shadow-mode method, baseline, task set and Akamai's use.
- Kimchi failover behaviour during a provider outage.
- Whether Kimchi can enforce one hard budget across Claude Code and Codex, not just report.
- Codex OpenTelemetry, ZDR and custom-provider support (not found in readable pages).
- Cursor's enterprise spend controls (not searched successfully).
- Justin Garrison's review content.
- Any independent quality test of Kimchi's routed output.

---

## 7. Summary for a non-engineer (10 lines)
1. Claude Code and OpenAI Codex already give big companies logins, spending limits, usage reports, audit records and ways to run in their own cloud.
2. What they do not do is let you use a rival's AI brain, or an open-source one that runs on your own servers.
3. Kimchi's pitch is a single control room over many AI tools and models, with spending caps and reports across all of them.
4. Its main selling point is cost: cheaper open models for easy jobs, expensive ones only when needed.
5. The "2.5 times cheaper" figure comes from the company's own tests against a comparison it does not describe, so treat it as a claim, not a fact.
6. Public tests so far show open models still trail the best Claude model on hard coding tasks.
7. Real developer anger at Claude (sudden blocks, weekly limits, outages) shows people dislike depending on one vendor, but I found almost no public praise of Kimchi itself.
8. Kimchi wins when a company uses several AI coding tools, has a spending problem, or has rules about where code can go.
9. It loses when a team is happy with one tool, needs the very best model, or is just looking for the cheapest price.
10. The honest pitch is "control and choice across tools", not "cheaper than Claude", and it still needs customer proof it does not yet show publicly.

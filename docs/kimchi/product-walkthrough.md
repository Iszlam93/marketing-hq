# Kimchi product walkthrough (first-hand, 24 Oct 2026)

Islam signed up on the free Community plan, installed the CLI (v1.21.0, Windows) and opened the console (app.kimchi.dev). Islam ran no task: the free plan has no Kimchi inference. These are **first-hand observations**, not vendor claims.

## What was verified

| Claim on kimchi.dev | What the product shows | Status |
|---|---|---|
| Hard budget caps per user, team, API key | Governance → Budgets has tabs Org defaults, Teams, Users, API keys, Audit. You can set an overall monthly limit per user and a limit per provider per user. "Set limit" is available on the free plan. | **Verified** (setting not tested with spend) |
| Cost attribution per developer, team, model | Reporting → Adoption: cost and token trends by model and provider, provider mix, top models by spend | **Verified** (as described in the empty state) |
| Governs agents teams already use | Reporting → Productivity tracks sessions across **Claude Code, Kimchi and OpenCode** through OpenTelemetry | **Verified** (reporting, not control) |
| Proving value | Productivity: AI lines added or removed, PRs and commits attributed to AI agents, edit decision rates. **PR costs: "what merged pull requests cost, from billed spend"** | **Verified, partly.** It measures activity and cost per merged PR, not business outcomes. |
| Prompt-level audit to SIEM | An "Audit" tab exists under Budgets. SIEM export wasn't seen. | Partly; likely Enterprise |
| "Start coding… for free" | The CLI and console both say the Community tier needs your own inference (API key); Kimchi models need the Coder plan ($20/mo) | **Contradiction** |

## Observations for the panel

1. **There's no free run.** A new user can't complete a task without their own API key or a paid plan, and the console's "free" headline contradicts the sidebar and the CLI. **Implication:** the finance hook must be a guided pilot, not self-serve.
2. **The console greets everyone as a developer.** The first screen is "Install CLI". Governance and Reporting, the platform lead's value, sit in the side menu.
3. **PR cost reporting is set up per developer on their own machine** (`/pr-reporting on`), unless SaaS telemetry is on. **Question:** can an admin enforce it centrally? A platform lead rolling out to 200 developers will ask.
4. **The CLI enables auto-update by default.** A regulated buyer will want versions controlled centrally. This is a question for product.
5. **The CLI auto-loads an existing Claude Code setup** ("skill conflicts" message), so switching is low-effort for developers.
6. **Ferment mode** (the agent runs large tasks alone) raises spend and risk, which strengthens the case for caps.

## Effect on positioning

- **Control:** confirmed by the product (Budgets per org, team, user, API key, provider).
- **Proving value:** stronger than assumed. "Cost per merged PR" plus PRs and commits attributed to AI is a concrete, verifiable value line. Don't claim ROI.
- **Combined line, verified in the product:** "Cap the spend. See what every merged PR costs."

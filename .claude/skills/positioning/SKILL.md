---
name: positioning
description: Produce a positioning and messaging statement for one segment, grounded in evidence and approved claims, with a message house, alternatives and claims to avoid. Use for any positioning, launch, battlecard, one-pager or content request.
---

# Positioning

## When to use
- Before any customer-facing asset, so every asset says the same thing.
- A request asks for positioning and messaging directly.
- Research notes exist (ICP, voice of customer, competitors) and need turning into a message.

## Inputs
- Product file: description, audience, approved claims (with sources), claims to avoid.
- Upstream research assets (`dependsOn`).
- The brief: segment, buyer, market, tone.

## Method
1. **Choose one segment and one buyer.** Name the segment, the buyer role, and the trigger event that makes them act now. If research shows several, choose one and write why. Write the exclusions: who the message is not for.
2. **List alternatives.** What does the buyer do today without this product (build it, a rival, a spreadsheet, nothing)? Use the competitive research if present.
3. **Find the one value** the evidence supports most. Count how often each value appears across the evidence groups (buyers' ads, forums, reviews, analysts, rivals). Prefer the value that buyers raise most and rivals own least. Show the tally. The open space is often a specific form of a common value (for example control before the event, not reports after).
4. **Write the positioning statement** in this frame, in plain words:
   "For <buyer> at <segment> who <trigger / problem>, <product> is <category> that <one value>. Unlike <alternative>, <the difference that is true>."
   Check each clause against an approved claim. If a clause has no approved claim, mark it Hypothesis, or change it.
5. **Write the headline and the message house.**
   - Headline: one line, specific, no more than 12 words, no hype. Write two alternatives and say which one I would test.
   - Three proof points. Each is a claim from the product file with its source, or `**[add: ...]**`.
   - One call to action that fits the buyer's stage.
   - An honest line on limits: what the product does not do, from the product file or research.
6. **Check against claims to avoid.** Read the "Claims to avoid" list. Remove any phrase, even a near match.
7. **Pre-answer the top objection** from the evidence with a short, true answer.
8. **Confidence.** High, medium or low, with the weakest link and a cheap test to settle it. Link to ab-test-design for the test.

## Output template
```
# Positioning: <product> for <segment>

## Summary
<Three sentences: who, what, why now.>

## Target
- Segment: ...  - Buyer: ...  - Trigger: ...
- Not for: ...

## Alternatives the buyer has today
| Alternative | Why they use it | Where it falls short (source) |

## Value evidence
| Value | Evidence groups showing it | Rivals owning it |
**Chosen value:** ... **Why:** ...

## Positioning statement
"For ..., ... is ... that ... Unlike ..., ..."

## Message house
- **Headline (test this):** ...
- **Alternatives:** ...
- **Proof 1 / 2 / 3:** claim, source
- **Call to action:** ...
- **What I will not say:** ...

## Top objection and answer
## Confidence and the test that would change it
## Open items
- **[add: ...]**

## Sources
```

## Quality checks
- [ ] One segment, one buyer, one trigger, plus exclusions.
- [ ] Alternatives include "do nothing" or "build it".
- [ ] The value choice shows a tally with sources.
- [ ] Each proof point matches an approved claim and cites it.
- [ ] Nothing from "Claims to avoid", not even in softer words.
- [ ] Headline is under 13 words and has no hype words.
- [ ] Hypotheses are marked Hypothesis. Missing facts are `**[add: ...]**`.
- [ ] Voice is "I" where Islam speaks; no "we".

## Worked example (Kimchi, Oct 2026; example only)
Segment: UK and EU financial-services firms up to 5,000 staff. Buyer: the platform owner. Trigger: the firm is hiring an AI-rollout role. Value: control before the work runs, not reports after. Headline: "Roll out coding agents across engineering. Stay in control." The close says the product "already reports on Claude Code", because the Claude Code integration is telemetry only. Source: `docs/kimchi/HANDOFF.md`, `docs/kimchi/value-tally.md`.

## Why a PMM does this
Positioning is the PMM's main craft. It decides which customer, which problem and which claim, and then every page, ad and sales call follows. A tally of evidence turns taste into a decision others can check. The claims-to-avoid check protects the company from promises it cannot keep.

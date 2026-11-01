---
name: email-sequence
description: Draft a short outbound or nurture email sequence with timing, subject lines, exit conditions and one test. Use for content-piece requests that are email or a sequence. Drafts only; nothing is ever sent.
---

# Email sequence

## When to use
- A request asks for an email, a sequence, an outreach set or a nurture flow.
- Positioning and, ideally, ICP research exist (`dependsOn`).
- Not for newsletters of mixed content. Use content-piece for those.

## Inputs
- Positioning asset (message house) and any ICP or voice-of-customer asset.
- Product file: approved claims, claims to avoid.
- The brief: audience, goal (reply, call, download), the sender (Islam or a seller), length.

## Method
1. **Define the single goal** (one action) and the single reader. A sequence for tier 1 accounts is written one by one from the one-pager; a sequence for tier 2 is written once with merge fields. State which.
2. **Choose the length.** Three to five emails over about two to three weeks. More is rarely better. Write the spacing in working days.
3. **Email 1: the problem in their words.** Two to four short sentences. One reason you are writing to them: a public fact about their role or firm with a link, or a pattern with its count. No fake familiarity, no invented compliment. One easy question as the call to action.
4. **Email 2: one proof.** One approved claim with its source. One sentence on what it means for them. Same question in different words.
5. **Email 3: a useful thing.** A short asset (a one-pager, a test result, a checklist) the reader can use without replying. Link to it. If none exists, write `**[add: asset]**`.
6. **Email 4 (optional): the honest close.** Say what the product does not do, and ask if the timing is wrong. Give an easy way to say no.
7. **Subject lines.** Two options per email, under 7 words, plain, no tricks, no "Re:" or "Fwd:". No fake urgency.
8. **Merge fields.** List every field in `{{double braces}}` and where its value must come from. Never fill a field with a guess.
9. **Exit conditions.** Stop on reply, on "no", on unsubscribe, on bounce. Write the rule for each. A person who says no is never emailed again by the sequence.
10. **Legal and ethical check.** Include a line for the sender's real identity and an opt-out. Use only business contact data the sender obtained lawfully. This agent does not find or use personal data. Mark `**[add: legal basis and opt-out wording]**` for Islam to confirm.
11. **One test.** Change one thing (for example subject line A vs B) and note the sample needed. Link to ab-test-design.

## Output template
```
# Email sequence: <name>

## Goal, reader, sender
## Timing
| Email | Day | Purpose |

## Emails
### Email 1 (day 0)
**Subject A / B:** ...
**Body:**
...
**Sources for claims:** ...

(repeat for each email)

## Merge fields
| Field | Source | Fallback |

## Exit rules
## Legal and ethics (to confirm)
## One test
## Open items
- **[add: ...]**

## Sources
```

## Quality checks
- [ ] One goal, one reader, 3 to 5 emails with spacing in days.
- [ ] Each email under 120 words, with one question or action.
- [ ] Every fact in an email traces to an approved claim, asset or dated URL.
- [ ] No invented personalisation. Merge fields have a named source.
- [ ] Subject lines are plain, under 7 words, two per email.
- [ ] Exit rules include reply, no, unsubscribe, bounce.
- [ ] Opt-out and sender identity are present or marked for confirmation.
- [ ] Nothing was sent, scheduled or loaded into any tool.
- [ ] No "we" in Islam's voice.

## Worked example (Kimchi, Oct 2026; example only)
For a tier-1 fintech, email 1 opened with a line from the firm's own public job ad about usage limits (link), asked one question about how the limits are set today, and offered a 20-minute call. Source: `docs/kimchi/tier1-accounts.md`.

## Why a PMM does this
PMMs write the first message a buyer reads, so the sequence must be short, true and easy to leave. Writing the exit rule is as important as writing the email. It protects the brand, and it shows a respect for the reader that buyers notice.

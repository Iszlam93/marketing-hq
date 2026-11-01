---
name: custom-one-pager
description: Write a one-page sales asset, either custom for one named account (tier 1) or generic for a segment (tier 2). Use for one-pager requests, when positioning exists and a buyer needs a single page to read.
---

# Custom or generic one-pager

## When to use
- A request asks for a one-pager or sales asset.
- **Custom** (tier 1): one named account, built from that account's own public words (its job ad, its public posts).
- **Generic** (tier 2): one segment, built from the pattern across many accounts, offered as a download.
- Not for a long document. If it will not fit one page, cut.

## Inputs
- Positioning asset (message house) and any research asset (`dependsOn`).
- Product file: approved claims only.
- The brief: audience, the account name if custom, the next step wanted.
- For custom: the public sources about that account (job ad link, public pages), supplied in the brief or the research asset.

## Method
1. **Decide custom or generic** from the brief. Custom needs a named account with public sources. If the account is named but no sources are given, search public pages only, and mark the gaps `**[add: ...]**`. Never guess what an account is doing.
2. **Open with the reader's problem**, in their words. For custom, quote or paraphrase the account's own public text in under 15 words, with a link, to show why the page exists for them. For generic, state the pattern with its count and source ("N of M roles ask for ...") and say the count is from public job ads, not from the reader.
3. **Show the answer.** One headline from the positioning asset. Three short proof points, each from an approved claim and each cited. Use short sentences.
4. **Make it concrete.** One example of how it looks in the reader's week: a before and an after, without invented numbers. If a number is wanted and none is approved, write `**[add: number]**`.
5. **State limits honestly.** One line on what the product does not do or what is still unknown, from the product file. Buyers trust a page that says it.
6. **One next step.** A single, low-effort call to action (for example a 20-minute call to look at one question). No form with many fields.
7. **Fit check.** Count words: aim for 250 to 350 words. Every part earns its place.
8. **Compliance check.** Scan for any phrase in "Claims to avoid". Remove it. Check that nothing implies the account already uses or endorses the product.
9. **Do not send.** The draft stays in the repo. Islam decides if and when it goes anywhere.

## Output template
```
# One-pager: <custom: Account | generic: Segment>

## Type
Custom (tier 1) | Generic (tier 2). Reader: <role>.

## Page copy
**Headline:** ...
**Why this page for you:** <their words or the pattern, with a link or count>
**What I do about it:**
- <Proof 1> 
- <Proof 2>
- <Proof 3>
**In your week:** <before / after, no invented numbers>
**What it does not do:** ...
**Next step:** ...

## Layout notes
<Sections in order; what is bold; one visual if any.>

## Claim map
| Sentence | Source (approved claim, asset, URL) |

## Open items
- **[add: ...]**

## Sources
```

## Quality checks
- [ ] The type (custom or generic) is stated and matches the sources used.
- [ ] Any quote is under 15 words, with a link.
- [ ] Every sentence of fact appears in the claim map with a source.
- [ ] No claim from "Claims to avoid". Nothing implies the account uses or endorses the product.
- [ ] 250 to 350 words; one call to action.
- [ ] An honest limits line is present.
- [ ] Missing numbers are `**[add: ...]**`, not estimates.
- [ ] "I", not "we", wherever Islam speaks.

## Worked example (Kimchi, Oct 2026; example only)
A custom page for one tier-1 fintech used the firm's own job ad ("usage limits") as its opening. A generic finance page was the download for the wider tier 2, with a line saying it came from public job ads. Islam disliked a chip that read "Based on 11 UK and EU finance job ads for AI-platform roles, 90 days to Oct 2026" and preferred wording about what peers are hiring to build. Source: `docs/kimchi/HANDOFF.md`, `docs/kimchi/one-pagers/`.

## Why a PMM does this
Sales teams and buyers read one page, not a deck. A PMM writes the page that makes the first call easy. A custom page shows the buyer that someone read their own words, which earns attention that a generic page cannot. A generic page makes sure the many accounts below the top tier still get something relevant.

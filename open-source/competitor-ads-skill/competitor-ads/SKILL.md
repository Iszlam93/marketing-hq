---
name: competitor-ads
description: Use when someone says "check <competitor> ads", "what is <competitor> advertising?", "show me <competitor>'s ads" or "what are our competitors running?". Asks which platforms to check (Meta, Google, LinkedIn, TikTok and others), reads the competitor's live ads in the free public ad libraries, and comes back with a short summary of what they advertise about. Then offers to save every ad, to the user's computer or to Notion. Use before positioning, a launch, a campaign or a battlecard.
license: MIT
---

# Competitor ads

**How it runs:** the user says "check HubSpot ads". You ask which platforms, check them, come back with what HubSpot is advertising about, then offer to save every ad.

Keep it quick and conversational. Ask only the questions below; use sensible defaults for everything else.

## Step 1. Ask what to check (two short rounds)
Never promise what a platform cannot show. Ask in this order, so every option you offer is real.

**Round 1: platforms and country, in one message.** If your tools allow multiple-choice questions, use them.
1. **Which platforms?** (one or more): LinkedIn, Google, Meta, TikTok, Microsoft (Bing), X, Pinterest, Snapchat.
2. **Which country?** The user's own country first if you know it, then United Kingdom, United States, another country.

**Before Round 2, check the platforms against the country** using the table "What each platform can show" in `reference/channels.md`:
- If a chosen platform has **no library for that country** (for example TikTok in the United States), tell the user now, in one line, and drop it: "TikTok only shows ads in Europe and the UK, so I can't check it for the US."
- Then tell the user, in one line per platform, **what they will get**: "Meta, US: only ads running today." "LinkedIn, US: ads from the last 12 months."

**Round 2: the time period.** Offer **only** periods that every remaining platform can cover for that country:
- **Running now** (always offered)
- **Last 30 days**, **Last 90 days**, **Last 12 months** (offered only if every remaining platform keeps that much history for that country)

If the platforms differ (for example Meta in the US shows only ads running now, LinkedIn shows 12 months), say so and offer: "Running now on all of them" or "the most each one has: Meta running now, LinkedIn 12 months".

If the user already gave any of these in their message ("check HubSpot ads on LinkedIn in Germany, last 90 days"), do not ask again. Still run the check above, and correct anything a platform cannot do before you start.

**At run time, confirm with the library itself.** When you open each library, look at its own date filter and what it actually returns. If it shows less than the table says, tell the user before the findings: "Google only returned ads from the last 30 days." The library on the day beats the table.

Without asking:
- **Competitor name:** search the company name, its product names and its website domain, because ads often run under a different name.
- **How many ads:** read every ad in the chosen period, up to 50 per platform. If there are more, read the 50 most recent and say so.

## Step 2. Collect the ads
Ad libraries block automated visitors, so pick the first route that works:

1. **Claude in Chrome** (if available): open each library in the user's browser, set the country, search the competitor, and read every active ad. Tested: Meta and LinkedIn open this way.
2. **The user's screenshots** (if there is no browser access): give the user the direct links from `reference/channels.md` and ask them to paste screenshots or the ad text. Say it takes about 5 minutes per platform.
3. **A scraping connector** (for example Apify), only if the user has one and says yes: estimate the cost first.

For every ad, note the fields in `reference/ad-checklist.md`. Keep going without asking more questions. If a platform needs a login, shows nothing or blocks you, say so in the findings and move on.

## Step 3. Come back with the findings
Keep it short: the user should read it in one minute. Use this shape (full template in `reference/output.md`):

1. **One line:** what they mostly advertise about.
2. **What they talk about:** the 3 to 5 main themes, each with how many ads ("6 of 18 ads") and one short example headline.
3. **Their offers:** demo, free trial, download, webinar, event, other, with counts.
4. **What stands out:**
   - **long runners** (running for 3 months or more): probably working
   - **new push** (many new ads in the last 4 weeks)
   - **testing** (several versions of one idea)
   - **differences between platforms** (for example, LinkedIn is all demos, Meta is all free trials)
5. **What nobody in their ads mentions** that buyers care about, if it is clear from the ads. Keep it to one or two lines.

Then a short line of what was checked: platforms, country, time period, date checked, number of ads read, and any platform that could not be read or could not cover the period.

## Step 4. Offer to save all the ads
End with one question: **"Do you want to see all the ads? I can save them to your computer or to Notion."**

- **Computer:** create a folder `competitor-ads/<competitor>-<date>/` with:
  - `ads.csv`: one row per ad, with the columns in `reference/output.md`
  - `summary.md`: the findings from Step 3
  - the screenshots, if you have them

  If you cannot write to the user's computer directly, create the files and hand them over to download.
- **Notion:** if Notion is connected, create (or reuse) one database called **Competitor ads** with the columns in `reference/output.md`, add one row per ad, and add a page **"<Competitor> ads, <date>"** with the findings. Link it back to the user. If Notion is not connected, say so and offer the computer option.
- **No:** stop there.

Never save anything before the user picks an option.

## Rules
- **Report what you saw.** Never guess targeting or results.
- **Date everything:** every ad and every finding carries the platform, country and date checked.
- **Quote briefly:** headlines under 15 words, word for word.
- **Be fair:** say what the competitor does well.
- **Read only:** never click, like or comment on ads, never use someone else's login, and never post anything.

## Works with
- **Positioning, messaging, battlecards and launches:** use "what they talk about" and "what nobody mentions" as inputs.

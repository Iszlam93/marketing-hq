---
name: competitor-ads
description: For the moment a product marketer asks "what are our competitors running in ads right now?", "what do they promise?" or "what is nobody saying?". Collects competitors' live ads from the free public ad libraries (Meta, Google, LinkedIn, TikTok and others), reads each ad with one checklist, and turns them into one page: what everyone says, what one competitor owns, what nobody says, and what to do about it. Use before positioning, a launch, a campaign, a battlecard, or when a competitor seems to be pushing hard. Works with Claude in Chrome, with screenshots the user pastes, or with a scraping connector.
license: MIT
---

# Competitor ads

**The moment:** "What are our competitors running right now?", "What do they promise?", "Are they pushing something new?", "What is nobody saying?".

**Why ads:** a website says what a company wants to be. Ads show what it is **paying** to say, to whom, right now. An ad that keeps running for months is probably working, because nobody keeps paying for a bad ad.

**What you get:** one page with what everyone says, what one competitor owns, what nobody says, the offers they use, the signals (testing, launches, long runners), and what to do next. The template is in `reference/one-page-output.md`.

## The 6 steps

| Step | In plain words | Detail lives in |
|---|---|---|
| 1. Pick the competitors | 3 to 6 names, including the one customers mention most | this file |
| 2. Pick the channels | Where your buyers see ads | `reference/channels.md` |
| 3. Collect the ads | One of three routes, below | this file |
| 4. Read each ad | The same checklist for every ad | `reference/ad-checklist.md` |
| 5. Read the signals | Long runners, testing, launches, gaps | this file |
| 6. Write the one page | Everyone says / one owns / nobody says / what to do | `reference/one-page-output.md` |

---

## Step 1. Pick the competitors
1. List 3 to 6 competitors: the one customers mention most (from lost deals or sales), 1 to 2 direct rivals, and 1 newer or fast-growing one.
2. For each, write the exact names they advertise under: company name, product name, website domain. Ad libraries search by these, and they are often different (a product brand vs the legal company name).
3. Write the **country** you care about. Libraries show different ads per country.

**Done when:** the list has names, advertiser names, domains and the country.

## Step 2. Pick the channels
Check where **your buyers** see ads. Start with two; add more only if they matter.

| You sell to | Start with | Then |
|---|---|---|
| Businesses (B2B software, services) | LinkedIn, Google | Meta, Microsoft (Bing) |
| Small businesses and trades | Meta, Google | TikTok |
| Consumers | Meta, TikTok | Google, Pinterest, Snapchat |

`reference/channels.md` lists every library, its link, what it shows, and its limits.

**Done when:** you have 2 to 4 channels, each with a reason.

## Step 3. Collect the ads: pick a route
Ad libraries are built for people, not bots. Many block automated visitors, so pick the route that fits your setup.

**Route A: Claude in Chrome (recommended if you have it)**
Claude works inside your own browser, where the libraries load as normal. Tested: the Meta and LinkedIn libraries open this way. Ask Claude to open each library, set the country, search each competitor, and fill the checklist in `reference/ad-checklist.md` for every active ad (or the 15 most recent, if there are many). Claude must say when a page needs a login, a click it cannot make, or shows nothing, instead of guessing.

**Route B: you collect, Claude analyses (free, works for everyone)**
Open each library yourself (about 10 minutes per competitor per channel). For each ad, take a screenshot that shows the text and the start date, or copy the text and the date. Paste them into the chat with the competitor and channel name. Claude fills the checklist from what you pasted.

**Route C: a scraping connector (for volume)**
Tools such as Apify have ready-made collectors for ad libraries. Use them when you need hundreds of ads or a repeat every month. They cost money past a small free allowance: estimate the cost and get an OK first, and check that the use fits the library's terms.

Whatever the route:
- Record the **date you collected** and the **country** for every ad. Libraries change daily.
- Record **how many active ads** each competitor has on each channel, even if you only read some of them.
- Never log in to someone else's account, and never click on or interact with competitors' ads.

**Done when:** every competitor and channel has an ad count, and each collected ad has its text, start date, channel, country and collection date.

## Step 4. Read each ad
Use `reference/ad-checklist.md` for every ad, so the comparison is fair. In short, for each ad note:
- the **main promise** (headline or first line)
- the **problem** it names and **who** it speaks to
- the **proof** (numbers, logos, awards)
- the **offer** (demo, free trial, download, webinar, discount)
- the **format** (image, video, carousel, text)
- the **start date** and whether it is still running
- the **theme**, using the same short list of themes for every ad

**Done when:** every collected ad has a filled checklist row.

## Step 5. Read the signals
Look across the rows and write what each signal shows. Always give counts ("4 of 11 ads").

| Signal | What to look for | What it usually means |
|---|---|---|
| Long runner | an ad running for 3 months or more | probably working; study its promise and offer |
| Testing | several versions of one idea with small changes | they are still looking for what works |
| Launch | a burst of new ads in the last 2 to 4 weeks | a launch, a new market or a new push |
| Offer pattern | the same offer in most ads | how they turn interest into leads |
| Silence | a competitor with no ads on a channel | they are not investing there, or they stopped |

Then sort the themes:
- **Everyone says:** a theme in most competitors' ads. Crowded; saying it too gets you lost.
- **One owns:** a theme one competitor repeats, with proof. Hard to take from them.
- **Nobody says:** a theme that matters to buyers but appears in no ads. Your opening, if your product can prove it.

To know whether "nobody says" matters to buyers, check it against what buyers say (reviews, forums, sales calls). A gap nobody cares about is not an opening.

**Done when:** each signal has a count and a meaning, and every theme sits in one of the three groups.

## Step 6. Write the one page
Fill `reference/one-page-output.md`. End with three recommendations, each tied to a finding: what to say, what to avoid, and what to test.

**Done when:** the page is filled and every claim points to ad rows.

---

## Rules
- **Report what you saw, not what you guess.** No spend figures: no library shows them for normal ads. Never invent targeting or results.
- **Absence is limited.** "No ads found" only holds for that library, country and date.
- **Date everything.** Every finding carries the collection date and country.
- **Quote briefly.** Under 15 words per quote, and attribute it to the competitor, channel and date.
- **Be fair.** Credit what competitors do well before saying where they are weak.
- **Never interact** with competitors' ads, accounts or pages, and never use someone else's login.
- **Read only.** Nothing is posted, sent or bought.

## Connectors and tools (optional)
| Tool | Helps with | Notes |
|---|---|---|
| Claude in Chrome | Step 3, Route A | Uses your own browser; tested to open Meta and LinkedIn |
| Apify or similar scrapers | Step 3, Route C | Volume and repeat runs; paid past a free allowance |
| Search and web data (Semrush, Similarweb) | Step 5 | Adds search-ad keywords and traffic sources |
| Docs and notes (Notion, Google Drive, Microsoft 365) | Step 6 | One shared place for the page and the ad rows |

## Works with
- **where-to-start:** this page feeds Step 2d (competitors) and the message in Step 3.
- **Positioning, battlecards and launches:** use the "nobody says" and "do not say" lists.

## Why this works
Ads are the most honest public view of a competitor's strategy: they cost money, so they show what the company believes will work, today. Reading every ad with the same checklist turns a scroll through screenshots into a fair comparison, and the "nobody says" list turns it into a decision.

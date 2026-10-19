# Islam's LinkedIn brand kit: Swiss Grid

The single visual identity for every LinkedIn visual from 19 Oct 2026 onward. It replaces the earlier hand-drawn and violet styles for posts. The Designer agent uses only these templates.

## Palette
| Token | Hex | Use |
|---|---|---|
| Paper | `#F7F6F3` | Background, always |
| Ink | `#111111` | Headlines, rules, text |
| Vermilion | `#E5462C` | The one accent: 1–3 words per visual, big numerals, series name |
| Rule | `#D9D7D1` | Footer divider, secondary lines |
| Grey text | `#555555` | Body copy and metadata on visuals |

No other colours. No gradients, no shadows, no stock photos.

## Type
- **Headlines:** Inter Tight 800, letter-spacing −0.045em, line-height 0.98, sentence case.
- **Body on visuals:** Inter Tight 400, at most two short lines.
- **Metadata:** JetBrains Mono 500 for the series bar, footer, page numbers and dates.

## The grid
- **Format:** 1080×1350 (4:5).
- **Margins:** 76 px.
- **Content sits top-left.** Nothing is centred except the numerals on carousel slides.
- **Top bar, on every visual:**
  - left: `SERIES · ###` in mono, with the series name in vermilion
  - right: context (year, `02 / 06`, a project name)
  - a 4 px ink rule underneath
- **Footer, on every visual:**
  - a 3 px rule-colour line
  - left: **Islam Elsaeed** with "B2B PMM who builds with AI" beneath
  - right: a mono hint (`→ swipe`, page number, or the profile URL)

## Series, one per content pillar
| Pillar | Series label | Numbering |
|---|---|---|
| Building with AI in public | **BUILD LOG** | 001, 002, … |
| Product marketing craft | **PMM NOTES** | 001, 002, … |
| AI for marketers | **AI FOR MARKETERS** | 001, 002, … |
| Journey & learning | **JOURNEY** | 001, 002, … |

Numbers increase per series and never reset. They build recognition.

## Templates
1. **Cover:** the headline is 6 to 10 words, with 1 to 3 accent words in vermilion. Used for single-image posts and as carousel slide 1.
2. **Carousel slide:** a big vermilion numeral (`02`), a short statement under it, and at most 2 lines of body text. 5 to 8 slides, and the last slide carries the question.
3. **Quote card:** one or two sentences with the second half in vermilion, plus a short ink rule. Use sparingly: at most one quote card a month.
4. **Build-log frame:** a short headline, a real screenshot inside a 4 px ink frame, and the project name on the right of the bar.

## Rules
- **One idea per visual.** The text on the image never repeats the post's first line word for word.
- **Accent words carry the point.** Never colour a whole sentence.
- **Screenshots must be real.** Never mock up a product as if it were live.
- **Off-limits:** former employer logos, names or colours.

## How the Designer specifies a visual
Every post file's `## Visual` section uses this format:
```
template: cover            # cover | carousel | quote | buildlog
series: PMM NOTES
issue: 001
context: 2026
headline: Positioning is a *decision*, not a sentence.   # *word* = vermilion
slides:                    # carousel only, one line per slide: "statement | body"
  - Decide who it's not for. | A message for everyone is a message for no one.
screenshot: brand-hq/design/shots/brand-hq-plan.png      # buildlog only
```
Rendered with `brand-hq/design/render.py` (HTML template → PNG; carousels → PDF).

#!/usr/bin/env python3
"""Render Swiss Grid visuals for Brand HQ posts.

  python brand-hq/design/render.py               # all posts with a renderable ## Visual
  python brand-hq/design/render.py <post-id> ... # specific posts

Output: brand-hq/design/out/<post-id>/01.png, 02.png … (1080x1350), plus carousel.pdf for carousels.
Needs a Chromium-based browser (Edge or Chrome locally; set BHQ_BROWSER to override).
Spec: docs/brand-hq/BRAND-KIT.md
"""
import base64, html, os, re, shutil, subprocess, sys, tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
POSTS = os.path.join(ROOT, "brand-hq", "posts")
OUT = os.path.join(ROOT, "brand-hq", "design", "out")
W, H = 1080, 1350

FONTS = "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700;800&family=JetBrains+Mono:wght@500;600&display=block"
CSS = """
*{box-sizing:border-box;margin:0}
html,body{width:1080px;height:1350px;background:#F7F6F3}
.s{width:1080px;height:1350px;position:relative;overflow:hidden;background:#F7F6F3;color:#111;font-family:'Inter Tight',sans-serif;padding:76px;page-break-after:always;break-after:page}
.bar{display:flex;justify-content:space-between;font:500 32px 'JetBrains Mono',monospace;border-bottom:4px solid #111;padding-bottom:24px}
.bar b{color:#E5462C;font-weight:600}
.h{font-weight:800;font-size:142px;line-height:.98;letter-spacing:-.045em;margin-top:96px}
.h.m{font-size:112px}
.h.s2{font-size:92px;margin-top:70px}
em{font-style:normal;color:#E5462C}
.num{font-weight:800;font-size:330px;line-height:.8;letter-spacing:-.06em;color:#E5462C;margin-top:90px}
.st{font-weight:700;font-size:86px;line-height:1.02;letter-spacing:-.03em;margin-top:40px}
.st.big{font-size:104px;margin-top:120px}
.bd{font:400 42px/1.42 'Inter Tight',sans-serif;color:#333;margin-top:40px;max-width:880px}
.foot{position:absolute;left:76px;right:76px;bottom:64px;display:flex;justify-content:space-between;align-items:flex-end;font:500 30px 'JetBrains Mono',monospace;color:#555;border-top:3px solid #D9D7D1;padding-top:24px}
.foot b{display:block;font:700 38px 'Inter Tight',sans-serif;color:#111;margin-bottom:4px}
.shot{margin-top:56px;border:4px solid #111;background:#fff;height:640px;overflow:hidden}
.shot img{width:100%;height:100%;object-fit:cover;object-position:top left;display:block}
"""


def browser():
    cands = [os.environ.get("BHQ_BROWSER"),
             r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
             r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
             r"C:\Program Files\Google\Chrome\Application\chrome.exe",
             shutil.which("chromium"), shutil.which("chromium-browser"), shutil.which("google-chrome"), shutil.which("microsoft-edge")]
    for c in cands:
        if c and os.path.exists(c):
            return c
    sys.exit("No Chromium-based browser found. Set BHQ_BROWSER.")


def parse_post(path):
    raw = open(path, encoding="utf-8").read().replace("\r\n", "\n")
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", raw, re.S)
    meta = {}
    for line in m.group(1).splitlines():
        if ":" in line:
            k, v = line.split(":", 1)
            meta[k.strip()] = v.strip().strip('"')
    vis = re.search(r"^## Visual\s*\n(.*?)(?=^## |\Z)", m.group(2), re.S | re.M)
    return meta, (vis.group(1).strip() if vis else "")


def parse_visual(text):
    v, slides, in_slides = {}, [], False
    for line in text.splitlines():
        if re.match(r"^\s+-\s", line) and in_slides:
            slides.append(line.strip()[2:].strip())
            continue
        in_slides = False
        if ":" in line:
            k, val = line.split(":", 1)
            k = k.strip()
            val = re.sub(r"\s+#.*$", "", val).strip()
            if k == "slides":
                in_slides = True
            else:
                v[k] = val
    v["slides"] = slides
    return v


def rich(s):
    return re.sub(r"\*(.+?)\*", r"<em>\1</em>", html.escape(s))


def bar(v, right):
    return f'<div class="bar"><span><b>{html.escape(v.get("series",""))}</b> · {html.escape(v.get("issue",""))}</span><span>{html.escape(right)}</span></div>'


def foot(right):
    return f'<div class="foot"><div><b>Islam Elsaeed</b>B2B PMM who builds with AI</div><span>{html.escape(right)}</span></div>'


def headline_class(text):
    n = len(re.sub(r"\*", "", text))
    return "h" if n <= 42 else ("h m" if n <= 64 else "h s2")


def slides_html(v):
    t = v.get("template", "")
    if t == "cover":
        return [f'<div class="s">{bar(v, v.get("context",""))}<div class="{headline_class(v["headline"])}">{rich(v["headline"])}</div>{foot("")}</div>']
    if t == "buildlog":
        src = os.path.join(ROOT, v.get("screenshot", ""))
        img = ""
        if os.path.exists(src):
            img = '<img src="data:image/png;base64,' + base64.b64encode(open(src, "rb").read()).decode() + '">'
        return [f'<div class="s">{bar(v, v.get("context",""))}<div class="h s2" style="margin-top:56px;font-size:80px">{rich(v["headline"])}</div><div class="shot">{img}</div>{foot("")}</div>']
    if t == "carousel":
        n = len(v["slides"]) + 1
        out = [f'<div class="s">{bar(v, f"01 / {n:02d}")}<div class="{headline_class(v["headline"])}">{rich(v["headline"])}</div>{foot("→ swipe")}</div>']
        for i, sl in enumerate(v["slides"], start=2):
            st, _, bd = [x.strip() for x in sl.partition("|")]
            last = i == n
            body = f'<div class="bd">{rich(bd)}</div>' if bd else ""
            if last:
                out.append(f'<div class="s">{bar(v, f"{i:02d} / {n:02d}")}<div class="st big">{rich(st)}</div>{body}{foot(f"{i:02d} / {n:02d}")}</div>')
            else:
                out.append(f'<div class="s">{bar(v, f"{i:02d} / {n:02d}")}<div class="num">{i:02d}</div><div class="st">{rich(st)}</div>{body}{foot(f"{i:02d} / {n:02d}")}</div>')
        return out
    return []


def page(body):
    return f'<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="{FONTS}"><style>{CSS}@page{{size:1080px 1350px;margin:0}}</style></head><body>{body}</body></html>'


def run(br, args):
    subprocess.run([br, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run",
                    "--force-device-scale-factor=1", "--virtual-time-budget=6000",
                    f"--user-data-dir={os.path.join(tempfile.gettempdir(), 'bhq-render-profile')}"] + args,
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=False, timeout=120)


def render(post_id, br):
    meta, vtext = parse_post(os.path.join(POSTS, post_id + ".md"))
    v = parse_visual(vtext)
    if "[" in v.get("headline", "[") or v.get("template") not in ("cover", "carousel", "buildlog"):
        return f"{post_id}: skipped (no renderable visual yet)"
    slides = slides_html(v)
    od = os.path.join(OUT, post_id)
    os.makedirs(od, exist_ok=True)
    tmp = tempfile.mkdtemp()
    for i, s in enumerate(slides, start=1):
        f = os.path.join(tmp, f"{i:02d}.html")
        open(f, "w", encoding="utf-8").write(page(s))
        run(br, [f"--window-size={W},{H}", f"--screenshot={os.path.join(od, f'{i:02d}.png')}", "file:///" + f.replace("\\", "/")])
    if v["template"] == "carousel":
        f = os.path.join(tmp, "all.html")
        open(f, "w", encoding="utf-8").write(page("".join(slides)))
        run(br, ["--no-pdf-header-footer", f"--print-to-pdf={os.path.join(od, 'carousel.pdf')}", "file:///" + f.replace("\\", "/")])
    shutil.rmtree(tmp, ignore_errors=True)
    return f"{post_id}: {len(slides)} image(s)" + (" + carousel.pdf" if v["template"] == "carousel" else "")


if __name__ == "__main__":
    br = browser()
    ids = sys.argv[1:] or sorted(f[:-3] for f in os.listdir(POSTS) if f.endswith(".md"))
    for pid in ids:
        print(render(pid, br))

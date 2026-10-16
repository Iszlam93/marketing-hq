#!/usr/bin/env python3
"""Brand HQ helper: content calendar + Telegram. Standard library only.

Usage:
  python brand-hq/scripts/bhq.py list                 # show the calendar
  python brand-hq/scripts/bhq.py review <post-id>     # send a draft to Telegram for approval
  python brand-hq/scripts/bhq.py kit <post-id>        # send the copy-ready post kit
  python brand-hq/scripts/bhq.py notify "<text>"      # send a plain message
  python brand-hq/scripts/bhq.py poll                 # process button taps, replies and files
  python brand-hq/scripts/bhq.py status <post-id> <status>

Env: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID (read from the environment, or from .env in the repo root).
Post files: brand-hq/posts/*.md with a front matter block between '---' lines.
Statuses: planned, drafting, needs_approval, revising, approved, kit_sent, posted, skipped.
"""
import json, os, re, sys, urllib.parse, urllib.request
from datetime import datetime, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BHQ = os.path.join(ROOT, "brand-hq")
POSTS = os.path.join(BHQ, "posts")
STATE = os.path.join(BHQ, "state", "telegram.json")
INBOX = os.path.join(BHQ, "inbox")


def env(name):
    v = os.environ.get(name)
    if v:
        return v
    p = os.path.join(ROOT, ".env")
    if os.path.exists(p):
        for line in open(p, encoding="utf-8"):
            if line.startswith(name + "="):
                return line.split("=", 1)[1].strip()
    sys.exit(f"Missing {name}. Set it in the environment (cloud) or .env (local).")


def api(method, payload=None):
    url = f"https://api.telegram.org/bot{env('TELEGRAM_BOT_TOKEN')}/{method}"
    data = json.dumps(payload or {}).encode()
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=30) as r:
        out = json.load(r)
    if not out.get("ok"):
        raise RuntimeError(out)
    return out["result"]


def send(text, buttons=None, reply_to=None):
    p = {"chat_id": int(env("TELEGRAM_CHAT_ID")), "text": text, "parse_mode": "HTML", "disable_web_page_preview": True}
    if buttons:
        p["reply_markup"] = {"inline_keyboard": buttons}
    if reply_to:
        p["reply_to_message_id"] = reply_to
    return api("sendMessage", p)


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


# ---------- post files ----------
def load(path):
    raw = open(path, encoding="utf-8").read().replace("\r\n", "\n")
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", raw, re.S)
    meta = {}
    for line in m.group(1).splitlines():
        if ":" in line:
            k, v = line.split(":", 1)
            meta[k.strip()] = v.strip().strip('"')
    return meta, m.group(2), raw


def posts():
    out = []
    for f in sorted(os.listdir(POSTS)):
        if f.endswith(".md"):
            meta, body, _ = load(os.path.join(POSTS, f))
            meta["_file"] = os.path.join(POSTS, f)
            meta["_body"] = body
            out.append(meta)
    return sorted(out, key=lambda m: (m.get("date", ""), m.get("time", "")))


def find(pid):
    for m in posts():
        if m.get("id") == pid:
            return m
    sys.exit(f"No post with id {pid}")


def set_meta(pid, **kv):
    m = find(pid)
    raw = open(m["_file"], encoding="utf-8").read().replace("\r\n", "\n")
    for k, v in kv.items():
        if re.search(rf"^{k}:.*$", raw, re.M):
            raw = re.sub(rf"^{k}:.*$", f"{k}: {v}", raw, count=1, flags=re.M)
        else:
            raw = raw.replace("\n---\n", f"\n{k}: {v}\n---\n", 1)
    open(m["_file"], "w", encoding="utf-8", newline="\n").write(raw)


def section(body, name):
    m = re.search(rf"^## {re.escape(name)}\s*\n(.*?)(?=^## |\Z)", body, re.S | re.M)
    return m.group(1).strip() if m else ""


def append_feedback(pid, text):
    m = find(pid)
    stamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    raw = open(m["_file"], encoding="utf-8").read().replace("\r\n", "\n")
    if "\n## Feedback" not in raw:
        raw = raw.rstrip() + "\n\n## Feedback\n"
    raw = raw.rstrip() + f"\n- {stamp}: {text}\n"
    open(m["_file"], "w", encoding="utf-8", newline="\n").write(raw)


# ---------- state ----------
def state():
    if os.path.exists(STATE):
        return json.load(open(STATE, encoding="utf-8"))
    return {"offset": 0, "awaiting_feedback": {}}


def save_state(s):
    os.makedirs(os.path.dirname(STATE), exist_ok=True)
    json.dump(s, open(STATE, "w", encoding="utf-8"), indent=2)


# ---------- commands ----------
def cmd_list():
    for m in posts():
        print(f"{m.get('date')} {m.get('time','')}  {m.get('status',''):15} {m.get('id'):32} {m.get('title')}")


def cmd_review(pid):
    m = find(pid)
    post = section(m["_body"], "Post")
    preview = post if len(post) < 900 else post[:880].rsplit(" ", 1)[0] + " …"
    text = (f"📝 <b>Draft ready for your approval</b>\n<b>{m['date']} · {m.get('time','08:30')}</b> · {esc(m.get('pillar',''))}\n"
            f"<i>{esc(m['title'])}</i>\n\n{esc(preview)}\n\n🎨 Visual: {esc(section(m['_body'], 'Visual')[:300])}")
    send(text, [[{"text": "✅ Approve", "callback_data": f"approve:{pid}"}, {"text": "✏️ Send back", "callback_data": f"back:{pid}"}],
                [{"text": "👀 Full draft + first comment", "callback_data": f"read:{pid}"}]])
    set_meta(pid, status="needs_approval")
    print(f"sent review for {pid}")


def cmd_kit(pid):
    m = find(pid)
    send(f"⏰ <b>Time to post</b> · {esc(m['title'])}\n1. Copy the post below\n2. Add the visual\n3. Post\n4. Paste the first comment\n5. Tap “Posted”")
    send(esc(section(m["_body"], "Post")))
    fc = section(m["_body"], "First comment")
    if fc:
        send("💬 <b>First comment</b>\n\n" + esc(fc))
    send("Done?", [[{"text": "✅ Posted", "callback_data": f"posted:{pid}"}, {"text": "⏭ Skip this one", "callback_data": f"skip:{pid}"}]])
    set_meta(pid, status="kit_sent")
    print(f"sent kit for {pid}")


def download(file_id, name):
    f = api("getFile", {"file_id": file_id})
    url = f"https://api.telegram.org/file/bot{env('TELEGRAM_BOT_TOKEN')}/{f['file_path']}"
    os.makedirs(INBOX, exist_ok=True)
    dest = os.path.join(INBOX, datetime.now(timezone.utc).strftime("%Y%m%d-%H%M%S-") + re.sub(r"[^\w.\-]", "_", name))
    urllib.request.urlretrieve(url, dest)
    return dest


def cmd_poll():
    s = state()
    updates = api("getUpdates", {"offset": s["offset"], "timeout": 0, "allowed_updates": ["message", "callback_query"]})
    events = []
    for u in updates:
        s["offset"] = u["update_id"] + 1
        if "callback_query" in u:
            q = u["callback_query"]
            act, _, pid = q.get("data", "").partition(":")
            try:
                api("answerCallbackQuery", {"callback_query_id": q["id"]})
            except Exception:
                pass
            try:
                title = find(pid)["title"]
            except SystemExit:
                continue
            if act == "approve":
                set_meta(pid, status="approved"); send(f"✅ Approved: <i>{esc(title)}</i>. You’ll get the post kit on the day.")
            elif act == "back":
                set_meta(pid, status="revising")
                msg = send(f"✏️ What should change in <i>{esc(title)}</i>? Reply to this message.")
                s["awaiting_feedback"][str(msg["message_id"])] = pid
            elif act == "read":
                m = find(pid)
                send(esc(section(m["_body"], "Post")))
                fc = section(m["_body"], "First comment")
                if fc:
                    send("💬 <b>First comment</b>\n\n" + esc(fc))
            elif act == "posted":
                set_meta(pid, status="posted", posted_at=datetime.now(timezone.utc).strftime("%Y-%m-%d"))
                send("🎉 Logged as posted. Forward me your LinkedIn analytics export at the end of the week.")
            elif act == "skip":
                set_meta(pid, status="skipped"); send("⏭ Skipped. The planner will rebalance next Monday.")
            events.append(f"{act}:{pid}")
        elif "message" in u:
            msg = u["message"]
            if str(msg.get("chat", {}).get("id")) != str(env("TELEGRAM_CHAT_ID")):
                continue  # ignore anyone else who finds the bot
            rt = msg.get("reply_to_message", {}).get("message_id")
            if rt and str(rt) in s["awaiting_feedback"]:
                pid = s["awaiting_feedback"].pop(str(rt))
                append_feedback(pid, msg.get("text", ""))
                send("👍 Got it. The revised draft comes back to you within a couple of hours.")
                events.append(f"feedback:{pid}")
            elif "document" in msg:
                d = msg["document"]
                path = download(d["file_id"], d.get("file_name", "upload"))
                send("📊 Thanks, saved. I’ll fold it into your results on the next run.")
                events.append(f"file:{os.path.relpath(path, ROOT)}")
            elif msg.get("text", "").startswith("/plan"):
                up = [m for m in posts() if m.get("status") not in ("posted", "skipped")][:8]
                send("🗓 <b>Coming up</b>\n" + "\n".join(f"{m['date']} · {esc(m['title'])} · <i>{m.get('status')}</i>" for m in up))
            elif msg.get("text"):
                os.makedirs(INBOX, exist_ok=True)
                with open(os.path.join(INBOX, "ideas.md"), "a", encoding="utf-8") as fh:
                    fh.write(f"- {datetime.now(timezone.utc).strftime('%Y-%m-%d')}: {msg['text']}\n")
                send("💡 Saved as an idea for the planner.")
                events.append("idea")
    save_state(s)
    print("events:", ", ".join(events) if events else "none")


if __name__ == "__main__":
    a = sys.argv[1:]
    if not a:
        print(__doc__); sys.exit(0)
    c = a[0]
    if c == "list": cmd_list()
    elif c == "review": cmd_review(a[1])
    elif c == "kit": cmd_kit(a[1])
    elif c == "notify": send(" ".join(a[1:])); print("sent")
    elif c == "poll": cmd_poll()
    elif c == "status": set_meta(a[1], status=a[2]); print("ok")
    else: print(__doc__)

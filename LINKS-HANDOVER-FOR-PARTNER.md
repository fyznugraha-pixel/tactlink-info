# 🤝 Handover — Serve the TactLink Info page at `tactlink.com/links` (Next.js Multi-Zone)

**To:** whoever owns the **`tactlink-info` repo + `tactlink-info.vercel.app` Vercel project**
**From:** Gene (TactLink) · **Date:** 2026-06-30 · **Status:** 🟦 TactLink's proxy side is wired — waiting on your side.

---

## 🎯 TL;DR
We want your Info site to live at **`tactlink.com/links`** while staying **your own app, repo, and Vercel project**. This uses a **Next.js Multi-Zone**: the TactLink landing page (which owns `tactlink.com`) **proxies every `/links/*` request to `tactlink-info.vercel.app`**. Same setup we already run for `tactlink.com/aaf2026` and `tactlink.com/festivalcisadane`.

✅ **Our side (the proxy) is done.** We just need **4 changes on your side** so your app serves correctly under the `/links` sub-path.

---

## 🔧 What you need to do (in the `tactlink-info` repo / Vercel)

### 1. Add `basePath: "/links"` to `next.config.(ts|js)`
```ts
const nextConfig = {
  basePath: "/links",
  // ...existing config
};
```
This namespaces **everything** — `_next/static`, `_next/image`, fonts — under `/links/…`, which our proxy forwards. **Without it the page renders with no CSS/JS** (your assets emit at root `/_next/…`, which collides with our landing app and 404s through the proxy).

Don't bake a literal `/links` into your routes/redirects — with `basePath`, Next prepends it automatically (a literal one would double up to `/links/links`). Your locale routing stays `/en` + `/id` internally; public URLs become `tactlink.com/links/en` and `tactlink.com/links/id`.

### 2. Keep `/en` as the default-locale redirect
Bare `tactlink.com/links` should land on **English**. Your existing root `/` → `/en` redirect does this — with basePath it becomes `tactlink.com/links` → `tactlink.com/links/en`. Just confirm the default is `en`.

### 3. Prefix raw `fetch("/api/…")` / `<a href>` to your APIs with the basePath
Raw `fetch` and `<a>` do **not** auto-apply basePath and will 404 otherwise (`next/link`, `next/image`, `<Image>` already honor it):
```ts
const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
fetch(`${bp}/api/…`)
```
*(Skip if the site has no API calls.)*

### 4. Add a **scoped** 301 from the old URL → the new one
So already-shared `tactlink-info.vercel.app` links / QR codes don't break, redirect old traffic, **path-preserving**:
- `tactlink-info.vercel.app/id` → `https://tactlink.com/links/id`
- `tactlink-info.vercel.app/en` → `https://tactlink.com/links/en`
- `tactlink-info.vercel.app/`   → `https://tactlink.com/links`

> ⛔ **Critical — must be scoped:** redirect only paths that do **NOT** start with `/links` (also skip `/_next`, `/api`). A blanket `/*` → `tactlink.com/links/*` redirect will **infinite-loop**, because our proxy fetches your app at `tactlink-info.vercel.app/links/*` — those must return 200, not redirect back out. Implement via `next.config` `redirects()`, middleware, or `vercel.json` — your call.

---

## ⚙️ Vercel: turn OFF Deployment Protection for Production ⚠️
Project → **Settings → Deployment Protection**. If **Vercel Authentication** is ON for Production, it **blocks our server-side proxy** → `tactlink.com/links` returns **401 / blank**. Set Production public, **or** enable **Protection Bypass for Automation** and share the token with us.

Then **confirm the stable production alias** we should proxy to: `https://tactlink-info.vercel.app` (never a per-deploy `…-hash.vercel.app` URL — it changes every deploy).

---

## ✅ Verify after your redeploy
- [ ] `tactlink-info.vercel.app/links/en` → loads **styled** (assets under `/links/_next/…`, no 404s in DevTools Network).
- [ ] `tactlink-info.vercel.app/id` → **one** 301 hop to `tactlink.com/links/id` (and `…/links/*` itself does **not** redirect — no loop).
- [ ] Bare `tactlink-info.vercel.app/` → 404 is expected (content now lives under `/links`).
- [ ] Ping us — we'll point `LINKS_ZONE_URL` at your alias and confirm `tactlink.com/links` end-to-end.

---

## ℹ️ Already handled on TactLink's side (no action needed)
- **Landing-side proxy** (`/links/*` → `tactlink-info.vercel.app`) and i18n-middleware exclusion — wired on our landing app.
- We proxy to the stable `tactlink-info.vercel.app` alias.

## ⚠️ Quick gotcha recap
1. **Deployment Protection ON** = #1 cause of a blank/401 page. Check first.
2. **No `basePath`** = unstyled page (root assets 404). `basePath` is the complete fix — avoid `assetPrefix` (misses the `/_next/image` optimizer).
3. **Blanket 301 loops** — guard with `not /links`.
4. **`basePath` is build-time** — needs a rebuild, can't be flipped by an env var.

**Questions on the domain/proxy side → Gene (TactLink). Questions on your app code → your team.**

---
📎 Next.js Multi-Zones: https://nextjs.org/docs/app/guides/multi-zones · basePath: https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath
🤖 Generated with [Claude Code](https://claude.com/claude-code)

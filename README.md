# TactLink Social Hub

Premium link-in-bio landing page for TactLink, built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.

## Purpose

This project turns the current short social-media information page into a more premium mini landing page. It keeps the link-in-bio function, but adds stronger brand storytelling, clear CTAs, quick access links, product features, audience segments, and trust indicators.

## Sections

- Hero section
- Quick links / social gateway
- Feature cards
- Trust stats
- Audience chips
- Final CTA
- Footer

## Setup

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Edit content

Most text and URLs are in:

```bash
lib/content.ts
```

Update this file for:

- App Store link
- Google Play link
- Instagram
- LinkedIn
- Contact page
- Feature copy
- Trust stats

## Deploy to Vercel

```bash
git init
git add .
git commit -m "Initial TactLink social hub"
```

Push to GitHub, then import the repository in Vercel.

## Notes

- This starter uses Tailwind CSS v4 setup with `@import "tailwindcss";` in `app/globals.css`.
- No image asset is required yet. The phone/app preview is created with CSS.
- Add official TactLink logo later in `/public` if needed.

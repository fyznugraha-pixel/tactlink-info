# Task: Implement a real Liquid Glass card component (edge-refraction)

## Context
Next.js (App Router) + TypeScript (strict) + Tailwind CSS. I need a
LiquidGlassCard component that reproduces edge-refraction distortion —
an SVG <feDisplacementMap> driven by a displacement map generated on a
<canvas>: neutral gray (128,128,128) in the center, ramping to extreme
values only in a thin band near the border, so the background bends /
mirrors right at the card's edge. Plain backdrop-filter: blur() alone is
NOT acceptable as the primary effect.

Scope: this component is for compact, roughly card-shaped containers —
notification cards, feature cards, modals, pills, buttons. Aspect ratio
between the element's width and height should stay within ~4:1.
Full-width thin bars (navbars, wide toolbars) are explicitly OUT OF SCOPE
for this component — do not try to generalize to them.

## Files to create
1. `lib/liquid-glass/build-displacement-map.ts`
   - Pure function: `buildEdgeDisplacementMap(width: number, height: number, radius: number, edgeInset: number): string`
   - Returns a data URL. No React, no side effects beyond canvas creation.
   - IMPORTANT correctness requirement (this caused a real bug before):
     `edgeInset` must be clamped inside the function to
     `Math.min(edgeInset, Math.min(width, height) * 0.35)` before use —
     never let the neutralizing rounded-rect consume the whole shorter
     dimension. Add a comment explaining why.
   - Steps: horizontal grayscale gradient → R channel (x push), vertical
     grayscale gradient → G channel (y push), merge via
     getImageData/putImageData, then paint a blurred rounded-rect filled
     rgb(128,128,128) over the interior (inset by the clamped value) to
     neutralize everything except the edge band.
   - Unit test this function directly with at least 3 size ratios: a
     near-square card (e.g. 320x320), a wide card (e.g. 560x140), and a
     small pill (e.g. 160x48) — assert the function does not throw and
     that edgeInset gets clamped for the pill case.

2. `hooks/use-liquid-glass-filter.ts`
   - `'use client'`
   - Takes a `RefObject<HTMLElement>`, `radius`, `edgeInset`.
   - On mount AND on every `ResizeObserver` callback (debounced ~100ms),
     read `el.getBoundingClientRect()` for the REAL current width/height
     and regenerate the map from those exact numbers — never reuse a
     previous size, a prop default, or a hardcoded fallback as the
     canvas dimensions. This is the #1 rule: the map's pixel size must
     always match the element's current rendered size 1:1, because
     `preserveAspectRatio="none"` on the <feImage> will silently stretch
     any mismatch into a warped mess.
   - Generate a unique filter id per instance via `useId()`.
   - Feature-detect Chromium SVG-backdrop-filter support once, cache the
     result module-level.
   - Clean up the ResizeObserver on unmount.

3. `components/ui/liquid-glass-card.tsx`
   - `'use client'`
   - Props: `children`, `className?`, `radius?` (default 26), `blurPx?`
     (default 8), `saturation?` (default 160), `distortionScale?`
     (default 90), `edgeInset?` (default 22), `tint?` (default
     "rgba(20,20,26,0.28)").
   - Renders the SVG <filter> (unique id per instance), the glass layers,
     and `children` on top — same 3-layer structure as the reference
     demo (distortion+blur layer, tint layer, specular edge highlight
     layer with an inset top-light/bottom-dark gradient border).
   - When Chromium SVG-backdrop-filter isn't supported, drop the `url(#id)`
     part and keep only blur+saturate — no console warnings.
   - Dynamic values (blur, saturation, filter id) via inline `style`;
     static shape (radius, shadow, border) via Tailwind className.
   - Respect `prefers-reduced-motion` for any transition (not the
     refraction itself).

## Non-functional requirements
- Strict TypeScript, no `any`.
- No new dependencies unless justified in a one-line comment.
- SSR-safe: no `window`/`document` access outside `useEffect`.
- Skip regenerating the map if the observed width/height didn't actually
  change (avoid redundant canvas work on unrelated layout shifts).

## Acceptance check (do this before calling it done)
Render the component at three different sizes in the demo page below and
confirm in each case the distortion stays confined to a thin edge band —
no melting/warping across the whole card, regardless of size:
- a notification-card shape (~500x140)
- a small icon button (~56x56)
- a wide CTA card (~640x120)

## Deliverable
- The three files above.
- `app/(demo)/liquid-glass-card/page.tsx` showing all three sizes from
  the acceptance check side by side.
- Do NOT touch any other existing component or route.

## Explicitly out of scope
- Navbars, toolbars, or any element wider than ~4x its own height.
- Chromatic aberration / specular lighting beyond the edge highlight
  already described.
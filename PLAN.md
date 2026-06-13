# MetalHead Mechanical — Heating & Cooling

Demo marketing website for a local HVAC company based in **Nampa, Idaho**.
Design direction: **dark, bold, industrial** — burnt orange on charcoal, heavy
condensed type, metal-shop attitude.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** (CSS-first `@theme` in `app/globals.css`, with brand tokens
  mirrored in `tailwind.config.ts` via `@config`)
- **next/font** for Google Fonts (Oswald + Inter)
- Deployed on **Vercel**

## Brand & color scheme

| Token            | Hex       | Usage                                   |
| ---------------- | --------- | --------------------------------------- |
| Burnt orange     | `#e05a1a` | Primary — CTAs, accents, highlights     |
| Dark charcoal    | `#3d3d3d` | Page background                         |
| Accent dark      | `#2a2a2a` | Navbar, cards, darker surfaces          |
| Near-white       | `#f5f5f5` | Body text on dark                       |

Tailwind utilities exposed: `bg-brand` / `text-brand`, `bg-charcoal`,
`bg-charcoal-dark`, `bg-background`, `text-foreground`.

## Typography

- **Oswald** — headings. Bold, condensed, industrial. Loaded as
  `--font-oswald`, exposed as the `font-heading` utility; applied to all
  `h1`–`h6` by default (uppercase, bold).
- **Inter** — body text. Loaded as `--font-inter`, exposed as `font-sans` and
  the default `body` font.

## Site structure

```
app/
  layout.tsx      Root layout — fonts, metadata, <Navbar>, <main>
  page.tsx        Home page (placeholder hero for now)
  globals.css     Theme tokens, fonts, base styles
components/
  navbar.tsx      Top navigation
public/
  logo/logo.png   Crossed-hammers brand mark
```

## Components

- **Navbar** — full-width, dark charcoal (`#2a2a2a`) bar. Logo on the left,
  burnt-orange **CALL NOW** button on the right. Clean and minimal.

## Roadmap (not yet built)

These sections are planned but intentionally **not** built yet — foundation only:

- [ ] Hero section
- [ ] Services (heating, cooling, maintenance, installs)
- [ ] About / why choose us
- [ ] Service area (Nampa & Treasure Valley)
- [ ] Testimonials
- [ ] Contact / quote request
- [ ] Footer

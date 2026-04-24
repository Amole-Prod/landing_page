# Printy Landing Page

Landing page untuk **Printy** — platform digitalisasi usaha fotokopi via WhatsApp.

## Tech Stack

| Category | Library |
|----------|---------|
| Framework | SvelteKit 2 + Svelte 5 (runes) |
| Styling | Tailwind CSS v4 + shadcn-svelte |
| Icons | lucide-svelte |
| Animation | Canvas API (native) |
| i18n | paraglide-js |
| Deployment | Vercel Adapter |
| Type Safety | TypeScript |
| Linting | ESLint + Prettier |

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── sections/          # Page sections
│   │   │   ├── Navbar.svelte
│   │   │   ├── GlowyWavesHero.svelte
│   │   │   ├── Features.svelte
│   │   │   ├── Products.svelte
│   │   │   ├── Store.svelte
│   │   │   ├── Pricing.svelte
│   │   │   ├── Partnership.svelte
│   │   │   ├── Contact.svelte
│   │   │   ├── Footer.svelte
│   │   │   └── ...
│   │   └── ui/               # shadcn-svelte components
│   │       ├── button/
│   │       ├── card/
│   │       ├── badge/
│   │       ├── select/
│   │       ├── textarea/
│   │       ├── separator/
│   │       └── glowy-waves-hero/
│   ├── data/                 # Static content (as const)
│   │   ├── nav.ts
│   │   ├── hero.ts
│   │   ├── features.ts
│   │   ├── footer.ts
│   │   ├── contact.ts
│   │   └── ...
│   ├── assets/
│   │   └── favicon.svg
│   └── paraglide/             # i18n messages
├── routes/
│   ├── +page.svelte           # Main landing page
│   ├── +layout.svelte
│   ├── layout.css             # Tailwind + CSS vars
│   ├── faq/+page.svelte
│   ├── news/+page.svelte
│   ├── syarat-ketentuan/+page.svelte
│   └── penghapusan-data/+page.svelte
├── app.html
├── app.d.ts
├── hooks.ts
└── hooks.server.ts
```

## Features

### Sections

1. **Hero** — Canvas wave animation dengan mouse interaction
2. **Features** — 4 fitur utama + 6 solusi (grid cards)
3. **Products** — 4 modul ekosistem Printy
4. **Store** — CTA pendaftaran toko
5. **Pricing** — 3 tier pricing (Lite/Pro/Enterprise)
6. **Partnership** — 4 program kemitraan
7. **Contact** — Canvas wave + contact info
8. **Footer** — Marquee animation + links

### Components

- **GlowyWavesHero**: Canvas wave animation, mouse-reactive, IntersectionObserver for perf, prefers-reduced-motion support
- **Contact**: Same canvas technique as hero
- **Footer**: Marquee text + breathe glow + glass pill buttons

### Data Pattern

```typescript
export const features = [
  { id: 'whatsapp-bot', icon: 'Rocket', title: '...', description: '...' }
] as const;
```

## Commands

```bash
bun run dev          # Dev server
bun run build        # Production build
bun run check        # TypeScript check
bun run lint         # ESLint + Prettier
bun run format       # Format code
bun run preview      # Preview build
```

## Setup

```bash
bun install
bun run dev
```

## Deployment

Vercel adapter configured. Run `bun run build` then deploy.

## CSS Architecture

Tailwind v4 with CSS variables from `layout.css`:

```css
:root {
  --p1: #22223b;  /* Custom palette */
  --p2: #4a4e69;
  --p3: #9a8c98;
  --p4: #c9ada7;
  --p5: #f2e9e4;
  --background: #faf8f6;
  --foreground: #22223b;
  /* ...shadcn vars */
}
```

Dark mode: `class="dark"` on `<html>`.
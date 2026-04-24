## Project Configuration

- **Language**: TypeScript
- **Package Manager**: bun
- **Framework**: SvelteKit 2 + Svelte 5
- **Styling**: Tailwind CSS v4
- **Adapter**: @sveltejs/adapter-vercel
- **i18n**: paraglide-js

---

## Key Commands

```bash
bun run dev          # Development server (port 5173/5174)
bun run build       # Production build
bun run preview     # Preview production build
bun run check       # Type check
bun run format      # Format code
bun run lint        # Lint code
```

---

## Architecture

### Components Location

- UI components: `src/lib/components/ui/`
- Section components: `src/lib/components/sections/`

### Data Layer

Static data in `src/lib/data/*.ts`:

- `nav.ts` - Navigation links & CTA buttons
- `hero.ts` - Hero section content & stats
- `news.ts` - News/changelog items
- `footer.ts` - Footer links & content
- `contact.ts` - Contact info

### Data Pattern

All data files use `as const` for type inference:

```typescript
export const navLinks = [{ name: 'Produk', href: '#products' }] as const;
```

---

## Important Conventions

### Svelte 5 Runes

- Use `$state()`, `$derived()`, `$effect()` for reactivity
- Use `$props()` for component props
- Avoid legacy `$:` reactive statements

### Self-Closing Tags

Svelte 5 requires explicit closing tags for non-void elements:

```svelte
<!-- OK -->
<div></div>

<!-- ERROR -->
<div />
```

### CSS Variables

Project uses custom CSS variables from Tailwind v4:

- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--background`, `--foreground`
- `--muted`, `--border`

### Import Aliases

- `$lib/*` = `src/lib/*`
- Components import from relative paths: `$lib/components/ui/button/button.svelte`

---

## Common Issues

### Build Errors

1. Duplicate identifier → Check const declarations in `.svelte` files
2. Self-closing HTML tags → Use explicit `</>` for non-void elements
3. Import errors → Verify path aliases in `tsconfig.json`

### Type Check

Run `bun run check` before committing to catch TypeScript errors.

---

## Helpful Paths

- Entry: `src/routes/+page.svelte`
- Layout: `src/routes/+layout.svelte`
- Global styles: `src/routes/layout.css`
- Utils: `src/lib/utils.ts`
- Button component: `src/lib/components/ui/button/button.svelte`

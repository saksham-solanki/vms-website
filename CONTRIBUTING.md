# Contributing to VMS Website

## Development Guidelines

### Branch Strategy
- `main` — production-ready code, deploys to visitormanagement.us
- `dev` — development branch for integration testing
- Feature branches: `feature/page-name` or `feature/description`
- Bug fixes: `fix/description`

### PR Process
1. Create a feature branch from `dev`
2. Make your changes
3. Run `npm run build` to ensure no build errors
4. Run `npm run lint` to check code quality
5. Push and create a PR to `dev`
6. Get review from Saksham before merging

### Code Standards

#### TypeScript
- Use TypeScript for all files (`.tsx` for components, `.ts` for utilities)
- Prefer `interface` over `type` for component props
- Export types alongside components when needed

#### Components
- **Server Components by default** — only add `'use client'` when you need interactivity (onClick, useState, useEffect)
- Use named exports: `export function ComponentName()` (not default exports)
- Keep components in the right directory:
  - `src/components/ui/` — reusable primitives (Button, Card, Badge)
  - `src/components/sections/` — homepage and shared page sections
  - `src/components/layout/` — Header, Footer, navigation
  - `src/components/seo/` — JSON-LD schema components

#### Styling
- **Tailwind CSS v4** — uses `@theme inline` in `globals.css`
- NO `tailwind.config.js` — all theme tokens are in `src/app/globals.css`
- Use design tokens: `text-primary-700`, `bg-accent-500`, `text-neutral-900`, etc.
- Use the `font-heading` class for headings (Plus Jakarta Sans)
- Body text uses DM Sans by default

#### Pages (App Router)
- Each route is a folder in `src/app/` with a `page.tsx` file
- Export `metadata` from every page for SEO:
  ```tsx
  export const metadata: Metadata = {
    title: "Page Title | VMS",
    description: "Meta description for SEO (150-160 chars)",
    openGraph: { ... },
  };
  ```
- Use JSON-LD schema components from `src/components/seo/JsonLd.tsx`
- Use Section components for consistent page layout

### File Naming
- Components: PascalCase (`HeroSection.tsx`, `Button.tsx`)
- Pages: `page.tsx` inside route folder
- Utilities: camelCase (`formatDate.ts`)
- Content: kebab-case (`queue-management-for-banks.md`)

### SEO Checklist (Every New Page)
- [ ] `metadata` export with title, description, openGraph
- [ ] Breadcrumb schema
- [ ] Relevant JSON-LD schema (FAQ, Article, Product, etc.)
- [ ] Internal links to related pages
- [ ] Proper heading hierarchy (one H1, structured H2s/H3s)
- [ ] Alt text on all images

### Commit Messages
Use conventional commits:
```
feat: add healthcare industry page
fix: correct pricing comparison table alignment
content: add queue management blog posts
style: update hero section spacing
chore: update dependencies
```

### Questions?
Reach out to Saksham Solanki (project owner) for any questions about strategy, positioning, or priorities.

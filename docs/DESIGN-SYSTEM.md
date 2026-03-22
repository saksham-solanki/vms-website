# Design System

> Visual language and component specifications for visitormanagement.us.

---

## Colors

### Primary: Deep Teal
The primary brand color. Used for CTAs, links, active states, and key UI elements.

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` | `#F0FDFA` | Light backgrounds, hover states |
| `primary-100` | `#CCFBF1` | Card backgrounds, subtle highlights |
| `primary-200` | `#99F6E4` | Borders, dividers |
| `primary-300` | `#5EEAD4` | — |
| `primary-400` | `#2DD4BF` | — |
| `primary-500` | `#14AEA8` | Medium emphasis |
| `primary-600` | `#0F9690` | — |
| `primary-700` | `#0E7C7B` | **Primary brand color** — CTAs, headings, links |
| `primary-800` | `#085C5A` | Dark UI elements, header/dashboard |
| `primary-900` | `#063B3A` | Very dark, minimal usage |
| `primary-950` | `#042F2E` | Darkest |

### Accent: Amber Gold
Used for highlights, badges, featured pricing, and attention-drawing elements.

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-500` | `#F59E0B` | **Main accent** — badges, pricing highlight |
| `accent-100` | `#FEF3C7` | Light accent backgrounds |
| `accent-600` | `#D97706` | Accent hover states |

### Neutral: Warm Slate
Text and background colors.

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-50` | `#F8FAFC` | Page background |
| `neutral-100` | `#F1F5F9` | Section backgrounds ("light" sections) |
| `neutral-200` | `#E2E8F0` | Borders, dividers |
| `neutral-400` | `#94A3B8` | Muted text, timestamps, subtitles |
| `neutral-500` | `#64748B` | Body text |
| `neutral-700` | `#334155` | Emphasized body text |
| `neutral-900` | `#131C2E` | Headings, strong text |

### Semantic Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#059669` | Checkmarks, positive states, "Checked In" |
| `error` | `#DC2626` | Error states, alerts |
| `warning` | `#D97706` | Warning states |
| `info` | `#0284C7` | Informational states |

---

## Typography

### Fonts
| Font | CSS Variable | Class | Usage |
|------|-------------|-------|-------|
| **Plus Jakarta Sans** | `--font-plus-jakarta` | `font-heading` | Headings, display text, stats |
| **DM Sans** | `--font-dm-sans` | `font-body` | Body text (default on `<body>`) |

### Scale
| Element | Size | Weight | Class |
|---------|------|--------|-------|
| H1 | `text-4xl sm:text-5xl lg:text-[56px]` | 800 (extrabold) | `font-extrabold font-heading` |
| H2 (Section Title) | `text-3xl sm:text-4xl` | 700 (bold) | `font-bold font-heading` |
| H3 | `text-lg` or `text-xl` | 700 | `font-bold font-heading` |
| Body | `text-base` (16px) | 400 | Default |
| Small/Caption | `text-sm` (14px) | 400–500 | — |
| Tiny | `text-xs` (12px) | 400–500 | Timestamps, labels |

---

## Components

### Button
Location: `src/components/ui/Button.tsx`

| Variant | Usage | Appearance |
|---------|-------|-----------|
| `primary` | Main CTAs (Book Demo, Start Trial) | Teal background, white text |
| `secondary` | Secondary actions (Contact Sales) | Neutral background |
| `outline` | Tertiary actions | Border only, transparent bg |

Sizes: `sm`, `md`, `lg`

### Badge
Location: `src/components/ui/Badge.tsx`

| Variant | Usage |
|---------|-------|
| `primary` | Trust badges, feature highlights |
| `accent` | "Most Popular", pricing badges |
| `neutral` | Generic labels |

### Card
Location: `src/components/ui/Card.tsx`

Flexible container with `rounded-2xl border bg-white` base styling.

### Section
Location: `src/components/ui/Section.tsx`

Page section wrapper with consistent spacing.

| Prop | Values | Default |
|------|--------|---------|
| `background` | `white`, `light`, `dark` | `white` |

Includes `SectionLabel`, `SectionTitle`, `SectionDescription` sub-components.

---

## Spacing

| Size | Tailwind | Usage |
|------|----------|-------|
| Section padding | `py-16 md:py-24` | Between major sections |
| Container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` | Page content width |
| Card padding | `p-6 lg:p-8` | Inside cards |
| Element gap | `gap-3` to `gap-8` | Between elements |
| Stack gap | `space-y-3` to `space-y-6` | Vertical stacking |

---

## Layout Patterns

### Homepage Sections (in order)
1. Hero — split layout (copy left, product visual right)
2. Logo Bar — trusted-by logos
3. Problem/Solution — pain points → VMS solution
4. How It Works — 3-step process
5. Product Modules — 6 module cards
6. Social Proof — testimonials/stats
7. Industries — industry grid
8. Pricing Preview — plan cards
9. Security — trust signals
10. Integrations — integration logos
11. Blog Feed — latest posts
12. Final CTA — bottom conversion section

### Product Page Pattern
1. Hero with product-specific headline
2. Problem/pain points
3. Feature breakdown (with visuals)
4. How it works
5. Use cases / scenarios
6. Pricing CTA
7. FAQ section
8. Final CTA

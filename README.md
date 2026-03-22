# VMS - Visitor Management System

> **visitormanagement.us** — The visitor management system that does more, for less.

Enterprise-grade visitor management + workplace operations platform. Digital check-in, badge printing, host notifications, queue management, and compliance-ready records. 6 modules, one platform. Starting at $36/month.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Master Plan](#master-plan)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Design System](#design-system)
- [SEO & Content Strategy](#seo--content-strategy)
- [Deployment](#deployment)
- [Documentation](#documentation)

---

## Project Overview

### What is VMS?

VMS (visitormanagement.us) is the **USA-market website** for Vizitor's visitor management platform. This is a separate brand targeting the US/global market with:

- **Domain:** visitormanagement.us
- **Pricing:** USD-based ($36/mo Professional, Free tier available)
- **Positioning:** "The Visitor Management System That Does More — For Less"
- **Target:** Mid-sized organizations (200–10,000 employees)
- **Key differentiator:** Full 6-module suite at 1/3 the price of Envoy

### The Product: 6 Modules

| Module | Route | Description |
|--------|-------|-------------|
| **Visitor Management** | `/visitor-management-system/` | Digital check-in, badge printing, host notifications, visitor pre-registration |
| **Queue Management** | `/queue-management-system/` | Token system, department routing, real-time notifications, wait tracking |
| **Attendance Management** | `/attendance-management/` | QR + GPS check-in, hybrid work support, audit-ready records |
| **Delivery Management** | `/delivery-management/` | Package tracking, proof-of-handoff, automated notifications |
| **Meeting Room Booking** | `/meeting-room-booking/` | Real-time availability, calendar sync, usage analytics |
| **Desk Booking** | `/desk-booking/` | Hot desking, real-time availability, space utilization |

### Competitive Landscape

| Competitor | Price | Our Advantage |
|-----------|-------|--------------|
| Envoy | $109–329/mo per location | We're 1/3 the price with queue management they don't have |
| SwipedOn | $55–169/mo | We include more modules at lower price |
| iLobby | $199/mo | Full suite vs. limited modules |
| Greetly | $99/mo | More features, lower price |

---

## Master Plan

### Phase 1: Website Foundation (Current)
- [x] Next.js 16 project setup with Tailwind CSS v4
- [x] Homepage with full conversion architecture (12 sections)
- [x] Pricing page with competitor comparison
- [x] Demo request page
- [ ] Complete all module pages (6 product pages)
- [ ] Industry pages (6: manufacturing, healthcare, education, corporate, government, banking)
- [ ] Comparison pages (vs Envoy, vs SwipedOn, vs Greetly, vs Sign In App)
- [ ] About, Contact, Privacy, Terms pages
- [ ] Trust Center / Security page

### Phase 2: Content Engine
- [ ] Blog system with MDX support
- [ ] 265 blog posts across 8 pillar clusters (see `docs/CONTENT-PLAN.md`)
- [ ] Lead magnet / template pages
- [ ] Case studies with real metrics

### Phase 3: SEO & Conversion
- [ ] Full schema markup (Organization, Product, FAQ, Article, Breadcrumb, HowTo)
- [ ] Programmatic SEO pages (industry × module combinations)
- [ ] ROI calculator (interactive tool)
- [ ] A/B testing infrastructure

### Phase 4: Launch & Growth
- [ ] Vercel deployment with custom domain
- [ ] Google Search Console + Analytics setup
- [ ] Blog content publishing pipeline
- [ ] Performance optimization (Core Web Vitals)

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 16.2.1 | React framework (App Router) |
| **React** | 19.2.4 | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Utility-first CSS (with `@theme` inline config) |
| **PostCSS** | — | CSS processing |
| **ESLint** | 9.x | Code linting |

### Key Decisions
- **App Router** (not Pages Router) — all routes use `/app/` directory
- **Server Components by default** — only add `'use client'` when needed
- **Tailwind v4** — uses `@theme inline` in `globals.css` (NOT `tailwind.config.js`)
- **No CMS yet** — blog content will be MDX files in `/src/content/blog/`
- **Fonts:** Plus Jakarta Sans (headings) + DM Sans (body)

---

## Getting Started

### Prerequisites
- Node.js 18+ (recommended: 20+)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repo
git clone https://github.com/saksham-solanki/vms-website.git
cd vms-website

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Available Scripts

```bash
npm run dev      # Start development server (hot reload)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Project Structure

```
vms-website/
├── public/                     # Static assets
│   ├── icons/                  # Favicon, app icons
│   └── images/                 # Product screenshots, logos
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout (fonts, header, footer)
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Tailwind theme + global styles
│   │   ├── pricing/            # Pricing page
│   │   ├── demo/               # Demo request page
│   │   ├── free-trial/         # Free trial signup
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── blog/               # Blog listing + posts
│   │   ├── industries/         # Industry-specific pages
│   │   │   ├── manufacturing/
│   │   │   ├── healthcare/
│   │   │   ├── education/
│   │   │   ├── corporate-offices/
│   │   │   ├── government/
│   │   │   └── banking/
│   │   ├── compare/            # Competitor comparisons
│   │   │   ├── vs-envoy/
│   │   │   ├── vs-swipedon/
│   │   │   ├── vs-greetly/
│   │   │   ├── cheapest/
│   │   │   └── envoy-alternative/
│   │   ├── queue-management/   # Module pages
│   │   ├── attendance-management/
│   │   ├── delivery-management/
│   │   ├── desk-booking/
│   │   ├── meeting-room-booking/
│   │   ├── trust-center/       # Security & compliance
│   │   ├── privacy/            # Privacy policy
│   │   └── terms/              # Terms of service
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── sections/           # Homepage sections (Hero, PricingPreview, etc.)
│   │   ├── seo/                # JSON-LD schema components
│   │   └── ui/                 # Reusable UI primitives (Button, Card, Badge, Section)
│   ├── content/
│   │   └── blog/               # MDX blog posts (to be added)
│   └── lib/                    # Utility functions
├── docs/                       # Project documentation
│   ├── MASTER-STRATEGY.md      # Full strategy playbook
│   ├── SITEMAP-ARCHITECTURE.md # URL structure & SEO architecture
│   ├── CONTENT-PLAN.md         # 265-post content calendar
│   ├── SEO-PLAN.md             # Technical SEO checklist
│   └── DESIGN-SYSTEM.md        # Colors, typography, components
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
└── CONTRIBUTING.md             # Development guidelines
```

---

## Pages & Routes

### Currently Built
| Route | Status | Description |
|-------|--------|-------------|
| `/` | Done | Homepage — 12-section conversion architecture |
| `/pricing` | Done | 3-tier pricing + competitor comparison + FAQ |
| `/demo` | Done | Demo request form |
| `/compare/vs-envoy` | Scaffold | Competitor comparison |
| `/compare/vs-swipedon` | Scaffold | Competitor comparison |
| `/compare/vs-greetly` | Scaffold | Competitor comparison |
| `/compare/cheapest` | Scaffold | Price comparison page |
| `/compare/envoy-alternative` | Scaffold | Alternative page |
| `/industries/manufacturing` | Scaffold | Industry page |
| `/industries/healthcare` | Scaffold | Industry page |
| `/industries/education` | Scaffold | Industry page |
| `/industries/corporate-offices` | Scaffold | Industry page |
| `/industries/government` | Scaffold | Industry page |
| `/industries/banking` | Scaffold | Industry page |

### To Be Built
| Route | Priority | Description |
|-------|----------|-------------|
| `/visitor-management-system` | P1 | Core product page — consolidate all VMS keywords |
| `/queue-management-system` | P1 | Queue management module page |
| `/attendance-management` | P2 | Attendance module page |
| `/delivery-management` | P2 | Delivery module page |
| `/meeting-room-booking` | P2 | Meeting room module page |
| `/desk-booking` | P2 | Desk booking module page |
| `/trust-center` | P1 | Security, compliance, certifications |
| `/about` | P2 | Company story, team, E-E-A-T signals |
| `/contact` | P2 | Contact form |
| `/blog` | P2 | Blog listing with pagination |
| `/blog/[slug]` | P2 | Individual blog posts (MDX) |
| `/free-trial` | P2 | Free trial signup flow |
| `/integrations` | P3 | Integration directory |
| `/roi-calculator` | P3 | Interactive ROI calculator |
| `/templates` | P3 | Lead magnet / template hub |
| `/case-studies` | P3 | Customer success stories |

---

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-700` | `#0E7C7B` | Primary brand (Deep Teal) — CTAs, headings, links |
| `primary-800` | `#085C5A` | Dark primary — header, dashboard elements |
| `accent-500` | `#F59E0B` | Accent (Amber Gold) — highlights, badges, pricing |
| `neutral-900` | `#131C2E` | Dark text |
| `neutral-500` | `#64748B` | Body text |
| `neutral-50` | `#F8FAFC` | Page background |
| `success` | `#059669` | Success states, checkmarks |
| `error` | `#DC2626` | Error states |

### Typography

| Element | Font | Weight | Usage |
|---------|------|--------|-------|
| Headings | Plus Jakarta Sans | 600–800 | `font-heading` class |
| Body | DM Sans | 400–600 | `font-body` class (default) |

### Component Library

All reusable components are in `src/components/ui/`:
- **Button** — `variant`: primary, secondary, outline | `size`: sm, md, lg
- **Badge** — `variant`: primary, accent, neutral
- **Card** — Flexible card container
- **Section** — Page section wrapper with `background`: white, light, dark

---

## SEO & Content Strategy

### Core SEO Architecture
- **Schema markup:** Organization, Website, SoftwareApplication, FAQ, Breadcrumb, Article
- **Sitemap:** Auto-generated by Next.js
- **Canonical tags:** Self-referencing on all pages
- **Open Graph + Twitter Cards:** On all pages via `metadata` exports

### Content Plan (265 Blog Posts)
Organized in 8 pillar clusters:

| Cluster | Posts | Priority |
|---------|-------|----------|
| Queue Management | 30 | P1 (First) |
| Visitor Management Core | 37 | P2 |
| Workplace Flow Control | 30 | P3 |
| Compliance & Audit | 20 | P4 |
| Attendance & Workforce | 25 | P5 |
| Delivery & Mailroom | 20 | P6 |
| Meeting Room & Desk Booking | 25 | P7 |
| Security & Guard Ops | 34 | P8 |

Full details in `docs/CONTENT-PLAN.md`.

### Target Keywords (Tier 1)
| Keyword | Monthly Volume | Status |
|---------|---------------|--------|
| visitor management system | 2,400–3,600 | Target — consolidate to 1 page |
| queue management system | 2,000–4,000 | Target — strengthen |
| workplace management software | 800–1,500 | NEW — low competition opportunity |
| attendance management system | 3,000–5,000 | Target — strengthen |
| desk booking system | 1,500–2,500 | Target — strengthen |
| meeting room booking system | 1,500–2,500 | Target — strengthen |
| delivery management system | 2,000–4,000 | Target — strengthen |

---

## Deployment

### Recommended: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables
```bash
# .env.local (create this file — NOT committed to git)
NEXT_PUBLIC_SITE_URL=https://visitormanagement.us
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Custom Domain
The site will be deployed at **visitormanagement.us** via Vercel with:
- Automatic HTTPS
- Edge network CDN
- Automatic preview deployments for PRs

---

## Documentation

Detailed documentation lives in the `docs/` folder:

| Document | Description |
|----------|-------------|
| [MASTER-STRATEGY.md](docs/MASTER-STRATEGY.md) | Full strategic playbook — positioning, competitive analysis, market data |
| [SITEMAP-ARCHITECTURE.md](docs/SITEMAP-ARCHITECTURE.md) | Complete URL structure, keyword-to-page mapping, page priorities |
| [CONTENT-PLAN.md](docs/CONTENT-PLAN.md) | 265-post blog content calendar with pillar clusters |
| [SEO-PLAN.md](docs/SEO-PLAN.md) | Technical SEO checklist, schema markup plan, keyword tiers |
| [DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) | Colors, typography, component specs, spacing system |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Development guidelines, PR process, code standards |

---

## License

Proprietary. All rights reserved.

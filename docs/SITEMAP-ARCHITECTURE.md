# Sitemap & URL Architecture

> Complete URL structure for visitormanagement.us with keyword-to-page mapping.

---

## Full Sitemap

```
visitormanagement.us/
│
├── CORE (Convert)
│   ├── /                           Homepage
│   ├── /pricing/                   Pricing + competitor comparison
│   ├── /demo/                      Request demo form
│   ├── /free-trial/                Free trial signup
│   └── /contact/                   Contact form
│
├── MODULES (Money Pages)
│   ├── /visitor-management-system/  Core VMS product page
│   ├── /queue-management/           Queue management module
│   ├── /attendance-management/      Attendance tracking module
│   ├── /delivery-management/        Delivery & package tracking
│   ├── /meeting-room-booking/       Meeting room scheduling
│   └── /desk-booking/               Desk reservation system
│
├── INDUSTRIES (SEO + Relevance)
│   ├── /industries/manufacturing/
│   ├── /industries/healthcare/
│   ├── /industries/education/
│   ├── /industries/corporate-offices/
│   ├── /industries/government/
│   └── /industries/banking/
│
├── COMPARISONS (Competitor Capture)
│   ├── /compare/vs-envoy/
│   ├── /compare/vs-swipedon/
│   ├── /compare/vs-greetly/
│   ├── /compare/cheapest/
│   └── /compare/envoy-alternative/
│
├── TRUST (De-risk)
│   ├── /trust-center/               Security & compliance
│   ├── /privacy/                    Privacy policy
│   └── /terms/                      Terms of service
│
├── CONTENT (Inbound Engine)
│   ├── /blog/                       Blog listing
│   ├── /blog/[slug]/                Individual blog posts
│   └── (future) /templates/         Lead magnets
│   └── (future) /case-studies/      Customer stories
│   └── (future) /roi-calculator/    Interactive tool
│
└── COMPANY
    └── /about/                      Company story + team
```

---

## Keyword-to-Page Mapping (No Cannibalization)

Each keyword targets exactly ONE page:

### Homepage `/`
- **Primary:** "visitor management system" (brand awareness)
- **Secondary:** "workplace management platform", "digital check-in system"
- **DO NOT TARGET:** module-specific keywords (those have their own pages)

### Module Pages
| Page | Primary Keyword | Secondary Keywords |
|------|----------------|-------------------|
| `/visitor-management-system/` | visitor management system | visitor management software, digital visitor management |
| `/queue-management/` | queue management system | queue management software, digital queue management |
| `/attendance-management/` | attendance management system | employee attendance software, QR attendance |
| `/delivery-management/` | delivery management system | office delivery tracking, package management |
| `/meeting-room-booking/` | meeting room booking system | conference room scheduling, room management |
| `/desk-booking/` | desk booking system | hot desking software, desk reservation |

### Industry Pages
| Page | Primary Keyword |
|------|----------------|
| `/industries/manufacturing/` | visitor management system for manufacturing |
| `/industries/healthcare/` | visitor management system for hospitals |
| `/industries/education/` | visitor management system for schools |
| `/industries/corporate-offices/` | corporate workplace management |
| `/industries/government/` | visitor management for government |
| `/industries/banking/` | visitor management for banks |

### Comparison Pages
| Page | Primary Keyword |
|------|----------------|
| `/compare/vs-envoy/` | Vizitor vs Envoy, VMS vs Envoy |
| `/compare/vs-swipedon/` | Vizitor vs SwipedOn |
| `/compare/vs-greetly/` | Vizitor vs Greetly |
| `/compare/cheapest/` | cheapest visitor management system |
| `/compare/envoy-alternative/` | Envoy alternative |

### Other Pages
| Page | Primary Keyword |
|------|----------------|
| `/pricing/` | visitor management system pricing |
| `/trust-center/` | visitor management security |
| `/about/` | About VMS |
| `/blog/` | visitor management blog |

---

## URL Rules

1. **Trailing slashes:** YES — all URLs end with `/`
2. **Lowercase only:** All URLs are lowercase with hyphens
3. **No file extensions:** No `.html` or `.php`
4. **Canonical tags:** Self-referencing on every page
5. **HTTPS only:** Force HTTPS, redirect HTTP → HTTPS
6. **Blog slugs:** `/blog/[keyword-rich-slug]/`
7. **Industry pattern:** `/industries/[industry-name]/`
8. **Comparison pattern:** `/compare/[comparison-type]/`

---

## Internal Linking Strategy

### Every module page links to:
- Homepage
- Pricing
- 2–3 related industry pages
- 2–3 related blog posts
- Demo / Free trial CTA

### Every industry page links to:
- All relevant module pages
- 2–3 related blog posts
- Pricing
- Demo / Free trial CTA

### Every blog post links to:
- Its pillar page
- 1 adjacent cluster post
- 1 module (money) page
- Demo or Free trial CTA

### Every comparison page links to:
- Pricing (our advantage)
- Relevant module pages
- Demo CTA

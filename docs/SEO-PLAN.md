# SEO Plan

> Technical SEO checklist and keyword strategy for visitormanagement.us.

---

## 1. Technical SEO (Built Into the New Site)

### Implemented
- [x] Self-referencing canonical tags on all pages
- [x] Open Graph + Twitter Card meta tags via Next.js `metadata`
- [x] JSON-LD schema: Organization, Website, SoftwareApplication
- [x] FAQ schema on pricing page
- [x] Breadcrumb schema on pricing page
- [x] Semantic HTML (proper heading hierarchy)
- [x] Mobile-responsive design (Tailwind)
- [x] HTTPS (Vercel default)

### To Implement
- [ ] JSON-LD Article schema on all blog posts
- [ ] JSON-LD FAQ schema on all product pages with FAQs
- [ ] JSON-LD Breadcrumb schema on ALL pages
- [ ] JSON-LD HowTo schema on workflow/setup pages
- [ ] JSON-LD Product schema with pricing on pricing page
- [ ] Sitemap split: pages, blog, industries, comparisons
- [ ] robots.txt configured for new domain
- [ ] Image optimization: WebP format, lazy loading, <100KB per image
- [ ] Alt text on ALL images (keyword-relevant)
- [ ] Core Web Vitals optimization (LCP < 2.5s, FID < 100ms, CLS < 0.1)

---

## 2. On-Page SEO Checklist (Every Page)

```
[ ] Page title: Unique, <60 chars, primary keyword near front
[ ] Meta description: Unique, 150-160 chars, includes CTA
[ ] H1: Exactly one, matches search intent
[ ] H2s/H3s: Structured, keyword-rich subheadings
[ ] Internal links: 3-5 contextual links to related pages
[ ] External links: 1-2 authoritative sources (optional)
[ ] Images: WebP, descriptive alt text, lazy loaded
[ ] Schema markup: Relevant JSON-LD for page type
[ ] Canonical: Self-referencing
[ ] Open Graph: title, description, image, url
```

---

## 3. Keyword Tiers

### Tier 1: Category-Defining (Own These)
| Keyword | Global Volume | Competition | Target Page |
|---------|-------------|-------------|-------------|
| visitor management system | 2,400–3,600 | HIGH | `/visitor-management-system/` |
| queue management system | 2,000–4,000 | MED-HIGH | `/queue-management/` |
| attendance management system | 3,000–5,000 | HIGH | `/attendance-management/` |
| desk booking system | 1,500–2,500 | MED-HIGH | `/desk-booking/` |
| meeting room booking system | 1,500–2,500 | MED-HIGH | `/meeting-room-booking/` |
| delivery management system | 2,000–4,000 | MEDIUM | `/delivery-management/` |

### Tier 2: Low-Competition Opportunities
| Keyword | Volume | Competition | Target Page |
|---------|--------|-------------|-------------|
| workplace management software | 800–1,500 | LOW-MED | Homepage / future cornerstone |
| mailroom management software | 300–800 | LOW | `/delivery-management/` |
| cheapest visitor management system | 100–500 | LOW | `/compare/cheapest/` |

### Tier 3: Long-Tail / High-Intent
| Keyword | Target |
|---------|--------|
| visitor management system for hospitals | `/industries/healthcare/` |
| visitor management system for manufacturing | `/industries/manufacturing/` |
| queue management system for banks | Blog post |
| Envoy alternative | `/compare/envoy-alternative/` |
| VMS vs Envoy | `/compare/vs-envoy/` |
| reduce reception wait time | Blog post |
| audit-ready visitor logs | Blog post |

### Tier 4: Comparison Keywords
| Keyword | Target |
|---------|--------|
| VMS vs Envoy | `/compare/vs-envoy/` |
| VMS vs SwipedOn | `/compare/vs-swipedon/` |
| VMS vs Greetly | `/compare/vs-greetly/` |
| Envoy alternatives | `/compare/envoy-alternative/` |

---

## 4. Schema Markup Plan

### Every Page
- `BreadcrumbList` — navigation path
- `WebPage` — basic page info

### Homepage
- `Organization` — company info, logo, social links
- `WebSite` — site search, name
- `SoftwareApplication` — product details, pricing

### Product/Module Pages
- `SoftwareApplication` — module-specific features
- `FAQPage` — page-specific FAQs
- `BreadcrumbList`

### Blog Posts
- `Article` or `BlogPosting` — author, date, headline
- `BreadcrumbList`
- `FAQPage` (if post has FAQ section)

### Pricing Page
- `Product` with `Offer` — pricing tiers
- `FAQPage` — pricing FAQs
- `BreadcrumbList`

### Industry Pages
- `WebPage` with industry-specific content
- `BreadcrumbList`
- `FAQPage` (if applicable)

---

## 5. AI Search Optimization

To get cited in ChatGPT, Claude, and Google AI Overviews:

1. **Q&A format:** Use clear questions as H2s with concise 2-3 sentence answers
2. **Data-rich content:** Include statistics, comparisons, pricing tables
3. **Structured data:** Comprehensive schema markup
4. **Authoritative sources:** Link to industry reports, cite data
5. **Regular updates:** Keep content fresh with dates and latest info
6. **Direct definitions:** "A visitor management system is..." format

---

## 6. Google Search Console Setup

After deployment:
1. Verify domain ownership in GSC
2. Submit sitemap: `https://visitormanagement.us/sitemap.xml`
3. Monitor:
   - Index coverage (target: all pages indexed within 30 days)
   - Core Web Vitals (all green)
   - Search performance (impressions, clicks, CTR, position)
   - Mobile usability (no errors)

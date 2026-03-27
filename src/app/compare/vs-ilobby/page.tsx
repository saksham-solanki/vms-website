import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd";
import { Check, X, ArrowRight, DollarSign, Layers, Shield, Building2, Zap, Lock } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "VMS vs iLobby (2026) | Feature & Pricing Comparison",
  description:
    "Compare VMS and iLobby side by side. VMS starts at $36/mo with 6 modules vs iLobby at ~$199/mo. Enterprise features without the enterprise price tag.",
  openGraph: {
    title: "VMS vs iLobby - Full Comparison 2026",
    description:
      "VMS delivers enterprise visitor management at 82% lower cost than iLobby. Compare features, pricing, and security.",
  },
};

const featureComparison = [
  { feature: "Starting Price", vms: "$36/mo", competitor: "~$199/mo", vmsWins: true },
  { feature: "Unlimited Check-ins", vms: true, competitor: true, vmsWins: false },
  { feature: "Badge Printing", vms: true, competitor: true, vmsWins: false },
  { feature: "Visitor Pre-registration", vms: true, competitor: true, vmsWins: false },
  { feature: "Host Notifications", vms: true, competitor: true, vmsWins: false },
  { feature: "Watchlist Screening", vms: "Enterprise plan", competitor: true, vmsWins: false },
  { feature: "Custom Branding", vms: true, competitor: true, vmsWins: false },
  { feature: "Queue Management Module", vms: true, competitor: false, vmsWins: true },
  { feature: "Desk Booking Module", vms: true, competitor: false, vmsWins: true },
  { feature: "Meeting Room Booking", vms: true, competitor: false, vmsWins: true },
  { feature: "Delivery Management", vms: true, competitor: false, vmsWins: true },
  { feature: "Attendance Management", vms: true, competitor: false, vmsWins: true },
  { feature: "Touchless QR Check-in", vms: true, competitor: true, vmsWins: false },
  { feature: "NDA / Document Signing", vms: true, competitor: true, vmsWins: false },
  { feature: "Compliance Reports", vms: true, competitor: true, vmsWins: false },
  { feature: "SSO (SAML, Okta)", vms: "Enterprise plan", competitor: true, vmsWins: false },
  { feature: "Free Plan Available", vms: true, competitor: false, vmsWins: true },
  { feature: "Transparent Pricing", vms: true, competitor: "Contact sales only", vmsWins: true },
  { feature: "Number of Modules", vms: "6 included", competitor: "1 (visitor only)", vmsWins: true },
];

const faqs = [
  {
    question: "Is VMS secure enough to replace iLobby?",
    answer:
      "Yes. VMS uses AES-256 encryption, SOC 2 compliant infrastructure, GDPR-ready data handling, and 99.9% uptime SLA. Enterprise plans include SSO (SAML, Okta, Azure AD), on-premise deployment, and custom security policies. Both platforms meet enterprise security requirements.",
  },
  {
    question: "iLobby has watchlist screening. Does VMS?",
    answer:
      "VMS Enterprise plan includes visitor watchlist screening and flagging. For most businesses, the standard compliance features (ID capture, NDA signing, photo verification) on the Professional plan are sufficient. If you need advanced screening, our Enterprise plan has you covered.",
  },
  {
    question: "We have strict compliance needs. Can VMS handle that?",
    answer:
      "Absolutely. VMS supports custom check-in workflows with required fields, document signing, photo capture, and evacuation list generation. All visitor data is encrypted, audit-logged, and exportable for compliance reporting. We serve healthcare, manufacturing, and government facilities.",
  },
  {
    question: "How does VMS pricing compare for large deployments?",
    answer:
      "For large deployments (10+ locations), VMS Enterprise offers custom pricing that is significantly lower than iLobby. A typical 20-location deployment with VMS costs a fraction of what iLobby charges, with more modules included. Contact our sales team for a custom quote.",
  },
  {
    question: "Does iLobby offer modules that VMS does not?",
    answer:
      "iLobby focuses exclusively on visitor and facility management with deep enterprise features like advanced watchlist integrations. VMS matches the core visitor management feature set and adds 5 more workplace modules. The trade-off is that iLobby may have deeper niche compliance features for highly regulated industries, while VMS offers broader workplace coverage.",
  },
  {
    question: "Can we run a pilot with VMS before committing?",
    answer:
      "Yes. VMS offers a free plan (1 location, 50 check-ins/month) and a full-featured free trial of the Professional plan. You can test everything risk-free before making a decision. No credit card, no contract required.",
  },
];

const costComparison = [
  { locations: 1, vms: "$36", ilobby: "~$199", annual: "$1,956" },
  { locations: 5, vms: "$180", ilobby: "~$995", annual: "$9,780" },
  { locations: 10, vms: "$360", ilobby: "~$1,990", annual: "$19,560" },
  { locations: 20, vms: "Custom", ilobby: "~$3,980", annual: "40,000+" },
];

const enterpriseFeatures = [
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    description: "AES-256 encryption, SOC 2 compliance, and optional on-premise deployment for maximum control.",
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "Custom check-in workflows, NDA signing, visitor watchlists, and full audit trails for regulated industries.",
  },
  {
    icon: Building2,
    title: "Multi-Site Management",
    description: "Centralized dashboard for all locations with site-specific branding, workflows, and admin permissions.",
  },
  {
    icon: Layers,
    title: "6 Modules, One Platform",
    description: "Visitor management, desk booking, meeting rooms, queue management, delivery, and attendance - all integrated.",
  },
  {
    icon: Zap,
    title: "99.9% Uptime SLA",
    description: "Enterprise infrastructure with automated failover, real-time monitoring, and guaranteed availability.",
  },
  {
    icon: DollarSign,
    title: "82% Lower Starting Cost",
    description: "VMS Professional starts at $36/mo per location. iLobby starts around $199/mo. The math speaks for itself.",
  },
];

function renderCellValue(value: boolean | string) {
  if (value === true) {
    return <Check className="w-5 h-5 text-cyan-500 mx-auto" />;
  }
  if (value === false) {
    return <X className="w-5 h-5 text-red-400 mx-auto" />;
  }
  return <span className="text-sm text-slate-600">{value}</span>;
}

export default function VmsVsILobbyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "VMS vs iLobby", href: "/compare/vs-ilobby" },
        ]}
      />
      <FAQSchema questions={faqs} />

      {/* Hero */}
      <Section background="gradient" spacing="lg">
        <div className="text-center max-w-4xl mx-auto">
          <AnimateIn>
            <Badge variant="primary" className="mb-4">2026 Comparison</Badge>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              VMS vs iLobby
            </h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              iLobby is built for enterprises with big budgets. VMS delivers
              enterprise-grade features and 5 extra modules at 82% lower cost.
            </p>
          </AnimateIn>
          <AnimateIn delay={300}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/free-trial" icon={<ArrowRight className="w-5 h-5" />}>
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" href="/demo">
                Book a Demo
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Enterprise Features */}
      <Section background="white" spacing="md">
        <AnimateIn>
          <div className="text-center mb-10">
            <SectionLabel>Enterprise Ready</SectionLabel>
            <SectionTitle>Enterprise Features Without the Enterprise Price</SectionTitle>
            <SectionDescription className="mx-auto">
              VMS matches iLobby on security and compliance while offering more workplace modules at a fraction of the cost.
            </SectionDescription>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {enterpriseFeatures.map((feat, i) => (
            <AnimateIn key={feat.title} delay={i * 80}>
              <Card hover padding="md" className="h-full">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 text-cyan-600 mb-3">
                  <feat.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 font-heading text-sm">{feat.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{feat.description}</p>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* Feature Comparison Table */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>Feature Comparison</SectionLabel>
              <SectionTitle>Side-by-Side Feature Breakdown</SectionTitle>
              <SectionDescription className="mx-auto">
                A fair look at what each platform offers. iLobby has deep visitor management. VMS has broader workplace coverage.
              </SectionDescription>
            </div>
          </AnimateIn>

          <AnimateIn delay={150}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left py-4 px-6 text-sm font-bold text-slate-900 font-heading">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-bold text-slate-900 font-heading bg-slate-50/50">VMS</th>
                    <th className="text-center py-4 px-6 text-sm font-bold text-slate-600 font-heading">iLobby</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                    >
                      <td className="py-3.5 px-6 text-sm font-medium text-slate-700">{row.feature}</td>
                      <td className="py-3.5 px-6 text-center bg-slate-50/20">
                        {renderCellValue(row.vms)}
                      </td>
                      <td className="py-3.5 px-6 text-center">
                        {renderCellValue(row.competitor)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Pricing at Scale */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>Pricing</SectionLabel>
              <SectionTitle>Cost Comparison at Scale</SectionTitle>
              <SectionDescription className="mx-auto">
                iLobby uses opaque contact-sales pricing. VMS publishes transparent per-location pricing.
                Here are the estimated monthly costs.
              </SectionDescription>
            </div>
          </AnimateIn>

          <AnimateIn delay={150}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left py-4 px-6 text-sm font-bold text-slate-900 font-heading">Locations</th>
                    <th className="text-center py-4 px-6 text-sm font-bold text-slate-900 font-heading bg-slate-50/50">VMS/mo</th>
                    <th className="text-center py-4 px-6 text-sm font-bold text-slate-600 font-heading">iLobby/mo (est.)</th>
                    <th className="text-center py-4 px-6 text-sm font-bold text-cyan-700 font-heading">Annual Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((row, i) => (
                    <tr
                      key={row.locations}
                      className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                    >
                      <td className="py-3.5 px-6 text-sm font-medium text-slate-700">{row.locations} location{row.locations > 1 ? "s" : ""}</td>
                      <td className="py-3.5 px-6 text-center bg-slate-50/20 font-bold text-slate-900">{row.vms}</td>
                      <td className="py-3.5 px-6 text-center text-slate-600">{row.ilobby}</td>
                      <td className="py-3.5 px-6 text-center font-bold text-cyan-600">${row.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>

          <AnimateIn delay={300}>
            <div className="mt-6 text-sm text-slate-400 text-center">
              * iLobby pricing is estimated based on publicly available information and may vary. Contact iLobby directly for exact quotes.
            </div>
          </AnimateIn>

          <AnimateIn delay={400}>
            <div className="mt-6 rounded-2xl bg-cyan-50 border border-cyan-200 p-6 text-center">
              <p className="text-slate-700 font-medium">
                A 10-location deployment saves an estimated{" "}
                <span className="text-cyan-700 font-bold">$19,560 per year</span>{" "}
                with VMS vs iLobby - with 5 additional modules included.
              </p>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Fair Assessment */}
      <Section background="tint">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-8">
              <SectionLabel>Honest Take</SectionLabel>
              <SectionTitle>When iLobby Might Be the Better Fit</SectionTitle>
            </div>
          </AnimateIn>

          <AnimateIn delay={100}>
            <Card padding="lg">
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  We believe in transparency. iLobby may be a better choice if you have highly specialized compliance
                  requirements such as advanced watchlist integrations with government databases, or if your organization
                  has an existing iLobby deployment with deep customizations that would be costly to replicate.
                </p>
                <p>
                  However, for the vast majority of businesses - from small offices to large enterprises -
                  VMS offers the same core visitor management capabilities, adds 5 workplace modules,
                  and does it all at a dramatically lower price point.
                </p>
                <p className="font-medium text-slate-900">
                  The best way to decide? Try VMS free and compare the experience for yourself.
                </p>
              </div>
            </Card>
          </AnimateIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="light">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>FAQ</SectionLabel>
              <SectionTitle>VMS vs iLobby - Common Questions</SectionTitle>
            </div>
          </AnimateIn>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateIn key={faq.question} delay={i * 60}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-base font-bold text-slate-900 font-heading">{faq.question}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark" spacing="lg">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.1] tracking-tight font-heading">
              Enterprise Features. Startup-Friendly Price.
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              VMS delivers iLobby-level security and compliance with 5 extra modules at 82% lower cost. Try it free today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" href="/free-trial" icon={<ArrowRight className="w-5 h-5" />}>
                Start Free Trial
              </Button>
              <Button variant="white" size="lg" href="/contact">
                Contact Sales
              </Button>
            </div>
          </div>
        </AnimateIn>
      </Section>
    </>
  );
}

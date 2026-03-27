import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd";
import { Check, X, ArrowRight, DollarSign, Layers, Shield, Zap, Users, Clock } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "VMS vs Envoy Visitors (2026) | Feature & Pricing Comparison",
  description:
    "Compare VMS and Envoy Visitors side by side. VMS starts at $36/mo vs Envoy at $109-329/mo. 6 built-in modules, unlimited check-ins, and zero hidden fees.",
  openGraph: {
    title: "VMS vs Envoy Visitors - Full Comparison 2026",
    description:
      "See why teams switch from Envoy to VMS. Save up to 67% with more features included.",
  },
};

const featureComparison = [
  { feature: "Starting Price", vms: "$36/mo", envoy: "$109/mo", vmsWins: true },
  { feature: "Unlimited Check-ins", vms: true, envoy: "Higher tiers only", vmsWins: true },
  { feature: "Badge Printing", vms: true, envoy: true, vmsWins: false },
  { feature: "Visitor Pre-registration", vms: true, envoy: true, vmsWins: false },
  { feature: "Host Notifications", vms: true, envoy: true, vmsWins: false },
  { feature: "Custom Branding", vms: true, envoy: "Premium only", vmsWins: true },
  { feature: "Queue Management Module", vms: true, envoy: false, vmsWins: true },
  { feature: "Desk Booking Module", vms: true, envoy: "Separate product", vmsWins: true },
  { feature: "Meeting Room Booking", vms: true, envoy: "Separate product", vmsWins: true },
  { feature: "Delivery Management", vms: true, envoy: "Separate product", vmsWins: true },
  { feature: "Attendance Management", vms: true, envoy: false, vmsWins: true },
  { feature: "Compliance Reports", vms: true, envoy: true, vmsWins: false },
  { feature: "Slack & Teams Integration", vms: true, envoy: true, vmsWins: false },
  { feature: "SSO (SAML, Okta)", vms: "Enterprise plan", envoy: "Premium plan", vmsWins: false },
  { feature: "API Access", vms: "Enterprise plan", envoy: "Premium plan", vmsWins: false },
  { feature: "Free Plan Available", vms: true, envoy: false, vmsWins: true },
  { feature: "Number of Modules", vms: "6 included", envoy: "Each sold separately", vmsWins: true },
];

const pricingTiers = [
  {
    tier: "Basic / Starter",
    vmsPrice: "$36/mo",
    envoyPrice: "$109/mo",
    savings: "67%",
  },
  {
    tier: "Mid-tier",
    vmsPrice: "$36/mo",
    envoyPrice: "$199/mo",
    savings: "82%",
  },
  {
    tier: "Premium / Enterprise",
    vmsPrice: "Custom",
    envoyPrice: "$329/mo",
    savings: "Significant",
  },
];

const faqs = [
  {
    question: "Is VMS really comparable to Envoy in features?",
    answer:
      "Yes. VMS includes visitor management, queue management, desk booking, meeting room booking, delivery management, and attendance tracking - all in one platform. Envoy sells these as separate products, meaning you pay more for less integration.",
  },
  {
    question: "How easy is it to switch from Envoy to VMS?",
    answer:
      "Most teams complete the switch within a day. VMS supports CSV import of your existing visitor data, and our onboarding team helps with configuration at no extra cost. You can run both systems in parallel during the transition.",
  },
  {
    question: "Does VMS support the same integrations as Envoy?",
    answer:
      "VMS integrates with Slack, Microsoft Teams, Google Workspace, Okta, and more. Enterprise plans include full API access for custom integrations. If you need a specific integration, contact our team.",
  },
  {
    question: "What about security and compliance?",
    answer:
      "VMS uses AES-256 encryption, SOC 2 compliant infrastructure, and GDPR-ready data handling. All visitor records are stored on US-based servers with 99.9% uptime SLA. Enterprise plans include on-premise deployment options.",
  },
  {
    question: "Can VMS handle multiple office locations?",
    answer:
      "Absolutely. The Professional plan supports up to 10 locations at $36/mo per location. Enterprise plans offer unlimited locations. Each location can have its own branding, workflows, and admin settings.",
  },
  {
    question: "Why is VMS so much cheaper than Envoy?",
    answer:
      "VMS keeps costs low through efficient infrastructure and by focusing exclusively on workplace management tools. Envoy prices reflect their broader platform overhead and VC-funded growth model. VMS passes those savings directly to customers.",
  },
];

const migrationSteps = [
  { step: "1", title: "Export Data", description: "Download your visitor logs and settings from Envoy as CSV files." },
  { step: "2", title: "Setup VMS", description: "Create your VMS account, configure locations, and customize branding." },
  { step: "3", title: "Import & Test", description: "Import your data into VMS and run a parallel test for a few days." },
  { step: "4", title: "Go Live", description: "Switch your lobby tablets to VMS and deactivate Envoy." },
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

export default function VmsVsEnvoyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "VMS vs Envoy", href: "/compare/vs-envoy" },
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
              VMS vs Envoy Visitors
            </h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Both platforms manage visitors. One costs 67% less and bundles 6 modules
              into a single plan. Here is the full breakdown.
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

      {/* Quick Stats */}
      <Section background="white" spacing="sm">
        <AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: DollarSign, label: "Save Up To", value: "67%" },
              { icon: Layers, label: "Modules Included", value: "6" },
              { icon: Users, label: "Check-ins", value: "Unlimited" },
              { icon: Shield, label: "Uptime SLA", value: "99.9%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 text-cyan-600 mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-extrabold text-slate-900 font-heading">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </Section>

      {/* Feature Comparison Table */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>Feature Comparison</SectionLabel>
              <SectionTitle>Side-by-Side Feature Breakdown</SectionTitle>
              <SectionDescription className="mx-auto">
                Every feature compared. No marketing fluff - just the facts.
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
                    <th className="text-center py-4 px-6 text-sm font-bold text-slate-600 font-heading">Envoy</th>
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
                        {renderCellValue(row.envoy)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Pricing Comparison */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>Pricing</SectionLabel>
              <SectionTitle>The Price Difference Is Massive</SectionTitle>
              <SectionDescription className="mx-auto">
                VMS gives you more for less. Every plan includes all 6 modules with unlimited check-ins.
              </SectionDescription>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <AnimateIn key={tier.tier} delay={i * 100}>
                <Card hover padding="lg" className="text-center h-full">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide font-heading">{tier.tier}</h3>
                  <div className="mt-4 space-y-2">
                    <div>
                      <span className="text-xs text-slate-400">VMS</span>
                      <div className="text-3xl font-extrabold text-cyan-600 font-heading">{tier.vmsPrice}</div>
                    </div>
                    <div className="text-sm text-slate-400">vs</div>
                    <div>
                      <span className="text-xs text-slate-400">Envoy</span>
                      <div className="text-xl font-bold text-slate-400 line-through">{tier.envoyPrice}</div>
                    </div>
                  </div>
                  <Badge variant="accent" className="mt-4">Save {tier.savings}</Badge>
                </Card>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={400}>
            <div className="mt-8 rounded-2xl bg-cyan-50 border border-cyan-200 p-6 text-center">
              <p className="text-slate-700 font-medium">
                For a company with 5 locations, switching from Envoy to VMS saves{" "}
                <span className="text-cyan-700 font-bold">$4,380 to $14,340 per year</span>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Module Advantage */}
      <Section background="tint">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>Modules</SectionLabel>
              <SectionTitle>6 Modules in One Platform</SectionTitle>
              <SectionDescription className="mx-auto">
                Envoy sells workplace tools as separate products. VMS bundles everything into a single subscription.
              </SectionDescription>
            </div>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Visitor Management", vms: "Included", envoy: "$109+/mo", icon: Users },
              { name: "Desk Booking", vms: "Included", envoy: "Separate product", icon: Layers },
              { name: "Meeting Room Booking", vms: "Included", envoy: "Separate product", icon: Clock },
              { name: "Queue Management", vms: "Included", envoy: "Not available", icon: Zap },
              { name: "Delivery Management", vms: "Included", envoy: "Separate add-on", icon: Shield },
              { name: "Attendance Management", vms: "Included", envoy: "Not available", icon: Check },
            ].map((mod, i) => (
              <AnimateIn key={mod.name} delay={i * 80}>
                <Card hover padding="md" className="h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 text-cyan-600 mb-3">
                    <mod.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 font-heading text-sm">{mod.name}</h3>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span className="text-slate-600">VMS: {mod.vms}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <X className="w-4 h-4 text-red-400 shrink-0" />
                      <span className="text-slate-400">Envoy: {mod.envoy}</span>
                    </div>
                  </div>
                </Card>
              </AnimateIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Migration */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>Migration</SectionLabel>
              <SectionTitle>Switch from Envoy in 4 Steps</SectionTitle>
              <SectionDescription className="mx-auto">
                Most teams complete the migration within a single business day. Our team helps at every step.
              </SectionDescription>
            </div>
          </AnimateIn>

          <div className="space-y-4">
            {migrationSteps.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 100}>
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-white font-bold font-heading text-sm shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 font-heading">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{step.description}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="light">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>FAQ</SectionLabel>
              <SectionTitle>Common Questions About VMS vs Envoy</SectionTitle>
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
              Ready to Save 67% on Visitor Management?
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              Join thousands of workplaces that switched from Envoy to VMS. Start your free trial today - no credit card required.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" href="/free-trial" icon={<ArrowRight className="w-5 h-5" />}>
                Start Free Trial
              </Button>
              <Button variant="white" size="lg" href="/pricing">
                View Pricing
              </Button>
            </div>
          </div>
        </AnimateIn>
      </Section>
    </>
  );
}

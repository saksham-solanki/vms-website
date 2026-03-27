import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd";
import { Check, X, ArrowRight, DollarSign, Layers, Shield, Globe, Smartphone, Settings } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "VMS vs SwipedOn (2026) | Feature & Pricing Comparison",
  description:
    "Compare VMS and SwipedOn side by side. VMS starts at $36/mo with 6 modules included vs SwipedOn at $55-169/mo. See the full feature and pricing breakdown.",
  openGraph: {
    title: "VMS vs SwipedOn - Full Comparison 2026",
    description:
      "VMS offers more modules and lower pricing than SwipedOn. Compare features, pricing, and capabilities.",
  },
};

const featureComparison = [
  { feature: "Starting Price", vms: "$36/mo", competitor: "$55/mo", vmsWins: true },
  { feature: "Unlimited Check-ins", vms: true, competitor: "Pocket plan only", vmsWins: true },
  { feature: "Badge Printing", vms: true, competitor: true, vmsWins: false },
  { feature: "Visitor Pre-registration", vms: true, competitor: true, vmsWins: false },
  { feature: "Host Notifications", vms: true, competitor: true, vmsWins: false },
  { feature: "Custom Branding", vms: true, competitor: "Business plan ($95+)", vmsWins: true },
  { feature: "Queue Management Module", vms: true, competitor: false, vmsWins: true },
  { feature: "Desk Booking Module", vms: true, competitor: "Separate add-on", vmsWins: true },
  { feature: "Meeting Room Booking", vms: true, competitor: false, vmsWins: true },
  { feature: "Delivery Management", vms: true, competitor: "Business plan only", vmsWins: true },
  { feature: "Attendance Management", vms: true, competitor: false, vmsWins: true },
  { feature: "Compliance Reports", vms: true, competitor: true, vmsWins: false },
  { feature: "Slack & Teams Integration", vms: true, competitor: "Business plan only", vmsWins: true },
  { feature: "SSO / SAML", vms: "Enterprise plan", competitor: "Enterprise plan ($169+)", vmsWins: true },
  { feature: "API Access", vms: "Enterprise plan", competitor: "Enterprise only", vmsWins: false },
  { feature: "Free Plan Available", vms: true, competitor: false, vmsWins: true },
  { feature: "Number of Modules", vms: "6 included", competitor: "2-3 depending on plan", vmsWins: true },
];

const pricingTiers = [
  {
    tier: "Starter",
    vmsPrice: "$36/mo",
    competitorPrice: "$55/mo",
    savings: "35%",
  },
  {
    tier: "Business",
    vmsPrice: "$36/mo",
    competitorPrice: "$95/mo",
    savings: "62%",
  },
  {
    tier: "Enterprise",
    vmsPrice: "Custom",
    competitorPrice: "$169/mo",
    savings: "Significant",
  },
];

const faqs = [
  {
    question: "How does VMS compare to SwipedOn for small offices?",
    answer:
      "VMS is a better fit for small offices because the $36/mo Professional plan includes all 6 modules with unlimited check-ins. SwipedOn's comparable Pocket plan starts at $55/mo and lacks modules like queue management, meeting room booking, and attendance tracking.",
  },
  {
    question: "Does VMS work on iPad like SwipedOn?",
    answer:
      "Yes. VMS runs on iPad, Android tablets, and any device with a modern web browser. The check-in kiosk is a responsive web app, so there is nothing to install from the App Store. SwipedOn requires a dedicated iPad app.",
  },
  {
    question: "Can I migrate from SwipedOn to VMS?",
    answer:
      "Absolutely. Export your visitor data from SwipedOn as a CSV file, then import it into VMS during setup. The migration typically takes less than an hour, and our support team can assist with the transition at no extra cost.",
  },
  {
    question: "SwipedOn is from New Zealand. Is VMS US-based?",
    answer:
      "Yes. VMS is a US-based platform with data centers in the United States. This matters for companies with US data residency requirements. All visitor records stay on US soil with GDPR and CCPA compliance built in.",
  },
  {
    question: "Which platform has better integrations?",
    answer:
      "VMS integrates with Slack, Microsoft Teams, Google Workspace, Okta, and more. SwipedOn also supports common integrations but limits some to higher-tier plans. VMS includes Slack and Teams integration on all paid plans.",
  },
  {
    question: "Does VMS offer a free trial?",
    answer:
      "Yes. VMS offers a permanent free plan (1 location, 50 check-ins/month) plus a full-featured free trial of the Professional plan. No credit card required for either option.",
  },
];

const advantages = [
  {
    icon: DollarSign,
    title: "35-62% Lower Cost",
    description: "VMS Professional at $36/mo includes everything SwipedOn charges $95-169/mo for.",
  },
  {
    icon: Layers,
    title: "6 Modules Included",
    description: "Queue management, desk booking, meeting rooms, delivery, attendance - all built in.",
  },
  {
    icon: Globe,
    title: "US-Based Data Centers",
    description: "All data stored in the United States. Important for compliance-sensitive industries.",
  },
  {
    icon: Smartphone,
    title: "Any Device, Any OS",
    description: "Works on iPad, Android, Windows tablets, and any browser. No app store dependency.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "AES-256 encryption, SOC 2 compliance, SSO support, and 99.9% uptime SLA.",
  },
  {
    icon: Settings,
    title: "Full Customization",
    description: "Custom branding, workflows, and notifications on every paid plan - not just premium tiers.",
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

export default function VmsVsSwipedOnPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "VMS vs SwipedOn", href: "/compare/vs-swipedon" },
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
              VMS vs SwipedOn
            </h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              SwipedOn is a solid visitor management tool. VMS gives you more modules,
              lower pricing, and US-based data storage. Here is how they stack up.
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

      {/* Why VMS Wins */}
      <Section background="white" spacing="md">
        <AnimateIn>
          <div className="text-center mb-10">
            <SectionLabel>Advantages</SectionLabel>
            <SectionTitle>Why Teams Choose VMS Over SwipedOn</SectionTitle>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {advantages.map((adv, i) => (
            <AnimateIn key={adv.title} delay={i * 80}>
              <Card hover padding="md" className="h-full">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 text-cyan-600 mb-3">
                  <adv.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 font-heading text-sm">{adv.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{adv.description}</p>
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
              <SectionTitle>Every Feature Compared</SectionTitle>
              <SectionDescription className="mx-auto">
                A transparent look at what each platform offers across plans.
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
                    <th className="text-center py-4 px-6 text-sm font-bold text-slate-600 font-heading">SwipedOn</th>
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

      {/* Pricing Comparison */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>Pricing</SectionLabel>
              <SectionTitle>VMS Costs Less at Every Tier</SectionTitle>
              <SectionDescription className="mx-auto">
                Same capabilities, lower price. Every VMS plan includes all 6 modules.
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
                      <span className="text-xs text-slate-400">SwipedOn</span>
                      <div className="text-xl font-bold text-slate-400 line-through">{tier.competitorPrice}</div>
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
                For a company with 5 locations, choosing VMS over SwipedOn saves{" "}
                <span className="text-cyan-700 font-bold">$1,140 to $7,980 per year</span>.
              </p>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="light">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>FAQ</SectionLabel>
              <SectionTitle>VMS vs SwipedOn - Your Questions Answered</SectionTitle>
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
              Get More Features for Less
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              VMS gives you 6 modules at a fraction of what SwipedOn charges. Start your free trial today.
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

import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd";
import { Check, X, ArrowRight, DollarSign, Layers, Zap, BarChart3, Tablet, Clock } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "VMS vs Greetly (2026) | Feature & Pricing Comparison",
  description:
    "Compare VMS and Greetly side by side. VMS starts at $36/mo with 6 modules vs Greetly at $99/mo. Full feature comparison, pricing breakdown, and migration guide.",
  openGraph: {
    title: "VMS vs Greetly - Full Comparison 2026",
    description:
      "VMS offers 6 modules at $36/mo compared to Greetly at $99/mo. See why teams are making the switch.",
  },
};

const featureComparison = [
  { feature: "Starting Price", vms: "$36/mo", competitor: "$99/mo", vmsWins: true },
  { feature: "Unlimited Check-ins", vms: true, competitor: true, vmsWins: false },
  { feature: "Badge Printing", vms: true, competitor: true, vmsWins: false },
  { feature: "Visitor Pre-registration", vms: true, competitor: true, vmsWins: false },
  { feature: "Host Notifications", vms: true, competitor: true, vmsWins: false },
  { feature: "Custom Branding", vms: true, competitor: true, vmsWins: false },
  { feature: "Queue Management Module", vms: true, competitor: false, vmsWins: true },
  { feature: "Desk Booking Module", vms: true, competitor: false, vmsWins: true },
  { feature: "Meeting Room Booking", vms: true, competitor: false, vmsWins: true },
  { feature: "Delivery Management", vms: true, competitor: false, vmsWins: true },
  { feature: "Attendance Management", vms: true, competitor: false, vmsWins: true },
  { feature: "Touchless QR Check-in", vms: true, competitor: true, vmsWins: false },
  { feature: "Compliance Reports", vms: true, competitor: true, vmsWins: false },
  { feature: "Slack & Teams Integration", vms: true, competitor: "Limited", vmsWins: true },
  { feature: "Free Plan Available", vms: true, competitor: false, vmsWins: true },
  { feature: "Multi-location Support", vms: true, competitor: "Per-location pricing", vmsWins: true },
  { feature: "Number of Modules", vms: "6 included", competitor: "1 (visitor only)", vmsWins: true },
];

const faqs = [
  {
    question: "How does VMS compare to Greetly for visitor check-in?",
    answer:
      "Both platforms handle visitor check-in well, including badge printing, host notifications, and pre-registration. The key difference is that VMS includes 5 additional modules (desk booking, meeting rooms, queue management, delivery, and attendance) for $63 less per month.",
  },
  {
    question: "Does Greetly have features that VMS does not?",
    answer:
      "Greetly focuses purely on visitor management and does it well. Both platforms cover the core feature set. However, if you need workplace management beyond visitor check-in, VMS provides those tools natively while Greetly would require you to purchase additional software from other vendors.",
  },
  {
    question: "Is VMS reliable enough for a corporate lobby?",
    answer:
      "Yes. VMS offers a 99.9% uptime SLA, AES-256 encryption, and SOC 2 compliant infrastructure. The system works offline too - if your internet drops, visitors can still check in and data syncs when connectivity returns.",
  },
  {
    question: "Can I customize the check-in flow like Greetly?",
    answer:
      "Absolutely. VMS supports fully customizable check-in workflows, including custom questions, document signing (NDA, safety waivers), photo capture, and branded welcome screens. Every field and step is configurable.",
  },
  {
    question: "How does pricing work for multiple locations?",
    answer:
      "VMS charges $36/mo per location on the Professional plan, with all modules included. Greetly charges $99/mo per location for visitor management only. For 5 locations, that is $180/mo with VMS vs $495/mo with Greetly - a savings of $3,780 per year.",
  },
  {
    question: "What kind of support does VMS offer?",
    answer:
      "All paid plans include priority support via email and chat. Enterprise plans get a dedicated account manager plus phone support. Our average response time is under 2 hours during business hours.",
  },
];

const costComparison = [
  { locations: 1, vms: "$36", greetly: "$99", savings: "$63" },
  { locations: 3, vms: "$108", greetly: "$297", savings: "$189" },
  { locations: 5, vms: "$180", greetly: "$495", savings: "$315" },
  { locations: 10, vms: "$360", greetly: "$990", savings: "$630" },
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

export default function VmsVsGreetlyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "VMS vs Greetly", href: "/compare/vs-greetly" },
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
              VMS vs Greetly
            </h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Greetly is a capable visitor management tool. VMS gives you 6 modules
              instead of 1 - at 64% lower cost. Here is the honest comparison.
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
              { icon: DollarSign, label: "Save Per Month", value: "$63" },
              { icon: Layers, label: "More Modules", value: "+5" },
              { icon: Zap, label: "Setup Time", value: "<1 hr" },
              { icon: BarChart3, label: "Annual Savings (5 loc)", value: "$3,780" },
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
              <SectionTitle>Feature-by-Feature Breakdown</SectionTitle>
              <SectionDescription className="mx-auto">
                Both platforms handle visitor check-in. VMS goes further with 5 additional workplace modules.
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
                    <th className="text-center py-4 px-6 text-sm font-bold text-slate-600 font-heading">Greetly</th>
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

      {/* Pricing Scaling Table */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>Pricing</SectionLabel>
              <SectionTitle>The Savings Scale with Your Business</SectionTitle>
              <SectionDescription className="mx-auto">
                The more locations you have, the more you save with VMS. All prices are monthly.
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
                    <th className="text-center py-4 px-6 text-sm font-bold text-slate-600 font-heading">Greetly/mo</th>
                    <th className="text-center py-4 px-6 text-sm font-bold text-cyan-700 font-heading">Monthly Savings</th>
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
                      <td className="py-3.5 px-6 text-center text-slate-600">{row.greetly}</td>
                      <td className="py-3.5 px-6 text-center font-bold text-cyan-600">{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>

          <AnimateIn delay={300}>
            <div className="mt-8 rounded-2xl bg-cyan-50 border border-cyan-200 p-6 text-center">
              <p className="text-slate-700 font-medium">
                A 10-location company saves{" "}
                <span className="text-cyan-700 font-bold">$7,560 per year</span>{" "}
                by choosing VMS over Greetly - and gets 5 extra modules.
              </p>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* What You Get Extra */}
      <Section background="tint">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>Beyond Visitor Management</SectionLabel>
              <SectionTitle>5 Extra Modules Greetly Does Not Offer</SectionTitle>
              <SectionDescription className="mx-auto">
                Greetly focuses on visitor check-in. VMS gives you a complete workplace operations platform.
              </SectionDescription>
            </div>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Queue Management", description: "Manage walk-in queues with real-time displays, SMS notifications, and average wait time tracking.", icon: Clock },
              { name: "Desk Booking", description: "Let employees reserve desks, hot desks, or assigned seating with an interactive floor map.", icon: Tablet },
              { name: "Meeting Room Booking", description: "Book conference rooms with calendar sync, room displays, and automatic release of no-shows.", icon: Layers },
              { name: "Delivery Management", description: "Log packages, notify recipients automatically, and track pickup with photo confirmation.", icon: Zap },
              { name: "Attendance Management", description: "Track employee check-in/out times, generate timesheets, and monitor workplace occupancy.", icon: BarChart3 },
            ].map((mod, i) => (
              <AnimateIn key={mod.name} delay={i * 80}>
                <Card hover padding="md" className="h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 text-cyan-600 mb-3">
                    <mod.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 font-heading text-sm">{mod.name}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{mod.description}</p>
                  <div className="mt-3">
                    <Badge variant="accent">Included in VMS</Badge>
                  </div>
                </Card>
              </AnimateIn>
            ))}
            <AnimateIn delay={5 * 80}>
              <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/30 p-6 h-full">
                <div className="text-center">
                  <p className="font-bold text-slate-900 font-heading">All 5 modules included</p>
                  <p className="mt-1 text-sm text-cyan-600/70">No extra cost. No add-ons.</p>
                  <Button variant="primary" size="sm" href="/free-trial" className="mt-4">
                    Try Free
                  </Button>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="light">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>FAQ</SectionLabel>
              <SectionTitle>VMS vs Greetly - Common Questions</SectionTitle>
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
              6 Modules. $36/Month. Zero Compromise.
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              Get everything Greetly offers plus 5 additional workplace modules. Start free, upgrade when you are ready.
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

import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd";
import { Check, X, ArrowRight, DollarSign, Layers, Shield, Zap, Trophy, BarChart3, Star } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Cheapest Visitor Management System 2026 | Price Comparison",
  description:
    "Compare the cheapest visitor management systems in 2026. VMS starts at $36/mo with 6 modules. See how Envoy, SwipedOn, Greetly, iLobby, and others compare on price and features.",
  openGraph: {
    title: "Cheapest Visitor Management System 2026 - Full Price Comparison",
    description:
      "The definitive price comparison of visitor management systems. Find the best value for your budget.",
  },
};

const priceComparison = [
  {
    name: "VMS",
    price: "$36",
    priceNote: "/location/mo",
    modules: 6,
    freeplan: true,
    unlimitedCheckins: true,
    highlight: true,
    annual5loc: "$2,160",
  },
  {
    name: "SwipedOn",
    price: "$55",
    priceNote: "/location/mo",
    modules: 2,
    freeplan: false,
    unlimitedCheckins: true,
    highlight: false,
    annual5loc: "$3,300",
  },
  {
    name: "Greetly",
    price: "$99",
    priceNote: "/location/mo",
    modules: 1,
    freeplan: false,
    unlimitedCheckins: true,
    highlight: false,
    annual5loc: "$5,940",
  },
  {
    name: "Envoy",
    price: "$109",
    priceNote: "/location/mo",
    modules: 1,
    freeplan: false,
    unlimitedCheckins: false,
    highlight: false,
    annual5loc: "$6,540",
  },
  {
    name: "iLobby",
    price: "~$199",
    priceNote: "/location/mo",
    modules: 1,
    freeplan: false,
    unlimitedCheckins: true,
    highlight: false,
    annual5loc: "~$11,940",
  },
  {
    name: "Teem (iOFFICE)",
    price: "~$150",
    priceNote: "/location/mo",
    modules: 2,
    freeplan: false,
    unlimitedCheckins: true,
    highlight: false,
    annual5loc: "~$9,000",
  },
];

const featureByPrice = [
  { feature: "Visitor Check-in & Badge Printing", vms: true, swipedon: true, greetly: true, envoy: true, ilobby: true },
  { feature: "Host Notifications", vms: true, swipedon: true, greetly: true, envoy: true, ilobby: true },
  { feature: "Pre-registration", vms: true, swipedon: true, greetly: true, envoy: true, ilobby: true },
  { feature: "Custom Branding", vms: true, swipedon: "Paid", greetly: true, envoy: "Paid", ilobby: true },
  { feature: "Queue Management", vms: true, swipedon: false, greetly: false, envoy: false, ilobby: false },
  { feature: "Desk Booking", vms: true, swipedon: "Add-on", greetly: false, envoy: "Separate", ilobby: false },
  { feature: "Meeting Room Booking", vms: true, swipedon: false, greetly: false, envoy: "Separate", ilobby: false },
  { feature: "Delivery Management", vms: true, swipedon: "Paid", greetly: false, envoy: "Separate", ilobby: false },
  { feature: "Attendance Management", vms: true, swipedon: false, greetly: false, envoy: false, ilobby: false },
  { feature: "Free Plan", vms: true, swipedon: false, greetly: false, envoy: false, ilobby: false },
  { feature: "Slack & Teams (base plan)", vms: true, swipedon: false, greetly: "Limited", envoy: true, ilobby: true },
];

const faqs = [
  {
    question: "What is the cheapest visitor management system in 2026?",
    answer:
      "VMS is the cheapest full-featured visitor management system at $36/mo per location. It also offers a free plan with 50 check-ins/month. SwipedOn is the next cheapest at $55/mo, followed by Greetly at $99/mo and Envoy at $109/mo.",
  },
  {
    question: "Is cheaper always worse when it comes to visitor management?",
    answer:
      "Not at all. VMS is the cheapest option AND offers the most modules (6 vs 1-2 for competitors). Lower price does not mean fewer features - it means more efficient operations and a focus on delivering value rather than maximizing extraction.",
  },
  {
    question: "Are there any free visitor management systems?",
    answer:
      "VMS offers a genuine free plan with 1 location and 50 check-ins per month - no credit card required, no time limit. Most other platforms only offer time-limited free trials, not permanent free plans.",
  },
  {
    question: "How do I choose between cheap and enterprise solutions?",
    answer:
      "Consider your actual needs. Most businesses need visitor check-in, badge printing, notifications, and compliance reports. VMS includes all of these plus 5 extra modules for $36/mo. Enterprise solutions like iLobby ($199+/mo) are only worth it if you need highly specialized compliance features for regulated industries.",
  },
  {
    question: "Will a cheap visitor management system scale with my business?",
    answer:
      "VMS scales from 1 to unlimited locations. The free plan works for small offices. Professional ($36/mo) handles up to 10 locations with unlimited check-ins. Enterprise plans support unlimited locations with SSO, API access, and dedicated support. You grow, VMS grows with you.",
  },
  {
    question: "What hidden costs should I watch out for?",
    answer:
      "Common hidden costs include per-check-in fees, charges for badge printing, add-on pricing for integrations, and separate billing for desk booking or room management. VMS has zero hidden costs - the $36/mo price includes all 6 modules, unlimited check-ins, badge printing, and Slack/Teams integration.",
  },
  {
    question: "Can I switch from another system to the cheapest option without losing data?",
    answer:
      "Yes. VMS supports CSV import of visitor data from any platform. Export your data from your current system and import it into VMS during setup. Our support team assists with migrations at no extra cost.",
  },
];

const valuePropositions = [
  {
    icon: Trophy,
    title: "Lowest Price, Most Features",
    description: "VMS is the only platform that offers 6 workplace modules at a starting price of $36/mo. No competitor comes close to this value.",
  },
  {
    icon: DollarSign,
    title: "No Hidden Fees",
    description: "One price, everything included. No per-check-in charges, no module add-ons, no surprise invoices. What you see is what you pay.",
  },
  {
    icon: Layers,
    title: "6 Modules in One",
    description: "Visitor management, desk booking, meeting rooms, queue management, delivery tracking, and attendance - all integrated.",
  },
  {
    icon: Shield,
    title: "Enterprise Security at Startup Prices",
    description: "AES-256 encryption, SOC 2 compliance, 99.9% uptime SLA. The security you need without the enterprise price tag.",
  },
  {
    icon: Zap,
    title: "Free Plan Available",
    description: "Start with the free plan (1 location, 50 check-ins/month) and upgrade when you need more. No credit card required.",
  },
  {
    icon: BarChart3,
    title: "Transparent Pricing",
    description: "Every price is published on our website. No 'contact sales for pricing' games. You know exactly what you will pay.",
  },
];

function renderCellValue(value: boolean | string) {
  if (value === true) {
    return <Check className="w-4 h-4 text-cyan-500 mx-auto" />;
  }
  if (value === false) {
    return <X className="w-4 h-4 text-red-400 mx-auto" />;
  }
  return <span className="text-xs text-slate-500">{value}</span>;
}

export default function CheapestVMSPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "Cheapest Visitor Management System", href: "/compare/cheapest" },
        ]}
      />
      <FAQSchema questions={faqs} />

      {/* Hero */}
      <Section background="gradient" spacing="lg">
        <div className="text-center max-w-4xl mx-auto">
          <AnimateIn>
            <Badge variant="glow" className="mb-4">
              <Star className="w-3.5 h-3.5" /> 2026 Price Guide
            </Badge>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Cheapest Visitor Management <br className="hidden md:block" />
              <span className="gradient-text">System in 2026</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              We compared every major visitor management system on price, features, and value.
              Here is the definitive guide to getting the best deal without sacrificing quality.
            </p>
          </AnimateIn>
          <AnimateIn delay={300}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" href="/free-trial" icon={<ArrowRight className="w-5 h-5" />}>
                Try the Cheapest Option Free
              </Button>
              <Button variant="outline" size="lg" href="/pricing">
                See VMS Pricing
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Price Ranking */}
      <Section background="white" spacing="md">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>Price Ranking</SectionLabel>
              <SectionTitle>2026 Visitor Management System Prices</SectionTitle>
              <SectionDescription className="mx-auto">
                Ranked from cheapest to most expensive. All prices are per location, per month.
              </SectionDescription>
            </div>
          </AnimateIn>

          <div className="space-y-3">
            {priceComparison.map((system, i) => (
              <AnimateIn key={system.name} delay={i * 80}>
                <div
                  className={`flex flex-col sm:flex-row sm:items-center justify-between rounded-xl px-6 py-4 gap-3 ${
                    system.highlight
                      ? "bg-cyan-500 text-slate-950 ring-2 ring-accent-400"
                      : "bg-white border border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-lg font-extrabold font-heading ${system.highlight ? "" : "text-slate-400"}`}>
                      #{i + 1}
                    </span>
                    <div>
                      <span className={`font-bold font-heading ${system.highlight ? "" : "text-slate-700"}`}>
                        {system.name}
                      </span>
                      {system.highlight && <Badge variant="default" className="ml-2 text-xs">Best Value</Badge>}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-8">
                    <div className="text-center">
                      <div className={`text-xs ${system.highlight ? "text-slate-800" : "text-slate-400"}`}>Price</div>
                      <div className={`font-heading font-extrabold ${system.highlight ? "text-lg" : "text-slate-900"}`}>
                        {system.price}<span className="text-xs font-normal">{system.priceNote}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`text-xs ${system.highlight ? "text-slate-800" : "text-slate-400"}`}>Modules</div>
                      <div className={`font-heading font-bold ${system.highlight ? "" : "text-slate-900"}`}>{system.modules}</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-xs ${system.highlight ? "text-slate-800" : "text-slate-400"}`}>Free Plan</div>
                      <div>{system.freeplan ? <Check className="w-5 h-5 text-cyan-700 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-xs ${system.highlight ? "text-slate-800" : "text-slate-400"}`}>5 loc/year</div>
                      <div className={`font-heading font-bold text-sm ${system.highlight ? "" : "text-slate-900"}`}>{system.annual5loc}</div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Feature Comparison Matrix */}
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>Feature Matrix</SectionLabel>
              <SectionTitle>Cheap Does Not Mean Lacking Features</SectionTitle>
              <SectionDescription className="mx-auto">
                VMS is the cheapest option AND has the most features. See how every platform compares.
              </SectionDescription>
            </div>
          </AnimateIn>

          <AnimateIn delay={150}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left py-3 px-4 text-xs font-bold text-slate-900 font-heading min-w-[180px]">Feature</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-slate-900 font-heading bg-slate-50/50 min-w-[70px]">VMS<br /><span className="font-normal text-cyan-500">$36</span></th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-slate-600 font-heading min-w-[80px]">SwipedOn<br /><span className="font-normal text-slate-400">$55</span></th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-slate-600 font-heading min-w-[70px]">Greetly<br /><span className="font-normal text-slate-400">$99</span></th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-slate-600 font-heading min-w-[70px]">Envoy<br /><span className="font-normal text-slate-400">$109</span></th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-slate-600 font-heading min-w-[70px]">iLobby<br /><span className="font-normal text-slate-400">~$199</span></th>
                  </tr>
                </thead>
                <tbody>
                  {featureByPrice.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                    >
                      <td className="py-3 px-4 text-xs font-medium text-slate-700">{row.feature}</td>
                      <td className="py-3 px-3 text-center bg-slate-50/20">{renderCellValue(row.vms)}</td>
                      <td className="py-3 px-3 text-center">{renderCellValue(row.swipedon)}</td>
                      <td className="py-3 px-3 text-center">{renderCellValue(row.greetly)}</td>
                      <td className="py-3 px-3 text-center">{renderCellValue(row.envoy)}</td>
                      <td className="py-3 px-3 text-center">{renderCellValue(row.ilobby)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Why VMS Is Best Value */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>Best Value</SectionLabel>
              <SectionTitle>Why VMS Offers the Best Value</SectionTitle>
              <SectionDescription className="mx-auto">
                The cheapest price is only part of the equation. Here is why VMS delivers the most value per dollar.
              </SectionDescription>
            </div>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuePropositions.map((prop, i) => (
              <AnimateIn key={prop.title} delay={i * 80}>
                <Card hover padding="md" className="h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 text-cyan-600 mb-3">
                    <prop.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 font-heading text-sm">{prop.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{prop.description}</p>
                </Card>
              </AnimateIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Annual Cost at Scale */}
      <Section background="tint">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>Total Cost of Ownership</SectionLabel>
              <SectionTitle>5-Year Cost Comparison (5 Locations)</SectionTitle>
              <SectionDescription className="mx-auto">
                The long-term savings of choosing VMS are substantial. Here is what each platform costs over 5 years.
              </SectionDescription>
            </div>
          </AnimateIn>

          <div className="space-y-3">
            {[
              { name: "VMS", cost: "$10,800", bar: "18%", highlight: true },
              { name: "SwipedOn", cost: "$16,500", bar: "28%", highlight: false },
              { name: "Greetly", cost: "$29,700", bar: "50%", highlight: false },
              { name: "Envoy", cost: "$32,700", bar: "55%", highlight: false },
              { name: "iLobby", cost: "~$59,700", bar: "100%", highlight: false },
            ].map((row, i) => (
              <AnimateIn key={row.name} delay={i * 80}>
                <div className="rounded-xl bg-white border border-slate-200 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-bold font-heading text-sm ${row.highlight ? "text-slate-900" : "text-slate-700"}`}>
                      {row.name}
                    </span>
                    <span className={`font-extrabold font-heading ${row.highlight ? "text-slate-900" : "text-slate-900"}`}>
                      {row.cost}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${row.highlight ? "bg-cyan-500" : "bg-slate-300"}`}
                      style={{ width: row.bar }}
                    />
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={500}>
            <div className="mt-8 rounded-2xl bg-cyan-50 border border-cyan-200 p-6 text-center">
              <p className="text-slate-700 font-medium">
                Over 5 years with 5 locations, VMS saves you{" "}
                <span className="text-cyan-700 font-bold">$5,700 to $48,900</span>{" "}
                compared to other platforms.
              </p>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Detailed Compare Links */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>Detailed Comparisons</SectionLabel>
              <SectionTitle>Compare VMS to Each Competitor</SectionTitle>
              <SectionDescription className="mx-auto">
                Want a deeper dive? Read our detailed comparison pages for each platform.
              </SectionDescription>
            </div>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "VMS vs Envoy", href: "/compare/vs-envoy", savings: "Save 67%" },
              { name: "VMS vs SwipedOn", href: "/compare/vs-swipedon", savings: "Save 35%" },
              { name: "VMS vs Greetly", href: "/compare/vs-greetly", savings: "Save 64%" },
              { name: "VMS vs iLobby", href: "/compare/vs-ilobby", savings: "Save 82%" },
            ].map((link, i) => (
              <AnimateIn key={link.name} delay={i * 80}>
                <a
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 hover:border-slate-200 hover:shadow-sm transition-all group"
                >
                  <div>
                    <h3 className="font-bold text-slate-900 font-heading text-sm group-hover:text-slate-900 transition-colors">{link.name}</h3>
                    <Badge variant="accent" className="mt-2">{link.savings}</Badge>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 transition-colors" />
                </a>
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
              <SectionTitle>Questions About Pricing & Value</SectionTitle>
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
              The Best Visitor Management System <br className="hidden sm:block" />
              Does Not Have to Be Expensive
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              VMS: 6 modules, $36/month, free plan available. Start today and see why the cheapest option is also the most feature-rich.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" href="/free-trial" icon={<ArrowRight className="w-5 h-5" />}>
                Start Free Trial
              </Button>
              <Button variant="white" size="lg" href="/pricing">
                View All Plans
              </Button>
            </div>
          </div>
        </AnimateIn>
      </Section>
    </>
  );
}

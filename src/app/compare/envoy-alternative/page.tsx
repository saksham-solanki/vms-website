import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd";
import { Check, ArrowRight, DollarSign, Layers, Shield, TrendingDown, Calculator, Users, Zap, Clock, Building2 } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Best Envoy Alternative 2026 | VMS - Save 67% on Visitor Management",
  description:
    "Looking for an Envoy alternative? VMS offers 6 modules at $36/mo vs Envoy's $109-329/mo. Same features, better value, zero compromise on security.",
  openGraph: {
    title: "Best Envoy Alternative in 2026 - VMS",
    description:
      "Switch from Envoy and save up to 67%. VMS includes visitor management, desk booking, queue management, and more.",
  },
};

const switchReasons = [
  {
    icon: DollarSign,
    title: "Envoy Costs Keep Rising",
    description:
      "Envoy has increased prices multiple times. Their starter plan now costs $109/mo per location. VMS Professional is $36/mo with more features included.",
  },
  {
    icon: Layers,
    title: "Envoy Sells Modules Separately",
    description:
      "Desk booking, room management, and deliveries are separate Envoy products with separate price tags. VMS bundles all 6 modules into one subscription.",
  },
  {
    icon: TrendingDown,
    title: "Feature Gating Gets Worse",
    description:
      "Custom branding, advanced analytics, and integrations keep moving to higher Envoy tiers. VMS includes these in the $36/mo Professional plan.",
  },
  {
    icon: Users,
    title: "Support Quality Has Declined",
    description:
      "Many Envoy users report slower response times and less helpful support. VMS offers priority support on all paid plans with under 2-hour response times.",
  },
  {
    icon: Shield,
    title: "Security Concerns",
    description:
      "VMS uses AES-256 encryption, SOC 2 compliance, and US-based data centers. Enterprise plans include SSO and on-premise deployment options.",
  },
  {
    icon: Zap,
    title: "Simpler to Manage",
    description:
      "One platform, one login, one bill. No juggling multiple Envoy products for desk booking, rooms, and visitors. VMS unifies everything.",
  },
];

const savingsTable = [
  { locations: 1, envoy: "$109", vms: "$36", monthly: "$73", annual: "$876" },
  { locations: 3, envoy: "$327", vms: "$108", monthly: "$219", annual: "$2,628" },
  { locations: 5, envoy: "$545", vms: "$180", monthly: "$365", annual: "$4,380" },
  { locations: 10, envoy: "$1,090", vms: "$360", monthly: "$730", annual: "$8,760" },
  { locations: 20, envoy: "$2,180", vms: "$720", monthly: "$1,460", annual: "$17,520" },
];

const faqs = [
  {
    question: "What is the best Envoy alternative in 2026?",
    answer:
      "VMS is the top Envoy alternative for businesses that want comprehensive visitor management with additional workplace modules. At $36/mo per location vs Envoy's $109+/mo, VMS includes visitor check-in, desk booking, meeting room management, queue management, delivery tracking, and attendance - all in one platform.",
  },
  {
    question: "Is it hard to switch from Envoy to VMS?",
    answer:
      "No. Most teams complete the migration within a single business day. Export your visitor data from Envoy as CSV, import it into VMS, configure your branding and workflows, and you are live. VMS support helps with the transition at no extra cost.",
  },
  {
    question: "Will my team need training on VMS?",
    answer:
      "VMS is designed to be intuitive. The visitor check-in interface requires zero training for front desk staff. Admin features are well-documented with in-app guidance. Most teams are fully operational within hours, not weeks.",
  },
  {
    question: "Does VMS have an iPad app like Envoy?",
    answer:
      "VMS check-in works on any device with a modern browser - iPad, Android tablets, Windows touchscreens, and even smartphones. There is no app store dependency, which means instant updates and no compatibility issues.",
  },
  {
    question: "Can I use VMS just for visitor management and add other modules later?",
    answer:
      "All 6 modules are included in every paid plan. You can enable or disable modules as needed. There is no upsell - start with visitor management and turn on desk booking, queue management, or any other module whenever you are ready.",
  },
  {
    question: "What if I need features Envoy has that VMS does not?",
    answer:
      "VMS covers all core visitor management features that Envoy offers. If there is a specific feature you depend on, contact our team for a personalized comparison. We also have an active product roadmap and ship new features monthly.",
  },
  {
    question: "How much will I actually save by switching from Envoy?",
    answer:
      "For a single location on the starter plan, you save $73/mo ($876/year). For 5 locations, savings reach $4,380/year on base pricing alone. Factor in Envoy's separate charges for desk booking and room management, and the savings are even larger.",
  },
];

const migrationTimeline = [
  { day: "Day 1 - Morning", title: "Sign Up & Configure", description: "Create your VMS account, set up locations, customize branding, and configure check-in workflows. Takes about 2 hours." },
  { day: "Day 1 - Afternoon", title: "Import & Integrate", description: "Import visitor data from Envoy CSV export. Connect Slack, Teams, or Google Workspace. Set up host directories." },
  { day: "Day 2-3", title: "Parallel Testing", description: "Run VMS alongside Envoy for a couple of days. Test check-in flows, notifications, and badge printing. Train front desk staff (usually 15 minutes)." },
  { day: "Day 4", title: "Go Live", description: "Switch your lobby devices to VMS. Deactivate Envoy subscription. You are done." },
];

export default function EnvoyAlternativePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "Best Envoy Alternative", href: "/compare/envoy-alternative" },
        ]}
      />
      <FAQSchema questions={faqs} />

      {/* Hero */}
      <Section background="gradient" spacing="lg">
        <div className="text-center max-w-4xl mx-auto">
          <AnimateIn>
            <Badge variant="glow" className="mb-4">Envoy Alternative</Badge>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              The Best Envoy Alternative <br className="hidden md:block" />
              <span className="gradient-text">for 2026</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Tired of Envoy price hikes and feature gating? VMS gives you 6 modules
              for $36/mo per location. Same security. More features. 67% lower cost.
            </p>
          </AnimateIn>
          <AnimateIn delay={300}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" href="/free-trial" icon={<ArrowRight className="w-5 h-5" />}>
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" href="/compare/vs-envoy">
                See Full Comparison
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Why Switch */}
      <Section background="white" spacing="md">
        <AnimateIn>
          <div className="text-center mb-10">
            <SectionLabel>Why Switch</SectionLabel>
            <SectionTitle>Why Teams Are Leaving Envoy</SectionTitle>
            <SectionDescription className="mx-auto">
              Envoy was a pioneer in digital visitor management. But rising prices and fragmented
              products have pushed teams to look for better alternatives.
            </SectionDescription>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {switchReasons.map((reason, i) => (
            <AnimateIn key={reason.title} delay={i * 80}>
              <Card hover padding="md" className="h-full">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 text-cyan-600 mb-3">
                  <reason.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 font-heading text-sm">{reason.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{reason.description}</p>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* Cost Savings Calculator */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>
                <Calculator className="w-4 h-4 inline-block" /> Savings Calculator
              </SectionLabel>
              <SectionTitle>Calculate Your Envoy-to-VMS Savings</SectionTitle>
              <SectionDescription className="mx-auto">
                Based on Envoy starter plan ($109/mo) vs VMS Professional ($36/mo). Actual savings may be higher
                if you use Envoy premium tiers or add-on products.
              </SectionDescription>
            </div>
          </AnimateIn>

          <AnimateIn delay={150}>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left py-4 px-6 text-sm font-bold text-slate-900 font-heading">Locations</th>
                    <th className="text-center py-4 px-6 text-sm font-bold text-slate-600 font-heading">Envoy/mo</th>
                    <th className="text-center py-4 px-6 text-sm font-bold text-slate-900 font-heading bg-slate-50/50">VMS/mo</th>
                    <th className="text-center py-4 px-6 text-sm font-bold text-slate-600 font-heading">Monthly Savings</th>
                    <th className="text-center py-4 px-6 text-sm font-bold text-cyan-700 font-heading">Annual Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {savingsTable.map((row, i) => (
                    <tr
                      key={row.locations}
                      className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                    >
                      <td className="py-3.5 px-6 text-sm font-medium text-slate-700">{row.locations}</td>
                      <td className="py-3.5 px-6 text-center text-slate-500">{row.envoy}</td>
                      <td className="py-3.5 px-6 text-center bg-slate-50/20 font-bold text-slate-900">{row.vms}</td>
                      <td className="py-3.5 px-6 text-center text-slate-600">{row.monthly}</td>
                      <td className="py-3.5 px-6 text-center font-bold text-cyan-600">{row.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>

          <AnimateIn delay={300}>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6 text-center">
                <div className="text-3xl font-extrabold text-slate-900 font-heading">$73</div>
                <div className="text-sm text-cyan-600/70 mt-1">saved per location/mo</div>
              </div>
              <div className="rounded-2xl bg-cyan-50 border border-cyan-100 p-6 text-center">
                <div className="text-3xl font-extrabold text-cyan-700 font-heading">$4,380</div>
                <div className="text-sm text-cyan-600/70 mt-1">saved per year (5 locations)</div>
              </div>
              <div className="rounded-2xl bg-glow-50 border border-glow-100 p-6 text-center">
                <div className="text-3xl font-extrabold text-glow-600 font-heading">67%</div>
                <div className="text-sm text-glow-600/70 mt-1">lower starting price</div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* What You Get */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>What You Get</SectionLabel>
              <SectionTitle>Everything Envoy Offers - And More</SectionTitle>
              <SectionDescription className="mx-auto">
                VMS is not a stripped-down budget alternative. It is a full workplace operations platform with 6 integrated modules.
              </SectionDescription>
            </div>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Users, name: "Visitor Management", description: "Digital check-in, badge printing, pre-registration, NDA signing, host notifications, and compliance reports." },
              { icon: Layers, name: "Desk Booking", description: "Hot desking, assigned seating, interactive floor maps, and real-time availability for hybrid workplaces." },
              { icon: Clock, name: "Meeting Room Booking", description: "Book rooms with calendar sync, digital room displays, automatic no-show release, and usage analytics." },
              { icon: Zap, name: "Queue Management", description: "Walk-in queues with real-time displays, SMS notifications, average wait time tracking, and staff routing." },
              { icon: Building2, name: "Delivery Management", description: "Log packages, auto-notify recipients, track pickups with photo confirmation, and generate delivery reports." },
              { icon: Shield, name: "Attendance Management", description: "Employee check-in/out, timesheet generation, workplace occupancy monitoring, and absence tracking." },
            ].map((mod, i) => (
              <AnimateIn key={mod.name} delay={i * 80}>
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-slate-200 hover:shadow-sm transition-all">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 text-cyan-600 shrink-0">
                    <mod.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 font-heading text-sm">{mod.name}</h3>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">{mod.description}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={500}>
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500">All 6 modules included in every paid plan. No add-ons. No upsells.</p>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Migration Timeline */}
      <Section background="tint">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-10">
              <SectionLabel>Migration</SectionLabel>
              <SectionTitle>Switch from Envoy in Under a Week</SectionTitle>
              <SectionDescription className="mx-auto">
                Most teams go live on VMS within 1-4 business days. Here is the typical timeline.
              </SectionDescription>
            </div>
          </AnimateIn>

          <div className="space-y-4">
            {migrationTimeline.map((step, i) => (
              <AnimateIn key={step.day} delay={i * 100}>
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="shrink-0">
                    <Badge variant="primary">{step.day}</Badge>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 font-heading">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">{step.description}</p>
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
              <SectionTitle>Frequently Asked Questions</SectionTitle>
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
              Stop Overpaying for Envoy
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              VMS gives you everything Envoy offers - plus 5 extra modules - for 67% less. Start your free trial today and see the difference.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" href="/free-trial" icon={<ArrowRight className="w-5 h-5" />}>
                Start Free Trial
              </Button>
              <Button variant="white" size="lg" href="/compare/vs-envoy">
                Full VMS vs Envoy Comparison
              </Button>
            </div>
          </div>
        </AnimateIn>
      </Section>
    </>
  );
}

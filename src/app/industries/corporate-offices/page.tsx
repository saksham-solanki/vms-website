import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardIcon, CardTitle, CardDescription } from "@/components/ui/Card";
import { AnimateIn, AnimatedCounter } from "@/components/ui/AnimateIn";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd";
import {
  Building2,
  ShieldCheck,
  Users,
  BadgeCheck,
  Clock,
  Bell,
  Fingerprint,
  BarChart3,
  Package,
  UserCheck,
  ClipboardList,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Visitor Management for Corporate Offices | Lobby & Multi-Tenant Security",
  description:
    "Streamline corporate lobby check-in with VMS. Multi-tenant support, badge printing, host notifications, and compliance-ready records. SOC 2 & GDPR ready. From $36/mo.",
  openGraph: {
    title: "Visitor Management for Corporate Offices | VMS",
    description:
      "Streamline corporate lobby check-in with VMS. Multi-tenant support, badge printing, host notifications, and compliance-ready records.",
  },
};

const useCases = [
  {
    icon: Users,
    title: "Client Visits & Meetings",
    description:
      "Pre-register VIP clients, print branded badges on arrival, and notify hosts instantly via Slack, Teams, or SMS. Make every first impression count.",
  },
  {
    icon: UserCheck,
    title: "Interview Candidates",
    description:
      "Create a seamless candidate experience with custom check-in flows, NDA signing, and automated interview room directions. No more awkward lobby waits.",
  },
  {
    icon: Package,
    title: "Deliveries & Contractors",
    description:
      "Separate check-in flows for deliveries, couriers, and contractors. Track who enters, when they leave, and what they brought with them.",
  },
  {
    icon: Building2,
    title: "Multi-Tenant Buildings",
    description:
      "Each tenant gets their own branded check-in experience. Building management gets a unified dashboard across all tenants with shared security policies.",
  },
  {
    icon: ClipboardList,
    title: "Compliance Audits",
    description:
      "Export visitor logs in CSV or PDF format with timestamps, photo IDs, and host details. Ready for SOC 2, GDPR, and internal audit requirements.",
  },
  {
    icon: BarChart3,
    title: "Executive Reporting",
    description:
      "Track visitor volume trends, peak hours, average wait times, and host responsiveness. Data-driven decisions for your facilities team.",
  },
];

const features = [
  {
    icon: Fingerprint,
    title: "Touchless Check-In",
    description: "QR code scanning, pre-registration links, and kiosk mode for contactless entry.",
  },
  {
    icon: BadgeCheck,
    title: "Instant Badge Printing",
    description: "Print branded visitor badges with photo, host name, and access level in seconds.",
  },
  {
    icon: Bell,
    title: "Host Notifications",
    description: "Alert hosts via Slack, Microsoft Teams, SMS, or email the moment their guest arrives.",
  },
  {
    icon: ShieldCheck,
    title: "Watchlist Screening",
    description: "Screen visitors against internal blocklists and flag unauthorized individuals in real time.",
  },
  {
    icon: Lock,
    title: "NDA & Document Signing",
    description: "Require visitors to sign NDAs, safety waivers, or Wi-Fi policies during check-in.",
  },
  {
    icon: Clock,
    title: "Automatic Check-Out",
    description: "Set time-based auto check-out or allow visitors to check out from their phone.",
  },
];

const faqs = [
  {
    question: "Can VMS handle multi-tenant corporate buildings?",
    answer:
      "Yes. VMS supports unlimited tenants per building. Each tenant gets their own branded check-in flow, visitor logs, and notification settings. Building management gets a unified dashboard to monitor all activity across tenants.",
  },
  {
    question: "How does VMS help with SOC 2 compliance?",
    answer:
      "VMS provides a complete audit trail of every visitor interaction - from pre-registration to check-out. All visitor data is encrypted with AES-256, and you can export detailed compliance reports in CSV or PDF format. Access controls ensure only authorized personnel can view visitor records.",
  },
  {
    question: "What hardware do I need for the lobby?",
    answer:
      "VMS runs on any iPad or Android tablet. For badge printing, we support Dymo, Brother, and most standard label printers. No proprietary hardware required - use what you already have or pick up a tablet for under $300.",
  },
  {
    question: "Can visitors pre-register before arriving?",
    answer:
      "Absolutely. Hosts can send pre-registration links via email. Visitors fill in their details, sign required documents, and receive a QR code. On arrival, they scan the QR code and skip the check-in queue entirely.",
  },
  {
    question: "How fast can we get set up?",
    answer:
      "Most corporate offices are fully live within 30 minutes. Create your account, customize your check-in flow, connect your notification channels, and place a tablet in your lobby. Our setup wizard walks you through every step.",
  },
];

export default function CorporateOfficesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Corporate Offices", href: "/industries/corporate-offices" },
        ]}
      />
      <FAQSchema questions={faqs} />

      {/* Hero Section */}
      <Section background="gradient" spacing="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateIn animation="fade-in-up">
            <Badge variant="primary" className="mb-6">
              <Building2 className="w-3.5 h-3.5" />
              Corporate Offices
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading leading-[1.1] tracking-tight">
              Your Lobby Deserves{" "}
              <span className="gradient-text">Better Than a Paper Logbook</span>
            </h1>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl">
              VMS transforms corporate front desks into professional, secure, and
              fully digital experiences. Multi-tenant support, instant badge printing,
              real-time host notifications, and compliance-ready records - all from $36/month.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/free-trial">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" href="/demo">
                Book a Demo
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              {["SOC 2 Ready", "GDPR Compliant", "AES-256 Encryption"].map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-sm text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-cyan-500" />
                  {badge}
                </span>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-in-up" delay={200}>
            <div className="relative">
              <div className="rounded-2xl bg-white border border-slate-200 shadow-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Workplaces Trust VMS", value: 2000, suffix: "+" },
                    { label: "Countries Served", value: 15, suffix: "+" },
                    { label: "Average Setup Time", value: 5, suffix: " min" },
                    { label: "Capterra Rating", value: 4.9, suffix: "/5" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-extrabold text-slate-900 font-heading">
                        <AnimatedCounter
                          target={stat.value}
                          suffix={stat.suffix}
                          duration={1500}
                        />
                      </div>
                      <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -z-10 inset-0 bg-slate-100/50 rounded-2xl translate-x-4 translate-y-4" />
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Use Cases */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateIn animation="fade-in-up">
            <SectionLabel>Use Cases</SectionLabel>
            <SectionTitle>Built for Every Corporate Scenario</SectionTitle>
            <SectionDescription className="mx-auto">
              From VIP client visits to daily deliveries, VMS handles every type of
              corporate visitor with dedicated check-in flows and automated workflows.
            </SectionDescription>
          </AnimateIn>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <AnimateIn key={useCase.title} animation="fade-in-up" delay={index * 100}>
              <Card hover padding="lg" className="h-full">
                <CardIcon>
                  <useCase.icon className="w-6 h-6" />
                </CardIcon>
                <CardTitle>{useCase.title}</CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section background="light">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateIn animation="fade-in-up">
            <SectionLabel>Features</SectionLabel>
            <SectionTitle>Everything Your Corporate Lobby Needs</SectionTitle>
            <SectionDescription className="mx-auto">
              Purpose-built features for corporate environments. Professional, secure,
              and ridiculously easy to set up.
            </SectionDescription>
          </AnimateIn>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimateIn key={feature.title} animation="fade-in-up" delay={index * 80}>
              <div className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-200/80 h-full">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-50 text-cyan-600 flex items-center justify-center">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* Compliance Section */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateIn animation="slide-in-left">
            <SectionLabel>Compliance</SectionLabel>
            <SectionTitle>Audit-Ready from Day One</SectionTitle>
            <SectionDescription>
              VMS gives your security and compliance teams everything they need.
              Every visitor interaction is logged, encrypted, and exportable.
            </SectionDescription>
            <ul className="mt-8 space-y-4">
              {[
                "SOC 2 Type II - complete audit trails with timestamps and photo verification",
                "GDPR - visitor consent management, data retention policies, and right-to-delete support",
                "CCPA - full compliance with California consumer privacy requirements",
                "AES-256 encryption - all visitor data encrypted at rest and in transit",
                "Role-based access - control who can view, export, or delete visitor records",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                  <ShieldCheck className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn animation="slide-in-right" delay={150}>
            <div className="rounded-2xl bg-slate-950 p-8 text-white">
              <h3 className="text-xl font-bold font-heading mb-6">
                Your Compliance Dashboard
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Visitor Records Encrypted", value: "100%", color: "bg-cyan-500" },
                  { label: "Audit Trail Coverage", value: "100%", color: "bg-slate-700" },
                  { label: "Data Export Formats", value: "CSV, PDF, JSON", color: "bg-glow-500" },
                  { label: "Retention Policy", value: "Configurable", color: "bg-cyan-500" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-slate-800 last:border-0">
                    <span className="text-sm text-slate-300">{item.label}</span>
                    <span className="text-sm font-semibold text-white flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${item.color}`} />
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="light">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <AnimateIn animation="fade-in-up">
              <SectionLabel>FAQ</SectionLabel>
              <SectionTitle>Frequently Asked Questions</SectionTitle>
            </AnimateIn>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimateIn key={faq.question} animation="fade-in-up" delay={index * 80}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark" spacing="lg">
        <AnimateIn animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white leading-[1.1]">
              Ready to Modernize Your Corporate Lobby?
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              Join 2,000+ workplaces that trust VMS for professional, secure visitor
              management. Set up in under 5 minutes. No credit card required.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="white" size="lg" href="/free-trial">
                Start Free Trial
              </Button>
              <Button variant="ghost" size="lg" href="/pricing" className="text-slate-300 hover:text-white hover:bg-slate-800">
                View Pricing
              </Button>
            </div>
          </div>
        </AnimateIn>
      </Section>
    </>
  );
}

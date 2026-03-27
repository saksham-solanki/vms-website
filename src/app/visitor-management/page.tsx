import type { Metadata } from "next";
import {
  Section,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardIcon, CardTitle, CardDescription, BentoCard } from "@/components/ui/Card";
import { AnimateIn, StaggerChildren } from "@/components/ui/AnimateIn";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd";
import {
  Shield,
  UserCheck,
  Printer,
  Bell,
  FileSignature,
  Camera,
  ClipboardList,
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  Building2,
  GraduationCap,
  Factory,
  Landmark,
  Stethoscope,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Visitor Management System - Digital Check-In & Badge Printing",
  description:
    "VMS visitor management system with digital check-in, badge printing, host notifications, watchlists, NDA signing, and compliance reports. Starting at $36/month.",
  openGraph: {
    title: "Visitor Management System - Digital Check-In & Badge Printing | VMS",
    description:
      "The visitor management system that works while you don't have to. Digital check-in, badge printing, host notifications, and more.",
  },
};

const features = [
  {
    icon: UserCheck,
    title: "Digital Check-In",
    description:
      "Replace paper logbooks with a sleek tablet check-in. Visitors sign in with a few taps, and their data is instantly logged and searchable.",
    span: "2" as const,
  },
  {
    icon: Printer,
    title: "Badge Printing",
    description:
      "Auto-print visitor badges with photo, name, host, and expiry. Know who belongs in your building at a glance.",
    span: "1" as const,
  },
  {
    icon: Bell,
    title: "Host Notifications",
    description:
      "Hosts get instant alerts via SMS, email, Slack, or Teams the moment their visitor checks in. No more lobby waiting.",
    span: "1" as const,
  },
  {
    icon: Shield,
    title: "Watchlist Screening",
    description:
      "Screen every visitor against internal watchlists and blocklists in real time. Flag threats before they get past the lobby.",
    span: "2" as const,
  },
  {
    icon: FileSignature,
    title: "NDA & Document Signing",
    description:
      "Have visitors sign NDAs, waivers, or safety agreements digitally during check-in. Documents are stored and linked to their visit record.",
    span: "1" as const,
  },
  {
    icon: CalendarCheck,
    title: "Visitor Pre-Registration",
    description:
      "Hosts pre-register visitors before arrival. Visitors get a QR code to skip the line and check in instantly.",
    span: "1" as const,
  },
  {
    icon: Camera,
    title: "Photo Capture",
    description:
      "Capture visitor photos at check-in for badge printing and security records. Built-in camera support on any tablet.",
    span: "1" as const,
  },
  {
    icon: ClipboardList,
    title: "Compliance Reports",
    description:
      "Export detailed visitor logs as CSV or PDF. Run reports by date, host, department, or visitor type for audits and compliance.",
    span: "1" as const,
  },
];

const steps = [
  {
    number: "01",
    title: "Visitor Arrives",
    description:
      "Your visitor walks up to the check-in kiosk or uses a pre-registration QR code to begin the process.",
  },
  {
    number: "02",
    title: "Digital Check-In",
    description:
      "They enter their details, sign any required documents, and take a photo - all on a simple, guided tablet flow.",
  },
  {
    number: "03",
    title: "Host Gets Notified",
    description:
      "The host receives an instant notification via their preferred channel - SMS, email, Slack, or Microsoft Teams.",
  },
  {
    number: "04",
    title: "Badge Prints Automatically",
    description:
      "A professional visitor badge prints with their photo, name, host info, and visit expiry. No manual work needed.",
  },
];

const industries = [
  {
    icon: Building2,
    name: "Corporate Offices",
    description: "Streamline front desk operations for multi-tenant buildings and corporate campuses.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Enforce safety compliance with contractor sign-in, NDA signing, and safety briefings.",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "HIPAA-friendly visitor tracking for hospitals, clinics, and care facilities.",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Keep campuses secure with visitor screening, badge printing, and parent check-in.",
  },
  {
    icon: Landmark,
    name: "Government",
    description: "Meet federal compliance standards with detailed audit trails and watchlist screening.",
  },
  {
    icon: Briefcase,
    name: "Co-Working Spaces",
    description: "Manage visitor flow across shared spaces with flexible check-in workflows.",
  },
];

const faqs = [
  {
    question: "How does VMS visitor management differ from a paper logbook?",
    answer:
      "VMS replaces manual logbooks with digital check-in on a tablet. Visitor data is instantly searchable, reports are generated automatically, hosts get real-time notifications, and you get watchlist screening - none of which are possible with paper.",
  },
  {
    question: "What hardware do I need for VMS?",
    answer:
      "All you need is an iPad or Android tablet for the check-in kiosk. Badge printing requires a compatible label printer (we support Dymo, Brother, and Zebra). No proprietary hardware or expensive terminals needed.",
  },
  {
    question: "Can visitors pre-register before they arrive?",
    answer:
      "Yes. Hosts can pre-register visitors through the VMS dashboard or calendar integration. Visitors receive an email with a QR code that lets them skip the line and check in instantly on arrival.",
  },
  {
    question: "Is VMS compliant with GDPR and CCPA?",
    answer:
      "Absolutely. VMS is built with privacy by design. Visitor data is encrypted at rest (AES-256) and in transit. You can set automatic data retention policies, honor deletion requests, and generate compliance reports for audits.",
  },
  {
    question: "How fast can I set up VMS?",
    answer:
      "Most teams are live within 5 minutes. Create your account, customize your check-in flow, place a tablet at your front desk, and you are ready. No IT support or complex configuration needed.",
  },
  {
    question: "Can I customize the check-in flow?",
    answer:
      "Yes. You can add custom fields, require NDA signing, enable or disable photo capture, set up different flows for different visitor types (guests, contractors, deliveries), and brand the kiosk with your company logo and colors.",
  },
  {
    question: "What happens when a watchlisted visitor tries to check in?",
    answer:
      "VMS screens every visitor in real time. If a match is found on your internal watchlist, the system immediately alerts security staff and the front desk. You can configure the response - block check-in, require approval, or simply flag for review.",
  },
  {
    question: "How much does VMS visitor management cost?",
    answer:
      "VMS starts at $36 per location per month on the Professional plan. There is also a free plan with up to 50 check-ins per month. Enterprise pricing is available for organizations with custom needs.",
  },
];

export default function VisitorManagementPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Visitor Management", href: "/visitor-management" },
        ]}
      />
      <FAQSchema questions={faqs} />

      {/* Hero Section */}
      <Section background="gradient" spacing="lg">
        <div className="relative">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative text-center max-w-4xl mx-auto">
            <AnimateIn animation="fade-in-down" delay={0}>
              <Badge variant="primary" className="mb-6">
                <Shield className="w-3.5 h-3.5" />
                Visitor Management System
              </Badge>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight">
                Visitor Management System That{" "}
                <span className="gradient-text">Works While You Don&apos;t Have To</span>
              </h1>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={200}>
              <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Digital check-in, instant badge printing, real-time host notifications,
                and watchlist screening - all from a single tablet. Set up in 5 minutes.
                Starting at $36/month.
              </p>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="/free-trial"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" href="/demo">
                  Book a Demo
                </Button>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-in" delay={500}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Free plan available
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Setup in 5 minutes
                </span>
              </div>
            </AnimateIn>
          </div>
        </div>
      </Section>

      {/* Features Bento Grid */}
      <Section background="light" spacing="lg">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateIn>
            <SectionLabel>Features</SectionLabel>
            <SectionTitle>
              Everything You Need to Manage Visitors{" "}
              <span className="gradient-text">Professionally</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              From the moment a visitor walks through your door to the second they leave,
              VMS handles every step automatically.
            </SectionDescription>
          </AnimateIn>
        </div>

        <StaggerChildren staggerDelay={100} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <BentoCard key={feature.title} span={feature.span}>
              <CardIcon className={feature.span === "2" ? "bg-cyan-50 text-cyan-600" : ""}>
                <feature.icon className="w-6 h-6" />
              </CardIcon>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </BentoCard>
          ))}
        </StaggerChildren>
      </Section>

      {/* How It Works */}
      <Section background="white" spacing="lg">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateIn>
            <SectionLabel>How It Works</SectionLabel>
            <SectionTitle>
              Four Steps from Lobby to{" "}
              <span className="gradient-text">Logged</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              VMS turns a chaotic front desk into a smooth, professional experience.
              Here is how it works in practice.
            </SectionDescription>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <AnimateIn key={step.number} animation="fade-in-up" delay={index * 120}>
              <div className="relative">
                <span className="text-6xl font-extrabold text-slate-100 font-heading">
                  {step.number}
                </span>
                <h3 className="mt-2 text-lg font-bold text-slate-900 font-heading">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8">
                    <ArrowRight className="w-5 h-5 text-cyan-300" />
                  </div>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* Industries / Use Cases */}
      <Section background="tint" spacing="lg">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateIn>
            <SectionLabel>Use Cases</SectionLabel>
            <SectionTitle>
              Trusted by Every Industry That{" "}
              <span className="gradient-text">Welcomes Visitors</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              Whether you manage a corporate lobby, a hospital entrance, or a school campus,
              VMS adapts to your workflow.
            </SectionDescription>
          </AnimateIn>
        </div>

        <StaggerChildren staggerDelay={80} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map((industry) => (
            <Card key={industry.name} hover padding="lg">
              <CardIcon className="bg-slate-50 text-cyan-600">
                <industry.icon className="w-6 h-6" />
              </CardIcon>
              <CardTitle>{industry.name}</CardTitle>
              <CardDescription>{industry.description}</CardDescription>
            </Card>
          ))}
        </StaggerChildren>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimateIn>
            <SectionLabel>FAQ</SectionLabel>
            <SectionTitle>
              Frequently Asked Questions
            </SectionTitle>
            <SectionDescription className="mx-auto">
              Everything you need to know about the VMS visitor management system.
            </SectionDescription>
          </AnimateIn>
        </div>

        <div className="max-w-3xl mx-auto">
          <StaggerChildren staggerDelay={60} className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-200 transition-colors"
              >
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" spacing="lg">
        <div className="relative text-center max-w-3xl mx-auto">
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="relative">
            <AnimateIn animation="scale-in">
              <Badge variant="glow" className="mb-6">
                Get Started Today
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                Ready to Upgrade Your{" "}
                <span className="gradient-text">Front Desk?</span>
              </h2>
              <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                Join 2,000+ workplaces that replaced their paper logbooks with VMS.
                Start free, upgrade when you are ready.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="gradient"
                  size="lg"
                  href="/free-trial"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Start Free Trial
                </Button>
                <Button variant="white" size="lg" href="/pricing">
                  View Pricing
                </Button>
              </div>
              <p className="mt-6 text-sm text-slate-500">
                No credit card required. Free plan available forever.
              </p>
            </AnimateIn>
          </div>
        </div>
      </Section>
    </>
  );
}

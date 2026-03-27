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
  Package,
  Camera,
  Link2,
  Bell,
  LayoutDashboard,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Building2,
  GraduationCap,
  Stethoscope,
  Briefcase,
  Warehouse,
  Building,
  ScanLine,
  Clock,
  PackageCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Delivery Management System - Package Tracking & Mailroom Dashboard",
  description:
    "VMS delivery management with package tracking, photo proof, chain of custody, recipient notifications, mailroom dashboard, and delivery analytics. Starting at $36/month.",
  openGraph: {
    title: "Delivery Management - Every Package Tracked, Every Handoff Recorded | VMS",
    description:
      "Package tracking, photo proof of delivery, chain of custody logs, and recipient notifications. Never lose a package again.",
  },
};

const features = [
  {
    icon: Package,
    title: "Package Tracking",
    description:
      "Log every incoming package with carrier, tracking number, recipient, and timestamp. Scan barcodes for instant entry. Know exactly what arrived and when.",
    span: "2" as const,
  },
  {
    icon: Camera,
    title: "Photo Proof of Delivery",
    description:
      "Capture a photo of every package at intake and pickup. Visual proof eliminates disputes about package condition and delivery status.",
    span: "1" as const,
  },
  {
    icon: Link2,
    title: "Chain of Custody",
    description:
      "Track every handoff from carrier to mailroom to recipient. A complete audit trail with timestamps and signatures at each step.",
    span: "1" as const,
  },
  {
    icon: Bell,
    title: "Recipient Notifications",
    description:
      "Recipients get instant notifications via email, SMS, or Slack when their package arrives. Send automatic reminders for unclaimed packages - no more packages sitting in the mailroom for weeks.",
    span: "2" as const,
  },
  {
    icon: LayoutDashboard,
    title: "Mailroom Dashboard",
    description:
      "A real-time view of all packages - pending, claimed, and overdue. Filter by recipient, carrier, date, or status.",
    span: "1" as const,
  },
  {
    icon: BarChart3,
    title: "Delivery Analytics",
    description:
      "Track delivery volumes, peak times, average pickup times, and carrier performance. Optimize your mailroom staffing with data.",
    span: "1" as const,
  },
  {
    icon: ScanLine,
    title: "Barcode Scanning",
    description:
      "Scan package barcodes using a tablet camera or handheld scanner. Auto-populate carrier and tracking info to speed up intake.",
    span: "1" as const,
  },
  {
    icon: Clock,
    title: "Aging & Escalation",
    description:
      "Set rules for unclaimed packages. Auto-escalate with reminders after 24, 48, or 72 hours. Prevent package pile-ups in the mailroom.",
    span: "1" as const,
  },
];

const steps = [
  {
    number: "01",
    title: "Package Arrives",
    description:
      "A delivery arrives at your mailroom or front desk. Staff logs it by scanning the barcode or entering details manually. A photo is captured.",
  },
  {
    number: "02",
    title: "Recipient Notified",
    description:
      "VMS instantly sends a notification to the recipient via their preferred channel - email, SMS, Slack, or Teams - with package details.",
  },
  {
    number: "03",
    title: "Recipient Picks Up",
    description:
      "The recipient comes to claim their package. They sign on the screen, and VMS logs the handoff with a timestamp and optional photo proof.",
  },
  {
    number: "04",
    title: "Chain Documented",
    description:
      "The complete chain of custody - from carrier to mailroom to recipient - is recorded with timestamps, photos, and signatures for full accountability.",
  },
];

const industries = [
  {
    icon: Building2,
    name: "Corporate Offices",
    description: "Handle high volumes of employee packages, vendor deliveries, and inter-office mail across large campuses.",
  },
  {
    icon: Building,
    name: "Multi-Tenant Buildings",
    description: "Manage deliveries for multiple tenants from a central mailroom. Notify the right recipient in the right company.",
  },
  {
    icon: GraduationCap,
    name: "Universities",
    description: "Track student packages in campus mailrooms. Handle thousands of deliveries during move-in season without chaos.",
  },
  {
    icon: Stethoscope,
    name: "Hospitals",
    description: "Track medical supply deliveries, lab specimens, and personal packages for staff across departments.",
  },
  {
    icon: Briefcase,
    name: "Co-Working Spaces",
    description: "Handle packages for dozens of member companies. Notify the right person at the right company every time.",
  },
  {
    icon: Warehouse,
    name: "Residential Complexes",
    description: "Manage package deliveries for residents with locker integration, photo proof, and automatic pickup reminders.",
  },
];

const faqs = [
  {
    question: "How does VMS delivery management work?",
    answer:
      "When a package arrives, your mailroom staff logs it by scanning the barcode or entering the details manually. VMS captures a photo, notifies the recipient instantly, and tracks the package until it is picked up. Every handoff is recorded with timestamps and signatures.",
  },
  {
    question: "Can I scan package barcodes to log deliveries?",
    answer:
      "Yes. VMS supports barcode scanning via a tablet camera or a connected handheld scanner. Scanning auto-populates the carrier and tracking number, making package intake fast and error-free.",
  },
  {
    question: "How are recipients notified when a package arrives?",
    answer:
      "Recipients receive instant notifications via email, SMS, Slack, or Microsoft Teams. You can configure automatic follow-up reminders for unclaimed packages after 24, 48, or 72 hours.",
  },
  {
    question: "What is chain of custody tracking?",
    answer:
      "Chain of custody is a detailed record of every handoff a package goes through - from the carrier delivering it, to the mailroom staff receiving it, to the recipient picking it up. Each step is logged with a timestamp, the person responsible, and optional photo proof.",
  },
  {
    question: "Can I manage deliveries across multiple buildings or locations?",
    answer:
      "Yes. VMS supports multi-location delivery management from a single dashboard. Each location can have its own mailroom operators, notification settings, and escalation rules while you maintain a centralized overview.",
  },
  {
    question: "What happens to unclaimed packages?",
    answer:
      "VMS tracks package aging and sends automatic reminders to recipients. You can set escalation rules - for example, notify the manager after 48 hours and return to sender after 7 days. The mailroom dashboard highlights overdue packages so nothing falls through the cracks.",
  },
  {
    question: "Does VMS integrate with major carriers?",
    answer:
      "VMS recognizes barcodes from all major carriers including USPS, UPS, FedEx, DHL, and Amazon. Tracking numbers are auto-linked so you can check delivery status directly from the VMS dashboard.",
  },
  {
    question: "How much does VMS delivery management cost?",
    answer:
      "Delivery management is included in the VMS Professional plan at $36 per location per month. It is part of the full 6-module platform alongside visitor management, queue management, attendance tracking, and more.",
  },
];

export default function DeliveryManagementPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Delivery Management", href: "/delivery-management" },
        ]}
      />
      <FAQSchema questions={faqs} />

      {/* Hero Section */}
      <Section background="gradient" spacing="lg">
        <div className="relative">
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="relative text-center max-w-4xl mx-auto">
            <AnimateIn animation="fade-in-down" delay={0}>
              <Badge variant="accent" className="mb-6">
                <Package className="w-3.5 h-3.5" />
                Delivery Management
              </Badge>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight">
                Delivery Management:{" "}
                <span className="gradient-text">Every Package Tracked, Every Handoff Recorded</span>
              </h1>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={200}>
              <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Package tracking, photo proof of delivery, chain of custody logs, and
                instant recipient notifications. Your mailroom, organized and accountable.
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
                  Photo proof of delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Barcode scanning
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Instant notifications
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
              Mailroom Management,{" "}
              <span className="gradient-text">Fully Automated</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              From the moment a package hits your loading dock to the second it is
              picked up, VMS tracks everything with zero manual effort.
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
              From Delivery to Pickup in{" "}
              <span className="gradient-text">Four Steps</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              VMS creates a complete, accountable chain of custody for every package
              that enters your building.
            </SectionDescription>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <AnimateIn key={step.number} animation="fade-in-up" delay={index * 120}>
              <div className="relative">
                <span className="text-6xl font-extrabold text-cyan-100 font-heading">
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
              Trusted by Every Building That{" "}
              <span className="gradient-text">Receives Packages</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              Whether you manage a corporate mailroom, a university campus, or a
              multi-tenant building, VMS keeps every package accounted for.
            </SectionDescription>
          </AnimateIn>
        </div>

        <StaggerChildren staggerDelay={80} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map((industry) => (
            <Card key={industry.name} hover padding="lg">
              <CardIcon className="bg-cyan-50 text-cyan-600">
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
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <SectionDescription className="mx-auto">
              Common questions about VMS delivery management.
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
          <div className="absolute inset-0 dot-pattern opacity-10" />
          <div className="relative">
            <AnimateIn animation="scale-in">
              <Badge variant="glow" className="mb-6">
                <PackageCheck className="w-3.5 h-3.5" />
                Zero Lost Packages
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                Never Lose a Package{" "}
                <span className="gradient-text">Again</span>
              </h2>
              <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                Every package tracked from the moment it arrives to the second it is claimed.
                Photo proof, chain of custody, and instant notifications included.
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
                Included in VMS Professional - $36/month per location.
              </p>
            </AnimateIn>
          </div>
        </div>
      </Section>
    </>
  );
}

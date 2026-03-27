import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardIcon, CardTitle, CardDescription } from "@/components/ui/Card";
import { AnimateIn, AnimatedCounter } from "@/components/ui/AnimateIn";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd";
import {
  Factory,
  ShieldCheck,
  Users,
  HardHat,
  Clock,
  Bell,
  FileText,
  ClipboardList,
  AlertTriangle,
  Wrench,
  BadgeCheck,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Visitor Management for Manufacturing | Contractor & Safety Compliance",
  description:
    "Manage contractors, enforce safety compliance, and meet OSHA requirements with VMS. Safety induction videos, PPE acknowledgment, and real-time site tracking. From $36/mo.",
  openGraph: {
    title: "Visitor Management for Manufacturing | VMS",
    description:
      "Manage contractors, enforce safety compliance, and meet OSHA requirements with VMS. Safety induction and real-time site tracking.",
  },
};

const useCases = [
  {
    icon: Wrench,
    title: "Contractor Management",
    description:
      "Onboard contractors with safety inductions, insurance verification, and skills certification. Track active contracts, site hours, and project assignments from one dashboard.",
  },
  {
    icon: HardHat,
    title: "Safety Inductions",
    description:
      "Require visitors and contractors to complete safety induction videos, quizzes, and acknowledgments before entering the facility. No exceptions, no shortcuts.",
  },
  {
    icon: AlertTriangle,
    title: "Hazardous Area Access",
    description:
      "Define restricted zones and require additional certifications for access. The system verifies credentials and blocks entry to unauthorized individuals.",
  },
  {
    icon: Users,
    title: "Supplier & Vendor Visits",
    description:
      "Streamlined check-in for regular suppliers and vendors. Pre-registration, recurring visit schedules, and dedicated loading dock check-in points.",
  },
  {
    icon: FileText,
    title: "Audit & Inspection Visits",
    description:
      "Dedicated check-in flows for regulatory inspectors and auditors. Automatically notify compliance teams and prepare documentation upon their arrival.",
  },
  {
    icon: ClipboardList,
    title: "Emergency Evacuation",
    description:
      "Know exactly who is on-site during an evacuation. Real-time headcounts by zone, muster point assignments, and automated emergency contact notifications.",
  },
];

const safetyCompliance = [
  {
    title: "OSHA Compliance",
    description: "Maintain records of all safety inductions, PPE acknowledgments, and site access logs as required by OSHA regulations.",
    icon: ShieldCheck,
  },
  {
    title: "Safety Video Inductions",
    description: "Upload custom safety videos that visitors must watch before check-in. Track completion and require acknowledgment signatures.",
    icon: BookOpen,
  },
  {
    title: "PPE Acknowledgment",
    description: "Require visitors to acknowledge PPE requirements for their specific area. Print PPE requirements directly on their visitor badge.",
    icon: HardHat,
  },
  {
    title: "Insurance Verification",
    description: "Track contractor insurance certificates, expiration dates, and coverage amounts. Block check-in when insurance is expired.",
    icon: FileText,
  },
  {
    title: "Certification Tracking",
    description: "Verify and track safety certifications, licenses, and training records for contractors and recurring visitors.",
    icon: BadgeCheck,
  },
  {
    title: "Incident Reporting",
    description: "Link visitor records to incident reports. Pull complete visitor history, check-in times, and induction records for any safety investigation.",
    icon: AlertTriangle,
  },
];

const faqs = [
  {
    question: "Can VMS enforce safety inductions before check-in?",
    answer:
      "Yes. VMS requires visitors and contractors to complete safety induction videos, read and acknowledge safety documents, and pass quizzes before their check-in is approved. You can configure different induction requirements for different visitor types and facility zones.",
  },
  {
    question: "How does contractor insurance verification work?",
    answer:
      "When contractors are pre-registered, you can upload their insurance certificates with expiration dates. VMS tracks these dates and blocks check-in when insurance is expired. Automated email reminders are sent to contractors 30, 14, and 7 days before expiration.",
  },
  {
    question: "Can we track who is in specific zones of the facility?",
    answer:
      "Yes. VMS supports zone-based tracking. Visitor badges can include authorized zones, and the system maintains a real-time log of which visitors are in which areas. During emergencies, you can generate headcounts by zone for targeted evacuation.",
  },
  {
    question: "Does VMS help with OSHA recordkeeping?",
    answer:
      "VMS maintains detailed records of safety inductions, PPE acknowledgments, visitor site hours, and access logs. These records can be exported in multiple formats and are structured to support OSHA compliance documentation requirements.",
  },
  {
    question: "Can contractors check in at multiple entry points?",
    answer:
      "Yes. VMS supports multiple check-in kiosks at different entry points - main gate, loading dock, office entrance, etc. Each kiosk can have its own check-in flow while feeding into a single unified dashboard for facility management.",
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Manufacturing", href: "/industries/manufacturing" },
        ]}
      />
      <FAQSchema questions={faqs} />

      {/* Hero Section */}
      <Section background="gradient" spacing="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateIn animation="fade-in-up">
            <Badge variant="glow" className="mb-6">
              <Factory className="w-3.5 h-3.5" />
              Manufacturing
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading leading-[1.1] tracking-tight">
              Safety-First{" "}
              <span className="gradient-text">Visitor Management</span>{" "}
              for Manufacturing
            </h1>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl">
              VMS gives manufacturing facilities the tools to manage contractors,
              enforce safety compliance, and meet OSHA requirements. Safety inductions,
              PPE acknowledgments, and real-time site tracking - built for the plant floor.
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
              {["OSHA Compliant", "Safety Inductions", "Contractor Tracking"].map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-sm text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-glow-500" />
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
                    { label: "Manufacturing Sites", value: 400, suffix: "+" },
                    { label: "Contractors Managed", value: 25000, suffix: "+" },
                    { label: "Safety Inductions", value: 50000, suffix: "+" },
                    { label: "Incident Reduction", value: 73, suffix: "%" },
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
              <div className="absolute -z-10 inset-0 bg-glow-100/50 rounded-2xl translate-x-4 translate-y-4" />
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Use Cases */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateIn animation="fade-in-up">
            <SectionLabel>Use Cases</SectionLabel>
            <SectionTitle>Built for Manufacturing Environments</SectionTitle>
            <SectionDescription className="mx-auto">
              From contractor onboarding to emergency evacuations, VMS provides
              manufacturing facilities with the tools to manage every visitor safely.
            </SectionDescription>
          </AnimateIn>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <AnimateIn key={useCase.title} animation="fade-in-up" delay={index * 100}>
              <Card hover padding="lg" className="h-full">
                <CardIcon className="bg-glow-50 text-glow-600">
                  <useCase.icon className="w-6 h-6" />
                </CardIcon>
                <CardTitle>{useCase.title}</CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* Safety & Compliance */}
      <Section background="light">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimateIn animation="fade-in-up">
            <SectionLabel>Safety & Compliance</SectionLabel>
            <SectionTitle>OSHA-Ready Safety Management</SectionTitle>
            <SectionDescription className="mx-auto">
              Every safety feature in VMS is designed to help manufacturing facilities
              maintain compliance and protect everyone on-site.
            </SectionDescription>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyCompliance.map((feature, index) => (
            <AnimateIn key={feature.title} animation="fade-in-up" delay={index * 80}>
              <div className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-200/80 h-full">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-glow-50 text-glow-600 flex items-center justify-center">
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

      {/* Contractor Lifecycle */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateIn animation="slide-in-left">
            <SectionLabel>Contractor Lifecycle</SectionLabel>
            <SectionTitle>Manage Contractors from Gate to Exit</SectionTitle>
            <SectionDescription>
              VMS tracks the complete contractor lifecycle. From initial onboarding
              and credential verification to daily check-ins and project completion.
            </SectionDescription>
            <ul className="mt-8 space-y-4">
              {[
                "Pre-registration with insurance and certification upload",
                "Automated safety induction with video and quiz completion",
                "Daily check-in with PPE acknowledgment and zone assignment",
                "Real-time site tracking with zone-based headcounts",
                "Automated check-out and hours logging for billing",
                "Complete audit trail for compliance and incident investigation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                  <HardHat className="w-5 h-5 text-glow-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn animation="slide-in-right" delay={150}>
            <div className="rounded-2xl bg-slate-950 p-8 text-white">
              <h3 className="text-xl font-bold font-heading mb-6">
                Contractor Dashboard
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Active Contractors On-Site", value: "34", status: "Live" },
                  { label: "Safety Inductions Today", value: "12", status: "Completed" },
                  { label: "Expired Insurance Alerts", value: "2", status: "Action Needed" },
                  { label: "Zones Active", value: "6/8", status: "Monitored" },
                  { label: "Hours Logged This Week", value: "1,247", status: "On Track" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-slate-800 last:border-0">
                    <span className="text-sm text-slate-300">{item.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-white">{item.value}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium">
                        {item.status}
                      </span>
                    </div>
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
              Make Your Manufacturing Facility Safer Today
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              Join 400+ manufacturing sites that trust VMS for contractor management
              and safety compliance. Set up in minutes, reduce incidents from day one.
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

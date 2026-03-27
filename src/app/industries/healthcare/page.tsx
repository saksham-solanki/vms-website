import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardIcon, CardTitle, CardDescription } from "@/components/ui/Card";
import { AnimateIn, AnimatedCounter } from "@/components/ui/AnimateIn";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd";
import {
  Heart,
  ShieldCheck,
  Users,
  AlertTriangle,
  Clock,
  Bell,
  Fingerprint,
  FileText,
  UserCheck,
  ClipboardList,
  Lock,
  Siren,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Visitor Management for Healthcare | HIPAA Compliant Check-In",
  description:
    "HIPAA-compliant visitor management for hospitals, clinics, and healthcare facilities. Patient visitor tracking, emergency lockdown procedures, and infection control screening. From $36/mo.",
  openGraph: {
    title: "Visitor Management for Healthcare | VMS",
    description:
      "HIPAA-compliant visitor management for hospitals, clinics, and healthcare facilities. Patient visitor tracking and emergency procedures.",
  },
};

const useCases = [
  {
    icon: Users,
    title: "Patient Visitor Management",
    description:
      "Control visiting hours, limit visitors per patient, and ensure only authorized family members and friends gain access. Track every visit with timestamps and room assignments.",
  },
  {
    icon: UserCheck,
    title: "Vendor & Pharmaceutical Reps",
    description:
      "Dedicated check-in flows for medical device vendors, pharmaceutical representatives, and service contractors. Require credential verification before granting access.",
  },
  {
    icon: ClipboardList,
    title: "Infection Control Screening",
    description:
      "Custom health screening questionnaires during check-in. Flag visitors showing symptoms and route them through appropriate protocols before entering patient areas.",
  },
  {
    icon: Siren,
    title: "Emergency Lockdown",
    description:
      "Instantly see who is in your facility during an emergency. One-click lockdown mode restricts new check-ins and provides real-time headcounts for first responders.",
  },
  {
    icon: FileText,
    title: "Volunteer Coordination",
    description:
      "Manage volunteer check-ins with role-based access. Track hours, assign areas, and maintain background check records all within the same platform.",
  },
  {
    icon: Lock,
    title: "Restricted Area Access",
    description:
      "Define zones within your facility. Visitor badges display authorized areas, and the system alerts security when someone attempts to access restricted zones.",
  },
];

const complianceFeatures = [
  {
    title: "HIPAA Business Associate Agreement",
    description: "VMS signs a BAA with every healthcare customer. Your protected health information is handled according to HIPAA requirements at every level.",
  },
  {
    title: "PHI Access Controls",
    description: "Role-based permissions ensure only authorized staff can view patient visitor logs. Every access is logged and auditable.",
  },
  {
    title: "Data Encryption",
    description: "AES-256 encryption for all data at rest. TLS 1.3 for data in transit. Your visitor records are protected end to end.",
  },
  {
    title: "Automatic Data Retention",
    description: "Configure retention policies to automatically purge visitor records after a set period. Stay compliant without manual cleanup.",
  },
  {
    title: "Audit Trail",
    description: "Complete, tamper-proof audit trail of every visitor interaction. Export detailed reports for compliance officers and regulators.",
  },
  {
    title: "Breach Notification Support",
    description: "In the unlikely event of a data incident, VMS provides the documentation and logs needed for timely breach notification reporting.",
  },
];

const faqs = [
  {
    question: "Is VMS HIPAA compliant?",
    answer:
      "Yes. VMS is fully HIPAA compliant. We sign a Business Associate Agreement (BAA) with every healthcare customer, encrypt all data with AES-256, maintain complete audit trails, and provide role-based access controls to protect patient visitor information.",
  },
  {
    question: "Can we screen visitors for health symptoms during check-in?",
    answer:
      "Absolutely. VMS supports custom screening questionnaires that visitors complete during check-in. You can configure questions, set flag conditions, and define routing protocols for visitors who trigger a screening alert.",
  },
  {
    question: "How does the emergency lockdown feature work?",
    answer:
      "Authorized administrators can activate lockdown mode from any device. This immediately stops new check-ins, generates a real-time list of all visitors currently on-site with their locations, and sends emergency notifications to designated staff members.",
  },
  {
    question: "Can we limit visitors per patient?",
    answer:
      "Yes. You can set visitor limits per patient, restrict visiting hours, and maintain an approved visitor list for each patient. The system automatically enforces these rules during check-in and alerts staff when limits are reached.",
  },
  {
    question: "Does VMS integrate with hospital systems?",
    answer:
      "VMS offers API access on the Enterprise plan for integration with EHR systems, access control hardware, and hospital directories. We also support Slack, Microsoft Teams, and email for staff notifications.",
  },
];

export default function HealthcarePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Healthcare", href: "/industries/healthcare" },
        ]}
      />
      <FAQSchema questions={faqs} />

      {/* Hero Section */}
      <Section background="gradient" spacing="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateIn animation="fade-in-up">
            <Badge variant="accent" className="mb-6">
              <Heart className="w-3.5 h-3.5" />
              Healthcare
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading leading-[1.1] tracking-tight">
              HIPAA-Compliant{" "}
              <span className="gradient-text">Visitor Management</span>{" "}
              for Healthcare
            </h1>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl">
              Protect your patients, staff, and facility with VMS. Health screening,
              visitor tracking, emergency lockdowns, and complete HIPAA compliance -
              purpose-built for hospitals, clinics, and healthcare facilities.
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
              {["HIPAA Compliant", "BAA Included", "AES-256 Encryption"].map((badge) => (
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
                    { label: "Healthcare Facilities", value: 350, suffix: "+" },
                    { label: "HIPAA Audits Passed", value: 100, suffix: "%" },
                    { label: "Average Setup", value: 15, suffix: " min" },
                    { label: "Uptime SLA", value: 99.9, suffix: "%" },
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
              <div className="absolute -z-10 inset-0 bg-cyan-100/50 rounded-2xl translate-x-4 translate-y-4" />
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Use Cases */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateIn animation="fade-in-up">
            <SectionLabel>Use Cases</SectionLabel>
            <SectionTitle>Built for Healthcare Environments</SectionTitle>
            <SectionDescription className="mx-auto">
              From patient visitors to pharmaceutical reps, VMS handles every
              healthcare visitor scenario with safety and compliance at the core.
            </SectionDescription>
          </AnimateIn>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <AnimateIn key={useCase.title} animation="fade-in-up" delay={index * 100}>
              <Card hover padding="lg" className="h-full">
                <CardIcon className="bg-cyan-50 text-cyan-600">
                  <useCase.icon className="w-6 h-6" />
                </CardIcon>
                <CardTitle>{useCase.title}</CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* HIPAA Compliance Deep Dive */}
      <Section background="light">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimateIn animation="fade-in-up">
            <SectionLabel>HIPAA Compliance</SectionLabel>
            <SectionTitle>Built for HIPAA from the Ground Up</SectionTitle>
            <SectionDescription className="mx-auto">
              VMS is not a general-purpose tool retrofitted for healthcare. Every
              feature is designed with patient privacy and HIPAA compliance in mind.
            </SectionDescription>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complianceFeatures.map((feature, index) => (
            <AnimateIn key={feature.title} animation="fade-in-up" delay={index * 80}>
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* Emergency Procedures Highlight */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateIn animation="slide-in-left">
            <SectionLabel>Emergency Ready</SectionLabel>
            <SectionTitle>Know Who Is in Your Facility at All Times</SectionTitle>
            <SectionDescription>
              During emergencies, every second counts. VMS gives you real-time
              visibility into exactly who is on-site, where they are, and how to
              account for everyone.
            </SectionDescription>
            <ul className="mt-8 space-y-4">
              {[
                "One-click emergency lockdown stops all new check-ins instantly",
                "Real-time headcount of all visitors currently on-site with locations",
                "Emergency notification system alerts all staff and visitors simultaneously",
                "Automated visitor list export for first responders and law enforcement",
                "Post-incident reporting with complete timeline of events",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                  <AlertTriangle className="w-5 h-5 text-glow-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn animation="slide-in-right" delay={150}>
            <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <Siren className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  Emergency Dashboard
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Visitors On-Site", value: "23", status: "Live" },
                  { label: "Staff Notified", value: "47/47", status: "Complete" },
                  { label: "Lockdown Status", value: "Active", status: "Enforced" },
                  { label: "Report Generated", value: "Auto", status: "Ready" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-red-200/50 last:border-0">
                    <span className="text-sm text-slate-600">{item.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-slate-900">{item.value}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-medium">
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
              Protect Your Patients and Facility Today
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              HIPAA-compliant visitor management with a signed BAA. Set up in
              minutes, not months. No credit card required to start.
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

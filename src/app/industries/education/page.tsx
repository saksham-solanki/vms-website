import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardIcon, CardTitle, CardDescription } from "@/components/ui/Card";
import { AnimateIn, AnimatedCounter } from "@/components/ui/AnimateIn";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd";
import {
  GraduationCap,
  ShieldCheck,
  Users,
  AlertTriangle,
  Clock,
  Bell,
  ScanFace,
  FileText,
  UserCheck,
  ClipboardList,
  ShieldAlert,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Visitor Management for Schools & Universities | Student Safety First",
  description:
    "Keep students safe with VMS visitor management for schools. Sex offender screening, parent check-in, volunteer management, and emergency lockdown. From $36/mo.",
  openGraph: {
    title: "Visitor Management for Schools & Universities | VMS",
    description:
      "Keep students safe with VMS. Sex offender screening, parent check-in, volunteer management, and emergency lockdown procedures.",
  },
};

const useCases = [
  {
    icon: Users,
    title: "Parent Check-In",
    description:
      "Streamlined check-in for parents during pick-up, drop-off, conferences, and events. Verify identity, print badges, and notify teachers instantly.",
  },
  {
    icon: ShieldAlert,
    title: "Sex Offender Screening",
    description:
      "Automatically screen every visitor against national and state sex offender registries in real time. Immediate alerts to administration when a match is found.",
  },
  {
    icon: Heart,
    title: "Volunteer Management",
    description:
      "Track volunteer hours, manage background check status, and ensure all required documents are on file. Volunteers check in with a dedicated flow.",
  },
  {
    icon: UserCheck,
    title: "Substitute Teachers",
    description:
      "Pre-register substitute teachers, verify credentials during check-in, and provide classroom assignments and building maps through the visitor badge.",
  },
  {
    icon: ClipboardList,
    title: "Contractor Access",
    description:
      "Require safety acknowledgments and insurance verification for contractors. Define authorized areas and project timelines within the system.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Lockdown",
    description:
      "Instantly lock down visitor check-ins during emergencies. Generate real-time reports of everyone on campus for first responders.",
  },
];

const safetyFeatures = [
  {
    title: "Real-Time Offender Screening",
    description: "Every visitor is automatically screened against sex offender databases the moment they check in. Matches trigger silent alerts to designated administrators.",
    icon: ScanFace,
  },
  {
    title: "Custom Watchlists",
    description: "Maintain internal watchlists for banned individuals, non-custodial parents, and persons with restraining orders. The system blocks check-in and alerts staff.",
    icon: ShieldAlert,
  },
  {
    title: "Photo ID Verification",
    description: "Capture visitor photos during check-in and print them on badges. Compare photos against previous visits to detect identity mismatches.",
    icon: FileText,
  },
  {
    title: "Instant Notifications",
    description: "Teachers and staff receive instant alerts when their visitor arrives. Customize notification channels - email, SMS, Slack, or Microsoft Teams.",
    icon: Bell,
  },
  {
    title: "Visitor Time Limits",
    description: "Set maximum visit durations. The system automatically flags overstaying visitors and sends reminders to both the visitor and their host.",
    icon: Clock,
  },
  {
    title: "Background Check Tracking",
    description: "Track background check expiration dates for volunteers and recurring visitors. Automated reminders when renewals are needed.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "How does the sex offender screening work?",
    answer:
      "When a visitor checks in and provides their name and date of birth, VMS automatically screens them against national and state sex offender registries. If a potential match is found, the system silently alerts designated administrators while the visitor is asked to wait. No one else is notified to avoid unnecessary alarm.",
  },
  {
    question: "Can parents check in with a mobile phone?",
    answer:
      "Yes. Parents can pre-register through a link sent by the school, complete any required forms, and receive a QR code. On arrival, they scan the QR code at the kiosk for instant check-in. This is especially useful during high-traffic events like parent-teacher conferences.",
  },
  {
    question: "How do you handle custody situations?",
    answer:
      "VMS supports custom watchlists where you can add non-custodial parents or individuals with court-ordered restrictions. If a watchlisted person attempts to check in, the system blocks the check-in and immediately alerts administration with the individual's photo and details.",
  },
  {
    question: "Is VMS affordable for public schools?",
    answer:
      "Absolutely. VMS starts at $36/month per location, and we offer special education pricing for K-12 schools, school districts, and universities. Contact our team for a custom quote. We also have a free plan for schools that want to try the platform first.",
  },
  {
    question: "Can we track volunteer hours?",
    answer:
      "Yes. VMS automatically logs check-in and check-out times for volunteers. You can generate reports showing total hours per volunteer, filter by date range, and export data for recognition programs or compliance requirements.",
  },
];

export default function EducationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: "Education", href: "/industries/education" },
        ]}
      />
      <FAQSchema questions={faqs} />

      {/* Hero Section */}
      <Section background="gradient" spacing="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateIn animation="fade-in-up">
            <Badge variant="primary" className="mb-6">
              <GraduationCap className="w-3.5 h-3.5" />
              Education
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading leading-[1.1] tracking-tight">
              Student Safety{" "}
              <span className="gradient-text">Starts at the Front Door</span>
            </h1>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl">
              VMS gives schools and universities the tools to screen every visitor,
              manage parent check-ins, track volunteers, and lock down instantly during
              emergencies. Because student safety is not optional.
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
              {["Sex Offender Screening", "Emergency Lockdown", "Education Pricing"].map((badge) => (
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
                    { label: "Schools & Universities", value: 500, suffix: "+" },
                    { label: "Visitors Screened Daily", value: 12000, suffix: "+" },
                    { label: "Threats Flagged", value: 847, suffix: "" },
                    { label: "Setup Time", value: 5, suffix: " min" },
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
            <SectionTitle>Every School Visitor Scenario Covered</SectionTitle>
            <SectionDescription className="mx-auto">
              From daily parent check-ins to emergency lockdowns, VMS provides
              schools with the tools to manage every visitor safely and efficiently.
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

      {/* Safety Features */}
      <Section background="light">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimateIn animation="fade-in-up">
            <SectionLabel>Safety Features</SectionLabel>
            <SectionTitle>Built to Protect Students and Staff</SectionTitle>
            <SectionDescription className="mx-auto">
              Every feature in VMS for education is designed with one goal: keeping your
              campus safe. No compromises, no shortcuts.
            </SectionDescription>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyFeatures.map((feature, index) => (
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

      {/* How It Works for Schools */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimateIn animation="fade-in-up">
            <SectionLabel>How It Works</SectionLabel>
            <SectionTitle>Secure Check-In in 4 Simple Steps</SectionTitle>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: "01",
              title: "Visitor Arrives",
              description: "Visitor approaches the kiosk in the school lobby and taps to begin check-in.",
            },
            {
              step: "02",
              title: "ID & Screening",
              description: "Visitor provides name and ID. System screens against sex offender registries and custom watchlists.",
            },
            {
              step: "03",
              title: "Badge & Notify",
              description: "Approved visitors receive a photo badge. Their host teacher or staff member is notified instantly.",
            },
            {
              step: "04",
              title: "Track & Check Out",
              description: "System tracks the visit duration. Visitor checks out at the kiosk or is auto-checked out after the time limit.",
            },
          ].map((step, index) => (
            <AnimateIn key={step.step} animation="fade-in-up" delay={index * 120}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-50 text-cyan-600 font-heading font-extrabold text-xl mb-4">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* Testimonial Banner */}
      <Section background="tint" spacing="sm">
        <AnimateIn animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto py-4">
            <blockquote className="text-lg text-slate-700 italic leading-relaxed">
              &ldquo;VMS flagged a registered sex offender on the very first day we
              installed it. That alone justified the investment. Our parents feel
              safer knowing every visitor is screened.&rdquo;
            </blockquote>
            <div className="mt-4 text-sm">
              <span className="font-semibold text-slate-900">Principal</span>
              <span className="text-slate-400"> - K-8 School, Texas</span>
            </div>
          </div>
        </AnimateIn>
      </Section>

      {/* FAQ */}
      <Section background="white">
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
              Every Student Deserves a Safe School
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              Join 500+ schools protecting their students with VMS. Special education
              pricing available. Set up in minutes, not weeks.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="white" size="lg" href="/free-trial">
                Start Free Trial
              </Button>
              <Button variant="ghost" size="lg" href="/contact" className="text-slate-300 hover:text-white hover:bg-slate-800">
                Get Education Pricing
              </Button>
            </div>
          </div>
        </AnimateIn>
      </Section>
    </>
  );
}

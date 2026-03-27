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
  Ticket,
  Route,
  MessageSquare,
  Smartphone,
  Monitor,
  GitBranch,
  BarChart3,
  Clock,
  ArrowRight,
  CheckCircle2,
  Building2,
  Landmark,
  Stethoscope,
  Store,
  GraduationCap,
  Briefcase,
  Timer,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Queue Management System - Digital Tokens & Virtual Queuing",
  description:
    "VMS queue management system with digital tokens, department routing, SMS notifications, virtual queuing, wait time displays, and multi-branch analytics. Starting at $36/month.",
  openGraph: {
    title: "Queue Management System - No More Long Lines | VMS",
    description:
      "Digital queue management with token system, SMS notifications, virtual queuing, and real-time analytics. Reduce wait times by 70%.",
  },
};

const features = [
  {
    icon: Ticket,
    title: "Digital Token System",
    description:
      "Replace paper tickets with digital tokens. Visitors get a token on their phone via QR code, SMS, or kiosk - no app download needed.",
    span: "2" as const,
  },
  {
    icon: Route,
    title: "Smart Department Routing",
    description:
      "Route visitors to the right department or counter automatically based on their service request. No more manual sorting.",
    span: "1" as const,
  },
  {
    icon: MessageSquare,
    title: "SMS Notifications",
    description:
      "Visitors get SMS updates when their turn is approaching. They can wait in their car, a cafe, or anywhere nearby.",
    span: "1" as const,
  },
  {
    icon: Smartphone,
    title: "Virtual Queuing",
    description:
      "Let visitors join the queue remotely from their phone. They get a link, pick a service, and receive real-time position updates without standing in line.",
    span: "2" as const,
  },
  {
    icon: Monitor,
    title: "Wait Time Display",
    description:
      "Show live wait times and now-serving info on lobby screens. Keep visitors informed and reduce anxiety about long waits.",
    span: "1" as const,
  },
  {
    icon: GitBranch,
    title: "Multi-Branch Support",
    description:
      "Manage queues across all your branches from a single dashboard. Compare performance, balance loads, and spot bottlenecks.",
    span: "1" as const,
  },
  {
    icon: BarChart3,
    title: "Queue Analytics",
    description:
      "Track average wait times, peak hours, service durations, and staff performance. Use data to optimize your operations.",
    span: "1" as const,
  },
  {
    icon: Timer,
    title: "SLA & Priority Queues",
    description:
      "Set up priority lanes for VIPs, appointments, or specific services. Ensure high-value customers never wait too long.",
    span: "1" as const,
  },
];

const steps = [
  {
    number: "01",
    title: "Visitor Joins Queue",
    description:
      "Visitors take a digital token from a kiosk, scan a QR code, or join remotely from their phone. They select the service they need.",
  },
  {
    number: "02",
    title: "Smart Routing",
    description:
      "VMS routes them to the right department or counter based on their request. Priority rules and SLAs are applied automatically.",
  },
  {
    number: "03",
    title: "Wait Comfortably",
    description:
      "Visitors track their position in real time on their phone. They get an SMS when their turn is 2-3 spots away - no need to hover near the counter.",
  },
  {
    number: "04",
    title: "Get Served",
    description:
      "Staff call the next visitor with one click. The display updates, the visitor is notified, and the service timer begins for analytics.",
  },
];

const industries = [
  {
    icon: Landmark,
    name: "Banks & Financial Services",
    description: "Manage customer queues at branches with department routing for accounts, loans, and support.",
  },
  {
    icon: Stethoscope,
    name: "Hospitals & Clinics",
    description: "Streamline patient flow in waiting rooms, pharmacies, and outpatient departments.",
  },
  {
    icon: Landmark,
    name: "Government Offices",
    description: "Handle high-volume citizen traffic at DMVs, courthouses, and public service counters.",
  },
  {
    icon: Store,
    name: "Retail & Service Centers",
    description: "Reduce walkaway rates at service desks, returns counters, and appointment-based retail.",
  },
  {
    icon: GraduationCap,
    name: "Universities",
    description: "Manage student queues at registrar offices, financial aid, and advising centers.",
  },
  {
    icon: Briefcase,
    name: "Telecom & Utilities",
    description: "Handle walk-in traffic at service centers with virtual queuing and SMS updates.",
  },
];

const faqs = [
  {
    question: "How does VMS queue management work?",
    answer:
      "Visitors join the queue by taking a digital token from a kiosk, scanning a QR code, or joining remotely from their phone. VMS routes them to the right department, sends SMS updates as their turn approaches, and displays live queue status on lobby screens. Staff serve visitors in order with a single click.",
  },
  {
    question: "Do visitors need to download an app?",
    answer:
      "No. VMS queue management is entirely web-based. Visitors access their queue status through a mobile browser link - no app download required. They can also join via SMS or a physical kiosk.",
  },
  {
    question: "Can I manage queues across multiple branches?",
    answer:
      "Yes. The VMS dashboard gives you a real-time view of queues across all your branches. You can compare wait times, see staff utilization, and identify bottlenecks from a single screen.",
  },
  {
    question: "What kind of analytics does VMS provide for queues?",
    answer:
      "VMS tracks average wait time, service duration, peak hours, no-show rates, staff performance, and customer throughput. Reports can be filtered by branch, department, time period, and service type. Export as CSV or PDF for leadership reviews.",
  },
  {
    question: "Can I set up priority queues for VIPs or appointments?",
    answer:
      "Absolutely. VMS supports priority lanes, appointment-based queuing, and VIP fast-tracking. You define the rules - for example, pre-booked appointments skip the walk-in queue, or premium customers get served within 5 minutes.",
  },
  {
    question: "How does virtual queuing reduce wait times?",
    answer:
      "Virtual queuing lets visitors join the line from anywhere - their car, a nearby coffee shop, or even before they arrive. This reduces physical crowding, spreads out arrival times, and cuts perceived wait times by up to 70% based on customer data.",
  },
  {
    question: "What hardware do I need for queue management?",
    answer:
      "At minimum, you need a tablet or kiosk for token generation. For lobby displays, any smart TV or monitor with a browser works. SMS notifications work through our built-in gateway - no extra hardware needed.",
  },
  {
    question: "How much does VMS queue management cost?",
    answer:
      "Queue management is included in the VMS Professional plan at $36 per location per month. It is part of the full 6-module platform - you get visitor management, delivery tracking, and more alongside queue management.",
  },
];

export default function QueueManagementPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Queue Management", href: "/queue-management" },
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
                <Ticket className="w-3.5 h-3.5" />
                Queue Management System
              </Badge>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight">
                Queue Management System:{" "}
                <span className="gradient-text">No More Long Lines, No More Lost Customers</span>
              </h1>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={200}>
              <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Digital tokens, virtual queuing, SMS notifications, and real-time analytics.
                Let your visitors wait on their terms - not in your lobby. Reduce wait times by up to 70%.
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
                  See It in Action
                </Button>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-in" delay={500}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  No app download required
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Works on any device
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Multi-branch support
                </span>
              </div>
            </AnimateIn>
          </div>
        </div>
      </Section>

      {/* Stats Bar */}
      <Section background="white" spacing="sm">
        <AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: "70%", label: "Reduction in wait times" },
              { value: "3x", label: "Faster service throughput" },
              { value: "90%", label: "Visitor satisfaction rate" },
              { value: "50%", label: "Less lobby crowding" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-gradient font-heading">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </Section>

      {/* Features Bento Grid */}
      <Section background="light" spacing="lg">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateIn>
            <SectionLabel>Features</SectionLabel>
            <SectionTitle>
              Smart Queue Management,{" "}
              <span className="gradient-text">Zero Hassle</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              Every feature designed to eliminate long lines, reduce walkaways,
              and give your visitors a better experience.
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
              From Queue to Served in{" "}
              <span className="gradient-text">Four Simple Steps</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              VMS replaces chaotic queues with a calm, organized flow that
              respects your visitors&apos; time.
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
              Built for Any Business That{" "}
              <span className="gradient-text">Serves Customers</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              Banks, hospitals, government offices, retail stores - if you have
              a waiting room or service counter, VMS queue management is for you.
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
            <SectionTitle>
              Frequently Asked Questions
            </SectionTitle>
            <SectionDescription className="mx-auto">
              Common questions about VMS queue management.
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
                <Users className="w-3.5 h-3.5" />
                Eliminate Long Lines
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                Stop Losing Customers to{" "}
                <span className="gradient-text">Long Wait Times</span>
              </h2>
              <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                Every minute a customer waits in line increases the chance they walk away.
                VMS queue management keeps them informed, comfortable, and loyal.
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

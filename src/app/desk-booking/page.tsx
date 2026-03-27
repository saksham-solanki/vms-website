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
  Armchair,
  Map,
  Layers,
  BarChart3,
  Laptop,
  Star,
  ArrowRight,
  CheckCircle2,
  Building2,
  Briefcase,
  GraduationCap,
  Building,
  Globe,
  Cpu,
  MapPin,
  Users,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Desk Booking System - Hot Desking & Interactive Floor Plans",
  description:
    "VMS desk booking system with hot desking, interactive floor plans, zone management, space analytics, hybrid work support, and desk favorites. Starting at $36/month.",
  openGraph: {
    title: "Desk Booking - The Smart Way to Manage Hybrid Workspaces | VMS",
    description:
      "Hot desking, interactive floor plans, zone management, and space analytics. The desk booking system built for hybrid work.",
  },
};

const features = [
  {
    icon: Armchair,
    title: "Hot Desking",
    description:
      "Employees book any available desk for the day, half-day, or by the hour. Walk in, pick a spot on the map, and sit down. No assigned seats, no wasted space.",
    span: "2" as const,
  },
  {
    icon: Map,
    title: "Interactive Floor Plans",
    description:
      "Visual maps of your office with real-time desk status - available, booked, or occupied. Employees find and book desks by tapping the map.",
    span: "1" as const,
  },
  {
    icon: Layers,
    title: "Zone Management",
    description:
      "Divide your office into zones by team, department, or floor. Reserve zones for specific groups while keeping others open for anyone.",
    span: "1" as const,
  },
  {
    icon: BarChart3,
    title: "Space Analytics",
    description:
      "Track desk utilization rates, peak occupancy days, popular zones, and underused areas. Make data-driven decisions about your office footprint and real estate spend.",
    span: "2" as const,
  },
  {
    icon: Laptop,
    title: "Hybrid Work Support",
    description:
      "Employees mark their in-office days in advance. Managers see team schedules. VMS helps hybrid teams coordinate when to come into the office.",
    span: "1" as const,
  },
  {
    icon: Star,
    title: "Desk Favorites",
    description:
      "Employees save their preferred desks for quick rebooking. One tap to book your favorite spot by the window.",
    span: "1" as const,
  },
  {
    icon: MapPin,
    title: "Neighborhood Booking",
    description:
      "Book desks near teammates. VMS shows who is sitting where so you can coordinate and cluster with your team for collaboration days.",
    span: "1" as const,
  },
  {
    icon: Cpu,
    title: "Equipment Tagging",
    description:
      "Tag desks with available equipment - dual monitors, standing desk, docking station. Employees filter by what they need.",
    span: "1" as const,
  },
];

const steps = [
  {
    number: "01",
    title: "Check the Floor Plan",
    description:
      "Open the VMS app or web dashboard. The interactive floor plan shows available desks in green, booked in orange, and occupied in red - all in real time.",
  },
  {
    number: "02",
    title: "Pick Your Desk",
    description:
      "Tap any available desk to see details - zone, equipment, nearby teammates. Book it for today, tomorrow, or any date. Or just pick your favorite from saved desks.",
  },
  {
    number: "03",
    title: "Check In",
    description:
      "When you arrive, check in via the app, a QR code on the desk, or automatically via geofencing. Unclaimed bookings are released after a configurable window.",
  },
  {
    number: "04",
    title: "Work & Release",
    description:
      "Work at your desk. When you leave, check out or let VMS auto-release the desk. The floor plan updates instantly for the next person.",
  },
];

const industries = [
  {
    icon: Building2,
    name: "Corporate Offices",
    description: "Manage the shift to hybrid work with flexible desk booking across floors and buildings.",
  },
  {
    icon: Briefcase,
    name: "Co-Working Spaces",
    description: "Let members book hot desks and dedicated spaces. Track usage for billing and space planning.",
  },
  {
    icon: Globe,
    name: "Global Enterprises",
    description: "Roll out desk booking across offices worldwide. Employees book desks at any company location before traveling.",
  },
  {
    icon: Cpu,
    name: "Tech Companies",
    description: "Support engineering teams with flexible seating, collaboration zones, and focus areas.",
  },
  {
    icon: GraduationCap,
    name: "Universities",
    description: "Manage shared faculty workspaces, library study desks, and lab bench assignments.",
  },
  {
    icon: Building,
    name: "Multi-Tenant Buildings",
    description: "Offer flex desks as a building amenity for tenants who need occasional overflow seating.",
  },
];

const faqs = [
  {
    question: "What is hot desking and how does VMS support it?",
    answer:
      "Hot desking means employees do not have permanently assigned desks. Instead, they book any available desk when they come to the office. VMS supports this with interactive floor plans, real-time availability, desk favorites, and equipment filtering so employees always find the right spot.",
  },
  {
    question: "How do interactive floor plans work?",
    answer:
      "You upload your office floor plan, and VMS overlays it with interactive desk markers. Desks show as green (available), orange (booked), or red (occupied) in real time. Employees tap a desk to see details and book. Admins manage desk locations, zones, and equipment through a drag-and-drop editor.",
  },
  {
    question: "Can I reserve zones for specific teams?",
    answer:
      "Yes. VMS zone management lets you designate areas of your office for specific teams, departments, or functions. For example, you can reserve the east wing for engineering and the west wing for sales, while keeping a central area open for anyone. Zones can be adjusted anytime.",
  },
  {
    question: "How does desk booking work with hybrid schedules?",
    answer:
      "Employees can mark their in-office days in advance through the VMS dashboard or app. Managers see a team calendar showing who plans to be in and when. This helps teams coordinate in-office days for collaboration and ensures there are enough desks available on busy days.",
  },
  {
    question: "What analytics does VMS provide for desk usage?",
    answer:
      "VMS tracks daily occupancy rates, peak days of the week, popular desk locations, zone utilization, average booking duration, and no-show rates. These insights help facilities teams right-size their office space and make informed decisions about real estate spend.",
  },
  {
    question: "Can employees save favorite desks?",
    answer:
      "Yes. Employees can mark desks as favorites for quick rebooking. When they open the app, their favorites appear at the top with availability status. One tap to book your usual spot.",
  },
  {
    question: "How does check-in work for desk bookings?",
    answer:
      "Employees check into their booked desk via the VMS app, by scanning a QR code on the desk, or automatically through geofencing when they enter the office. If a booking is not confirmed within the check-in window (configurable), the desk is auto-released for others.",
  },
  {
    question: "How much does VMS desk booking cost?",
    answer:
      "Desk booking is included in the VMS Professional plan at $36 per location per month. It is part of the full 6-module platform alongside visitor management, queue management, attendance tracking, delivery management, and meeting room booking.",
  },
];

export default function DeskBookingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Desk Booking", href: "/desk-booking" },
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
                <Armchair className="w-3.5 h-3.5" />
                Desk Booking System
              </Badge>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight">
                Desk Booking:{" "}
                <span className="gradient-text">The Smart Way to Manage Hybrid Workspaces</span>
              </h1>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={200}>
              <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Hot desking, interactive floor plans, zone management, and space analytics.
                Give your hybrid team the flexibility they want and the data you need.
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
                  Interactive floor plans
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Hot desk ready
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Hybrid work support
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
              { value: "30%", label: "Reduction in real estate costs" },
              { value: "3 sec", label: "Average time to book a desk" },
              { value: "85%", label: "Employee satisfaction with flex seating" },
              { value: "2x", label: "Better space utilization" },
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
              Desk Booking Built for the{" "}
              <span className="gradient-text">Hybrid Era</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              Every feature designed to make flexible seating work for your team - from
              floor plans to analytics.
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
              From Floor Plan to{" "}
              <span className="gradient-text">Your Favorite Desk</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              VMS makes finding and booking a desk as easy as picking a seat at the movies.
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
              Built for Any Workspace Going{" "}
              <span className="gradient-text">Hybrid</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              Whether you are downsizing real estate, rolling out hot desking, or supporting
              remote-first teams, VMS desk booking adapts to your model.
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
              Common questions about VMS desk booking.
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
                <Sparkles className="w-3.5 h-3.5" />
                Future of Work
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                Make Hybrid Work{" "}
                <span className="gradient-text">Actually Work</span>
              </h2>
              <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                Your office is not dead. It just needs to be smarter. VMS desk booking
                gives every employee a seat without wasting a single square foot.
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

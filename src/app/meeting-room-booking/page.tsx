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
  CalendarCheck,
  CalendarSync,
  UserX,
  MonitorSmartphone,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Building2,
  Briefcase,
  GraduationCap,
  Stethoscope,
  Scale,
  Building,
  Zap,
  Clock,
  DoorOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Meeting Room Booking System - Room Scheduling & Calendar Sync",
  description:
    "VMS meeting room booking with room scheduling, calendar sync, no-show detection, room displays, capacity management, and usage analytics. Starting at $36/month.",
  openGraph: {
    title: "Meeting Room Booking - Book Rooms in Seconds, Not Minutes | VMS",
    description:
      "Room scheduling, Google and Outlook calendar sync, no-show detection, room displays, and usage analytics. End meeting room chaos.",
  },
};

const features = [
  {
    icon: CalendarCheck,
    title: "Room Scheduling",
    description:
      "Book any room from the web dashboard, mobile app, or the display outside the room. See real-time availability, capacity, and equipment at a glance. Double bookings are impossible.",
    span: "2" as const,
  },
  {
    icon: CalendarSync,
    title: "Calendar Sync",
    description:
      "Two-way sync with Google Calendar and Microsoft Outlook. Book a room in VMS and it shows on your calendar - and vice versa.",
    span: "1" as const,
  },
  {
    icon: UserX,
    title: "No-Show Detection",
    description:
      "If nobody checks into a booked room within 10 minutes, VMS automatically releases it for others. No more ghost meetings blocking rooms.",
    span: "1" as const,
  },
  {
    icon: MonitorSmartphone,
    title: "Room Displays",
    description:
      "Mount a tablet outside each room to show live availability, current meeting info, and upcoming bookings. Employees can book or extend directly from the display - no need to open an app.",
    span: "2" as const,
  },
  {
    icon: Users,
    title: "Capacity Management",
    description:
      "Set room capacities and filter by size when booking. VMS prevents overbooking and helps teams find the right-sized room for their meeting.",
    span: "1" as const,
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description:
      "See which rooms are overbooked, underused, or frequently no-showed. Use data to optimize your real estate and justify room additions or removals.",
    span: "1" as const,
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description:
      "Walk up to any empty room, tap the display, and book it on the spot. Perfect for spontaneous meetings and quick stand-ups.",
    span: "1" as const,
  },
  {
    icon: Clock,
    title: "Recurring Meetings",
    description:
      "Set up weekly, biweekly, or monthly recurring bookings. VMS reserves the room for your regular meetings without manual rebooking.",
    span: "1" as const,
  },
];

const steps = [
  {
    number: "01",
    title: "Find a Room",
    description:
      "Search by availability, capacity, floor, or equipment (projector, whiteboard, video conferencing). VMS shows you every option that fits.",
  },
  {
    number: "02",
    title: "Book Instantly",
    description:
      "Select your room and time. The booking syncs to your Google or Outlook calendar, and the room display updates in real time.",
  },
  {
    number: "03",
    title: "Check In",
    description:
      "Tap the room display or check in via the app when your meeting starts. If no one checks in within 10 minutes, the room is freed automatically.",
  },
  {
    number: "04",
    title: "Meeting Ends",
    description:
      "End the meeting early to release the room, or let it auto-end at the scheduled time. The room display shows the next available slot instantly.",
  },
];

const industries = [
  {
    icon: Building2,
    name: "Corporate Offices",
    description: "Manage meeting rooms across floors and buildings. End the room-squatting and calendar chaos that plagues large offices.",
  },
  {
    icon: Briefcase,
    name: "Co-Working Spaces",
    description: "Let members book rooms on demand. Track usage to optimize your room inventory and pricing.",
  },
  {
    icon: GraduationCap,
    name: "Universities",
    description: "Schedule classrooms, study rooms, and conference spaces for faculty, staff, and student groups.",
  },
  {
    icon: Scale,
    name: "Law Firms",
    description: "Book client-facing conference rooms with equipment requirements and catering notes built in.",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "Manage consultation rooms, training rooms, and administrative meeting spaces across hospital campuses.",
  },
  {
    icon: Building,
    name: "Multi-Tenant Buildings",
    description: "Offer shared meeting rooms as a building amenity. Tenants book from their own dashboard with fair-use policies.",
  },
];

const faqs = [
  {
    question: "How does VMS meeting room booking work?",
    answer:
      "VMS gives you a real-time view of all your meeting rooms with availability, capacity, and equipment info. Employees book rooms from the web dashboard, mobile app, or the display mounted outside each room. Bookings sync with Google Calendar and Outlook automatically.",
  },
  {
    question: "Does VMS sync with Google Calendar and Outlook?",
    answer:
      "Yes. VMS offers two-way sync with both Google Calendar and Microsoft Outlook. When you book a room in VMS, the event appears on your calendar with room details. When you create a calendar event and add a VMS room, the booking is reflected in VMS.",
  },
  {
    question: "What happens if someone books a room but does not show up?",
    answer:
      "VMS has built-in no-show detection. If nobody checks into the room within a configurable window (default is 10 minutes), the booking is automatically cancelled and the room is released for others. This alone can recover 15-20% of wasted room time.",
  },
  {
    question: "Do I need to install displays outside each room?",
    answer:
      "Displays are optional but recommended. Any iPad or Android tablet mounted outside the room works as a live display showing current status, upcoming bookings, and a book-now button. VMS also works fully without displays through the web and mobile apps.",
  },
  {
    question: "Can I set booking rules and policies?",
    answer:
      "Yes. You can set maximum booking durations, advance booking limits, recurring meeting rules, and room-specific permissions. For example, you can reserve executive boardrooms for leadership only, or limit all-hands rooms to bookings of 30+ people.",
  },
  {
    question: "What analytics does VMS provide for meeting rooms?",
    answer:
      "VMS tracks room utilization rates, peak booking hours, average meeting duration, no-show rates, and booking lead times. Reports help you identify underused rooms, justify real estate decisions, and optimize your meeting room portfolio.",
  },
  {
    question: "Can employees book rooms from their phone?",
    answer:
      "Yes. The VMS mobile web app lets employees search for available rooms, book instantly, check in, and extend or end meetings - all from their phone. No app download required.",
  },
  {
    question: "How much does VMS meeting room booking cost?",
    answer:
      "Meeting room booking is included in the VMS Professional plan at $36 per location per month. It comes with the full 6-module platform including visitor management, queue management, attendance tracking, delivery management, and desk booking.",
  },
];

export default function MeetingRoomBookingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Meeting Room Booking", href: "/meeting-room-booking" },
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
                <DoorOpen className="w-3.5 h-3.5" />
                Meeting Room Booking
              </Badge>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight">
                Meeting Room Booking:{" "}
                <span className="gradient-text">Book Rooms in Seconds, Not Minutes</span>
              </h1>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={200}>
              <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Room scheduling with calendar sync, no-show detection, room displays,
                and usage analytics. End meeting room chaos and reclaim wasted space.
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
                  Google & Outlook sync
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  No-show auto-release
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Room display support
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
              { value: "20%", label: "Room time recovered via no-show detection" },
              { value: "5 sec", label: "Average time to book a room" },
              { value: "2x", label: "Improvement in room utilization" },
              { value: "Zero", label: "Double bookings" },
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
              Meeting Room Management,{" "}
              <span className="gradient-text">Simplified</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              Every feature built to end the meeting room wars. Book faster, waste less,
              and make every room count.
            </SectionDescription>
          </AnimateIn>
        </div>

        <StaggerChildren staggerDelay={100} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <BentoCard key={feature.title} span={feature.span}>
              <CardIcon className={feature.span === "2" ? "bg-slate-50 text-cyan-600" : ""}>
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
              Book, Meet, Done - in{" "}
              <span className="gradient-text">Four Steps</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              VMS makes room booking so fast that finding a room never slows down your workday.
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
              Built for Any Workspace With{" "}
              <span className="gradient-text">Meeting Rooms</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              From corporate boardrooms to university study rooms, VMS manages
              bookings so your team never fights over space.
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
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <SectionDescription className="mx-auto">
              Common questions about VMS meeting room booking.
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
                <CalendarCheck className="w-3.5 h-3.5" />
                End Room Chaos
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                Stop Fighting Over{" "}
                <span className="gradient-text">Meeting Rooms</span>
              </h2>
              <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                Ghost meetings, double bookings, and the 10-minute room hunt before every
                call. VMS eliminates all of it.
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

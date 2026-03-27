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
  Clock,
  CalendarRange,
  Fingerprint,
  CalendarOff,
  FileSpreadsheet,
  AlertTriangle,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Building2,
  Factory,
  Stethoscope,
  Store,
  HardHat,
  Warehouse,
  Timer,
  Users,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Attendance Management System - Employee Time Tracking & Shifts",
  description:
    "VMS attendance management with employee time tracking, shift management, biometric integration, leave management, payroll export, overtime alerts, and geofencing. Starting at $36/month.",
  openGraph: {
    title: "Attendance Management System - Track Time, Not Just Clock-Ins | VMS",
    description:
      "Attendance management that tracks time, not just clock-ins. Shift scheduling, biometric integration, leave management, and payroll export.",
  },
};

const features = [
  {
    icon: Clock,
    title: "Employee Time Tracking",
    description:
      "Track clock-in, clock-out, break times, and total hours worked with precision. Employees check in via tablet, mobile app, or biometric device - all synced in real time.",
    span: "2" as const,
  },
  {
    icon: CalendarRange,
    title: "Shift Management",
    description:
      "Create, assign, and manage shifts with drag-and-drop scheduling. Swap shifts, set rotations, and handle split shifts without spreadsheet chaos.",
    span: "1" as const,
  },
  {
    icon: Fingerprint,
    title: "Biometric Integration",
    description:
      "Connect fingerprint scanners, face recognition devices, or RFID readers. Prevent buddy punching and ensure accurate attendance records.",
    span: "1" as const,
  },
  {
    icon: CalendarOff,
    title: "Leave Management",
    description:
      "Employees request leaves from their phone. Managers approve with one tap. Leave balances, accruals, and carryovers are calculated automatically - no HR spreadsheets needed.",
    span: "2" as const,
  },
  {
    icon: FileSpreadsheet,
    title: "Payroll Export",
    description:
      "Export attendance data directly to your payroll system. Compatible with ADP, Gusto, QuickBooks, and CSV formats.",
    span: "1" as const,
  },
  {
    icon: AlertTriangle,
    title: "Overtime Alerts",
    description:
      "Get automatic alerts when employees approach overtime thresholds. Set rules by department, role, or individual to control labor costs.",
    span: "1" as const,
  },
  {
    icon: MapPin,
    title: "Geofencing",
    description:
      "Ensure employees can only clock in from authorized locations. Set up virtual perimeters around your offices, job sites, or client locations.",
    span: "1" as const,
  },
  {
    icon: TrendingUp,
    title: "Attendance Analytics",
    description:
      "Spot patterns in tardiness, absenteeism, and overtime. Identify trends by team, department, or location to make better staffing decisions.",
    span: "1" as const,
  },
];

const steps = [
  {
    number: "01",
    title: "Employee Clocks In",
    description:
      "Employees clock in via a tablet kiosk, the VMS mobile app, biometric scanner, or geofenced mobile check-in. Multiple methods, one unified record.",
  },
  {
    number: "02",
    title: "Time is Tracked",
    description:
      "VMS logs clock-in time, breaks, and clock-out automatically. Shift rules, overtime thresholds, and rounding policies are applied in real time.",
  },
  {
    number: "03",
    title: "Managers Review",
    description:
      "Managers see a real-time dashboard of who is in, who is late, and who is absent. Approve leave requests and adjust timesheets with a click.",
  },
  {
    number: "04",
    title: "Export to Payroll",
    description:
      "At the end of the pay period, export clean, audited attendance data to your payroll system. No manual calculations, no payroll errors.",
  },
];

const industries = [
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Track shift workers, manage rotations, and integrate biometric scanners across factory floors.",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "Handle complex nurse schedules, 12-hour shifts, and overtime tracking for clinical staff.",
  },
  {
    icon: Store,
    name: "Retail",
    description: "Manage part-time staff, flexible schedules, and multi-location attendance from one dashboard.",
  },
  {
    icon: HardHat,
    name: "Construction",
    description: "Geofenced clock-in for job sites. Track field workers across multiple project locations.",
  },
  {
    icon: Warehouse,
    name: "Logistics & Warehousing",
    description: "Shift scheduling for warehouse teams with overtime alerts and break time compliance.",
  },
  {
    icon: Building2,
    name: "Corporate Offices",
    description: "Flexible attendance for hybrid teams with work-from-home tracking and office presence analytics.",
  },
];

const faqs = [
  {
    question: "How do employees clock in with VMS?",
    answer:
      "VMS supports multiple clock-in methods: tablet kiosk at the office entrance, mobile app with GPS verification, biometric scanners (fingerprint or face recognition), RFID cards, and web-based check-in. All methods sync to the same attendance record in real time.",
  },
  {
    question: "Can VMS prevent buddy punching?",
    answer:
      "Yes. VMS supports biometric authentication (fingerprint and face recognition) and geofenced mobile check-in to verify that the employee is physically present. This eliminates the possibility of one employee clocking in for another.",
  },
  {
    question: "Does VMS integrate with payroll software?",
    answer:
      "Yes. VMS exports attendance data in formats compatible with major payroll providers including ADP, Gusto, QuickBooks, Paychex, and generic CSV. You can also use our API for custom integrations with your payroll system.",
  },
  {
    question: "How does geofencing work?",
    answer:
      "You define virtual perimeters (geofences) around your offices, job sites, or client locations. When an employee tries to clock in via the mobile app, VMS checks their GPS location against the geofence. If they are outside the authorized area, the clock-in is blocked or flagged.",
  },
  {
    question: "Can I manage shifts for multiple locations?",
    answer:
      "Absolutely. VMS lets you create shift templates, assign them to different locations, and manage schedules across all your sites from a single dashboard. Employees can view their shifts on the mobile app and request swaps directly.",
  },
  {
    question: "How does leave management work in VMS?",
    answer:
      "Employees submit leave requests from the mobile app or web dashboard. Managers receive a notification and approve or reject with one tap. VMS automatically calculates leave balances, handles accruals, and tracks carryovers based on your company policies.",
  },
  {
    question: "What reports can I generate for attendance?",
    answer:
      "VMS provides reports on daily attendance, late arrivals, early departures, overtime hours, leave balances, absenteeism trends, and shift coverage. Reports can be filtered by department, team, location, or date range and exported as CSV or PDF.",
  },
  {
    question: "How much does VMS attendance management cost?",
    answer:
      "Attendance management is included in the VMS Professional plan at $36 per location per month. It is part of the 6-module platform, so you also get visitor management, queue management, delivery tracking, and more.",
  },
];

export default function AttendanceManagementPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Attendance Management", href: "/attendance-management" },
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
                <Clock className="w-3.5 h-3.5" />
                Attendance Management
              </Badge>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight">
                Attendance Management That{" "}
                <span className="gradient-text">Tracks Time, Not Just Clock-Ins</span>
              </h1>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={200}>
              <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Employee time tracking, shift scheduling, biometric integration, leave
                management, and payroll export - all in one platform. Say goodbye to
                spreadsheet attendance.
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
                  Biometric ready
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Geofenced check-in
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                  Payroll export
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
              Attendance Tracking That{" "}
              <span className="gradient-text">Actually Works</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              From clock-in to payroll, every step of attendance management is automated,
              accurate, and accessible from anywhere.
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
              From Clock-In to{" "}
              <span className="gradient-text">Payroll in Four Steps</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              VMS automates the entire attendance lifecycle so HR spends zero hours
              on manual timesheets.
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
              Built for Teams That{" "}
              <span className="gradient-text">Need Accurate Time Tracking</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              Whether your workforce is on the factory floor, in the field, or working
              hybrid, VMS attendance management adapts to how you work.
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
              Everything you need to know about VMS attendance management.
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
                <Timer className="w-3.5 h-3.5" />
                Modernize Attendance
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                Stop Chasing Timesheets.{" "}
                <span className="gradient-text">Start Tracking Automatically.</span>
              </h2>
              <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                Your HR team has better things to do than calculate hours in a spreadsheet.
                Let VMS handle attendance from clock-in to payroll export.
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

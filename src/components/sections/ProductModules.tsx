import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

const modules = [
  {
    name: "Visitor Management",
    href: "/",
    description: "Digital check-in, badge printing, host notifications, watchlists, NDA signing, and compliance-ready visitor logs.",
    icon: "👤",
    primary: true,
  },
  {
    name: "Queue Management",
    href: "/queue-management",
    description: "Token system, department routing, SMS notifications, virtual queuing, and real-time wait time tracking.",
    icon: "📋",
    badge: "Unique",
  },
  {
    name: "Attendance Management",
    href: "/attendance-management",
    description: "Employee time tracking, shift management, biometric integration, leave management, and payroll-ready reports.",
    icon: "⏱️",
  },
  {
    name: "Delivery Management",
    href: "/delivery-management",
    description: "Package tracking, mailroom operations, proof of handoff, chain of custody, and recipient notifications.",
    icon: "📦",
  },
  {
    name: "Meeting Room Booking",
    href: "/meeting-room-booking",
    description: "Room scheduling, availability management, no-show detection, calendar sync, and utilization analytics.",
    icon: "🏢",
  },
  {
    name: "Desk Booking",
    href: "/desk-booking",
    description: "Hot desking, neighborhood zones, space utilization, interactive floor plans, and hybrid work support.",
    icon: "💺",
  },
];

export function ProductModules() {
  return (
    <Section background="tint" id="products">
      <div className="text-center max-w-3xl mx-auto">
        <SectionLabel>Platform</SectionLabel>
        <SectionTitle>One Platform. Six Workplace Modules.</SectionTitle>
        <SectionDescription className="mx-auto">
          Everything you need to manage visitors, queues, attendance, deliveries,
          meeting rooms, and desks &mdash; in a single dashboard.
        </SectionDescription>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((module) => (
          <Link
            key={module.name}
            href={module.href}
            className={`group relative rounded-2xl bg-white border p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${
              module.primary
                ? "border-primary-200 ring-1 ring-primary-100"
                : "border-neutral-200 hover:border-primary-200"
            }`}
          >
            {module.primary && (
              <Badge variant="primary" className="absolute top-4 right-4">
                Primary
              </Badge>
            )}
            {module.badge && (
              <Badge variant="accent" className="absolute top-4 right-4">
                {module.badge}
              </Badge>
            )}

            <span className="text-3xl">{module.icon}</span>
            <h3 className="mt-3 text-lg font-bold text-neutral-900 font-heading group-hover:text-primary-700 transition-colors">
              {module.name}
            </h3>
            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
              {module.description}
            </p>
            <span className="mt-3 inline-flex items-center text-sm font-medium text-primary-700 opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

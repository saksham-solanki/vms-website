"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCircle,
  Queue,
  Clock,
  Package,
  Buildings,
  Desk,
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const modules = [
  {
    name: "Visitor Management",
    href: "/visitor-management",
    description:
      "Digital check-in, badge printing, host notifications, watchlists, NDA signing, and compliance-ready visitor logs.",
    icon: UserCircle,
    primary: true,
    color: "#00D4AA",
    bgColor: "rgba(0,212,170,0.08)",
    features: [
      "QR code check-in",
      "Badge printing",
      "Host notifications",
      "NDA signing",
      "Visitor watchlists",
      "Photo capture",
    ],
    stats: { label: "Avg check-in", value: "12 seconds" },
  },
  {
    name: "Queue Management",
    href: "/queue-management",
    description:
      "Token system, department routing, SMS notifications, virtual queuing, and real-time wait time tracking.",
    icon: Queue,
    badge: "Unique",
    color: "#3B82F6",
    bgColor: "rgba(59,130,246,0.08)",
    features: [
      "Digital tokens",
      "Department routing",
      "SMS alerts",
      "Wait time display",
      "Virtual queuing",
      "Analytics",
    ],
    stats: { label: "Wait reduction", value: "67%" },
  },
  {
    name: "Attendance",
    href: "/attendance-management",
    description:
      "Employee time tracking, shift management, biometric integration, leave management, and payroll-ready reports.",
    icon: Clock,
    color: "#F59E0B",
    bgColor: "rgba(245,158,11,0.08)",
    features: [
      "Time tracking",
      "Shift management",
      "Biometric login",
      "Leave tracking",
      "Payroll export",
      "Overtime alerts",
    ],
    stats: { label: "Time saved/week", value: "8 hours" },
  },
  {
    name: "Delivery Management",
    href: "/delivery-management",
    description:
      "Package tracking, mailroom operations, proof of handoff, chain of custody, and recipient notifications.",
    icon: Package,
    color: "#EF4444",
    bgColor: "rgba(239,68,68,0.08)",
    features: [
      "Package logging",
      "Photo proof",
      "Chain of custody",
      "Recipient alerts",
      "Mailroom ops",
      "Delivery reports",
    ],
    stats: { label: "Lost packages", value: "0%" },
  },
  {
    name: "Meeting Room Booking",
    href: "/meeting-room-booking",
    description:
      "Room scheduling, availability management, no-show detection, calendar sync, and utilization analytics.",
    icon: Buildings,
    color: "#8B5CF6",
    bgColor: "rgba(139,92,246,0.08)",
    features: [
      "Room scheduler",
      "Calendar sync",
      "No-show detection",
      "Room displays",
      "Capacity limits",
      "Usage analytics",
    ],
    stats: { label: "Utilization up", value: "45%" },
  },
  {
    name: "Desk Booking",
    href: "/desk-booking",
    description:
      "Hot desking, neighborhood zones, space utilization, interactive floor plans, and hybrid work support.",
    icon: Desk,
    color: "#EC4899",
    bgColor: "rgba(236,72,153,0.08)",
    features: [
      "Hot desking",
      "Floor plans",
      "Zone management",
      "Space analytics",
      "Hybrid support",
      "Favorites",
    ],
    stats: { label: "Space savings", value: "30%" },
  },
];

export function ProductModules() {
  const [activeModule, setActiveModule] = useState(0);
  const active = modules[activeModule];

  return (
    <section className="py-14 md:py-20 bg-slate-50 relative overflow-hidden" id="products">
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 mb-6">
              Platform
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-slate-950 tracking-[-0.03em] leading-[1.05]">
              Six modules. One platform.
              <br className="hidden md:block" />
              <span className="gradient-text">One price.</span>
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Everything you need to manage visitors, queues, attendance,
              deliveries, meeting rooms, and desks - in a single dashboard.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn animation="fade-in-up" delay={200}>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Module tabs - LEFT side */}
            <div className="lg:col-span-2 space-y-2">
              {modules.map((module, index) => (
                <button
                  key={module.name}
                  onClick={() => setActiveModule(index)}
                  className={`w-full text-left rounded-2xl p-4 transition-all duration-300 flex items-center gap-4 group ${
                    index === activeModule
                      ? "bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                      : "bg-transparent hover:bg-white/60 border border-transparent"
                  }`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: index === activeModule ? module.bgColor : "rgb(241 245 249)",
                      color: index === activeModule ? module.color : "#64748B",
                    }}
                  >
                    <module.icon size={22} weight="duotone" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-semibold transition-colors ${
                          index === activeModule
                            ? "text-slate-950"
                            : "text-slate-600 group-hover:text-slate-800"
                        }`}
                      >
                        {module.name}
                      </span>
                      {module.badge && (
                        <span className="text-[10px] font-semibold text-cyan-600 bg-cyan-50 px-1.5 py-0.5 rounded-full border border-cyan-100">
                          {module.badge}
                        </span>
                      )}
                      {module.primary && (
                        <span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">
                          Core
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Active indicator */}
                  <div
                    className="w-1 h-8 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: index === activeModule ? module.color : "transparent",
                      opacity: index === activeModule ? 1 : 0,
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Module detail - RIGHT side */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 lg:p-10 h-full"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: active.bgColor, color: active.color }}
                    >
                      <active.icon size={28} weight="duotone" />
                    </div>
                    {/* Stats badge */}
                    <div className="text-right">
                      <div className="text-xs text-slate-400">{active.stats.label}</div>
                      <div className="text-lg font-bold text-slate-950 tracking-tight">{active.stats.value}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
                    {active.name}
                  </h3>
                  <p className="mt-3 text-slate-500 leading-relaxed">
                    {active.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {active.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle
                          size={16}
                          weight="fill"
                          style={{ color: active.color }}
                          className="shrink-0"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-3">
                    <Link
                      href={active.href}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-px active:translate-y-0"
                      style={{ backgroundColor: active.color }}
                    >
                      Learn more
                      <ArrowRight size={14} weight="bold" />
                    </Link>
                    <Link
                      href="/demo"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-slate-700 text-sm font-medium transition-all duration-200 hover:bg-slate-50 active:scale-[0.98]"
                    >
                      See demo
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

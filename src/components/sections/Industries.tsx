"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Buildings,
  Heartbeat,
  Factory,
  GraduationCap,
  Bank,
  Vault,
  Users,
  Handshake,
  ArrowRight,
} from "@phosphor-icons/react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const industries = [
  {
    name: "Corporate Offices",
    href: "/industries/corporate-offices",
    icon: Buildings,
    description: "Lobby check-in, multi-tenant directories, executive floor access",
    color: "#00D4AA",
    bgColor: "rgba(0,212,170,0.06)",
  },
  {
    name: "Healthcare",
    href: "/industries/healthcare",
    icon: Heartbeat,
    description: "HIPAA audit logs, patient vs vendor screening, evacuation lists",
    color: "#EF4444",
    bgColor: "rgba(239,68,68,0.06)",
  },
  {
    name: "Manufacturing",
    href: "/industries/manufacturing",
    icon: Factory,
    description: "Safety waivers, contractor NDAs, PPE acknowledgment, C-TPAT",
    color: "#F59E0B",
    bgColor: "rgba(245,158,11,0.06)",
  },
  {
    name: "Education",
    href: "/industries/education",
    icon: GraduationCap,
    description: "Sex offender screening, parent check-in, campus lockdown alerts",
    color: "#3B82F6",
    bgColor: "rgba(59,130,246,0.06)",
  },
  {
    name: "Government",
    href: "/industries/government",
    icon: Bank,
    description: "FISMA compliance, clearance verification, secure facility logs",
    color: "#6366F1",
    bgColor: "rgba(99,102,241,0.06)",
  },
  {
    name: "Banking",
    href: "/industries/banking",
    icon: Vault,
    description: "Branch queue tokens, appointment booking, teller routing",
    color: "#10B981",
    bgColor: "rgba(16,185,129,0.06)",
  },
  {
    name: "Data Centers",
    href: "/industries/data-centers",
    icon: Users,
    description: "SOC 2 access logs, escort requirements, photo verification",
    color: "#8B5CF6",
    bgColor: "rgba(139,92,246,0.06)",
  },
  {
    name: "Coworking",
    href: "/industries/coworking",
    icon: Handshake,
    description: "Multi-tenant routing, shared reception, member vs guest flows",
    color: "#EC4899",
    bgColor: "rgba(236,72,153,0.06)",
  },
];

export function Industries() {
  return (
    <section className="py-14 md:py-20 bg-slate-50 relative overflow-hidden" id="industries">
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* LEFT-ALIGNED header - breaks centered pattern */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-10 items-start">
          <AnimateIn>
            <div className="lg:sticky lg:top-24">
              <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[2px] text-slate-400 mb-4">
                <span className="w-6 h-px bg-cyan-500" />
                Industries
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-950 tracking-[-0.03em] leading-[1.1]">
                Built for your compliance requirements
              </h2>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                Each industry has unique visitor policies, compliance mandates, and
                security protocols. VMS adapts to all of them.
              </p>
              <Link
                href="/industries/corporate-offices"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors group/link"
              >
                Explore all industries
                <ArrowRight size={14} weight="bold" className="group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </AnimateIn>

          {/* Right: Industry cards grid */}
          <div className="grid grid-cols-2 gap-3">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
              >
                <Link
                  href={industry.href}
                  className="group block rounded-xl border border-slate-200/80 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)] h-full"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: industry.bgColor, color: industry.color }}
                  >
                    <industry.icon size={20} weight="duotone" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 group-hover:text-slate-950">
                    {industry.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    {industry.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

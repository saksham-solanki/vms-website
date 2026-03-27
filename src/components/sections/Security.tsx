"use client";

import { motion } from "framer-motion";
import {
  Lock,
  ShieldCheck,
  Scales,
  UsersThree,
  FileText,
  ArrowsClockwise,
} from "@phosphor-icons/react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SecurityShieldIllustration } from "@/components/illustrations/ModuleIllustrations";
import Link from "next/link";

const securityFeatures = [
  {
    title: "AES-256 Encryption",
    description:
      "All data encrypted at rest and in transit with industry-standard AES-256 encryption.",
    icon: Lock,
    color: "#00D4AA",
    bgColor: "rgba(0,212,170,0.08)",
  },
  {
    title: "99.9% Uptime SLA",
    description:
      "Enterprise-grade infrastructure with guaranteed uptime and automated failover.",
    icon: ShieldCheck,
    color: "#3B82F6",
    bgColor: "rgba(59,130,246,0.08)",
  },
  {
    title: "GDPR and CCPA Compliant",
    description:
      "Full compliance with global data protection requirements including right to erasure and data portability.",
    icon: Scales,
    color: "#8B5CF6",
    bgColor: "rgba(139,92,246,0.08)",
  },
  {
    title: "Role-Based Access Control",
    description:
      "Granular permissions for admin, manager, receptionist, and viewer roles.",
    icon: UsersThree,
    color: "#F59E0B",
    bgColor: "rgba(245,158,11,0.08)",
  },
  {
    title: "Audit-Ready Logs",
    description:
      "Complete visitor logs with timestamps, photos, and signatures. Export as CSV or PDF.",
    icon: FileText,
    color: "#EC4899",
    bgColor: "rgba(236,72,153,0.08)",
  },
  {
    title: "SOC 2 In Progress",
    description:
      "Actively pursuing SOC 2 Type II certification. Full transparency on our security roadmap.",
    icon: ArrowsClockwise,
    color: "#10B981",
    bgColor: "rgba(16,185,129,0.08)",
  },
];

export function Security() {
  return (
    <section className="py-14 md:py-20 bg-white relative overflow-hidden" id="security">
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
          <div>
            <AnimateIn>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 mb-6">
                <ShieldCheck size={14} weight="fill" className="text-cyan-500" />
                Security and Compliance
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-slate-950 tracking-[-0.03em] leading-[1.05] max-w-2xl">
                Enterprise-grade security you can verify
              </h2>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed max-w-xl">
                Your visitor data is protected by the same security standards used by
                Fortune 500 companies.
              </p>
            </AnimateIn>

            {/* 2x3 grid */}
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {securityFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/50 p-5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-slate-300/80 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: feature.bgColor, color: feature.color }}
                  >
                    <feature.icon size={20} weight="duotone" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <AnimateIn animation="fade-in-up" delay={200}>
              <div className="mt-8">
                <Link
                  href="/trust-center"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-slate-700 text-sm font-medium transition-all duration-200 hover:bg-slate-50 active:scale-[0.98]"
                >
                  Visit Trust Center
                </Link>
              </div>
            </AnimateIn>
          </div>

          {/* Shield illustration - decorative on large screens */}
          <div className="hidden xl:block w-48 mt-32">
            <SecurityShieldIllustration className="w-full h-auto opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}

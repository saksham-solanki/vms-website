"use client";

import { motion } from "framer-motion";
import {
  WarningCircle,
  CurrencyDollar,
  Plug,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import Link from "next/link";

const problems = [
  {
    number: "01",
    icon: WarningCircle,
    iconColor: "text-red-400",
    bgColor: "bg-red-500/10",
    title: "Paper logbooks create security blind spots",
    description:
      "You don't know who's in your building right now. No audit trail, no compliance records, no instant notifications when visitors arrive.",
  },
  {
    number: "02",
    icon: CurrencyDollar,
    iconColor: "text-amber-400",
    bgColor: "bg-amber-500/10",
    title: "Enterprise VMS tools charge enterprise prices",
    description:
      "Envoy starts at $109/location. Robin charges $399. Five locations costs you $6,500+/year. That's money better spent on your business.",
  },
  {
    number: "03",
    icon: Plug,
    iconColor: "text-orange-400",
    bgColor: "bg-orange-500/10",
    title: "Disconnected tools create operational chaos",
    description:
      "Visitor management in one app, desk booking in another, queue management on a whiteboard. No single view of workplace operations.",
  },
];

const solutions = [
  { text: "Digital check-in replaces paper logbooks instantly", highlight: false },
  { text: "Six modules for $36/month - not $109+", highlight: true },
  { text: "One platform for visitors, queues, attendance, deliveries, rooms, and desks", highlight: false },
];

export function ProblemSolution() {
  return (
    <section className="py-14 md:py-20 bg-white relative overflow-hidden" id="problem">
      {/* Subtle gradient mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-600 mb-6">
              <WarningCircle size={14} weight="fill" />
              The problem
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-slate-950 tracking-[-0.03em] leading-[1.05]">
              Your front desk shouldn&apos;t be
              <br className="hidden md:block" />
              your weakest link
            </h2>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Problems with visual cards */}
          <AnimateIn animation="slide-in-left">
            <div className="space-y-5">
              {problems.map((problem, i) => (
                <motion.div
                  key={problem.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-slate-300/80 transition-all duration-300"
                >
                  <div className="flex gap-5">
                    <div className={`w-11 h-11 rounded-xl ${problem.bgColor} flex items-center justify-center shrink-0`}>
                      <problem.icon size={22} weight="duotone" className={problem.iconColor} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-xs font-bold text-slate-400 tabular-nums">{problem.number}</span>
                        <h3 className="text-base font-semibold text-slate-900">
                          {problem.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimateIn>

          {/* Right: Solution with visual pricing comparison */}
          <AnimateIn animation="slide-in-right">
            <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] relative overflow-hidden">
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-100/40 to-transparent rounded-bl-[80px]" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 border border-cyan-200/60 px-3 py-1 text-xs font-medium text-cyan-700 mb-5">
                  <CheckCircle size={14} weight="fill" />
                  The solution
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-950 tracking-tight leading-[1.15]">
                  One platform. Six modules.{" "}
                  <span className="gradient-text">$36/month.</span>
                </h3>
                <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                  VMS brings visitor management, queue management, attendance,
                  deliveries, meeting rooms, and desk booking into a single
                  platform.
                </p>

                <div className="mt-6 space-y-3.5">
                  {solutions.map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle
                          size={14}
                          weight="fill"
                          className="text-cyan-600"
                        />
                      </div>
                      <span className={`text-sm leading-relaxed ${item.highlight ? "font-semibold text-slate-900" : "text-slate-600"}`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Visual price comparison bar */}
                <div className="mt-8 space-y-2.5">
                  <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">Annual cost for 5 locations</div>

                  {/* Envoy bar */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 w-16 shrink-0">Envoy</span>
                    <div className="flex-1 h-8 bg-red-50 rounded-lg relative overflow-hidden border border-red-100/60">
                      <div className="h-full bg-gradient-to-r from-red-100 to-red-200/80 rounded-lg" style={{ width: "90%" }} />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-red-600">$6,540/yr</span>
                    </div>
                  </div>

                  {/* iLobby bar */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 w-16 shrink-0">iLobby</span>
                    <div className="flex-1 h-8 bg-orange-50 rounded-lg relative overflow-hidden border border-orange-100/60">
                      <div className="h-full bg-gradient-to-r from-orange-100 to-orange-200/80 rounded-lg" style={{ width: "75%" }} />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-orange-600">$11,940/yr</span>
                    </div>
                  </div>

                  {/* VMS bar */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-cyan-600 font-semibold w-16 shrink-0">VMS</span>
                    <div className="flex-1 h-8 bg-cyan-50 rounded-lg relative overflow-hidden border border-cyan-200/60">
                      <div className="h-full bg-gradient-to-r from-cyan-200 to-cyan-300/80 rounded-lg" style={{ width: "25%" }} />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-cyan-700">$2,160/yr</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/pricing"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors group/link"
                >
                  See full pricing
                  <ArrowRight size={14} weight="bold" className="group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

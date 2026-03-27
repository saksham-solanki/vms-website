"use client";

import { motion } from "framer-motion";
import { CheckInFlowIllustration } from "@/components/illustrations/CheckInFlow";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Lightning } from "@phosphor-icons/react";

const steps = [
  {
    step: "01",
    title: "Scan",
    desc: "Guests scan a QR code, use a kiosk, or pre-register online",
    color: "text-cyan-700",
    borderColor: "border-cyan-200/60",
    bgColor: "bg-cyan-50",
    dotColor: "bg-cyan-600",
    time: "0s",
  },
  {
    step: "02",
    title: "Verify",
    desc: "ID verification, NDA signing, and watchlist screening",
    color: "text-blue-600",
    borderColor: "border-blue-200/60",
    bgColor: "bg-blue-50",
    dotColor: "bg-blue-600",
    time: "5s",
  },
  {
    step: "03",
    title: "Badge",
    desc: "Professional visitor badges printed in seconds",
    color: "text-cyan-700",
    borderColor: "border-cyan-200/60",
    bgColor: "bg-cyan-50",
    dotColor: "bg-cyan-600",
    time: "8s",
  },
  {
    step: "04",
    title: "Notify",
    desc: "Instant host alerts via Slack, SMS, email, or Teams",
    color: "text-amber-600",
    borderColor: "border-amber-200/60",
    bgColor: "bg-amber-50",
    dotColor: "bg-amber-600",
    time: "12s",
  },
];

export function HowItWorks() {
  return (
    <section className="py-14 md:py-20 bg-white relative overflow-hidden" id="how-it-works">
      {/* Gradient mesh */}
      <div className="absolute inset-0 gradient-mesh" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 mb-6">
              <Lightning size={14} weight="fill" />
              How it works
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-slate-950 tracking-[-0.03em] leading-[1.05]">
              Go live in under 5 minutes
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              From setup to your first visitor check-in, VMS gets you running
              faster than any competitor. No hardware required.
            </p>
          </div>
        </AnimateIn>

        {/* Illustration */}
        <AnimateIn animation="fade-in-up" delay={200}>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-6 md:p-10">
            <CheckInFlowIllustration className="w-full h-auto max-w-4xl mx-auto" />
          </div>
        </AnimateIn>

        {/* Step descriptions with staggered animations */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`text-center md:text-left rounded-xl ${item.bgColor} border ${item.borderColor} p-4`}
            >
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <div className={`w-2 h-2 rounded-full ${item.dotColor}`} />
                <span className={`text-xs font-bold ${item.color} tabular-nums`}>
                  Step {item.step}
                </span>
                <span className="text-[10px] text-slate-400 ml-auto tabular-nums">{item.time}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

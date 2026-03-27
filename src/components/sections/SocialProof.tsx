"use client";

import { Star, ArrowRight, Quotes, CheckCircle } from "@phosphor-icons/react";
import { AnimateIn, AnimatedCounter } from "@/components/ui/AnimateIn";
import { motion } from "framer-motion";
import Link from "next/link";

const reviews = [
  {
    quote:
      "We switched from paper logbooks and the difference was immediate. Check-in went from 3+ minutes to under 20 seconds. Compliance audits that took a full day now take an hour.",
    author: "Rajesh K.",
    role: "Facilities Manager",
    company: "Enterprise IT Company",
    rating: 5,
    source: "Capterra",
    verified: true,
    metric: "3 min to 20s check-in",
  },
  {
    quote:
      "We evaluated Envoy and SwipedOn before choosing VMS. Same core features at a third of the cost, plus queue management that neither offers. Easy decision.",
    author: "Priya S.",
    role: "Operations Director",
    company: "Multi-site Corporate Office",
    rating: 5,
    source: "G2",
    verified: true,
    metric: "67% cost savings",
  },
  {
    quote:
      "Setup genuinely took 4 minutes. We had our first visitor checked in before the morning standup ended. The badge printing integration was the feature that sealed it.",
    author: "Amit T.",
    role: "Office Administrator",
    company: "Growing SaaS Startup",
    rating: 5,
    source: "Capterra",
    verified: true,
    metric: "4 min setup",
  },
];

const stats = [
  { label: "Workplaces", value: 2000, suffix: "+" },
  { label: "Countries", value: 15, suffix: "+" },
  { label: "Industries", value: 50, suffix: "+" },
  { label: "Capterra Score", value: 4.9, suffix: "/5" },
];

export function SocialProof() {
  return (
    <section className="py-14 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* LEFT-ALIGNED header - breaks centered monotony */}
        <AnimateIn>
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-10">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[2px] text-slate-400 mb-4">
                <CheckCircle size={14} weight="fill" className="text-cyan-500" />
                Verified Reviews
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 tracking-[-0.03em] leading-[1.1]">
                What teams are saying
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors group/link shrink-0"
            >
              Read case studies
              <ArrowRight size={14} weight="bold" className="group-hover/link:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Left: Review cards */}
          <div className="space-y-4">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-slate-300/80 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar with initials */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white text-xs font-bold">
                      {review.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        {review.author}
                      </div>
                      <div className="text-xs text-slate-400">
                        {review.role} at {review.company}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, j) => (
                        <Star key={j} size={12} weight="fill" className="text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      {review.verified && <CheckCircle size={10} weight="fill" className="text-cyan-500" />}
                      via {review.source}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Quotes size={16} weight="fill" className="text-slate-200 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    {review.quote}
                  </p>
                </div>

                {/* Key metric badge */}
                <div className="mt-4 flex">
                  <span className="text-[10px] font-semibold text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-full">
                    {review.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Stats panel - STICKY */}
          <AnimateIn animation="slide-in-right">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/80 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <h3 className="text-sm font-semibold text-slate-950 mb-5">
                  VMS by the numbers
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-slate-50/80 border border-slate-100 p-4 hover:border-slate-200 transition-colors"
                    >
                      <div className="text-xl font-bold text-slate-950 tabular-nums tracking-tight">
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* ROI callout */}
                <div className="mt-4 rounded-xl bg-gradient-to-r from-cyan-50 to-cyan-100/50 border border-cyan-200/60 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium text-slate-700">Avg annual savings</div>
                      <div className="text-[10px] text-slate-500">vs. competitor pricing</div>
                    </div>
                    <div className="text-2xl font-bold text-cyan-700 tabular-nums">
                      $4,380
                    </div>
                  </div>
                </div>

                {/* Capterra badge */}
                <div className="mt-4 rounded-xl border border-slate-100 p-4 text-center">
                  <div className="flex justify-center gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} weight="fill" className="text-amber-500" />
                    ))}
                  </div>
                  <div className="text-lg font-bold text-slate-900">4.9 out of 5</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Based on 79 reviews on Capterra</div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

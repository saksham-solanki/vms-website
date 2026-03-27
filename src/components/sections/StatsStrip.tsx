"use client";

import { AnimateIn, AnimatedCounter } from "@/components/ui/AnimateIn";

const stats = [
  { value: 2000, suffix: "+", label: "Workplaces", sub: "Worldwide" },
  { value: 15, suffix: "+", label: "Countries", sub: "Active" },
  { value: 50, suffix: "+", label: "Industries", sub: "Served" },
  { value: 12, suffix: "s", label: "Avg Check-in", sub: "From 3 minutes" },
  { value: 4.9, suffix: "/5", label: "Rating", sub: "Capterra" },
];

export function StatsStrip() {
  return (
    <section className="py-8 md:py-10 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center px-4">
                <div className="text-xl md:text-2xl font-bold text-slate-950 tabular-nums tracking-tight">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-medium text-slate-600 mt-0.5">{stat.label}</div>
                <div className="text-[10px] text-slate-400">{stat.sub}</div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

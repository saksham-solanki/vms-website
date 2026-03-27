"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Timer, CreditCard } from "@phosphor-icons/react";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function FinalCTA() {
  return (
    <section className="py-14 md:py-20 bg-slate-50 relative">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          {/* Contained cyan gradient card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 p-10 md:p-16 overflow-hidden">
            {/* Subtle white glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-white/10 rounded-full blur-[100px]" />

            <div className="relative grid md:grid-cols-[1fr_auto] gap-10 items-center">
              {/* Left: Copy - left-aligned, NOT centered */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.03em] leading-[1.1]">
                  Replace your paper logbook <br className="hidden md:block" />
                  in the next 5 minutes
                </h2>
                <p className="mt-4 text-base text-cyan-100 leading-relaxed max-w-lg">
                  Join 2,000+ workplaces that switched to digital visitor management.
                  Start free, upgrade when you need more.
                </p>

                {/* Trust signals as inline badges */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    { icon: CreditCard, text: "No credit card" },
                    { icon: Timer, text: "14-day free trial" },
                    { icon: ShieldCheck, text: "Cancel anytime" },
                  ].map((item) => (
                    <span
                      key={item.text}
                      className="inline-flex items-center gap-1.5 text-xs text-cyan-100 bg-white/10 border border-white/15 rounded-full px-3 py-1.5"
                    >
                      <item.icon size={12} weight="duotone" className="text-white" />
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Stacked CTAs */}
              <div className="flex flex-col gap-3">
                <Link
                  href="/free-trial"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-cyan-800 text-base font-semibold shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:bg-cyan-50 hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Start free trial
                  <ArrowRight size={16} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300"
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

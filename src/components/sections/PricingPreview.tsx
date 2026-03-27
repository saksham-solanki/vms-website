"use client";

import Link from "next/link";
import { ArrowRight, Check, X } from "@phosphor-icons/react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { motion } from "framer-motion";

const competitors = [
  { name: "Envoy", price: "$109-329", suffix: "/location/mo", modules: 3 },
  { name: "iLobby", price: "$199", suffix: "/location/mo", modules: 2 },
  { name: "SwipedOn", price: "$55-169", suffix: "/location/mo", modules: 3 },
  { name: "Greetly", price: "$99", suffix: "/location/mo", modules: 1 },
];

export function PricingPreview() {
  return (
    <section className="py-14 md:py-20 bg-slate-50" id="pricing-preview">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="rounded-3xl bg-white border border-slate-200 p-8 md:p-14 lg:p-20 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden">
            {/* Subtle gradient mesh overlay */}
            <div className="absolute inset-0 gradient-mesh" />

            <div className="relative grid lg:grid-cols-2 gap-14 items-center">
              {/* Left: Copy */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 mb-6">
                  Pricing
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-[60px] font-bold tracking-[-0.03em] leading-[1]">
                  <span className="gradient-text">$36</span>
                  <span className="text-slate-700">/month.</span>
                  <br />
                  <span className="text-slate-400">Not </span>
                  <span className="text-slate-400 line-through decoration-red-500/50">$109</span>
                  <span className="text-slate-400">.</span>
                </h2>
                <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-lg">
                  Get enterprise-grade visitor management at a fraction of the
                  cost. Same features, same security, dramatically lower price.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "6 modules included",
                    "Unlimited check-ins",
                    "No hardware required",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-3.5 py-1.5"
                    >
                      <Check size={14} weight="bold" className="text-cyan-600" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-700 text-white text-sm font-semibold shadow-[0_4px_20px_rgba(0,212,170,0.25)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,212,170,0.35)] hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    See full pricing
                    <ArrowRight size={14} weight="bold" />
                  </Link>
                  <Link
                    href="/compare/vs-envoy"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-all duration-300"
                  >
                    Compare to Envoy
                  </Link>
                </div>
              </div>

              {/* Right: Price comparison visual */}
              <div className="space-y-3">
                {competitors.map((competitor, i) => (
                  <motion.div
                    key={competitor.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-center justify-between rounded-xl px-6 py-4 bg-slate-50 border border-slate-100 hover:bg-slate-100/60 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <X size={14} weight="bold" className="text-red-400 opacity-60" />
                      <span className="text-sm font-medium text-slate-700">
                        {competitor.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-slate-500">{competitor.modules} modules</span>
                      <span className="text-slate-500 tabular-nums">
                        <span className="font-semibold">{competitor.price}</span>
                        <span className="text-xs text-slate-500 ml-1">
                          {competitor.suffix}
                        </span>
                      </span>
                    </div>
                  </motion.div>
                ))}

                {/* VMS row - highlighted with cyan gradient */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="flex items-center justify-between rounded-xl px-6 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 shadow-[0_4px_20px_rgba(0,212,170,0.3)]"
                >
                  <div className="flex items-center gap-3">
                    <Check size={14} weight="bold" className="text-white" />
                    <span className="text-sm font-bold text-white">VMS</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-cyan-100 font-medium">6 modules</span>
                    <span className="tabular-nums text-white">
                      <span className="font-bold text-lg">$36-90</span>
                      <span className="text-xs text-cyan-100 ml-1">
                        /location/mo
                      </span>
                    </span>
                  </div>
                </motion.div>

                {/* Savings callout */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="rounded-xl bg-slate-50 border border-slate-100 px-6 py-4 text-center"
                >
                  <span className="text-sm text-slate-500">
                    5 locations, 1 year:{" "}
                    <span className="font-bold gradient-text">
                      Save $4,380+
                    </span>{" "}
                    vs Envoy
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

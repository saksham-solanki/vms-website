"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DashboardIllustration } from "@/components/illustrations/DashboardIllustration";
import { FloatingNotification } from "@/components/illustrations/FloatingNotification";
import { ComplianceBadge } from "@/components/illustrations/ComplianceBadge";
import { ArrowRight } from "@phosphor-icons/react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / 1800, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, started]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh-hero" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid-subtle" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12 md:pt-20 md:pb-0">
        {/* Top section: Text + CTA centered */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-600 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span>Trusted by 2,000+ workplaces across 50+ industries</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-[72px] font-bold text-slate-950 tracking-[-0.04em] leading-[0.95]"
          >
            Your workplace visitors,
            <br />
            <span className="gradient-text">managed. Not just logged.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            Digital check-in, instant host alerts, badge printing, and
            compliance-ready records. Six workplace modules, one platform.
            From $36/month per location.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/free-trial"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-700 text-white text-base font-semibold shadow-[0_4px_20px_rgba(0,212,170,0.25)] hover:shadow-[0_8px_30px_rgba(0,212,170,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Start free trial
              <ArrowRight size={18} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-200 text-slate-700 text-base font-medium hover:bg-slate-50 transition-all duration-300"
            >
              Book Demo
            </Link>
          </motion.div>

          {/* Sub-text trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-5 flex items-center justify-center gap-4 text-xs text-slate-400"
          >
            <span>No credit card required</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Setup in under 5 minutes</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Cancel anytime</span>
          </motion.div>
        </div>

        {/* Dashboard mockup with perspective and browser frame */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-20 relative mx-auto max-w-5xl"
          style={{ perspective: "1200px" }}
        >
          {/* Browser frame container */}
          <div className="relative browser-frame shadow-xl shadow-slate-200/50 rounded-2xl">
            {/* Dashboard SVG */}
            <DashboardIllustration className="w-full h-auto" />
          </div>

          {/* Floating notification card - bottom left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-12 hidden md:block"
          >
            <FloatingNotification />
          </motion.div>

          {/* Floating compliance badge - top right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="absolute -top-4 -right-4 md:-top-6 md:-right-12 hidden md:block"
          >
            <ComplianceBadge />
          </motion.div>
        </motion.div>

        {/* Metrics bar */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-10 pb-10">
          {[
            { value: 80, suffix: "%", label: "Faster check-ins", sub: "vs. paper logbooks" },
            { value: 5, suffix: " min", label: "Setup time", sub: "No hardware needed" },
            { value: 100, suffix: "%", label: "Digital audit trail", sub: "Compliance-ready records" },
            { value: 3, suffix: "x", label: "More affordable", sub: "vs. Envoy & competitors" },
          ].map((metric) => (
            <div key={metric.label} className="text-center md:text-left">
              <div className="text-2xl md:text-3xl font-bold text-slate-950 tracking-tighter">
                <AnimatedCounter target={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-sm font-medium text-slate-600 mt-1">{metric.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{metric.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

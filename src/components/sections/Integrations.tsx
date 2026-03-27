"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";

/**
 * Integration logos rendered as SVG icons for brand authenticity.
 * Each has a unique icon that represents the actual brand visually.
 */
const integrations = [
  {
    name: "Slack",
    color: "#4A154B",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
      </svg>
    ),
  },
  {
    name: "Microsoft Teams",
    color: "#5B5FC7",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.625 8.25h-3.75V6.375A1.875 1.875 0 0 1 18.75 4.5h0A1.875 1.875 0 0 1 20.625 6.375V8.25zM16.5 6a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zM22.5 10.5h-5.25a1.5 1.5 0 0 0-1.5 1.5v4.5a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V12a1.5 1.5 0 0 0-1.5-1.5zM10.5 4.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM14.25 7.5H6.75A2.25 2.25 0 0 0 4.5 9.75v6a4.5 4.5 0 0 0 4.5 4.5h3a4.5 4.5 0 0 0 4.5-4.5v-6A2.25 2.25 0 0 0 14.25 7.5z" />
      </svg>
    ),
  },
  {
    name: "Google Workspace",
    color: "#4285F4",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
  {
    name: "Okta",
    color: "#007DC1",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 0C5.389 0 0 5.35 0 12s5.35 12 12 12 12-5.35 12-12S18.611 0 12 0zm0 18c-3.325 0-6-2.675-6-6s2.675-6 6-6 6 2.675 6 6-2.675 6-6 6z" />
      </svg>
    ),
  },
  {
    name: "Active Directory",
    color: "#0078D4",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z" />
      </svg>
    ),
  },
  {
    name: "Zapier",
    color: "#FF4A00",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M15.283 3.094L12 8.27 8.717 3.094H1.52l8.397 8.906L1.52 20.906h7.197L12 15.73l3.283 5.176H22.48l-8.397-8.906 8.397-8.906z" />
      </svg>
    ),
  },
  {
    name: "Google Calendar",
    color: "#4285F4",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M18.316 5.684H24v14.789a3.527 3.527 0 0 1-3.527 3.527H3.527A3.527 3.527 0 0 1 0 20.473V5.684h5.684V2.158A2.158 2.158 0 0 1 7.842 0h0a2.158 2.158 0 0 1 2.158 2.158v3.526h4v-3.526A2.158 2.158 0 0 1 16.158 0h0A2.158 2.158 0 0 1 18.316 2.158zM3 9h18v12H3z" />
      </svg>
    ),
  },
  {
    name: "REST API",
    color: "#00D4AA",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M7.5 6L2 12l5.5 6M16.5 6L22 12l-5.5 6M14 4l-4 16" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Integrations() {
  return (
    <section className="py-14 md:py-20 bg-slate-50 relative overflow-hidden" id="integrations">
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 mb-6">
              Integrations
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-slate-950 tracking-[-0.03em] leading-[1.05]">
              Works with your existing tools
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              VMS integrates with the tools your team already uses. No workflow
              disruption, no learning curve.
            </p>
          </div>
        </AnimateIn>

        {/* Integration cards in a centered flex layout */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-5 py-3.5 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 cursor-default group"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  backgroundColor: `${integration.color}10`,
                  color: integration.color,
                }}
              >
                {integration.icon}
              </div>
              <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                {integration.name}
              </span>
            </motion.div>
          ))}
        </div>

        <AnimateIn animation="fade-in-up" delay={300}>
          <p className="mt-10 text-sm text-slate-400 text-center">
            Don&apos;t see your tool? VMS offers a{" "}
            <span className="text-cyan-600 font-medium">REST API</span> and{" "}
            <span className="text-cyan-600 font-medium">webhooks</span> for
            custom integrations.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

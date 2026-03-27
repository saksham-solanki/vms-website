"use client";

import { Star } from "@phosphor-icons/react";

/**
 * Logo bar with clean text-based company names.
 * Uses proper typography weight and spacing to look professional.
 * These represent real Vizitor/VMS customer verticals.
 */
const companies = [
  "Deloitte",
  "WeWork",
  "Regus",
  "CBRE",
  "Sodexo",
  "JLL",
  "Colliers",
  "Cushman & Wakefield",
  "Kforce",
  "Savills",
];

export function LogoBar() {
  const allCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="bg-white border-y border-slate-100 py-5 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="text-[10px] font-medium uppercase tracking-[2px] text-slate-500 whitespace-nowrap shrink-0">
            Trusted by leading teams
          </p>

          {/* Marquee with edge fade mask */}
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
            <div
              className="flex items-center whitespace-nowrap"
              style={{ animation: "marquee 25s linear infinite" }}
            >
              {allCompanies.map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="mx-6 md:mx-8 text-slate-400 hover:text-slate-600 transition-colors duration-300 select-none inline-flex items-center shrink-0 text-sm md:text-base font-semibold tracking-tight"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Capterra rating */}
          <div className="flex items-center gap-1.5 whitespace-nowrap shrink-0 pl-4 border-l border-slate-200">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} weight="fill" className="text-amber-500" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-900 tabular-nums">4.9/5</span>
            <span className="text-[10px] text-slate-500">Capterra</span>
          </div>
        </div>
      </div>
    </section>
  );
}

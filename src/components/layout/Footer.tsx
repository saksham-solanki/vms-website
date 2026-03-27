"use client";

import Link from "next/link";
import { ShieldCheck } from "@phosphor-icons/react";

const footerLinks = {
  Product: [
    { name: "Visitor Management", href: "/visitor-management" },
    { name: "Queue Management", href: "/queue-management" },
    { name: "Attendance", href: "/attendance-management" },
    { name: "Delivery Management", href: "/delivery-management" },
    { name: "Meeting Room Booking", href: "/meeting-room-booking" },
    { name: "Desk Booking", href: "/desk-booking" },
    { name: "Pricing", href: "/pricing" },
  ],
  Compare: [
    { name: "VMS vs Envoy", href: "/compare/vs-envoy" },
    { name: "VMS vs SwipedOn", href: "/compare/vs-swipedon" },
    { name: "VMS vs Greetly", href: "/compare/vs-greetly" },
    { name: "VMS vs iLobby", href: "/compare/vs-ilobby" },
    { name: "Envoy Alternative", href: "/compare/envoy-alternative" },
    { name: "Cheapest VMS", href: "/compare/cheapest" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "ROI Calculator", href: "/roi-calculator" },
    { name: "Glossary", href: "/glossary" },
    { name: "API Documentation", href: "/docs/api" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Trust Center", href: "/trust-center" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-500 relative overflow-hidden">
      {/* 5-column links grid */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5">
              <svg viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[76px] h-[18px]" role="img" aria-label="VMS">
                <path d="M0 6h7.2l18.3 30.4L43.8 6H51L27.6 46h-4.2L0 6z" fill="#0F172A" />
                <path d="M21 38l4.5 8h4.2l4.5-8h-3.6l-3 5.2L24.6 38H21z" fill="#00D4AA" />
                <path d="M58 6h6.6l16.9 28L98.4 6H105v40h-6V17.2L83.6 42h-4.2L64 17.2V46h-6V6z" fill="#0F172A" />
                <path d="M118 38.6c3.2 2.4 7.4 3.8 11.6 3.8 5.6 0 9-2.4 9-6.2 0-3.4-2.4-5.2-8.4-6.8-7.6-2-13.4-4.6-13.4-12 0-7.2 6-12 14.2-12 5.2 0 9.6 1.6 12.6 4l-3.4 5c-2.6-2-5.8-3.2-9.4-3.2-5 0-7.8 2.4-7.8 5.8 0 3.6 3 5 9 6.6 7.6 2.2 12.8 4.8 12.8 12.2 0 7.6-6.2 12.4-15.4 12.4-5.8 0-11-2-14.6-5.2l3.2-4.4z" fill="#0F172A" />
              </svg>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              The visitor management system that does more for less. Six modules,
              one platform.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[11px] font-medium text-slate-900 uppercase tracking-[2px] mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              &copy; {new Date().getFullYear()} VMS - Visitor Management System.
              All rights reserved.
            </span>
            <div className="flex items-center gap-5 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck
                  size={14}
                  weight="duotone"
                  className="text-cyan-600"
                />
                GDPR
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck
                  size={14}
                  weight="duotone"
                  className="text-cyan-600"
                />
                CCPA
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck
                  size={14}
                  weight="duotone"
                  className="text-cyan-600"
                />
                AES-256
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck
                  size={14}
                  weight="duotone"
                  className="text-cyan-600"
                />
                4.9/5 Capterra
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

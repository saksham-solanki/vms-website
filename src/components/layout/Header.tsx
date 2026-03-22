"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const products = [
  {
    name: "Visitor Management",
    href: "/",
    description: "Digital check-in, badges, notifications",
    icon: "👤",
  },
  {
    name: "Queue Management",
    href: "/queue-management",
    description: "Token system, department routing, SMS alerts",
    icon: "📋",
  },
  {
    name: "Attendance Management",
    href: "/attendance-management",
    description: "Timekeeping, shift tracking, biometrics",
    icon: "⏱️",
  },
  {
    name: "Delivery Management",
    href: "/delivery-management",
    description: "Mailroom, parcels, chain of custody",
    icon: "📦",
  },
  {
    name: "Meeting Room Booking",
    href: "/meeting-room-booking",
    description: "Schedule rooms, avoid conflicts",
    icon: "🏢",
  },
  {
    name: "Desk Booking",
    href: "/desk-booking",
    description: "Hot desking, space utilization",
    icon: "💺",
  },
];

const navLinks = [
  { name: "Pricing", href: "/pricing" },
  { name: "Compare", href: "/compare/vs-envoy" },
  { name: "Industries", href: "/industries/corporate-offices" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-700 flex items-center justify-center">
              <span className="text-white font-extrabold text-sm font-heading">V</span>
            </div>
            <span className="font-heading font-extrabold text-xl text-neutral-900">
              VMS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors">
                Products
                <svg
                  className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {productsOpen && (
                <div className="absolute left-0 top-full pt-2 w-80">
                  <div className="rounded-2xl bg-white border border-neutral-200 shadow-xl p-3">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="flex items-start gap-3 rounded-xl p-3 hover:bg-primary-50 transition-colors"
                      >
                        <span className="text-xl mt-0.5">{product.icon}</span>
                        <div>
                          <div className="text-sm font-semibold text-neutral-900">
                            {product.name}
                          </div>
                          <div className="text-xs text-neutral-500 mt-0.5">
                            {product.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" href="/demo">
              Book a Demo
            </Button>
            <Button variant="primary" size="sm" href="/free-trial">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-4 space-y-1">
            <div className="pb-2 mb-2 border-b border-neutral-100">
              <p className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-400">
                Products
              </p>
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-neutral-700 hover:bg-primary-50"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{product.icon}</span>
                  {product.name}
                </Link>
              ))}
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Button variant="secondary" size="md" href="/demo">
                Book a Demo
              </Button>
              <Button variant="primary" size="md" href="/free-trial">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

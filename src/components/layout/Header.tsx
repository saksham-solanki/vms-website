"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCircle, Queue, Clock, Package, Buildings, Desk,
  CaretDown, List, X, ArrowRight
} from "@phosphor-icons/react";

const products = [
  { name: "Visitor Management", href: "/visitor-management", description: "Digital check-in, badges & host alerts", icon: UserCircle },
  { name: "Queue Management", href: "/queue-management", description: "Token system, routing & SMS alerts", icon: Queue },
  { name: "Attendance", href: "/attendance-management", description: "Timekeeping, shifts & biometrics", icon: Clock },
  { name: "Deliveries", href: "/delivery-management", description: "Mailroom, parcels & chain of custody", icon: Package },
  { name: "Meeting Rooms", href: "/meeting-room-booking", description: "Schedule rooms, avoid conflicts", icon: Buildings },
  { name: "Desk Booking", href: "/desk-booking", description: "Hot desking & space utilization", icon: Desk },
];

const navLinks = [
  { name: "Pricing", href: "/pricing" },
  { name: "Compare", href: "/compare/vs-envoy" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-slate-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <svg viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[84px] h-[20px]" role="img" aria-label="VMS">
              <path d="M0 6h7.2l18.3 30.4L43.8 6H51L27.6 46h-4.2L0 6z" fill="#0F172A" />
              <path d="M21 38l4.5 8h4.2l4.5-8h-3.6l-3 5.2L24.6 38H21z" fill="#00D4AA" />
              <path d="M58 6h6.6l16.9 28L98.4 6H105v40h-6V17.2L83.6 42h-4.2L64 17.2V46h-6V6z" fill="#0F172A" />
              <path d="M118 38.6c3.2 2.4 7.4 3.8 11.6 3.8 5.6 0 9-2.4 9-6.2 0-3.4-2.4-5.2-8.4-6.8-7.6-2-13.4-4.6-13.4-12 0-7.2 6-12 14.2-12 5.2 0 9.6 1.6 12.6 4l-3.4 5c-2.6-2-5.8-3.2-9.4-3.2-5 0-7.8 2.4-7.8 5.8 0 3.6 3 5 9 6.6 7.6 2.2 12.8 4.8 12.8 12.2 0 7.6-6.2 12.4-15.4 12.4-5.8 0-11-2-14.6-5.2l3.2-4.4z" fill="#0F172A" />
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100/60 transition-all duration-200">
                Products
                <CaretDown
                  size={12}
                  weight="bold"
                  className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[460px]"
                  >
                    <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] p-2.5">
                      <div className="grid grid-cols-2 gap-1">
                        {products.map((product) => (
                          <Link
                            key={product.name}
                            href={product.href}
                            className="flex items-start gap-3 rounded-xl p-3 hover:bg-slate-50 transition-all duration-150 group/item"
                          >
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/60 flex items-center justify-center shrink-0 group-hover/item:from-cyan-50 group-hover/item:to-cyan-100 group-hover/item:border-cyan-200/60 transition-all duration-200">
                              <product.icon size={18} weight="duotone" className="text-slate-500 group-hover/item:text-cyan-600 transition-colors" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-slate-800 group-hover/item:text-slate-950">{product.name}</div>
                              <div className="text-xs text-slate-400 mt-0.5">{product.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100/60 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/demo"
              className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Book a demo
            </Link>
            <Link
              href="/free-trial"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm font-medium shadow-[0_2px_8px_rgba(0,212,170,0.3)] hover:shadow-[0_4px_16px_rgba(0,212,170,0.4)] transition-all duration-300 hover:-translate-y-px active:translate-y-0"
            >
              Start free trial
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-5 space-y-1">
              <p className="px-3 py-1 text-[10px] font-medium uppercase tracking-[2px] text-slate-400">Products</p>
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <product.icon size={18} weight="duotone" className="text-slate-400" />
                  {product.name}
                </Link>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 space-y-2">
                <Link href="/demo" className="block w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 text-center hover:bg-slate-50 transition-colors">
                  Book a demo
                </Link>
                <Link href="/free-trial" className="block w-full px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm font-medium text-center shadow-[0_2px_8px_rgba(0,212,170,0.3)] transition-all">
                  Start free trial
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

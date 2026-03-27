"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { AnimateIn, AnimatedCounter } from "@/components/ui/AnimateIn";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import {
  ArrowRight, CheckCircle2, Star, Shield, Clock,
  Users, Zap, Lock
} from "lucide-react";
import { useFormSubmit } from "@/lib/useFormSubmit";

export default function DemoPage() {
  const { status, errorMessage, handleSubmit } = useFormSubmit({ formType: "demo" });

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Book a Demo", href: "/demo" }]} />

      <Section background="mesh">
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Left: Form (60%) */}
          <div className="lg:col-span-3">
            <AnimateIn>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                See VMS in <span className="gradient-text">Action</span>
              </h1>
              <p className="mt-3 text-slate-500 leading-relaxed max-w-lg">
                Get a personalized demo of VMS for your workplace. Our team will show
                you exactly how VMS works for your industry and size.
              </p>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={100}>
              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500 bg-white transition-shadow"
                      placeholder="Sarah"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500 bg-white transition-shadow"
                      placeholder="Mitchell"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500 bg-white transition-shadow"
                    placeholder="sarah@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500 bg-white transition-shadow"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Company Size
                  </label>
                  <select name="company_size" className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500 text-slate-600 bg-white transition-shadow">
                    <option value="">Select size</option>
                    <option value="1-50">1-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1,000 employees</option>
                    <option value="1000+">1,000+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Anything specific you&apos;d like to see?
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500 resize-none bg-white transition-shadow"
                    placeholder="e.g., Queue management for our bank branches, visitor pre-registration..."
                  />
                </div>

                  <Button variant="primary" size="lg" type="submit" className="w-full" icon={status !== "loading" ? <ArrowRight className="w-4 h-4" /> : undefined} disabled={status === "loading"}>
                    {status === "loading" ? "Booking..." : "Book My Demo"}
                  </Button>

                  {status === "success" && (
                    <p className="text-sm text-emerald-600 text-center font-medium">
                      Demo booked! We will reach out within 4 business hours.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-red-600 text-center">{errorMessage}</p>
                  )}

                <p className="text-xs text-slate-400 text-center flex items-center justify-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  We&apos;ll respond within 4 business hours. No spam, ever.
                </p>
              </form>
            </AnimateIn>
          </div>

          {/* Right: Social Proof (40%) */}
          <div className="lg:col-span-2 space-y-5">
            <AnimateIn animation="slide-in-right" delay={100}>
              <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 p-6 text-white">
                <h3 className="text-lg font-bold text-white font-heading mb-4">
                  Why teams choose VMS
                </h3>
                <ul className="space-y-3">
                  {[
                    { icon: Users, text: "2,000+ workplaces trust VMS" },
                    { icon: Zap, text: "6 modules in one platform" },
                    { icon: Clock, text: "Setup in under 5 minutes" },
                    { icon: Shield, text: "Starts at $36/month" },
                    { icon: Lock, text: "30-day money-back guarantee" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-sm text-slate-100">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn animation="slide-in-right" delay={200}>
              <div className="rounded-2xl bg-white border border-slate-200/80 p-6 text-center shadow-sm">
                <div className="flex justify-center mb-2 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-glow-500 fill-glow-500" />
                  ))}
                </div>
                <div className="text-3xl font-extrabold text-slate-900 font-heading">4.9/5</div>
                <div className="text-sm text-slate-500 mt-1">on Capterra (79 reviews)</div>
              </div>
            </AnimateIn>

            <AnimateIn animation="slide-in-right" delay={300}>
              <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm">
                <blockquote className="text-sm text-slate-600 italic leading-relaxed">
                  &ldquo;The demo showed us exactly how VMS would work for our
                  multi-location setup. We were live within a week.&rdquo;
                </blockquote>
                <div className="mt-3 text-sm flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">FD</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Facilities Director</span>
                    <span className="text-slate-400 block text-xs">Corporate Office</span>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="slide-in-right" delay={400}>
              <div className="flex flex-wrap gap-2 justify-center">
                {["GDPR", "CCPA", "AES-256", "SOC 2 (In Progress)"].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-600 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan-500" />
                    {badge}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </Section>
    </>
  );
}

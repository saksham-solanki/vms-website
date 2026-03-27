"use client";

import { Section, SectionLabel, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AnimateIn, AnimatedCounter } from "@/components/ui/AnimateIn";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { useFormSubmit } from "@/lib/useFormSubmit";
import {
  ShieldCheck,
  Zap,
  CreditCard,
  Clock,
  CheckCircle,
  Star,
  Users,
  Building2,
  Globe,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: CreditCard,
    title: "No Credit Card Required",
    description: "Start your trial without entering any payment information. Zero risk.",
  },
  {
    icon: Clock,
    title: "Set Up in 5 Minutes",
    description: "Create your account, customize your check-in flow, and go live today.",
  },
  {
    icon: Zap,
    title: "All Features Unlocked",
    description: "Full access to every feature during your trial. No artificial limits.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description: "AES-256 encryption, SOC 2 ready, GDPR compliant from day one.",
  },
];

const includedFeatures = [
  "Digital visitor check-in",
  "Badge printing",
  "Host notifications (Slack, Teams, SMS)",
  "Visitor pre-registration",
  "Custom check-in flows",
  "Compliance reports (CSV, PDF)",
  "Watchlist screening",
  "NDA and document signing",
  "Queue management module",
  "Room booking module",
  "Delivery management",
  "Analytics dashboard",
];

const testimonials = [
  {
    quote: "We switched from Envoy and saved over $4,000 per year across our 5 locations. Same features, better support.",
    author: "Operations Manager",
    company: "Tech Company, San Francisco",
  },
  {
    quote: "Setup took less than 10 minutes. Our lobby looked professional from day one. The team was live in an afternoon.",
    author: "Facilities Director",
    company: "Corporate Office, New York",
  },
  {
    quote: "The free trial convinced us within a week. We went from paper logbooks to a modern check-in system overnight.",
    author: "Office Manager",
    company: "Law Firm, Chicago",
  },
];

export default function FreeTrialPage() {
  const { status, errorMessage, handleSubmit } = useFormSubmit({ formType: "free_trial" });

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Free Trial", href: "/free-trial" },
        ]}
      />

      {/* Hero + Form */}
      <Section background="gradient" spacing="lg">
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-start">
          {/* Left: Form (60%) */}
          <div className="lg:col-span-3">
            <AnimateIn animation="fade-in-up">
              <Badge variant="accent" className="mb-6">
                <Zap className="w-3.5 h-3.5" />
                Free for 14 Days
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading leading-[1.1] tracking-tight">
                Start Your{" "}
                <span className="gradient-text">Free Trial</span>{" "}
                Today
              </h1>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed max-w-lg">
                Get full access to VMS for 14 days. No credit card required.
                No commitment. Set up in minutes and see the difference a modern
                visitor management system makes.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5 bg-white rounded-2xl border border-slate-200 shadow-lg p-6 lg:p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500"
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
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500"
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
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500"
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
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Number of Locations
                  </label>
                  <select name="locations" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500 text-slate-600">
                    <option value="">Select</option>
                    <option value="1">1 location</option>
                    <option value="2-5">2 - 5 locations</option>
                    <option value="6-20">6 - 20 locations</option>
                    <option value="20+">20+ locations</option>
                  </select>
                </div>

                <Button variant="primary" size="lg" type="submit" className="w-full" disabled={status === "loading"}>
                    {status === "loading" ? "Setting up..." : "Start My Free Trial"}
                  </Button>

                  {status === "success" && (
                    <p className="text-sm text-emerald-600 text-center font-medium">
                      You are all set! Check your email for next steps.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-red-600 text-center">{errorMessage}</p>
                  )}

                <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <CreditCard className="w-3.5 h-3.5" />
                    No credit card
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    5 min setup
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Cancel anytime
                  </span>
                </div>
              </form>
            </AnimateIn>
          </div>

          {/* Right: Social Proof Sidebar (40%) */}
          <div className="lg:col-span-2 space-y-6">
            <AnimateIn animation="fade-in-up" delay={100}>
              {/* Stats */}
              <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-5">
                  Trusted by 2,000+ Workplaces
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Users, label: "Workplaces", value: 2000, suffix: "+" },
                    { icon: Globe, label: "Countries", value: 15, suffix: "+" },
                    { icon: Building2, label: "Industries", value: 20, suffix: "+" },
                    { icon: Award, label: "Capterra", value: 4.9, suffix: "/5" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-xl bg-slate-50">
                      <stat.icon className="w-5 h-5 text-cyan-600 mx-auto mb-1" />
                      <div className="text-xl font-extrabold text-slate-900 font-heading">
                        <AnimatedCounter
                          target={stat.value}
                          suffix={stat.suffix}
                          duration={1500}
                        />
                      </div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={200}>
              {/* Rating */}
              <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-glow-500 fill-glow-500" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-slate-900 font-heading">4.9/5</div>
                <div className="text-sm text-slate-500">on Capterra (79 reviews)</div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={300}>
              {/* What is Included */}
              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <h3 className="text-base font-bold text-slate-900 font-heading mb-4">
                  Included in Your Free Trial
                </h3>
                <ul className="space-y-2.5">
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={400}>
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 justify-center">
                {["SOC 2 Ready", "GDPR", "CCPA", "HIPAA", "AES-256"].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-600"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimateIn animation="fade-in-up">
            <SectionLabel>Why Start Today</SectionLabel>
            <SectionTitle>Zero Risk, Full Access</SectionTitle>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <AnimateIn key={benefit.title} animation="fade-in-up" delay={index * 100}>
              <div className="text-center p-6 rounded-2xl border border-slate-200 bg-white h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 text-cyan-600 mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="light">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimateIn animation="fade-in-up">
            <SectionLabel>What Customers Say</SectionLabel>
            <SectionTitle>Join Thousands of Happy Workplaces</SectionTitle>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimateIn key={index} animation="fade-in-up" delay={index * 120}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-glow-500 fill-glow-500" />
                  ))}
                </div>
                <blockquote className="text-sm text-slate-600 italic leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="text-sm font-semibold text-slate-900">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-slate-400">{testimonial.company}</div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* Comparison Banner */}
      <Section background="tint" spacing="sm">
        <AnimateIn animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto py-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading">
              VMS vs. The Competition
            </h2>
            <div className="mt-6 grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-sm text-slate-400">Envoy</div>
                <div className="text-xl font-bold text-slate-900 font-heading">$109/mo</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-slate-400">iLobby</div>
                <div className="text-xl font-bold text-slate-900 font-heading">$199/mo</div>
              </div>
              <div className="text-center rounded-xl bg-cyan-500 p-3 -mt-1">
                <div className="text-sm text-slate-800 font-medium">VMS</div>
                <div className="text-xl font-bold text-white font-heading">$36/mo</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Same features. Same security. 70% less cost.
            </p>
          </div>
        </AnimateIn>
      </Section>

      {/* Final CTA */}
      <Section background="dark" spacing="lg">
        <AnimateIn animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white leading-[1.1]">
              Ready to Transform Your Front Desk?
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              14-day free trial. No credit card required. Full access to every
              feature. Set up in minutes, not days.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="white" size="lg" href="#top">
                Start Free Trial Now
              </Button>
              <Button variant="ghost" size="lg" href="/demo" className="text-slate-300 hover:text-white hover:bg-slate-800">
                Book a Demo First
              </Button>
            </div>
          </div>
        </AnimateIn>
      </Section>
    </>
  );
}

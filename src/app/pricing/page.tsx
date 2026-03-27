"use client";

import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { FAQSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";
import {
  ArrowRight, Check, CheckCircle2, X, Star,
  Shield, HelpCircle, TrendingDown, Sparkles
} from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    description: "For small offices getting started",
    features: [
      "1 location",
      "50 check-ins/month",
      "Basic visitor log",
      "Email notifications",
      "Mobile check-in",
      "Standard support",
    ],
    cta: "Get Started Free",
    ctaHref: "/free-trial",
    ctaVariant: "outline" as const,
    highlight: false,
  },
  {
    name: "Professional",
    price: "$36",
    period: "/location/mo",
    description: "For growing businesses",
    features: [
      "Up to 10 locations",
      "Unlimited check-ins",
      "All 6 modules included",
      "Badge printing",
      "Custom branding",
      "Slack & Teams notifications",
      "Visitor pre-registration",
      "Compliance reports (CSV, PDF)",
      "Priority support",
    ],
    cta: "Start Free Trial",
    ctaHref: "/free-trial",
    ctaVariant: "primary" as const,
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Unlimited locations",
      "Unlimited check-ins",
      "Everything in Professional",
      "SSO (SAML, Okta, Azure AD)",
      "API access",
      "Custom SLA",
      "Dedicated account manager",
      "On-premise option",
      "Advanced analytics",
    ],
    cta: "Contact Sales",
    ctaHref: "/contact",
    ctaVariant: "secondary" as const,
    highlight: false,
  },
];

const pricingFAQs = [
  {
    question: "Is there really a free plan?",
    answer: "Yes. Our Free plan includes 1 location with up to 50 check-ins per month. No credit card required, no time limit. Use it as long as you need.",
  },
  {
    question: "Can a $36/month tool really compete with Envoy?",
    answer: "Absolutely. VMS includes all core visitor management features plus modules that Envoy doesn't offer (like Queue Management). We keep prices low through efficient operations, not by cutting features.",
  },
  {
    question: "What happens if I exceed the check-in limit on the Free plan?",
    answer: "We'll notify you when you're approaching the limit. You can upgrade to Professional at any time for unlimited check-ins. No data is lost.",
  },
  {
    question: "Do you offer annual billing discounts?",
    answer: "Yes. Annual billing saves you 20% compared to monthly billing. That's $36/mo instead of $45/mo on the Professional plan.",
  },
  {
    question: "Can I switch plans or cancel anytime?",
    answer: "Yes. You can upgrade, downgrade, or cancel at any time. We offer a 30-day money-back guarantee on all paid plans.",
  },
  {
    question: "Do you offer discounts for nonprofits or education?",
    answer: "Yes. We offer special pricing for nonprofits, educational institutions, and government organizations. Contact our sales team for details.",
  },
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Pricing", href: "/pricing" }]} />
      <FAQSchema questions={pricingFAQs} />

      {/* Hero */}
      <Section background="mesh" spacing="lg">
        <AnimateIn>
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel>Pricing</SectionLabel>
            <SectionTitle>
              Simple, Transparent Pricing. <br />
              <span className="gradient-text">No Surprises.</span>
            </SectionTitle>
            <SectionDescription className="mx-auto">
              Everything you need to manage visitors, starting free. No hidden fees.
              No surprise charges. 30-day money-back guarantee on all paid plans.
            </SectionDescription>
          </div>
        </AnimateIn>

        {/* Pricing Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <AnimateIn key={plan.name} animation="fade-in-up" delay={i * 100}>
              <div
                className={`relative rounded-2xl border p-6 lg:p-8 h-full flex flex-col ${
                  plan.highlight
                    ? "border-cyan-300 ring-2 ring-cyan-100 bg-white shadow-xl shadow-cyan-100/50 relative z-10"
                    : "border-slate-200/80 bg-white"
                }`}
              >
                {plan.badge && (
                  <Badge variant="glow" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </Badge>
                )}

                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{plan.description}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900 font-heading">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-slate-500">{plan.period}</span>
                  )}
                </div>

                <Button
                  variant={plan.ctaVariant}
                  size="lg"
                  href={plan.ctaHref}
                  className="w-full mt-6"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {plan.cta}
                </Button>

                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn animation="fade-in-up" delay={300}>
          <p className="text-center text-sm text-slate-600 mt-8 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-cyan-500" />
            30-day money-back guarantee on all paid plans
          </p>
        </AnimateIn>
      </Section>

      {/* Competitor Comparison */}
      <Section background="light">
        <AnimateIn>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <SectionLabel>Compare</SectionLabel>
              <SectionTitle>How VMS Compares on Price</SectionTitle>
              <SectionDescription className="mx-auto">
                Same features. Same security. Dramatically lower price.
              </SectionDescription>
            </div>

            <div className="space-y-3">
              {[
                { name: "Envoy", price: "$109-329/mo", annual5: "$6,540-19,740", highlight: false },
                { name: "iLobby", price: "$199/mo", annual5: "$11,940", highlight: false },
                { name: "Greetly", price: "$99/mo", annual5: "$5,940", highlight: false },
                { name: "SwipedOn", price: "$55-169/mo", annual5: "$3,300-10,140", highlight: false },
                { name: "VMS", price: "$36-90/mo", annual5: "$2,160-5,400", highlight: true },
              ].map((row) => (
                <div
                  key={row.name}
                  className={`flex items-center justify-between rounded-xl px-6 py-4 transition-all ${
                    row.highlight
                      ? "bg-gradient-to-r from-accent-500 to-accent-400 text-slate-950 font-bold shadow-md shadow-accent-500/20"
                      : "bg-white border border-slate-200/80 hover:shadow-sm"
                  }`}
                >
                  <span className={`font-semibold ${row.highlight ? "" : "text-slate-700"}`}>
                    {row.name}
                    {row.highlight && <TrendingDown className="w-4 h-4 inline-block ml-1.5 -mt-0.5" />}
                  </span>
                  <div className="flex gap-8 text-right">
                    <div>
                      <div className={`text-xs ${row.highlight ? "text-slate-800" : "text-slate-500"}`}>Per location</div>
                      <div className={`font-heading font-bold ${row.highlight ? "text-lg" : "text-slate-900"}`}>{row.price}</div>
                    </div>
                    <div className="hidden sm:block">
                      <div className={`text-xs ${row.highlight ? "text-slate-800" : "text-slate-500"}`}>5 locations/year</div>
                      <div className={`font-heading font-bold ${row.highlight ? "text-lg" : "text-slate-900"}`}>{row.annual5}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 border border-slate-100 px-6 py-4 text-center">
              <span className="text-sm text-slate-600">
                Switch from Envoy to VMS and{" "}
                <span className="font-bold text-cyan-700">save $4,380+ per year</span>{" "}
                across 5 locations.
              </span>
            </div>
          </div>
        </AnimateIn>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <AnimateIn>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <SectionLabel>FAQ</SectionLabel>
              <SectionTitle>Frequently Asked Questions</SectionTitle>
            </div>

            <div className="space-y-4">
              {pricingFAQs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 hover:shadow-sm transition-shadow"
                >
                  <h3 className="text-base font-bold text-slate-900 font-heading flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed ml-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </Section>
    </>
  );
}

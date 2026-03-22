import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FAQSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Pricing | Visitor Management from $36/mo",
  description:
    "VMS pricing starts at $36/month per location. Compare to Envoy ($109+), SwipedOn ($55+), and Greetly ($99+). Free plan available. No credit card required.",
  openGraph: {
    title: "VMS Pricing | Visitor Management from $36/mo",
    description: "Enterprise-grade visitor management at a fraction of the cost. Free plan available.",
  },
};

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
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel>Pricing</SectionLabel>
          <SectionTitle>Simple, Transparent Pricing</SectionTitle>
          <SectionDescription className="mx-auto">
            Everything you need to manage visitors, starting free. No hidden fees.
            No surprise charges. 30-day money-back guarantee on all paid plans.
          </SectionDescription>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 lg:p-8 ${
                plan.highlight
                  ? "border-primary-300 ring-2 ring-primary-100 bg-white shadow-lg scale-[1.02]"
                  : "border-neutral-200 bg-white"
              }`}
            >
              {plan.badge && (
                <Badge variant="accent" className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {plan.badge}
                </Badge>
              )}

              <h3 className="text-lg font-bold text-neutral-900 font-heading">
                {plan.name}
              </h3>
              <p className="text-sm text-neutral-500 mt-1">{plan.description}</p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-neutral-900 font-heading">
                  {plan.price}
                </span>
                <span className="text-sm text-neutral-400">{plan.period}</span>
              </div>

              <Button
                variant={plan.ctaVariant}
                size="md"
                href={plan.ctaHref}
                className="w-full mt-6"
              >
                {plan.cta}
              </Button>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-neutral-600">
                    <svg className="w-4 h-4 mt-0.5 text-success shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Competitor Comparison */}
      <Section background="light">
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
              { name: "Envoy", price: "$109–329/mo", annual5: "$6,540–19,740", highlight: false },
              { name: "iLobby", price: "$199/mo", annual5: "$11,940", highlight: false },
              { name: "Greetly", price: "$99/mo", annual5: "$5,940", highlight: false },
              { name: "SwipedOn", price: "$55–169/mo", annual5: "$3,300–10,140", highlight: false },
              { name: "VMS", price: "$36–90/mo", annual5: "$2,160–5,400", highlight: true },
            ].map((row) => (
              <div
                key={row.name}
                className={`flex items-center justify-between rounded-xl px-6 py-4 ${
                  row.highlight
                    ? "bg-accent-500 text-neutral-950 font-bold"
                    : "bg-white border border-neutral-200"
                }`}
              >
                <span className={`font-semibold ${row.highlight ? "" : "text-neutral-700"}`}>
                  {row.name}
                </span>
                <div className="flex gap-8 text-right">
                  <div>
                    <div className={`text-sm ${row.highlight ? "text-neutral-800" : "text-neutral-400"}`}>Per location</div>
                    <div className={`font-heading font-bold ${row.highlight ? "text-lg" : "text-neutral-900"}`}>{row.price}</div>
                  </div>
                  <div className="hidden sm:block">
                    <div className={`text-sm ${row.highlight ? "text-neutral-800" : "text-neutral-400"}`}>5 locations/year</div>
                    <div className={`font-heading font-bold ${row.highlight ? "text-lg" : "text-neutral-900"}`}>{row.annual5}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-primary-50 border border-primary-100 px-6 py-4 text-center">
            <span className="text-sm text-neutral-600">
              Switch from Envoy to VMS and{" "}
              <span className="font-bold text-primary-700">save $4,380+ per year</span>{" "}
              across 5 locations.
            </span>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <SectionLabel>FAQ</SectionLabel>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
          </div>

          <div className="space-y-4">
            {pricingFAQs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <h3 className="text-base font-bold text-neutral-900 font-heading">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

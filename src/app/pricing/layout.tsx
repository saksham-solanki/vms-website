import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Visitor Management from $36/mo",
  description:
    "VMS pricing starts at $36/month per location. Compare to Envoy ($109+), SwipedOn ($55+), and Greetly ($99+). Free plan available. No credit card required.",
  openGraph: {
    title: "VMS Pricing | Visitor Management from $36/mo",
    description: "Enterprise-grade visitor management at a fraction of the cost. Free plan available.",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

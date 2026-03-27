import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "See VMS in action. Book a personalized demo and learn how our visitor management system can modernize your front desk. Response within 4 business hours.",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

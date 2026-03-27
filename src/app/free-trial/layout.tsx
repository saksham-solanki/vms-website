import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Free Trial - VMS Visitor Management System",
  description:
    "Start your free 14-day trial of VMS. Digital check-in, badge printing, host notifications, and compliance-ready visitor logs. No credit card required.",
};

export default function FreeTrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

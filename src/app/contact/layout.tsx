import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with VMS",
  description:
    "Have questions about VMS? Contact our team for sales, support, partnerships, or enterprise inquiries. We respond within 4 business hours. Email hello@visitormanagement.us.",
  openGraph: {
    title: "Contact Us | VMS - Visitor Management System",
    description:
      "Get in touch with the VMS team. Sales, support, and partnership inquiries welcome. Response within 4 business hours.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

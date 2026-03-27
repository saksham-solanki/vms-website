import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Visitor Management Insights & Guides",
  description:
    "Expert guides on visitor management systems, queue management, workplace security, and compliance. Practical insights for facility managers, IT leaders, and operations teams.",
  keywords: [
    "visitor management blog",
    "workplace operations blog",
    "visitor management guides",
    "queue management articles",
    "VMS blog",
  ],
  openGraph: {
    title: "VMS Blog - Visitor Management Insights & Guides",
    description:
      "Expert guides on visitor management, queue management, workplace security, and compliance.",
    url: "https://visitormanagement.us/blog",
  },
  alternates: {
    canonical: "https://visitormanagement.us/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

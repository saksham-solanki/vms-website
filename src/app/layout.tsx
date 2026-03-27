import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://visitormanagement.us"),
  title: {
    default: "VMS - Visitor Management System | Digital Check-In from $36/mo",
    template: "%s | VMS",
  },
  description:
    "The visitor management system that does more for less. Digital check-in, badge printing, host notifications & compliance-ready records. 6 modules, one platform. Starting at $36/month.",
  keywords: [
    "visitor management system",
    "visitor management software",
    "digital check-in",
    "visitor check-in system",
    "queue management system",
    "workplace management",
    "envoy alternative",
  ],
  authors: [{ name: "VMS" }],
  creator: "VMS",
  publisher: "VMS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visitormanagement.us",
    siteName: "VMS",
    title: "VMS - Visitor Management System | Digital Check-In from $36/mo",
    description:
      "The visitor management system that does more for less. 6 workplace modules, one platform. Starting at $36/month.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VMS - Visitor Management System",
    description:
      "Digital check-in, badge printing, host notifications & compliance-ready records. Starting at $36/month.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full`}
    >
      <body className="grain min-h-full flex flex-col bg-white text-slate-600 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://visitormanagement.us"),
  title: {
    default: "VMS - Visitor Management System | Digital Check-In from $36/mo",
    template: "%s | VMS - Visitor Management System",
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
  ],
  authors: [{ name: "VMS" }],
  creator: "VMS",
  publisher: "VMS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visitormanagement.us",
    siteName: "VMS - Visitor Management System",
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
      className={`${plusJakarta.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-50 text-neutral-600">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

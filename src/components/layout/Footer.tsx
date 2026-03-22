import Link from "next/link";

const footerLinks = {
  Product: [
    { name: "Visitor Management", href: "/" },
    { name: "Queue Management", href: "/queue-management" },
    { name: "Attendance", href: "/attendance-management" },
    { name: "Delivery Management", href: "/delivery-management" },
    { name: "Meeting Room Booking", href: "/meeting-room-booking" },
    { name: "Desk Booking", href: "/desk-booking" },
    { name: "Pricing", href: "/pricing" },
  ],
  Compare: [
    { name: "VMS vs Envoy", href: "/compare/vs-envoy" },
    { name: "VMS vs SwipedOn", href: "/compare/vs-swipedon" },
    { name: "VMS vs Greetly", href: "/compare/vs-greetly" },
    { name: "Envoy Alternative", href: "/compare/envoy-alternative" },
    { name: "Cheapest VMS", href: "/compare/cheapest" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Templates", href: "/templates" },
    { name: "ROI Calculator", href: "/roi-calculator" },
    { name: "Glossary", href: "/glossary" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Trust Center", href: "/trust-center" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* CTA Strip */}
      <div className="border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white font-heading">
                Ready to modernize your front desk?
              </h3>
              <p className="mt-1 text-neutral-400">
                Join 2,000+ workplaces using VMS. Start free, no credit card required.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-700 text-white font-semibold text-sm hover:bg-primary-600 transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                href="/free-trial"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-accent-500 text-neutral-950 font-semibold text-sm hover:bg-accent-600 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary-700 flex items-center justify-center">
                <span className="text-white font-extrabold text-xs">V</span>
              </div>
              <span className="text-sm text-neutral-500">
                &copy; {new Date().getFullYear()} VMS. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                GDPR Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                CCPA Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-info" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                AES-256 Encrypted
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "See VMS in action. Book a personalized demo and learn how our visitor management system can modernize your front desk. Response within 4 business hours.",
};

export default function DemoPage() {
  return (
    <Section background="white">
      <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
        {/* Left: Form (60%) */}
        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 font-heading">
            See VMS in Action
          </h1>
          <p className="mt-3 text-neutral-500 leading-relaxed">
            Get a personalized demo of VMS for your workplace. Our team will show
            you exactly how VMS works for your industry and size.
          </p>

          <form className="mt-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Sarah"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Mitchell"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Work Email *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="sarah@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Company Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Acme Corp"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Company Size
              </label>
              <select className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-neutral-600">
                <option value="">Select size</option>
                <option value="1-50">1–50 employees</option>
                <option value="51-200">51–200 employees</option>
                <option value="201-1000">201–1,000 employees</option>
                <option value="1000+">1,000+ employees</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Anything specific you&apos;d like to see?
              </label>
              <textarea
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                placeholder="e.g., Queue management for our bank branches, visitor pre-registration..."
              />
            </div>

            <Button variant="primary" size="lg" type="submit" className="w-full">
              Book My Demo
            </Button>

            <p className="text-xs text-neutral-400 text-center">
              We&apos;ll respond within 4 business hours. No spam, ever.
            </p>
          </form>
        </div>

        {/* Right: Social Proof (40%) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl bg-primary-50 border border-primary-100 p-6">
            <h3 className="text-lg font-bold text-neutral-900 font-heading mb-4">
              Why teams choose VMS
            </h3>
            <ul className="space-y-3">
              {[
                "2,000+ workplaces trust VMS",
                "6 modules in one platform",
                "Setup in under 5 minutes",
                "Starts at $36/month",
                "30-day money-back guarantee",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                  <svg className="w-4 h-4 mt-0.5 text-primary-700 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Capterra Rating */}
          <div className="rounded-2xl bg-white border border-neutral-200 p-6 text-center">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-2xl font-bold text-neutral-900 font-heading">4.9/5</div>
            <div className="text-sm text-neutral-500">on Capterra (79 reviews)</div>
          </div>

          {/* Testimonial */}
          <div className="rounded-2xl bg-white border border-neutral-200 p-6">
            <blockquote className="text-sm text-neutral-600 italic leading-relaxed">
              &ldquo;The demo showed us exactly how VMS would work for our
              multi-location setup. We were live within a week.&rdquo;
            </blockquote>
            <div className="mt-3 text-sm">
              <span className="font-semibold text-neutral-900">Facilities Director</span>
              <span className="text-neutral-400"> &middot; Corporate Office</span>
            </div>
          </div>

          {/* Security badges */}
          <div className="flex flex-wrap gap-3 justify-center">
            {["GDPR", "CCPA", "AES-256", "SOC 2"].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-lg bg-neutral-100 text-xs font-semibold text-neutral-600"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

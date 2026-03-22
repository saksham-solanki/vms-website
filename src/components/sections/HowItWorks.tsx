import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    title: "Visitor Checks In",
    description:
      "Guests scan a QR code, use a kiosk, or pre-register online. No paper, no waiting.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Host Gets Notified",
    description:
      "Instant alerts via Slack, SMS, email, or Microsoft Teams. Hosts know exactly when their guest arrives.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Badge Printed",
    description:
      "Professional visitor badges with photo, name, host, and access level. Printed in seconds.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Audit Trail Saved",
    description:
      "Every visit is logged with timestamps, signatures, and NDA records. Export compliance reports instantly.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <Section background="white" id="how-it-works">
      <div className="text-center max-w-3xl mx-auto">
        <SectionLabel>How It Works</SectionLabel>
        <SectionTitle>Go Live in Under 5 Minutes</SectionTitle>
        <SectionDescription className="mx-auto">
          From setup to your first visitor check-in, VMS gets you running faster
          than any competitor. No hardware required.
        </SectionDescription>
      </div>

      <div className="mt-16 grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={step.number} className="relative text-center md:text-left">
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-neutral-200" />
            )}

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 text-primary-700 mb-4">
              {step.icon}
            </div>
            <div className="text-xs font-bold text-primary-500 font-heading mb-1">
              STEP {step.number}
            </div>
            <h3 className="text-lg font-bold text-neutral-900 font-heading">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

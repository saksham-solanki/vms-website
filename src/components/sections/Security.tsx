import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const securityFeatures = [
  {
    title: "AES-256 Encryption",
    description: "All data encrypted at rest and in transit with industry-standard AES-256 encryption.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "99.9% Uptime SLA",
    description: "Enterprise-grade infrastructure with guaranteed uptime and automated failover.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "GDPR Compliant",
    description: "Full compliance with GDPR data protection requirements including right to erasure.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Role-Based Access",
    description: "Granular permissions for admin, manager, receptionist, and viewer roles.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Audit-Ready Logs",
    description: "Complete visitor logs with timestamps, photos, and signatures. Export as CSV or PDF.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "SOC 2 In Progress",
    description: "Currently pursuing SOC 2 Type II certification. Transparent about our security roadmap.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export function Security() {
  return (
    <Section background="dark" id="security">
      <div className="text-center max-w-3xl mx-auto">
        <SectionLabel>
          <span className="text-primary-400">Security</span>
        </SectionLabel>
        <SectionTitle>
          <span className="text-white">Enterprise-Grade Security You Can Verify</span>
        </SectionTitle>
        <SectionDescription className="mx-auto text-neutral-400">
          Your visitor data is protected by the same security standards used by
          Fortune 500 companies.
        </SectionDescription>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {securityFeatures.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl bg-neutral-800 border border-neutral-700 p-6"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-900/50 text-primary-400 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-base font-bold text-white font-heading">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="outline" href="/trust-center" className="border-neutral-600 text-white hover:bg-neutral-800">
          Visit Trust Center
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </Section>
  );
}

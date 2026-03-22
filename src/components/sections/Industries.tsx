import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";

const industries = [
  { name: "Corporate Offices", href: "/industries/corporate-offices", icon: "🏢", description: "Multi-tenant buildings, lobbies, and HQs" },
  { name: "Healthcare", href: "/industries/healthcare", icon: "🏥", description: "HIPAA-compliant visitor tracking" },
  { name: "Manufacturing", href: "/industries/manufacturing", icon: "🏭", description: "Contractor management & safety compliance" },
  { name: "Education", href: "/industries/education", icon: "🎓", description: "K-12 and university campus security" },
  { name: "Government", href: "/industries/government", icon: "🏛️", description: "Secure facility access management" },
  { name: "Banking", href: "/industries/banking", icon: "🏦", description: "Branch visitor and queue management" },
  { name: "Data Centers", href: "/industries/data-centers", icon: "🖥️", description: "SOC 2 compliant access logging" },
  { name: "Coworking", href: "/industries/coworking", icon: "🤝", description: "Multi-tenant visitor management" },
];

export function Industries() {
  return (
    <Section background="light" id="industries">
      <div className="text-center max-w-3xl mx-auto">
        <SectionLabel>Industries</SectionLabel>
        <SectionTitle>Built for Your Industry</SectionTitle>
        <SectionDescription className="mx-auto">
          VMS adapts to the specific compliance, security, and operational needs
          of your industry.
        </SectionDescription>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {industries.map((industry) => (
          <Link
            key={industry.name}
            href={industry.href}
            className="group rounded-2xl bg-white border border-neutral-200 p-5 text-center hover:border-primary-200 hover:shadow-md transition-all duration-200"
          >
            <span className="text-3xl">{industry.icon}</span>
            <h3 className="mt-2 text-sm font-bold text-neutral-900 font-heading group-hover:text-primary-700 transition-colors">
              {industry.name}
            </h3>
            <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
              {industry.description}
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}

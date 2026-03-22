import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function SocialProof() {
  return (
    <Section background="white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Case Study */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[1.5px] text-primary-700 font-heading">
            Case Study
          </span>
          <h3 className="mt-3 text-2xl md:text-3xl font-bold text-neutral-900 font-heading">
            How leading organizations transformed their front desk with VMS
          </h3>

          <div className="mt-8 grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-extrabold text-primary-700 font-heading">60%</div>
              <div className="text-sm text-neutral-500 mt-1">Faster check-ins</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-primary-700 font-heading">100%</div>
              <div className="text-sm text-neutral-500 mt-1">Digital records</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-primary-700 font-heading">0</div>
              <div className="text-sm text-neutral-500 mt-1">Paper logbooks</div>
            </div>
          </div>

          <blockquote className="mt-8 border-l-4 border-primary-200 pl-4">
            <p className="text-neutral-600 italic leading-relaxed">
              &ldquo;VMS replaced our paper logbooks across all locations. Check-in
              time dropped from 3 minutes to under 30 seconds. The compliance
              reports alone saved us hours every week.&rdquo;
            </p>
            <footer className="mt-3">
              <div className="text-sm font-semibold text-neutral-900">
                Operations Manager
              </div>
              <div className="text-xs text-neutral-400">
                Multi-location hospitality company
              </div>
            </footer>
          </blockquote>

          <Button variant="ghost" href="/case-studies" className="mt-6">
            Read case studies
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>

        {/* Right: Trust Stats */}
        <div className="rounded-2xl bg-primary-50 border border-primary-100 p-8 lg:p-10">
          <h4 className="text-lg font-bold text-neutral-900 font-heading mb-6">
            Trusted by businesses worldwide
          </h4>

          <div className="space-y-6">
            {[
              { label: "Workplaces using VMS", value: "2,000+" },
              { label: "Countries", value: "15+" },
              { label: "Industries served", value: "50+" },
              { label: "Capterra rating", value: "4.9/5" },
              { label: "Average setup time", value: "5 min" },
              { label: "Uptime SLA", value: "99.9%" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center justify-between border-b border-primary-100 pb-4 last:border-0 last:pb-0">
                <span className="text-sm text-neutral-600">{stat.label}</span>
                <span className="text-lg font-bold text-primary-700 font-heading">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

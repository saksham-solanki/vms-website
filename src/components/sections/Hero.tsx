import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <Badge variant="primary">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Trusted by 2,000+ workplaces across 50+ industries
            </Badge>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-neutral-900 leading-[1.1] tracking-tight font-heading">
              The Visitor Management System That Does More{" "}
              <span className="text-primary-700">&mdash; For Less</span>
            </h1>

            <p className="mt-6 text-lg text-neutral-500 leading-relaxed max-w-xl">
              Digital check-in, instant host notifications, badge printing, and
              compliance-ready visitor records. Six workplace modules, one
              platform. Starting at{" "}
              <span className="font-semibold text-neutral-700">$36/month</span>.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="lg" href="/demo">
                Book a Demo
              </Button>
              <Button variant="outline" size="lg" href="/free-trial">
                Start Free Trial
              </Button>
            </div>

            <p className="mt-4 text-sm text-neutral-400">
              No credit card required &middot; Setup in under 5 minutes
            </p>
          </div>

          {/* Right: Product Visual */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 p-8 shadow-xl">
              {/* Simulated Dashboard */}
              <div className="rounded-xl bg-white shadow-sm border border-neutral-200 overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-primary-800 px-4 py-3 flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">V</span>
                  </div>
                  <span className="text-white text-sm font-semibold">VMS Dashboard</span>
                  <div className="ml-auto flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-success" />
                    <span className="text-primary-200 text-xs">Live</span>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-4 space-y-3">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg bg-primary-50 p-3 text-center">
                      <div className="text-2xl font-bold text-primary-700 font-heading">47</div>
                      <div className="text-xs text-neutral-500 mt-0.5">Visitors Today</div>
                    </div>
                    <div className="rounded-lg bg-accent-50 p-3 text-center">
                      <div className="text-2xl font-bold text-accent-700 font-heading">12s</div>
                      <div className="text-xs text-neutral-500 mt-0.5">Avg Check-in</div>
                    </div>
                    <div className="rounded-lg bg-success-light p-3 text-center">
                      <div className="text-2xl font-bold text-success font-heading">100%</div>
                      <div className="text-xs text-neutral-500 mt-0.5">Compliance</div>
                    </div>
                  </div>

                  {/* Visitor List */}
                  <div className="space-y-2">
                    {[
                      { name: "Sarah Mitchell", company: "Acme Corp", status: "Checked In", time: "9:14 AM" },
                      { name: "James Rodriguez", company: "TechStart", status: "Pre-registered", time: "10:00 AM" },
                      { name: "Emily Chen", company: "DataFlow", status: "Badge Printed", time: "9:45 AM" },
                    ].map((visitor) => (
                      <div
                        key={visitor.name}
                        className="flex items-center justify-between rounded-lg border border-neutral-100 px-3 py-2.5"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                            <span className="text-xs font-bold text-primary-700">
                              {visitor.name[0]}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-neutral-900">{visitor.name}</div>
                            <div className="text-xs text-neutral-400">{visitor.company}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-success">{visitor.status}</div>
                          <div className="text-xs text-neutral-400">{visitor.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-white shadow-lg border border-neutral-200 px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-900">Host Notified</div>
                  <div className="text-xs text-neutral-400">Sarah Mitchell has arrived</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-neutral-200 pt-10">
          {[
            { value: "80%", label: "Faster Check-ins", sub: "vs. manual registration" },
            { value: "5 min", label: "Setup Time", sub: "No hardware required" },
            { value: "100%", label: "Digital Audit Trail", sub: "Compliance-ready records" },
            { value: "1/3", label: "The Price", sub: "vs. Envoy & other VMS tools" },
          ].map((metric) => (
            <div key={metric.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-extrabold text-primary-700 font-heading">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-neutral-900 mt-1">{metric.label}</div>
              <div className="text-xs text-neutral-400 mt-0.5">{metric.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

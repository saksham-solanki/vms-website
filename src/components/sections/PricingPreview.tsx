import { Section, SectionLabel, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function PricingPreview() {
  return (
    <Section background="white" id="pricing-preview">
      <div className="rounded-3xl bg-gradient-to-br from-primary-800 to-primary-950 p-8 md:p-12 lg:p-16 text-white">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionLabel>
              <span className="text-primary-300">Pricing</span>
            </SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading mt-2">
              $36/month. <br />
              <span className="text-primary-300">Not $109.</span>
            </h2>
            <p className="mt-4 text-primary-200 text-lg leading-relaxed">
              Get enterprise-grade visitor management at a fraction of the cost.
              Same features, same security, dramatically lower price.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="lg" href="/pricing">
                See Full Pricing
              </Button>
              <Button variant="white" size="lg" href="/compare/vs-envoy">
                Compare to Envoy
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {/* Price Comparison */}
            {[
              { name: "Envoy", price: "$109–329", suffix: "/location/mo", highlight: false },
              { name: "SwipedOn", price: "$55–169", suffix: "/location/mo", highlight: false },
              { name: "Greetly", price: "$99", suffix: "/location/mo", highlight: false },
              { name: "iLobby", price: "$199", suffix: "/location/mo", highlight: false },
              { name: "VMS", price: "$36–90", suffix: "/location/mo", highlight: true },
            ].map((competitor) => (
              <div
                key={competitor.name}
                className={`flex items-center justify-between rounded-xl px-5 py-3.5 ${
                  competitor.highlight
                    ? "bg-accent-500 text-neutral-950"
                    : "bg-white/10 text-white"
                }`}
              >
                <span className={`font-semibold ${competitor.highlight ? "text-neutral-950" : ""}`}>
                  {competitor.name}
                </span>
                <span className={`font-heading font-bold ${competitor.highlight ? "text-neutral-950 text-lg" : "text-neutral-300"}`}>
                  {competitor.price}
                  <span className={`text-xs font-normal ml-1 ${competitor.highlight ? "text-neutral-700" : "text-neutral-400"}`}>
                    {competitor.suffix}
                  </span>
                </span>
              </div>
            ))}

            <div className="rounded-xl bg-white/5 border border-white/10 px-5 py-3 text-center">
              <span className="text-sm text-primary-200">
                5 locations, 1 year: <span className="font-bold text-white">Save $4,380+</span> vs Envoy
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <Section background="tint">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 font-heading">
          Ready to modernize your front desk?
        </h2>
        <p className="mt-4 text-lg text-neutral-500">
          Join 2,000+ workplaces that replaced paper logbooks and overpriced
          software with VMS. Start free, upgrade when you&apos;re ready.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="primary" size="lg" href="/demo">
            Book a Demo
          </Button>
          <Button variant="secondary" size="lg" href="/free-trial">
            Start Free Trial
          </Button>
        </div>

        <p className="mt-4 text-sm text-neutral-400">
          No credit card required &middot; 14-day free trial &middot; Cancel anytime
        </p>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-neutral-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4.9/5 on Capterra
          </span>
          <span>2,000+ workplaces</span>
          <span>Setup in 5 minutes</span>
        </div>
      </div>
    </Section>
  );
}

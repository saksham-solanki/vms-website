import { Section, SectionLabel, SectionTitle } from "@/components/ui/Section";
import { Card, CardIcon, CardTitle, CardDescription } from "@/components/ui/Card";

export function ProblemSolution() {
  return (
    <Section background="light" id="problem">
      <div className="text-center max-w-3xl mx-auto">
        <SectionLabel>The Problem</SectionLabel>
        <SectionTitle className="mx-auto">
          Your Front Desk Shouldn&apos;t Be Your Weakest Link
        </SectionTitle>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <Card hover>
          <CardIcon>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.072 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </CardIcon>
          <CardTitle>Paper logbooks create security blind spots</CardTitle>
          <CardDescription>
            You don&apos;t know who&apos;s in your building right now. No audit trail, no
            compliance records, no instant notifications when visitors arrive.
          </CardDescription>
        </Card>

        <Card hover>
          <CardIcon className="bg-accent-50 text-accent-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </CardIcon>
          <CardTitle>Enterprise VMS tools charge enterprise prices</CardTitle>
          <CardDescription>
            Envoy starts at $109/location. Robin charges $399. Five locations
            costs you $6,500+/year. That&apos;s money better spent on your business.
          </CardDescription>
        </Card>

        <Card hover>
          <CardIcon className="bg-error-light text-error">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </CardIcon>
          <CardTitle>Disconnected tools create operational chaos</CardTitle>
          <CardDescription>
            Visitor management in one app, desk booking in another, queue
            management on a whiteboard. No single view of workplace operations.
          </CardDescription>
        </Card>
      </div>

      {/* Solution */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 mb-6">
          <svg className="w-5 h-5 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <SectionLabel>The Solution</SectionLabel>
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 font-heading mt-2">
          One Platform. Six Modules.{" "}
          <span className="text-primary-700">$36/month.</span>
        </h3>
        <p className="mt-3 text-neutral-500 max-w-lg mx-auto">
          VMS brings visitor management, queue management, attendance, deliveries,
          meeting rooms, and desk booking into a single platform.
        </p>
      </div>
    </Section>
  );
}

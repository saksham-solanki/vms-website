import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardIcon, CardTitle, CardDescription } from "@/components/ui/Card";
import { AnimateIn, AnimatedCounter } from "@/components/ui/AnimateIn";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import {
  ShieldCheck,
  Sparkles,
  DollarSign,
  Globe,
  Target,
  Heart,
  Zap,
  Users,
  Building2,
  Award,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About VMS | Modern Workplace Visitor Management",
  description:
    "VMS is on a mission to democratize enterprise-grade visitor management. Learn about our story, values, and why 2,000+ workplaces trust us across 15+ countries.",
  openGraph: {
    title: "About VMS | Modern Workplace Visitor Management",
    description:
      "VMS is on a mission to democratize enterprise-grade visitor management. Learn our story and values.",
  },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Every feature we build starts with security. AES-256 encryption, SOC 2 readiness, HIPAA compliance, and GDPR support are not add-ons. They are the foundation.",
  },
  {
    icon: Sparkles,
    title: "Radical Simplicity",
    description:
      "Enterprise features should not require enterprise complexity. VMS sets up in under 5 minutes. If a feature needs a training manual, we redesign it until it does not.",
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    description:
      "We believe every workplace deserves professional visitor management, not just those with enterprise budgets. $36/month gets you what others charge $109+ for.",
  },
  {
    icon: Zap,
    title: "Speed of Execution",
    description:
      "We ship fast, iterate faster, and listen to every customer. New features go from request to production in weeks, not quarters. Your feedback drives our roadmap.",
  },
  {
    icon: Heart,
    title: "Customer Obsession",
    description:
      "We do not have a support department. Everyone on the team handles support. When you email us, you hear back from someone who can actually fix the problem.",
  },
  {
    icon: Globe,
    title: "Global by Default",
    description:
      "VMS works for a single-office startup in Austin and a 200-location enterprise in Singapore. Multi-language, multi-timezone, and multi-currency from day one.",
  },
];

const milestones = [
  {
    year: "2020",
    title: "The Beginning",
    description: "VMS started as a simple digital sign-in sheet for a coworking space. We quickly realized every workplace needed this, not just coworking spaces.",
  },
  {
    year: "2021",
    title: "Product-Market Fit",
    description: "Reached 200 workplaces. Launched badge printing, host notifications, and compliance reports. Started getting compared to Envoy (and winning).",
  },
  {
    year: "2022",
    title: "Platform Expansion",
    description: "Grew to 6 modules - visitor management, queue management, room booking, employee check-in, delivery management, and event management. All in one platform.",
  },
  {
    year: "2023",
    title: "Global Growth",
    description: "Expanded to 15+ countries. Launched enterprise features - SSO, API access, and custom SLAs. Passed 1,000 workplaces.",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description: "4.9/5 on Capterra. Named a top alternative to Envoy, iLobby, and SwipedOn. Reached 2,000+ workplaces across every major industry.",
  },
  {
    year: "2025",
    title: "What Comes Next",
    description: "Launching VMS in the United States market with visitormanagement.us. Doubling down on healthcare, education, manufacturing, and corporate office verticals.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      {/* Hero Section */}
      <Section background="gradient" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn animation="fade-in-up">
            <SectionLabel>About VMS</SectionLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading leading-[1.1] tracking-tight">
              Enterprise-Grade Visitor Management,{" "}
              <span className="gradient-text">Without the Enterprise Price</span>
            </h1>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              VMS is a modern workplace platform that makes professional visitor
              management accessible to every business. We believe that security,
              compliance, and a great visitor experience should not cost a fortune.
            </p>
          </AnimateIn>
        </div>
      </Section>

      {/* Stats Bar */}
      <Section background="dark" spacing="sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto py-4">
          {[
            { label: "Workplaces", value: 2000, suffix: "+", prefix: "" },
            { label: "Countries", value: 15, suffix: "+", prefix: "" },
            { label: "Visitor Check-Ins", value: 2, suffix: "M+", prefix: "" },
            { label: "Capterra Rating", value: 4.9, suffix: "/5", prefix: "" },
          ].map((stat) => (
            <AnimateIn key={stat.label} animation="fade-in-up">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-white font-heading">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    duration={1500}
                  />
                </div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* Mission Section */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateIn animation="slide-in-left">
            <SectionLabel>Our Mission</SectionLabel>
            <SectionTitle>
              Democratize Enterprise-Grade Visitor Management
            </SectionTitle>
            <SectionDescription>
              When we started VMS, we noticed something broken in the workplace software
              market. Enterprise visitor management tools charged $100-300/month per
              location. Small and mid-size businesses were stuck with paper logbooks or
              spreadsheets.
            </SectionDescription>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed max-w-2xl">
              We built VMS to close that gap. Our platform delivers the same
              features - badge printing, host notifications, compliance reports,
              watchlist screening - at a fraction of the cost. Starting at $36/month.
            </p>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed max-w-2xl">
              Today, 2,000+ workplaces across 15+ countries trust VMS. From single-office
              startups to multi-location enterprises. From corporate offices to hospitals,
              schools, and manufacturing plants.
            </p>
          </AnimateIn>

          <AnimateIn animation="slide-in-right" delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, label: "Mission-Driven", color: "bg-slate-50 text-cyan-600" },
                { icon: Building2, label: "Every Industry", color: "bg-cyan-50 text-cyan-600" },
                { icon: Users, label: "Customer First", color: "bg-glow-50 text-glow-600" },
                { icon: TrendingUp, label: "Always Growing", color: "bg-slate-50 text-cyan-600" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.color} mb-3`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-heading">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Values */}
      <Section background="light">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimateIn animation="fade-in-up">
            <SectionLabel>Our Values</SectionLabel>
            <SectionTitle>What We Stand For</SectionTitle>
            <SectionDescription className="mx-auto">
              These are not motivational posters on a wall. These are the principles
              that drive every product decision, every customer interaction, and every
              line of code we write.
            </SectionDescription>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <AnimateIn key={value.title} animation="fade-in-up" delay={index * 100}>
              <Card hover padding="lg" className="h-full">
                <CardIcon>
                  <value.icon className="w-6 h-6" />
                </CardIcon>
                <CardTitle>{value.title}</CardTitle>
                <CardDescription>{value.description}</CardDescription>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimateIn animation="fade-in-up">
            <SectionLabel>Our Journey</SectionLabel>
            <SectionTitle>From Sign-In Sheet to Global Platform</SectionTitle>
          </AnimateIn>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <AnimateIn key={milestone.year} animation="fade-in-up" delay={index * 100}>
                  <div className="flex gap-6">
                    <div className="shrink-0 relative">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 text-cyan-600 flex items-center justify-center font-heading font-extrabold text-sm">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-lg font-bold text-slate-900 font-heading">
                        {milestone.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* What Makes Us Different */}
      <Section background="tint">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateIn animation="slide-in-left">
            <SectionLabel>Why VMS</SectionLabel>
            <SectionTitle>What Makes Us Different</SectionTitle>
            <SectionDescription>
              There are dozens of visitor management tools. Here is why 2,000+
              workplaces chose VMS over every one of them.
            </SectionDescription>
          </AnimateIn>

          <AnimateIn animation="slide-in-right" delay={150}>
            <div className="space-y-4">
              {[
                {
                  icon: DollarSign,
                  title: "70% Less Than Envoy",
                  description: "Same features, same security, dramatically lower price. VMS starts at $36/mo vs Envoy's $109/mo.",
                },
                {
                  icon: Lightbulb,
                  title: "6 Modules, One Platform",
                  description: "Visitors, queues, rooms, employees, deliveries, and events. No need to buy separate tools.",
                },
                {
                  icon: Zap,
                  title: "5-Minute Setup",
                  description: "No IT department needed. No professional services. Create an account and go live in minutes.",
                },
                {
                  icon: Award,
                  title: "4.9/5 on Capterra",
                  description: "79 verified reviews. Real customers, real ratings. We earn trust through results, not marketing.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-50 text-cyan-600 flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-heading">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark" spacing="lg">
        <AnimateIn animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white leading-[1.1]">
              Ready to Join 2,000+ Workplaces?
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              Experience why businesses across 15+ countries chose VMS for their
              visitor management. Start free, upgrade when you are ready.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="white" size="lg" href="/free-trial">
                Start Free Trial
              </Button>
              <Button variant="ghost" size="lg" href="/contact" className="text-slate-300 hover:text-white hover:bg-slate-800">
                Contact Us
              </Button>
            </div>
          </div>
        </AnimateIn>
      </Section>
    </>
  );
}

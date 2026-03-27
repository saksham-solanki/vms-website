"use client";

import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd";
import { useFormSubmit } from "@/lib/useFormSubmit";
import {
  Mail,
  Clock,
  MessageSquare,
  HelpCircle,
  MapPin,
  Phone,
} from "lucide-react";

const contactFAQs = [
  {
    question: "How quickly will I hear back?",
    answer:
      "We respond to all inquiries within 4 business hours during support hours (Monday to Friday, 9am to 6pm ET). Urgent security issues are handled 24/7.",
  },
  {
    question: "Do you offer phone support?",
    answer:
      "Phone support is available for Enterprise plan customers. All other plans receive priority email and chat support with fast response times.",
  },
  {
    question: "Can I get a live demo before signing up?",
    answer:
      "Absolutely. Book a personalized demo at visitormanagement.us/demo and our team will walk you through VMS for your specific use case and industry.",
  },
  {
    question: "I need help with an existing account. Where do I go?",
    answer:
      "Email support@visitormanagement.us with your account email and a description of the issue. Our support team will get back to you within 4 business hours.",
  },
  {
    question: "Do you have a partner or reseller program?",
    answer:
      "Yes. We work with IT consultants, managed service providers, and workplace solution resellers. Email partners@visitormanagement.us for program details and commission structure.",
  },
];

const contactChannels = [
  {
    icon: Mail,
    title: "Email Us",
    description: "General inquiries and sales",
    value: "hello@visitormanagement.us",
    href: "mailto:hello@visitormanagement.us",
  },
  {
    icon: MessageSquare,
    title: "Support",
    description: "Technical help and account issues",
    value: "support@visitormanagement.us",
    href: "mailto:support@visitormanagement.us",
  },
  {
    icon: Clock,
    title: "Support Hours",
    description: "Monday to Friday",
    value: "9:00 AM - 6:00 PM ET",
    href: null,
  },
  {
    icon: Phone,
    title: "Enterprise Support",
    description: "Dedicated phone line",
    value: "Available on Enterprise plan",
    href: null,
  },
];

export default function ContactPage() {
  const { status, errorMessage, handleSubmit } = useFormSubmit({ formType: "contact" });

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <FAQSchema questions={contactFAQs} />

      {/* Hero */}
      <Section background="gradient" spacing="lg">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn animation="fade-in-up">
            <SectionLabel>Contact Us</SectionLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading leading-[1.1] tracking-tight">
              We Would Love to{" "}
              <span className="gradient-text">Hear From You</span>
            </h1>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Have a question about VMS? Need help choosing the right plan? Want to
              explore a partnership? Reach out and we will get back to you within
              4 business hours.
            </p>
          </AnimateIn>
        </div>
      </Section>

      {/* Contact Channels */}
      <Section background="white" spacing="sm">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto -mt-8">
          {contactChannels.map((channel, index) => (
            <AnimateIn key={channel.title} animation="fade-in-up" delay={index * 80}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 text-cyan-600 mb-4">
                  <channel.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  {channel.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">{channel.description}</p>
                {channel.href ? (
                  <a
                    href={channel.href}
                    className="mt-2 inline-block text-sm font-semibold text-cyan-600 hover:text-slate-900 transition-colors"
                  >
                    {channel.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-semibold text-slate-700">
                    {channel.value}
                  </p>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* Contact Form + Info */}
      <Section background="light">
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Form (60%) */}
          <div className="lg:col-span-3">
            <AnimateIn animation="fade-in-up">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading">
                Send Us a Message
              </h2>
              <p className="mt-3 text-slate-500 leading-relaxed">
                Fill out the form below and our team will get back to you within
                4 business hours.
              </p>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500"
                      placeholder="Sarah"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500"
                      placeholder="Mitchell"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500"
                    placeholder="sarah@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Topic *
                  </label>
                  <select
                    name="topic"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500 text-slate-600"
                  >
                    <option value="">Select a topic</option>
                    <option value="sales">Sales inquiry</option>
                    <option value="support">Technical support</option>
                    <option value="billing">Billing question</option>
                    <option value="partnership">Partnership or reseller</option>
                    <option value="enterprise">Enterprise plan</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-slate-500 resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <Button variant="primary" size="lg" type="submit" className="w-full" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>

                {status === "success" && (
                  <p className="text-sm text-emerald-600 text-center font-medium">
                    Message sent successfully! We will get back to you within 4 business hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600 text-center">{errorMessage}</p>
                )}

                <p className="text-xs text-slate-500 text-center">
                  We will respond within 4 business hours. No spam, ever.
                </p>
              </form>
            </AnimateIn>
          </div>

          {/* Sidebar (40%) */}
          <div className="lg:col-span-2 space-y-6">
            <AnimateIn animation="fade-in-up" delay={100}>
              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: "Book a personalized demo", href: "/demo" },
                    { label: "Start your free trial", href: "/free-trial" },
                    { label: "View pricing plans", href: "/pricing" },
                    { label: "Browse help articles", href: "/blog" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-slate-900 hover:text-slate-950 font-medium transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={200}>
              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-heading">
                      Headquarters
                    </h3>
                    <p className="text-sm text-slate-500">United States</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  VMS operates as a distributed team serving customers worldwide.
                  Our platform is hosted on enterprise-grade cloud infrastructure
                  with data centers in the US and EU.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={300}>
              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-glow-50 text-glow-600 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-heading">
                      Response Time
                    </h3>
                    <p className="text-sm text-slate-500">Within 4 business hours</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Our team monitors inquiries Monday through Friday, 9am to 6pm
                  Eastern Time. Enterprise customers have access to 24/7 priority
                  support with a dedicated account manager.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <AnimateIn animation="fade-in-up">
              <SectionLabel>FAQ</SectionLabel>
              <SectionTitle>Frequently Asked Questions</SectionTitle>
            </AnimateIn>
          </div>

          <div className="space-y-4">
            {contactFAQs.map((faq, index) => (
              <AnimateIn key={faq.question} animation="fade-in-up" delay={index * 80}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark" spacing="lg">
        <AnimateIn animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white leading-[1.1]">
              Prefer to See VMS in Action?
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              Skip the form and book a live demo. Our team will walk you through
              VMS for your specific industry and use case.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="white" size="lg" href="/demo">
                Book a Demo
              </Button>
              <Button variant="ghost" size="lg" href="/free-trial" className="text-slate-300 hover:text-white hover:bg-slate-800">
                Start Free Trial
              </Button>
            </div>
          </div>
        </AnimateIn>
      </Section>
    </>
  );
}

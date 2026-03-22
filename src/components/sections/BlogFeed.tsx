import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const latestPosts = [
  {
    title: "What Is a Visitor Management System? Complete 2026 Guide",
    slug: "/blog/what-is-visitor-management-system",
    category: "Visitor Management",
    date: "March 2026",
    readTime: "12 min read",
    excerpt:
      "Everything you need to know about digital visitor management systems — from features and benefits to implementation and ROI.",
  },
  {
    title: "Queue Management System: A Strategic Guide for Businesses",
    slug: "/blog/queue-management-system-guide",
    category: "Queue Management",
    date: "March 2026",
    readTime: "10 min read",
    excerpt:
      "How modern queue management systems reduce wait times, improve customer satisfaction, and streamline operations.",
  },
  {
    title: "VMS vs Envoy: Honest Comparison for 2026",
    slug: "/blog/vms-vs-envoy",
    category: "Comparison",
    date: "March 2026",
    readTime: "8 min read",
    excerpt:
      "A feature-by-feature comparison of VMS and Envoy, including pricing, modules, and what each platform does best.",
  },
];

export function BlogFeed() {
  return (
    <Section background="light" id="blog">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <SectionLabel>Resources</SectionLabel>
          <SectionTitle>Insights & Guides</SectionTitle>
          <SectionDescription>
            Expert guides on visitor management, workplace operations, and
            compliance.
          </SectionDescription>
        </div>
        <Button variant="ghost" href="/blog">
          View all posts
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {latestPosts.map((post) => (
          <Link
            key={post.slug}
            href={post.slug}
            className="group rounded-2xl bg-white border border-neutral-200 overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all duration-200"
          >
            {/* Placeholder image area */}
            <div className="h-40 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
              <span className="text-4xl opacity-50">📝</span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-neutral-400">{post.readTime}</span>
              </div>
              <h3 className="text-base font-bold text-neutral-900 font-heading group-hover:text-primary-700 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mt-12 rounded-2xl bg-white border border-neutral-200 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 font-heading">
              Get workplace management insights weekly
            </h3>
            <p className="text-sm text-neutral-500 mt-1">
              No spam. Unsubscribe anytime. Join 1,000+ workplace professionals.
            </p>
          </div>
          <form className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 md:w-64 px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <Button variant="primary" size="md" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}

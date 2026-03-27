"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "@phosphor-icons/react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { motion } from "framer-motion";

const latestPosts = [
  {
    title: "What Is a Visitor Management System? Complete 2026 Guide",
    slug: "/blog/what-is-visitor-management-system",
    category: "Visitor Management",
    categoryColor: "#00D4AA",
    date: "March 2026",
    readTime: "12 min",
    excerpt:
      "Everything you need to know about digital visitor management systems - from features and benefits to implementation and ROI.",
    featured: true,
  },
  {
    title: "Queue Management System: A Strategic Guide for Businesses",
    slug: "/blog/queue-management-system-guide",
    category: "Queue Management",
    categoryColor: "#3B82F6",
    date: "March 2026",
    readTime: "10 min",
    excerpt:
      "How modern queue management systems reduce wait times, improve customer satisfaction, and streamline operations.",
    featured: false,
  },
  {
    title: "VMS vs Envoy: Honest Comparison for 2026",
    slug: "/blog/vms-vs-envoy",
    category: "Comparison",
    categoryColor: "#F59E0B",
    date: "March 2026",
    readTime: "8 min",
    excerpt:
      "A feature-by-feature comparison of VMS and Envoy, including pricing, modules, and what each platform does best.",
    featured: false,
  },
];

export function BlogFeed() {
  const featured = latestPosts[0];
  const rest = latestPosts.slice(1);

  return (
    <section className="py-14 md:py-20 bg-slate-50 relative overflow-hidden" id="blog">
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <AnimateIn>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 mb-6">
                Resources
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 tracking-[-0.03em] leading-[1.1]">
                Insights and guides
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed max-w-lg">
                Expert guides on visitor management, workplace operations, and
                compliance.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn animation="fade-in" delay={200}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors group/link"
            >
              View all posts
              <ArrowRight size={14} weight="bold" className="group-hover/link:translate-x-0.5 transition-transform" />
            </Link>
          </AnimateIn>
        </div>

        {/* Featured + stacked smaller */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={featured.slug}
              className="group rounded-2xl bg-white border border-slate-200/80 overflow-hidden hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 flex flex-col h-full"
            >
              {/* Featured image placeholder with gradient */}
              <div className="h-56 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute inset-0 dot-grid-subtle opacity-40" />
                {/* Category badge */}
                <div className="absolute bottom-4 left-4">
                  <span
                    className="text-xs font-medium text-slate-700 bg-white/80 backdrop-blur-md border border-slate-200/60 px-3 py-1.5 rounded-full"
                  >
                    {featured.category}
                  </span>
                </div>
                {/* Decorative gradient accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px]" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3 text-xs text-slate-400">
                  <Clock size={12} weight="duotone" />
                  {featured.readTime} read
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  {featured.date}
                </div>
                <h3 className="text-lg font-bold text-slate-950 group-hover:text-cyan-700 transition-colors leading-snug">
                  {featured.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1">
                  {featured.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-slate-600 gap-1 group-hover:gap-2 group-hover:text-cyan-700 transition-all">
                  Read article
                  <ArrowRight size={14} weight="bold" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Two smaller cards stacked */}
          <div className="flex flex-col gap-6">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1, duration: 0.4 }}
              >
                <Link
                  href={post.slug}
                  className="group rounded-2xl bg-white border border-slate-200/80 overflow-hidden hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.06)] hover:border-slate-300 transition-all duration-300 flex flex-col"
                >
                  {/* Thin accent bar at top */}
                  <div className="h-1.5 w-full" style={{ backgroundColor: post.categoryColor }} />
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2 text-xs text-slate-400">
                      <Clock size={12} weight="duotone" />
                      {post.readTime} read
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      {post.date}
                      <span
                        className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${post.categoryColor}10`,
                          color: post.categoryColor,
                        }}
                      >
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-cyan-700 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-500 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="mt-3 inline-flex items-center text-sm font-medium text-slate-600 gap-1 group-hover:gap-2 group-hover:text-cyan-700 transition-all">
                      Read article
                      <ArrowRight size={14} weight="bold" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

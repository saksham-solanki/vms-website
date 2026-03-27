"use client";

import Link from "next/link";
import { useState } from "react";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AnimateIn, StaggerChildren } from "@/components/ui/AnimateIn";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { getAllPosts, getPostsByCategory, categories } from "@/lib/blog";
import type { BlogCategory } from "@/lib/blog";
import {
  ArrowRight,
  Clock,
  Search,
  BookOpen,
  TrendingUp,
  Users,
  Layers,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  All: <Layers className="w-3.5 h-3.5" />,
  "Visitor Management": <Users className="w-3.5 h-3.5" />,
  "Queue Management": <TrendingUp className="w-3.5 h-3.5" />,
  Comparison: <Search className="w-3.5 h-3.5" />,
  "How-To": <BookOpen className="w-3.5 h-3.5" />,
};

export default function BlogPage() {
  const { status: nlStatus, handleSubmit: handleNewsletter } = useFormSubmit({ formType: "newsletter" });
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const allPosts = getAllPosts();
  const filteredPosts = getPostsByCategory(activeCategory);
  const featuredPost = allPosts.find((p) => p.featured) || allPosts[0];
  const remainingPosts = filteredPosts.filter((p) => p.slug !== featuredPost.slug);

  return (
    <>
      {/* Hero */}
      <Section background="white" spacing="lg">
        <AnimateIn>
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel>Blog</SectionLabel>
            <SectionTitle>
              Insights on Visitor Management,{" "}
              <span className="gradient-text">Workplace Operations</span> & Security
            </SectionTitle>
            <SectionDescription className="mx-auto">
              Expert guides, product comparisons, and actionable strategies for
              facility managers, IT leaders, and operations teams. Published by
              the VMS team.
            </SectionDescription>
          </div>
        </AnimateIn>

        {/* Category Filters */}
        <AnimateIn animation="fade-in-up" delay={200}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800"
                }`}
              >
                {categoryIcons[cat]}
                {cat}
              </button>
            ))}
          </div>
        </AnimateIn>
      </Section>

      {/* Featured Post */}
      {activeCategory === "All" && (
        <Section background="light" spacing="sm">
          <AnimateIn animation="fade-in-up">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block rounded-2xl bg-white border border-slate-200/80 overflow-hidden hover:shadow-xl hover:shadow-neutral-200/50 hover:border-slate-200 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Gradient header area */}
                <div
                  className={`h-64 md:h-auto bg-gradient-to-br ${featuredPost.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <Badge variant="primary" className="bg-white/20 text-white backdrop-blur-sm border-0 w-fit mb-3">
                      Featured
                    </Badge>
                    <span className="text-sm text-white/80 font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime} read
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    {new Date(featuredPost.date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading group-hover:text-cyan-600 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-3 text-slate-500 leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-600 gap-1.5 group-hover:gap-2.5 transition-all">
                    Read full article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </AnimateIn>
        </Section>
      )}

      {/* Post Grid */}
      <Section background="light" spacing="md">
        {remainingPosts.length > 0 ? (
          <StaggerChildren
            staggerDelay={100}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl bg-white border border-slate-200/80 overflow-hidden hover:shadow-xl hover:shadow-neutral-200/50 hover:border-slate-200 transition-all duration-300 flex flex-col h-full"
              >
                {/* Card gradient header */}
                <div
                  className={`h-44 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-semibold text-white/90 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3 text-xs text-slate-500">
                    <Clock className="w-3 h-3" />
                    {post.readTime} read
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-cyan-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-cyan-600 gap-1 group-hover:gap-2 transition-all">
                    Read article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </StaggerChildren>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">
              No posts in this category yet. Check back soon.
            </p>
          </div>
        )}
      </Section>

      {/* Newsletter Signup */}
      <Section background="white" spacing="md">
        <AnimateIn animation="fade-in-up">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800" />
            <div className="absolute inset-0 grid-pattern opacity-10" />

            <div className="relative z-10 px-8 py-12 md:px-14 md:py-16">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-lg">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white font-heading leading-tight">
                    Get workplace management insights delivered weekly
                  </h2>
                  <p className="mt-3 text-cyan-200 leading-relaxed">
                    Practical guides on visitor management, security, compliance,
                    and operational efficiency. No spam. Unsubscribe anytime.
                  </p>
                </div>
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className="flex-1 md:w-72 px-5 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-cyan-300 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/30 backdrop-blur-sm transition-all"
                  />
                  <Button variant="white" size="lg" type="submit" disabled={nlStatus === "loading"}>
                      {nlStatus === "loading" ? "..." : nlStatus === "success" ? "Subscribed!" : "Subscribe"}
                    </Button>
                </form>
              </div>
            </div>
          </div>
        </AnimateIn>
      </Section>
    </>
  );
}

"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AnimateIn } from "@/components/ui/AnimateIn";
import type { BlogPost } from "@/lib/blog";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  User,
  Share2,
  Link2,
  BookOpen,
} from "lucide-react";

// Simple inline SVG icons for social sharing (lucide-react doesn't include brand icons)
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ── Table of Contents Parser ──
interface TOCItem {
  id: string;
  text: string;
  level: number;
}

function extractTOC(html: string): TOCItem[] {
  const regex = /<h([23])\s+id="([^"]+)"[^>]*>([^<]+)<\/h[23]>/g;
  const items: TOCItem[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    items.push({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3],
    });
  }
  return items;
}

// ── Share URLs ──
function getShareURLs(title: string, slug: string) {
  const url = encodeURIComponent(`https://visitormanagement.us/blog/${slug}`);
  const text = encodeURIComponent(title);
  return {
    twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    copy: `https://visitormanagement.us/blog/${slug}`,
  };
}

// ── Blog Post Content Component ──
export function BlogPostContent({
  post,
  relatedPosts,
}: {
  post: BlogPost;
  relatedPosts: BlogPost[];
}) {
  const toc = useMemo(() => extractTOC(post.content), [post.content]);
  const shareURLs = useMemo(
    () => getShareURLs(post.title, post.slug),
    [post.title, post.slug]
  );

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      {/* ── Article Hero ── */}
      <section className={`relative bg-gradient-to-br ${post.gradient} overflow-hidden`}>
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <AnimateIn>
            <div className="max-w-3xl">
              {/* Back link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Blog
              </Link>

              {/* Category badge */}
              <Badge
                variant="primary"
                className="bg-white/20 text-white backdrop-blur-sm border-0 mb-4"
              >
                {post.category}
              </Badge>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-heading leading-[1.1] tracking-tight">
                {post.title}
              </h1>

              {/* Meta row */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime} read
                </span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Article Body with Sidebar ── */}
      <Section background="white" spacing="lg">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
          {/* Main content */}
          <AnimateIn animation="fade-in-up" delay={100}>
            <article
              className="prose-vms max-w-none
                [&>h2]:text-2xl [&>h2]:font-extrabold [&>h2]:text-slate-900 [&>h2]:font-heading [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:leading-tight
                [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:font-heading [&>h3]:mt-8 [&>h3]:mb-3
                [&>p]:text-slate-600 [&>p]:leading-relaxed [&>p]:mb-5 [&>p]:text-[15px]
                [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul]:pl-0
                [&>ul>li]:text-slate-600 [&>ul>li]:text-[15px] [&>ul>li]:leading-relaxed [&>ul>li]:pl-6 [&>ul>li]:relative
                [&>ul>li]:before:content-[''] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-[10px] [&>ul>li]:before:w-1.5 [&>ul>li]:before:h-1.5 [&>ul>li]:before:rounded-full [&>ul>li]:before:bg-cyan-500
                [&>ol]:mb-5 [&>ol]:space-y-2 [&>ol]:pl-0 [&>ol]:list-none [&>ol]:counter-reset-[step]
                [&>ol>li]:text-slate-600 [&>ol>li]:text-[15px] [&>ol>li]:leading-relaxed [&>ol>li]:pl-10 [&>ol>li]:relative [&>ol>li]:counter-increment-[step]
                [&>ol>li]:before:content-[counter(step)] [&>ol>li]:before:absolute [&>ol>li]:before:left-0 [&>ol>li]:before:top-0 [&>ol>li]:before:w-7 [&>ol>li]:before:h-7 [&>ol>li]:before:rounded-lg [&>ol>li]:before:bg-slate-50 [&>ol>li]:before:text-cyan-600 [&>ol>li]:before:font-bold [&>ol>li]:before:text-xs [&>ol>li]:before:flex [&>ol>li]:before:items-center [&>ol>li]:before:justify-center
                [&_strong]:text-slate-800 [&_strong]:font-semibold
                [&_a]:text-cyan-600 [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-primary-200 hover:[&_a]:decoration-primary-500 [&_a]:transition-colors
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimateIn>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              {toc.length > 0 && (
                <AnimateIn animation="fade-in" delay={200}>
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5">
                    <h4 className="text-xs font-bold uppercase tracking-[2px] text-slate-600 font-heading mb-4 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5" />
                      Contents
                    </h4>
                    <nav className="space-y-1">
                      {toc.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block text-sm transition-colors hover:text-cyan-600 ${
                            item.level === 2
                              ? "text-slate-700 font-medium py-1"
                              : "text-slate-500 py-0.5 pl-3 border-l border-slate-200"
                          }`}
                        >
                          {item.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                </AnimateIn>
              )}

              {/* Author Card */}
              <AnimateIn animation="fade-in" delay={300}>
                <div className="rounded-2xl border border-slate-200/80 bg-white p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-sm font-bold">
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 font-heading">
                        {post.author}
                      </p>
                      <p className="text-xs text-slate-500">{post.authorRole}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Practical insights on visitor management, workplace operations,
                    and building security from the VMS team.
                  </p>
                </div>
              </AnimateIn>

              {/* Social Share */}
              <AnimateIn animation="fade-in" delay={400}>
                <div className="rounded-2xl border border-slate-200/80 bg-white p-5">
                  <h4 className="text-xs font-bold uppercase tracking-[2px] text-slate-600 font-heading mb-3 flex items-center gap-2">
                    <Share2 className="w-3.5 h-3.5" />
                    Share
                  </h4>
                  <div className="flex items-center gap-2">
                    <a
                      href={shareURLs.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-50 hover:text-cyan-600 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <XIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={shareURLs.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-50 hover:text-cyan-600 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(shareURLs.copy);
                      }}
                      className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-50 hover:text-cyan-600 transition-colors cursor-pointer"
                      aria-label="Copy link"
                    >
                      <Link2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </AnimateIn>

              {/* CTA Card */}
              <AnimateIn animation="fade-in" delay={500}>
                <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 p-5 text-center">
                  <h4 className="text-base font-bold text-white font-heading mb-2">
                    Try VMS Free
                  </h4>
                  <p className="text-xs text-cyan-200 leading-relaxed mb-4">
                    Digital check-in, badge printing, queue management, and more.
                    Starting at $36/month.
                  </p>
                  <Button
                    variant="white"
                    size="sm"
                    href="/free-trial"
                    className="w-full"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Start Free Trial
                  </Button>
                </div>
              </AnimateIn>
            </div>
          </aside>
        </div>
      </Section>

      {/* ── CTA Banner ── */}
      <Section background="light" spacing="md">
        <AnimateIn animation="fade-in-up">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600" />
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="relative z-10 px-8 py-12 md:px-14 md:py-14 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-heading leading-tight">
                Ready to modernize your workplace operations?
              </h2>
              <p className="mt-3 text-cyan-200 max-w-xl mx-auto leading-relaxed">
                Join hundreds of businesses using VMS for visitor management, queue
                management, desk booking, and more. Setup takes less than a day.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="white"
                  size="lg"
                  href="/free-trial"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" href="/demo" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </AnimateIn>
      </Section>

      {/* ── Related Posts ── */}
      {relatedPosts.length > 0 && (
        <Section background="white" spacing="md">
          <AnimateIn>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading">
                Related Articles
              </h2>
              <p className="mt-2 text-slate-500">
                Continue reading about visitor management and workplace operations.
              </p>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((related, i) => (
              <AnimateIn key={related.slug} animation="fade-in-up" delay={i * 100}>
                <Link
                  href={`/blog/${related.slug}`}
                  className="group rounded-2xl bg-white border border-slate-200/80 overflow-hidden hover:shadow-xl hover:shadow-neutral-200/50 hover:border-slate-200 transition-all duration-300 flex flex-col h-full"
                >
                  <div
                    className={`h-36 bg-gradient-to-br ${related.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 grid-pattern opacity-20" />
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs font-semibold text-white/90 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2 text-xs text-slate-500">
                      <Clock className="w-3 h-3" />
                      {related.readTime} read
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 font-heading group-hover:text-cyan-600 transition-colors leading-snug">
                      {related.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center text-xs font-medium text-cyan-600 gap-1 group-hover:gap-1.5 transition-all">
                      Read article
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}

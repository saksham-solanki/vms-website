import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";
import { BlogPostContent } from "./BlogPostContent";

// ── Static Params ──
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// ── Dynamic Metadata ──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://visitormanagement.us/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://visitormanagement.us/blog/${post.slug}`,
    },
  };
}

// ── Page Component ──
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        datePublished={post.date}
        authorName={post.author}
        url={`https://visitormanagement.us/blog/${post.slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />
      <BlogPostContent post={post} relatedPosts={relatedPosts} />
    </>
  );
}

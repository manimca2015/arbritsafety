import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { BlogCardGrid } from "@/components/sections/blog-card-grid";
import { blogPosts } from "@/lib/data";

const toSlug = (href: string) => href.replace("/blog/", "");

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: toSlug(post.href) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => toSlug(p.href) === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = blogPosts.findIndex((p) => toSlug(p.href) === slug);
  if (index === -1) notFound();

  const post = blogPosts[index];
  const prevPost = blogPosts[(index - 1 + blogPosts.length) % blogPosts.length];
  const nextPost = blogPosts[(index + 1) % blogPosts.length];

  return (
    <>
      <PageHeader
        title={post.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category },
        ]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-orange">
            {post.category}
          </span>

          <div className="relative mt-4 h-72 w-full overflow-hidden rounded-2xl shadow-lg sm:h-96">
            <Image src={post.image} alt={post.title} fill sizes="768px" className="object-cover" />
          </div>

          <div className="mt-10 space-y-8">
            {post.content?.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-heading text-2xl font-bold text-navy">{section.heading}</h2>
                )}
                <div className={section.heading ? "mt-4 space-y-4" : "space-y-4"}>
                  {section.paragraphs.map((paragraph, j) => (
                    <p key={j} className="text-navy/70">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bulletList && (
                  <ul className="mt-4 space-y-3">
                    {section.bulletList.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-navy/80">
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 shrink-0 text-orange"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {!post.content && <p className="text-navy/70">{post.excerpt}</p>}
          </div>

          <div className="mt-14 grid gap-4 border-t border-navy/10 pt-8 sm:grid-cols-2">
            <Link
              href={prevPost.href}
              className="group flex items-center gap-3 rounded-2xl border border-navy/10 bg-muted p-5 hover:border-orange/40"
            >
              <ChevronLeft className="h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                  Previous
                </p>
                <p className="mt-1 text-sm font-semibold text-navy group-hover:text-orange">
                  {prevPost.title}
                </p>
              </div>
            </Link>
            <Link
              href={nextPost.href}
              className="group flex items-center justify-end gap-3 rounded-2xl border border-navy/10 bg-muted p-5 text-right hover:border-orange/40 sm:flex-row-reverse sm:text-left"
            >
              <ChevronRight className="h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">Next</p>
                <p className="mt-1 text-sm font-semibold text-navy group-hover:text-orange">
                  {nextPost.title}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">Related Blogs</h2>
          <div className="mt-12">
            <BlogCardGrid excludeHref={post.href} />
          </div>
        </div>
      </section>
    </>
  );
}

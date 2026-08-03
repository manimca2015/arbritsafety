import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function LatestBlogs() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Blog" title="Latest From Arbrit" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.href}
              className="flex flex-col rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div
                aria-hidden="true"
                className="flex h-36 items-center justify-center rounded-t-2xl bg-gradient-to-br from-navy-deep to-orange/70"
              >
                <Newspaper className="h-9 w-9 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-orange">
                  {post.category}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-navy">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-navy/70">{post.excerpt}</p>
                <Button asChild variant="link" className="mt-4 justify-start px-0 text-orange">
                  <Link href={post.href}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline" className="border-navy text-navy">
            <Link href="/blog">View All Blogs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

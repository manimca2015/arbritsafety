import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
              <div className="relative h-44 w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-orange">
                  {post.category}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-navy">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-navy/70">{post.excerpt}</p>
                <Button
                  type="button"
                  variant="link"
                  className="mt-4 cursor-default justify-start px-0 text-orange hover:no-underline"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
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

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function BlogCardGrid({ excludeHref }: { excludeHref?: string }) {
  const posts = excludeHref ? blogPosts.filter((post) => post.href !== excludeHref) : blogPosts;

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {posts.map((post, i) => (
        <Reveal key={post.href} delay={(i % 3) * 0.1} className="flex">
        <article
          className="flex flex-1 flex-col rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:shadow-lg"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-t-2xl bg-muted">
            <Image
              src={post.image}
              alt={`Cover image for the article “${post.title}”`}
              fill
              quality={95}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#0066b2]">
              {post.category}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-[#0066b2]">
              {post.title}
            </h3>
            <p className="mt-3 flex-1 text-sm text-[#000]">{post.excerpt}</p>
            <Button asChild variant="link" className="mt-4 justify-start px-0 text-[#0066b2]">
              <Link href={post.href}>
                Read More <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </article>
        </Reveal>
      ))}
    </div>
  );
}

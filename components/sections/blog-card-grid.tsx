import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function BlogCardGrid({ excludeHref }: { excludeHref?: string }) {
  const posts = excludeHref ? blogPosts.filter((post) => post.href !== excludeHref) : blogPosts;

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post.href}
          className="flex flex-col rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:shadow-lg"
        >
          <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              quality={100}
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
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
      ))}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type Crumb = {
  label: string;
  href?: string;
};

export function PageHeader({
  title,
  breadcrumbs,
  image = "/hero/slide-1-construction-safety.jpg",
}: {
  title: string;
  breadcrumbs: Crumb[];
  image?: string;
}) {
  return (
    <section className="relative flex h-[280px] items-center justify-center overflow-hidden sm:h-[340px]">
      <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-navy/80" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        <nav
          aria-label="Breadcrumb"
          className="mt-4 flex items-center justify-center gap-2 text-sm text-white/80"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
              {crumb.href ? (
                <Link href={crumb.href} className="flex items-center gap-1 hover:text-white">
                  {i === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-semibold text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}

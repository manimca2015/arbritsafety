import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/social-icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { trainers } from "@/lib/data";

export function ConsultancyTeam() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Consultants"
          title="The people who turn up on your site"
          description="Our consultants are qualified, Dubai Municipality-recognised HSE professionals who spend their weeks between client sites and our training rooms."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {trainers.map((person, i) => (
            <Reveal key={person.slug} delay={Math.min(i, 5) * 0.08}>
              <div className="group flex h-full flex-col items-center rounded-3xl border border-navy/10 bg-[#0066b2] p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white/30 shadow transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={person.image}
                    alt={`${person.name}, HSE consultant and trainer at Arbrit Safety`}
                    fill
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-white">{person.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {person.credentials}
                </p>
                {person.linkedin ? (
                  <a
                    href={person.linkedin}
                    target={person.linkedin.startsWith("http") ? "_blank" : undefined}
                    rel={person.linkedin.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={`${person.name} on LinkedIn`}
                    className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/90 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
                <p className="mt-4 text-sm text-white/90">{person.shortBio}</p>
                <Button asChild variant="link" className="mt-4 text-white">
                  <Link href={`/about/trainers/${person.slug}`}>
                    Read more <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * PLACEHOLDER PHOTOGRAPHY — these are the closest existing assets in the repo.
 * None shows an actual consultancy engagement (a site audit in progress, a
 * consultant with a client, a findings meeting). Replace with real photography
 * before launch and update each caption to match what the new photo shows.
 */
const shots = [
  {
    src: "/hero/slide-3-lifting-operations.jpg",
    caption: "Lifting operations on site",
    alt: "Lifting operation under way on a project site in the UAE",
  },
  {
    src: "/about/confined-space-big-scaled-300x182.webp",
    caption: "Confined space entry",
    alt: "Confined space entry work with rescue arrangements in place",
  },
  {
    src: "/general-safety/FIRE-FIGHTING.webp",
    caption: "Fire and emergency readiness",
    alt: "Fire fighting and emergency response readiness exercise",
  },
  {
    src: "/hero/slide-2-training-classroom.jpg",
    caption: "Briefing the team",
    alt: "Arbrit instructor briefing a group in a training room",
  },
];

export function ConsultancyGallery() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="In the Field"
          title="Where our consultants spend their week"
          description="Between client sites and our training rooms across the UAE and Saudi Arabia."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shots.map((shot, i) => (
            <Reveal key={shot.src} delay={Math.min(i, 5) * 0.07}>
              <figure className="group relative h-56 overflow-hidden rounded-3xl border border-navy/10 shadow-sm lg:h-64">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/20 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white">
                  {shot.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

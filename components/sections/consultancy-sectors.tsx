import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const sectors = [
  {
    name: "Construction & Infrastructure",
    image: "/general-safety/constructions.webp",
    note: "Work at height, lifting operations, excavation and Trakhees / municipality approvals.",
  },
  {
    name: "Oil, Gas & Petrochemical",
    image: "/general-safety/Oil-and-gas.webp",
    note: "HAZOP and SIL studies, permit-to-work systems, confined space and hot work control.",
  },
  {
    name: "Manufacturing",
    image: "/general-safety/Forklift-Operator.webp",
    note: "Machine guarding, LOTO, materials handling and ISO 45001 system build-out.",
  },
  {
    name: "Healthcare",
    image: "/general-safety/first-aid.webp",
    note: "Infection control interfaces, emergency response planning and staff competency records.",
  },
  {
    name: "Facilities Management",
    image: "/Hands-on-Experience/Crane-slider.webp",
    note: "Contractor control, lifting equipment registers and planned inspection regimes.",
  },
  {
    name: "Logistics & Warehousing",
    image: "/general-safety/Rescue-Training.webp",
    note: "Traffic management, racking inspection, fire strategy and rescue arrangements.",
  },
];

export function ConsultancySectors() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Sectors"
          title="Industries we work in"
          description="The hazards differ; the discipline does not. These are the sectors our consultants know from the inside."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <Reveal key={sector.name} delay={Math.min(i, 5) * 0.07}>
              <article className="group h-full overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition hover:shadow-lg">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={`${sector.name} HSE consultancy by Arbrit Safety`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-[#0066b2]">{sector.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#000]">{sector.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

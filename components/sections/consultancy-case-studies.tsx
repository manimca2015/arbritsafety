import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * PLACEHOLDER CONTENT — replace each entry with a real, client-approved engagement
 * before launch. Anonymised summaries are used here so nothing identifies a client
 * without permission; the figures must be swapped for verified numbers.
 */
const caseStudies = [
  {
    sector: "Construction",
    title: "Closing out a main-contractor HSE audit before mobilisation",
    image: "/general-safety/constructions.webp",
    challenge:
      "A subcontractor on a Dubai infrastructure package failed the main contractor's pre-mobilisation HSE audit and risked losing the award.",
    action:
      "Two-day gap assessment against the contractor's HSE requirements, rewritten site HSE plan and task-based risk assessments, plus IOSH Working Safely for the supervisory team.",
    result: "Re-audit passed and mobilisation approved within four weeks.",
  },
  {
    sector: "Oil & Gas",
    title: "HAZOP and SIL revalidation on an ageing process unit",
    image: "/general-safety/Oil-and-gas.webp",
    challenge:
      "An operator needed an independent revalidation of an existing unit after a series of modifications left the original study out of date.",
    action:
      "Independent chairing of the HAZOP nodes with the client's process and operations teams, followed by SIL determination for the protective functions identified.",
    result: "Full study report issued with every action tracked to closure.",
  },
  {
    sector: "Facilities Management",
    title: "Building an ISO 45001-ready system from scratch",
    image: "/Hands-on-Experience/Crane-slider.webp",
    challenge:
      "An FM provider bidding for government contracts had no documented HSE management system and no internal audit capability.",
    action:
      "Gap analysis against ISO 45001, full policy and procedure set, lifting equipment inspection regime, and internal auditor training for four staff.",
    result: "System certification-ready and maintained by the client's own team.",
  },
];

export function ConsultancyCaseStudies() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Case Studies"
          title="What an engagement actually looks like"
          description="Anonymised examples of work we have delivered across the region — the problem, what we did, and where it landed."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <Reveal key={study.title} delay={Math.min(i, 5) * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition hover:shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={`${study.sector} HSE consultancy engagement delivered by Arbrit Safety`}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0066b2] shadow-sm">
                    {study.sector}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-bold leading-snug text-[#0066b2]">
                    {study.title}
                  </h3>

                  <dl className="mt-4 space-y-3 text-sm text-[#000]">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-navy-deep/55">
                        Challenge
                      </dt>
                      <dd className="mt-1 leading-relaxed">{study.challenge}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-navy-deep/55">
                        What we did
                      </dt>
                      <dd className="mt-1 leading-relaxed">{study.action}</dd>
                    </div>
                  </dl>

                  <div className="mt-auto pt-5">
                    <p className="rounded-2xl bg-[#0066b2]/10 px-4 py-3 text-sm font-semibold text-[#0066b2]">
                      {study.result}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

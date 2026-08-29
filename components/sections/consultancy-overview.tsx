import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

// Consultancy-specific credentials. Headline scale figures (years, people
// trained, pass rate) live in the trust strip above, so they aren't repeated here.
const credentials = [
  { icon: MapPin, value: "3 offices", label: "Dubai, Abu Dhabi & Riyadh" },
  { icon: Building2, value: "6 sectors", label: "construction to healthcare" },
  { icon: BadgeCheck, value: "Approved", label: "Trakhees, DM & RAKEZ recognised" },
];

export function ConsultancyOverview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal from="left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#0066b2]">
            Who We Are
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#0066b2] sm:text-4xl">
            HSE consultants who work on your site, not from a template
          </h2>
          <div className="mt-5 space-y-4 text-[#000]">
            <p>
              Arbrit Safety Training &amp; Consultancy has spent two decades helping contractors,
              operators and facility owners across the UAE and Saudi Arabia build health and safety
              systems that hold up to client audits, regulator inspections and — most importantly —
              real conditions on site.
            </p>
            <p>
              Every engagement starts with a walk-through of your actual operation, not a
              questionnaire. You get a prioritised action plan with owners and dates against every
              finding, and we stay involved until those actions are closed — not just until the
              report is issued.
            </p>
            <p>
              Because we also run one of the region&apos;s largest accredited training centres, any
              competency gap an audit uncovers can be closed in-house — IOSH, NEBOSH, LEEA,
              Highfield and Scaffold Training Institute programmes delivered by the same team that
              wrote your findings.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-[#0066b2] text-white hover:bg-[#0066b2]/90">
              <Link href="#consultancy-enquiry">
                Book a discovery call <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#0066b2] text-[#0066b2] hover:bg-[#0066b2]/5">
              <Link href="#consultancy-services">See our services</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal from="right" delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 h-56 overflow-hidden rounded-3xl shadow-lg sm:h-72">
              <Image
                src="/hero/slide-1-construction-safety.jpg"
                alt="Arbrit HSE consultant carrying out a site safety walk-through on a construction project in Dubai"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-2xl shadow-md sm:h-48">
              <Image
                src="/about/confined-space-training-big-scaled-300x186.webp"
                alt="Confined space entry assessment carried out by an Arbrit safety consultant"
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-2xl shadow-md sm:h-48">
              <Image
                src="/general-safety/Oil-and-gas.webp"
                alt="Arbrit HSE support team on an oil and gas facility in the UAE"
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-6">
        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-3">
            {credentials.map(({ icon: Icon, value, label }) => (
              <li
                key={value}
                className="flex items-start gap-3 rounded-2xl border border-navy/10 bg-muted p-5 shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-heading text-lg font-bold leading-tight text-navy-deep">{value}</p>
                  <p className="mt-1 text-xs leading-snug text-navy-deep/60">{label}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

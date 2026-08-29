import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    title: "Discovery call",
    detail:
      "A 30-minute conversation to understand the driver — a client audit, a regulator finding, a new contract or an incident — and what a good outcome looks like for you.",
  },
  {
    title: "Site visit & baseline",
    detail:
      "Our consultant walks the site, reviews your documentation and talks to the people doing the work. Nothing is assessed from a desk.",
  },
  {
    title: "Findings & action plan",
    detail:
      "You receive a written report with findings graded by risk, photographic evidence, and a corrective action plan that names an owner and a date for each item.",
  },
  {
    title: "Implementation support",
    detail:
      "We help close the actions — writing the procedure, running the training, chairing the study or placing the HSE officer. You choose how much of it we do.",
  },
  {
    title: "Verification & close-out",
    detail:
      "A follow-up visit confirms the actions hold in practice, and you get a close-out pack you can put in front of a client or an auditor.",
  },
];

export function ConsultancyProcess() {
  return (
    <section className="bg-navy-deep py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">
              How We Work
            </p>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Five steps from first call to signed-off close-out
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/75">
              No open-ended retainers and no report that sits in a drawer. Every engagement is
              scoped, priced and closed against agreed actions.
            </p>
          </Reveal>

          <ol className="mt-12 space-y-8">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={Math.min(i, 5) * 0.07}>
                <li className="relative flex gap-5 pb-2">
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-6 top-14 h-full w-px bg-white/20"
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white font-heading text-lg font-bold text-[#0066b2] shadow-lg"
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0 pt-1.5">
                    <h3 className="font-heading text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">{step.detail}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal from="right" delay={0.15} className="lg:sticky lg:top-28">
          <div className="space-y-4">
            <div className="relative h-64 overflow-hidden rounded-3xl shadow-2xl sm:h-80">
              <Image
                src="/hero/slide-2-training-classroom.jpg"
                alt="Arbrit consultants presenting audit findings and a corrective action plan to a client team"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-3xl shadow-2xl sm:h-56">
              <Image
                src="/hero/slide-3-lifting-operations.jpg"
                alt="Lifting operations being assessed during an Arbrit safety audit"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

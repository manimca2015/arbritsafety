import {
  ClipboardCheck,
  Clock,
  FileCheck2,
  FileText,
  Flame,
  HardHat,
  ScrollText,
  ShieldAlert,
  Siren,
  TriangleAlert,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type Service = {
  title: string;
  icon: LucideIcon;
  summary: string;
  /** What the engagement actually covers on site. */
  includes: string[];
  /** Indicative time on site — replace with verified figures before launch. */
  duration: string;
  /** What lands on the client's desk at the end. */
  output: string;
};

const services: Service[] = [
  {
    title: "Project HSE Support",
    icon: HardHat,
    summary:
      "We place a competent HSE officer, supervisor or manager on your project for as long as the works run — full-time, part-time, or as short-term cover when your own person is on leave. They sit in your site team, attend your meetings and answer to your project manager.",
    includes: [
      "Site-specific HSE plan, method statements and risk assessments",
      "Daily inspections, toolbox talks and permit-to-work oversight",
      "Incident investigation and client / regulator reporting",
      "Backed by our senior consultants, not left to work alone",
    ],
    duration: "Mobilised in ~2 weeks; days to full project duration",
    output: "Weekly HSE reports, inspection records and a close-out file",
  },
  {
    title: "Safety Audit & Gap Assessment",
    icon: ClipboardCheck,
    summary:
      "An independent check of where you actually stand. We review your documentation, walk the site with your team and interview the people doing the work — then measure all of it against the standard, client requirement or regulator expectation you are being judged on.",
    includes: [
      "Document and record review before we arrive",
      "Site walk-through with photographic evidence",
      "Interviews with supervisors and operatives",
      "Optional close-out visit to verify the fixes held",
    ],
    duration: "2–5 days on site, report within 5 working days",
    output: "Risk-graded findings report plus a corrective action plan naming an owner and date for every item",
  },
  {
    title: "HAZOP & SIL Studies",
    icon: ShieldAlert,
    summary:
      "Facilitated process hazard analysis for new designs, plant modifications and revalidation of ageing units. We chair the sessions independently so your process and operations teams can concentrate on the engineering rather than the paperwork.",
    includes: [
      "Node-by-node HAZOP chaired with your technical team",
      "Deviation, cause, consequence and safeguard register",
      "SIL determination by risk graph or LOPA",
      "Actions logged and tracked through to closure",
    ],
    duration: "Scoped by node count; typically 3–10 session days",
    output: "Full study report, safeguard register and tracked action log",
  },
  {
    title: "Risk Assessment & HIRA",
    icon: TriangleAlert,
    summary:
      "Hazard identification built around how your people actually work, not copied from a library. We assess task by task, so the controls that come out are practical enough that crews will follow them when nobody is watching.",
    includes: [
      "Task-based HIRA and aspect / impact registers",
      "Confined space, work at height and lifting assessments",
      "Control recommendations ranked by hierarchy of control",
      "Templates and coaching so your team can maintain them",
    ],
    duration: "1–4 days depending on activity count",
    output: "Assessment register with residual risk ratings and editable templates",
  },
  {
    title: "Fire Risk Assessment",
    icon: Flame,
    summary:
      "A structured fire safety review of your premises — ignition sources, fuel loads, compartmentation, detection, suppression, signage and means of escape — written to satisfy Civil Defence and your insurer, and to work on the night it matters.",
    includes: [
      "Survey of fire loading, compartmentation and escape routes",
      "Review of detection, alarm and suppression provision",
      "Evacuation strategy, drills and warden arrangements",
      "Fire safety training needs for your staff",
    ],
    duration: "1–3 days per building, depending on size and occupancy",
    output: "Fire risk assessment report with a prioritised remedial action schedule",
  },
  {
    title: "Permit-to-Work System Setup",
    icon: ScrollText,
    summary:
      "Most permit systems fail because they are too heavy to use, not because they are missing. We design a PTW system sized to your operation, then train the issuers, receivers and authorised gas testers who have to run it every day.",
    includes: [
      "Permit types, forms and authorisation matrix",
      "Hot work, confined space, excavation and isolation controls",
      "Issuer, receiver and authorised gas tester training",
      "Audit checklist so you can police it yourselves",
    ],
    duration: "2–6 weeks from design to trained-and-live",
    output: "Complete PTW procedure, forms, authorisation matrix and trained permit holders",
  },
  {
    title: "Emergency Response Planning",
    icon: Siren,
    summary:
      "Planning for the day it goes wrong — fire, medical emergency, gas release, rescue from height or confined space, or a site evacuation. We write the plan around your actual layout, muster points and response times, then test it with a live drill.",
    includes: [
      "Scenario identification and response procedures",
      "Roles, call-out tree and liaison with civil authorities",
      "Muster point, headcount and evacuation arrangements",
      "Live drill facilitation with a written debrief",
    ],
    duration: "2–4 weeks including one facilitated drill",
    output: "Emergency response plan, drill report and improvement actions",
  },
  {
    title: "HSE Management System Development",
    icon: FileCheck2,
    summary:
      "Building or rebuilding the system behind the paperwork. We structure your policies, procedures and records for ISO 45001 and ISO 14001 — and, because we are not a certification body, there is no conflict of interest in us preparing you for one.",
    includes: [
      "Gap analysis against ISO 45001 / ISO 14001",
      "Policy, procedure and emergency documentation set",
      "Internal audit programme and management review pack",
      "Support through the certification audit itself",
    ],
    duration: "Typically 3–6 months to certification-ready",
    output: "Complete documented management system plus trained internal auditors",
  },
  {
    title: "HSE Manpower & Competency",
    icon: Users,
    summary:
      "Screened HSE professionals on secondment, plus the competency framework behind them. When an audit finds a training gap, the same team closes it — we run accredited IOSH, NEBOSH, LEEA, Highfield and Scaffold Training Institute courses in-house.",
    includes: [
      "Screening and verification of HSE candidates",
      "Training needs analysis mapped to role and hazard",
      "In-house or on-site accredited course delivery",
      "Competency matrix and refresher scheduling",
    ],
    duration: "Secondment, contract or permanent placement",
    output: "Placed personnel, competency matrix and certification records",
  },
];

export function ConsultancyServices() {
  return (
    <section id="consultancy-services" className="scroll-mt-24 bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Consultancy Services"
          title="What we can take off your desk"
          description="Nine services covering the full arc of an HSE programme — from the study that identifies the hazard to the competent person who manages it on site. Every one is scoped and priced before work starts."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={Math.min(i, 5) * 0.07}>
                <article className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066b2]/10 text-[#0066b2] ring-1 ring-inset ring-[#0066b2]/15"
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-[#0066b2]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#000]">{service.summary}</p>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-navy-deep/55">
                    What it covers
                  </p>
                  <ul className="mt-2.5 space-y-2.5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#000]">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066b2]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-auto space-y-3 pt-6">
                    <div className="flex items-start gap-2.5">
                      <Clock
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#0066b2]"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <dt className="text-xs font-semibold uppercase tracking-wide text-navy-deep/55">
                          Typical timeline
                        </dt>
                        <dd className="mt-0.5 text-sm leading-snug text-[#000]">
                          {service.duration}
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <FileText
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#0066b2]"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <dt className="text-xs font-semibold uppercase tracking-wide text-navy-deep/55">
                          What you receive
                        </dt>
                        <dd className="mt-0.5 text-sm leading-snug text-[#000]">
                          {service.output}
                        </dd>
                      </div>
                    </div>
                  </dl>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

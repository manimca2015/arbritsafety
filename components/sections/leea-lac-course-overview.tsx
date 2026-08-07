import { Award, BadgeCheck, Clock, Users } from "lucide-react";

const details = [
  {
    icon: BadgeCheck,
    label: "Entry Requirement",
    description:
      "Completion of the LEEA Foundation course or previous Part 1 Entry (P1E) qualification. Participants must be over 16 years of age.",
  },
  {
    icon: Clock,
    label: "Duration",
    description: "5 Days",
  },
  {
    icon: Award,
    label: "Accreditation",
    description: "LEEA Approved (Lifting Equipment Engineers Association).",
  },
  {
    icon: Users,
    label: "Who Should Attend",
    description: "Inspectors, technicians, engineers, and safety professionals.",
  },
];

export function LeeaLacCourseOverview() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-[#0066b2] sm:text-4xl">
            LEEA Lifting Accessories Diploma (LAC)
          </h2>
          <h3 className="mt-4 font-heading text-xl font-bold text-[#000]">Course Overview & Aim</h3>
          <p className="mt-3 text-[#000]">
            To equip participants with advanced technical knowledge and practical skills to inspect, assess, and
            verify lifting accessories, ensuring they meet international safety standards and remain fit for
            purpose in demanding operational environments.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {details.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="group rounded-3xl border border-navy/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2] transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-[#0066b2]">{label}</h3>
              <p className="mt-2 text-sm text-[#000]">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#leea-name"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-orange px-8 text-base font-semibold text-white shadow-md shadow-orange/20 transition hover:bg-orange/90 hover:shadow-lg hover:shadow-orange/30"
          >
            Book Admission Now
          </a>
        </div>
      </div>
    </section>
  );
}

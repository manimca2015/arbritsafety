import { accreditations } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { AccreditationBadge } from "@/components/ui/accreditation-badge";

export function Certifications() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="International Certifications"
          title="Globally Recognized Accreditation"
          description="Every course is delivered under internationally recognized accreditation bodies, so your certificate carries weight wherever you work."
        />
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {accreditations.map((a) => (
            <AccreditationBadge key={a.name} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}

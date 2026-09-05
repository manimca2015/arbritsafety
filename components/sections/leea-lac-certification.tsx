import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

export function LeeaLacCertification() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading title="Certification" align="left" />
            <p className="mt-6 text-[#000]">
              Participants who successfully demonstrate competence in both theoretical and practical assessments
              will receive the LEEA Lifting Accessories Diploma (LAC), a globally recognised qualification valid
              for 5 years. This programme supersedes the previous Lifting Equipment General (LEG) Advanced
              Programme and reflects current industry standards and best practices.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-3xl border border-navy/10 bg-muted p-10 text-center shadow-sm">
            <div className="relative h-24 w-full max-w-xs">
              <Image
                src="/LEEA-Logo-1.webp"
                alt="Lifting Equipment Engineers Association (LEEA) accreditation logo — Arbrit Safety is a LEEA Licensed Training Partner in the UAE"
                fill
                sizes="(min-width: 1024px) 30vw, 80vw"
                className="object-contain"
              />
            </div>
            <p className="font-heading text-sm font-bold text-[#0066b2]">
              Arbrit – Authorised Provider of LEEA-Accredited Training in the UAE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

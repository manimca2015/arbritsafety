import { CourseClientsCarousel } from "@/components/sections/course-clients-carousel";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ClientLogo } from "@/lib/data";

const clientLogos: ClientLogo[] = [
  { src: "/course/Clients/acciona-dubai.png", alt: "Acciona" },
  { src: "/course/Clients/al-ali-dubai.png", alt: "Al Ali" },
  { src: "/course/Clients/alec-dubai.png", alt: "ALEC" },
  { src: "/course/Clients/Ecc-dubai.png", alt: "ECC" },
  { src: "/course/Clients/etsalat-dubai.png", alt: "Etisalat" },
  { src: "/course/Clients/kier-dubai.png", alt: "Kier" },
  { src: "/course/Clients/red-sea-dubai.png", alt: "Red Sea" },
  { src: "/course/Clients/Wj-dubai.png", alt: "WJ" },
];

export function ConsultancyClients() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Clients"
          title="Organisations that have trusted us with their HSE"
        />
        <Reveal>
          <div className="mt-10 rounded-3xl border border-navy/10 bg-muted p-6 shadow-sm md:p-8">
            <CourseClientsCarousel logos={clientLogos} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

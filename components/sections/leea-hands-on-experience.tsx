import Image from "next/image";
import { Award, GraduationCap, HardHat, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const gallery = [
  { image: "/Hands-on-Experience/constructions.webp", title: "Practical Lifting Area", icon: HardHat },
  { image: "/hero/slide-2-training-classroom.jpg", title: "Modern Classrooms", icon: GraduationCap },
  { image: "/Hands-on-Experience/IOSH-Managing-Safely.webp", title: "Safety Inspection Lab", icon: ShieldCheck },
  { image: "/Hands-on-Experience/LEEA-Courses-Dubai-UAE-1-1.webp", title: "Certification Ceremony", icon: Award },
];

export function LeeaHandsOnExperience() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Hands-on Experience"
          title="Our Learning Environment"
          description="Premium facilities designed to bridge the gap between theoretical knowledge and industrial application."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map(({ image, title, icon: Icon }) => (
            <div
              key={title}
              className="group overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0066b2]/30 hover:shadow-xl"
            >
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-muted to-white">
                <Image
                  src={image}
                  alt={`${title} — LEEA lifting equipment training in progress`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 border-t border-navy/10 px-5 py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2] transition-colors duration-300 group-hover:bg-[#0066b2] group-hover:text-white">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="font-heading text-sm font-bold text-[#0066b2]">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

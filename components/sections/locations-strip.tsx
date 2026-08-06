import Link from "next/link";
import { Building2, Flag, Landmark, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  { label: "Dubai", icon: Building2 },
  { label: "Abu Dhabi", icon: Landmark },
  { label: "KSA", icon: Flag },
];

export function LocationsStrip() {
  return (
    <section className="border-y border-navy/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between md:py-10">
        <p className="flex items-center gap-2 font-heading text-lg font-bold text-[#0066b2] sm:text-xl">
          <MapPin className="h-5 w-5 shrink-0 text-[#0066b2]" aria-hidden="true" />
          Health and Safety Training Courses in
        </p>
        <div className="flex flex-wrap gap-3">
          {locations.map(({ label, icon: Icon }) => (
            <Button
              key={label}
              asChild
              size="lg"
              variant="outline"
              className="group h-auto border-[#0066b2]/30 px-6 py-3.5 text-base font-semibold text-[#0066b2] transition-colors hover:border-[#0066b2] hover:bg-[#0066b2] hover:text-white"
            >
              <Link href="#contact">
                <Icon
                  className="mr-2 h-5 w-5 shrink-0 text-[#0066b2] transition-colors group-hover:text-white"
                  aria-hidden="true"
                />
                {label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

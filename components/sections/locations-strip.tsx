import Image from "next/image";
import { MapPin } from "lucide-react";

const locations = [
  { label: "Dubai", image: "/Dubai-blue.png", country: "United Arab Emirates" },
  { label: "Abu Dhabi", image: "/Abu-Dhabi-white.png", country: "United Arab Emirates" },
  { label: "KSA", image: "/Saudi-blue.png", country: "Kingdom of Saudi Arabia" },
];

export function LocationsStrip() {
  return (
    <section className="border-y border-navy/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between md:py-10">
        <p className="flex items-center gap-2 font-heading text-lg font-bold text-[#0066b2] sm:text-xl">
          <MapPin className="h-5 w-5 shrink-0 text-[#0066b2]" aria-hidden="true" />
          Health and Safety Training Courses in
        </p>
        <div className="grid grid-cols-1 gap-4 sm:flex sm:flex-wrap">
          {locations.map(({ label, image, country }) => {
            const isFeatured = label === "Abu Dhabi";
            return (
              <div
                key={label}
                className={`group flex flex-col items-center justify-center gap-2 rounded-2xl border px-5 py-4 text-base font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-w-[220px] sm:gap-3 sm:px-8 sm:py-6 sm:text-xl ${
                  isFeatured
                    ? "border-[#0066b2] bg-[#0066b2] text-white hover:shadow-[#0066b2]/30"
                    : "border-[#0066b2]/20 bg-white text-[#0066b2] hover:border-[#0066b2]/40"
                }`}
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24 ${
                    isFeatured ? "bg-white/15" : "bg-[#0066b2]/[0.06]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={label}
                    width={72}
                    height={72}
                    className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
                  />
                </div>
                <span className="font-heading">{label}</span>
                <span
                  className={`h-0.5 w-8 rounded-full ${isFeatured ? "bg-white/50" : "bg-[#0066b2]/40"}`}
                />
                <span
                  className={`text-xs font-normal uppercase tracking-wide sm:text-sm ${
                    isFeatured ? "text-white/75" : "text-[#0066b2]/60"
                  }`}
                >
                  {country}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

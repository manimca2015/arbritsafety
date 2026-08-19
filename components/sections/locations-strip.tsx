import { MapPin } from "lucide-react";

const locations = [
  { label: "Dubai", country: "United Arab Emirates" },
  { label: "Abu Dhabi", country: "United Arab Emirates" },
  { label: "KSA", country: "Kingdom of Saudi Arabia" },
];

export function LocationsStrip() {
  return (
    <section className="border-y border-navy/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-4 md:flex-row md:justify-between md:py-5">
        <p className="flex items-center gap-2 text-sm font-semibold text-[#0066b2] sm:text-base">
          <MapPin className="h-4 w-4 shrink-0 text-[#0066b2]" aria-hidden="true" />
          Health and Safety Training Courses in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {locations.map(({ label, country }, i) => (
            <div key={label} className="flex items-center gap-x-6">
              <span className="text-sm font-semibold text-[#000]">
                {label}
                <span className="ml-1 font-normal text-[#000]/50">— {country}</span>
              </span>
              {i < locations.length - 1 && (
                <span className="hidden h-4 w-px bg-navy/15 sm:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

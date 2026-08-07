import { Building2, Flag, Landmark, MapPin } from "lucide-react";

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
        <div className="grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
          {locations.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className={`flex items-center justify-center gap-2 rounded-2xl border border-[#0066b2]/30 px-6 py-4 text-base font-semibold shadow-sm sm:min-w-[220px] sm:gap-3 sm:px-12 sm:py-8 sm:text-xl ${
                label === "Abu Dhabi" ? "bg-[#0066b2] text-white" : "text-[#0066b2]"
              }`}
            >
              <Icon
                className={`h-6 w-6 shrink-0 sm:h-8 sm:w-8 ${label === "Abu Dhabi" ? "text-white" : "text-[#0066b2]"}`}
                aria-hidden="true"
              />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

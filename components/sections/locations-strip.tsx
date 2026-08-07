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
        <div className="flex flex-wrap gap-3">
          {locations.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className={`flex min-w-[220px] items-center justify-center gap-3 rounded-2xl border border-[#0066b2]/30 px-12 py-8 text-xl font-semibold shadow-sm ${
                label === "Abu Dhabi" ? "bg-[#0066b2] text-white" : "text-[#0066b2]"
              }`}
            >
              <Icon
                className={`h-8 w-8 shrink-0 ${label === "Abu Dhabi" ? "text-white" : "text-[#0066b2]"}`}
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

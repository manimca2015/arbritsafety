import type { Accreditation } from "@/lib/data";
import { BadgeCheck } from "lucide-react";

export function AccreditationBadge({ name, description }: Accreditation) {
  return (
    <div className="group flex items-start gap-3 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0066b2]/30 hover:shadow-lg hover:shadow-[#0066b2]/10">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2] transition duration-300 group-hover:bg-[#0066b2] group-hover:text-white">
        <BadgeCheck className="h-6 w-6" aria-hidden="true" />
      </span>
      <div>
        <p className="font-heading text-base font-semibold text-[#0066b2]">{name}</p>
        <p className="mt-1 text-sm text-[#000]">{description}</p>
      </div>
    </div>
  );
}

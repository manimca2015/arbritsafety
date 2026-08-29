"use client";

import { usePathname } from "next/navigation";
import { HseOfficersCta } from "@/components/sections/hse-officers-cta";

/**
 * Renders the global HSE officers CTA on every page except /about, where the
 * page places it directly under the mission section instead.
 */
export function HseOfficersCtaSlot() {
  const pathname = usePathname();
  if (pathname === "/about") return null;
  return <HseOfficersCta />;
}

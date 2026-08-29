"use client";

import { usePathname } from "next/navigation";
import { CoursesDirectory } from "@/components/layout/courses-directory";

/**
 * Renders the global courses directory on every page except /consultancy, where
 * a full course listing pulls against the page's consultancy enquiry CTA.
 */
export function CoursesDirectorySlot() {
  const pathname = usePathname();
  if (pathname === "/consultancy") return null;
  return <CoursesDirectory />;
}

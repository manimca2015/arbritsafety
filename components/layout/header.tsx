"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navLinks, coursesMegaMenu, contactInfo } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "bg-surface/90 backdrop-blur shadow-sm" : "bg-surface"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Arbrit Safety"
            width={235}
            height={76}
            preload
            className="h-9 w-auto"
          />
        </Link>

        <NavigationMenu className="hidden lg:flex" aria-label="Main">
          <NavigationMenuList>
            {navLinks[0] && (
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href={navLinks[0].href}
                    className="px-3 py-2 text-sm font-medium text-navy hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                  >
                    {navLinks[0].label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-navy">
                Courses
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[min(920px,90vw)] p-6">
                  <div className="grid max-h-[70vh] grid-cols-2 gap-x-6 gap-y-5 overflow-y-auto pr-2 lg:grid-cols-4">
                    {coursesMegaMenu.map((group, groupIndex) => (
                      <div key={groupIndex}>
                        {group.title && (
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy/60">
                            {group.title}
                          </p>
                        )}
                        <ul className="space-y-2">
                          {group.links.map((link, linkIndex) => (
                            <li key={`${groupIndex}-${linkIndex}`}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={link.href}
                                  className="text-sm text-navy hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                                >
                                  {link.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {navLinks.slice(1).map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-navy hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                  >
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${contactInfo.phones[0].number.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-navy"
          >
            <Phone className="h-4 w-4 text-orange" aria-hidden="true" />
            {contactInfo.phones[0].number}
          </a>
          <Button asChild className="bg-orange text-white hover:bg-orange/90">
            <Link href="/courses">Join Course</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[360px]">
            <SheetTitle className="font-heading text-navy">Menu</SheetTitle>
            <nav className="mt-6 flex flex-1 flex-col gap-4 overflow-y-auto px-4" aria-label="Mobile">
              <Link
                href={navLinks[0]?.href ?? "/about"}
                className="text-base font-medium text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
              >
                {navLinks[0]?.label}
              </Link>
              <div>
                {coursesMegaMenu.map((group, groupIndex) => (
                  <div key={groupIndex} className="mt-3">
                    {group.title && (
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy/60">
                        {group.title}
                      </p>
                    )}
                    <div className="flex flex-col gap-2">
                      {group.links.map((link, linkIndex) => (
                        <Link
                          key={`${groupIndex}-${linkIndex}`}
                          href={link.href}
                          className="text-sm text-navy/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-orange text-white hover:bg-orange/90">
                <Link href="/courses">Join Course</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

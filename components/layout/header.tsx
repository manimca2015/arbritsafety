"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
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
import { navLinks, coursesMegaMenu } from "@/lib/data";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const isCoursesActive = pathname.startsWith("/courses") || pathname.startsWith("/course/");
  const contactLink = navLinks.find((link) => link.label === "Contact Us");

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const setHeaderHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--site-header-height",
          `${headerRef.current.offsetHeight}px`
        );
      }
    };
    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);
    return () => window.removeEventListener("resize", setHeaderHeight);
  }, []);

  const linkColor = "text-[#000]";

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full bg-surface/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/header-logo.svg"
            alt="Arbrit Safety"
            width={180}
            height={60}
            preload
            className="rounded-md"
          />
        </Link>

        <NavigationMenu className="hidden lg:ml-auto lg:flex" aria-label="Main" viewport={false}>
          <NavigationMenuList>
            {navLinks[0] && (
              <NavigationMenuItem>
                <Link
                  href={navLinks[0].href}
                  aria-current={isActive(navLinks[0].href) ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                    isActive(navLinks[0].href) ? "bg-white text-[#000]" : linkColor
                  }`}
                >
                  {navLinks[0].label}
                </Link>
              </NavigationMenuItem>
            )}

            <NavigationMenuItem>
              <NavigationMenuTrigger
                onClick={() => router.push("/courses")}
                aria-current={isCoursesActive ? "page" : undefined}
                className={`rounded-full text-sm font-medium transition-colors ${
                  isCoursesActive ? "bg-white text-[#000] hover:bg-white" : `bg-transparent ${linkColor}`
                }`}
              >
                Courses
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className="md:fixed md:left-0 md:right-0 md:w-full group-data-[viewport=false]/navigation-menu:top-[var(--site-header-height,64px)] group-data-[viewport=false]/navigation-menu:mt-0 group-data-[viewport=false]/navigation-menu:rounded-none border-t border-navy/10"
              >
                <div className="mx-auto max-w-[1800px] px-8 py-4 md:px-12">
                  <ul className="columns-4 gap-x-4 xl:columns-5 2xl:columns-6">
                    {coursesMegaMenu
                      .flatMap((group) => group.links)
                      .map((link, linkIndex) => (
                        <li key={linkIndex} className="break-inside-avoid">
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block p-0.5 text-sm leading-tight text-[#000] hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                            >
                              {link.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {navLinks.slice(1).filter((link) => link.label !== "Contact Us").map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                    isActive(link.href) ? "bg-white text-[#000]" : linkColor
                  }`}
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}

            {contactLink && (
              <NavigationMenuItem>
                <Button asChild variant="outline" className="border-navy/30 text-[#000] hover:bg-navy/5">
                  <Link href={contactLink.href} aria-current={isActive(contactLink.href) ? "page" : undefined}>
                    {contactLink.label}
                  </Link>
                </Button>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-4 lg:flex">
          <Button asChild className="bg-[#0066b2] text-white hover:bg-[#0066b2]/90">
            <Link href="/courses">
              Join Course <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[360px]">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <Image
              src="/header-logo.svg"
              alt="Arbrit Safety"
              width={140}
              height={46}
              className="mt-2 ml-4"
            />
            <nav className="mt-2 flex flex-1 flex-col gap-4 overflow-y-auto px-4" aria-label="Mobile">
              <Link
                href={navLinks[0]?.href ?? "/about"}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={navLinks[0] && isActive(navLinks[0].href) ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                  navLinks[0] && isActive(navLinks[0].href) ? "bg-muted text-[#000]" : "text-[#000]"
                }`}
              >
                {navLinks[0]?.label}
              </Link>
              <div>
                <div
                  className={`flex items-center justify-between rounded-lg text-base font-medium ${
                    isCoursesActive ? "bg-muted text-[#000]" : "text-[#000]"
                  }`}
                >
                  <Link
                    href="/courses"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isCoursesActive ? "page" : undefined}
                    className="flex-1 rounded-lg px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                  >
                    Courses
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileCoursesOpen((open) => !open)}
                    aria-expanded={mobileCoursesOpen}
                    aria-label={mobileCoursesOpen ? "Collapse courses list" : "Expand courses list"}
                    className="mr-1 rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileCoursesOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileCoursesOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    {coursesMegaMenu.map((group, groupIndex) => (
                      <div key={groupIndex} className="mt-3 first:mt-0 px-3">
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
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm text-[#000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                    isActive(link.href) ? "bg-muted text-[#000]" : "text-[#000]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-[#0066b2] text-white hover:bg-[#0066b2]/90">
                <Link href="/courses" onClick={() => setMobileMenuOpen(false)}>
                  Join Course <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

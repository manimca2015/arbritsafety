import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CoursesDirectorySlot } from "@/components/layout/courses-directory-slot";
import { HseOfficersCtaSlot } from "@/components/sections/hse-officers-cta-slot";
import { BackToTop } from "@/components/ui/back-to-top";
import { WhatsappFloatButton } from "@/components/ui/whatsapp-float-button";
import { MobileCtaBar } from "@/components/ui/mobile-cta-bar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arbrit Safety Training & Consultancy | HSE Courses in Dubai, Abu Dhabi & KSA",
    template: "%s | Arbrit Safety Training & Consultancy",
  },
  description:
    "Arbrit Safety Training & Consultancy is the first LEEA Licensed Training Partner in the UAE & KSA, delivering accredited health & safety, lifting, scaffolding, and fire safety training.",
  openGraph: {
    title: "Arbrit Safety Training & Consultancy",
    description:
      "Accredited health & safety training in Dubai, Abu Dhabi and KSA. First LEEA Licensed Training Partner in the region.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-surface pb-[calc(4rem+env(safe-area-inset-bottom))] text-[#000] font-sans md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-orange focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <HseOfficersCtaSlot />
        <CoursesDirectorySlot />
        <Footer />
        <BackToTop />
        <WhatsappFloatButton />
        <MobileCtaBar />
      </body>
    </html>
  );
}

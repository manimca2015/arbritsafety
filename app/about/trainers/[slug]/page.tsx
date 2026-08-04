import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { trainers } from "@/lib/data";

export function generateStaticParams() {
  return trainers.map((trainer) => ({ slug: trainer.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trainer = trainers.find((t) => t.slug === slug);
  if (!trainer) return {};
  return {
    title: trainer.name,
    description: trainer.shortBio,
  };
}

export default async function TrainerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trainer = trainers.find((t) => t.slug === slug);
  if (!trainer) notFound();

  return (
    <>
      <PageHeader
        title={trainer.name}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: trainer.name },
        ]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
              <Image src={trainer.image} alt={trainer.name} fill className="object-cover" />
            </div>
            <h1 className="mt-5 font-heading text-2xl font-bold text-navy">{trainer.name}</h1>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-orange">
              {trainer.credentials}
            </p>
            <p className="mt-4 max-w-xl font-heading text-lg italic text-navy/70">
              &ldquo;{trainer.quote}&rdquo;
            </p>
          </div>

          <h2 className="mt-14 font-heading text-2xl font-bold text-navy">Biography</h2>
          <div className="mt-5 space-y-4">
            {trainer.bio.map((paragraph, i) => (
              <p key={i} className="text-navy/70">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

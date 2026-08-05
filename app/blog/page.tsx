import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { BlogCardGrid } from "@/components/sections/blog-card-grid";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest articles from Arbrit Safety Training & Consultancy.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        eyebrow="Insights From the Field"
        description="Latest articles and updates from Arbrit Safety Training & Consultancy."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <BlogCardGrid />
        </div>
      </section>
    </>
  );
}

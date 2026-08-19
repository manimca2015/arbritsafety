import { SectionHeading } from "@/components/ui/section-heading";
import { VideoTestimonials } from "@/components/sections/video-testimonials";

export function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Testimonials" title="What Our Students Say" />
        <div className="mt-12">
          <VideoTestimonials />
        </div>
      </div>
    </section>
  );
}

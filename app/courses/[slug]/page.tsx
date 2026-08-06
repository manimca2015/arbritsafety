import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { JoinCourseDialog } from "@/components/sections/join-course-dialog";
import { CourseClientsCarousel } from "@/components/sections/course-clients-carousel";
import { courseDetails, featuredCourses } from "@/lib/data";

export function generateStaticParams() {
  return courseDetails.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courseDetails.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.aim,
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = courseDetails.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();

  const course = courseDetails[index];
  const prevCourse = courseDetails.length > 1 ? courseDetails[(index - 1 + courseDetails.length) % courseDetails.length] : null;
  const nextCourse = courseDetails.length > 1 ? courseDetails[(index + 1) % courseDetails.length] : null;

  return (
    <>
      <PageHeader
        title={course.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: course.title },
        ]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[7fr_3fr]">
            <div>
              <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-lg sm:h-96">
                <Image src={course.image} alt={course.title} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
              </div>
              {course.duration && (
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-orange">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {course.duration}
                </div>
              )}

              {course.aim && (
                <>
                  <h2 className="mt-10 font-heading text-2xl font-bold text-[#000]">Course Aim and Content</h2>
                  <p className="mt-4 text-[#000]">{course.aim}</p>
                </>
              )}

              {course.courseInfoParagraphs && (
                <>
                  <h2 className="mt-10 font-heading text-2xl font-bold text-[#000]">Course Info</h2>
                  {course.courseInfoParagraphs.map((paragraph, i) => (
                    <p key={i} className="mt-4 text-[#000]">
                      {paragraph}
                    </p>
                  ))}
                </>
              )}

              {course.topics && (
                <>
                  <h2 className="mt-10 font-heading text-2xl font-bold text-[#000]">
                    Topics covered during this course include:
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#000]">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0066b2]" aria-hidden="true" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {course.durationHeading && (
                <>
                  <h2 className="mt-10 font-heading text-2xl font-bold text-[#000]">Duration</h2>
                  <p className="mt-4 text-[#000]">{course.durationHeading}</p>
                </>
              )}

              {course.targetDelegates && (
                <>
                  <h2 className="mt-10 font-heading text-2xl font-bold text-[#000]">Target Delegates</h2>
                  <p className="mt-4 text-[#000]">{course.targetDelegates}</p>
                </>
              )}

              {course.certificationIntro && course.certificationLinkUrl && (
                <>
                  <h2 className="mt-10 font-heading text-2xl font-bold text-[#000]">Certification</h2>
                  <p className="mt-4 text-[#000]">
                    {course.certificationIntro}{" "}
                    <a
                      href={course.certificationLinkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-orange underline"
                    >
                      {course.certificationLinkUrl} <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </p>
                </>
              )}
              {course.certificationHighlight && (
                <p className="mt-4 rounded-2xl border border-orange/20 bg-orange/10 p-4 text-sm font-semibold text-[#000]">
                  {course.certificationHighlight}
                </p>
              )}

              <div className="mt-10">
                <JoinCourseDialog courseTitle={course.title} />
              </div>

              {prevCourse && nextCourse && (
                <div className="mt-14 grid gap-4 border-t border-navy/10 pt-8 sm:grid-cols-2">
                  <Link
                    href={`/courses/${prevCourse.slug}`}
                    className="rounded-2xl border border-navy/10 bg-muted p-5 hover:border-orange/40"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">Previous</p>
                    <p className="mt-1 text-sm font-semibold text-[#000]">{prevCourse.title}</p>
                  </Link>
                  <Link
                    href={`/courses/${nextCourse.slug}`}
                    className="rounded-2xl border border-navy/10 bg-muted p-5 text-right hover:border-orange/40"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">Next</p>
                    <p className="mt-1 text-sm font-semibold text-[#000]">{nextCourse.title}</p>
                  </Link>
                </div>
              )}
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="font-heading text-xl font-bold text-[#0066b2]">Other Courses</h2>
              <div className="mt-6 space-y-5">
                {featuredCourses
                  .filter((c) => c.slug !== course.slug)
                  .map((c) => {
                    return (
                      <Link
                        key={c.slug}
                        href={c.href}
                        className="group flex items-center gap-4 rounded-2xl border border-navy/10 bg-white p-3 shadow-sm transition hover:shadow-lg hover:border-orange/40"
                      >
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                          <Image src={c.image} alt={c.title} fill sizes="64px" className="object-cover" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs font-semibold uppercase tracking-wide text-orange">
                            {c.category}
                          </span>
                          <h3 className="mt-1 font-heading text-sm font-bold leading-snug text-[#000] group-hover:text-orange">
                            {c.title}
                          </h3>
                          <p className="mt-1 flex items-center gap-1 text-xs text-navy/60">
                            {c.duration} · {c.level}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {course.clientLogos && (
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center font-heading text-3xl font-bold text-[#0066b2] sm:text-4xl">Our Clients</h2>
            <div className="mt-10 rounded-3xl border border-navy/10 bg-muted p-6 shadow-sm md:p-8">
              <CourseClientsCarousel logos={course.clientLogos} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

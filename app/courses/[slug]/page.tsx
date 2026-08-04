import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Clock, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { JoinCourseDialog } from "@/components/sections/join-course-dialog";
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
        <div className="mx-auto max-w-3xl px-6">
          <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-lg sm:h-96">
            <Image src={course.image} alt={course.title} fill sizes="768px" className="object-cover" />
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-orange">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {course.duration}
          </div>

          <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Course Aim and Content</h2>
          <p className="mt-4 text-navy/70">{course.aim}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-navy">
            Topics covered during this course include:
          </h2>
          <ul className="mt-5 space-y-3">
            {course.topics.map((topic, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-navy/80">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                {topic}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Duration</h2>
          <p className="mt-4 text-navy/70">{course.durationHeading}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Target Delegates</h2>
          <p className="mt-4 text-navy/70">{course.targetDelegates}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Certification</h2>
          <p className="mt-4 text-navy/70">
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
          <p className="mt-4 rounded-2xl border border-orange/20 bg-orange/10 p-4 text-sm font-semibold text-navy">
            {course.certificationHighlight}
          </p>

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
                <p className="mt-1 text-sm font-semibold text-navy">{prevCourse.title}</p>
              </Link>
              <Link
                href={`/courses/${nextCourse.slug}`}
                className="rounded-2xl border border-navy/10 bg-muted p-5 text-right hover:border-orange/40"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">Next</p>
                <p className="mt-1 text-sm font-semibold text-navy">{nextCourse.title}</p>
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">Other Courses</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.slug}
                  className="flex flex-col rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:shadow-lg"
                >
                  <div
                    aria-hidden="true"
                    className="flex h-32 items-center justify-center rounded-t-2xl bg-gradient-to-br from-navy to-navy-deep"
                  >
                    <Icon className="h-10 w-10 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-orange">
                      {c.category}
                    </span>
                    <h3 className="mt-2 font-heading text-lg font-bold text-navy">{c.title}</h3>
                    <p className="mt-3 flex-1 text-sm text-navy/70">
                      {c.duration} · {c.level}
                    </p>
                    <Link
                      href={c.href}
                      className="mt-4 flex items-center gap-1 text-sm font-semibold text-orange hover:underline"
                    >
                      View Course <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

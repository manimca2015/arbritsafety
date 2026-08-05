import { PageHeader } from "@/components/layout/page-header";
import { JoinCourseDialog } from "@/components/sections/join-course-dialog";

export default function IOSHCoursePage() {
  return (
    <>
      <PageHeader
        title={"IOSH Training Courses  - heading"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: "IOSH" },
        ]}
      />

      <main className="mx-auto max-w-3xl px-6 py-12">
        <img src="/course/IOSH.jpg" alt="IOSH" style={{ width: "100%", height: "auto" }} />

        <p className="mt-6">
          The Institution of Occupational Safety and Health (IOSH) is the world’s largest health and safety membership body. With 44,000 members in 99 countries, IOSH is committed to ensuring that global work practices are safe, healthy and sustainable.
        </p>

        <p className="mt-4">
          We Arbrit, is accredited from iosh since 2009 to deliver managing and working safely courses and also make sure these courses are delivered to the best of its practices.
        </p>

        <p className="mt-4">
          IOSH training courses combine up-to-date theory and practice to enable around 100,000 people a year to earn qualifications. Earning an IOSH qualification will allow the holder to ensure that the health and safety practices in their workplace are current, effective and well managed.
        </p>

        <img src="/course/iosh-logo-77ECC99F87-seeklogo.com_.png" alt="IOSH logo" style={{ width: "100%", height: "auto", marginTop: 24 }} />

        <p className="mt-6">
          IOSH is a globally recognized body for health and safety professionals, established in 1945. It provides a wide range of training courses designed to improve the competence and effectiveness of health and safety practitioners. These courses cover various topics such as risk assessment, accident investigation, occupational health, and safety management systems. IOSH courses are delivered through approved training providers globally and are highly valued by employers across industries. By completing IOSH training courses, learners enhance their knowledge and skills to manage health and safety risks effectively, ensuring a safer workplace for all. - highlighted text
        </p>

        <div className="mt-8 overflow-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: 8 }}>Course Name</th>
                <th style={{ textAlign: "left", padding: 8 }}>Course Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: 8 }}>IOSH Managing Safely</td>
                <td style={{ padding: 8 }}>IOSH</td>
              </tr>
              <tr>
                <td style={{ padding: 8 }}>IOSH Working Safely</td>
                <td style={{ padding: 8 }}>IOSH</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <JoinCourseDialog courseTitle={"IOSH Training Courses"} />
        </div>
      </main>
    </>
  );
}

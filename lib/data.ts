import type { LucideIcon } from "lucide-react";
import {
  Anchor,
  ClipboardCheck,
  GraduationCap,
  ShieldCheck,
  Layers,
  Flame,
  LifeBuoy,
  Fuel,
  HardHat,
  HeartPulse,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type MegaMenuGroup = {
  title: string;
  links: NavLink[];
};

export type CourseCategory = {
  slug: string;
  title: string;
  icon: LucideIcon;
  href: string;
};

export type Course = {
  slug: string;
  title: string;
  category: "International" | "General Safety";
  duration: string;
  level: string;
  icon: LucideIcon;
  href: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix: string;
};

export type Accreditation = {
  name: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  href: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type FooterLinkGroup = {
  title: string;
  links: NavLink[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Consultancy", href: "/consultancy" },
  { label: "Career", href: "/career" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const coursesMegaMenu: MegaMenuGroup[] = [
  {
    title: "International Courses",
    links: [
      { label: "Rope Access", href: "/courses/rope-access" },
      { label: "Lead Auditor", href: "/courses/lead-auditor" },
      { label: "Highfield", href: "/courses/highfield" },
      { label: "IOSH", href: "/courses/iosh" },
      { label: "STI Scaffold Training", href: "/courses/sti" },
    ],
  },
  {
    title: "General Safety Courses",
    links: [
      { label: "Fire Fighting", href: "/courses/fire-fighting" },
      { label: "Rescue Training", href: "/courses/rescue-training" },
      { label: "Oil & Gas Safety", href: "/courses/oil-and-gas" },
      { label: "Construction Safety", href: "/courses/construction-safety" },
      { label: "First Aid", href: "/courses/first-aid" },
    ],
  },
  {
    title: "Corporate",
    links: [
      { label: "Corporate Training", href: "/corporate-training" },
      { label: "HSE Officer Supply", href: "/corporate-training#hse-officers" },
    ],
  },
];

export const courseCategories: CourseCategory[] = [
  { slug: "rope-access", title: "Rope Access", icon: Anchor, href: "/courses/rope-access" },
  { slug: "lead-auditor", title: "Lead Auditor", icon: ClipboardCheck, href: "/courses/lead-auditor" },
  { slug: "highfield", title: "Highfield", icon: GraduationCap, href: "/courses/highfield" },
  { slug: "iosh", title: "IOSH", icon: ShieldCheck, href: "/courses/iosh" },
  { slug: "sti", title: "STI Scaffold Training", icon: Layers, href: "/courses/sti" },
  { slug: "fire-fighting", title: "Fire Fighting", icon: Flame, href: "/courses/fire-fighting" },
  { slug: "rescue-training", title: "Rescue Training", icon: LifeBuoy, href: "/courses/rescue-training" },
  { slug: "oil-and-gas", title: "Oil & Gas Safety", icon: Fuel, href: "/courses/oil-and-gas" },
  { slug: "construction-safety", title: "Construction Safety", icon: HardHat, href: "/courses/construction-safety" },
  { slug: "first-aid", title: "First Aid", icon: HeartPulse, href: "/courses/first-aid" },
];

export const featuredCourses: Course[] = [
  { slug: "rope-access", title: "Rope Access", category: "International", duration: "5 Days", level: "All Levels", icon: Anchor, href: "/courses/rope-access" },
  { slug: "lead-auditor", title: "Lead Auditor", category: "International", duration: "5 Days", level: "Advanced", icon: ClipboardCheck, href: "/courses/lead-auditor" },
  { slug: "iosh-managing-safely", title: "IOSH Managing Safely", category: "International", duration: "3 Days", level: "Management", icon: ShieldCheck, href: "/courses/iosh" },
  { slug: "sti-scaffold-inspector", title: "STI Scaffold Inspector", category: "International", duration: "4 Days", level: "Intermediate", icon: Layers, href: "/courses/sti" },
  { slug: "fire-fighting", title: "Fire Fighting", category: "General Safety", duration: "2 Days", level: "All Levels", icon: Flame, href: "/courses/fire-fighting" },
  { slug: "first-aid", title: "Basic First Aid, CPR & AED", category: "General Safety", duration: "1 Day", level: "All Levels", icon: HeartPulse, href: "/courses/first-aid" },
];

export const stats: Stat[] = [
  { label: "Years of Experience", value: 20, suffix: "+" },
  { label: "Students Trained", value: 15000, suffix: "+" },
  { label: "Course Pass Rate", value: 98, suffix: "%" },
  { label: "Accredited Courses", value: 50, suffix: "+" },
];

export const accreditations: Accreditation[] = [
  {
    name: "LEEA",
    description:
      "Official Licensed Training Partner (LTP) — the first in the UAE & KSA — delivering the LEEA Foundation Certificate (FOU) and LAC Diploma.",
  },
  {
    name: "IOSH",
    description:
      "Institution of Occupational Safety and Health recognized Managing Safely and Working Safely programs.",
  },
  {
    name: "OSHAD Aligned",
    description:
      "Training programs structured to meet Abu Dhabi OSHAD occupational health & safety compliance requirements.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Malaakash",
    role: "Course Trainee",
    quote:
      "I fully appreciate and am satisfied with this training. It was very helpful — every topic advertised was covered thoroughly and clearly.",
    rating: 5,
  },
  {
    name: "Hamza Mahar",
    role: "LEEA Trainee",
    quote:
      "I completed my LEEA training at Arbrit Institute and it was a great experience. The instructor was knowledgeable and the institute's coordination was seamless.",
    rating: 5,
  },
  {
    name: "Nadir Khan",
    role: "Corporate Client",
    quote:
      "Arbrit Training & Safety Consultancy provides top-notch training with expert instructors and excellent coordination from start to finish.",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "The Role of Accredited Train the Trainer Courses in Meeting UAE OSHAD Compliance Requirements",
    excerpt:
      "UAE OSHAD regulations require certified trainers. Here's how an accredited Train the Trainer course keeps your organization compliant.",
    category: "Compliance",
    href: "/blog/train-the-trainer-oshad-compliance",
  },
  {
    title: "Renew Your LEEA Lifting Supervisor Certification: 3-Year Validity Explained",
    excerpt:
      "LEEA Lifting Supervisor certification is valid for three years. Here's what's involved in renewing it on time.",
    category: "LEEA",
    href: "/blog/renew-leea-lifting-supervisor-certification",
  },
  {
    title: "LEEA Training Courses Dubai: From Risk Assessment to Method Statements",
    excerpt:
      "A look at how Arbrit's LEEA training courses in Dubai take trainees from risk assessment fundamentals to method statement writing.",
    category: "LEEA",
    href: "/blog/leea-training-courses-dubai",
  },
];

export const faqs: Faq[] = [
  {
    question: "Are Arbrit's courses internationally accredited?",
    answer:
      "Yes. Arbrit is the first LEEA Licensed Training Partner in the UAE & KSA, and also delivers IOSH-recognized programs alongside courses aligned with OSHAD compliance requirements.",
  },
  {
    question: "How long is my certificate valid for?",
    answer:
      "Validity depends on the course — for example, LEEA Lifting Supervisor certification is valid for 3 years. Your certificate will state its exact validity period.",
  },
  {
    question: "Do you offer corporate or group training?",
    answer:
      "Yes. We deliver on-site corporate training for teams of any size, and can tailor course scheduling to your project timeline.",
  },
  {
    question: "Can Arbrit supply HSE officers for our project?",
    answer:
      "Yes. Alongside training, we supply qualified HSE officers for short-term and long-term project deployments.",
  },
  {
    question: "Do you deliver training outside Dubai?",
    answer:
      "Yes. We deliver training across Dubai, Abu Dhabi, and the Kingdom of Saudi Arabia.",
  },
  {
    question: "How soon will I receive my certificate after the course?",
    answer:
      "Certificates are typically issued shortly after successful completion and assessment — your trainer will confirm the exact timeline for your course.",
  },
];

export const footerCourseColumns: FooterLinkGroup[] = [
  {
    title: "Lifting & Access",
    links: [
      { label: "Lead Auditor", href: "/courses/lead-auditor" },
      { label: "Rope Access Training", href: "/courses/rope-access" },
      { label: "Lifting Supervisor Refresher", href: "/courses/lifting-supervisor-refresher" },
      { label: "Crane Rigging & Signalling", href: "/courses/crane-rigging-signalling" },
    ],
  },
  {
    title: "Scaffolding",
    links: [
      { label: "Scaffold Erector", href: "/courses/scaffold-erector" },
      { label: "Scaffold Supervisor", href: "/courses/scaffold-supervisor" },
      { label: "Scaffold Inspector", href: "/courses/scaffold-inspector" },
      { label: "Scaffolding Erection & Inspection", href: "/courses/scaffolding-erection-inspection" },
    ],
  },
  {
    title: "Management Safety",
    links: [
      { label: "IOSH Managing Safely", href: "/courses/iosh-managing-safely" },
      { label: "IOSH Working Safely", href: "/courses/iosh-working-safely" },
      { label: "Train the Trainer", href: "/courses/train-the-trainer" },
      { label: "Working at Height", href: "/courses/working-at-height" },
    ],
  },
  {
    title: "Emergency & Fire",
    links: [
      { label: "Basic First Aid, CPR & AED", href: "/courses/first-aid" },
      { label: "Fire Warden", href: "/courses/fire-warden" },
      { label: "Fire Marshal", href: "/courses/fire-marshal" },
      { label: "Confined Space Entry & Rescue", href: "/courses/confined-space-entry-rescue" },
    ],
  },
];

// TODO(user): verify and replace with confirmed business contact details before
// launch. The reference screenshot was too low-resolution to reliably transcribe
// phone/email/address digits, so these are placeholders, not verified facts.
export const contactInfo = {
  phone: "+971 4 000 0000",
  email: "info@arbritsafety.com",
  address: "Dubai, United Arab Emirates",
};

export const courseSelectOptions = [
  "Rope Access",
  "Lead Auditor",
  "Highfield",
  "IOSH",
  "STI Scaffold Training",
  "Fire Fighting",
  "First Aid",
  "Other",
];

export const locationSelectOptions = ["Dubai", "Abu Dhabi", "Saudi Arabia", "Other"];

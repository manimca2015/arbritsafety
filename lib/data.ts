import type { LucideIcon } from "lucide-react";
import {
  Anchor,
  ClipboardCheck,
  GraduationCap,
  ShieldCheck,
  Layers,
  Flame,
  HeartPulse,
  Award,
  BadgeCheck,
  LifeBuoy,
  Fuel,
  HardHat,
  Forklift,
  ShieldAlert,
  Globe,
  Camera,
  Briefcase,
  Video,
  X,
  MessageCircle,
  Phone,
  Info,
  BookOpen,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type HeroSlide = {
  image: string;
  heading: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  secondaryCtaIcon: LucideIcon;
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
  image: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Trainer = {
  slug: string;
  name: string;
  credentials: string;
  image: string;
  shortBio: string;
  quote: string;
  bio: string[];
};

export type PhoneNumber = {
  label: string;
  number: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Office = {
  label: string;
  phones: string[];
  address: string;
};

export const navLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Consultancy", href: "/consultancy" },
  { label: "Career", href: "/career" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const heroSlides: HeroSlide[] = [
  {
    image: "/hero/slide-1-construction-safety.jpg",
    heading: "Health & Safety Training That Protects Your People and Your Business",
    subtext:
      "Accredited HSE, lifting, scaffolding, and fire safety courses in Dubai, Abu Dhabi and KSA.",
    ctaLabel: "Enroll Now",
    ctaHref: "/courses",
    secondaryCtaLabel: "Contact Us",
    secondaryCtaHref: "/contact",
    secondaryCtaIcon: Phone,
  },
  {
    image: "/hero/slide-2-training-classroom.jpg",
    heading: "Accredited Training Across Dubai, Abu Dhabi & KSA",
    subtext:
      "Multilingual courses (English/Hindi/Urdu/Arabic) delivered by certified, experienced instructors.",
    ctaLabel: "Explore Courses",
    ctaHref: "/courses",
    secondaryCtaLabel: "About Us",
    secondaryCtaHref: "/about",
    secondaryCtaIcon: Info,
  },
  {
    image: "/hero/slide-3-lifting-operations.jpg",
    heading: "First LEEA Licensed Training Partner in the Region",
    subtext:
      "Delivering the LEEA Foundation Certificate and LAC Diploma across the UAE & KSA.",
    ctaLabel: "Talk to an Advisor",
    ctaHref: "#contact",
    secondaryCtaLabel: "View Courses",
    secondaryCtaHref: "/courses",
    secondaryCtaIcon: BookOpen,
  },
];

export const coursesMegaMenu: MegaMenuGroup[] = [
  {
    title: "",
    links: [
      { label: "Lead Auditor", href: "/courses/lead-auditor" },
      { label: "Rope Access Training", href: "/courses/rope-access" },
      { label: "STI – Scaffold Inspector", href: "/courses/sti-scaffold-inspector" },
      { label: "STI – Scaffold Erector", href: "/courses/sti-scaffold-erector" },
      { label: "STI – Scaffold Competent Person", href: "/courses/sti-scaffold-competent-person" },
      { label: "Basic First Aid CPR & AED", href: "/courses/first-aid" },
      { label: "Pedeatric First Aid", href: "/courses/pedeatric-first-aid" },
      { label: "Tower Crane Rescue", href: "/courses/tower-crane-rescue" },
      { label: "Confined Space Entry & Rescue", href: "/courses/confined-space-entry-rescue" },
      { label: "Confined Space Entry", href: "/courses/confined-space-entry" },
      { label: "Scaffolding Competent Person – STI", href: "/courses/scaffolding-competent-person-sti" },
      { label: "Scaffolding Erector – STI", href: "/courses/scaffolding-erector-sti" },
      { label: "Scaffolding Inspector – STI", href: "/courses/scaffolding-inspector-sti" },
      { label: "Scaffolding Competent Person", href: "/courses/scaffolding-competent-person" },
      { label: "Construction Hoist Operator", href: "/courses/construction-hoist-operator" },
    ],
  },
  {
    title: "",
    links: [
      { label: "Concrete Gun Operator", href: "/courses/concrete-gun-operator" },
      { label: "Power Hand Tools Operator", href: "/courses/power-hand-tools-operator" },
      { label: "Block Cutting Machine Operator", href: "/courses/block-cutting-machine-operator" },
      { label: "Scissor Lift Operator", href: "/courses/scissor-lift-operator" },
      { label: "Roller Operator", href: "/courses/roller-operator" },
      { label: "Manlift Operator", href: "/courses/manlift-operator" },
      { label: "Cradle Operator", href: "/courses/cradle-operator" },
      { label: "Dumber Operator", href: "/courses/dumber-operator" },
      { label: "Excavator Operator", href: "/courses/excavator-operator" },
      { label: "Shovel Operator", href: "/courses/shovel-operator" },
      { label: "Forklift Operator", href: "/courses/forklift-operator" },
      { label: "Mobile Crane Operator", href: "/courses/mobile-crane-operator" },
      { label: "Lift Operator", href: "/courses/lift-operator" },
      { label: "Tunnel Rescue", href: "/courses/tunnel-rescue" },
      { label: "Flagman", href: "/courses/flagman" },
      { label: "IOSH Managing Safely", href: "/courses/iosh-managing-safely" },
      { label: "IOSH Supervising Safely", href: "/courses/iosh-supervising-safely" },
      { label: "IOSH Working Safely", href: "/courses/iosh-working-safely" },
    ],
  },
  {
    title: "",
    links: [
      { label: "IOSH Managing Safely", href: "/courses/iosh-managing-safely" },
      { label: "Train the Trainer", href: "/courses/train-the-trainer" },
      { label: "Basic First Aid", href: "/courses/basic-first-aid" },
      { label: "Risk Assesment", href: "/courses/risk-assesment" },
      { label: "Food Safety", href: "/courses/food-safety" },
      { label: "COSHH", href: "/courses/coshh" },
      { label: "Confined Space", href: "/courses/confined-space" },
      { label: "Defensive Driving", href: "/courses/defensive-driving" },
      { label: "HAZOP", href: "/courses/hazop" },
      { label: "H2S", href: "/courses/h2s" },
      { label: "PTW", href: "/courses/ptw" },
      { label: "TRA", href: "/courses/tra" },
      { label: "Tunnel Rescue", href: "/courses/tunnel-rescue" },
      { label: "Confined Space Exit & Rescue", href: "/courses/confined-space-exit-rescue" },
      { label: "Electrical Safety", href: "/courses/electrical-safety" },
      { label: "Confined Space", href: "/courses/confined-space" },
      { label: "Hand Tools", href: "/courses/hand-tools" },
      { label: "Basic Oil Spil", href: "/courses/basic-oil-spil" },
    ],
  },
  {
    title: "",
    links: [
      { label: "Basic Lifeline", href: "/courses/basic-lifeline" },
      { label: "Lifting Supervisor Refresher Training", href: "/courses/lifting-supervisor-refresher-training" },
      { label: "Basic Electrical Safety Awareness", href: "/courses/basic-electrical-safety-awareness" },
      { label: "Gas Analyst Training & Certification", href: "/courses/gas-analyst-training-certification" },
      { label: "Basic Scaffolding Erection & Dismantling", href: "/courses/basic-scaffolding-erection-dismantling" },
      { label: "Basic Scaffolding Inspection", href: "/courses/basic-scaffolding-inspection" },
      { label: "Scaffolding Supervisor Training", href: "/courses/scaffolding-supervisor-training" },
      { label: "Fire Warden Level 1", href: "/courses/fire-warden-level-1" },
      { label: "Fire Fighting", href: "/courses/fire-fighting" },
      { label: "Fire Marshall", href: "/courses/fire-marshall" },
      { label: "Fire Safety", href: "/courses/fire-safety" },
      { label: "General Safety Awareness", href: "/courses/general-safety-awareness" },
      { label: "Environmental Awareness", href: "/courses/environmental-awareness" },
      { label: "Dangerous Goods Safety Awareness", href: "/courses/dangerous-goods-safety-awareness" },
    ],
  },
];

export const courseCategories: CourseCategory[] = [
  { slug: "rope-access", title: "Rope Access", icon: Anchor, href: "/courses/rope-access" },
  { slug: "lead-auditor", title: "Lead Auditor", icon: ClipboardCheck, href: "/courses/lead-auditor" },
  { slug: "highfield", title: "Highfield", icon: GraduationCap, href: "/courses/highfield" },
  { slug: "iosh", title: "IOSH", icon: ShieldCheck, href: "/courses/iosh" },
  { slug: "sti", title: "STI", icon: Layers, href: "/courses/sti" },
  { slug: "leea-diploma", title: "LEEA Diploma", icon: Award, href: "/courses/leea-diploma" },
  { slug: "leea-course", title: "LEEA course", icon: BadgeCheck, href: "/courses/leea-course" },
];

export const featuredCourses: Course[] = [
  { slug: "fire-fighting", title: "Fire Fighting", category: "General Safety", duration: "2 Days", level: "All Levels", icon: Flame, href: "/courses/fire-fighting" },
  { slug: "rescue-training", title: "Rescue-Training", category: "General Safety", duration: "3 Days", level: "All Levels", icon: LifeBuoy, href: "/courses/rescue-training" },
  { slug: "oil-and-gas", title: "Oil and Gas", category: "General Safety", duration: "2 Days", level: "All Levels", icon: Fuel, href: "/courses/oil-and-gas" },
  { slug: "construction-safety", title: "Construction Safety", category: "General Safety", duration: "2 Days", level: "All Levels", icon: HardHat, href: "/courses/construction-safety" },
  { slug: "first-aid", title: "First Aid", category: "General Safety", duration: "1 Day", level: "All Levels", icon: HeartPulse, href: "/courses/first-aid" },
  { slug: "forklift-operator", title: "Forklift Operator", category: "General Safety", duration: "2 Days", level: "All Levels", icon: Forklift, href: "/courses/forklift-operator" },
  { slug: "safety-awareness", title: "Safety Awareness", category: "General Safety", duration: "1 Day", level: "All Levels", icon: ShieldAlert, href: "/courses/general-safety-awareness" },
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
  {
    name: "Fatima Al Suwaidi",
    role: "HSE Officer",
    quote:
      "The scaffolding course was well structured and practical. Trainers explained every step clearly and answered all our questions patiently.",
    rating: 5,
  },
  {
    name: "Ravi Kumar",
    role: "Site Supervisor",
    quote:
      "Booked a group of our site team for the confined space training. Scheduling was flexible and the trainers adapted the pace to the group well.",
    rating: 4,
  },
  {
    name: "Omar Sheikh",
    role: "Project Manager",
    quote:
      "Arranged corporate training for our project staff across multiple courses. Communication was smooth and certificates arrived on time.",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "The Role of Accredited Train the Trainer Courses in Meeting UAE OSHAD Compliance Requirements",
    excerpt:
      "UAE organisations cannot build a strong safety culture by depending only on one-time external training. Site teams change. Risks change.",
    category: "Compliance",
    href: "/blog/train-the-trainer-oshad-compliance",
    image: "/blog/train-the-trainer-course-300x300.webp",
  },
  {
    title: "Renew Your LEEA Lifting Supervisor Certification: 3-Year Validity Explained",
    excerpt:
      "Lifting supervision is not a role where old knowledge can sit untouched forever. Equipment changes. Site procedures change. Client requirements",
    category: "LEEA",
    href: "/blog/renew-leea-lifting-supervisor-certification",
    image: "/blog/LEEA-Lifting-Supervisor-Certification-300x300.webp",
  },
  {
    title: "LEEA Training Courses Dubai: From Risk Assessment to Method Statements",
    excerpt:
      "Why LEEA Training Courses in Dubai are important for professionals involved in lifting operations. The training helps learners understand how",
    category: "LEEA",
    href: "/blog/leea-training-courses-dubai",
    image: "/blog/LEEA-Training-Courses-300x276.webp",
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

export const footerQuickLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Consultancy", href: "/consultancy" },
  { label: "Career", href: "/career" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const contactInfo = {
  phones: [
    { label: "Dubai", number: "+971 58 669 5300" },
    { label: "Abu Dhabi", number: "+971 50 242 5436" },
    { label: "KSA", number: "+966 59 334 1476" },
  ] as PhoneNumber[],
  email: "info@arbritsafety.com",
  address: "F-12, 1st Floor, Union Coop Al Twar, Al Nahda St, Dubai",
  ksaEntity: "Arbrit Safety Training - Saudi Arabia",
};

export const offices: Office[] = [
  {
    label: "Dubai",
    phones: ["+971 4 881 8742", "+971 58 669 5300"],
    address: "F-12, 1st Floor, Union Coop Al Twar, Al Nahda St, Dubai",
  },
  {
    label: "Abu Dhabi",
    phones: ["+971 2 621 1715", "+971 50 242 5436"],
    address: "202, Al Silaymiyah St, Al Danah 4, Abu Dhabi 2215",
  },
  {
    label: "Kingdom of Saudi Arabia",
    phones: ["+966 11 516 0114", "+966 59 334 1476"],
    address: "Zayd ibn Thabt, 7406, Office No. 2, Al Malaz, Riyadh, KSA",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/arbritsafetytrainingdubai", icon: Globe },
  { label: "Instagram", href: "https://www.instagram.com/arbritdubai", icon: Camera },
  { label: "Twitter", href: "https://twitter.com/ArbritD", icon: X },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/20386197", icon: Briefcase },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCXFmosNtIuUbPff5nzL5Ydw", icon: Video },
  { label: "WhatsApp", href: "https://wa.me/971586695300", icon: MessageCircle },
];

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

export const careerCourseOptions = [
  "IOSH",
  "LEEA-Lifting Operations",
  "Safety Awareness",
  "First Aid",
  "OTHM – Level 6",
  "MEWP Training",
  "STI",
  "Construction Safety",
  "Lead Auditor",
  "Highfield",
  "Oil and Gas",
  "Rescue Training",
  "Rope Access Training",
  "General Safety",
  "Fire Fighting",
  "HSE Manpower Consultancy",
];

export const careerLocationOptions = ["Dubai", "Abu Dhabi"];

export const careerJobOpenings = [
  "HSE Manager",
  "HSE Engineers",
  "Junior HSE Trainers",
  "Sales Coordinator",
  "Appointed person for lifting operations",
];

export const trainers: Trainer[] = [
  {
    slug: "brijith-shaji",
    name: "Brijith Shaji",
    credentials: "B.Tech (Fire & Safety), GradIOSH",
    image: "/trainer/Brijith-shaji.jpg",
    shortBio:
      "Brijith Shaji is an Internationally and Dubai Municipality certified Trainer authorized to conduct the NEBOSH, IOSH, HighField, Medic First aid and Scaffold Training Institute courses.",
    quote: "Push yourself to your limits. Thats how you truly grow.",
    bio: [
      "Brijith Shaji is an Internationally and Dubai Municipality certified Trainer authorized to conduct the NEBOSH, IOSH, HighField, Medic First aid and Scaffold Training Institute courses. Students and managers have described Brijith as both personable and dynamic who captivates participants using a combination of approaches—group exercises, short videos, accident case studies, images of hazards, and group discussion.",
      "With almost 14 years in managing safety for small and large businesses, heavy and light manufacturing to construction, Brijith brings his experience into the classroom and creates an engaging learning experience for all.He has key roles that have included operationally planning for disasters, carrying out Safety Audits and implementing Remediation, Mitigation or Removal requirements.",
      "He is a focused and hardworking person who enjoys imparting information to all ages and sectors of the community, communicating the importance of Safety. He work above and beyond the employers requirements at all times. As a trainer, his core capabilities include conducting safety / risk analysis at the work place and devising solutions to avoid safety hazards.",
    ],
  },
  {
    slug: "ishtiaq-hasham-khan",
    name: "Engr. Ishtiaq Hasham Khan",
    credentials: "Grad IOSH, STI",
    image: "/trainer/Ishtiaq-Hasham.jpg",
    shortBio:
      "A self-motivated and hard working qualified Health and Safety Trainer / Consultant with over 8 years experience in all aspects of Health and Safety over a diverse range of industries.",
    quote: "The aim of education is to advance knowledge and share truth",
    bio: [
      "A self-motivated and hard working qualified Health and Safety Trainer / Consultant with over 8 years experience in all aspects of Health and Safety over a diverse range of industries. Accredited trainer to deliver IOSH and STI training courses.",
      "Training courses are delivered in an interesting way, using a variety of resources to engage the Learners, enabling them to understand and take on board, the subject matter with confidence.",
      "Able to use own initiative as well as work as part of a team. Proven training / leadership skills,including managing and motivating staff to achieve company health and safety objectives. A very effective trainer / communicator at all levels within an organisation.",
    ],
  },
  {
    slug: "anshadh-rahim",
    name: "Anshadh Rahim",
    credentials: "HSE Trainer",
    image: "/trainer/anshadh-rahim.jpeg",
    shortBio:
      "HSE Trainer with shown skill in content development, creating learning programmes and initiatives.",
    quote: "The aim of education is to advance knowledge and share truth",
    bio: [
      "HSE Trainer with shown skill in content development, creating learning programmes and initiatives. Trainer has proven his ability to make the sessions engaging and delivering professionally, Having all the basic safety accreditations to deliver the services to the best of its practice",
      "Able to use own initiative as well as work as part of a team. Proven training / leadership skills,including managing and motivating staff to achieve company health and safety objectives. A very effective trainer / communicator at all levels within an organisation.",
    ],
  },
];

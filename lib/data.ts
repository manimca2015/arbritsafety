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
  highlight?: string;
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
  image: string;
  href: string;
};

export type Course = {
  slug: string;
  title: string;
  category: "International" | "General Safety";
  duration: string;
  level: string;
  icon: LucideIcon;
  image: string;
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

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  bulletList?: string[];
};

export type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  href: string;
  image: string;
  content?: BlogSection[];
};

export type ClientLogo = {
  src: string;
  alt: string;
};

export type CourseDetail = {
  slug: string;
  title: string;
  duration?: string;
  image: string;
  aim?: string;
  topics?: string[];
  durationHeading?: string;
  targetDelegates?: string;
  certificationIntro?: string;
  certificationLinkUrl?: string;
  certificationHighlight?: string;
  courseInfoParagraphs?: string[];
  clientLogos?: ClientLogo[];
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
    highlight: "Your People and Your Business",
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
    highlight: "Dubai, Abu Dhabi & KSA",
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
    highlight: "in the Region",
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
      { label: "Lead Auditor", href: "/courses/irca-lead-auditor" },
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
  { slug: "rope-access", title: "Rope Access", icon: Anchor, image: "/international-course/rope-access.webp", href: "/courses/rope-access" },
  { slug: "lead-auditor", title: "Lead Auditor", icon: ClipboardCheck, image: "/international-course/Lead-Auditor.jpg", href: "/courses/irca-lead-auditor" },
  { slug: "highfield", title: "Highfield", icon: GraduationCap, image: "/international-course/HIghfield.jpg", href: "/courses/highfield" },
  { slug: "iosh", title: "IOSH", icon: ShieldCheck, image: "/international-course/IOSH.jpg", href: "/course/iosh-institution-of-occupational-safety-and-health/" },
  { slug: "sti", title: "STI", icon: Layers, image: "/international-course/STI-Scaffold-Training-Institute.jpg", href: "/courses/sti" },
  { slug: "leea-diploma", title: "LEEA Diploma", icon: Award, image: "/international-course/LEEA-diploma.jpg", href: "/courses/leea-diploma" },
  { slug: "leea-course", title: "LEEA course", icon: BadgeCheck, image: "/international-course/LEEA.jpg", href: "/courses/leea-course-dubai" },
];

export const featuredCourses: Course[] = [
  { slug: "fire-fighting", title: "Fire Fighting", category: "General Safety", duration: "2 Days", level: "All Levels", icon: Flame, image: "/general-safety-courses/FIRE-FIGHTING.jpg", href: "/courses/fire-fighting" },
  { slug: "rescue-training", title: "Rescue-Training", category: "General Safety", duration: "3 Days", level: "All Levels", icon: LifeBuoy, image: "/general-safety-courses/Rescue-Training.jpg", href: "/courses/rescue-training" },
  { slug: "oil-and-gas", title: "Oil and Gas", category: "General Safety", duration: "2 Days", level: "All Levels", icon: Fuel, image: "/general-safety-courses/Oil-and-gas.jpg", href: "/courses/oil-and-gas" },
  { slug: "construction-safety", title: "Construction Safety", category: "General Safety", duration: "2 Days", level: "All Levels", icon: HardHat, image: "/general-safety-courses/constructions.jpg", href: "/courses/construction-safety" },
  { slug: "first-aid", title: "First Aid", category: "General Safety", duration: "1 Day", level: "All Levels", icon: HeartPulse, image: "/general-safety-courses/first-aid.jpg", href: "/courses/first-aid" },
  { slug: "forklift-operator", title: "Forklift Operator", category: "General Safety", duration: "2 Days", level: "All Levels", icon: Forklift, image: "/general-safety-courses/Forklift-Operator.jpg", href: "/courses/forklift-operator" },
  { slug: "safety-awareness", title: "Safety Awareness", category: "General Safety", duration: "1 Day", level: "All Levels", icon: ShieldAlert, image: "/general-safety-courses/safety-awareness.jpg", href: "/courses/general-safety-awareness" },
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
    content: [
      {
        paragraphs: [
          "UAE organisations cannot build a strong safety culture by depending only on one-time external training. Site teams change. Risks change. Procedures change. New employees join. Contractors enter the workplace. Supervisors need reminders. Someone, somewhere, will still ignore the obvious warning sign because human civilisation remains a bold experiment.",
          "This is why accredited train the trainer courses in dubai matter. They help organisations build competent internal trainers who can deliver safety information clearly, consistently, and in a way that employees can actually use.",
        ],
      },
      {
        heading: "OSHAD, ADOSH-SF, and Training Competence",
        paragraphs: [
          "Many companies still use the term OSHAD when referring to Abu Dhabi’s occupational safety and health framework. The current documents use ADOSH-SF under Abu Dhabi Public Health Center, with the 2024 Training, Awareness and Competency guideline updating the acronym from OSHAD-SF to ADOSH-SF and changing references from OSHAD to ADPHC.",
          "The framework places clear responsibility on entities to identify and provide required training for employees and stakeholders, confirm understanding of OSH technical and procedural requirements, deliver specific OSH training, ensure competence, and maintain training and competency records.",
          "That means training cannot be random. It needs structure, records, role relevance, and competent delivery.",
        ],
      },
      {
        heading: "Why Train the Trainer Supports Compliance",
        paragraphs: [
          "Train the Trainer programmes help organisations develop people who can deliver workplace training properly. This is especially useful for induction, toolbox talks, task-specific awareness, refresher sessions, internal safety briefings, and contractor orientation.",
          "The ADOSH-SF guideline defines training as an organised activity aimed at improving performance or helping someone reach the required knowledge or skill level. It also defines competency as having adequate training, qualifications, and experience to carry out a task safely and efficiently.",
          "This matters because competence is not created by handing someone a slide deck and hoping for the best. A trainer needs to understand planning, delivery, communication, questioning, assessment, and learner engagement.",
        ],
      },
      {
        heading: "What Accredited Train the Trainer Courses Teach",
        paragraphs: [
          "A good Train the Trainer course should help participants move from “I know this topic” to “I can teach this topic clearly.”",
        ],
        bulletList: [
          "Trainer roles and responsibilities",
          "Session planning and preparation",
          "Delivery methods",
          "Questioning techniques",
          "Time management",
          "Inclusive learning environments",
          "Assessment methods",
          "Feedback and improvement",
        ],
      },
      {
        paragraphs: [
          "Arbrit Safety’s Highfield Level 3 Train the Trainer course is designed as a first step for new trainers, focusing on effective workplace training delivery, planning, preparation, delivery methods, questioning techniques, and time management.",
        ],
      },
      {
        heading: "Why Internal Trainers Matter in High-Risk Workplaces",
        paragraphs: [
          "High-risk workplaces need repeated safety communication. Construction sites, industrial facilities, logistics operations, maintenance teams, oil and gas projects, and infrastructure works all depend on daily safety awareness.",
          "Internal trainers can support this by delivering consistent sessions across teams and shifts. They can reinforce local procedures, explain site-specific hazards, and make training more relevant to the actual work being done.",
          "External training is still important for accredited certifications and specialist topics. But internal trainers help keep safety alive between formal courses. Otherwise, safety becomes a certificate folder, and certificate folders are famously bad at stopping incidents.",
        ],
      },
      {
        heading: "Training Records and Refreshers",
        paragraphs: [
          "OSH compliance also depends on documentation. Organisations need to show who was trained, when training was delivered, what was covered, and whether the employee understood the content.",
          "The ADOSH-SF guideline also addresses refresher training, explaining that it may be required due to legislation updates, previous accidents, technical updates, or changes to systems, with training plans holding information on refresh intervals.",
          "Train the Trainer helps organisations manage this more effectively because trained internal personnel can support recurring sessions, refresher briefings, and targeted updates.",
        ],
      },
      {
        heading: "Build Internal Training Capability with Arbrit Safety",
        paragraphs: [
          "Arbrit Safety offers train the trainer courses in dubai through its Highfield Level 3 Train the Trainer programme, suitable for internal and external trainers who want to improve workplace training skills. For organisations working under OSHAD or ADOSH-SF expectations, Arbrit Safety helps build practical internal training capability, supporting better safety communication, stronger competency records, and more consistent workplace safety performance across UAE teams.",
        ],
      },
    ],
  },
  {
    title: "Renew Your LEEA Lifting Supervisor Certification: 3-Year Validity Explained",
    excerpt:
      "Lifting supervision is not a role where old knowledge can sit untouched forever. Equipment changes. Site procedures change. Client requirements",
    category: "LEEA",
    href: "/blog/renew-leea-lifting-supervisor-certification",
    image: "/blog/LEEA-Lifting-Supervisor-Certification-300x300.webp",
    content: [
      {
        paragraphs: [
          "Lifting supervision is not a role where old knowledge can sit untouched forever. Equipment changes. Site procedures change. Client requirements change. Project risk profiles change. And, because the universe enjoys paperwork, certification validity also needs attention.",
          "For professionals working in UAE lifting operations, renewing LEEA Lifting Supervisor certification helps show that competence is current. It also supports employer records, project compliance, prequalification requirements, and confidence during audits.",
          "Arbrit Safety’s LEEA lifting operations certification information states that participants must complete written assessment to earn the Certificate of Achievement from LEEA-UK, with certificates verifiable through the LEEA website and valid for 3 years.",
        ],
      },
      {
        heading: "Why 3-Year Validity Matters",
        paragraphs: [
          "A 3-year validity period helps keep lifting professionals updated. Lifting work carries serious risk, so refresher training is not just an admin task. It helps confirm that supervisors still understand safe systems of work, lifting plans, equipment documentation, site control, communication, and risk management.",
          "A lot can change in three years. A supervisor may move from small lifts to complex crane operations. A site may introduce new equipment. A company may change its procedures. A client may demand updated competency records.",
          "Renewal helps prevent the classic human habit of assuming “I did this course once” equals “I am current forever.” Cute. Dangerous, but cute.",
        ],
      },
      {
        heading: "What to Review Before Renewal",
        paragraphs: [
          "Before renewing, professionals should review their recent lifting experience, project exposure, incident history, and any gaps in current knowledge.",
          "Important areas include:",
        ],
        bulletList: [
          "Lift planning and supervision",
          "Risk assessment review",
          "Method statement understanding",
          "Communication and signalling",
          "Equipment certification checks",
          "Lifting accessories inspection awareness",
          "Ground condition control",
          "Exclusion zone management",
          "Emergency response during lifting operations",
        ],
      },
      {
        paragraphs: [
          "The aim is to refresh practical competence, not just replace an expired certificate with a newer PDF.",
        ],
      },
      {
        heading: "How LEEA Diploma Pathways Support Growth",
        paragraphs: [
          "A Lifting Supervisor certificate supports site supervision, but professionals who want deeper technical development may also explore a LEEA diploma route. Diploma-level training is useful for people involved in inspection, testing, examination, maintenance, and repair of lifting equipment and accessories.",
          "LEEA’s Lifting Accessories Diploma is designed for professionals involved in the testing, inspection, examination, and repair or maintenance of lifting accessories, with instructor-led training listed as 5 days.",
          "For UAE professionals, this pathway can support career growth from supervision into more technical lifting equipment roles, compliance responsibilities, or inspection-related work.",
        ],
      },
      {
        heading: "When Should You Start the Renewal Process?",
        paragraphs: [
          "Do not wait until the certificate has already expired. Start checking renewal needs at least a few months before the validity date ends, especially if your employer, client, or project requires active certification.",
          "Expired certification can create problems during mobilisation, site access, tender documentation, client audits, or internal competency reviews. Nothing says “professional planning” like realising your certificate expired right before a project starts. Stunning theatre.",
        ],
      },
      {
        heading: "Who Should Consider LEEA Diploma Courses?",
        paragraphs: [
          "LEEA diploma courses in dubai are more suitable for professionals who want deeper technical knowledge of lifting equipment and accessories. This can include engineers, inspectors, technicians, lifting coordinators, QA/QC teams, HSE professionals, and experienced lifting personnel.",
          "Arbrit Safety’s LEEA Diploma page lists the LEEA Foundation Certificate and LEEA Lifting Accessories Diploma, with the Foundation Certificate at 3 days and the Lifting Accessories Diploma at 5 days.",
        ],
      },
      {
        heading: "Keep Your Lifting Competence Current with Arbrit Safety",
        paragraphs: [
          "Arbrit Safety supports LEEA-related training in the UAE through recognised lifting pathways, including LEEA Foundation Certificate, Lifting Accessories Diploma, Appointed Person, Crane Lift Supervisor, and related lifting programmes. For professionals renewing Lifting Supervisor certification or exploring LEEA Diploma courses, Arbrit Safety provides a practical route to maintain current competence, strengthen documentation, and build a safer long-term lifting career.",
        ],
      },
    ],
  },
  {
    title: "LEEA Training Courses Dubai: From Risk Assessment to Method Statements",
    excerpt:
      "Why LEEA Training Courses in Dubai are important for professionals involved in lifting operations. The training helps learners understand how",
    category: "LEEA",
    href: "/blog/leea-training-courses-dubai",
    image: "/blog/LEEA-Training-Courses-300x276.webp",
    content: [
      {
        paragraphs: [
          "A lifting operation can look simple from the outside. A crane arrives, the load is attached, the team gives signals, and the lift happens. Very neat, until you remember that every lift involves load weight, ground conditions, equipment capacity, lifting accessories, communication, weather, access, exclusion zones, and people standing far too close to things they should respect more.",
          "That is why LEEA Training Courses in Dubai are important for professionals involved in lifting operations. The training helps learners understand how lifting safety moves from planning documents to actual site control.",
        ],
      },
      {
        heading: "Why Risk Assessment Comes First",
        paragraphs: [
          "A lifting risk assessment identifies what could go wrong before the lift starts. It considers the load, location, equipment, team, environment, access, nearby structures, and possible failure points.",
          "For UAE projects, this is especially important because lifting work often happens in busy construction sites, oil and gas facilities, logistics yards, ports, warehouses, industrial plants, and infrastructure projects. The risk assessment is not paperwork for decoration. It is the starting point for deciding whether the lift can be done safely.",
          "LEEA’s Foundation Certificate is designed to build understanding of lifting equipment, safe lifting practices, legislation, standards, inspection, maintenance, rating, and lifting equipment applications.",
        ],
      },
      {
        heading: "What a Method Statement Should Do",
        paragraphs: [
          "A method statement explains how the lifting activity will be carried out. It should connect directly to the risk assessment and give the team a clear sequence of work.",
          "A good lifting method statement should cover the lift objective, equipment selection, lifting accessories, team roles, communication method, exclusion zone, ground condition controls, emergency arrangements, and step-by-step lifting sequence.",
          "If the risk assessment identifies the hazards but the method statement does not control them, the documents are not working together. They are just two files sitting politely in a folder, contributing nothing to civilisation.",
        ],
      },
      {
        heading: "How LEEA Training Builds Practical Competence",
        paragraphs: [
          "Good LEEA Training in Dubai should help professionals understand both the technical and behavioural sides of lifting safety. It is not enough to know the names of accessories or crane parts. Participants need to understand responsibility, planning, communication, inspection awareness, and control measures.",
          "Arbrit Safety’s LEEA Appointed Person training covers roles and responsibilities, crane appreciation, duty charts, ground conditions, crane mat calculations, safe working loads, lifting accessories, slinging techniques, communication, lift planning, risk assessments, and method statements.",
          "These topics matter because lifting failures rarely come from one issue. They often come from several small gaps combining at the worst possible time.",
        ],
      },
      {
        heading: "Who Needs This Training?",
        paragraphs: [
          "LEEA Training Courses in Dubai are useful for appointed persons, lifting supervisors, riggers, engineers, HSE officers, site supervisors, lifting coordinators, inspectors, technicians, and project teams involved in lifting operations.",
          "For beginners, the LEEA Foundation Certificate can support basic understanding. For more advanced roles, Appointed Person and diploma-level routes build stronger technical capability.",
        ],
      },
      {
        heading: "Documentation Is Only Useful When Teams Understand It",
        paragraphs: [
          "Many projects already have risk assessments and method statements. The problem is whether the people using them actually understand them.",
          "Training helps teams read the documents properly, identify weak points, challenge unsafe assumptions, and apply controls on site. This is where competence starts to show. A trained lifting team does not simply sign a toolbox talk sheet and walk away. They understand what needs to happen and why.",
        ],
      },
      {
        heading: "Build Safer Lifting Operations with Arbrit Safety",
        paragraphs: [
          "Arbrit Safety is the first LEEA Licensed Training Partner in the UAE and KSA for the LEEA Foundation Certificate, and its UAE LEEA pathway includes Foundation Certificate and Lifting Accessories Diploma routes with classroom training, practical exercises, and competency-based assessments.",
          "For organisations and professionals looking for LEEA Training Courses in Dubai or LEEA Training in Dubai, Arbrit Safety supports practical lifting competence from risk assessment to method statements, helping teams plan better, supervise better, and reduce avoidable lifting risks on UAE projects.",
        ],
      },
    ],
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

export const historyGallery = [
  { src: "/about/Arbirt-safety-2-300x225.jpg", alt: "Arbrit Safety team" },
  { src: "/about/Arbirt-safety-3-300x200.jpg", alt: "Arbrit Safety team" },
  { src: "/about/Arbirt-safety-4-300x200.jpg", alt: "Arbrit Safety team" },
  { src: "/about/Arbirt-safety-5-300x200.jpg", alt: "Arbrit Safety team" },
  { src: "/about/Arbirt-safety-6-300x200.jpg", alt: "Arbrit Safety team" },
  { src: "/about/blood-donation-2-big-300x225.jpg", alt: "Blood donation drive" },
  { src: "/about/blood-donation-3-big-300x225.jpg", alt: "Blood donation drive" },
  { src: "/about/blood-donation-award-big-300x225.jpg", alt: "Blood donation award" },
  { src: "/about/confined-space-big-scaled-300x182.jpg", alt: "Confined space safety" },
  { src: "/about/confined-space-training-big-scaled-300x186.jpg", alt: "Confined space training" },
  { src: "/about/fire-fighting-training-big-300x189.jpg", alt: "Fire fighting training" },
  { src: "/about/gitex-conference-big-1-scaled-300x225.jpg", alt: "GITEX conference" },
  { src: "/about/iosh-event-big-scaled-300x225.jpg", alt: "IOSH event" },
  { src: "/about/Leea-big-300x225.png", alt: "LEEA event" },
  { src: "/about/managing-safely-big-300x228.jpg", alt: "Managing Safely training" },
  { src: "/about/women-luncheon-big-300x226.jpg", alt: "Women's luncheon" },
  { src: "/about/women-luncheon-uae-big-300x225.jpg", alt: "Women's luncheon UAE" },
];

export const courseDetails: CourseDetail[] = [
  {
    slug: "leea-course-dubai",
    title: "LEEA Approved Appointed Person For Lifting Operations",
    duration: "5 Days Comprehensive",
    image: "/course/LEEA-Appointed-Lifting-Person.jpg",
    aim: "The aim of this course is to provide candidates with underpinning knowledge in order for them to understand the role and responsibility of the Appointed Person. Following completion of the course candidates will be able to identify and implement safety systems of work for lifting operations including writing risk assessments and method statements. As per UAE Construction Standards, appointed person is mandatory in all major lifting activities.",
    topics: [
      "Legislation",
      "LOLER, PUWER, HASAWA",
      "Codes of practice BS7121 part 1, 2 & 3",
      "Roles and responsibilities of personnel involved with lifting operations",
      "Crane appreciation – crane types, capabilities and limitations",
      "Duty charts",
      "Crane terminology",
      "Documentation and certification for lifting equipment",
      "and lifting equipment and lifting accessories",
      "Crane stability/ground conditions, crane mat calculations",
      "Rated Capacity Indicators (RCIs) and Safe Working Loads (SWL)",
      "Types of accessories and use",
      "Slinging techniques",
      "Down rating of accessories using Uniformal and Trignomerical Methods",
      "Sling Angles",
      "Communications",
      "Planning a lifting operation",
      "Writing a risk assessment (end test)",
      "Writing a method statement (end test)",
    ],
    durationHeading: "5 days",
    targetDelegates:
      "This course is aimed at anyone who is required plan safe systems of work using lifting equipment. It is recommended that prior to attending this course individuals should have some experience of working with lifting equipment, especially mobile cranes.",
    certificationIntro:
      "Every participant must complete the written assessment in order to be eligible for earning the Certificate of Achievement from LEEA-UK. These certificates can be verified from LEEA website",
    certificationLinkUrl: "https://leeaint.com/verfiy-certificate",
    certificationHighlight: "The Certificate of Achievement is valid for a period of 3 years",
  },
  {
    slug: "rope-access",
    title: "Rope Access",
    image: "/course/rope-access-_1_-1024x683.webp",
    courseInfoParagraphs: [
      "Rope access system is a safe method of working at height where ropes and associated equipment are used to gain access to and from the work position, and to be supported there. The advantage of using rope access methods mainly lies in the safety and speed with which workers can get to or from difficult locations in order to carry out their work, often with minimal impact on other operations, surrounding areas and the environment. Another major benefit is the reduction of the combination of the total man-hours and perceived level of risk for a particular task (man-at-risk hours) when compared with other means of access and their associated risks and costs.",
      "The primary objective when using rope access methods is to carry out the work efficiently, with minimal accidents, incidents or dangerous occurrences. In order to ensure a safe system of work is maintained at all times, whilst avoiding damage to property or harm to the environment, careful planning and documented risk assessments are undertaken for each operation.",
    ],
    clientLogos: [
      { src: "/course/Clients/acciona-dubai.png", alt: "Acciona" },
      { src: "/course/Clients/al-ali-dubai.png", alt: "Al Ali" },
      { src: "/course/Clients/alec-dubai.png", alt: "ALEC" },
      { src: "/course/Clients/Ecc-dubai.png", alt: "ECC" },
      { src: "/course/Clients/etsalat-dubai.png", alt: "Etisalat" },
      { src: "/course/Clients/kier-dubai.png", alt: "Kier" },
      { src: "/course/Clients/red-sea-dubai.png", alt: "Red Sea" },
      { src: "/course/Clients/Wj-dubai.png", alt: "WJ" },
    ],
  },
  {
    slug: "irca-lead-auditor",
    title: "Lead Auditor Courses",
    image: "/course/Lead-Auditor-1.jpg",
    courseInfoParagraphs: [
      "The goal of  Lead auditor training course is to provide the knowledge and skills needed to perform first, second, and third-party audits of ISO management systems against ISO 9001/45001/14001/27001, as applicable, in accordance with ISO 19011 and ISO 17021. There will be a mix of lectures, discussions, exercises, and cooperative learning. Active learning will concentrate on case studies and scenarios relating to the use of QMS 1st, 2nd, and 3rd party audits. Delegates will participate in a variety of individual and group activities throughout the course, which will be assessed through continuous delegate evaluation. Finally, at the end of the course, a summative comprehensive assessment will assess subject matter comprehension.",
      "This course is designed for those who want to learn how to audit an organization’s ISO 9001-based management system as a third or second-party audit. Students who pass the continuous assessment and the 2-hour closed book exam will receive a Certificate of Achievement. This course meets the training requirement for certification as a CQI  registered QMS Lead Auditor/Auditor, according to CQI policy.",
      "If you are looking for lead auditor course in Dubai, Abu Dhabi, reach out to us.",
    ],
    clientLogos: [
      { src: "/course/Clients/acciona-dubai.png", alt: "Acciona" },
      { src: "/course/Clients/al-ali-dubai.png", alt: "Al Ali" },
      { src: "/course/Clients/alec-dubai.png", alt: "ALEC" },
      { src: "/course/Clients/Ecc-dubai.png", alt: "ECC" },
      { src: "/course/Clients/etsalat-dubai.png", alt: "Etisalat" },
      { src: "/course/Clients/kier-dubai.png", alt: "Kier" },
      { src: "/course/Clients/red-sea-dubai.png", alt: "Red Sea" },
      { src: "/course/Clients/Wj-dubai.png", alt: "WJ" },
    ],
  },
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

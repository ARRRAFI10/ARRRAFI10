import { Education, Experience, Project, Skill, SocialLink } from "@/types";

export const personalInfo = {
  name: "Arr Rafi",
  title: "Full-Stack Software Engineer",
  tagline:
    "Building secure, production web platforms with Django, React, and PostgreSQL",
  bio: "Full-stack software engineer with more than one year of experience building and operating production web applications. As the sole developer and system owner for three MIST ICT Directorate platforms serving 1,000+ users, I work across database architecture, REST APIs, React and Next.js front ends, Linux deployment, and ongoing operations. I specialize in Python/Django, PostgreSQL, secure authentication, and payment workflows.",
  location: "Mirpur, Dhaka, Bangladesh",
  email: "arrrafi2018@gmail.com",
  phone: "+880 1856-995246",
  avatar: "/images/avatar.jpg",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/ARRRAFI10", icon: "FaGithub" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arrrafi10/",
    icon: "FaLinkedin",
  },
  { name: "Email", url: "mailto:arrrafi2018@gmail.com", icon: "FaEnvelope" },
];

// The site labels these as CV-listed technologies, not as measured proficiency scores.
export const skills: Skill[] = [
  { name: "Python", category: "programming", level: 100 },
  { name: "TypeScript", category: "programming", level: 100 },
  { name: "JavaScript", category: "programming", level: 100 },
  { name: "SQL", category: "programming", level: 100 },
  { name: "C++", category: "programming", level: 100 },
  { name: "Java", category: "programming", level: 100 },
  { name: "Django", category: "backend", level: 100 },
  { name: "Django REST Framework", category: "backend", level: 100 },
  { name: "Django Channels", category: "backend", level: 100 },
  { name: "Celery", category: "backend", level: 100 },
  { name: "WebSockets", category: "backend", level: 100 },
  { name: "REST API Design", category: "backend", level: 100 },
  { name: "JWT and OAuth 2.0", category: "backend", level: 100 },
  { name: "Role-Based Access Control", category: "backend", level: 100 },
  { name: "React", category: "frontend", level: 100 },
  { name: "Next.js App Router", category: "frontend", level: 100 },
  { name: "Vite", category: "frontend", level: 100 },
  { name: "Tailwind CSS", category: "frontend", level: 100 },
  { name: "Progressive Web Apps", category: "frontend", level: 100 },
  { name: "Responsive UI", category: "frontend", level: 100 },
  { name: "PostgreSQL", category: "database", level: 100 },
  { name: "Redis", category: "database", level: 100 },
  { name: "MySQL", category: "database", level: 100 },
  { name: "Schema Design and Query Optimization", category: "database", level: 100 },
  { name: "Linux and Ubuntu", category: "tools", level: 100 },
  { name: "Nginx and Gunicorn", category: "tools", level: 100 },
  { name: "Docker", category: "tools", level: 100 },
  { name: "Git and GitHub Actions", category: "tools", level: 100 },
  { name: "pytest and Playwright", category: "tools", level: 100 },
  { name: "Load Testing", category: "tools", level: 100 },
  { name: "FastAPI", category: "frameworks", level: 100 },
  { name: "Node.js", category: "frameworks", level: 100 },
  { name: "TensorFlow", category: "frameworks", level: 100 },
  { name: "PyTorch", category: "frameworks", level: 100 },
  { name: "scikit-learn", category: "frameworks", level: 100 },
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Assistant Programmer (Software Engineer)",
    company: "Military Institute of Science and Technology (MIST), ICT Directorate",
    period: "May 2025 - Present",
    description:
      "Sole developer and system owner for three production platforms: an alumni network, a graduation registration and payment portal, and an institutional inventory system. Own delivery from schema design through deployment and production operations.",
    achievements: [
      "Launched MISTAS, an alumni network serving 1,000+ registered users with 100+ REST endpoints, real-time messaging, and a 68-permission RBAC model.",
      "Delivered the MIST 19th Graduation Ceremony Portal for 1,000+ graduates with QR-coded pass issuance and a secure SSLCommerz settlement workflow.",
      "Built the MIST ICT Storage Management System with a 2,600-line PostgreSQL schema, a 107-endpoint REST API, and 2,500+ catalogued products.",
    ],
    technologies: [
      "Django",
      "Django REST Framework",
      "React",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
    ],
  },
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Military Institute of Science and Technology (MIST)",
    period: "Apr 2021 - Apr 2025",
    description: "Dhaka, Bangladesh",
    achievements: ["CGPA: 3.56/4.00"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "MISTAS - Alumni Network Platform",
    description:
      "Production alumni network serving 1,000+ registered users with real-time messaging, verification, and full-text search.",
    longDescription:
      "Architected and launched a Django 5/DRF platform with 21 modules, 100+ REST endpoints, and a React 18/Vite SPA with 90 components. Implemented Django Channels, WebSockets, Redis pub/sub, monthly range-partitioned message storage, roster-based verification, and a 68-permission RBAC model.",
    image: "/images/projects/mistas.jpg",
    tags: ["Django 5", "Django REST Framework", "React 18", "PostgreSQL", "Redis", "WebSockets"],
    category: "fullstack",
    liveUrl: "https://alumni.mist.ac.bd/",
    featured: true,
  },
  {
    id: "2",
    title: "MIST 19th Graduation Ceremony Portal",
    description:
      "Registration and payment portal for 1,000+ graduates with eligibility checks and QR-coded pass issuance.",
    longDescription:
      "Delivered a Django REST Framework and Next.js App Router portal with JWT brokered through a BFF. Integrated SSLCommerz using redirect verification, IPN webhook, and scheduled reconciliation; enforced server-side fee calculation and atomic, row-locked registration-number issuance.",
    image: "/images/projects/mist-graduation-portal.jpg",
    tags: ["Django REST Framework", "Next.js", "PostgreSQL", "Celery", "SSLCommerz"],
    category: "fullstack",
    liveUrl: "https://grad-ceremony.mist.ac.bd/",
    featured: true,
  },
  {
    id: "3",
    title: "MIST ICT Storage Management System",
    description:
      "Institutional inventory and asset-custody system for 2,500+ catalogued products.",
    longDescription:
      "Built a 2,600-line PostgreSQL 16 schema with 46 tables, 37 functions, 25 triggers, and 79 indexes; delivered a 107-endpoint REST API and React 18/TypeScript SPA with barcode scanning and an IndexedDB offline scan queue.",
    image: "/images/projects/mist-storage-management.jpg",
    tags: ["PostgreSQL 16", "Django REST Framework", "React 18", "TypeScript", "Celery"],
    category: "fullstack",
    featured: true,
  },
  {
    id: "4",
    title: "QRARG - Research Group and E-Learning Platform",
    description:
      "Decoupled research-group and e-learning platform with authenticated enrollment, lessons, and reviews.",
    longDescription:
      "Built a React 19 SPA on Vercel and Django REST API on Render with PostgreSQL. Implemented cookie-based JWT authentication, Google OAuth verification, CSRF protection, role-based permissions, and aggregation endpoints that reduce five or more calls to one dashboard response.",
    image: "/images/projects/qrarg.jpg",
    tags: ["React 19", "Django 6", "Django REST Framework", "PostgreSQL", "JWT/OAuth 2.0"],
    category: "fullstack",
    liveUrl: "https://www.qrarg.com",
    featured: true,
  },
  {
    id: "5",
    title: "Job Application Portal",
    description:
      "Recruitment and admissions portal with applications, admit cards, seating reports, and payments.",
    longDescription:
      "Developed role-based access control, dynamic job posting, application submission, applicant management, admit-card issuance, and seating-report generation. Integrated SSLCommerz and containerized the application with Docker.",
    image: "/images/projects/job-application-portal.jpg",
    tags: ["Django REST Framework", "React", "PostgreSQL", "Docker", "SSLCommerz"],
    category: "fullstack",
    featured: true,
  },
  {
    id: "6",
    title: "Appointment Management System",
    description:
      "Full-stack appointment platform with JWT authentication and role-specific dashboards.",
    longDescription:
      "Created an appointment platform for administrators, doctors, and patients, including the PostgreSQL schema and Django REST Framework API.",
    image: "/images/projects/appointment-system.jpg",
    tags: ["Django", "Django REST Framework", "React", "PostgreSQL", "JWT"],
    category: "fullstack",
    githubUrl: "https://github.com/ARRRAFI10/Appointment-Management-System",
    featured: true,
  },
  {
    id: "7",
    title: "OrniFire - Aerial Fire Detection with an RC Ornithopter",
    description:
      "Fire-detection system pairing a machine-learning classifier with an RC ornithopter for aerial surveillance.",
    longDescription:
      "Engineered an aerial fire-detection system using a machine-learning classifier and RC ornithopter platform. The work was published in an IEEE QPAIN 2025 paper.",
    image: "/images/projects/ornifire.jpg",
    tags: ["Machine Learning", "ESP32", "RC Ornithopter"],
    category: "hardware",
    featured: true,
  },
];

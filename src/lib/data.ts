import { Education, Experience, Project, Skill, SocialLink } from "@/types";

export const personalInfo = {
  name: "Arr Rafi",
  title: "Full-Stack Developer & AI/ML Enthusiast",
  tagline:
    "Building innovative solutions at the intersection of robotics and machine learning",
  bio: "Computer Science student at MIST with expertise in full-stack development, machine learning, and robotics. Currently working as Web Administrator, passionate about solving complex problems and building intelligent systems.",
  location: "Mirpur, Dhaka",
  email: "arrrafi2018@gmail.com",
  phone: "+8801856995246",
  avatar: "/images/avatar.jpg",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/ARRRAFI10", icon: "FaGithub" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arrrafi10/",
    icon: "FaLinkedin",
  },
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com/yourusername",
  //   icon: "FaTwitter",
  // },
  { name: "Email", url: "mailto:arrrafi2018@gmail.com", icon: "FaEnvelope" },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: 90 },
  { name: "TypeScript", category: "frontend", level: 70 },
  { name: "Tailwind CSS", category: "frontend", level: 92 },

  // Backend
  { name: "Python", category: "backend", level: 85 },
  { name: "Django", category: "backend", level: 82 },
  { name: "PostgreSQL", category: "backend", level: 85 },
  

  // AI/ML
  { name: "TensorFlow", category: "ai-ml", level: 85 },
  { name: "PyTorch", category: "ai-ml", level: 88 },
  { name: "Scikit-learn", category: "ai-ml", level: 90 },
  { name: "OpenAI API", category: "ai-ml", level: 82 },
  { name: "Computer Vision", category: "ai-ml", level: 78 },

  // Hardware
  { name: "Arduino", category: "hardware", level: 85 },
  { name: "Raspberry Pi", category: "hardware", level: 88 },
  { name: "IoT", category: "hardware", level: 80 },
  { name: "Sensors & Actuators", category: "hardware", level: 75 },

  // Tools
  { name: "Docker", category: "tools", level: 50 },
  { name: "Git", category: "tools", level: 92 },
  // { name: "AWS", category: "tools", level: 78 },
  // { name: "Linux", category: "tools", level: 85 },
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Web Administrator",
    company: "Military Institute of Science and Technology (MIST)",
    period: "May 2025 - Present",
    description:
      "Design and Development and Maintenance of MIST's official website, ensuring optimal performance and user experience",
    achievements: [
      "Developed an Job Portal",
      "Implemented a dynamic news section with real-time updates",
    ],
    technologies: ["React", "Django", "PostgreSQL"],
  },
  {
    id: "2",
    role: "Industrial Trainee",
    company: "DESCO ICT Division",
    period: "Feb 2024 - April 2024",
    description: "Gained knowledge in system automation, software development, and utility management",
    achievements: [
      "Built IoT platform connecting 500+ devices",
      "Developed real-time data processing pipeline",
      "Reduced system latency by 40%",
    ],
    technologies: ["Vue.js", "Django", "PostgreSQL", "MQTT", "Arduino"],
  },
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor Computer Science and Engineering",
    institution: "Military Institute of Science and Technology (MIST)",
    period: "2021 - 2025",
    description:
      "Specialized in Artificial Intelligence and Software Engineering",
    achievements: [
      "GPA: 3.8/4.0",
      "Dean's List all semesters",
      "Final year project on Computer Vision",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Plant Health Monitor",
    description: "IoT system using computer vision to detect plant diseases",
    longDescription:
      "An intelligent system combining IoT sensors and deep learning to monitor plant health in real-time, detecting diseases early and providing treatment recommendations.",
    image: "/images/projects/plant-monitor.jpg",
    tags: ["Python", "TensorFlow", "IoT", "React", "Raspberry Pi"],
    category: "ai-ml",
    githubUrl: "https://github.com/yourusername/plant-monitor",
    featured: true,
  },
  {
    id: "2",
    title: "EcoTrack - Carbon Footprint App",
    description: "Full-stack app for tracking and reducing carbon emissions",
    longDescription:
      "A comprehensive platform helping users track, analyze, and reduce their carbon footprint through AI-powered recommendations and gamification.",
    image: "/images/projects/ecotrack.jpg",
    tags: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS"],
    category: "fullstack",
    githubUrl: "https://github.com/yourusername/ecotrack",
    liveUrl: "https://ecotrack.example.com",
    featured: true,
  },
  {
    id: "3",
    title: "Smart Weather Station",
    description:
      "Custom-built weather monitoring system with real-time analytics",
    longDescription:
      "Hardware project featuring multiple sensors, data logging, and web dashboard for comprehensive weather monitoring.",
    image: "/images/projects/weather-station.jpg",
    tags: ["Arduino", "React", "WebSockets", "IoT"],
    category: "hardware",
    githubUrl: "https://github.com/yourusername/weather-station",
    featured: true,
  },
];

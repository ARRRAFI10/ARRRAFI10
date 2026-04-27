import { Education, Experience, Project, Skill, SocialLink } from "@/types";

export const personalInfo = {
  name: "Arr Rafi",
  title: "AI Engineer — Python Developer — Machine Learning Enthusiast",
  tagline:
    "Building AI solutions in medical imaging, computer vision, and surveillance robotics",
  bio: "Computer Science graduate from MIST with hands-on experience in Machine Learning, Deep Learning, Computer Vision, REST API development, and full-stack systems. Strong foundation in Python, Data Structures, Algorithms, and eager to grow in Generative AI, LLMs, RAG pipelines, and real-world AI product development.",
  location: "Mirpur, Dhaka, Bangladesh",
  email: "arrrafi2018@gmail.com",
  phone: "+8801856995246",
  avatar: "/images/avatar.jpg",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/ARRRAFI10", icon: "FaGithub" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arr-rafi-598a18226/",
    icon: "FaLinkedin",
  },
  { name: "Email", url: "mailto:arrrafi2018@gmail.com", icon: "FaEnvelope" },
];

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", category: "programming", level: 90 },
  { name: "C++", category: "programming", level: 85 },
  { name: "JavaScript", category: "programming", level: 80 },
  { name: "Java", category: "programming", level: 75 },
  { name: "PHP", category: "programming", level: 70 },

  // AI/ML
  { name: "Machine Learning", category: "ai-ml", level: 88 },
  { name: "Deep Learning", category: "ai-ml", level: 85 },
  { name: "Computer Vision", category: "ai-ml", level: 88 },
  { name: "CNN", category: "ai-ml", level: 85 },
  { name: "Transfer Learning", category: "ai-ml", level: 82 },
  { name: "Model Evaluation", category: "ai-ml", level: 85 },
  { name: "Data Preprocessing", category: "ai-ml", level: 87 },

  // Frameworks
  { name: "TensorFlow", category: "frameworks", level: 88 },
  { name: "Keras", category: "frameworks", level: 85 },
  { name: "PyTorch", category: "frameworks", level: 88 },
  { name: "Scikit-learn", category: "frameworks", level: 90 },

  // Generative AI
  { name: "Prompt Engineering", category: "generative-ai", level: 80 },
  { name: "OpenAI API", category: "generative-ai", level: 82 },
  { name: "Hugging Face", category: "generative-ai", level: 78 },
  { name: "LangChain", category: "generative-ai", level: 65 },
  { name: "RAG Concepts", category: "generative-ai", level: 70 },

  // Backend
  { name: "Django", category: "backend", level: 85 },
  { name: "Django REST Framework", category: "backend", level: 85 },
  { name: "REST APIs", category: "backend", level: 85 },
  { name: "FastAPI", category: "backend", level: 75 },
  { name: "Node.js", category: "backend", level: 75 },

  // Frontend
  { name: "React.js", category: "frontend", level: 80 },
  { name: "TypeScript", category: "frontend", level: 75 },
  { name: "Tailwind CSS", category: "frontend", level: 90 },

  // Database
  { name: "PostgreSQL", category: "database", level: 85 },
  { name: "MySQL", category: "database", level: 80 },
  { name: "Firebase", category: "database", level: 75 },

  // Tools
  { name: "Git", category: "tools", level: 90 },
  { name: "Docker", category: "tools", level: 60 },
  { name: "Jupyter Notebook", category: "tools", level: 90 },
  { name: "Google Colab", category: "tools", level: 90 },

  // Core CS
  { name: "Data Structures", category: "core-cs", level: 90 },
  { name: "Algorithms", category: "core-cs", level: 88 },
  { name: "OOP", category: "core-cs", level: 85 },
  { name: "Problem Solving", category: "core-cs", level: 90 },
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Software Engineer",
    company: "Military Institute of Science and Technology (MIST)",
    period: "May 2025 - Present",
    description:
      "Enhanced and maintained internal web application by developing and integrating new feature modules",
    achievements: [
      "Designed and implemented RESTful APIs using Django REST Framework",
      "Developed frontend components using React integrated with backend APIs",
      "Worked with PostgreSQL database systems and deployment workflows",
    ],
    technologies: ["React", "Django", "Django REST Framework", "PostgreSQL"],
  },
  {
    id: "2",
    role: "Industrial Trainee",
    company: "DESCO ICT Division",
    period: "Feb 2024 - Mar 2024",
    description:
      "Gained practical exposure to enterprise software systems, automation, and IT operations",
    achievements: [
      "Gained exposure to software development lifecycle (SDLC)",
      "Learned system automation and utility management",
    ],
    technologies: ["Software Development", "System Automation"],
  },
  {
    id: "3",
    role: "Team Member",
    company: "MIST Mars Rover Society",
    period: "Jan 2022 - Jul 2023",
    description:
      "Developed Arduino-based solutions for robot control and engaged in problem-solving",
    achievements: [
      "2nd Runner-Up, Anatolian Rover Challenge 2022",
      "5th Place, Anatolian Rover Challenge 2023",
    ],
    technologies: ["Arduino", "Robotics"],
  },
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Military Institute of Science and Technology (MIST)",
    period: "Apr 2021 - Apr 2025",
    description:
      "Specialized in Artificial Intelligence and Software Engineering",
    achievements: [
      "CGPA: 3.56/4.00",
      "Final Year CGPA: 3.89/4.00",
      "Final year project on Computer Vision",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Kidney Disease Classification using CT Images",
    description:
      "Multi-class deep learning model for kidney disease classification",
    longDescription:
      "Developed a deep learning model for kidney disease classification from CT images with Explainable AI techniques for interpretability and improved performance through preprocessing and optimization.",
    image: "/images/projects/kidney-disease.jpg",
    tags: ["Python", "TensorFlow", "CNN", "Grad-CAM", "Deep Learning"],
    category: "ai-ml",
    featured: true,
  },
  {
    id: "2",
    title: "Currency Detection System",
    description:
      "Deep learning based currency classification system with real-time prediction",
    longDescription:
      "Built a deep learning based currency classification system with a real-time prediction web interface combining backend API and frontend UI.",
    image: "/images/projects/currency-detection.jpg",
    tags: ["Python", "TensorFlow", "Django", "React"],
    category: "ai-ml",
    featured: true,
  },
  {
    id: "3",
    title: "OrniFire: Aerial Fire Detection using RC Ornithopter",
    description:
      "ML-based fire detection surveillance system using RC ornithopter",
    longDescription:
      "Engineered a fire detection system using machine learning integrated with an RC ornithopter for remote surveillance. Combined embedded hardware and remote control platform for aerial monitoring.",
    image: "/images/projects/ornifire.jpg",
    tags: ["Machine Learning", "ESP32", "Remote Control", "Computer Vision"],
    category: "hardware",
    featured: true,
  },
  {
    id: "4",
    title: "Weed Detection System",
    description: "Computer vision model for crop vs weed classification",
    longDescription:
      "Built a computer vision model for crop vs weed classification with transfer learning and image augmentation techniques to improve accuracy.",
    image: "/images/projects/weed-detection.jpg",
    tags: ["Python", "OpenCV", "PyTorch", "Transfer Learning"],
    category: "ai-ml",
    featured: false,
  },
  {
    id: "5",
    title: "Appointment Management System",
    description:
      "Full-stack web application with JWT authentication and role-based dashboards",
    longDescription:
      "A complete full-stack system with JWT-based authentication and role-specific dashboards (Admin, Doctor, Patient). Built backend with Django and Django REST Framework, implemented PostgreSQL database, and developed dynamic frontend using React.",
    image: "/images/projects/appointment-system.jpg",
    tags: ["Django", "Django REST Framework", "React", "PostgreSQL", "JWT"],
    category: "fullstack",
    githubUrl: "https://github.com/ARRRAFI10/Appointment-Management-System",
    featured: true,
  },
  {
    id: "6",
    title: "E-commerce Website",
    description:
      "Full-featured e-commerce platform for product browsing and purchasing",
    longDescription:
      "Developed an e-commerce platform with product browsing, shopping cart, and purchase functionality using modern web technologies.",
    image: "/images/projects/ecommerce.jpg",
    tags: ["Node.js", "React.js", "Firebase"],
    category: "fullstack",
    githubUrl: "https://github.com/ARRRAFI10/Amazon_clone",
    featured: false,
  },
];

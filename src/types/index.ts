export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "fullstack" | "ai-ml" | "hardware" | "other";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  content: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "ai-ml" | "hardware" | "tools";
  level: number; // 0-100
  icon?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
  achievements?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

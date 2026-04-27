"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCode,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiDjango,
  SiJavascript,
  SiPython,
  SiReact,
} from "react-icons/si";

export default function HeroVSCode() {
  const [activeTab, setActiveTab] = useState("README.md");

  const tabs = [
    { name: "README.md", icon: "📄", language: "markdown" },
    { name: "about.py", icon: "🐍", language: "python" },
    { name: "skills.js", icon: "⚡", language: "javascript" },
  ];

  const codeContent = {
    "README.md": `# ${personalInfo.name}

## ${personalInfo.title}

> ${personalInfo.tagline}

### 📍 Based in ${personalInfo.location}

${personalInfo.bio}

### 🎓 Education
- **BSc in Computer Science and Engineering**
- Military Institute of Science and Technology (MIST)
- CGPA: 3.56/4.00 | Final Year: 3.89/4.00

### 💼 Current Role
- Web Administrator at MIST
- Django REST Framework + React Development

### 🏆 Achievements
- 🥉 2nd Runner Up - Anatolian Rover Challenge 2022
- 🏅 5th Place - Anatolian Rover Challenge 2023
- 📝 2 Research Papers Accepted (QPAIN 2025)

### 📊 Problem Solving
- Codeforces: 330+ problems | Max Rating: 1239
- CodeChef: 50+ problems | Max Rating: 1455

---

**Let's build something amazing together!** 🚀`,

    "about.py": `#!/usr/bin/env python3
"""
Author: ${personalInfo.name}
Role: ${personalInfo.title}
"""

class Developer:
    def __init__(self):
        self.name = "${personalInfo.name}"
        self.role = "${personalInfo.title}"
        self.location = "${personalInfo.location}"
        self.education = {
            "degree": "BSc in CSE",
            "institution": "MIST",
            "cgpa": 3.56,
            "final_year_cgpa": 3.89
        }
        
    def get_skills(self):
        return {
            "languages": ["Python", "JavaScript", "Java", "C++", "PHP"],
            "frameworks": ["React", "Django", "Django REST Framework"],
            "databases": ["MySQL", "PostgreSQL"],
            "tools": ["Git", "Arduino", "ESP32", "Machine Learning"]
        }
    
    def get_experience(self):
        return [
            {
                "role": "Web Administrator",
                "company": "MIST",
                "period": "May 2025 - Present",
                "tech": ["React", "Django", "REST API"]
            },
            {
                "role": "Electrical Team Member",
                "company": "MIST Mars Rover Society",
                "period": "Jan 2022 - Jul 2023",
                "tech": ["Arduino", "C++", "Robotics"]
            }
        ]
    
    def contact_me(self):
        return {
            "email": "${personalInfo.email}",
            "phone": "${personalInfo.phone}",
            "github": "ARRRAFI10",
            "codeforces": "ARR100"
        }

if __name__ == "__main__":
    me = Developer()
    print(f"Hello! I'm {me.name}")
    print(f"Specialized in: {', '.join(me.get_skills()['frameworks'])}")`,

    "skills.js": `// ${personalInfo.name} - Technical Skills
// Last Updated: ${new Date().toLocaleDateString()}

const skills = {
  frontend: {
    frameworks: ['React', 'Next.js'],
    styling: ['Tailwind CSS', 'CSS3', 'HTML5'],
    level: 'Advanced'
  },
  
  backend: {
    languages: ['Python', 'Java', 'PHP'],
    frameworks: ['Django', 'Django REST Framework'],
    databases: ['MySQL', 'PostgreSQL'],
    level: 'Advanced'
  },
  
  aiML: {
    libraries: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
    domains: ['Computer Vision', 'Image Processing', 'Deep Learning'],
    projects: ['OrniFire', 'Hybrid Residual U-Net'],
    level: 'Intermediate'
  },
  
  embedded: {
    platforms: ['Arduino', 'ESP32'],
    skills: ['Embedded C/C++', 'Sensor Integration', 'IoT'],
    experience: 'Mars Rover Development',
    level: 'Intermediate'
  },
  
  problemSolving: {
    platforms: {
      codeforces: { solved: 330, maxRating: 1239 },
      codechef: { solved: 50, maxRating: 1455 }
    },
    focus: ['Algorithms', 'Data Structures', 'Competitive Programming']
  }
};

export default skills;

// Available for collaboration on:
// - Full-stack web applications
// - Machine learning projects
// - Robotics and IoT systems
// - Open source contributions`,
  };

  return (
    <section className="min-h-screen pt-20 pb-10 bg-[#1e1e1e]">
      <div className="max-w-7xl mx-auto">
        {/* VS Code Title Bar */}
        <div className="bg-[#323233] border-b border-[#424242] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28ca42]" />
            </div>
            <span className="text-sm text-gray-400 font-mono">
              {personalInfo.name} - Portfolio
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCode className="text-[#007acc] text-xl" />
            <span className="text-xs text-gray-400">Visual Studio Code</span>
          </div>
        </div>

        {/* VS Code Tab Bar */}
        <div className="bg-[#252526] border-b border-[#424242] flex">
          {tabs.map((tab) => (
            <motion.button
              key={tab.name}
              whileHover={{ backgroundColor: "#2d2d30" }}
              onClick={() => setActiveTab(tab.name)}
              className={`px-4 py-2 text-sm font-mono flex items-center space-x-2 border-r border-[#424242] ${
                activeTab === tab.name
                  ? "bg-[#1e1e1e] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.name}</span>
              {activeTab === tab.name && (
                <div className="w-full h-0.5 bg-[#007acc] absolute bottom-0 left-0" />
              )}
            </motion.button>
          ))}
        </div>

        {/* VS Code Editor Content */}
        <div className="flex bg-[#1e1e1e] min-h-[600px]">
          {/* Line Numbers */}
          <div className="bg-[#1e1e1e] text-gray-600 text-right pr-4 py-4 font-mono text-sm select-none border-r border-[#424242]">
            {codeContent[activeTab].split("\n").map((_, i) => (
              <div key={i} className="leading-6">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code Content */}
          <div className="flex-1 p-4 overflow-auto">
            <pre className="font-mono text-sm leading-6">
              <code className="text-gray-300 whitespace-pre-wrap">
                {codeContent[activeTab]}
              </code>
            </pre>
          </div>

          {/* Sidebar - Quick Actions */}
          <div className="w-64 bg-[#252526] border-l border-[#424242] p-4 space-y-4">
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <motion.a
                  href="#projects"
                  whileHover={{ x: 5 }}
                  className="block px-3 py-2 bg-[#1e1e1e] rounded text-sm text-gray-300 hover:bg-[#37373d] transition-colors"
                >
                  📁 View Projects
                </motion.a>
                <motion.a
                  href="#experience"
                  whileHover={{ x: 5 }}
                  className="block px-3 py-2 bg-[#1e1e1e] rounded text-sm text-gray-300 hover:bg-[#37373d] transition-colors"
                >
                  💼 Experience
                </motion.a>
                <motion.a
                  href="#publications"
                  whileHover={{ x: 5 }}
                  className="block px-3 py-2 bg-[#1e1e1e] rounded text-sm text-gray-300 hover:bg-[#37373d] transition-colors"
                >
                  📄 Publications
                </motion.a>
                <motion.a
                  href="/cv.pdf"
                  download
                  whileHover={{ x: 5 }}
                  className="block px-3 py-2 bg-[#007acc] rounded text-sm text-white hover:bg-[#0098ff] transition-colors"
                >
                  <FaDownload className="inline mr-2" />
                  Download CV
                </motion.a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#424242]">
              <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">
                Connect
              </h3>
              <div className="space-y-2">
                <motion.a
                  href="https://github.com/ARRRAFI10"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 px-3 py-2 bg-[#1e1e1e] rounded text-sm text-gray-300 hover:bg-[#37373d] transition-colors"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/arr-rafi"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 px-3 py-2 bg-[#1e1e1e] rounded text-sm text-gray-300 hover:bg-[#37373d] transition-colors"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://codeforces.com/profile/ARR100"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 px-3 py-2 bg-[#1e1e1e] rounded text-sm text-gray-300 hover:bg-[#37373d] transition-colors"
                >
                  <FaCode />
                  <span>Codeforces</span>
                </motion.a>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 px-3 py-2 bg-[#1e1e1e] rounded text-sm text-gray-300 hover:bg-[#37373d] transition-colors"
                >
                  <FaEnvelope />
                  <span>Email</span>
                </motion.a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#424242]">
              <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[SiReact, SiDjango, SiPython, SiJavascript, SiCplusplus].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-[#1e1e1e] rounded flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    >
                      <Icon size={18} />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* VS Code Status Bar */}
        <div className="bg-[#007acc] px-4 py-1 flex items-center justify-between text-white text-xs font-mono">
          <div className="flex items-center space-x-4">
            <span>⚡ {personalInfo.location}</span>
            <span>📧 {personalInfo.email}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>UTF-8</span>
            <span>LF</span>
            <span>Markdown</span>
            <span>Ln {codeContent[activeTab].split("\n").length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

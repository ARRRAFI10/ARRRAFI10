"use client";

import { containerVariants, itemVariants } from "@/lib/animations";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import { FaDocker, FaGitAlt, FaNode, FaPython, FaReact } from "react-icons/fa";
import {
  SiArduino,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";

const categoryNames = {
  frontend: "Frontend",
  backend: "Backend",
  "ai-ml": "AI & Machine Learning",
  hardware: "Hardware & IoT",
  tools: "Tools & DevOps",
};

const iconMap: { [key: string]: any } = {
  React: FaReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNode,
  Python: FaPython,
  PostgreSQL: SiPostgresql,
  TensorFlow: SiTensorflow,
  Arduino: SiArduino,
  Docker: FaDocker,
  Git: FaGitAlt,
};

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section ref={ref} className="relative py-20">
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit spanning full-stack development, AI/ML,
              and hardware engineering
            </p>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-16">
            {Object.entries(groupedSkills).map(
              ([category, categorySkills], categoryIndex) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-semibold text-primary-400">
                    {categoryNames[category as keyof typeof categoryNames]}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorySkills.map((skill, index) => {
                      const Icon = iconMap[skill.name];
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            delay: categoryIndex * 0.1 + index * 0.05,
                          }}
                          whileHover={{ scale: 1.03, y: -5 }}
                          className="glass-morphism p-6 rounded-xl space-y-4 group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              {Icon && (
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-tech-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <Icon className="text-xl text-primary-400" />
                                </div>
                              )}
                              <span className="font-semibold text-lg">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-primary-400 font-semibold">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="relative h-2 bg-dark-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={
                                inView ? { width: `${skill.level}%` } : {}
                              }
                              transition={{
                                duration: 1,
                                delay: categoryIndex * 0.1 + index * 0.05 + 0.3,
                              }}
                              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-tech-500 rounded-full"
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )
            )}
          </div>

          {/* Certifications or Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-8 glass-morphism rounded-2xl text-center"
          >
            <p className="text-lg text-dark-300">
              💡 Constantly learning and exploring new technologies to stay at
              the cutting edge of innovation
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

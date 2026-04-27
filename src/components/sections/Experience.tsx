"use client";

import { containerVariants, itemVariants } from "@/lib/animations";
import { education, experiences } from "@/lib/data";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendar, FaGraduationCap } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
              <span className="gradient-text">Experience & Education</span>
            </h2>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto">
              My journey through professional experiences and academic
              achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-tech-500 flex items-center justify-center">
                  <FaBriefcase className="text-xl" />
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>

              <div className="space-y-6 relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-tech-500" />

                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-16"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-3 top-0 w-6 h-6 rounded-full bg-primary-500 border-4 border-dark-950" />

                    <div className="glass-morphism p-6 rounded-xl space-y-4 hover:bg-white/10 transition-all">
                      <div>
                        <h4 className="text-xl font-bold text-primary-400">
                          {exp.role}
                        </h4>
                        <p className="text-dark-300 font-medium">
                          {exp.company}
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-dark-400 mt-1">
                          <FaCalendar className="text-xs" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-dark-400">{exp.description}</p>

                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-primary-400">
                          Key Achievements:
                        </p>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-dark-400 flex items-start space-x-2"
                            >
                              <span className="text-primary-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full bg-tech-500/10 text-tech-400 border border-tech-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-tech-500 to-primary-500 flex items-center justify-center">
                  <FaGraduationCap className="text-xl" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-6 relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tech-500 to-primary-500" />

                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="relative pl-16"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-3 top-0 w-6 h-6 rounded-full bg-tech-500 border-4 border-dark-950" />

                    <div className="glass-morphism p-6 rounded-xl space-y-4 hover:bg-white/10 transition-all">
                      <div>
                        <h4 className="text-xl font-bold text-tech-400">
                          {edu.degree}
                        </h4>
                        <p className="text-dark-300 font-medium">
                          {edu.institution}
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-dark-400 mt-1">
                          <FaCalendar className="text-xs" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      {edu.description && (
                        <p className="text-dark-400">{edu.description}</p>
                      )}

                      {edu.achievements && (
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-tech-400">
                            Achievements:
                          </p>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-sm text-dark-400 flex items-start space-x-2"
                              >
                                <span className="text-tech-400 mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

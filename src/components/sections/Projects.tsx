"use client";

import { containerVariants, itemVariants } from "@/lib/animations";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "fullstack", "ai-ml", "hardware"];
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" ref={ref} className="relative py-20">
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
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto">
              A selection of my work that showcases the intersection of
              technology and innovation
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filter === category
                    ? "bg-gradient-to-r from-primary-500 to-tech-500 shadow-lg shadow-primary-500/30"
                    : "glass-morphism hover:bg-white/10"
                }`}
              >
                {category === "ai-ml"
                  ? "AI/ML"
                  : category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-morphism rounded-xl overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-tech-500/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    {project.category === "ai-ml"
                      ? "🤖"
                      : project.category === "hardware"
                      ? "🔧"
                      : "💻"}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-dark-400 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-tech-500/10 text-tech-400 border border-tech-500/20">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3 pt-2">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 glass-morphism rounded-lg text-sm hover:bg-white/10 transition-colors"
                      >
                        <FaGithub />
                        <span>Code</span>
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-tech-500 rounded-lg text-sm"
                      >
                        <FaExternalLinkAlt />
                        <span>Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-dark-400"
            >
              No projects found in this category.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectsGitHub() {
  return (
    <section id="projects" className="py-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center space-x-3">
            <FaGithub className="text-3xl text-white" />
            <h2 className="text-3xl font-bold text-white">Selected Projects</h2>
          </div>
          <p className="text-gray-400">
            Projects listed in my CV. Links are shown only when a public live site
            or source repository is available.
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg border border-[#30363d] bg-[#161b22] p-6 transition-all hover:border-[#8b949e]"
            >
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                <div className="min-w-0 flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-[#58a6ff]">
                    {project.title}
                  </h3>
                  <p className="mb-3 text-sm text-gray-400">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#388bfd]/20 bg-[#388bfd]/10 px-3 py-1 text-xs text-[#58a6ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <details>
                    <summary className="cursor-pointer text-xs text-[#58a6ff] hover:underline">
                      Read project details
                    </summary>
                    <p className="mt-3 border-l-2 border-[#30363d] pl-4 text-sm text-gray-400">
                      {project.longDescription}
                    </p>
                  </details>
                </div>

                <div className="flex shrink-0 flex-col gap-2 sm:w-40">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 rounded-md border border-[#2ea043] bg-[#238636] px-4 py-2 text-sm text-white transition-all hover:bg-[#2ea043]"
                    >
                      <FaExternalLinkAlt size={12} />
                      <span>Live Project</span>
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 rounded-md border border-[#30363d] bg-[#21262d] px-4 py-2 text-sm text-gray-200 transition-all hover:border-[#8b949e] hover:bg-[#30363d]"
                    >
                      <FaCode size={14} />
                      <span>Source Code</span>
                    </motion.a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <span className="rounded-md border border-[#30363d] bg-[#21262d] px-3 py-2 text-center text-xs text-gray-400">
                      No public link available
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

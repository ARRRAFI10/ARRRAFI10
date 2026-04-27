"use client";

import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCode,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaFolder,
  FaGithub,
  FaStar,
} from "react-icons/fa";

export default function ProjectsGitHub() {
  const [activeTab, setActiveTab] = useState<"repositories" | "projects">(
    "repositories"
  );

  return (
    <section id="projects" className="py-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4">
        {/* GitHub Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <FaGithub className="text-white text-4xl" />
            <div>
              <h2 className="text-3xl font-bold text-white">ARRRAFI10</h2>
              <p className="text-gray-400">Public repositories and projects</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="px-4 py-2 bg-[#21262d] border border-[#30363d] rounded-md">
              <span className="text-gray-400 text-sm">
                {projects.length} repositories
              </span>
            </div>
          </div>
        </div>

        {/* GitHub Tabs */}
        <div className="border-b border-[#21262d] mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab("repositories")}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "repositories"
                  ? "border-[#f78166] text-white"
                  : "border-transparent text-gray-400 hover:text-gray-300"
              }`}
            >
              <FaFolder className="inline mr-2" />
              Repositories
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "projects"
                  ? "border-[#f78166] text-white"
                  : "border-transparent text-gray-400 hover:text-gray-300"
              }`}
            >
              Projects
            </button>
          </div>
        </div>

        {/* Repository List */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-[#8b949e] transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <FaFolder className="text-[#8b949e]" />
                    <h3 className="text-[#58a6ff] text-lg font-semibold hover:underline cursor-pointer group-hover:text-[#79c0ff]">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-0.5 bg-[#1f6feb]/20 border border-[#1f6feb] text-[#58a6ff] text-xs rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#388bfd]/10 text-[#58a6ff] text-xs rounded-full border border-[#388bfd]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-[#f1e05a] rounded-full" />
                      <span>{project.tags[0]}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FaStar className="text-[#8b949e]" />
                      <span>{Math.floor(Math.random() * 50) + 10}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FaCodeBranch className="text-[#8b949e]" />
                      <span>{Math.floor(Math.random() * 10) + 1}</span>
                    </span>
                    <span>
                      Updated {Math.floor(Math.random() * 30) + 1} days ago
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2 ml-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-1.5 bg-[#21262d] border border-[#30363d] text-gray-300 text-sm rounded-md hover:bg-[#30363d] hover:border-[#8b949e] transition-all flex items-center space-x-2"
                    >
                      <FaCode size={14} />
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-1.5 bg-[#238636] border border-[#2ea043] text-white text-sm rounded-md hover:bg-[#2ea043] transition-all flex items-center space-x-2"
                    >
                      <FaExternalLinkAlt size={12} />
                      <span>Live</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Long Description (Expandable) */}
              <details className="mt-3">
                <summary className="text-xs text-[#58a6ff] cursor-pointer hover:underline">
                  Read more...
                </summary>
                <p className="text-sm text-gray-400 mt-2 pl-4 border-l-2 border-[#30363d]">
                  {project.longDescription}
                </p>
              </details>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph Style Footer */}
        <div className="mt-12 p-6 bg-[#161b22] border border-[#30363d] rounded-lg">
          <h3 className="text-white font-semibold mb-4 flex items-center space-x-2">
            <span>📊</span>
            <span>Project Statistics</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#58a6ff]">
                {projects.length}
              </div>
              <div className="text-sm text-gray-400">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3fb950]">
                {projects.filter((p) => p.featured).length}
              </div>
              <div className="text-sm text-gray-400">Featured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f78166]">
                {new Set(projects.flatMap((p) => p.tags)).size}
              </div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d29922]">
                {projects.filter((p) => p.liveUrl).length}
              </div>
              <div className="text-sm text-gray-400">Live Demos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaPlay, FaPlus, FaSave, FaStop } from "react-icons/fa";
import { SiJupyter, SiPython } from "react-icons/si";

export default function SkillsKaggle() {
  const [isRunning, setIsRunning] = useState(false);
  const [lastRun, setLastRun] = useState("--");

  useEffect(() => {
    setLastRun(new Date().toLocaleString());
  }, []);

  const categoryNames = {
    frontend: "Frontend Development",
    backend: "Backend & APIs",
    "ai-ml": "AI & Machine Learning",
    hardware: "Embedded Systems & IoT",
    tools: "DevOps & Tools",
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const runAnimation = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 2000);
  };

  return (
    <section id="skills" className="py-20 bg-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Kaggle Notebook Header */}
        <div className="bg-[#2d2d2d] border-b-2 border-[#404040] text-white px-6 py-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <SiJupyter size={32} />
            <div>
              <h2 className="text-2xl font-bold">Skills & Expertise</h2>
              <p className="text-sm text-blue-100">Technical Skills Notebook</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-sm flex items-center space-x-1 transition-colors">
              <FaSave size={12} />
              <span>Save</span>
            </button>
            <button className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-sm flex items-center space-x-1 transition-colors">
              <FaPlus size={12} />
              <span>Cell</span>
            </button>
          </div>
        </div>

        {/* Notebook Toolbar */}
        <div className="bg-gray-100 border-x border-gray-300 px-4 py-2 flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={runAnimation}
            disabled={isRunning}
            className={`px-4 py-1.5 rounded flex items-center space-x-2 text-sm font-medium transition-colors ${
              isRunning
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#20beff] text-white hover:bg-[#1ba3e0]"
            }`}
          >
            {isRunning ? <FaStop size={12} /> : <FaPlay size={12} />}
            <span>{isRunning ? "Running..." : "Run All"}</span>
          </motion.button>
          <div className="flex-1" />
          <span className="text-xs text-gray-600">Python 3 | Arr Rafi</span>
        </div>

        {/* Notebook Content */}
        <div className="bg-white border border-gray-300 rounded-b-lg">
          {/* Import Cell */}
          <div className="border-b border-gray-200">
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
              <span className="text-xs text-gray-600 font-mono">In [1]:</span>
              <span className="text-xs text-gray-500">Code</span>
            </div>
            <div className="px-4 py-3 font-mono text-sm">
              <div className="text-purple-600"># Import required libraries</div>
              <div>
                <span className="text-purple-600">import</span> skills{" "}
                <span className="text-purple-600">as</span> sk
              </div>
              <div>
                <span className="text-[#c586c0]">import</span> experience{" "}
                <span className="text-[#c586c0]">as</span> exp
              </div>
              <div>
                <span className="text-[#c586c0]">from</span> developer{" "}
                <span className="text-[#c586c0]">import</span> ArrRafi
              </div>
            </div>
            {isRunning && (
              <div className="px-4 py-2 bg-[#1e1e1e] text-[#4ec9b0] text-xs font-mono border-t border-[#404040]">
                ✓ Executed in 0.003s
              </div>
            )}
          </div>

          {/* Skills Analysis Cells */}
          {Object.entries(groupedSkills).map(
            ([category, categorySkills], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-[#404040]"
              >
                {/* Code Cell */}
                <div className="bg-[#1e1e1e] px-4 py-2 border-b border-[#404040] flex items-center justify-between">
                  <span className="text-xs text-[#4ec9b0] font-mono">
                    In [{idx + 2}]:
                  </span>
                  <span className="text-xs text-gray-500">Code</span>
                </div>
                <div className="px-4 py-3 font-mono text-sm bg-[#1e1e1e]">
                  <div>
                    <span className="text-[#6a9955]">
                      # Analyze{" "}
                      {categoryNames[category as keyof typeof categoryNames]}
                    </span>
                  </div>
                  <div className="text-[#d4d4d4]">
                    skills_data = sk.get_skills(
                    <span className="text-[#ce9178]">'{category}'</span>)
                  </div>
                  <div className="text-[#d4d4d4]">
                    sk.visualize_proficiency(skills_data)
                  </div>
                </div>

                {/* Output Cell */}
                <div className="px-4 py-4 bg-[#252525]">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-semibold text-white">
                      {categoryNames[category as keyof typeof categoryNames]}
                    </h3>
                    <span className="text-xs text-[#f48771] font-mono">
                      Out [{idx + 2}]:
                    </span>
                  </div>

                  <div className="space-y-3">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative h-6 bg-[#3c3c3c] rounded overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="absolute inset-y-0 left-0 rounded"
                            style={{
                              background: `linear-gradient(90deg, ${
                                skill.level >= 85
                                  ? "#10b981"
                                  : skill.level >= 70
                                  ? "#3b82f6"
                                  : "#f59e0b"
                              } 0%, ${
                                skill.level >= 85
                                  ? "#059669"
                                  : skill.level >= 70
                                  ? "#2563eb"
                                  : "#d97706"
                              } 100%)`,
                            }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-medium text-white mix-blend-difference">
                              {skill.level >= 85
                                ? "Expert"
                                : skill.level >= 70
                                ? "Advanced"
                                : "Intermediate"}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {isRunning && (
                  <div className="px-4 py-2 bg-[#1e1e1e] text-[#4ec9b0] text-xs font-mono border-t border-[#404040]">
                    ✓ Cell executed successfully (0.
                    {Math.random().toString().slice(2, 5)}s)
                  </div>
                )}
              </motion.div>
            )
          )}

          {/* Summary Cell */}
          <div className="border-b border-gray-200">
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
              <span className="text-xs text-gray-600 font-mono">
                In [{Object.keys(groupedSkills).length + 2}]:
              </span>
              <span className="text-xs text-gray-500">Code</span>
            </div>
            <div className="px-4 py-3 font-mono text-sm bg-[#f7f7f7]">
              <div>
                <span className="text-blue-600"># Generate Skills Summary</span>
              </div>
              <div>summary = sk.generate_summary()</div>
              <div>
                <span className="text-purple-600">print</span>(summary)
              </div>
            </div>
            <div className="px-4 py-4 bg-blue-50">
              <div className="font-mono text-sm space-y-2">
                <div className="text-blue-900 font-semibold">
                  Skills Summary Report
                </div>
                <div className="text-blue-800">
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                </div>
                <div className="text-blue-700">
                  Total Skills:{" "}
                  <span className="font-bold">{skills.length}</span>
                </div>
                <div className="text-blue-700">
                  Categories:{" "}
                  <span className="font-bold">
                    {Object.keys(groupedSkills).length}
                  </span>
                </div>
                <div className="text-blue-700">
                  Average Proficiency:{" "}
                  <span className="font-bold">
                    {Math.round(
                      skills.reduce((a, s) => a + s.level, 0) / skills.length
                    )}
                    %
                  </span>
                </div>
                <div className="text-blue-800">
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                </div>
                <div className="text-green-700 text-xs">
                  ✓ Ready for Full-Stack Development
                </div>
                <div className="text-green-700 text-xs">
                  ✓ AI/ML Project Capable
                </div>
                <div className="text-green-700 text-xs">
                  ✓ Embedded Systems Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notebook Footer */}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <SiPython className="text-blue-500" />
              <span>Python 3.10.12</span>
            </span>
            <span>• Last run: {lastRun}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
              All cells executed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

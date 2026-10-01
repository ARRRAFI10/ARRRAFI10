"use client";

import { motion } from "framer-motion";
import { FaCode, FaTrophy } from "react-icons/fa";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";

const platforms = [
  {
    name: "Codeforces",
    Icon: SiCodeforces,
    accent: "from-[#1e88e5] to-[#1565c0]",
    primary: "330+ problems solved",
    secondary: "Maximum rating: 1239",
  },
  {
    name: "CodeChef",
    Icon: SiCodechef,
    accent: "from-[#5b4638] to-[#3d2f26]",
    primary: "Maximum rating: 1455",
    secondary: "Competitive programming platform",
  },
  {
    name: "LeetCode",
    Icon: SiLeetcode,
    accent: "from-[#d97706] to-[#b45309]",
    primary: "440+ problems solved",
    secondary: "Competitive programming platform",
  },
];

export default function ProblemSolvingCodeforces() {
  return (
    <section id="problem-solving" className="py-20 bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Problem Solving
          </h2>
          <p className="text-gray-400">
            800+ competitive-programming problems solved across Codeforces,
            CodeChef, and LeetCode
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {platforms.map(({ name, Icon, accent, primary, secondary }, index) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg border-2 border-[#404040] bg-[#252525] shadow-lg"
            >
              <div className={`bg-gradient-to-r ${accent} p-6 text-white`}>
                <Icon className="mb-4 text-4xl" />
                <h3 className="text-2xl font-bold">{name}</h3>
              </div>
              <div className="space-y-4 p-6">
                <div className="rounded-lg bg-white p-4 text-center">
                  <FaCode className="mx-auto mb-2 text-3xl text-[#1e88e5]" />
                  <p className="text-lg font-bold text-gray-900">{primary}</p>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                  <FaTrophy className="text-[#ffd700]" />
                  <span>{secondary}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 rounded-lg border-2 border-gray-200 bg-gradient-to-r from-blue-50 to-orange-50 p-8 text-center">
          <div className="text-4xl font-bold text-[#1e88e5]">800+</div>
          <div className="mt-1 text-sm text-gray-600">
            Competitive-programming problems solved
          </div>
        </div>
      </div>
    </section>
  );
}

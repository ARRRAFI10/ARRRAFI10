"use client";

import { motion } from "framer-motion";
import { FaChartLine, FaCode, FaTrophy } from "react-icons/fa";
import { SiCodechef, SiCodeforces } from "react-icons/si";

const problemSolvingData = {
  codeforces: {
    handle: "ARR100",
    solved: 330,
    maxRating: 1239,
    currentRating: 1205,
    rank: "Pupil",
    color: "#77ff77",
    contests: 45,
  },
  codechef: {
    handle: "arr100",
    solved: 50,
    maxRating: 1455,
    currentRating: 1420,
    rank: "2★",
    color: "#684273",
    contests: 12,
  },
};

export default function ProblemSolvingCodeforces() {
  return (
    <section id="problem-solving" className="py-20 bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Codeforces-Style Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-white">Problem Solving</span>
          </h2>
          <p className="text-center text-gray-400">
            Competitive Programming Journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Codeforces Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#252525] border-2 border-[#404040] rounded-lg shadow-lg overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1e88e5] to-[#1565c0] p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <SiCodeforces className="text-4xl" />
                  <div>
                    <h3 className="text-2xl font-bold">Codeforces</h3>
                    <p className="text-sm text-blue-100">
                      Handle: {problemSolvingData.codeforces.handle}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">
                    {problemSolvingData.codeforces.maxRating}
                  </div>
                  <div className="text-xs">Max Rating</div>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="flex items-center space-x-2">
                <span
                  className="px-3 py-1 rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: problemSolvingData.codeforces.color,
                    color: "#000",
                  }}
                >
                  {problemSolvingData.codeforces.rank}
                </span>
                <span className="text-sm">
                  Current Rating: {problemSolvingData.codeforces.currentRating}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <FaCode className="text-3xl text-[#1e88e5] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">
                    {problemSolvingData.codeforces.solved}
                  </div>
                  <div className="text-sm text-gray-600">Problems Solved</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <FaTrophy className="text-3xl text-[#ffd700] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">
                    {problemSolvingData.codeforces.contests}
                  </div>
                  <div className="text-sm text-gray-600">Contests</div>
                </div>
              </div>

              {/* Rating Graph Placeholder */}
              <div className="p-4 bg-[#1e1e1e] rounded-lg border border-[#404040]">
                <div className="flex items-center space-x-2 mb-3">
                  <FaChartLine className="text-[#1e88e5]" />
                  <span className="font-semibold text-white">
                    Rating History
                  </span>
                </div>
                <div className="h-32 flex items-end justify-between space-x-1">
                  {Array.from({ length: 20 }).map((_, i) => {
                    const height = 30 + Math.random() * 70;
                    return (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-gradient-to-t from-[#1e88e5] to-[#64b5f6] rounded-t"
                      />
                    );
                  })}
                </div>
              </div>

              <motion.a
                href={`https://codeforces.com/profile/${problemSolvingData.codeforces.handle}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-3 bg-[#1e88e5] text-white text-center rounded-lg hover:bg-[#1565c0] transition-colors font-semibold"
              >
                View Profile on Codeforces
              </motion.a>
            </div>
          </motion.div>

          {/* CodeChef Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#252525] border-2 border-[#404040] rounded-lg shadow-lg overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#5b4638] to-[#3d2f26] p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <SiCodechef className="text-4xl" />
                  <div>
                    <h3 className="text-2xl font-bold">CodeChef</h3>
                    <p className="text-sm text-orange-100">
                      Handle: {problemSolvingData.codechef.handle}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">
                    {problemSolvingData.codechef.maxRating}
                  </div>
                  <div className="text-xs">Max Rating</div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-[#684273] rounded-full text-sm font-bold">
                  {problemSolvingData.codechef.rank}
                </span>
                <span className="text-sm">
                  Current Rating: {problemSolvingData.codechef.currentRating}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <FaCode className="text-3xl text-[#5b4638] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">
                    {problemSolvingData.codechef.solved}
                  </div>
                  <div className="text-sm text-gray-600">Problems Solved</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <FaTrophy className="text-3xl text-[#ffd700] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">
                    {problemSolvingData.codechef.contests}
                  </div>
                  <div className="text-sm text-gray-600">Contests</div>
                </div>
              </div>

              {/* Skills Distribution */}
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Problem Categories
                </h4>
                <div className="space-y-2">
                  {[
                    { name: "Arrays", value: 85 },
                    { name: "Dynamic Programming", value: 70 },
                    { name: "Graphs", value: 65 },
                    { name: "Trees", value: 75 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.value}%</span>
                      </div>
                      <div className="h-2 bg-[#3c3c3c] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.value}%` }}
                          transition={{ duration: 1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-[#5b4638] to-[#8b6f5f]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.a
                href={`https://www.codechef.com/users/${problemSolvingData.codechef.handle}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-3 bg-[#5b4638] text-white text-center rounded-lg hover:bg-[#3d2f26] transition-colors font-semibold"
              >
                View Profile on CodeChef
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Overall Stats */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg border-2 border-gray-200">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
            Overall Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1e88e5]">
                {problemSolvingData.codeforces.solved +
                  problemSolvingData.codechef.solved}
              </div>
              <div className="text-sm text-gray-600 mt-1">Total Problems</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#5b4638]">
                {problemSolvingData.codeforces.contests +
                  problemSolvingData.codechef.contests}
              </div>
              <div className="text-sm text-gray-600 mt-1">Total Contests</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">2</div>
              <div className="text-sm text-gray-600 mt-1">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">Active</div>
              <div className="text-sm text-gray-600 mt-1">Status</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  FaCalendar,
  FaExternalLinkAlt,
  FaFilePdf,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiLatex } from "react-icons/si";

const publications = [
  {
    id: 1,
    title:
      "Design and Development of an RC Ornithopter for Remote Surveillance",
    authors: "Arr Rafi, et al.",
    conference:
      "2025 International Conference on Quantum Photonics, Artificial Intelligence and Networking (QPAIN)",
    date: "31 July – 2 August 2025",
    location: "Rangpur, Bangladesh",
    status: "Accepted",
    abstract:
      "This paper presents the design and development of a Radio-Controlled ornithopter for remote surveillance applications. The system integrates advanced aerodynamic design with real-time control mechanisms.",
  },
  {
    id: 2,
    title:
      "A Hybrid Residual U-Net Architecture for Enhanced Low-Light Image Restoration",
    authors: "Arr Rafi, et al.",
    conference:
      "2025 International Conference on Quantum Photonics, Artificial Intelligence and Networking (QPAIN)",
    date: "31 July – 2 August 2025",
    location: "Rangpur, Bangladesh",
    status: "Accepted",
    abstract:
      "We propose a novel Hybrid Residual U-Net architecture that significantly improves low-light image restoration quality through innovative residual connections and attention mechanisms.",
  },
];

export default function PublicationsAcademic() {
  return (
    <section id="publications" className="py-20 bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Academic Paper Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <SiLatex className="text-4xl text-[#4ec9b0]" />
            <h2 className="text-4xl font-serif text-white">Publications</h2>
          </div>
          <p className="text-lg text-gray-400 font-serif italic">
            Research contributions in AI and Robotics
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#252525] border-2 border-[#404040] rounded-lg shadow-lg overflow-hidden"
            >
              {/* Paper Header */}
              <div className="bg-gradient-to-r from-[#1a5c5c] to-[#2d7a7a] p-6 text-white border-b-2 border-[#4ec9b0]">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-3">
                      {pub.status}
                    </span>
                    <h3 className="text-2xl font-serif font-bold mb-2 leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-white/90 font-medium">
                      {pub.authors}
                    </p>
                  </div>
                  <div className="ml-4">
                    <SiLatex className="text-4xl text-white/70" />
                  </div>
                </div>
              </div>

              {/* Paper Content */}
              <div className="p-6 space-y-4">
                {/* Conference Info */}
                <div className="border-l-4 border-[#008080] pl-4 py-2 bg-gray-50">
                  <p className="font-semibold text-gray-900 mb-2">
                    {pub.conference}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center space-x-2">
                      <FaCalendar className="text-[#008080]" />
                      <span>{pub.date}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <FaMapMarkerAlt className="text-[#4ec9b0]" />
                      <span>{pub.location}</span>
                    </span>
                  </div>
                </div>

                {/* Abstract */}
                <div>
                  <h4 className="font-serif font-bold text-white mb-2 uppercase text-sm tracking-wide">
                    Abstract
                  </h4>
                  <p className="text-gray-300 leading-relaxed font-serif text-justify">
                    {pub.abstract}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-[#4ec9b0] text-black rounded-lg hover:bg-[#6dd9bf] transition-colors font-semibold"
                  >
                    <FaFilePdf />
                    <span>View PDF</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 border-2 border-[#4ec9b0] text-[#4ec9b0] rounded-lg hover:bg-[#4ec9b0] hover:text-black transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>Conference Page</span>
                  </motion.button>
                </div>
              </div>

              {/* Paper Footer - Citation Style */}
              <div className="px-6 py-4 bg-[#1a1a1a] border-t border-[#404040]">
                <p className="text-xs text-gray-400 font-mono">
                  <strong>Citation:</strong> {pub.authors} "{pub.title}," in{" "}
                  <em>{pub.conference}</em>, {pub.location},{" "}
                  {pub.date.split("–")[0].trim()}.
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Publication Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-[#008080] mb-2">
              {publications.length}
            </div>
            <div className="text-sm text-gray-600 font-serif">
              Published Papers
            </div>
          </div>
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-[#008080] mb-2">1</div>
            <div className="text-sm text-gray-600 font-serif">
              International Conference
            </div>
          </div>
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-[#008080] mb-2">2025</div>
            <div className="text-sm text-gray-600 font-serif">
              Publication Year
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaMapMarkerAlt } from "react-icons/fa";
import { SiLatex } from "react-icons/si";

const publications = [
  {
    id: 1,
    title:
      "Multi-Class Kidney Disease Classification from CT Images Using Explainable Deep Learning",
    authors: "A. Rafi, A. O. Nasif, M. Nahiduzzaman, M. N. Islam",
    venue:
      "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN)",
    year: "2026",
    location: "Chittagong, Bangladesh",
    details: "pp. 1-6",
    doi: "https://doi.org/10.1109/QPAIN69676.2026.11545964",
  },
  {
    id: 2,
    title: "Design and Development of an RC Ornithopter for Remote Surveillance",
    authors:
      "M. E. H. Marzun, A. Rafi, A. O. Nasif, M. S. Musfique, M. Akhtaruzzaman, T. M. S. Sazzad",
    venue:
      "Proceedings of the 2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN)",
    year: "2025",
    location: "Rangpur, Bangladesh",
    doi: "https://doi.org/10.1109/QPAIN66474.2025.11171712",
  },
  {
    id: 3,
    title: "A Hybrid Residual U-Net Architecture for Enhanced Low-Light Image Restoration",
    authors: "M. E. H. Marzun, A. Rafi, A. O. Nasif, et al.",
    venue:
      "Proceedings of the 2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN)",
    year: "2025",
    location: "Rangpur, Bangladesh",
    doi: "https://doi.org/10.1109/QPAIN66474.2025.11172051",
  },
];

export default function PublicationsAcademic() {
  return (
    <section id="publications" className="py-20 bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <SiLatex className="text-4xl text-[#4ec9b0]" />
            <h2 className="text-4xl font-serif text-white">Publications</h2>
          </div>
          <p className="text-lg text-gray-400 font-serif italic">
            Three IEEE research publications in AI and robotics
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((publication, index) => (
            <motion.article
              key={publication.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg border-2 border-[#404040] bg-[#252525] shadow-lg"
            >
              <div className="border-b-2 border-[#4ec9b0] bg-gradient-to-r from-[#1a5c5c] to-[#2d7a7a] p-6 text-white">
                <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                  IEEE Proceedings · {publication.year}
                </span>
                <h3 className="mb-2 text-2xl font-serif font-bold leading-tight">
                  {publication.title}
                </h3>
                <p className="text-sm font-medium text-white/90">
                  {publication.authors}
                </p>
              </div>

              <div className="space-y-4 p-6">
                <div className="border-l-4 border-[#008080] bg-gray-50 py-2 pl-4">
                  <p className="mb-2 font-semibold text-gray-900">
                    {publication.venue}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span>{publication.year}</span>
                    <span className="flex items-center space-x-2">
                      <FaMapMarkerAlt className="text-[#4ec9b0]" />
                      <span>{publication.location}</span>
                    </span>
                    {publication.details && <span>{publication.details}</span>}
                  </div>
                </div>

                <motion.a
                  href={publication.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center space-x-2 rounded-lg bg-[#4ec9b0] px-4 py-2 font-semibold text-black transition-colors hover:bg-[#6dd9bf]"
                >
                  <FaExternalLinkAlt />
                  <span>View DOI</span>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border-2 border-gray-300 bg-white p-6 text-center">
            <div className="mb-2 text-4xl font-bold text-[#008080]">3</div>
            <div className="text-sm font-serif text-gray-600">IEEE Papers</div>
          </div>
          <div className="rounded-lg border-2 border-gray-300 bg-white p-6 text-center">
            <div className="mb-2 text-4xl font-bold text-[#008080]">2</div>
            <div className="text-sm font-serif text-gray-600">QPAIN Conference Years</div>
          </div>
          <div className="rounded-lg border-2 border-gray-300 bg-white p-6 text-center">
            <div className="mb-2 text-4xl font-bold text-[#008080]">2025-2026</div>
            <div className="text-sm font-serif text-gray-600">Publication Years</div>
          </div>
        </div>
      </div>
    </section>
  );
}

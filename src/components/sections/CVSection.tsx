"use client";

import { containerVariants, itemVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { FaDownload, FaFilePdf, FaPrint } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function CVSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const downloadOptions = [
    {
      name: "PDF CV",
      icon: FaFilePdf,
      description: "Updated professional CV",
      file: "/cv.pdf",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section id="cv" ref={ref} className="relative py-20">
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
              <span className="gradient-text">Curriculum Vitae</span>
            </h2>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto">
              Download my current professional CV
            </p>
          </motion.div>

          {/* CV Preview Card */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto glass-morphism rounded-2xl p-8 space-y-8"
          >
            {/* CV Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold gradient-text">1+</div>
                <p className="text-dark-400">Years of Professional Experience</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold gradient-text">3</div>
                <p className="text-dark-400">Production Platforms at MIST</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold gradient-text">800+</div>
                <p className="text-dark-400">Problems Solved</p>
              </div>
            </div>

            {/* Download Options */}
            <div className="mx-auto max-w-md">
              {downloadOptions.map((option, index) => (
                <motion.a
                  key={option.name}
                  href={option.file}
                  download
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-morphism p-6 rounded-xl hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-br ${option.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <option.icon className="text-3xl text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{option.name}</h3>
                      <p className="text-sm text-dark-400">
                        {option.description}
                      </p>
                    </div>
                    <FaDownload className="text-primary-400 text-xl group-hover:animate-bounce" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick View Button */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.print()}
                className="btn-secondary flex items-center space-x-2"
              >
                <FaPrint />
                <span>Print This Page</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* CV Sections Overview */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { title: "Professional Summary", emoji: "👨‍💻" },
              { title: "Technical Skills", emoji: "⚡" },
              { title: "Work Experience", emoji: "💼" },
              { title: "Education & Certifications", emoji: "🎓" },
              { title: "Projects Portfolio", emoji: "🚀" },
              { title: "Achievements & Certifications", emoji: "📝" },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05 + 0.5 }}
                className="glass-morphism p-4 rounded-xl flex items-center space-x-4 hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl">{section.emoji}</div>
                <span className="font-semibold">{section.title}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto text-center space-y-4 p-6 glass-morphism rounded-xl"
          >
            <p className="text-dark-300">
              📧 For a detailed CV or specific information, feel free to{" "}
              <a
                href="#contact"
                className="text-primary-400 hover:text-primary-300 font-semibold"
              >
                contact me directly
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

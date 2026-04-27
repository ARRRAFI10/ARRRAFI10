"use client";

import { fadeInUp } from "@/lib/animations";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-500/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative section-container z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={fadeInUp}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 glass-morphism rounded-full text-sm"
            >
              <span className="gradient-text font-semibold">
                👋 Welcome to my digital garden
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              I'm{" "}
              <span className="gradient-text text-glow">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-dark-300 font-light"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-dark-400 leading-relaxed max-w-xl"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                View My Work
              </motion.a>
              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center space-x-2"
              >
                <FaDownload />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
              className="flex space-x-4 pt-4"
            >
              {[
                { icon: FaGithub, url: "https://github.com/yourusername" },
                {
                  icon: FaLinkedin,
                  url: "https://linkedin.com/in/yourusername",
                },
                { icon: FaEnvelope, url: "mailto:your.email@example.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-lg glass-morphism flex items-center justify-center hover:bg-primary-500/20 transition-colors"
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Avatar/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Animated Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-primary-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border-2 border-tech-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 border-2 border-primary-500/20 rounded-full"
              />

              {/* Center Image/Content */}
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-primary-500 via-tech-500 to-primary-500 p-1">
                <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="text-6xl">🌿</div>
                    <div className="text-6xl">💻</div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              {[
                { emoji: "⚛️", top: "10%", left: "10%", delay: 0 },
                { emoji: "🐍", top: "20%", right: "15%", delay: 1 },
                { emoji: "🔧", bottom: "25%", left: "5%", delay: 2 },
                { emoji: "🌱", bottom: "15%", right: "10%", delay: 3 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: item.delay,
                  }}
                  className="absolute glass-morphism w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                  style={{
                    top: item.top,
                    left: item.left,
                    right: item.right,
                    bottom: item.bottom,
                  }}
                >
                  {item.emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-primary-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

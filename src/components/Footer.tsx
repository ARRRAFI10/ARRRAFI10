"use client";

import { socialLinks } from "@/lib/data";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const iconMap: { [key: string]: any } = {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
  };

  return (
    <footer className="relative border-t border-white/10 mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-950" />

      <div className="relative section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-tech-500 rounded-lg transform rotate-45" />
              <span className="text-lg font-bold gradient-text">Portfolio</span>
            </motion.div>
            <p className="text-dark-400 text-sm">
              Building the future where technology meets nature. Full-stack
              development with a passion for innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {["Projects", "Blog", "CV", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg glass-morphism flex items-center justify-center hover:bg-primary-500/20 transition-colors"
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-dark-400 text-sm">
            © {currentYear} All rights reserved.
          </p>
          <p className="text-dark-400 text-sm flex items-center space-x-2">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            <span>and</span>
            <span className="gradient-text font-semibold">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

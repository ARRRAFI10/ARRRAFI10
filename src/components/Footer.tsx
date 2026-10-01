"use client";

import { personalInfo, socialLinks } from "@/lib/data";
import { features } from "@/lib/features";
import {
  navigateToPortfolioSection,
  type PortfolioSection,
} from "@/lib/portfolio-navigation";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface QuickLink {
  name: string;
  href: string;
  section?: PortfolioSection;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const iconMap: Record<string, IconType> = {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
  };

  const quickLinks: QuickLink[] = [
    { name: "Projects", href: "/#projects", section: "projects" },
    ...(features.blog ? [{ name: "Blog", href: "/blog" }] : []),
    { name: "CV", href: "/#cv", section: "cv" },
    { name: "Contact", href: "/#contact", section: "contact" },
  ];

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
              <span className="text-lg font-bold gradient-text">{personalInfo.name}</span>
            </motion.div>
            <p className="text-dark-400 text-sm">
              Full-stack software engineer building and operating production web
              platforms with Django, React, Next.js, and PostgreSQL.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(event) => {
                      if (item.section) {
                        event.preventDefault();
                        navigateToPortfolioSection(item.section);
                      }
                    }}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
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
        <div className="flex items-center justify-center border-t border-white/10 pt-8">
          <p className="text-dark-400 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

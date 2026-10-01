"use client";

import { itemVariants } from "@/lib/animations";
import { personalInfo, socialLinks } from "@/lib/data";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const iconMap: Record<string, IconType> = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
};

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" ref={ref} className="relative py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="space-y-12"
        >
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-4 text-center"
          >
            <h2 className="text-4xl font-bold md:text-5xl">
              <span className="gradient-text">Let&apos;s Connect</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-dark-400">
              Have a project in mind or want to collaborate? Reach out directly
              by email, phone, or LinkedIn.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-5xl space-y-8"
          >
            <div className="grid gap-4 md:grid-cols-3">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ y: -5 }}
                className="flex items-center space-x-4 rounded-xl p-5 glass-morphism transition-colors hover:bg-white/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-tech-500">
                  <FaEnvelope className="text-xl" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-dark-400">Email</p>
                  <p className="truncate font-medium">{personalInfo.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                whileHover={{ y: -5 }}
                className="flex items-center space-x-4 rounded-xl p-5 glass-morphism transition-colors hover:bg-white/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-tech-500 to-primary-500">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-dark-400">Phone</p>
                  <p className="font-medium">{personalInfo.phone}</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ y: -5 }}
                className="flex items-center space-x-4 rounded-xl p-5 glass-morphism"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-tech-500">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-dark-400">Location</p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>

            <div className="grid gap-6 rounded-2xl border border-primary-500/30 bg-gradient-to-br from-primary-500/20 to-tech-500/20 p-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="mb-2 flex items-center space-x-3">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
                  <span className="font-semibold text-primary-400">Get in Touch</span>
                </div>
                <p className="text-sm text-dark-400">
                  For full-stack software engineering opportunities or project
                  discussions, please reach out by email or LinkedIn.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  const isExternal = link.url.startsWith("http");

                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 rounded-xl p-3 glass-morphism transition-colors hover:bg-primary-500/10"
                    >
                      <Icon className="text-xl text-primary-400" />
                      <span className="font-medium">{link.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

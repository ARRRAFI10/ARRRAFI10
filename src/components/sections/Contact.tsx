"use client";

import { itemVariants } from "@/lib/animations";
import { personalInfo, socialLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const iconMap: { [key: string]: any } = {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
  };

  return (
    <section id="contact" ref={ref} className="relative py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Let's Connect</span>
            </h2>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear
              from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="glass-morphism p-8 rounded-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-dark-300"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-900/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-dark-300"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-900/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-dark-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-dark-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-900/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                    status === "sending" ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : status === "success" ? (
                    <span>✓ Message Sent!</span>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 glass-morphism rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-tech-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-400">Email</p>
                    <p className="font-medium">{personalInfo.email}</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 glass-morphism rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-tech-500 to-primary-500 flex items-center justify-center">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-400">Phone</p>
                    <p className="font-medium">{personalInfo.phone}</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 glass-morphism rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-tech-500 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-400">Location</p>
                    <p className="font-medium">{personalInfo.location}</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => {
                    const Icon = iconMap[link.icon];
                    return (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-3 p-4 glass-morphism rounded-xl hover:bg-primary-500/10 transition-colors"
                      >
                        <Icon className="text-2xl text-primary-400" />
                        <span className="font-medium">{link.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="p-6 bg-gradient-to-br from-primary-500/20 to-tech-500/20 rounded-2xl border border-primary-500/30"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-primary-400">
                    Available for Work
                  </span>
                </div>
                <p className="text-sm text-dark-400">
                  I'm currently available for freelance projects and full-time
                  opportunities. Let's create something amazing together!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

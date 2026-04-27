"use client";

import { containerVariants, itemVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaCalendar, FaClock, FaSearch } from "react-icons/fa";

// Mock blog posts - Replace with actual data fetching
const blogPosts = [
  {
    slug: "building-ai-powered-applications",
    title: "Building AI-Powered Applications with Next.js and TensorFlow",
    description:
      "A comprehensive guide to integrating machine learning models into modern web applications",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["AI/ML", "Next.js", "TensorFlow"],
    image: "/blog/ai-apps.jpg",
    featured: true,
  },
  {
    slug: "iot-and-nature",
    title: "IoT for Environmental Conservation: A Developer's Perspective",
    description:
      "How hardware projects can contribute to environmental monitoring and conservation",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["IoT", "Hardware", "Environment"],
    image: "/blog/iot-nature.jpg",
    featured: false,
  },
  {
    slug: "full-stack-best-practices",
    title: "Full-Stack Development Best Practices in 2024",
    description:
      "Modern patterns and practices for building scalable web applications",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["Full-Stack", "Best Practices", "Architecture"],
    image: "/blog/best-practices.jpg",
    featured: true,
  },
  {
    slug: "sustainable-tech",
    title: "Building Sustainable Technology: Green Coding Practices",
    description:
      "How developers can reduce carbon footprint through efficient coding",
    date: "2023-12-28",
    readTime: "7 min read",
    tags: ["Sustainability", "Best Practices"],
    image: "/blog/sustainable.jpg",
    featured: false,
  },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto">
              Thoughts on technology, development, and the intersection of
              nature and innovation
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 glass-morphism rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  !selectedTag
                    ? "bg-gradient-to-r from-primary-500 to-tech-500"
                    : "glass-morphism hover:bg-white/10"
                }`}
              >
                All
              </motion.button>
              {allTags.map((tag) => (
                <motion.button
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedTag === tag
                      ? "bg-gradient-to-r from-primary-500 to-tech-500"
                      : "glass-morphism hover:bg-white/10"
                  }`}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && !searchTerm && !selectedTag && (
            <motion.div variants={itemVariants}>
              <Link href={`/blog/${featuredPost.slug}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-morphism rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 p-6"
                >
                  <div className="relative h-64 lg:h-auto rounded-xl bg-gradient-to-br from-primary-500/20 to-tech-500/20 flex items-center justify-center text-6xl">
                    ⭐
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 text-xs rounded-full bg-primary-500 text-white font-semibold">
                        Featured
                      </span>
                      <span className="text-dark-400 text-sm flex items-center space-x-1">
                        <FaCalendar className="text-xs" />
                        <span>
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </span>
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold hover:text-primary-400 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-dark-400">{featuredPost.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 text-primary-400 font-semibold">
                      <span>Read More</span>
                      <FaArrowRight />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <motion.article
                    whileHover={{ y: -10 }}
                    className="glass-morphism rounded-xl overflow-hidden group h-full flex flex-col"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-tech-500/20 flex items-center justify-center text-5xl">
                      📝
                    </div>
                    <div className="p-6 flex-1 flex flex-col space-y-4">
                      <div className="flex items-center justify-between text-sm text-dark-400">
                        <span className="flex items-center space-x-1">
                          <FaCalendar className="text-xs" />
                          <span>
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <FaClock className="text-xs" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h3 className="text-xl font-bold group-hover:text-primary-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-dark-400 text-sm line-clamp-3 flex-1">
                        {post.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full bg-tech-500/10 text-tech-400 border border-tech-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center space-x-2 text-primary-400 font-semibold text-sm pt-2">
                        <span>Read Article</span>
                        <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-dark-400"
            >
              No articles found matching your criteria.
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

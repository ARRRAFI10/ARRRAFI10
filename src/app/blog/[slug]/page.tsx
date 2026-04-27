"use client";

import { fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaArrowLeft, FaCalendar, FaClock, FaShare } from "react-icons/fa";

// Mock blog post content - Replace with actual data fetching
const blogPost = {
  slug: "building-ai-powered-applications",
  title: "Building AI-Powered Applications with Next.js and TensorFlow",
  description:
    "A comprehensive guide to integrating machine learning models into modern web applications",
  date: "2024-01-15",
  readTime: "8 min read",
  tags: ["AI/ML", "Next.js", "TensorFlow"],
  content: `
# Introduction

In this comprehensive guide, we'll explore how to build modern, AI-powered web applications using Next.js and TensorFlow.js. This combination allows us to create powerful, intelligent applications that run entirely in the browser.

## Why Next.js and TensorFlow.js?

Next.js provides an excellent foundation for building performant web applications with server-side rendering and static site generation. When combined with TensorFlow.js, we can:

- Run ML models directly in the browser
- Provide real-time predictions without server calls
- Maintain user privacy by processing data locally
- Create responsive, intelligent interfaces

## Getting Started

First, let's set up our Next.js project with TensorFlow.js:

\`\`\`bash
npx create-next-app@latest my-ai-app
cd my-ai-app
npm install @tensorflow/tfjs
\`\`\`

## Building Your First ML Feature

Here's a simple example of image classification:

\`\`\`typescript
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

export async function classifyImage(imageElement: HTMLImageElement) {
  const model = await mobilenet.load();
  const predictions = await model.classify(imageElement);
  return predictions;
}
\`\`\`

## Best Practices

1. **Model Optimization**: Use quantization to reduce model size
2. **Lazy Loading**: Load models only when needed
3. **Caching**: Cache models in IndexedDB
4. **Fallbacks**: Provide graceful degradation for older browsers

## Conclusion

Building AI-powered applications with Next.js and TensorFlow.js opens up exciting possibilities. The combination of modern web development and machine learning creates truly innovative user experiences.

Happy coding! 🚀
  `,
};

export default function BlogPostPage() {
  const params = useParams();

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="section-container max-w-4xl">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="space-y-8"
        >
          {/* Back Button */}
          <Link href="/blog">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center space-x-2 text-dark-400 hover:text-primary-400 transition-colors"
            >
              <FaArrowLeft />
              <span>Back to Blog</span>
            </motion.button>
          </Link>

          {/* Article Header */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {blogPost.title}
            </h1>

            <p className="text-xl text-dark-400">{blogPost.description}</p>

            <div className="flex items-center justify-between text-sm text-dark-400 py-4 border-y border-white/10">
              <div className="flex items-center space-x-6">
                <span className="flex items-center space-x-2">
                  <FaCalendar />
                  <span>
                    {new Date(blogPost.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </span>
                <span className="flex items-center space-x-2">
                  <FaClock />
                  <span>{blogPost.readTime}</span>
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-primary-400 hover:text-primary-300"
              >
                <FaShare />
                <span>Share</span>
              </motion.button>
            </div>
          </div>

          {/* Article Content */}
          <motion.article
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none 
                     prose-headings:gradient-text prose-headings:font-bold
                     prose-p:text-dark-300 prose-p:leading-relaxed
                     prose-a:text-primary-400 prose-a:no-underline hover:prose-a:text-primary-300
                     prose-code:text-primary-400 prose-code:bg-dark-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
                     prose-pre:bg-dark-900 prose-pre:border prose-pre:border-white/10
                     prose-strong:text-primary-400
                     prose-ul:text-dark-300 prose-ol:text-dark-300"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: blogPost.content.replace(/\n/g, "<br/>"),
              }}
            />
          </motion.article>

          {/* Author Section */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="mt-12 p-8 glass-morphism rounded-2xl flex items-center space-x-6"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-tech-500 flex items-center justify-center text-3xl">
              👨‍💻
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Written by Your Name</h3>
              <p className="text-dark-400">
                Full-Stack Developer & AI/ML Enthusiast passionate about
                building the future where technology meets nature.
              </p>
            </div>
          </motion.div>

          {/* Related Posts */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
            className="mt-12 space-y-6"
          >
            <h3 className="text-2xl font-bold">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <Link key={i} href="/blog/related-post">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-morphism p-6 rounded-xl space-y-3"
                  >
                    <h4 className="font-bold text-lg hover:text-primary-400 transition-colors">
                      Related Article Title {i}
                    </h4>
                    <p className="text-dark-400 text-sm line-clamp-2">
                      Brief description of the related article content...
                    </p>
                    <span className="text-primary-400 text-sm font-semibold">
                      Read More →
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

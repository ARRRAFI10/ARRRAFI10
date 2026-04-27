import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer & AI/ML Enthusiast",
  description:
    "Professional portfolio showcasing full-stack development, AI/ML projects, and hardware engineering expertise",
  keywords: [
    "Full-Stack Developer",
    "AI",
    "Machine Learning",
    "React",
    "Next.js",
    "Python",
    "IoT",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Full-Stack Developer & AI/ML Enthusiast",
    description:
      "Professional portfolio showcasing full-stack development and AI/ML expertise",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        <ParticleBackground />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

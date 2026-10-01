import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arr Rafi | Full-Stack Software Engineer",
  description:
    "Portfolio of Arr Rafi, a full-stack software engineer building production web platforms with Django, React, Next.js, and PostgreSQL.",
  keywords: [
    "Full-Stack Software Engineer",
    "Django",
    "Django REST Framework",
    "React",
    "Next.js",
    "Python",
    "PostgreSQL",
    "WebSockets",
  ],
  authors: [{ name: "Arr Rafi" }],
  openGraph: {
    title: "Arr Rafi | Full-Stack Software Engineer",
    description:
      "Production web platforms built with Django, React, Next.js, and PostgreSQL.",
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
      <body className="font-sans">
        <ParticleBackground />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

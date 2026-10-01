"use client";

import { personalInfo, projects } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaArrowRight,
  FaBookOpen,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
  FaLightbulb,
  FaLinkedin,
  FaPhone,
  FaTrophy,
} from "react-icons/fa";

interface GeneralOverviewProps {
  onChooseAnotherView: () => void;
}

const highlights = [
  {
    icon: FaLayerGroup,
    number: "3",
    label: "Production platforms owned at MIST",
    note: "From database design to deployment and everyday operation.",
  },
  {
    icon: FaTrophy,
    number: "800+",
    label: "Competitive-programming problems solved",
    note: "Across Codeforces, CodeChef, and LeetCode.",
  },
  {
    icon: FaLightbulb,
    number: "3",
    label: "IEEE research publications",
    note: "Research spanning AI, computer vision, and aerial surveillance.",
  },
];

const capabilities = [
  {
    title: "Build",
    items: [
      "Web applications that solve operational problems",
      "Clear interfaces for real people and institutions",
      "Data models that support reliable day-to-day work",
    ],
  },
  {
    title: "Protect",
    items: [
      "Secure sign-in and role-based access",
      "Careful payment and registration workflows",
      "Reliable systems designed for real users",
    ],
  },
  {
    title: "Learn",
    items: [
      "Research in AI and computer vision",
      "Competitive programming and problem solving",
      "Continuous growth through production work",
    ],
  },
];

const publications = [
  {
    year: "2026",
    title:
      "Multi-Class Kidney Disease Classification from CT Images Using Explainable Deep Learning",
    href: "https://doi.org/10.1109/QPAIN69676.2026.11545964",
  },
  {
    year: "2025",
    title: "Design and Development of an RC Ornithopter for Remote Surveillance",
    href: "https://doi.org/10.1109/QPAIN66474.2025.11171712",
  },
  {
    year: "2025",
    title: "A Hybrid Residual U-Net Architecture for Enhanced Low-Light Image Restoration",
    href: "https://doi.org/10.1109/QPAIN66474.2025.11172051",
  },
];

const journey = [
  {
    date: "May 2025 - Present",
    type: "Experience",
    title: "Assistant Programmer",
    organization: "MIST ICT Directorate",
    body: "Sole developer and system owner for three production institutional platforms.",
  },
  {
    date: "2025 - 2026",
    type: "Research",
    title: "IEEE Publications",
    organization: "QPAIN Conference Proceedings",
    body: "Published three papers spanning AI, computer vision, and aerial surveillance.",
  },
  {
    date: "Apr 2021 - Apr 2025",
    type: "Education",
    title: "B.Sc. in Computer Science and Engineering",
    organization: "Military Institute of Science and Technology (MIST)",
    body: "Completed the degree with a CGPA of 3.56/4.00 and a final-year CGPA of 3.89/4.00.",
  },
  {
    date: "2022 - 2023",
    type: "Achievement",
    title: "Anatolian Rover Challenge",
    organization: "MIST Mars Rover Society",
    body: "Earned Second Runner-Up in 2022 and fifth place in 2023.",
  },
  {
    date: "Higher Secondary",
    type: "Education",
    title: "Higher Secondary Certificate (HSC)",
    organization: "New Govt. Degree College",
    body: "Completed higher secondary education with a GPA of 5.00/5.00.",
  },
  {
    date: "Secondary",
    type: "Education",
    title: "Secondary School Certificate (SSC)",
    organization: "Rajshahi Collegiate School",
    body: "Completed secondary education with a GPA of 5.00/5.00 and received a Board Scholarship.",
  },
];

export default function GeneralOverview({
  onChooseAnotherView,
}: GeneralOverviewProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3eee5] pt-20 text-[#172536]">
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-20">
        <div className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-[#c9ddd4] blur-3xl" />
        <div className="absolute -right-28 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#f2cda9] blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#a75f2a]">
              General portfolio · Arr Rafi
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              I build useful systems for real people.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#4c5a69] sm:text-xl">
              I&apos;m a full-stack software engineer at the MIST ICT Directorate.
              My work connects communities, supports important life events, and
              helps teams run their daily operations with confidence.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#172536] px-5 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <FaEnvelope /> Get in touch
              </a>
              <button
                type="button"
                onClick={onChooseAnotherView}
                className="inline-flex items-center gap-2 rounded-full border border-[#172536]/20 bg-white/70 px-5 py-3 font-semibold transition-transform hover:-translate-y-0.5"
              >
                Change view <FaArrowRight />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[2.5rem] bg-[#172536]" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border border-white/80 bg-[#d8e1e5] shadow-2xl">
              <Image
                src="/Arr Rafi Image.png"
                alt="Arr Rafi"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 28rem"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172536]/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#f4c48e]">
                    Based in
                  </p>
                  <p className="mt-1 text-lg font-semibold">Dhaka, Bangladesh</p>
                </div>
                <div className="rounded-full border border-white/30 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] backdrop-blur">
                  Portfolio 01
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#172536]/10 bg-white/60 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#a75f2a]">
            At a glance
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.article
                  key={highlight.label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-[#172536]/10 bg-[#fffaf2] p-7 shadow-sm"
                >
                  <Icon className="mb-9 text-3xl text-[#a75f2a]" />
                  <div className="text-5xl font-black tracking-tight">
                    {highlight.number}
                  </div>
                  <h2 className="mt-3 text-lg font-bold">{highlight.label}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#586777]">
                    {highlight.note}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28" id="projects">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#a75f2a]">
                Work portfolio
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Digital work with a human purpose.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-[#586777]">
              From platforms used by thousands of alumni and graduates to systems
              that support institutional teams, every project begins with a real
              workflow that needs to work better.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 2) * 0.08 }}
                viewport={{ once: true }}
                className="group flex min-h-72 flex-col justify-between rounded-3xl border border-[#172536]/10 bg-white/70 p-7 transition-all hover:-translate-y-1 hover:bg-white"
              >
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#a75f2a]">
                      0{index + 1}
                    </span>
                    <span className="rounded-full bg-[#e5eee9] px-3 py-1 text-xs font-semibold text-[#376e60]">
                      {project.category === "hardware" ? "Research project" : "Web platform"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                  <p className="mt-4 leading-relaxed text-[#586777]">
                    {project.description}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#a75f2a] hover:underline"
                    >
                      Visit live project <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#a75f2a] hover:underline"
                    >
                      View source code <FaGithub size={14} />
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <span className="text-sm text-[#7a8793]">No public link available</span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#172536] px-5 py-20 text-[#f7f1e8] sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#f4c48e]">
            How I contribute
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <motion.article
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/15 bg-white/5 p-7"
              >
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#f4c48e]">
                  0{index + 1}
                </p>
                <h2 className="mt-6 text-3xl font-bold">{capability.title}</h2>
                <ul className="mt-7 space-y-4 text-slate-300">
                  {capability.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f4c48e]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#a75f2a]">
              Research and learning
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Curious beyond the day job.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#586777]">
              I combine software engineering with research, competitive programming,
              and continuous learning - always looking for a clearer way to solve a
              difficult problem.
            </p>
            <div className="mt-8 rounded-2xl border border-[#172536]/10 bg-[#e5eee9] p-6">
              <p className="font-semibold">Django Web Framework</p>
              <p className="mt-1 text-sm text-[#586777]">Meta, via Coursera · Jan 2025</p>
            </div>
          </div>

          <div className="space-y-4">
            {publications.map((publication) => (
              <a
                key={publication.title}
                href={publication.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-[#172536]/10 bg-white/70 p-6 transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                <div className="flex gap-5">
                  <span className="font-mono text-sm font-bold text-[#a75f2a]">
                    {publication.year}
                  </span>
                  <div>
                    <h3 className="font-bold leading-snug group-hover:text-[#a75f2a]">
                      {publication.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm text-[#586777]">
                      Read publication <FaBookOpen size={13} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="cv" className="border-y border-[#172536]/10 bg-white/65 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#a75f2a]">
                CV &amp; journey
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                A timeline in motion.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#586777]">
                Education, competition milestones, professional experience, and
                research—organized as one continuous journey.
              </p>
            </div>

            <div className="rounded-2xl border border-[#172536]/10 bg-[#f3eee5] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a75f2a]">
                Full résumé
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#586777]">
                Download the complete CV for detailed experience, skills, and
                publication information.
              </p>
              <a
                href="/cv.pdf"
                download
                className="mt-5 inline-flex w-full items-center justify-between rounded-xl bg-[#172536] px-5 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Download CV <FaArrowRight />
              </a>
            </div>
          </div>

          <div className="relative mt-14">
            <div className="absolute bottom-8 left-[0.4375rem] top-8 w-px bg-[#d6ab83] md:left-[12rem]" />
            {journey.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative py-4 pl-8 md:grid md:grid-cols-[10.5rem_1fr] md:gap-14 md:pl-0"
              >
                <span className="absolute left-0 top-9 z-10 h-4 w-4 rounded-full border-4 border-[#fffaf2] bg-[#a75f2a] shadow-sm md:left-[11.5625rem]" />

                <div className="pb-3 md:pt-5 md:text-right">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-[#a75f2a]">
                    {item.date}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#172536]/10 bg-[#fffaf2] p-6 shadow-sm transition-transform hover:-translate-y-0.5 sm:p-7">
                  <span className="inline-flex rounded-full bg-[#e5eee9] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#376e60]">
                    {item.type}
                  </span>
                  <h3 className="mt-4 text-xl font-bold sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 font-semibold text-[#a75f2a]">
                    {item.organization}
                  </p>
                  <p className="mt-3 leading-relaxed text-[#586777]">{item.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#a75f2a] px-5 py-20 text-[#fff7ef] sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#ffdda9]">
              Let&apos;s connect
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
              Have a project or opportunity in mind?
            </h2>
          </div>
          <div className="space-y-4 lg:justify-self-end">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 text-lg font-semibold hover:underline"
            >
              <FaEnvelope /> {personalInfo.email}
            </a>
            <p className="flex items-center gap-3 text-lg font-semibold">
              <FaPhone /> {personalInfo.phone}
            </p>
            <a
              href="https://www.linkedin.com/in/arrrafi10/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg font-semibold hover:underline"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

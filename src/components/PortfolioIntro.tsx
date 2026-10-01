"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRight, FaCode, FaRegCompass } from "react-icons/fa";

type PortfolioMode = "technical" | "general";

interface PortfolioIntroProps {
  onSelect: (mode: PortfolioMode) => void;
}

export default function PortfolioIntro({ onSelect }: PortfolioIntroProps) {
  const [stage, setStage] = useState<"loading" | "choose">("loading");

  useEffect(() => {
    const timer = window.setTimeout(() => setStage("choose"), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="fixed inset-0 z-[100] overflow-y-auto bg-[#0b1020] text-white">
      <AnimatePresence mode="wait">
        {stage === "loading" ? (
          <motion.section
            key="loading"
            exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
            transition={{ duration: 0.45 }}
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.24),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(20,184,166,0.18),transparent_30%),linear-gradient(115deg,#080d18_0%,#101a2b_45%,#0a101b_100%)]" />
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
            <div className="relative grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="order-2 text-center lg:order-1 lg:text-left"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-sky-200 sm:text-xs">
                  Personal portfolio · loading
                </p>
                <div className="mt-5 overflow-hidden">
                  <motion.h1
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl font-black leading-[0.78] tracking-[-0.08em] text-white sm:text-8xl lg:text-[8rem]"
                  >
                    ARR
                    <br />
                    <span className="text-sky-300">RAFI</span>
                  </motion.h1>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.72 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 max-w-sm text-sm leading-relaxed text-slate-300 lg:text-base"
                >
                  Full-stack software engineer building systems people rely on.
                </motion.p>
              </motion.div>

              <div className="order-1 mx-auto w-full max-w-[22rem] lg:order-2 lg:max-w-[26rem]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.86, rotate: 7 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[3/4] overflow-hidden rounded-[2.3rem] border border-white/25 bg-slate-900 shadow-[18px_18px_0_rgba(56,189,248,0.22)]"
                >
                  <Image
                    src="/Arr Rafi Image.png"
                    alt="Arr Rafi"
                    fill
                    priority
                    sizes="(max-width: 1024px) 22rem, 26rem"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111e]/65 via-transparent to-sky-300/10" />
                  <motion.div
                    initial={{ top: "-10%" }}
                    animate={{ top: "110%" }}
                    transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 h-16 w-full bg-gradient-to-b from-transparent via-sky-200/75 to-transparent mix-blend-screen"
                  />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/90">
                    <span>Arr Rafi</span>
                    <span>01 / 01</span>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 w-52 -translate-x-1/2 overflow-hidden bg-white/15">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                className="h-px w-1/2 bg-gradient-to-r from-transparent via-sky-200 to-transparent"
              />
            </div>
          </motion.section>
        ) : (
          <motion.section
            key="choose"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="relative flex min-h-screen items-center px-5 py-12 sm:px-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(20,184,166,0.22),transparent_25%),radial-gradient(circle_at_88%_80%,rgba(59,130,246,0.25),transparent_30%)]" />
            <div className="relative mx-auto w-full max-w-5xl">
              <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.3em] text-sky-200">
                Choose your path
              </p>
              <h1 className="mx-auto max-w-3xl text-center text-4xl font-bold leading-tight sm:text-6xl">
                How would you like to explore my work?
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-center text-base text-slate-300 sm:text-lg">
                The same work, told in two different ways.
              </p>

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                <motion.button
                  type="button"
                  onClick={() => onSelect("technical")}
                  whileHover={{ y: -8, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="group rounded-3xl border border-sky-300/30 bg-sky-400/10 p-8 text-left shadow-2xl shadow-sky-950/30 backdrop-blur-sm transition-colors hover:bg-sky-400/15 sm:p-10"
                >
                  <FaCode className="mb-12 text-4xl text-sky-300" />
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-sky-200">
                    Technical view
                  </p>
                  <h2 className="text-3xl font-bold">Show me the engineering</h2>
                  <p className="mt-4 max-w-md text-slate-300">
                    Dive into platforms, architecture, technologies, production
                    metrics, publications, and source links.
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 font-semibold text-sky-200">
                    Enter technical view <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => onSelect("general")}
                  whileHover={{ y: -8, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="group rounded-3xl border border-amber-200/30 bg-amber-100/10 p-8 text-left shadow-2xl shadow-amber-950/20 backdrop-blur-sm transition-colors hover:bg-amber-100/15 sm:p-10"
                >
                  <FaRegCompass className="mb-12 text-4xl text-amber-200" />
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-amber-100">
                    General view
                  </p>
                  <h2 className="text-3xl font-bold">Show me the story</h2>
                  <p className="mt-4 max-w-md text-slate-300">
                    Explore a clear, visual introduction to who I am, what I build,
                    and the impact of my work.
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-100">
                    Enter general view <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}

export type { PortfolioMode };

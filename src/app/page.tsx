"use client";

import PortfolioIntro, { type PortfolioMode } from "@/components/PortfolioIntro";
import Contact from "@/components/sections/Contact";
import CVSection from "@/components/sections/CVSection";
import ExperienceTerminal from "@/components/sections/ExperienceTerminal";
import GeneralOverview from "@/components/sections/GeneralOverview";
import HeroVSCode from "@/components/sections/HeroVSCode";
import ProblemSolvingCodeforces from "@/components/sections/ProblemSolvingCodeforces";
import ProjectsGitHub from "@/components/sections/ProjectsGitHub";
import PublicationsAcademic from "@/components/sections/PublicationsAcademic";
import SkillsKaggle from "@/components/sections/SkillsKaggle";
import {
  getPortfolioSectionFromHash,
  PORTFOLIO_NAVIGATE_EVENT,
  type PortfolioSection,
} from "@/lib/portfolio-navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [mode, setMode] = useState<PortfolioMode | null>(null);

  useEffect(() => {
    const showPortfolioSection = (section: PortfolioSection) => {
      // Keep the active portfolio view. A direct hash visit has no active view,
      // so it opens the technical view by default.
      setMode((currentMode) => currentMode ?? "technical");

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          document.getElementById(section)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      });
    };

    const initialSection = getPortfolioSectionFromHash();
    if (initialSection) {
      showPortfolioSection(initialSection);
    }

    const handleNavigation = (event: Event) => {
      showPortfolioSection((event as CustomEvent<PortfolioSection>).detail);
    };

    window.addEventListener(PORTFOLIO_NAVIGATE_EVENT, handleNavigation);
    return () =>
      window.removeEventListener(PORTFOLIO_NAVIGATE_EVENT, handleNavigation);
  }, []);

  const resetView = () => {
    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMode(null);
  };

  if (!mode) {
    return <PortfolioIntro onSelect={setMode} />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <button
          type="button"
          onClick={resetView}
          className="fixed right-4 top-24 z-[60] rounded-full border border-white/20 bg-[#0d1117]/90 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur transition-transform hover:-translate-y-0.5 sm:right-7"
        >
          Change view
        </button>

        {mode === "technical" ? (
          <>
            <HeroVSCode />
            <SkillsKaggle />
            <ProjectsGitHub />
            <ExperienceTerminal />
            <PublicationsAcademic />
            <ProblemSolvingCodeforces />
            <CVSection />
            <Contact />
          </>
        ) : (
          <GeneralOverview onChooseAnotherView={resetView} />
        )}
      </motion.div>
    </AnimatePresence>
  );
}

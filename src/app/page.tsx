import Contact from "@/components/sections/Contact";
import ExperienceTerminal from "@/components/sections/ExperienceTerminal";
import HeroVSCode from "@/components/sections/HeroVSCode";
import ProblemSolvingCodeforces from "@/components/sections/ProblemSolvingCodeforces";
import ProjectsGitHub from "@/components/sections/ProjectsGitHub";
import PublicationsAcademic from "@/components/sections/PublicationsAcademic";
import SkillsKaggle from "@/components/sections/SkillsKaggle";

export default function Home() {
  return (
    <>
      <HeroVSCode />
      <SkillsKaggle />
      <ProjectsGitHub />
      <ExperienceTerminal />
      <PublicationsAcademic />
      <ProblemSolvingCodeforces />
      <Contact />
    </>
  );
}

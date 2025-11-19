import type { Metadata } from "next";

import AboutSection from "@/sections/AboutSection";
import EducationSection from "@/sections/EducationSection";
import HackathonsSection from "@/sections/HackathonsSection";
import HeroSection from "@/sections/HeroSection";
import SkillsSection from "@/sections/SkillsSection";
import WorkExperience from "@/sections/WorkExperience";
// import ProjectsSection from "@/sections/ProjectsSection";

import { pageData } from "@/pageData";

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */
export const metadata: Metadata = {
    description: pageData.description,
};

/* -------------------------------------------------------------------------- */
/*                                  HomePage                                  */
/* -------------------------------------------------------------------------- */
export default function Home() {
    return (
        <main className="max-w-4xl space-y-10">
            <HeroSection heading={pageData.heading} description={pageData.description} links={pageData.links} />
            <AboutSection aboutText={pageData.about} />
            <HackathonsSection description={pageData.hackathonsDescription} hackathons={pageData.hackathons} />
            {/* <ProjectsSection description={pageData.projectsDescription} projects={pageData.projects} /> */}
            <WorkExperience workExperiences={pageData.workExperiences} />
            <SkillsSection description={pageData.skillsDescription} skills={pageData.skills} />
            <EducationSection education={pageData.education} />
        </main>
    );
}

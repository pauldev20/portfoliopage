import type { Metadata } from "next";

import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import EducationSection from "@/sections/EducationSection";
import HackathonsSection from "@/sections/HackathonsSection";
import HeroSection from "@/sections/HeroSection";
import SkillsSection from "@/sections/SkillsSection";
import WorkExperience from "@/sections/WorkExperience";

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
        <main className="flex flex-col max-w-4xl space-y-10">
            <HeroSection heading={pageData.heading} description={pageData.description} links={pageData.links} />
            <AboutSection aboutText={pageData.about} />
            <WorkExperience workExperiences={pageData.workExperiences} />
            <EducationSection education={pageData.education} />
            <SkillsSection description={pageData.skillsDescription} skills={pageData.skills} />
            <HackathonsSection description={pageData.hackathonsDescription} hackathons={pageData.hackathons} />
            <ContactSection description={pageData.contactDescription} links={pageData.links} />
        </main>
    );
}

import BaseSection from "@/components/BaseSection";
import { ResumeCard } from "@/components/ResumeCard";

interface WorkExperience {
    company: string;
    companyUrl?: string;
    companyLogo: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    description?: string;
}

interface WorkExperienceProps {
    workExperiences: WorkExperience[];
}

export default function WorkExperience({ workExperiences }: WorkExperienceProps) {
    return (
        <BaseSection title="Work Experience">
            <ul className="flex flex-col gap-y-2.5">
                {workExperiences
                    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
                    .map((workExperience) => (
                        <ResumeCard
                            key={workExperience.company}
                            logoUrl={workExperience.companyLogo}
                            altText={workExperience.company}
                            title={workExperience.company}
                            subtitle={workExperience.position}
                            badges={[]}
							startDate={workExperience.startDate}
							endDate={workExperience.endDate}
                            description={workExperience.description}
                            href={workExperience.companyUrl}
                        />
                    ))}
            </ul>
        </BaseSection>
    );
}

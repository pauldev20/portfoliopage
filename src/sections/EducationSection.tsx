import BaseSection from "@/components/BaseSection";
import { ResumeCard } from "@/components/ResumeCard";

interface Education {
    title: string;
    image: string;
    subtitle: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    link?: string;
}

interface EducationSectionProps {
    education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
    return (
        <BaseSection title="Education">
            <ul className="flex flex-col gap-y-2.5">
                {education
                    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
                    .map((education) => (
                        <ResumeCard
                            key={education.title}
                            logoUrl={education.image}
                            altText={education.title}
                            title={education.title}
                            href={education.link}
                            subtitle={education.subtitle}
                            period={`${education.startDate.toLocaleString("en-US", { month: "long", year: "numeric" })} - ${education.endDate ? education.endDate.toLocaleString("en-US", { month: "long", year: "numeric" }) : "present"}`}
                            description={education.description}
                        />
                    ))}
            </ul>
        </BaseSection>
    );
}

import { RenderedText } from "@/components/RenderedText";
import BaseSection from "@/components/BaseSection";
import { Badge } from "@/components/ui/badge";

interface SkillsSectionProps {
    description: string;
    skills: string[];
}

export default function SkillsSection({ skills, description }: SkillsSectionProps) {
    return (
        <BaseSection title="Skills">
			<RenderedText text={description} />
            <div className="flex flex-wrap gap-1 justify-start">
                {skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                ))}
            </div>
        </BaseSection>
    );
}

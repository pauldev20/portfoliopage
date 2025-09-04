import Markdown from "react-markdown";

import BaseSection from "@/components/BaseSection";
import { Badge } from "@/components/ui/badge";

interface SkillsSectionProps {
    description: string;
    skills: string[];
}

export default function SkillsSection({ skills, description }: SkillsSectionProps) {
    return (
        <BaseSection title="Skills">
            <div className="flex flex-col gap-y-2">
                <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    {description}
                </Markdown>
                <div className="flex flex-wrap gap-1 justify-start">
                    {skills.map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                    ))}
                </div>
            </div>
        </BaseSection>
    );
}

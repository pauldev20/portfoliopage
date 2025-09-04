import Markdown from "react-markdown";

import BaseSection from "@/components/BaseSection";

interface AboutSectionProps {
    aboutText: string;
}

export default function AboutSection({ aboutText }: AboutSectionProps) {
    return (
        <BaseSection title="About Me">
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                {aboutText}
            </Markdown>
        </BaseSection>
    );
}

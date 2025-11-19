import { RenderedText } from "@/components/RenderedText";
import BaseSection from "@/components/BaseSection";

interface AboutSectionProps {
    aboutText: string;
}

export default function AboutSection({ aboutText }: AboutSectionProps) {
    return (
        <BaseSection title="About Me">
            <RenderedText text={aboutText} />
        </BaseSection>
    );
}

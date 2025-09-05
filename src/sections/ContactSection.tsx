import Markdown from "react-markdown";

import BaseSection from "@/components/BaseSection";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

interface ContactSectionProps {
    description: string;
    links: {
        label: string;
        icon: IconDefinition;
        href: string;
    }[];
}

export default function ContactSection({ description, links }: ContactSectionProps) {
    return (
        <BaseSection title="Contact">
            <div className="flex flex-col gap-2">
                <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    {description}
                </Markdown>
                <div className="flex flex-row gap-2">
                    {links.map((link) => (
                        <Link key={link.label} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </BaseSection>
    );
}

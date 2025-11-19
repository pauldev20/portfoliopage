import { TypingAnimation } from "@/components/TypingAnimation";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface HeroLinkProps {
    href: string;
    label: string;
    username: string;
    icon: IconProp;
}

function HeroLink({ href, label, icon, username }: HeroLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
            aria-label={label}
        >
            <FontAwesomeIcon icon={icon} className="size-5" /> {username}
        </a>
    );
}

interface HeroSectionProps {
    heading: string;
    description: string;
    links: HeroLinkProps[];
}

export default function HeroSection({ heading, description, links }: HeroSectionProps) {
    return (
        <section id="hero">
            <div className="mx-auto w-full space-y-8">
                <div className="gap-3 sm:gap-5 md:gap-12 flex flex-col md:flex-row justify-center items-center">
					<Image src="/me.jpg" alt={heading} width={152} height={152} className="rounded-full" />
                    <div className="flex-col flex items-center md:items-start space-y-1.5">
                        <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none flex">
                            <TypingAnimation text={heading} speed={150} handAnimation={true} />
                        </h1>
                        <p className="max-w-[600px] md:text-xl text-center md:text-left">{description}</p>
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                            {links.map((link) => (
                                <HeroLink key={link.label} {...link} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import BaseSection from "@/components/BaseSection";
import GlobeComponent from "@/components/Globe";
import { HackathonCard } from "@/components/HackathonCard";
import Markdown from "react-markdown";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";


interface HackathonProps {
    title: string;
    logo: string;
    location: string;
    locationPoint: number[];
    livingLocationPoint: number[];
    description?: string;
    startDate: Date;
    endDate: Date;
    category?: string;
    links?: readonly {
		title: string;
		link: string;
		icon: IconDefinition;
	}[];
    prizes?: readonly {
        title: string;
    }[];
}

interface HackathonsSectionProps {
    hackathons: HackathonProps[];
    description: string;
}

export default function HackathonsSection({ hackathons, description }: HackathonsSectionProps) {
    return (
        <BaseSection title="Hackathons">
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                {description}
            </Markdown>
            <div className="flex flex-col items-center md:flex-row gap-x-2">
                <div className="w-[400px] md:sticky md:top-0 md:self-start">
                    <GlobeComponent
                        width={400}
                        markers={hackathons.map((hackathon) => ({
                            location: hackathon.locationPoint as [number, number],
                        }))}
                    />
                </div>
                <ul className="mb-4 ml-4 divide-y divide-dashed border-l mx-1.5 border-foreground/15 divide-foreground/20 h-[600px] overflow-y-scroll md:h-auto md:overflow-y-visible">
                    {hackathons
                        .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
                        .map((hackathon) => (
                            <HackathonCard
                                key={hackathon.title}
                                title={hackathon.title}
                                description={hackathon.description}
                                location={hackathon.location}
                                startDate={hackathon.startDate}
                                endDate={hackathon.endDate}
                                image={hackathon.logo}
                                category={hackathon.category}
                                links={hackathon.links}
                                prizes={hackathon.prizes}
                            />
                        ))}
                </ul>
            </div>
        </BaseSection>
    );
}

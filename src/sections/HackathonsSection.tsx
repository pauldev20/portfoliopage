import BaseSection from "@/components/BaseSection";
import GlobeComponent from "@/components/Globe";
import { HackathonCard } from "@/components/HackathonCard";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { RenderedText } from "@/components/RenderedText";


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
			<RenderedText text={description} />
            <div className="flex flex-col items-center md:flex-row gap-x-5">
                <div className="md:scale-115 md:sticky md:top-0 md:self-start">
                    <GlobeComponent
                        width={315}
                        markers={hackathons.map((hackathon) => ({
                            location: hackathon.locationPoint as [number, number],
                        }))}
                    />
                </div>
                <ul className="hackathons-list">
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

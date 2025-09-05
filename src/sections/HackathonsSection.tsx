import BaseSection from "@/components/BaseSection";
import { HackathonCard } from "@/components/HackathonCard";
import GlobeComponent from "@/components/globe";
import Markdown from "react-markdown";

interface HackathonProps {
    title: string;
    logo: string;
    location: string;
    locationPoint: number[];
    livingLocationPoint: number[];
    description: string;
    startDate: Date;
    endDate: Date;
    links: {
        title: string;
        icon: React.ReactNode;
        href: string;
    }[];
}

interface HackathonsSectionProps {
    hackathons: HackathonProps[];
    description: string;
}

export default function HackathonsSection({ hackathons, description }: HackathonsSectionProps) {
    return (
        <BaseSection title="Hackathons">
            <div className="flex flex-col gap-y-2">
                <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    {description}
                </Markdown>
                <div className="w-[400px] -ml-20">
                    <GlobeComponent
                        width={350}
                        markers={hackathons.map((hackathon) => ({
                            location: hackathon.locationPoint as [number, number],
                        }))}
                    />
                </div>
                {hackathons
                    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
                    .map((hackathon) => (
                        <HackathonCard
                            key={hackathon.title}
                            title={hackathon.title}
                            description={hackathon.description}
                            location={hackathon.location}
                            dates={`${hackathon.startDate.toLocaleString("en-US", { month: "long", year: "numeric" })} - ${hackathon.endDate.toLocaleString("en-US", { month: "long", year: "numeric" })}`}
                            image={hackathon.logo}
                            links={hackathon.links}
                        />
                    ))}
            </div>
        </BaseSection>
    );
}

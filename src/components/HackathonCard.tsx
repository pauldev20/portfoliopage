import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { RoundImage } from "./RoundImage";
import { RenderedText } from "@/components/RenderedText";

interface Props {
    className?: string;
    title: string;
    description?: string;
    startDate: Date;
    endDate?: Date;
    location: string;
    image?: string;
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

const TimeBadge = ({ startDate, endDate }: { startDate: Date; endDate?: Date }) => {
    const dayWithSuffix = (date: Date) => {
        const day = date.getUTCDate();
        if (day >= 11 && day <= 13) {
            return `${day}th`;
        }
        switch (day % 10) {
            case 1:
                return `${day}st`;
            case 2:
                return `${day}nd`;
            case 3:
                return `${day}rd`;
            default:
                return `${day}th`;
        }
    };

    const sameMonth =
        endDate && startDate.getUTCMonth() === endDate.getUTCMonth() && startDate.getUTCFullYear() === endDate.getUTCFullYear();

    const formatMonth = (date: Date) => {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[date.getUTCMonth()];
    };

    return (
        <div className="flex gap-x-1 text-xs text-muted-foreground">
            <time dateTime={startDate.toISOString()}>
                {formatMonth(startDate)} {dayWithSuffix(startDate)}
            </time>

            {endDate && (
                <>
                    {" - "}
                    <time dateTime={endDate.toISOString()}>
                        {sameMonth
                            ? `${dayWithSuffix(endDate)}, ${startDate.getUTCFullYear()}`
                            : `${formatMonth(endDate)} ${dayWithSuffix(endDate)}, ${endDate.getUTCFullYear()}`}
                    </time>
                </>
            )}
        </div>
    );
};

export function HackathonCard({
    className,
    title,
    description,
    startDate,
    endDate,
    location,
    image,
    category,
    links,
    prizes,
}: Props) {
    return (
		<li className={cn("hackathon-list-item", className)}>
			<div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 -ml-[19.5px] md:-ml-[21.5px]">
				{/* Image */}
				<RoundImage
					className="self-center"
					image={image ?? ""}
					alt={title}
				/>

				{/* Header */}
				<div className="space-y-1">
					{/* Time */}
					{(startDate || endDate) && <TimeBadge startDate={startDate} endDate={endDate} />}
					
					{/* Title */}
					<h2 className="font-semibold leading-none">{title}</h2>

					{/* Tags */}
					<div className="flex items-center gap-x-3 flex-wrap">
						{location && (
							<p className="text-sm text-muted-foreground flex items-center gap-1">
								<FontAwesomeIcon icon={faLocationDot as IconProp} className="size-3" />
								{location}
							</p>
						)}
						{category && (
							<p className="text-sm text-muted-foreground flex items-center gap-1">
								<FontAwesomeIcon icon={faTag as IconProp} className="size-3" />
								{category}
							</p>
						)}
					</div>
				</div>

				{/* Description */}
				{description && (
					<RenderedText text={description} className="col-start-2"/>
				)}

				{/* Footer */}
				<div className="space-y-1 col-start-2">
					{/* Prizes */}
					{prizes && prizes.length > 0 && (
						<div className="flex flex-row flex-wrap items-start gap-1">
							{prizes.map((prize) => (
								<Badge key={prize.title} variant="secondary" className="text-xs">
									{prize.title}
								</Badge>
							))}
						</div>
					)}

					{/* Link(s) */}
					{(links && links.length > 0) && (
						<div className="flex flex-row flex-wrap items-start gap-1">
							{links.map((item) => (
								<Link key={item.title} href={item.link} className="hover:opacity-65 transition-opacity" target="_blank">
									<Badge className="flex items-center gap-1 w-fit">
										<FontAwesomeIcon icon={item.icon as IconProp} className="size-4" /> {item.title}
									</Badge>
								</Link>
							))}
						</div>
					)}
				</div>
			</div>
		</li>
    );
}

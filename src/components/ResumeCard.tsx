"use client";

import { RenderedText } from "@/components/RenderedText";
import { Badge } from "@/components/ui/badge";
import { RoundImage } from "./RoundImage";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ResumeCardProps {
    logoUrl: string;
    altText: string;
    title: string;
    subtitle?: string;
    href?: string;
    badges?: readonly string[];
    period: string;
    description?: string;
}

export const ResumeCard = ({
    logoUrl,
    altText,
    title,
    subtitle,
    href,
    badges,
    period,
    description,
}: ResumeCardProps) => {
    const TitleComponent = href ? Link : "h3";

    return (
		<li className="grid grid-cols-[auto_1fr] gap-x-2.5 py-0.5">
			<RoundImage
				image={logoUrl}
				alt={altText}
				className="self-center"
			/>

			<div className="flex items-center justify-between gap-x-1">
				<div className="flex flex-col items-start">
					<TitleComponent
						href={href ?? "#"}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							"inline-flex items-center flex-wrap gap-x-1 font-semibold text-xs sm:text-sm",
							href ? "hover:underline" : "",
						)}
					>
						{title}
						{badges?.map((badge) => (
							<Badge variant="secondary" className="align-middle text-xs" key={badge}>
								{badge}
							</Badge>
						))}
					</TitleComponent>
					{subtitle && <div className="font-sans text-xs">{subtitle}</div>}
				</div>
				<div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right whitespace-nowrap leading-tight">
					{period}
				</div>
			</div>

			{description && <RenderedText text={description} className="mt-1.5 col-start-2" />}
		</li>
    );
};

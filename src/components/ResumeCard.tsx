"use client";

import { RenderedText } from "@/components/RenderedText";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
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
        <Card className="py-0.5 bg-transparent">
            <div className="grid grid-cols-[auto_1fr] gap-x-2.5">
                <div className="border size-10 md:size-11 bg-white rounded-full flex items-center justify-center overflow-hidden p-2">
                    <Image className="object-contain" src={logoUrl} alt={altText} width={40} height={40} />
                </div>
                <div className="flex flex-col min-w-0">
                    <div className="flex items-start justify-between gap-x-1">
                        <div className="flex-1 min-w-0">
                            <TitleComponent
                                href={href ?? "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "inline-flex items-center flex-wrap gap-x-1 font-semibold leading-none text-xs sm:text-sm",
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
                    {description && (
						<RenderedText text={description} className="mt-1.5" />
                    )}
                </div>
            </div>
        </Card>
    );
};

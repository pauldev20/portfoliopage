"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

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
}: ResumeCardProps) => (
    <Link
        href={href ?? "#"}
        className="block"
        onClick={description ? (e) => e.preventDefault() : undefined}
    >
        <Card className="py-0.5">
            <div className="grid grid-cols-[auto_1fr] gap-x-2.5">
                <div className="border size-10.5 md:size-11.5 bg-white rounded-full flex items-center justify-center overflow-hidden p-2">
                    <Image className="object-contain" src={logoUrl} alt={altText} width={40} height={40} />
                </div>
                <div className="flex flex-col min-w-0">
                    <div className="flex items-start justify-between gap-x-1">
                        <div className="flex-1 min-w-0">
                            <h3 className="inline-flex items-center flex-wrap gap-x-1 font-semibold leading-none text-xs sm:text-sm">
                                {title}
                                {badges?.map((badge) => (
                                    <Badge variant="secondary" className="align-middle text-xs" key={badge}>
                                        {badge}
                                    </Badge>
                                ))}
                            </h3>
                            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
                        </div>
                        <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right whitespace-nowrap leading-tight">
                            {period}
                        </div>
                    </div>
                    {description && (
                        <div className="mt-1.5 text-xs sm:text-sm text-muted-foreground">{description}</div>
                    )}
                </div>
            </div>
        </Card>
    </Link>
);

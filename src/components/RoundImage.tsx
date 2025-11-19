import Image from "next/image";

import { cn } from "@/lib/utils";


export function RoundImage({ image, alt, className }: { image: string; alt: string; className?: string }) {
    return (
        <Image
			className={cn("object-contain size-10 md:size-11 border rounded-full bg-white", className)}
			src={image}
			alt={alt}
			width={48}
			height={48}
		/>
);
}

import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
// biome-ignore lint/style/useNodejsImportProtocol: fs/promises
import { readFile } from 'fs/promises';
import { ImageResponse } from "next/og";
// biome-ignore lint/style/useNodejsImportProtocol: path
import { join } from 'path';

import { pageData } from "@/pageData";

export const alt = pageData.pageTitle;
export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function FAIcon({ icon, size = 24, color = "#000" }: { icon: IconDefinition; size?: number; color?: string }) {
    const [width, height, , , path] = icon.icon;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${width} ${height}`}
            width={size}
            height={size}
            fill={color}
        >
            <path d={path as string} />
        </svg>
    );
}

export default async function Image() {
	const imageBuffer = await readFile(join(process.cwd(), "public", "me.jpg"));
    const imageBase64 = `data:image/jpeg;base64,${Buffer.from(imageBuffer).toString("base64")}`;

	const interRegular = readFile(join(process.cwd(), "src", "fonts", "Inter-Regular.ttf"));
    const interBold = readFile(join(process.cwd(), "src", "fonts", "Inter-Bold.ttf"));

    return new ImageResponse(
        <div tw="flex flex-col items-center justify-center w-full h-full bg-white p-4" style={{ fontFamily: "Inter" }}>
            <div tw="flex flex-row items-center justify-center w-full max-w-[1060px]" style={{ gap: "56px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageBase64} alt={pageData.pageTitle} width={280} height={280} tw="rounded-full shadow-lg" />

                <div tw="flex flex-col justify-center flex-1" style={{ gap: "22px" }}>
                    <h1 tw="font-bold text-6xl mb-0 mt-0">{pageData.heading}</h1>
                    <p tw="max-w-[800px] text-xl mb-0 mt-0">{pageData.description}</p>

                    <div tw="flex flex-wrap" style={{ gap: "12px" }}>
                        {pageData.links.map((link) => (
                            <span
                                key={link.label}
                                tw="border-slate-200 p-2 px-3 rounded-xl font-bold text-slate-900 bg-slate-200 flex items-center justify-center"
                                style={{ gap: "6px" }}
                            >
                                <FAIcon icon={link.icon} /> {link.username}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>,
        {
            ...size,
            fonts: [
                { name: "Inter", data: await interRegular, weight: 400 },
                { name: "Inter", data: await interBold, weight: 700 },
            ],
            emoji: "noto",
        },
    );
}

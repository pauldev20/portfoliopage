import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "./globals.css";

import { pageData } from "@/pageData";

/* -------------------------------------------------------------------------- */
/*                                    Fonts                                   */
/* -------------------------------------------------------------------------- */
const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */
export const metadata: Metadata = {
    title: pageData.pageTitle,
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
};

/* -------------------------------------------------------------------------- */
/*                                   Layout                                   */
/* -------------------------------------------------------------------------- */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${fontSans.variable} min-h-screen bg-background font-sans antialiased flex justify-center mx-auto py-8 sm:py-16 px-6`}
            >
                {children}

                {/* ------------------------------- Bottom Blur ------------------------------ */}
                <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background" />

                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}

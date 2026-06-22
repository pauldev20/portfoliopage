import type { Metadata } from "next";

import BaseSection from "@/components/BaseSection";

export const metadata: Metadata = {
    title: "Imprint | Paul Geeser",
    description: "Legal notice / Impressum",
};

export default function ImprintPage() {
    return (
        <main className="w-full max-w-4xl space-y-10">
            <section className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Imprint</h1>
                <p className="text-muted-foreground text-sm">Legal notice / Impressum</p>
            </section>

            <BaseSection title="Address">
                <address className="not-italic text-muted-foreground leading-relaxed">
                    Paul Geeser
                    <br />
                    c/o flexdienst – #21353
                    <br />
                    Kurt-Schumacher-Straße 76
                    <br />
                    67663 Kaiserslautern
                    <br />
                    Deutschland
                </address>
            </BaseSection>

            <BaseSection title="Contact">
                <p className="text-muted-foreground">
                    Email:{" "}
                    <a
                        href="mailto:contact@pauldev.sh"
                        className="underline underline-offset-4 hover:text-foreground transition-colors"
                    >
                        contact@pauldev.sh
                    </a>
                </p>
            </BaseSection>

            <BaseSection title="Responsible for content">
                <p className="text-muted-foreground">Paul Geeser (address as above)</p>
            </BaseSection>
        </main>
    );
}

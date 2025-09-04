interface BaseSectionProps {
    title: string;
    children: React.ReactNode;
}

export default function BaseSection({ title, children }: BaseSectionProps) {
    return (
        <section id={title.toLowerCase().replace(" ", "-")}>
            <div className="w-full flex min-h-0 flex-col gap-y-2">
                <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
                {children}
            </div>
        </section>
    );
}

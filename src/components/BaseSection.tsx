interface BaseSectionProps {
    title: string;
    children: React.ReactNode;
}

export default function BaseSection({ title, children }: BaseSectionProps) {
    return (
        <section id={title.toLowerCase().replace(" ", "-")} className="w-full min-h-0 space-y-2">
			<h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
			{children}
        </section>
    );
}

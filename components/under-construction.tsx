import Image from "next/image";

export default function UnderConstruction() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
            <div className="flex items-center gap-4">
                <Image src="/barrier.gif" alt="Under Construction" width={60} height={60} />
                <h1 className="text-4xl font-bold">Under Construction</h1>
                <Image src="/barrier.gif" alt="Under Construction" width={60} height={60} />
            </div>
            <p className="text-lg font-medium text-muted-foreground dark:text-muted-invert">This page is still being built. Check back soon!</p>
        </div>
    )
}

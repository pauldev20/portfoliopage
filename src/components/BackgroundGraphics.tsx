import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export default function BackgroundGraphics() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <AnimatedGridPattern numSquares={30} maxOpacity={0.1} duration={3} className="opacity-40" />

            <div className="absolute inset-0 overflow-hidden">
                {/* Top left */}
                <div className="absolute -top-40 -left-40 h-80 w-80 md:h-100 md:w-100 rounded-full bg-blue-400/20 blur-3xl" />

                {/* Top right */}
                <div className="absolute -top-40 -right-40 h-80 w-80 md:h-100 md:w-100 rounded-full bg-purple-400/20 blur-3xl" />

                {/* Bottom left */}
                {/* <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-pink-400/20 blur-3xl" /> */}

                {/* Bottom right */}
                {/* <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" /> */}
            </div>

            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" /> */}
        </div>
    );
}

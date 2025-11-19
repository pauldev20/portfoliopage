import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export default function BackgroundGraphics() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className="opacity-35"
      />

      <div className="absolute inset-0 overflow-hidden">
        {/* left accent strip */}
        <div className="absolute top-0 bottom-0 -left-20 w-40 md:w-60 bg-gradient-to-r from-blue-400/40 to-transparent blur-3xl" />

        {/* right accent strip */}
        <div className="absolute top-0 bottom-0 -right-20 w-40 md:w-60 bg-gradient-to-l from-purple-400/40 to-transparent blur-3xl" />

        {/* top subtle fade (no hard bar) */}
        <div className="absolute inset-x-0 top-0 h-30 bg-gradient-to-b from-background/80 via-background/40 to-transparent" />

        {/* bottom subtle fade (no hard bar) */}
        <div className="absolute inset-x-0 bottom-0 h-30 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
      </div>
    </div>
  );
}
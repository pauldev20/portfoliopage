"use client";

import { cn } from "@/lib/utils";
import { useCallback, useEffect, useMemo, useState } from "react";

interface TypingAnimationProps {
    text: string;
    speed?: number;
    className?: string;
    onComplete?: () => void;
    handAnimation?: boolean;
}

export const TypingAnimation = ({
    text,
    speed = 150,
    className,
    onComplete,
    handAnimation = false,
}: TypingAnimationProps) => {
    const [displayedText, setDisplayedText] = useState("\u200e");
    const [handAnimationState, setHandAnimationState] = useState(false);
    const [index, setIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const chars = useMemo(() => Array.from(text), [text]);

    const handleComplete = useCallback(() => {
        if (!isComplete) {
            setIsComplete(true);
            onComplete?.();
        }
    }, [isComplete, onComplete]);

    useEffect(() => {
        if (index < chars.length) {
            const timeout = setTimeout(() => {
                if (chars[index] === "👋" && handAnimation) {
                    setHandAnimationState(true);
                } else {
                    setDisplayedText((prev) => prev + chars[index]);
                }
                setIndex(index + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
        if (index === chars.length && !isComplete) {
            handleComplete();
        }
    }, [index, chars, speed, isComplete, handleComplete, handAnimation]);

    return (
        <div
            className={cn(
                "inline-block overflow-visible whitespace-pre border-r-4 border-solid border-black animate-blink-caret",
                className,
            )}
            aria-label={`Typing animation: ${text}`}
            aria-live="polite"
        >
            {displayedText}
            <span
                className={cn("animate-wave origin-wave-origin inline-block pr-1", { hidden: !handAnimationState })}
                role="img"
                aria-label="waving hand"
            >
                👋
            </span>
        </div>
    );
};

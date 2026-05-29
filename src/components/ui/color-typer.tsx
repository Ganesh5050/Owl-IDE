import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ColorTyperProps {
    text: string;
    className?: string;
    appearColor?: string;
    finalColor?: string;
    stagger?: number;
    colorDelay?: number;
    startDelay?: number;
    onComplete?: () => void;
}

export const ColorTyper: React.FC<ColorTyperProps> = ({
    text,
    className,
    appearColor = "#22c55e", // Default Green
    finalColor = "#ffffff", // Default White
    stagger = 0.05,
    colorDelay = 0.2, // Time to hold the appear color before switching to final
    startDelay = 0,
    onComplete,
}) => {
    const words = text.split(" ");

    // Calculate total characters for identifying the last one
    const totalChars = words.reduce((acc, word) => acc + word.length, 0);

    let charIndexCounter = 0;

    return (
        <span className={cn("inline-flex flex-wrap gap-x-[0.25em] gap-y-1 align-bottom", className)}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-flex whitespace-nowrap">
                    {word.split("").map((char, i) => {
                        const index = charIndexCounter++;
                        const isLastChar = index === totalChars - 1;
                        const totalDelay = startDelay + index * stagger;

                        return (
                            <motion.span
                                key={`${wordIndex}-${i}`}
                                initial={{ opacity: 0, color: appearColor }}
                                animate={{
                                    opacity: [0, 1, 1],
                                    color: [appearColor, appearColor, finalColor],
                                }}
                                transition={{
                                    times: [0, 0.1, 1],
                                    duration: colorDelay,
                                    opacity: {
                                        duration: 0.01,
                                        delay: totalDelay,
                                        times: [0, 1],
                                    },
                                    color: {
                                        duration: 0.01,
                                        delay: totalDelay + colorDelay,
                                        times: [0, 1],
                                    }
                                }}
                                onAnimationComplete={isLastChar ? () => {
                                    if (onComplete) onComplete();
                                } : undefined}
                            >
                                {char}
                            </motion.span>
                        );
                    })}
                </span>
            ))}
        </span>
    );
};

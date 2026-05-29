import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MaskedTextRevealProps {
    content: string | string[]; // Can be a single string or an array of lines
    className?: string;
    lineClassName?: string;
    wordClassName?: string;
    charClassName?: string;
    delayOffset?: number; // Initial delay in seconds
    duration?: number; // Animation duration per character
    manualTrigger?: boolean; // Control animation externally
}

export const MaskedTextReveal: React.FC<MaskedTextRevealProps> = ({
    content,
    className,
    lineClassName,
    wordClassName,
    charClassName,
    delayOffset = 0,
    duration = 0.5,
    manualTrigger,
}) => {
    // Normalize content to array of lines
    const lines = Array.isArray(content) ? content : [content];

    return (
        <motion.div
            initial="hidden"
            animate={manualTrigger !== undefined ? (manualTrigger ? "visible" : "hidden") : undefined}
            whileInView={manualTrigger === undefined ? "visible" : undefined}
            viewport={{ once: true, margin: "-10%" }} // Trigger a bit earlier
            className={cn(className)}
        >
            {lines.map((line, lineIndex) => (
                <span key={lineIndex} className={cn("block", lineClassName)}>
                    {line.split(" ").map((word, wordIndex) => (
                        <span key={wordIndex} className={cn("inline-block whitespace-nowrap mr-[0.25em]", wordClassName)}>
                            {word.split("").map((char, charIndex) => (
                                <span key={charIndex} className="inline-block overflow-hidden align-bottom">
                                    <motion.span
                                        className={cn("inline-block", charClassName)}
                                        variants={{
                                            hidden: { x: "-100%" },
                                            visible: {
                                                x: "0%",
                                                transition: {
                                                    duration: duration,
                                                    ease: [0.22, 1, 0.36, 1], // Custom ease for smooth slide
                                                    delay: delayOffset + (lineIndex * 0.1 + wordIndex * 0.05 + charIndex * 0.03), // Stagger calculation
                                                }
                                            }
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                </span>
                            ))}
                        </span>
                    ))}
                </span>
            ))}
        </motion.div>
    );
};

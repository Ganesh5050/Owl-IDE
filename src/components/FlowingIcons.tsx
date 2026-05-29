import React from "react";
import { motion } from "framer-motion";
import {
    Keyboard,
    Sparkles,
    GitCommit,
    Copy,
    Folder,
    CircuitBoard,
    LayoutDashboard,
    Braces,
    PlusSquare,
    Command,
    Blocks,
    PenLine,
    Code2,
    CornerDownLeft,
    Monitor,
    RefreshCw,
    GitMerge,
    CheckCircle2,
    Terminal,
    Rocket,
    Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MaskedTextReveal } from "@/components/ui/masked-text-reveal";

const icons = [
    { icon: Keyboard, y: 10 },
    { icon: Sparkles, y: -30 },
    { icon: GitCommit, y: -45 },
    { icon: Copy, y: -40 },
    { icon: Folder, y: -20 },
    { icon: CircuitBoard, y: 20 },
    { icon: LayoutDashboard, y: -10 },
    { icon: Braces, y: -50 },
    { icon: PlusSquare, y: -60 },
    { icon: Command, y: 5 },
    { icon: Blocks, y: -8 },
    { icon: PenLine, y: -35 },
    { icon: Code2, y: -30 },
    { icon: CornerDownLeft, y: 0 },
    { icon: Monitor, y: -10 },
    { icon: RefreshCw, y: 10 },
    { icon: GitMerge, y: -25 },
    { icon: CheckCircle2, y: -35 },
    { icon: Terminal, y: -18 },
    { icon: Rocket, y: 15 },
    { icon: Search, y: 5 },
];

export const FlowingIcons = () => {
    // Duplicate icons to create a seamless loop
    // Using 4 sets allows for a clean 25% shift, avoiding floating point jitter
    const allIcons = [...icons, ...icons, ...icons, ...icons];

    const textLines = [
        "Owl AI is our agentic",
        "development platform, evolving the",
        "IDE into the agent-first era."
    ];

    return (
        <div className="w-full overflow-hidden bg-background py-20 pb-32 select-none pointer-events-none flex flex-col items-center">
            {/* Added Text Section with Masked Reveal Animation */}
            <div className="container mx-auto px-4 mb-20 text-center md:text-left pl-8 md:pl-32">
                <MaskedTextReveal
                    content={textLines}
                    className="text-3xl md:text-5xl font-medium leading-tight tracking-tight text-foreground max-w-4xl"
                />
            </div>

            <motion.div
                className="flex items-center"
                animate={{
                    x: ["0%", "-25%"], // Move exactly 1/4th of the width (which is 1 full set of icons)
                }}
                transition={{
                    duration: 25, // Slower (Normal) Speed
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {allIcons.map((item, index) => {
                    // Create a seamless sine wave that repeats perfectly every `icons.length` items
                    const normalizedIndex = index % icons.length;
                    const phase = (normalizedIndex / icons.length) * Math.PI * 2 * 2; // 2 full waves per set
                    const sineY = Math.sin(phase) * 50; // Amplitude 50px

                    return (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-6"
                            style={{
                                transform: `translateY(${sineY}px)`,
                            }}
                        >
                            <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-black/5 dark:border-white/10 flex items-center justify-center">
                                <item.icon className="w-7 h-7 text-foreground/80" />
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

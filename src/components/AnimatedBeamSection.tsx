"use client";

import React, { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";
import CircuitPulse from "@/components/ui/circuit-pulse";

// AI Model Provider Icons
const Icons = {
    openai: () => <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" alt="OpenAI" className="w-8 h-8" />,
    anthropic: () => <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" alt="Anthropic" className="w-8 h-8" />,
    google: () => <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" alt="Gemini" className="w-8 h-8" />,
    deepseek: () => <div className="w-8 h-8 flex items-center justify-center font-bold text-xs bg-blue-600 text-white rounded-full">DS</div>,
    mistral: () => <div className="w-8 h-8 flex items-center justify-center font-bold text-xs bg-yellow-500 text-white rounded-full">Mi</div>,
    meta: () => <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" alt="Meta" className="w-8 h-8 object-contain" />,
};

const Circle = React.forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-card p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:bg-card dark:text-white card-hover-lift",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function AnimatedBeamSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const owlRef = useRef<HTMLDivElement>(null);
    const codeRef = useRef<HTMLDivElement>(null);

    // Provider Refs
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);

    return (
        <section className="py-20 bg-background overflow-hidden" id="animated-beam-demo">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-section-fade">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Integrated Intelligence
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Orchestrating the world's best AI models to power your development.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card/50 border border-border rounded-xl p-8 shadow-xl">
                    {/* Left Side: Circuit Pulse */}
                    <div className="flex justify-center items-center w-full h-[500px] relative overflow-hidden rounded-xl bg-black/5 dark:bg-black/40">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5 z-0"></div>
                        <div className="relative z-10 scale-75 md:scale-90">
                            <CircuitPulse color="#f97316" />
                        </div>
                    </div>

                    {/* Right Side: Animated Beam */}
                    <div
                        className="relative flex w-full items-center justify-center h-[500px]"
                        ref={containerRef}
                    >
                        <div className="flex w-full justify-between items-center relative z-10 px-4">
                            {/* Left Column: AI Providers */}
                            <div className="flex flex-col gap-4 justify-center h-full">
                                <Circle ref={div1Ref} className="bg-white/90 h-10 w-10 p-1.5"><Icons.openai /></Circle>
                                <Circle ref={div2Ref} className="bg-white/90 h-10 w-10 p-1.5"><Icons.anthropic /></Circle>
                                <Circle ref={div3Ref} className="bg-white/90 h-10 w-10 p-1.5"><Icons.google /></Circle>
                                <Circle ref={div4Ref} className="h-10 w-10 p-1.5"><Icons.deepseek /></Circle>
                                <Circle ref={div5Ref} className="h-10 w-10 p-1.5"><Icons.mistral /></Circle>
                                <Circle ref={div6Ref} className="bg-white/90 h-10 w-10 p-1.5"><Icons.meta /></Circle>
                            </div>

                            {/* Center: Owl Logo */}
                            <div className="flex flex-col justify-center h-full mx-4">
                                <div ref={owlRef} className="z-20 h-16 w-16 rounded-full border-4 border-accent bg-card p-2 shadow-2xl flex items-center justify-center relative">
                                    <img src="/logo.png" alt="Owl AI" className="h-full w-full object-contain p-1" />
                                    <div className="absolute -inset-2 rounded-full border border-accent/30 animate-pulse-border"></div>
                                </div>
                            </div>

                            {/* Right: Code/Terminal Window */}
                            <div className="flex flex-col justify-center h-full">
                                <div
                                    ref={codeRef}
                                    className="z-10 w-48 h-36 rounded-lg border border-border bg-[#1e1e1e] shadow-2xl flex flex-col overflow-hidden"
                                >
                                    <div className="h-5 bg-[#252526] flex items-center px-2 gap-1.5 border-b border-[#333]">
                                        <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                                    </div>
                                    <div className="p-2 font-mono text-[10px] text-green-400 flex flex-col gap-1">
                                        <span className="flex items-center gap-2">
                                            <span className="text-blue-400">~</span>
                                            <span>Running...</span>
                                        </span>
                                        <span className="animate-pulse">_</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* All beams go from Providers to Owl */}
                        <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={owlRef} curvature={20} endYOffset={0} />
                        <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={owlRef} curvature={20} endYOffset={0} />
                        <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={owlRef} curvature={20} endYOffset={0} />
                        <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={owlRef} curvature={-20} endYOffset={0} />
                        <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={owlRef} curvature={-20} endYOffset={0} />
                        <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={owlRef} curvature={-20} endYOffset={0} />

                        {/* Beam from Owl to Code */}
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={owlRef}
                            toRef={codeRef}
                            pathColor="#f97316" // Orange/Accent color for the output
                            gradientStartColor="#f97316"
                            gradientStopColor="#f97316"
                            duration={1.5}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

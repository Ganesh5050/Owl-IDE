import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TextScramble } from "@/components/ui/magnetic-glassy-button";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import { motion, useScroll, useTransform } from "framer-motion";

export const CallToAction = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8 bg-background z-20">
            <div className="container mx-auto max-w-7xl">
                <div className="relative rounded-[3rem] bg-[#7F56D9] overflow-hidden min-h-[500px] flex flex-col items-center justify-center text-center p-8 sm:p-12 lg:p-16 lg:pb-40 pb-32">
                    {/* Background Noise/Grid Effect (Optional, kept minimal mostly solid purple) */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 2px, transparent 2px), linear-gradient(90deg, #fff 2px, transparent 2px)', backgroundSize: '40px 40px', backgroundPosition: '-1px -1px' }}></div>

                    {/* Content */}
                    <div className="relative z-20 space-y-8 max-w-4xl mx-auto flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-sm">
                            Build something <br />
                            real in minutes
                        </h2>

                        <p className="text-lg md:text-xl text-white/90 font-medium tracking-wide">
                            Get started for free
                        </p>

                        {/* Liquid Glass Button */}
                        <LiquidGlass
                            className="group relative inline-flex items-center justify-center px-4 py-3 min-w-[300px] cursor-pointer z-50 overflow-hidden"
                            radius={16}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* Grid Pattern Background in Button */}
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl overflow-hidden"
                                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '10px 10px' }}
                            />

                            {/* Icon */}
                            <div className="relative z-10 flex items-center justify-center h-12 w-12 rounded-lg bg-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300 pointer-events-none mr-6">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                                    alt="VSCode"
                                    className="w-8 h-8 drop-shadow-lg"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="relative z-10 flex flex-col items-start gap-0.5 pointer-events-none mr-auto">
                                <span className="text-lg font-bold text-white tracking-tight text-left">
                                    <TextScramble trigger={isHovered} speed={50}>Open in VSCode</TextScramble>
                                </span>
                                <span className="text-xs uppercase tracking-wider text-white/80 font-medium flex items-center">
                                    <TextScramble trigger={isHovered} speed={30}>Install Extension</TextScramble>
                                </span>
                            </div>

                            {/* Action Icon */}
                            <div className="relative z-10 flex items-center justify-center p-2 rounded-full bg-white/10 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 pointer-events-none ml-6">
                                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" />
                            </div>
                        </LiquidGlass>
                    </div>

                    {/* Logo Peeking Effect */}
                    {/* The ghost looks like it is peering up from the bottom edge. We can simulate this with our owl logo. */}
                    <div className="absolute bottom-[-10%] sm:bottom-[-5%] left-1/2 transform -translate-x-1/2 w-40 h-40 sm:w-52 sm:h-52 z-10 pointer-events-none">
                        <img
                            src="/logo.png"
                            alt="Owl Logo"
                            className="w-full h-full object-contain filter drop-shadow-2xl brightness-110"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

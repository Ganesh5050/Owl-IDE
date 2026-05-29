"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

// --- Text Scrambler Component ---
const CHARS = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

interface TextScrambleProps {
    children: string;
    className?: string;
    trigger?: boolean;
    speed?: number;
}

export const TextScramble = ({ children, className, trigger, speed = 40 }: TextScrambleProps) => {
    const [displayText, setDisplayText] = useState(children);
    const [isScrambling, setIsScrambling] = useState(false);

    useEffect(() => {
        if (!trigger) {
            setDisplayText(children);
            return;
        }

        if (isScrambling) return; // Prevent restart if already running
        setIsScrambling(true);

        let iteration = 0;
        const maxIterations = 10;

        const interval = setInterval(() => {
            setDisplayText(
                children
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return children[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= children.length) {
                clearInterval(interval);
                setIsScrambling(false);
            }

            iteration += 1 / 3; // Slower iteration for better effect
        }, speed);

        return () => clearInterval(interval);
    }, [trigger, children, speed]);

    return <span className={className}>{displayText}</span>;
};


// --- Magnetic Button Component ---
interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    strength?: number; // How much it moves (0.5 = 50% of mouse distance)
}

export const MagneticButton = ({ children, className, onClick, strength = 0.5 }: MagneticButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for the magnetic feel
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;

        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        x.set(distanceX * strength);
        y.set(distanceY * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{ x: xSpring, y: ySpring }}
            className={cn(className)}
        >
            <div className="w-full h-full flex items-center justify-between gap-6 pointer-events-none">
                {children}
            </div>
        </motion.button>
    );
};

// --- Main Composite Component ---
export default function MagneticGlassyButton() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <MagneticButton
            className="group relative inline-flex items-center justify-center px-4 py-3 min-w-[300px]
          rounded-xl border border-white/50 bg-white/5 backdrop-blur-md
          shadow-[inset_0_1px_0px_rgba(255,255,255,0.2),0_10px_20px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.1)]
          hover:bg-white/10 hover:border-white/70 transition-colors duration-300
          before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-50 before:pointer-events-none
          after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-tl after:from-white/10 after:via-transparent after:to-transparent after:opacity-30 after:pointer-events-none
          antialiased overflow-visible cursor-pointer" // overflow-visible for magnetic content extending bounds
            strength={0.4}
        >
            {/* Hover State Detector is implied by the button's mouse events, but for the text scrambler we need local state */}
            <div
                className="absolute inset-0 z-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />

            {/* Grid Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl overflow-hidden"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '10px 10px' }}
            />

            {/* Icon */}
            <div className="relative z-10 flex items-center justify-center h-12 w-12 rounded-lg bg-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300 pointer-events-none">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                    alt="VSCode"
                    className="w-8 h-8 drop-shadow-lg"
                />
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-start gap-0.5 pointer-events-none">
                <span className="text-lg font-bold text-foreground tracking-tight w-[160px] text-left">
                    <TextScramble trigger={isHovered} speed={50}>Open in VSCode</TextScramble>
                </span>
                <span className="text-xs uppercase tracking-wider text-foreground/80 font-medium flex items-center">
                    <TextScramble trigger={isHovered} speed={30}>Install Extension</TextScramble>
                </span>
            </div>

            {/* Action Icon */}
            <div className="relative z-10 flex items-center justify-center p-2 rounded-full bg-white/10 group-hover:bg-accent/20 group-hover:text-accent transition-colors duration-300 pointer-events-none">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>

        </MagneticButton>
    );
}

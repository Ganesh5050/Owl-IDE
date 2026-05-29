"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import ReactLenis from "lenis/react";
import { useRef } from "react";
import heroOwl from "@/assets/hero-owl.png";
import heroCheetah from "@/assets/hero-cheetah.jpg";
import heroCheetah3 from "@/assets/hero-cheetah3.jpg";

const projects = [
    {
        title: "Project 1",
        src: heroOwl,
    },
    {
        title: "Project 2",
        src: heroCheetah,
    },
    {
        title: "Project 3",
        src: heroCheetah3,
    },
];

const StickyCard_001 = ({
    i,
    title,
    src,
    progress,
    range,
    targetScale,
}: {
    i: number;
    title: string;
    src: string;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}) => {
    const container = useRef<HTMLDivElement>(null);

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className="sticky top-0 flex items-center justify-center h-screen"
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 20 + 25}px)`,
                }}
                className="rounded-xl relative flex h-[50vh] w-[80vw] max-w-[800px] origin-top flex-col overflow-hidden shadow-2xl border border-border bg-card"
            >
                <div className="absolute z-10 p-6 bg-gradient-to-b from-black/60 to-transparent w-full text-white">
                    <h3 className="text-3xl font-bold">{title}</h3>
                </div>
                <img src={src} alt={title} className="h-full w-full object-cover" />
            </motion.div>
        </div>
    );
};

const ScrollStack = () => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <ReactLenis root>
            <div
                ref={container}
                className="relative flex w-full flex-col items-center justify-center bg-background"
                style={{ height: `${projects.length * 100}vh` }} // Ensure enough scroll space
            >


                {projects.map((project, i) => {
                    const targetScale = Math.max(
                        0.8, // Do not scale down too small
                        1 - (projects.length - i - 1) * 0.05 // Subtle scaling difference
                    );
                    return (
                        <StickyCard_001
                            key={`p_${i}`}
                            i={i}
                            {...project}
                            progress={scrollYProgress}
                            range={[i * (1 / projects.length), 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </ReactLenis>
    );
};

export { ScrollStack };

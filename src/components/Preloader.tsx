import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ColorTyper } from "@/components/ui/color-typer";

interface PreloaderProps {
    onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [showText, setShowText] = useState(true);
    const [showBackground, setShowBackground] = useState(true);

    // Function called when the typing animation finishes
    // Wrapped in useCallback to prevent ColorTyper's timer from resetting on parent re-renders
    const handleTypingComplete = useCallback(() => {
        // 1. Hold the text for a moment
        setTimeout(() => {
            setShowText(false); // Fade out Text

            // 2. Wait for text to FULLY fade (0.3s) + short pause (0.15s) = 0.45s.
            setTimeout(() => {
                setShowBackground(false); // Fade out Background

                // 3. Signal completion after background fade
                setTimeout(onComplete, 500);
            }, 450);
        }, 400); // 0.4s hold
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: showBackground ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
            <motion.div
                animate={{ opacity: showText ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-3xl md:text-5xl font-bold tracking-tight text-center px-4"
            >
                {/* Render the ColorTyper on a single line as requested */}
                <ColorTyper
                    text="Ship code at Owl speed"
                    appearColor="#3b82f6"
                    finalColor="#000000"
                    stagger={0.08}
                    onComplete={handleTypingComplete}
                />
            </motion.div>
        </motion.div>
    );
};

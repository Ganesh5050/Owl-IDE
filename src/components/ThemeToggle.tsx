import React from 'react';
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === 'dark';

    const toggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "relative w-20 h-10 rounded-full p-1 cursor-pointer overflow-hidden transition-colors duration-500 ease-in-out hover:scale-105 active:scale-95 shadow-inner block",
                isDark ? "bg-[#1a1b26]" : "bg-[#87CEEB]",
                "border-2",
                isDark ? "border-slate-700" : "border-[#7ec0db]"
            )}
            aria-label="Toggle Theme"
        >
            {/* Background Scenery - Stars (Dark Mode) */}
            <div className={cn(
                "absolute inset-0 transition-opacity duration-500",
                isDark ? "opacity-100" : "opacity-0"
            )}>
                <div className="absolute top-2 left-8 w-0.5 h-0.5 bg-white rounded-full animate-pulse" />
                <div className="absolute top-5 left-12 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-75" />
                <div className="absolute top-3 left-16 w-1 h-1 bg-white rounded-full animate-pulse delay-150" />
                <div className="absolute bottom-3 left-10 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-200" />
                <div className="absolute top-6 left-5 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-300" />
            </div>

            {/* Background Scenery - Clouds (Light Mode) */}
            <div className={cn(
                "absolute inset-0 transition-all duration-500 transform",
                isDark ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"
            )}>
                <div className="absolute top-4 left-10 w-6 h-2 bg-white/80 rounded-full blur-[1px]" />
                <div className="absolute top-6 left-3 w-4 h-1.5 bg-white/60 rounded-full blur-[1px]" />
                <div className="absolute top-2 left-14 w-3 h-1 bg-white/40 rounded-full blur-[0.5px]" />
            </div>

            {/* Toggle Circle (Sun/Moon) */}
            <div
                className={cn(
                    "relative z-10 w-7 h-7 rounded-full shadow-md transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] flex items-center justify-center overflow-hidden",
                    isDark
                        ? "translate-x-10 bg-slate-200 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                        : "translate-x-0 bg-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                )}
            >
                {/* Moon Craters */}
                <div className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    isDark ? "opacity-100" : "opacity-0"
                )}>
                    <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-slate-400/50 rounded-full" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-slate-400/50 rounded-full" />
                    <div className="absolute top-1 right-3 w-1 h-1 bg-slate-400/50 rounded-full" />
                </div>
            </div>
        </button>
    );
};

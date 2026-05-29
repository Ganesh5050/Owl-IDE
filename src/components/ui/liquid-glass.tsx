import React, { useMemo, useEffect, useRef, useState, useId } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_WIDTH = 400;
const DEFAULT_HEIGHT = 200;

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    scale?: number;
    radius?: number;
    border?: number;
    lightness?: number;
    displace?: number; // Controls the feGaussianBlur stdDeviation
    alpha?: number;
    blur?: number; // Controls the CSS filter:blur amount on the internal rect
    dispersion?: number;
    frost?: number;
    borderColor?: string;
}

export const LiquidGlass: React.FC<LiquidGlassProps> = ({
    className,
    children,
    scale = 160,
    radius = 50,
    border = 0.05,
    lightness = 53,
    displace = 0.38,
    alpha = 0.9,
    blur = 5,
    dispersion = 50,
    frost = 0.1,
    borderColor = "rgba(120, 120, 120, 0.7)",
    ...props
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT });

    const uniqueId = useId();
    const filterId = `liquid-glass-filter-${uniqueId.replace(/:/g, "")}`;

    useEffect(() => {
        if (!containerRef.current) return;

        const updateDimensions = () => {
            if (!containerRef.current) return;
            const { width, height } = containerRef.current.getBoundingClientRect();
            if (width === 0 || height === 0) return;
            setDimensions({ width, height });
        };

        updateDimensions();

        const resizeObserver = new ResizeObserver(updateDimensions);
        resizeObserver.observe(containerRef.current);

        return () => resizeObserver.disconnect();
    }, []);

    const displacementDataUri = useMemo(() => {
        const { width, height } = dimensions;
        const newwidth = width / 2;
        const newheight = height / 2;
        const borderVal = Math.min(newwidth, newheight) * (border * 0.5);
        const effectiveRadius = Math.min(radius, width / 2, height / 2);

        const svgContent = `
      <svg viewBox="0 0 ${newwidth} ${newheight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="red" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${newwidth}" height="${newheight}" fill="black"/>
        <rect x="0" y="0" width="${newwidth}" height="${newheight}" rx="${effectiveRadius}" fill="url(#red)" />
        <rect x="0" y="0" width="${newwidth}" height="${newheight}" rx="${effectiveRadius}" fill="url(#blue)" style="mix-blend-mode: difference" />
        <rect x="${borderVal}" y="${borderVal}" width="${newwidth - borderVal * 2}" height="${newheight - borderVal * 2}" rx="${effectiveRadius}" fill="hsl(0 0% ${lightness}% / ${alpha})" style="filter:blur(${blur}px)" />
      </svg>
    `;

        const encoded = encodeURIComponent(svgContent);
        return `data:image/svg+xml,${encoded}`;
    }, [dimensions, scale, radius, border, lightness, blur, alpha]);

    const glassMorphismStyle: React.CSSProperties = {
        width: "100%",
        height: "100%",
        borderRadius: radius,
        position: "absolute",
        zIndex: 1,
        background: `hsl(0 0% 100% / ${frost})`,
        backdropFilter: `url(#${filterId})`,
        WebkitBackdropFilter: `url(#${filterId})`
    };

    const gradientBorderStyle: React.CSSProperties = {
        position: "absolute",
        inset: 0,
        borderRadius: radius,
        zIndex: 2,
        pointerEvents: "none",
        background: `linear-gradient(315deg, ${borderColor} 0%, rgba(120, 120, 120, 0) 30%, rgba(120, 120, 120, 0) 70%, ${borderColor} 100%) border-box`,
        mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
        WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
        maskComposite: "exclude",
        WebkitMaskComposite: "xor",
        border: `1px solid transparent`
    };

    return (
        <div
            ref={containerRef}
            className={cn("relative", className)}
            style={{ borderRadius: radius }}
            {...props}
        >
            <div style={glassMorphismStyle}>
                <svg
                    className="filter"
                    style={{ width: "100%", height: "100%", pointerEvents: "none", position: "absolute", inset: 0, opacity: 0 }}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <filter id={filterId} colorInterpolationFilters="sRGB">
                            <feImage href={displacementDataUri} x="0" y="0" width="100%" height="100%" result="map" />

                            <feDisplacementMap in="SourceGraphic" in2="map" id="redchannel" scale={scale + dispersion} xChannelSelector="R" yChannelSelector="B" result="dispRed" />
                            <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="red" />

                            <feDisplacementMap in="SourceGraphic" in2="map" id="greenchannel" scale={scale + dispersion} xChannelSelector="R" yChannelSelector="B" result="dispGreen" />
                            <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="green" />

                            <feDisplacementMap in="SourceGraphic" in2="map" id="bluechannel" scale={scale + dispersion} xChannelSelector="R" yChannelSelector="B" result="dispBlue" />
                            <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="blue" />

                            <feBlend in="red" in2="green" mode="screen" result="rg" />
                            <feBlend in="rg" in2="blue" mode="screen" result="output" />

                            <feGaussianBlur in="output" stdDeviation={displace} />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div style={gradientBorderStyle}></div>

            <div className="relative z-10 w-full h-full flex items-center justify-center">
                {children}
            </div>
        </div>
    );
};

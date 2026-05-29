"use client";

import React, { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import OrbitingCircles from "@/components/ui/orbiting-circles";
import { cn } from "@/lib/utils";
import { Network } from "lucide-react";

// AI Model Provider Icons
const Icons = {
    openai: () => <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" alt="OpenAI" className="w-6 h-6 object-contain" />,
    anthropic: () => <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" alt="Anthropic" className="w-6 h-6 object-contain" />,
    google: () => <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" alt="Gemini" className="w-6 h-6 object-contain" />,
    deepseek: () => <div className="w-8 h-8 flex items-center justify-center font-bold text-xs bg-blue-600 text-white rounded-full">DS</div>,
    mistral: () => <div className="w-8 h-8 flex items-center justify-center font-bold text-xs bg-yellow-500 text-white rounded-full">Mi</div>,
    meta: () => <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" alt="Meta" className="w-6 h-6 object-contain" />,
    cohere: () => <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cohere_logo.svg/1200px-Cohere_logo.svg.png" alt="Cohere" className="w-6 h-6 object-contain bg-white rounded-full" />,

    // Tools - Inner Layer
    github: () => <img src="https://cdn.simpleicons.org/github" alt="GitHub" className="w-10 h-10 rounded-full bg-white dark:bg-transparent" />,
    gitlab: () => <img src="https://cdn.simpleicons.org/gitlab" alt="GitLab" className="w-10 h-10" />,
    slack: () => <img src="https://cdn.simpleicons.org/slack" alt="Slack" className="w-10 h-10" />,
    discord: () => <img src="https://cdn.simpleicons.org/discord" alt="Discord" className="w-10 h-10" />,
    figma: () => <img src="https://cdn.simpleicons.org/figma" alt="Figma" className="w-10 h-10" />,

    // Tools - Middle Layer
    aws: () => <img src="https://cdn.simpleicons.org/amazonaws" alt="AWS" className="w-10 h-10 bg-white rounded-full p-1" />,
    azure: () => <img src="https://cdn.simpleicons.org/microsoftazure" alt="Azure" className="w-10 h-10" />,
    kubernetes: () => <img src="https://cdn.simpleicons.org/kubernetes" alt="Kubernetes" className="w-10 h-10" />,
    drive: () => <img src="https://cdn.simpleicons.org/googledrive" alt="Drive" className="w-10 h-10" />,
    dropbox: () => <img src="https://cdn.simpleicons.org/dropbox" alt="Dropbox" className="w-10 h-10" />,
    notion: () => <img src="https://cdn.simpleicons.org/notion" alt="Notion" className="w-10 h-10" />,
    linear: () => <img src="https://cdn.simpleicons.org/linear" alt="Linear" className="w-10 h-10" />,

    // Tools - Outer Layer
    whatsapp: () => <img src="https://cdn.simpleicons.org/whatsapp" alt="WhatsApp" className="w-10 h-10" />,
    youtube: () => <img src="https://cdn.simpleicons.org/youtube" alt="YouTube" className="w-10 h-10" />,
    facebook: () => <img src="https://cdn.simpleicons.org/facebook" alt="Facebook" className="w-10 h-10" />,
    spotify: () => <img src="https://cdn.simpleicons.org/spotify" alt="Spotify" className="w-10 h-10" />,
    stripe: () => <img src="https://cdn.simpleicons.org/stripe" alt="Stripe" className="w-10 h-10 rounded-full bg-white p-1" />,
    paypal: () => <img src="https://cdn.simpleicons.org/paypal" alt="PayPal" className="w-10 h-10" />,
    shopify: () => <img src="https://cdn.simpleicons.org/shopify" alt="Shopify" className="w-10 h-10" />,
    supabase: () => <img src="https://cdn.simpleicons.org/supabase" alt="Supabase" className="w-10 h-10" />,
    brave: () => <img src="https://cdn.simpleicons.org/brave" alt="Brave" className="w-10 h-10" />,
    cloudflare: () => <img src="https://cdn.simpleicons.org/cloudflare" alt="Cloudflare" className="w-10 h-10" />,
};

const Circle = React.forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-card p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:bg-card dark:text-white hover:scale-110 transition-transform duration-200",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function McpArchitectureSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mcpRef = useRef<HTMLDivElement>(null);
    const toolsCenterRef = useRef<HTMLDivElement>(null);

    // AI Refs (7 models)
    const openaiRef = useRef<HTMLDivElement>(null);
    const anthropicRef = useRef<HTMLDivElement>(null);
    const googleRef = useRef<HTMLDivElement>(null);
    const deepseekRef = useRef<HTMLDivElement>(null);
    const mistralRef = useRef<HTMLDivElement>(null);
    const metaRef = useRef<HTMLDivElement>(null);
    const cohereRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full py-20" id="mcp-architecture">
            {/* Header Section */}
            <div className="text-center mb-16 animate-section-fade">
                <div className="w-20 h-20 rounded-2xl bg-[#FFF7ED] flex items-center justify-center mx-auto mb-6 border border-[#FED7AA] shadow-[0_4px_20px_-4px_rgba(249,115,22,0.3)] animate-hover-lift">
                    <Network className="w-10 h-10 text-[#f97316]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">MCP</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Extend capabilities with powerful tools from the MCP ecosystem.
                </p>
            </div>

            <div
                ref={containerRef}
                className="relative flex w-full flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 bg-background/50 border border-border/50 rounded-3xl p-8 lg:p-12 shadow-sm overflow-hidden min-h-[600px]"
            >
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* LEFT: AI Models Stack - Arranged in a semi-circle/arc approximation via flex and transforms if needed, or just a grid */}
                {/* Using a relative container to position them in an arc shape manually or via a flex column that looks like a stack */}
                <div className="flex flex-col justify-center items-end gap-3 z-20 min-w-[100px]">
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 self-center">7 AI Models</div>

                    {/* 1. OpenAI (Top) */}
                    <div className="mr-8"><Circle ref={openaiRef} className="h-14 w-14 bg-white/95"><Icons.openai /></Circle></div>

                    {/* 2. Anthropic */}
                    <div className="mr-4"><Circle ref={anthropicRef} className="h-14 w-14 bg-white/95"><Icons.anthropic /></Circle></div>

                    {/* 3. Google */}
                    <div className="mr-1"><Circle ref={googleRef} className="h-14 w-14 bg-white/95"><Icons.google /></Circle></div>

                    {/* 4. DeepSeek (Center) */}
                    <div className="mr-0"><Circle ref={deepseekRef} className="h-14 w-14"><Icons.deepseek /></Circle></div>

                    {/* 5. Mistral */}
                    <div className="mr-1"><Circle ref={mistralRef} className="h-14 w-14"><Icons.mistral /></Circle></div>

                    {/* 6. Meta */}
                    <div className="mr-4"><Circle ref={metaRef} className="h-14 w-14 bg-white/95"><Icons.meta /></Circle></div>

                    {/* 7. Cohere (Bottom) */}
                    <div className="mr-8"><Circle ref={cohereRef} className="h-14 w-14"><Icons.cohere /></Circle></div>
                </div>

                {/* MIDDLE: MCP Node */}
                <div className="flex flex-col items-center justify-center z-20 relative px-4">
                    <div
                        ref={mcpRef}
                        className="w-24 h-24 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-xl rotate-45 flex items-center justify-center shadow-xl border-4 border-background relative z-10"
                    >
                        <div className="-rotate-45 text-white font-black text-2xl tracking-tighter">MCP</div>
                    </div>
                    {/* Pulsing effect behind MCP */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#f97316]/20 rounded-full blur-3xl animate-pulse -z-10"></div>
                </div>

                {/* RIGHT: Orbiting Tools (3 Distinct Layers) */}
                <div className="relative flex h-[500px] w-full max-w-[500px] items-center justify-center overflow-hidden z-20">
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider absolute -top-4 hidden lg:block">Data & Tools</div>

                    {/* Invisible center for beam targeting */}
                    <div ref={toolsCenterRef} className="absolute inset-0 m-auto w-1 h-1"></div>

                    {/* Orbiting Circles - Layer 1 (Inner) - Radius 70 - 5 Items */}
                    <OrbitingCircles className="border-none bg-transparent" duration={25} delay={0} radius={70}>
                        <Icons.github />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" duration={25} delay={5} radius={70}>
                        <Icons.gitlab />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" duration={25} delay={10} radius={70}>
                        <Icons.slack />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" duration={25} delay={15} radius={70}>
                        <Icons.discord />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" duration={25} delay={20} radius={70}>
                        <Icons.figma />
                    </OrbitingCircles>


                    {/* Orbiting Circles - Layer 2 (Middle) - Radius 130 - 7 Items - Reverse */}
                    <OrbitingCircles className="border-none bg-transparent" radius={130} duration={35} reverse>
                        <Icons.aws />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" radius={130} duration={35} delay={5} reverse>
                        <Icons.azure />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" radius={130} duration={35} delay={10} reverse>
                        <Icons.kubernetes />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" radius={130} duration={35} delay={15} reverse>
                        <Icons.drive />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" radius={130} duration={35} delay={20} reverse>
                        <Icons.dropbox />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" radius={130} duration={35} delay={25} reverse>
                        <Icons.notion />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" radius={130} duration={35} delay={30} reverse>
                        <Icons.linear />
                    </OrbitingCircles>


                    {/* Orbiting Circles - Layer 3 (Outer) - Radius 210 - 9 Items */}
                    <OrbitingCircles className="border-none bg-transparent" radius={210} duration={50} delay={0}>
                        <Icons.whatsapp />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" radius={210} duration={50} delay={5.5}>
                        <Icons.youtube />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" radius={210} duration={50} delay={11}>
                        <Icons.facebook />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" radius={210} duration={50} delay={16.5}>
                        <Icons.spotify />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" radius={210} duration={50} delay={22}>
                        <Icons.stripe />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" radius={210} duration={50} delay={27.5}>
                        <Icons.paypal />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" radius={210} duration={50} delay={33}>
                        <Icons.shopify />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" radius={210} duration={50} delay={38.5}>
                        <Icons.supabase />
                    </OrbitingCircles>
                    <OrbitingCircles className="border-none bg-transparent" radius={210} duration={50} delay={44}>
                        <Icons.cloudflare />
                    </OrbitingCircles>
                </div>

                {/* BEAMS: AI -> MCP (7 beams) */}
                <AnimatedBeam containerRef={containerRef} fromRef={openaiRef} toRef={mcpRef} duration={3} curvature={40} startYOffset={10} endYOffset={10} />
                <AnimatedBeam containerRef={containerRef} fromRef={anthropicRef} toRef={mcpRef} duration={3} curvature={30} startYOffset={5} endYOffset={5} />
                <AnimatedBeam containerRef={containerRef} fromRef={googleRef} toRef={mcpRef} duration={3} curvature={15} />
                <AnimatedBeam containerRef={containerRef} fromRef={deepseekRef} toRef={mcpRef} duration={3} curvature={0} />
                <AnimatedBeam containerRef={containerRef} fromRef={mistralRef} toRef={mcpRef} duration={3} curvature={-15} />
                <AnimatedBeam containerRef={containerRef} fromRef={metaRef} toRef={mcpRef} duration={3} curvature={-30} startYOffset={-5} endYOffset={-5} />
                <AnimatedBeam containerRef={containerRef} fromRef={cohereRef} toRef={mcpRef} duration={3} curvature={-40} startYOffset={-10} endYOffset={-10} />

                {/* BEAMS: MCP -> Tools Center */}
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={mcpRef}
                    toRef={toolsCenterRef}
                    duration={1.5}
                    pathColor="#f97316"
                    gradientStartColor="#f97316"
                    gradientStopColor="#ffbd2e"
                    pathWidth={4}
                />
            </div>
        </div>
    );
}

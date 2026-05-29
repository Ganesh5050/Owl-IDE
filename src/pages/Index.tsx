import { useState, useEffect, useRef } from "react";
import { AnimatePresence, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroCheetah from "@/assets/hero-cheetah.jpg";
import heroOwl from "@/assets/hero-owl.png";
import { ColorTyper } from "@/components/ui/color-typer";
import {
  Code2,
  Zap,
  Brain,
  Network,
  Search,
  Sparkles,
  ArrowRight,
  FileText,
  Database,
  Layout,
  Star,
} from "lucide-react";
import { useTheme } from "next-themes";
import { ScrollStack } from "@/components/ScrollStack";
import { AnimatedBeamSection } from "@/components/AnimatedBeamSection";
import PulseCard from "@/components/ui/pulse-card";
import MagneticGlassyButton from "@/components/ui/magnetic-glassy-button";
import { motion } from "framer-motion";
import { CallToAction } from "@/components/CallToAction";
import { FlowingIcons } from "@/components/FlowingIcons";
import { VsCodeIcon, FigmaIcon, NotionIcon, VercelIcon, LinearIcon, FramerIcon } from "@/components/BrandLogos";
import { McpArchitectureSection } from "@/components/McpArchitectureSection";

const Index = () => {
  const { theme } = useTheme();

  const [isLoading, setIsLoading] = useState(true);

  // Footer Scroll Reveal Logic
  const [footerHeight, setFooterHeight] = useState(0);
  const [isRevealEnabled, setIsRevealEnabled] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  // Logic to trigger Footer Animation when the spacer (end of content) enters view
  const footerTriggerRef = useRef(null);
  const isFooterRevealed = useInView(footerTriggerRef, {
    margin: "0px 0px -100px 0px", // Trigger when the bottom spacer is 100px from the bottom of viewport
    once: false
  });

  useEffect(() => {
    if (!footerRef.current) return;

    const checkReveal = (height: number) => {
      // Enable reveal only if footer is shorter than the window
      // This ensures we don't hide the top of a tall footer
      setIsRevealEnabled(height <= window.innerHeight);
    };

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const h = entry.contentRect.height;
        setFooterHeight(h);
        checkReveal(h);
      }
    });

    observer.observe(footerRef.current);

    const handleResize = () => {
      if (footerRef.current) {
        checkReveal(footerRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Recursive Icon Logic
  const icons = [FileText, Brain, Zap, Database, Layout, Code2];
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = icons[currentIconIndex];

  const features = [
    {
      icon: <Search className="w-8 h-8 text-accent" />,
      title: "Deep Research",
      description:
        "Instantly access and understand your entire codebase with advanced context awareness and intelligent code navigation.",
    },
    {
      icon: <Code2 className="w-8 h-8 text-accent" />,
      title: "Plan Mode",
      description:
        "Strategic project planning with AI-powered insights that help you architect solutions before you code.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "Vibe Debugging",
      description:
        "Intuitive debugging that understands not just what's broken, but why it's broken and how to fix it elegantly.",
    },
  ];

  /* 
   * "Unlock More AI Capabilities" Data
   * We will use this to map the 6 PulseCards
   */
  const capabilities = [
    {
      icon: <Zap />,
      title: "Always the Best Model",
      description: "Auto-selects the optimal model. More productivity. Fewer decisions.",
      variant: "amber" as const
    },
    {
      icon: <Code2 />,
      title: "Tab It, Get It",
      description: "Context-aware completions and smart next-edit suggestions.",
      variant: "blue" as const
    },
    {
      icon: <Brain />,
      title: "Comprehensive Context",
      description: "Images, code, directories, and more.",
      variant: "purple" as const
    },
    {
      icon: <Search />,
      title: "\"Wikilize\" Your Codebase",
      description: "Uncovers architecture and design.",
      variant: "emerald" as const
    },
    {
      icon: <Brain />,
      title: "Memory and Rules",
      description: "Learns from you and works in your way.",
      variant: "rose" as const
    },
    {
      icon: <Sparkles />,
      title: "Inline Chat",
      description: "Chat or refactor code inline, without context switching.",
      variant: "blue" as const
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatePresence>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navigation />

      {/* Main Content Wrapper for Scroll Reveal */}
      <div
        className="relative z-10 bg-background shadow-2xl pb-1"
        style={{ marginBottom: isRevealEnabled ? `${footerHeight}px` : '0px' }}
      >
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 overflow-hidden min-h-screen flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-10"
            style={{ backgroundImage: `url(${theme === 'dark' ? heroOwl : heroCheetah})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/3 via-background/1 to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-block animate-fade-in delay-100 mb-6">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent via-secondary to-accent rounded-full opacity-75 group-hover:opacity-100 blur animate-pulse-border"></div>
                  <span className="relative px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 inline-block text-white shadow-lg">
                    Try it for free
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] mb-4">
                <div className="flex flex-col items-center justify-center min-h-[3em]">
                  {!isLoading && (
                    <>
                      <ColorTyper text="Ship code at" startDelay={0} className="tracking-tight" />
                      <ColorTyper text="Owl speed" startDelay={0.8} finalColor="#D97706" className="tracking-tight" />
                      <ColorTyper text="with AI precision" startDelay={1.6} className="tracking-tight" />
                    </>
                  )}
                </div>
              </h1>

              <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in delay-300 mt-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
                Owl AI accelerates your workflow with real-time context and semantic
                understanding of your entire codebase.
              </p>

              <div className="flex justify-center animate-fade-in delay-400 mt-8">
                <MagneticGlassyButton />
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Stack Section */}
        <ScrollStack />

        {/* Animated Beam Section */}
        <AnimatedBeamSection />

        {/* Flowing Icons Section */}
        <FlowingIcons />

        {/* "Why Owl AI" Section (Refactored) */}
        <section className="py-32 bg-background flex flex-col items-center justify-center">
          <div className="container mx-auto px-4 text-center">

            {/* Top Pill Badge */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2 bg-black/5 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full px-4 py-1.5 shadow-sm">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-black dark:text-white font-mono">Why Owl AI /owl/</span>
              </div>
            </div>

            {/* Main Heading with Recursive Icon */}
            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-foreground max-w-5xl mx-auto">
              Not just another AI IDE.
              <br />
              <span className="inline-flex items-center gap-3 mt-4 text-[#D97706]">
                Owl AI thinks
                <span className="inline-flex items-center gap-3">
                  <span className="text-5xl font-light text-[#9333ea] opacity-80">{"{"}</span>

                  {/* Icon Box */}
                  <div className="relative flex items-center justify-center w-14 h-14 bg-[#FFF7ED] rounded-xl border border-[#FED7AA]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIconIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center"
                      >
                        <CurrentIcon className="w-8 h-8 text-[#D97706]" />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <span className="font-bold text-5xl tracking-tight text-[#9333ea]">Better</span>

                  <span className="text-5xl font-light text-[#9333ea] opacity-80">{"}"}</span>
                </span>
                to solve
              </span>
              <br />
              real software challenges.
            </h2>
          </div>
        </section>

        {/* Product Features Section (Pulse Cards) */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-section-fade">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Unlock More AI Coding Capabilities for{" "}
                <span className="text-accent italic">Developers</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Full of power. Free from noise.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* 6 Pulse Cards */}
              {capabilities.map((cap, index) => (
                <PulseCard
                  key={index}
                  icon={cap.icon}
                  title={cap.title}
                  description={cap.description}
                  variant={cap.variant}
                  size="md"
                  glowEffect={true}
                  className={`animate-scale-in delay-${(index + 1) * 100}`}
                />
              ))}
            </div>

            {/* MCP Architecture Section */}
            <div className="mt-20 animate-slide-up delay-200">
              <McpArchitectureSection />
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-section-fade">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Integrates with your Dev tools
              </h2>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-100 animate-fade-in delay-200">
              {[
                { Icon: VsCodeIcon, name: "VS Code", color: "text-[#007ACC]" },
                { Icon: FigmaIcon, name: "Figma", color: "text-[#F24E1E]" },
                { Icon: NotionIcon, name: "Notion", color: "text-foreground" },
                { Icon: VercelIcon, name: "Vercel", color: "text-foreground" },
                { Icon: LinearIcon, name: "Linear", color: "text-[#5E6AD2]" },
                { Icon: FramerIcon, name: "Framer", color: "text-foreground" },
              ].map(({ Icon, name, color }, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4 group">
                  <Icon className={`w-20 h-20 transition-transform duration-300 group-hover:scale-110 ${color}`} />
                  <span className="text-lg font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-section-fade">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The Developer's Choice <span className="text-accent">Worldwide</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Real feedback from developers who've made Owl AI their daily coding partner
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="border-border bg-background hover:shadow-xl transition-all duration-300 card-hover-lift animate-slide-up">
                <CardContent className="p-10 md:p-12 space-y-6 text-center">
                  <p className="text-muted-foreground leading-relaxed text-lg italic">
                    "Every line of code in Owl AI was written to solve real problems developers face every day. We're not just building another AI tool—we're creating an intelligent partner that understands your code, your context, and your goals. This is the future of software development, and we're just getting started."
                  </p>
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl">
                      GP
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-lg">Ganesh Panigrahi</div>
                      <div className="text-sm text-muted-foreground">Co-founder, Owl AI</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* New Call To Action Section (Above Footer) */}
        <CallToAction />

        {/* Spacer for better Reveal Effect (Blank "Page" Gap) */}
        <div ref={footerTriggerRef} className="w-full h-32 bg-background" />

      </div>

      {/* Fixed Footer for Scroll Reveal */}
      <div ref={footerRef} className={isRevealEnabled ? "fixed bottom-0 w-full z-0" : "relative w-full z-0"}>
        <Footer reveal={isFooterRevealed} />
      </div>
    </div>
  );
};

export default Index;

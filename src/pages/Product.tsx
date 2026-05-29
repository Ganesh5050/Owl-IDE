import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Cpu,
  Workflow,
  FileCode,
  GitBranch,
  Terminal,
  Layers,
  Bot,
} from "lucide-react";

const Product = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Intelligent Code Completion",
      description:
        "Context-aware completions and smart next-edit suggestions powered by advanced AI models.",
      color: "text-accent",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Always the Best Model",
      description:
        "Auto-selects the optimal AI model for your task. More productivity, fewer decisions.",
      color: "text-secondary",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Parallel Execution",
      description:
        "Multiple AI agents collaborate simultaneously with distinct responsibilities to handle complex workflows.",
      color: "text-accent",
    },
    {
      icon: <FileCode className="w-8 h-8" />,
      title: "Comprehensive Context",
      description:
        "Understands images, code, directories, and more to provide relevant suggestions.",
      color: "text-secondary",
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Semantic Memories",
      description:
        "Deep code understanding with lightning-fast retrieval for intelligent editing and refactoring.",
      color: "text-accent",
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Inline Chat",
      description:
        "Chat or refactor code inline, without context switching. Keep your flow uninterrupted.",
      color: "text-secondary",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Knowledge Graph",
      description:
        "Visual relationships between functions, classes, and modules at every level of your codebase.",
      color: "text-accent",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "MCP Integration",
      description:
        "Extend capabilities with powerful tools from the MCP ecosystem for enhanced functionality.",
      color: "text-secondary",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Unlock More AI Coding Capabilities for{" "}
              <span className="text-accent">Developers</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Full of power. Free from noise.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 hover-scale"
              >
                <CardContent className="p-6 space-y-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-muted flex items-center justify-center ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience the power of Owl AI
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are shipping code faster with intelligent AI
            assistance.
          </p>
          <Button variant="hero" size="lg" onClick={() => window.location.href = '/pricing'}>
            Start Your Free Trial
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;

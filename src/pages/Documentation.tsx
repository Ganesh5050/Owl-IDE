import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Book, FileText, Video, Code, Lightbulb, Search } from "lucide-react";

const Docs = () => {
  const docSections = [
    {
      icon: <Book className="w-8 h-8 text-accent" />,
      title: "Getting Started",
      description: "Quick start guide to set up and configure Owl AI in your environment.",
      link: "#getting-started",
    },
    {
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: "API Reference",
      description: "Complete API documentation with examples and best practices.",
      link: "#api-reference",
    },
    {
      icon: <Video className="w-8 h-8 text-accent" />,
      title: "Video Tutorials",
      description: "Step-by-step video guides covering common use cases and workflows.",
      link: "#video-tutorials",
    },
    {
      icon: <Code className="w-8 h-8 text-secondary" />,
      title: "Code Examples",
      description: "Real-world code examples and integration patterns for your projects.",
      link: "#code-examples",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: "Best Practices",
      description: "Expert tips and recommended patterns for optimal performance.",
      link: "#best-practices",
    },
    {
      icon: <Search className="w-8 h-8 text-secondary" />,
      title: "Troubleshooting",
      description: "Common issues and their solutions to keep you moving forward.",
      link: "#troubleshooting",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-accent">Documentation</span> & Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to master Owl AI and accelerate your development workflow.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search documentation..."
                  className="pl-12 h-12 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docSections.map((section, index) => (
              <a
                key={index}
                href={section.link}
                className="block"
              >
                <Card className="h-full border-border hover:shadow-lg transition-all duration-300 hover-scale">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{section.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Popular Topics</h2>
            <div className="space-y-4">
              <Card className="border-border hover:bg-muted/50 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg">How to integrate Owl AI with VS Code?</h3>
                </CardContent>
              </Card>
              <Card className="border-border hover:bg-muted/50 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg">Understanding the Context Engine</h3>
                </CardContent>
              </Card>
              <Card className="border-border hover:bg-muted/50 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg">Optimizing AI model selection for your workflow</h3>
                </CardContent>
              </Card>
              <Card className="border-border hover:bg-muted/50 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg">Using Knowledge Graph for large codebases</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Docs;

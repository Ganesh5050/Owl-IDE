import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Rocket, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Our Mission",
      description:
        "To empower developers worldwide with AI-powered tools that make coding faster, smarter, and more enjoyable.",
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Our Team",
      description:
        "A diverse group of engineers, designers, and AI researchers passionate about developer tools.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-accent" />,
      title: "Our Vision",
      description:
        "To create a future where AI seamlessly augments human creativity in software development.",
    },
    {
      icon: <Heart className="w-8 h-8 text-secondary" />,
      title: "Our Values",
      description:
        "Developer-first, transparent, and committed to building tools that respect your workflow.",
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
              Building the future of <span className="text-accent">AI-powered</span>{" "}
              development
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to make every developer more productive with intelligent
              AI assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Owl AI was born from a simple observation: developers spend too much
                time on repetitive tasks and not enough time solving interesting problems.
                We believed AI could change that.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2024 by a team of experienced developers and AI researchers,
                we set out to build tools that understand not just code, but the context
                and intent behind it. Today, thousands of developers use Owl AI to
                ship code faster and build better software.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're just getting started. Our vision is to create a development
                environment where AI seamlessly augments human creativity, handling the
                mundane so developers can focus on innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 hover-scale"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">Join Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              We're always looking for talented individuals who share our passion for
              developer tools and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                View Open Positions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

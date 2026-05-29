import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, MessageCircle } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is Owl AI?",
          answer: "Owl AI is an intelligent coding assistant that accelerates your development workflow with real-time context awareness and semantic understanding of your entire codebase. It helps you write, debug, and refactor code faster than ever before."
        },
        {
          question: "How do I get started with Owl AI?",
          answer: "Getting started is easy! Simply sign up for a free account, install our IDE extension, and start coding. Owl AI will automatically understand your codebase and provide intelligent suggestions as you work."
        },
        {
          question: "Which IDEs are supported?",
          answer: "We currently support VS Code, IntelliJ IDEA, PyCharm, WebStorm, and other major JetBrains IDEs. We're constantly adding support for more development environments."
        },
        {
          question: "Is there a free trial?",
          answer: "Yes! We offer a 14-day free trial of our Pro plan. No credit card required. After the trial, you can continue with our Free plan or upgrade to Pro or Team."
        }
      ]
    },
    {
      category: "Features",
      questions: [
        {
          question: "What is Deep Research mode?",
          answer: "Deep Research mode allows Owl AI to analyze your entire codebase deeply, understanding relationships between functions, classes, and modules. It provides advanced context awareness for more accurate code suggestions and refactoring."
        },
        {
          question: "How does the Knowledge Graph work?",
          answer: "The Knowledge Graph creates an interactive, node-based visualization of your codebase structure. It links related functions, classes, components, and files together, helping you understand complex codebases at a glance."
        },
        {
          question: "What is Owl Mode?",
          answer: "Owl Mode is our high-performance mode that processes code at 2000 tokens per second. It's perfect for large refactoring tasks or when you need rapid code generation across multiple files."
        },
        {
          question: "Can Owl AI debug my code?",
          answer: "Yes! Our Vibe Debugging feature doesn't just identify what's broken—it understands why it's broken and suggests elegant fixes. It can trace issues across your codebase and provide contextual solutions."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "What's included in the Free plan?",
          answer: "The Free plan includes up to 100 AI completions per month, basic code analysis, community support, single workspace access, and standard AI models."
        },
        {
          question: "Can I upgrade or downgrade my plan?",
          answer: "Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and can provide invoicing for annual Team plans."
        },
        {
          question: "Is there a discount for annual billing?",
          answer: "Yes! Annual plans receive a 20% discount compared to monthly billing. This discount is automatically applied when you select annual billing."
        }
      ]
    },
    {
      category: "Security & Privacy",
      questions: [
        {
          question: "Is my code data secure?",
          answer: "Absolutely. We use industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Your code is never stored on our servers unless you explicitly enable project persistence."
        },
        {
          question: "Do you train AI models on my code?",
          answer: "No, never. We have a strict policy against using customer code for model training. Your code is your intellectual property, and we respect that completely."
        },
        {
          question: "Can I use Owl AI for enterprise projects?",
          answer: "Yes! Our Team plan includes enterprise-grade security features like SSO, audit logs, and custom data retention policies. Contact our sales team for enterprise licensing."
        },
        {
          question: "Where is my data stored?",
          answer: "Data is stored in secure data centers in the US (US-East) and EU (EU-West) regions. You can choose your preferred region during account setup to comply with data residency requirements."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          question: "What programming languages are supported?",
          answer: "Owl AI supports 50+ programming languages including JavaScript, TypeScript, Python, Java, C++, Go, Rust, Ruby, PHP, and many more. Language support is constantly expanding."
        },
        {
          question: "Does Owl AI work offline?",
          answer: "Basic features like syntax highlighting and local code completion work offline. However, advanced AI features require an internet connection to access our cloud-based models."
        },
        {
          question: "How does Parallel Execution work?",
          answer: "Parallel Execution uses multiple AI agents working simultaneously, each with specific responsibilities. They share context and collaborate to handle complex workflows more efficiently than a single agent."
        },
        {
          question: "Can I integrate Owl AI with my CI/CD pipeline?",
          answer: "Yes! We provide CLI tools and APIs that can be integrated into your CI/CD pipeline for automated code review, testing suggestions, and documentation generation."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about Owl AI
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search questions..."
                  className="pl-12 h-12 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <div key={index} className="animate-section-fade">
                  <h2 className="text-2xl font-bold mb-6 text-accent">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((item, qIndex) => (
                      <AccordionItem
                        key={qIndex}
                        value={`${index}-${qIndex}`}
                        className="border border-border rounded-lg px-6 hover:shadow-md transition-shadow"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="font-semibold">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground mb-4">
                  No questions found matching your search.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSearchQuery("")}
                >
                  Clear search
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6 animate-section-fade">
            <MessageCircle className="w-12 h-12 mx-auto text-accent" />
            <h2 className="text-3xl font-bold">
              Still have questions?
            </h2>
            <p className="text-xl text-muted-foreground">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="default" size="lg" onClick={() => window.location.href = '/contact'}>
                Contact Support
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = '/documentation'}>
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;

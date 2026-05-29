import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "Introducing Owl AI: The Future of AI-Powered Coding",
      excerpt: "We're excited to announce the launch of Owl AI, a revolutionary coding assistant that understands your entire codebase in real-time.",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "Product Launch",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      author: "Owl AI Team",
    },
    {
      id: 2,
      title: "Deep Research Mode: Understanding Code Context at Scale",
      excerpt: "Learn how our Deep Research feature helps you navigate and understand complex codebases with advanced context awareness.",
      date: "2025-01-10",
      readTime: "7 min read",
      category: "Features",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      author: "Sarah Chen",
    },
    {
      id: 3,
      title: "Parallel Execution: How Multiple AI Agents Work Together",
      excerpt: "Discover the architecture behind our multi-agent system that handles complex development workflows efficiently.",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      author: "David Park",
    },
    {
      id: 4,
      title: "Knowledge Graph: Visualizing Code Relationships",
      excerpt: "Explore how our Unreal Engine-style knowledge graph creates interactive visualizations of your codebase structure.",
      date: "2025-01-01",
      readTime: "6 min read",
      category: "Features",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      author: "Emily Rodriguez",
    },
    {
      id: 5,
      title: "Owl Mode: 2000 Tokens Per Second Performance",
      excerpt: "Behind the scenes look at how we achieve blazing-fast code generation and analysis speeds.",
      date: "2024-12-28",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      author: "Alex Kumar",
    },
    {
      id: 6,
      title: "Building Better Software with AI-Powered Debugging",
      excerpt: "How Vibe Debugging understands not just what's broken, but why it's broken and how to fix it elegantly.",
      date: "2024-12-20",
      readTime: "5 min read",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=400&fit=crop",
      author: "Maria Santos",
    },
  ];

  const categories = ["All", "Product Launch", "Features", "Technology", "Tutorial"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Blog & <span className="text-accent">Updates</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest news, features, and insights from Owl AI.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-12 h-12 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card
                key={post.id}
                className={`border-border hover:shadow-lg transition-all duration-300 card-hover-lift animate-scale-in delay-${(index % 3 + 1) * 100} cursor-pointer`}
                onClick={() => window.location.href = `/blog/${post.id}`}
              >
                <CardHeader className="p-0">
                  <div 
                    className="h-48 bg-cover bg-center rounded-t-xl"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                    <Tag className="w-3 h-3 inline mr-1" />
                    {post.category}
                  </div>

                  <h3 className="text-xl font-semibold line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                    <Button variant="ghost" size="sm" className="gap-2">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No articles found. Try adjusting your search or filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-section-fade">
          <h2 className="text-4xl font-bold mb-6">
            Stay in the loop
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates, features, and insights.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input 
              placeholder="Enter your email" 
              className="h-12 bg-white text-foreground"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

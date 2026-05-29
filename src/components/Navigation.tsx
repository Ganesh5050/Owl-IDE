import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { MessageCircle, Menu, User } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MorphicLinksOriginalStyle } from "./MorphicLinks";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { supabase } from "@/lib/supabase";
import TextScrambler from "./ui/text-scrambler";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger expansion after scrolling down 100px (approx height of nav + some margin)
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if user is logged in
  useEffect(() => {
    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsLoggedIn(!!session);
  };

  const navItems = [
    { name: "Product", path: "/product" },
    { name: "Docs", path: "/documentation" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Support", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out",
          isScrolled
            ? "top-4 w-[96%] max-w-[2000px]"
            : "top-6 w-[95%] max-w-7xl"
        )}
      >
        <div
          className={cn(
            "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 rounded-full",
            isScrolled
              ? "px-10 py-4"
              : "px-6 py-3"
          )}
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-14 h-14 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <img
                  src="/logo.png"
                  alt="Owl AI"
                  className="w-full h-full object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)] filter"
                />
              </div>
              <TextScrambler text="Owl AI" className="font-semibold text-lg text-white" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <MorphicLinksOriginalStyle items={navItems} />
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />

              {isLoggedIn ? (
                // Show Dashboard button for logged-in users
                <Link to="/dashboard">
                  <Button
                    className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-all duration-300 gap-2"
                  >
                    <User className="w-4 h-4" />
                    Dashboard
                  </Button>
                </Link>
              ) : (
                // Show Login and Get Started for non-logged-in users
                <>
                  <Link to="/login">
                    <Button
                      variant="ghost"
                      className="rounded-full text-gray-300 hover:text-white"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button
                      className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in rounded-2xl p-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors ${location.pathname === item.path
                    ? "text-white"
                    : "text-gray-300"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex gap-2 pt-2 items-center">
                <ThemeToggle />
                {isLoggedIn ? (
                  <Link to="/dashboard" className="flex-1">
                    <Button
                      className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/login" className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full rounded-full"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup" className="flex-1">
                      <Button
                        className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-all duration-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;

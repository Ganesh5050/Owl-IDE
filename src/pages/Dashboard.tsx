import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { LogOut, User, CreditCard, Package, FileText, ChevronDown, Github, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MorphicLinksOriginalStyle } from "@/components/MorphicLinks";
import { cn } from "@/lib/utils";
import TextScrambler from "@/components/ui/text-scrambler";

// Google icon component
const GoogleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    useEffect(() => {
        checkUser();

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const checkUser = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            navigate("/login");
        } else {
            setUser(user);
        }
        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/login");
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

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Navigation - Same as homepage but with user menu instead of login buttons */}
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
                        <div className="flex items-center gap-3">
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
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
                                Free Plan
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <MorphicLinksOriginalStyle items={navItems} />
                        </div>

                        {/* Desktop Actions - User Menu */}
                        <div className="hidden md:flex items-center gap-4">
                            <ThemeToggle />

                            {/* User Avatar Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                                >
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                        {user?.email?.[0]?.toUpperCase() || 'U'}
                                    </div>
                                    <ChevronDown className="w-4 h-4 text-white" />
                                </button>

                                {/* Dropdown Menu */}
                                {showUserMenu && (
                                    <div className="absolute right-0 mt-2 w-72 bg-background rounded-2xl shadow-2xl border border-border overflow-hidden animate-fade-in">
                                        <div className="p-4 border-b border-border">
                                            <div className="flex items-center justify-between">
                                                <p className="font-semibold text-foreground">
                                                    {user?.user_metadata?.full_name || user?.user_metadata?.first_name || 'User'} {user?.user_metadata?.last_name || ''}
                                                </p>
                                                {/* Provider Badge */}
                                                {(() => {
                                                    // Get the most recently used identity by sorting by last_sign_in_at
                                                    const identities = user?.identities || [];
                                                    let provider = 'email';

                                                    if (identities.length > 0) {
                                                        // Sort by last_sign_in_at descending to get most recent
                                                        const sortedIdentities = [...identities].sort((a: any, b: any) => {
                                                            const dateA = new Date(a.last_sign_in_at || 0).getTime();
                                                            const dateB = new Date(b.last_sign_in_at || 0).getTime();
                                                            return dateB - dateA;
                                                        });
                                                        provider = sortedIdentities[0]?.provider || 'email';
                                                    }

                                                    if (provider === 'google') {
                                                        return (
                                                            <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 dark:bg-blue-950/30 rounded-full">
                                                                <GoogleIcon className="w-3 h-3" />
                                                                <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Google</span>
                                                            </div>
                                                        );
                                                    }
                                                    if (provider === 'github') {
                                                        return (
                                                            <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                                                                <Github className="w-3 h-3 text-gray-700 dark:text-gray-300" />
                                                                <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">GitHub</span>
                                                            </div>
                                                        );
                                                    }
                                                    return (
                                                        <div className="flex items-center gap-1 px-2 py-1 bg-green-50 dark:bg-green-950/30 rounded-full">
                                                            <Mail className="w-3 h-3 text-green-600 dark:text-green-400" />
                                                            <span className="text-xs text-green-600 dark:text-green-400 font-medium">Email</span>
                                                        </div>
                                                    );
                                                })()}
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-1">{user?.email}</p>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full px-4 py-3 text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors flex items-center gap-2"
                                        >
                                            <LogOut className="w-4 h-4" />
                                            Log out
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="space-y-8">

                    {/* Recipes Section */}
                    <section className="bg-card rounded-lg border border-border p-6 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-foreground">Recipes</h2>
                            <a href="#" className="text-sm text-primary hover:underline">View all recipes</a>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                                <FileText className="w-5 h-5 text-muted-foreground mt-0.5" />
                                <div className="flex-1">
                                    <h3 className="font-medium text-foreground">All available</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Explore all recipes
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        Learn how to use our AI to create powerful applications and automate tasks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Usage Plan Section */}
                    <section className="bg-card rounded-lg border border-border p-6 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-foreground">Usage Plan</h2>
                            <a href="#" className="text-sm text-primary hover:underline">View usage</a>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-3xl font-bold text-foreground">0</span>
                                    <span className="text-sm text-muted-foreground">tokens</span>
                                </div>
                                <p className="text-sm text-muted-foreground">Used this month out of 0 tokens</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-semibold text-foreground">0</span>
                                </div>
                                <p className="text-sm text-muted-foreground">Requests this month out of 0 tokens</p>
                            </div>
                        </div>
                    </section>

                    {/* Billing Section */}
                    <section className="bg-card rounded-lg border border-border p-6 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-foreground">Billing</h2>
                            <a href="#" className="text-sm text-primary hover:underline">Manage Billing</a>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                            <CreditCard className="w-5 h-5 text-muted-foreground" />
                            <div>
                                <p className="font-medium text-foreground">December 24, 2025</p>
                                <p className="text-sm text-muted-foreground mt-1">Free trial in progress</p>
                            </div>
                        </div>
                    </section>

                    {/* Current Plan Section */}
                    <section className="bg-card rounded-lg border border-border p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-foreground mb-4">Current plan</h2>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                <span className="text-sm text-foreground">Free</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                <span className="text-sm text-foreground">$0.00 per month</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                <span className="text-sm text-foreground">No credit card</span>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-border">
                            <p className="text-xs text-muted-foreground">
                                To subscribe to a paid subscription plan, please add a payment method.
                            </p>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
};

export default Dashboard;

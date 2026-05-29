import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

const AuthCallback = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("Signing you in...");
    const [progress, setProgress] = useState(0);
    const [authComplete, setAuthComplete] = useState(false);
    const [authSuccess, setAuthSuccess] = useState(false);
    const [redirectTo, setRedirectTo] = useState("/login");

    useEffect(() => {
        // Start progress animation - slower speed (60ms intervals)
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                // If auth is complete, finish the bar
                if (authComplete && prev < 100) {
                    return prev + 2;
                }
                // Otherwise cap at 70% until auth completes
                if (prev >= 70 && !authComplete) {
                    return 70;
                }
                return prev + 1;
            });
        }, 60);

        const handleAuthCallback = async () => {
            try {
                // Get the session from URL hash (Supabase OAuth callback)
                const { data: { session }, error } = await supabase.auth.getSession();

                if (error) {
                    console.error("Auth error:", error);
                    setMessage("Authentication failed. Redirecting to login...");
                    setRedirectTo("/login");
                    setAuthSuccess(false);
                    setAuthComplete(true);
                    return;
                }

                if (session) {
                    setMessage("Welcome back! Redirecting to dashboard...");
                    setRedirectTo("/dashboard");
                    setAuthSuccess(true);
                    setAuthComplete(true);
                } else {
                    setMessage("No session found. Redirecting to login...");
                    setRedirectTo("/login");
                    setAuthSuccess(false);
                    setAuthComplete(true);
                }
            } catch (err) {
                console.error("Callback error:", err);
                setMessage("Something went wrong. Redirecting to login...");
                setRedirectTo("/login");
                setAuthSuccess(false);
                setAuthComplete(true);
            }
        };

        handleAuthCallback();

        return () => clearInterval(progressInterval);
    }, [authComplete]);

    // Navigate when progress reaches 100%
    useEffect(() => {
        if (progress >= 100) {
            const delay = authSuccess ? 500 : 1000;
            setTimeout(() => navigate(redirectTo), delay);
        }
    }, [progress, navigate, redirectTo, authSuccess]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center space-y-8">
                {/* Animated Logo */}
                <div className="relative">
                    <div className="w-24 h-24 mx-auto animate-pulse">
                        <img
                            src="/logo.png"
                            alt="Owl AI"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    {/* Spinning ring */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 border-4 border-transparent border-t-foreground rounded-full animate-spin"></div>
                    </div>
                </div>

                {/* Loading text */}
                <div className="space-y-6 max-w-md mx-auto px-4">
                    <h2 className="text-xl font-semibold text-foreground">{message}</h2>

                    {/* Progress Section */}
                    <div className="space-y-3">
                        {/* Percentage display */}
                        <div className="flex justify-between items-end">
                            <span className="text-3xl font-bold text-foreground">{Math.min(progress, 100)}%</span>
                            <span className="text-xs text-muted-foreground">
                                {progress > 0 && `+${Math.floor(progress * 0.02)}% since you last checked`}
                            </span>
                        </div>

                        {/* Segmented Progress Bar */}
                        <div className="flex gap-[2px]">
                            {Array.from({ length: 40 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-6 flex-1 transition-colors duration-150 ${i < (Math.min(progress, 100) * 40) / 100
                                            ? "bg-foreground"
                                            : "bg-muted"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthCallback;

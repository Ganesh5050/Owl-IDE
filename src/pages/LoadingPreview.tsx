import { useState, useEffect } from "react";

const LoadingPreview = () => {
    const [message] = useState("Signing you in...");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

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
                            <span className="text-3xl font-bold text-foreground">{progress}%</span>
                            <span className="text-xs text-muted-foreground">
                                {progress > 0 && `+${Math.floor(progress * 0.02)}% since you last checked`}
                            </span>
                        </div>

                        {/* Segmented Progress Bar */}
                        <div className="flex gap-[2px]">
                            {Array.from({ length: 40 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-6 flex-1 transition-colors duration-150 ${i < (progress * 40) / 100
                                            ? "bg-foreground"
                                            : "bg-muted"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Preview Note */}
                <p className="text-sm text-muted-foreground mt-8">
                    This is a preview of the auth loading screen
                </p>
            </div>
        </div>
    );
};

export default LoadingPreview;

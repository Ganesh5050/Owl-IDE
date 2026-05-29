import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { clsx } from "clsx";

interface NavItem {
    name: string;
    path: string;
}

interface MorphicLinksProps {
    items: NavItem[];
}

export function MorphicLinks({ items }: MorphicLinksProps) {
    const location = useLocation();
    const activePath = location.pathname;

    const isActiveLink = (path: string) => {
        if (path === "/") {
            return activePath === "/";
        }
        return activePath.startsWith(path);
    };

    return (
        <div className="glass flex items-center justify-between overflow-hidden rounded-xl p-1 bg-background/20">
            {items.map((item, index) => {
                const isActive = isActiveLink(item.path);
                const isFirst = index === 0;
                const isLast = index === items.length - 1;
                const prevPath = index > 0 ? items[index - 1].path : null;
                const nextPath = index < items.length - 1 ? items[index + 1].path : null;

                return (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={cn(
                            "flex items-center justify-center px-4 py-2 text-sm transition-all duration-300 relative z-10",
                            isActive
                                ? "bg-accent text-accent-foreground font-semibold mx-1 rounded-lg shadow-sm"
                                : cn(
                                    "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                                    // The original "morphic" logic from user request, adapted for our theme
                                    // We only apply special rounded corners if we want that specific "connected" look
                                    // But here, let's try to respect the user's specific "black bar" aesthetic if possible,
                                    // or adapt it to our theme.
                                    // The user's code: bg-black text-white. 
                                    // Let's use our theme capabilities.
                                )
                        )}
                    >
                        {item.name}
                    </Link>
                );
            })}
        </div>
    );
}

export function MorphicLinksOriginalStyle({ items }: MorphicLinksProps) {
    const location = useLocation();
    const activePath = location.pathname;

    const isActiveLink = (path: string) => {
        if (path === "/") {
            return activePath === "/";
        }
        return activePath.startsWith(path);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="glass flex items-center justify-between overflow-hidden rounded-xl">
                {items.map((item, index) => {
                    const isActive = isActiveLink(item.path);
                    const isFirst = index === 0;
                    const isLast = index === items.length - 1;
                    const prevPath = index > 0 ? items[index - 1].path : null;
                    const nextPath = index < items.length - 1 ? items[index + 1].path : null;

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={clsx(
                                "flex items-center justify-center p-1.5 px-4 text-sm transition-all duration-300",
                                // Light Mode: Black bg, White text
                                // Dark Mode: Transparent/Subtle bg, White text (Fixed)
                                "bg-black text-white hover:bg-black/80",
                                "dark:bg-transparent dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white",
                                isActive
                                    ? "mx-2 rounded-xl font-semibold bg-accent text-white shadow-md scale-105"
                                    : clsx(
                                        (prevPath && isActiveLink(prevPath) || isFirst) &&
                                        "rounded-l-xl",
                                        (nextPath && isActiveLink(nextPath) || isLast) &&
                                        "rounded-r-xl"
                                    )
                            )}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

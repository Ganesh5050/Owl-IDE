import { useState } from "react";

interface TextScramblerProps {
    text: string;
    className?: string;
}

const TextScrambler = ({ text, className = "" }: TextScramblerProps) => {
    const [displayText, setDisplayText] = useState(text);
    const [isAnimating, setIsAnimating] = useState(false);

    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    const scramble = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        let iteration = 0;
        const originalText = text;

        const interval = setInterval(() => {
            setDisplayText(
                originalText
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return originalText[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= originalText.length) {
                clearInterval(interval);
                setIsAnimating(false);
            }

            iteration += 1 / 3;
        }, 30);
    };

    return (
        <span
            className={className}
            onMouseEnter={scramble}
        >
            {displayText}
        </span>
    );
};

export default TextScrambler;

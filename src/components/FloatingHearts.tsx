"use client";

interface FloatingHeartsProps {
  count?: number;
  className?: string;
  containerClassName?: string;
  vibrant?: boolean;
}

const heartEmojis = ["❤️", "💖", "💗", "💕", "💓", "💘", "💝"];

export function FloatingHearts({
  count = 16,
  className,
  containerClassName,
  vibrant = false,
}: FloatingHeartsProps) {
  const hearts = Array.from({ length: count }).map((_, i) => {
    const emoji = heartEmojis[i % heartEmojis.length];
    const size = vibrant ? 20 + (i % 5) * 7 : 16 + (i % 5) * 6;
    const left = (i * 17) % 100;
    const duration = vibrant ? 5 + (i % 6) * 4 : 7 + (i % 7) * 5;
    const delay = (i * 1.6) % 14;
    const opacity = vibrant ? 0.85 + (i % 5) * 0.03 : 0.55 + (i % 6) * 0.08;

    return (
      <div
        key={i}
        className="absolute pointer-events-none select-none z-[10]"
        style={{
          left: `${left}%`,
          top: vibrant ? `115%` : `130%`,
          fontSize: `${size}px`,
          opacity: String(opacity),
          filter: vibrant
            ? "drop-shadow(0 3px 8px rgba(212, 175, 112, 0.5)) drop-shadow(0 2px 6px rgba(113,61,75,0.35))"
            : "drop-shadow(0 2px 6px rgba(113,61,75,0.3))",
          animation: `float-up ${duration}s ease-in infinite`,
          animationDelay: `-${delay}s`,
        }}
      >
        {emoji}
      </div>
    );
  });

  return (
    <div
      className={`overflow-hidden pointer-events-none inset-0 z-10 ${containerClassName ?? ""} ${className ?? ""}`}
    >
      {hearts}
    </div>
  );
}

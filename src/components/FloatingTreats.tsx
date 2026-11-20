"use client";

interface FloatingTreatsProps {
  count?: number;
  className?: string;
  containerClassName?: string;
}

const treatEmojis = ["🎂", "🍬", "🎁", "❤️", "💗"];

export function FloatingTreats({
  count = 16,
  className,
  containerClassName,
}: FloatingTreatsProps) {
  const treats = Array.from({ length: count }).map((_, i) => {
    const emoji = treatEmojis[i % treatEmojis.length];
    const size = 16 + (i % 5) * 6;
    const left = (i * 17) % 100;
    const duration = 7 + (i % 7) * 5;
    const delay = (i * 1.6) % 14;
    const opacity = 0.55 + (i % 6) * 0.08;

    return (
      <div
        key={i}
        className="absolute pointer-events-none select-none z-[10]"
        style={{
          left: `${left}%`,
          top: `130%`,
          fontSize: `${size}px`,
          opacity: String(opacity),
          filter: "drop-shadow(0 2px 6px rgba(113,61,75,0.3))",
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
      {treats}
    </div>
  );
}

"use client";

interface SparklesProps {
  count?: number;
  className?: string;
  containerClassName?: string;
}

export function Sparkles({
  count = 12,
  className,
  containerClassName,
}: SparklesProps) {
  const sparkles = Array.from({ length: count }).map((_, i) => {
    const size = 10 + (i % 4) * 4; // 10 to 22 px
    const left = (i * 29) % 100;
    const top = (i * 37) % 100;
    const duration = 2 + (i % 5) * 2; // 2s to 10s
    const delay = (i * 1.1) % 8;
    const opacity = 0.4 + (i % 6) * 0.1;

    return (
      <div
        key={i}
        className="absolute pointer-events-none select-none z-[10]"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          fontSize: `${size}px`,
          opacity: String(opacity),
          animation: `sparkle-pulse ${duration}s ease-in-out infinite`,
          animationDelay: `-${delay}s`,
        }}
      >
        ✨
      </div>
    );
  });

  return (
    <div
      className={`overflow-hidden pointer-events-none inset-0 z-10 ${containerClassName ?? ""} ${className ?? ""}`}
    >
      {sparkles}
    </div>
  );
}

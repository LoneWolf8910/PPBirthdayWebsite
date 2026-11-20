"use client";

interface FloatingButterfliesProps {
  count?: number;
  className?: string;
  containerClassName?: string;
}

export function FloatingButterflies({
  count = 8,
  className,
  containerClassName,
}: FloatingButterfliesProps) {
  const butterflies = Array.from({ length: count }).map((_, i) => {
    const size = 18 + (i % 4) * 8;
    const left = (i * 23) % 100;
    const duration = 8 + (i % 5) * 6;
    const delay = (i * 1.9) % 16;
    const opacity = 0.7 + (i % 4) * 0.08;

    return (
      <div
        key={i}
        className="absolute pointer-events-none select-none z-[10]"
        style={{
          left: `${left}%`,
          top: `110%`,
          fontSize: `${size}px`,
          opacity: String(opacity),
          filter: "drop-shadow(0 2px 8px rgba(113,61,75,0.25))",
          animation: `float-side ${duration}s ease-in-out infinite`,
          animationDelay: `-${delay}s`,
        }}
      >
        🦋
      </div>
    );
  });

  return (
    <div
      className={`overflow-hidden pointer-events-none inset-0 z-10 ${containerClassName ?? ""} ${className ?? ""}`}
    >
      {butterflies}
    </div>
  );
}

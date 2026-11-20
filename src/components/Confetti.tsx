import { useEffect, useRef } from "react";

/**
 * Lightweight DOM-based confetti burst.
 * Triggered by `isActive`. No canvas, no heavy library.
 */
export function Confetti({ isActive }: { isActive: boolean }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const piecesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!isActive) return;

    const container = document.createElement("div");
    container.className = "confetti";
    containerRef.current = container;
    document.body.appendChild(container);

    const colors = ["#F4C6D0", "#E8A0B0", "#D4AF70", "#FFF8ED", "#713D4B"];
    const count = 60;

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      const type = i % 3 === 0 ? "rect" : i % 3 === 1 ? "circle" : "tri";
      const size = 5 + Math.random() * 8;
      p.style.position = "absolute";
      p.style.left = "50vw";
      p.style.top = "40vh";
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.opacity = "0.95";

      if (type === "circle") p.style.borderRadius = "50%";
      if (type === "tri") {
        p.style.width = "0";
        p.style.height = "0";
        p.style.background = "transparent";
        p.style.borderLeft = `${size / 2}px solid transparent`;
        p.style.borderRight = `${size / 2}px solid transparent`;
        p.style.borderBottom = `${size}px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
      }

      const angle = (Math.random() * Math.PI * 2);
      const vel = 12 + Math.random() * 20;
      const vx = Math.cos(angle) * vel;
      const vy = Math.sin(angle) * vel - 14;
      const rot = Math.random() * 360;
      const rotVel = (Math.random() - 0.5) * 20;

      p.style.setProperty("--vx", `${vx}px`);
      p.style.setProperty("--vy", `${vy}px`);
      p.style.setProperty("--rot", `${rot}deg`);
      p.style.setProperty("--rotVel", `${rotVel}deg`);
      p.style.animation = `confetti-fall ${1.2 + Math.random() * 1}s ease-out forwards`;

      container.appendChild(p);
      piecesRef.current.push(p);
    }

    const cleanup = () => {
      if (containerRef.current && document.body.contains(containerRef.current)) {
        document.body.removeChild(containerRef.current);
      }
      piecesRef.current = [];
    };

    const timer = setTimeout(cleanup, 2200);
    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, [isActive]);

  return null;
}

"use client";

import { motion } from "framer-motion";
import { Crown } from "./Crown";

/**
 * Hero section with large elegant typography, animated crown above the name,
 * floating petals, butterflies and subtle glowing particles.
 */
export function HeroSection() {
  const petals = Array.from({ length: 10 }).map((_, i) => {
    const emoji = ["🌸", "🌹", "🌺", "💮"][i % 4];
    const size = 14 + (i % 4) * 6;
    const left = (i * 21) % 100;
    const duration = 9 + (i % 6) * 5;
    const delay = (i * 1.7) % 14;

    return (
      <div
        key={i}
        className="absolute pointer-events-none select-none z-10"
        style={{
          left: `${left}%`,
          top: `105%`,
          fontSize: `${size}px`,
          animation: `float-up ${duration}s ease-in infinite`,
          animationDelay: `-${delay}s`,
          filter: "drop-shadow(0 2px 6px rgba(113,61,75,0.25))",
        }}
      >
        {emoji}
      </div>
    );
  });

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,#FFF8ED_0%,#FDF3E3_45%,#FFF8ED_100%)]"
        />
        <SparklesHero count={18} />
        <div className="absolute inset-0 overflow-hidden">{petals}</div>
        <div className="absolute top-1/5 left-1/6 w-[560px] h-[560px] bg-blush/25 rounded-full blur-[110px] -translate-x-1/2 -translate-y-1/3 animate-pulse-soft" />
        <div
          className="absolute bottom-1/6 right-1/5 w-[500px] h-[500px] bg-rose/15 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4"
        />
      </div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-4 relative z-10"
      >
        <Crown size={56} />
      </motion.div>

      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-center relative z-10"
      >
        <h1 className="playfair text-[48px] md:text-[72px] font-bold text-burgundy leading-tight tracking-tighter gradient-text-blush drop-shadow-[0_3px_10px_rgba(113,61,75,0.15)]">
          Happiest Birthday
        </h1>
        <h1 className="playfair text-[40px] md:text-[60px] font-bold italic text-burgundy leading-tight mt-2 gradient-text-blush">
          Panditaeen Ji ✨
        </h1>
        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="w-10 h-0.5 bg-champagne" />
          <span className="text-rose/70 cormorant font-medium text-[16px]">❦</span>
          <div className="w-10 h-0.5 bg-champagne" />
        </div>
        <h2 className="mt-5 playfair text-[24px] md:text-[32px] text-champagne font-semibold">
          Kriti Pandey
        </h2>
        <p className="mt-4 cormorant text-[17px] md:text-[21px] text-burgundy/80 max-w-xl mx-auto leading-relaxed italic">
          Today, the world celebrates someone truly special.
        </p>
      </motion.div>
    </section>
  );
}

function SparklesHero({ count = 18 }: { count?: number }) {
  const el = document.createElement("div");
  el.style.position = "fixed";
  el.style.top = "0";
  el.style.left = "0";
  el.style.width = "100%";
  el.style.height = "100%";
  el.style.pointerEvents = "none";
  el.style.zIndex = "0";
  el.style.overflow = "hidden";
  document.body.appendChild(el);
  const colors = ["#F4C6D0", "#E8A0B0", "#D4AF70", "#FFF8ED"];
  for (let i = 0; i < count; i++) {
    const s = document.createElement("div");
    s.style.position = "absolute";
    s.style.left = `${Math.random() * 100}vw`;
    s.style.top = `${Math.random() * 100}vh`;
    s.style.width = `${4 + Math.random() * 6}px`;
    s.style.height = s.style.width;
    s.style.background = colors[Math.floor(Math.random() * colors.length)];
    s.style.borderRadius = "50%";
    s.style.opacity = `${0.35 + Math.random() * 0.55}`;
    s.style.boxShadow = `0 0 ${8 + Math.random() * 12}px ${s.style.background}`;
    const duration = 4 + Math.random() * 5;
    const delay = Math.random() * 6;
    const side = -15 + Math.random() * 30;
    s.style.animation = `sparkle ${duration}s ease-in-out ${delay}s infinite, side-drift ${duration * 0.9}s ease-in-out alternate`;
    s.style.setProperty("--sx", `${side}px`);
    el.appendChild(s);
  }
  return null;
}

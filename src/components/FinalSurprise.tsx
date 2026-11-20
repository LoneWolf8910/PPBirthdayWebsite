"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FloatingButterflies } from "./FloatingButterflies";
import { Sparkles } from "./Sparkles";

export function FinalSurprise() {
  const [hugSent, setHugSent] = useState(false);

  // Burst hearts positioned randomly when the hug is sent
  const burstHearts = Array.from({ length: 26 }).map((_, i) => {
    const left = (i * 37) % 100;
    const top = 60 + (i * 41) % 40;
    const size = 14 + (i % 5) * 5;
    const duration = 1 + (i % 4) * 0.6;
    const delay = (i * 0.15) % 1;

    return (
      <div
        key={i}
        className="absolute pointer-events-none select-none z-[40]"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          fontSize: `${size}px`,
          animation: `float-up-fast ${duration}s ease-out forwards`,
          animationDelay: `${delay}s`,
        }}
      >
        ❤️
      </div>
    );
  });

  return (
    <section
      id="finale"
      className="relative bg-[#FFF8ED] overflow-hidden py-16 md:py-28 min-h-[80vh]"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-1/6 left-1/8 w-[700px] h-[700px] bg-blush/20 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 animate-pulse-soft"
        />
        <div
          className="absolute bottom-1/6 right-1/6 w-[600px] h-[600px] bg-rose/15 rounded-full blur-[120px] translate-x-1/5 translate-y-1/5"
        />
        <FloatingButterflies count={10} containerClassName="top-0 left-0 w-full h-full" />
        <Sparkles count={14} containerClassName="top-0 left-0 w-full h-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Royal castle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-10"
          style={{ maxWidth: 320 }}
        >
          <svg
            viewBox="0 0 220 190"
            className="w-full h-auto fill-current text-blush drop-shadow-[0_14px_30px_rgba(113,61,75,0.2)]"
          >
            <defs>
              <linearGradient id="castleGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF70" />
                <stop offset="100%" stopColor="#F0DCB2" />
              </linearGradient>
            </defs>
            {/* Ground */}
            <path d="M0 150 Q110 140 220 150 V190 H0 Z" fill="#E8A0B0" opacity="0.9" />
            {/* Main keep */}
            <rect x="44" y="108" width="132" height="46" rx="6" fill="currentColor" opacity="0.95" />
            {/* Towers */}
            <rect x="48" y="86" width="26" height="36" fill="currentColor" opacity="0.95" />
            <rect x="146" y="86" width="26" height="36" fill="currentColor" opacity="0.95" />
            <rect x="97" y="70" width="26" height="52" fill="currentColor" opacity="0.95" />
            {/* Crenellations */}
            <rect x="44" y="82" width="6" height="6" fill="currentColor" />
            <rect x="68" y="82" width="6" height="6" fill="currentColor" />
            <rect x="142" y="82" width="6" height="6" fill="currentColor" />
            <rect x="166" y="82" width="6" height="6" fill="currentColor" />
            <rect x="93" y="66" width="6" height="6" fill="currentColor" />
            <rect x="121" y="66" width="6" height="6" fill="currentColor" />
            {/* Roofs */}
            <polygon points="42,86 74,86 58,66" fill="#D4AF70" opacity="0.95" />
            <polygon points="140,86 172,86 156,66" fill="#D4AF70" opacity="0.95" />
            <polygon points="91,70 129,70 110,48" fill="#D4AF70" opacity="0.95" />
            {/* Windows */}
            <rect x="56" y="96" width="6" height="10" rx="1" fill="#FFF8ED" />
            <rect x="158" y="96" width="6" height="10" rx="1" fill="#FFF8ED" />
            <rect x="105" y="86" width="6" height="10" rx="1" fill="#FFF8ED" />
            {/* Door */}
            <rect x="101" y="130" width="18" height="24" rx="2" fill="#713D4B" opacity="0.9" />
            <circle cx="110" cy="142" r="1.5" fill="#D4AF70" />
            {/* Flag */}
            <rect x="108" y="60" width="3" height="12" fill="#D4AF70" />
            <polygon points="108,60 126,66 108,72" fill="#F4C6D0" />
            {/* Sparkles around castle */}
            <text x="30" y="110" fontSize="14" fill="#D4AF70">✨</text>
            <text x="190" y="100" fontSize="14" fill="#D4AF70">✨</text>
            <text x="50" y="75" fontSize="12" fill="#F4C6D0">✨</text>
            <text x="175" y="78" fontSize="12" fill="#F4C6D0">✨</text>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-xl md:text-2xl font-serif italic text-rose-600 leading-relaxed">
            Never forget, you&rsquo;re someone&rsquo;s favourite princess.
          </p>
          <p className="text-lg font-cormorant text-burgundy tracking-wide">
            Stay happy. Stay blessed. Keep shining.
          </p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl md:text-4xl font-playfair font-bold text-burgundy italic tracking-tight"
          >
            HAPPY BIRTHDAY, PANDITAEEN JI! 👑
          </motion.h2>
        </motion.div>

        {/* Hug button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-14 relative"
        >
          {!hugSent ? (
            <button
              onClick={() => setHugSent(true)}
              className="relative inline-flex items-center gap-2 px-10 py-4 rounded-full font-playfair font-bold text-burgundy bg-white shadow-[0_14px_35px_rgba(113,61,75,0.22)] border border-rose/30 hover:bg-rose-50 hover:shadow-[0_18px_45px_rgba(113,61,75,0.28)] transition-all duration-300 active:scale-95"
            >
              <span className="text-xl">Send a Royal Hug 🤗</span>
            </button>
          ) : (
            <>
              {/* Heart burst container */}
              <div className="relative inline-block">
                {burstHearts}
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: [1, 1.18, 1],
                    rotate: [-6, 6, -6, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block text-6xl md:text-8xl drop-shadow-[0_8px_20px_rgba(113,61,75,0.3)]"
                >
                  🤗❤️
                </motion.div>
              </div>
              <p className="mt-6 text-lg font-script text-champagne italic">
                Hug sent with love 💕
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

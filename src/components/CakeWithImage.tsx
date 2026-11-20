"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Confetti } from "./Confetti";

const IMG2 = "/imgs/Playful%20Double%20Thumbs%20Up%20Portrait.webp";

function Polaroid({
  src,
  alt,
  rotate,
  className,
  height = "h-[320px]md:h-[400px]",
}: {
  src: string;
  alt: string;
  rotate: number;
  className?: string;
  height?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className={`relative inline-block bg-white border border-rose/20 shadow-[0_14px_35px_rgba(113,61,75,0.16)] rounded-3xl p-3 ${className ?? ""}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="absolute -top-3 left-4 w-16 h-3 bg-blush rounded-full shadow-sm rotate-[-6deg]" />
      <div className="absolute -top-1 left-3 w-3 h-3 bg-rose-500 rounded-full" />
      <img
        src={src}
        alt={alt}
        className={`w-full ${height} object-cover rounded-2xl`}
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  );
}

export function CakeWithImage() {
  const [wishMade, setWishMade] = useState(false);
  const [candlesLit, setCandlesLit] = useState(true);

  const handleWish = () => {
    setWishMade(true);
    setCandlesLit(false);
  };

  const relight = () => {
    setWishMade(false);
    setCandlesLit(true);
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-blush/20 rounded-full blur-[120px] animate-pulse-soft"
        />
        <div
          className="absolute bottom-0 right-1/5 -translate-x-1/2 w-[480px] h-[480px] bg-champagne/20 rounded-full blur-[110px] animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Left: cake */}
          <div className="flex-1 flex flex-col items-center">
            <h2 className="text-[32px] md:text-[48px] font-script text-burgundy italic mb-8 text-center">
              Make a Wish 🎂
            </h2>

            <div className="relative w-full max-w-xs mx-auto mb-10">
              <div className="mx-auto w-20 h-1 bg-champagne/60 rounded-full shadow-sm" />
              <div className="mx-auto w-24 h-1 bg-champagne/40 rounded-full" />
              <div className="relative z-10">
                <div className="mx-auto w-48 h-14 bg-blush rounded-b-3xl rounded-t-xl shadow-[0_8px_20px_rgba(113,61,75,0.15)] border border-rose/20" />
                <div className="mx-auto w-40 h-10 bg-rose/40 rounded-b-3xl rounded-t-xl mt-2 shadow-[0_6px_14px_rgba(113,61,75,0.12)] border border-rose/30" />
                <div className="mx-auto w-32 h-8 bg-blush rounded-b-3xl rounded-t-xl mt-2 shadow-[0_4px_10px_rgba(113,61,75,0.12)] border border-rose/20" />
                <div className="mx-auto w-36 h-6 bg-white/70 backdrop-blur rounded-full mt-2 border border-white/60 shadow-inner" />
              </div>
              <div
                className="absolute top-[-72px] left-1/2 -translate-x-1/2 flex gap-3 z-20"
              >
                {[
                  { color: "#F4C6D0" },
                  { color: "#E8A0B0" },
                  { color: "#D4AF70" },
                ].map((c, i) => (
                  <motion.div
                    key={i}
                    className="relative w-2 h-20 rounded-full shadow-sm"
                    style={{
                      background: candlesLit ? c.color : "#e2e8f0",
                      opacity: candlesLit ? 1 : 0.5,
                    }}
                    animate={
                      candlesLit
                        ? { y: [0, -2, 0] }
                        : { y: 0, opacity: 0.5 }
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div
                      className={`absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full transition-opacity duration-500 ease-out ${
                        candlesLit
                          ? "animate-[flame_0.12s_infinite_alternate,flicker_0.18s_infinite_alternate]"
                          : ""
                      }`}
                      style={{
                        background: candlesLit
                          ? "radial-gradient(circle at 30% 30%, #fff7d0, #fbbf24, #f59e0b)"
                          : "transparent",
                        boxShadow: candlesLit
                          ? "0 0 14px #fbbf24, 0 0 24px rgba(251,191,36,0.5)"
                          : "none",
                        opacity: candlesLit ? 1 : 0,
                      }}
                    />
                    <div
                      className="absolute -top-7 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-burgundy/40"
                    />
                    {!candlesLit && (
                      <motion.div
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: -14, opacity: 0.35 }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 w-3 h-6 bg-burgundy/30 rounded-full blur-sm"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {!wishMade ? (
              <motion.button
                onClick={handleWish}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-playfair font-semibold text-burgundy bg-white shadow-[0_12px_30px_rgba(113,61,75,0.2)] border border-rose/30 hover:bg-rose-50 hover:shadow-[0_16px_40px_rgba(113,61,75,0.25)] transition-all duration-300"
              >
                <span>Make a Wish ✨</span>
              </motion.button>
            ) : (
              <>
                <Confetti isActive={true} />
                <h3 className="mt-4 text-[30px] md:text-[42px] font-playfair font-bold text-burgundy italic">
                  May all your wishes come true, Princess! 👑✨
                </h3>
                <motion.button
                  onClick={relight}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-full font-playfair font-semibold text-rose-600 bg-white/80 backdrop-blur border border-rose/30 hover:bg-rose-50 transition-all"
                >
                  Light the candles again 🕯️
                </motion.button>
              </>
            )}
          </div>

          {/* Right: image */}
          <div className="flex-1 flex justify-center">
            <Polaroid src={IMG2} alt="Kriti Pandey playful portrait" rotate={6} className="md:mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

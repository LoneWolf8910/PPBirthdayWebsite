"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Confetti } from "./Confetti";

interface Candle {
  id: number;
  left: string;
  color: string;
}

const CANDLES: Candle[] = [
  { id: 1, left: "40%", color: "#F4C6D0" },
  { id: 2, left: "50%", color: "#E8A0B0" },
  { id: 3, left: "60%", color: "#D4AF70" },
];

export function Cake() {
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
    <section
      id="cake"
      className="relative bg-cream overflow-hidden py-16 md:py-24"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/5 w-[600px] h-[600px] bg-blush/20 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 animate-pulse-soft"
        />
        <div
          className="absolute bottom-1/5 right-1/4 w-[500px] h-[500px] bg-champagne/15 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4"
        />
      </div>

      <div className="max-w-xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-script text-burgundy italic mb-2"
        >
          Make a Wish 🎂
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-rose-600 font-cormorant text-lg mb-12 max-w-md mx-auto"
        >
          Three candles for three royal wishes.
        </motion.p>

        {/* Cake */}
        <div className="relative w-full max-w-[320px] mx-auto">
          {/* Cake stand */}
          <div className="mx-auto w-20 h-1 bg-champagne/60 rounded-full shadow-sm" />
          <div className="mx-auto w-24 h-1 bg-champagne/40 rounded-full" />

          {/* Cake layers */}
          <div className="relative z-10">
            <div className="mx-auto w-48 h-14 bg-blush rounded-b-3xl rounded-t-xl shadow-[0_8px_20px_rgba(113,61,75,0.15)] border border-rose/20" />
            <div className="mx-auto w-40 h-10 bg-rose/40 rounded-b-3xl rounded-t-xl mt-2 shadow-[0_6px_14px_rgba(113,61,75,0.12)] border border-rose/30" />
            <div className="mx-auto w-32 h-8 bg-blush rounded-b-3xl rounded-t-xl mt-2 shadow-[0_4px_10px_rgba(113,61,75,0.12)] border border-rose/20" />
            {/* frosting top */}
            <div className="mx-auto w-36 h-6 bg-white/70 backdrop-blur rounded-full mt-2 border border-white/60 shadow-inner" />
          </div>

          {/* Candles */}
          <div className="absolute top-[-72px] left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {CANDLES.map((c) => (
              <motion.div
                key={c.id}
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
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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
                {/* Wick */}
                <div
                  className="absolute -top-7 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-burgundy/40"
                />
                {/* Smoke when extinguished */}
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

        {/* Wish button / message */}
        {!wishMade ? (
          <motion.button
            onClick={handleWish}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-playfair font-semibold text-burgundy bg-white shadow-[0_12px_30px_rgba(113,61,75,0.2)] border border-rose/30 hover:bg-rose-50 hover:shadow-[0_16px_40px_rgba(113,61,75,0.25)] transition-all duration-300"
          >
            <span>Make a Wish ✨</span>
          </motion.button>
        ) : (
          <>
            <Confetti isActive={true} />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10"
            >
              <h3
                className="text-3xl md:text-5xl font-playfair font-bold text-burgundy italic"
              >
                May all your wishes come true, Princess! 👑✨
              </h3>
            </motion.div>
            <motion.button
              onClick={relight}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full font-playfair font-semibold text-rose-600 bg-white/80 backdrop-blur border border-rose/30 hover:bg-rose-50 transition-all"
            >
              Light the candles again 🕯️
            </motion.button>
          </>
        )}
      </div>
    </section>
  );
}

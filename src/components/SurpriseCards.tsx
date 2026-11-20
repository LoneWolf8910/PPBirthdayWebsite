import { motion } from "framer-motion";
import { Sparkles, Crown, Smile, Sun } from "lucide-react";
import React from "react";

interface Card {
  title: string;
  icon: React.ReactNode;
  iconColor: string;
}

const cards: Card[] = [
  {
    title: "Your Beautiful Smile ❤️",
    icon: <Smile className="w-7 h-7" />,
    iconColor: "#F4C6D0",
  },
  {
    title: "Your Royal Attitude 👑",
    icon: <Crown className="w-7 h-7" />,
    iconColor: "#D4AF70",
  },
  {
    title: "Your Wonderful Personality ✨",
    icon: <Sparkles className="w-7 h-7" />,
    iconColor: "#E8A0B0",
  },
  {
    title: "Your Unique Energy 🎁",
    icon: <Sun className="w-7 h-7" />,
    iconColor: "#f4c2d7",
  },
];

/**
 * "Things That Make You Special 🌷"
 * Four animated cards with cute icons and subtle animations.
 * General compliments only — no invented personal memories.
 */
export function SurpriseCards() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white/60 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-blush/25 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-0 right-1/5 -translate-x-1/2 w-[480px] h-[480px] bg-champagne/25 rounded-full blur-[90px] animate-pulse-soft" style={{ animationDelay: "1.4s" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="playfair text-[36px] md:text-[46px] font-bold text-burgundy mb-2 tracking-tight">
            Things That Make You Special 🌷
          </h2>
          <p className="cormorant text-rose/70 text-lg italic">
            Just a few of the reasons we adore you, Your Highness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/80 backdrop-blur p-6 md:p-8 rounded-3xl border border-rose/40 shadow-[0_10px_25px_rgba(113,61,75,0.12)] text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose/60 to-transparent" />
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border border-white/60 ${card.iconColor === "#D4AF70" ? "bg-champagne/20" : card.iconColor === "#F4C6D0" ? "bg-blush/20" : "bg-white/70"}`}>
                  {card.icon}
                </div>
                <h3 className="playfair text-[18px] md:text-[20px] font-bold text-burgundy leading-tight">
                  {card.title}
                </h3>
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-burgundy/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

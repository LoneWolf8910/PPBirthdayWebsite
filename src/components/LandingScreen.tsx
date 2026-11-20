import { motion } from "framer-motion";
import { Sparkles } from "./Sparkles";
import { FloatingTreats } from "./FloatingTreats";
import { FloatingButterflies } from "./FloatingButterflies";
import { Crown } from "./Crown";
import { SlideToOpen } from "./SlideToOpen";

/**
 * Magical opening screen.
 * "Once upon a time, there was a princess..." → "Today is all about Panditaeen Ji 👑"
 * Animated pink envelope with golden wax seal → "Open Your Royal Surprise 💌"
 */
export function LandingScreen({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center text-center px-4"
    >
      {/* Vibrant background magic */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Sparkles count={28} />
        <FloatingTreats count={22} />
        <FloatingButterflies count={6} />

        {/* Rich multi-tone gradient blobs */}
        <div
          className="absolute top-1/5 left-1/4 -translate-x-1/2 w-[700px] h-[700px] bg-rose/35 rounded-full blur-[140px] animate-pulse-soft"
        />
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[620px] h-[620px] bg-blush/30 rounded-full blur-[120px] animate-pulse-soft"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-1/5 right-1/5 w-[560px] h-[560px] bg-champagne/25 rounded-full blur-[110px] animate-pulse-soft"
          style={{ animationDelay: "2.5s" }}
        />
        <div
          className="absolute bottom-[15%] left-[20%] w-[340px] h-[340px] bg-burgundy/20 rounded-full blur-[90px] animate-pulse-soft"
          style={{ animationDelay: "3.5s" }}
        />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mb-2 relative z-10"
      >
        <p className="text-[17px] md:text-[22px] cormorant italic text-burgundy/80 tracking-wide">
          Once upon a time, there was a princess…
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 10, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.9, type: "spring", stiffness: 260, damping: 20 }}
        className="mb-10 relative z-10"
      >
        <p className="text-[22px] md:text-[34px] playfair font-bold italic text-burgundy gradient-text-blush drop-shadow-[0_2px_6px_rgba(113,61,75,0.2)]">
          Today is all about <span className="text-champagne">Panditaeen Ji</span> 👑
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.7 }}
        className="mb-2 relative z-10"
      >
        <Crown size={72} />
      </motion.div>

      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.8 }}
        className="relative z-10"
      >
        <SlideToOpen onOpen={onEnter} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.7 }}
        className="mt-6 text-xs text-rose/60 tracking-widest uppercase cormorant font-medium animate-pulse-soft relative z-10"
      >
        tap the envelope to begin ✦
      </motion.div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

interface EnvelopeProps {
  onOpen?: () => void;
  isOpen?: boolean;
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SIZES: Record<string, { height: string; seal: number }> = {
  sm: { height: "h-[220px]", seal: 34 },
  md: { height: "h-[300px]", seal: 42 },
  lg: { height: "h-[380px]", seal: 52 },
};

export function Envelope({
  onOpen,
  isOpen = false,
  children,
  className,
  size = "md",
}: EnvelopeProps) {
  const s = SIZES[size];

  return (
    <div
      className={`relative flex flex-col items-center cursor-pointer select-none group ${className ?? ""}`}
      onClick={onOpen}
      role="button"
      aria-label={isOpen ? "Close envelope" : "Open envelope"}
      aria-pressed={isOpen}
    >
      <div className="relative w-full max-w-[340px]">
        <div
          className={`absolute inset-0 bg-blush rounded-3xl shadow-[0_10px_30px_rgba(113,61,75,0.18)] border border-rose/40 overflow-hidden ${s.height}`}
        />
        {/* Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-blush border-t border-rose/40 overflow-hidden"
          style={{ height: "50%", transformOrigin: "top center" }}
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpen ? -115 : 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>

        {/* Golden wax seal */}
        <div className="relative z-20">
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="relative mx-auto"
            style={{
              width: s.seal,
              height: s.seal,
              marginTop: -Math.round(s.seal / 2.6),
            }}
          >
            <div
              className={`relative w-full h-full rounded-full bg-champagne shadow-[0_6px_14px_rgba(113,61,75,0.35)] border-2 border-white/60`}
            >
              <div
                className="absolute inset-1 rounded-full bg-rose/40 border border-white/50"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-rose-700 font-serif font-bold text-xs tracking-tighter"
              >
                K
              </div>
            </div>
            <div className="absolute -top-2 -left-2 w-3 h-3 bg-rose-500 rounded-full shadow-md" />
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-rose-400 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Letter that rises when opened */}
      <motion.div
        className="mt-6 relative w-full max-w-[300px]"
        initial={{ y: 0, opacity: isOpen ? 1 : 0 }}
        animate={{ y: isOpen ? -30 : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

interface CrownProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

export function Crown({ className, size = 48, animate = true }: CrownProps) {
  const style = {
    width: size,
    height: size,
    display: "block",
  };

  return (
    <motion.div
      className={`relative z-20 ${className ?? ""}`}
      style={style}
      animate={
        animate
          ? { y: [0, -10, 0], rotate: [-2, 2, -2] }
          : { y: 0, rotate: 0 }
      }
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full fill-current text-champagne drop-shadow-[0_4px_12px_rgba(113,61,75,0.3)]"
      >
        <defs>
          <linearGradient id="crownGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF70" />
            <stop offset="50%" stopColor="#F0DCB2" />
            <stop offset="100%" stopColor="#D4AF70" />
          </linearGradient>
        </defs>
        {/* Crown base */}
        <path
          d="M10 70 Q50 78 90 70 L90 80 Q50 88 10 80 Z"
          fill="url(#crownGold)"
        />
        {/* Points */}
        <path
          d="M25 70 L30 38 L35 70 M45 70 L50 24 L55 70 M65 70 L70 38 L75 70"
          fill="none"
          stroke="url(#crownGold)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Jewels */}
        <circle cx="30" cy="34" r="4" fill="#F4C6D0" />
        <circle cx="50" cy="20" r="5.5" fill="#E8A0B0" />
        <circle cx="70" cy="34" r="4" fill="#F4C6D0" />
        <circle cx="15" cy="68" r="3" fill="#D4AF70" />
        <circle cx="85" cy="68" r="3" fill="#D4AF70" />
      </svg>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import React from "react";

interface PolaroidFrameProps {
  src: string;
  alt: string;
  caption?: string;
  rotate?: number;
  children?: React.ReactNode;
}

/**
 * Polaroid-style photo frame with ribbon, heart decoration,
 * subtle hover lift/rotate and a gentle scrapbook tilt.
 */
export function PolaroidFrame({ src, alt, caption, rotate = 0, children }: PolaroidFrameProps) {
  return (
    <motion.div
      whileHover={{ y: -8, rotate: rotate > 0 ? rotate - 2 : rotate + 2 }}
      whileTap={{ scale: 0.96 }}
      className="relative flex flex-col items-center"
    >
      <motion.div
        className="relative bg-white p-4 pb-12 rounded-sm shadow-xl border border-rose/20"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <div className="relative overflow-hidden rounded-md aspect-[4/5] bg-cream border border-rose/30 shadow-inner">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute -top-3 left-1/4 w-16 h-6 bg-burgundy rotate-6 rounded-full opacity-90 shadow-md" />
          <div className="absolute -top-1 left-1/6 w-4 h-4 bg-blush rounded-full" />
          <div className="absolute top-2 right-2 w-3 h-3 bg-champagne rounded-full shadow" />
        </div>

        {caption && (
          <p className="mt-3 text-[13px] cormorant italic text-burgundy/80">{caption}</p>
        )}

        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1">
          <Heart className="w-3 h-3 fill-burgundy animate-pulse" />
          <span className="text-[10px] text-burgundy/70">Made with love</span>
        </div>
      </motion.div>

      {children}
    </motion.div>
  );
}

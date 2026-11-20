"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface SlideToOpenProps {
  onOpen: () => void;
}

/**
 * Slide-to-open button.
 * The visitor drags the knob from left to right; dragging it past ~80%
 * triggers the onOpen callback and transitions to the next page.
 */
export function SlideToOpen({ onOpen }: SlideToOpenProps) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [dragX, setDragX] = useState(0);

  const handleDrag = (_event: PointerEvent, info: any) => {
    setDragX(Math.max(0, Math.min(info.point.x, 170)));
  };

  const handleDragEnd = () => {
    if (dragX > 135) {
      setDragX(170);
      setIsCompleted(true);
      setTimeout(() => {
        onOpen();
      }, 350);
    } else {
      setDragX(0);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-xs cormorant italic text-rose/70 tracking-widest uppercase font-medium">
        slide to open 💌
      </span>

      <div className="relative w-[200px] h-10 rounded-full bg-white/80 backdrop-blur-md border border-rose/30 shadow-[0_6px_20px_rgba(113,61,75,0.18)] overflow-hidden group">
        {/* Track fill gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blush/50 via-rose/40 to-blush/50 rounded-full opacity-70"
        />
        {/* Progress fill that grows as you drag */}
        <motion.div
          animate={{
            width: isCompleted ? "100%" : `${Math.max(0, Math.min(dragX, 170)) / 170 * 100}%`,
          }}
          transition={isCompleted ? { duration: 0.3 } : { type: "spring", stiffness: 400, damping: 25 }}
          className="absolute top-0 left-0 h-full bg-champagne/25 rounded-full pointer-events-none"
        />
        {/* Sliding knob */}
        <motion.div
          className="absolute top-1 left-1 w-8 h-8 rounded-full bg-white shadow-[0_4px_12px_rgba(113,61,75,0.3)] flex items-center justify-center border border-champagne/70 group-hover:scale-110 transition-transform duration-200"
          style={{ transform: `translateX(${isCompleted ? 170 : dragX}px)` }}
          drag="x"
          dragConstraints={{ left: 1, right: 170 }}
          dragElastic={0.25}
          dragMomentum={false}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
        >
          ▶
        </motion.div>
      </div>

      {isCompleted && (
        <span className="text-xs cormorant italic text-champagne font-semibold animate-pulse">
          Opening your royal surprise…
        </span>
      )}
    </div>
  );
}

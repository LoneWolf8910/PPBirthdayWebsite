"use client";

import { motion } from "framer-motion";

const IMG1 =
  "/imgs/Elegant%20Indian%20Portrait%20with%20Voluminous%20Hair.webp";
const IMG5 = "/imgs/Festive%20Doorway%20Portrait%20in%20Warm%20Light.png";

function Polaroid({
  src,
  alt,
  rotate,
  className,
  height = "h-[340px]md:h-[420px]",
}: {
  src: string;
  alt: string;
  rotate: number;
  className?: string;
  height?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className={`relative inline-block bg-white border border-rose/20 shadow-[0_16px_40px_rgba(113,61,75,0.18)] rounded-3xl p-3 ${className ?? ""}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="absolute -top-4 left-6 w-20 h-3 bg-blush rounded-full shadow-sm rotate-[-6deg]" />
      <div className="absolute -top-2 left-4 w-3 h-3 bg-rose-500 rounded-full" />
      <img
        src={src}
        alt={alt}
        className={`w-full ${height} object-cover rounded-2xl`}
        loading="lazy"
        decoding="async"
      />
      <div className="absolute -bottom-4 right-4 text-rose-400 drop-shadow-[0_2px_6px_rgba(113,61,75,0.3)]">
        ❤️
      </div>
    </motion.div>
  );
}

export function PhotoPair() {
  return (
    <section className="py-12 md:py-20 px-6 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-blush/25 rounded-full blur-[120px] animate-pulse-soft"
        />
        <div
          className="absolute bottom-0 right-1/5 -translate-x-1/2 w-[480px] h-[480px] bg-champagne/25 rounded-full blur-[110px] animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex-1 flex justify-center">
            <Polaroid src={IMG1} alt="Kriti Pandey elegant portrait" rotate={-3} />
          </div>
          <div className="flex-1 flex justify-center">
            <Polaroid src={IMG5} alt="Kriti Pandey festive doorway" rotate={4} className="-mt-4 md:mt-0" />
          </div>
        </div>
        <p className="mt-8 md:mt-12 cormorant text-rose/60 text-lg italic text-center max-w-md mx-auto">
          Every glance holds a piece of your magic.
        </p>
      </div>
    </section>
  );
}

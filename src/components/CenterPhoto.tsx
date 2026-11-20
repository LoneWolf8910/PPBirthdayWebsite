"use client";

import { motion } from "framer-motion";

const IMG3 = "/imgs/Warm%20Indian%20Portrait%20with%20Bindi.webp";
const IMG4 = "/imgs/Cozy%20Caf%C3%A9%20Floral%20Portrait.png";

function Polaroid({
  src,
  alt,
  rotate,
  className,
  height = "h-[360px]md:h-[460px]",
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
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-3 bg-blush rounded-full shadow-sm rotate-[-6deg]" />
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-rose-500 rounded-full" />
      <img
        src={src}
        alt={alt}
        className={`w-full ${height} object-cover rounded-2xl`}
        loading="lazy"
        decoding="async"
      />
      <div className="absolute -bottom-4 right-4 text-rose-400 drop-shadow-[0_2px_6px_rgba(113,61,75,0.3)]">
        💖
      </div>
    </motion.div>
  );
}

export function CenterPhoto({ image = IMG3, alt = "Kriti Pandey warm portrait", rotate = -2 }: { image?: string; alt?: string; rotate?: number }) {
  return (
    <section className="py-14 md:py-22 px-6 bg-[#FFFDF5] relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/5 -translate-x-1/2 w-[520px] h-[520px] bg-rose/25 rounded-full blur-[130px] animate-pulse-soft"
        />
        <div
          className="absolute bottom-0 right-1/6 -translate-x-1/2 w-[500px] h-[500px] bg-champagne/20 rounded-full blur-[120px] animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex justify-center">
          <Polaroid src={image} alt={alt} rotate={rotate} />
        </div>
      </div>
    </section>
  );
}

export function CenterPhotoCafe() {
  return <CenterPhoto image={IMG4} alt="Kriti Pandey cozy cafe portrait" rotate={3} />;
}

"use client";

import { motion } from "framer-motion";
import { FloatingTreats } from "./FloatingTreats";
import { FloatingButterflies } from "./FloatingButterflies";
import { Sparkles } from "./Sparkles";

const IMG1 =
  "/imgs/Elegant%20Indian%20Portrait%20with%20Voluminous%20Hair.webp";
const IMG2 = "/imgs/Playful%20Double%20Thumbs%20Up%20Portrait.webp";
const IMG3 = "/imgs/Warm%20Indian%20Portrait%20with%20Bindi.webp";
const IMG4 = "/imgs/Cozy%20Caf%C3%A9%20Floral%20Portrait.png";
const IMG5 = "/imgs/Festive%20Doorway%20Portrait%20in%20Warm%20Light.png";

interface PolaroidProps {
  src: string;
  alt: string;
  rotate: number;
  className?: string;
  height?: string;
}

function PolaroidFrame({
  src,
  alt,
  rotate,
  className,
  height = "h-[300px]md:h-[380px]",
}: PolaroidProps) {
  return (
    <motion.div
      whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`relative inline-block bg-white border border-rose/20 shadow-[0_14px_35px_rgba(113,61,75,0.16)] rounded-2xl p-3 ${className ?? ""}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Pink ribbon */}
      <div className="absolute -top-3 left-4 w-16 h-2.5 bg-blush rounded-full shadow-sm rotate-[-6deg]" />
      <div className="absolute -top-1 left-2 w-3 h-3 bg-rose-500 rounded-full shadow-xs" />
      <div className="absolute -top-1 left-5 w-2 h-2 bg-rose-300 rounded-full" />

      <img
        src={src}
        alt={alt}
        className={`w-full ${height} object-cover rounded-xl`}
        loading="lazy"
        decoding="async"
      />

      {/* Heart decoration */}
      <div className="absolute -bottom-3 right-3 text-rose-400 drop-shadow-[0_2px_4px_rgba(113,61,75,0.2)]">
        ❤️
      </div>
    </motion.div>
  );
}

export function PhotoGallery() {
  return (
    <section
      id="gallery"
      className="relative bg-cream overflow-hidden py-16 md:py-24"
    >
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, #F4C6D0 0, transparent 40%), radial-gradient(circle at 80% 80%, #E8A0B0 0, transparent 40%)",
        }}
      />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <FloatingTreats count={12} />
        <FloatingButterflies count={5} />
        <Sparkles count={8} />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-script text-burgundy italic mb-2"
        >
          Moments of You 📸
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-rose-600 font-cormorant text-lg mb-12 max-w-md mx-auto"
        >
          Every frame holds a piece of your magic.
        </motion.p>

        {/* Group 1: one image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-16 md:mb-24"
        >
          <PolaroidFrame src={IMG1} alt="Kriti Pandey portrait" rotate={-2} />
        </motion.div>

        {/* Group 2: two images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-end mb-16 md:mb-24"
        >
          <PolaroidFrame src={IMG2} alt="Kriti Pandey playful portrait" rotate={4} height="h-[300px]md:h-[360px]" />
          <PolaroidFrame src={IMG3} alt="Kriti Pandey warm portrait" rotate={-5} height="h-[300px]md:h-[360px]" className="md:-mt-6" />
        </motion.div>

        {/* Group 3: three images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative flex flex-col md:flex-row gap-6 justify-center items-center mb-16 md:mb-24"
        >
          <div className="relative -mx-4 md:-mx-8">
            <PolaroidFrame
              src={IMG4}
              alt="Kriti Pandey cozy cafe portrait"
              rotate={-4}
              className="md:-mt-8"
              height="h-[260px]md:h-[320px]"
            />
            <PolaroidFrame
              src={IMG5}
              alt="Kriti Pandey festive doorway portrait"
              rotate={3}
              className="md:mt-4 -ml-6 md:-ml-8"
              height="h-[260px]md:h-[320px]"
            />
            <PolaroidFrame
              src={IMG1}
              alt="Kriti Pandey elegant portrait"
              rotate={-2}
              className="md:mt-4 ml-6 md:ml-8"
              height="h-[260px]md:h-[320px]"
            />
          </div>
        </motion.div>

        {/* Group 4: all five images (scrapbook collage) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="relative p-4 md:p-8"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <PolaroidFrame
              src={IMG1}
              alt="Kriti Pandey elegant portrait"
              rotate={-3}
              height="h-[240px]md:h-[280px]"
              className="md:-mt-4"
            />
            <PolaroidFrame
              src={IMG2}
              alt="Kriti Pandey playful portrait"
              rotate={5}
              height="h-[240px]md:h-[280px]"
              className="-mt-2 md:mt-0 -ml-4 md:-ml-6"
            />
            <PolaroidFrame
              src={IMG3}
              alt="Kriti Pandey warm portrait"
              rotate={-2}
              height="h-[240px]md:h-[280px]"
              className="mt-4 md:mt-2 ml-4 md:ml-6"
            />
            <PolaroidFrame
              src={IMG4}
              alt="Kriti Pandey cozy cafe portrait"
              rotate={4}
              height="h-[240px]md:h-[280px]"
              className="mt-2 md:-mt-6 -ml-2 md:-ml-4"
            />
            <PolaroidFrame
              src={IMG5}
              alt="Kriti Pandey festive doorway portrait"
              rotate={-1}
              height="h-[240px]md:h-[280px]"
              className="mt-4 md:mt-2 ml-2 md:ml-4"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

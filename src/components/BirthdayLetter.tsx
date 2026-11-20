import { motion } from "framer-motion";
import { Heart as HeartIcon } from "lucide-react";
import React from "react";

/**
 * A beautiful letter inside an animated envelope.
 * Clicking the envelope opens it to reveal the personal birthday message.
 */
export function BirthdayLetter() {
  return (
    <section className="py-16 md:py-28 px-6 bg-blush/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/5 -translate-x-1/2 w-[520px] h-[520px] bg-white/60 rounded-full blur-[110px] animate-pulse-soft" />
        <div className="absolute bottom-0 right-1/6 -translate-x-1/2 w-[500px] h-[500px] bg-champagne/35 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="playfair text-[36px] md:text-[48px] font-bold text-burgundy mb-2 tracking-tight">
            A Letter for You 💌
          </h2>
          <p className="cormorant text-rose/70 text-lg italic">
            Open the envelope to read it.
          </p>
        </motion.div>

        <LetterEnvelope />
      </div>
    </section>
  );
}

function LetterEnvelope() {
  const [opened, setOpened] = React.useState(false);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-full max-w-lg group cursor-pointer" role="button" tabIndex={0} onClick={() => setOpened(!opened)} onKeyDown={(e) => e.key === "Enter" && setOpened(!opened)}>
        <div className="absolute inset-0 bg-blush/95 rounded-3xl shadow-[0_25px_50px_rgba(113,61,75,0.3)] border border-rose/50" />
        <motion.div
          className="envelope-flap absolute top-0 left-0 w-full h-full bg-[#f8bfcd] border-t-2 border-burgundy/70 rounded-t-3xl"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%, 0 0)",
            transformOrigin: "top center",
            transition: opened ? "none" : "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        />
        <div className="absolute top-[48%] left-0 w-full h-[52%] bg-blush/95 rounded-bl-3xl rounded-br-3xl" />
        <motion.div
          animate={opened ? { scale: 0, opacity: 0, y: 30 } : { scale: [1, 1.05, 1], rotate: [0, 4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[28%] left-1/2 -translate-x-1/2 w-18 h-18 bg-champagne rounded-full shadow-[0_0_25px_rgba(212,175,112,0.7)] border border-white/70 flex items-center justify-center overflow-hidden"
        >
          <HeartIcon className="w-9 h-9 text-burgundy z-10" />
        </motion.div>
      </div>

      {opened && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 max-w-md mx-auto"
        >
          <div className="bg-white/90 backdrop-blur p-8 md:p-12 rounded-3xl border border-rose/40 shadow-[0_15px_40px_rgba(113,61,75,0.25)] relative">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mb-6"
            >
              <h3 className="handwritten text-[28px] md:text-[36px] text-burgundy font-bold italic">
                To Our Dearest Panditaeen Ji
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="prose prose-sm max-w-none text-burgundy/80 leading-7 cormorant italic text-[16px] md:text-[18px]"
            >
              <p>Dear Panditaeen Ji,</p>
              <p>Today is your special day, and I just want to wish you all the happiness this world has to offer.</p>
              <p>May your smile never fade, your dreams become reality, and your life always be filled with beautiful memories.</p>
              <p>Keep shining, keep smiling, and never stop being the wonderful person you are.</p>
              <p>You deserve all the love, happiness and royal treatment in the world.</p>
              <p className="font-playfair font-bold text-burgundy">Happy Birthday, Your Highness! 👑❤️</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex justify-end"
            >
              <div className="handwritten text-[20px] md:text-[26px] text-rose">
                With lots of love ❤️
              </div>
            </motion.div>
          </div>

          <motion.button
            onClick={() => setOpened(false)}
            className="mt-6 px-6 py-2.5 text-xs text-burgundy/80 uppercase tracking-widest cormorant font-semibold hover:text-burgundy transition"
          >
            Close the letter
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}

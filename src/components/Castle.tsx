import { motion } from "framer-motion";

/**
 * Royal castle illustration rendered in SVG.
 * Soft pastel castle with glowing windows and a flag on top.
 */
export function Castle({ width = 320 }: { width?: number }) {
  const h = width * 0.62;
  return (
    <motion.div
      animate={{ opacity: [0, 1], y: [12, 0] }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-burgundy"
    >
      <svg width={width} height={h} viewBox="0 0 420 260" fill="none">
        <defs>
          <radialGradient id="castleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF70" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#D4AF70" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="210" cy="150" rx="170" ry="110" fill="url(#castleGlow)" />

        <path
          d="M130 220 H290 L285 150 L135 150 Z"
          fill="#F4C6D0"
          stroke="#E8A0B0"
          strokeWidth="2"
        />
        <rect x="145" y="170" width="20" height="50" fill="#FFF8ED" stroke="#E8A0B0" />
        <rect x="255" y="165" width="20" height="55" fill="#FFF8ED" stroke="#E8A0B0" />
        <rect x="195" y="185" width="30" height="35" fill="#713D4B" />

        <g fill="#F4C6D0" stroke="#E8A0B0" strokeWidth="2">
          <rect x="95" y="130" width="40" height="95" />
          <rect x="95" y="130" width="40" height="12" />
          <rect x="285" y="125" width="40" height="100" />
          <rect x="285" y="125" width="40" height="12" />
        </g>

        <path d="M95 130 L115 95 L135 130 Z" fill="#D4AF70" stroke="#B8861E" strokeWidth="2" />
        <path d="M285 125 L305 90 L325 125 Z" fill="#D4AF70" stroke="#B8861E" strokeWidth="2" />

        <g fill="#FFF8ED">
          <rect x="106" y="160" width="8" height="12" rx="1" />
          <rect x="122" y="160" width="8" height="12" rx="1" />
          <rect x="296" y="155" width="8" height="12" rx="1" />
          <rect x="312" y="155" width="8" height="12" rx="1" />
          <rect x="112" y="120" width="10" height="6" rx="1" />
          <rect x="298" y="115" width="10" height="6" rx="1" />
        </g>

        <motion.div
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)" }}
        >
          <svg width="26" height="34" viewBox="0 0 26 34" fill="none">
            <path d="M13 2 V34" stroke="#D4AF70" strokeWidth="2" strokeLinecap="round" />
            <path d="M13 8 L20 12 L13 16 Z" fill="#F4C6D0" stroke="#E8A0B0" strokeWidth="1" />
            <path d="M13 12 L22 16 L13 20 Z" fill="#E8A0B0" stroke="#E8A0B0" strokeWidth="1" opacity="0.9" />
          </svg>
        </motion.div>
      </svg>
    </motion.div>
  );
}

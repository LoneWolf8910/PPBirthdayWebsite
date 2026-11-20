import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LandingScreen } from "./components/LandingScreen";
import { MainExperience } from "./components/MainExperience";

/**
 * App entry point.
 * Starts on the magical landing screen; opening the envelope transitions
 * into the full birthday experience.
 */
export default function App() {
  const [experienceStarted, setExperienceStarted] = useState(false);

  return (
    <div className="min-h-screen bg-cream overflow-hidden">
      <AnimatePresence mode="wait">
        {!experienceStarted ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="min-h-screen"
          >
            <LandingScreen onEnter={() => setExperienceStarted(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="min-h-screen"
          >
            <MainExperience />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

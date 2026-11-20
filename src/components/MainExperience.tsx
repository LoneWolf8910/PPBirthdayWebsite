"use client";

import { ErrorBoundary } from "./ErrorBoundary";
import { FloatingTreats } from "./FloatingTreats";
import { FloatingButterflies } from "./FloatingButterflies";
import { HeroSection } from "./HeroSection";
import { PhotoPair } from "./PhotoPair";
import { CenterPhoto } from "./CenterPhoto";
import { BirthdayLetter } from "./BirthdayLetter";
import { CakeWithImage } from "./CakeWithImage";
import { CenterPhotoCafe } from "./CenterPhoto";
import { FinalSurprise } from "./FinalSurprise";

/**
 * The full birthday experience, in this order:
 * 1. Hero (Happiest Birthday) — top center
 * 2. Two photos — left & right
 * 3. A center photo
 * 4. Secret message / letter
 * 5. Make a wish (cake) — with image to the right
 * 6. A center photo (café)
 * 7. Final Surprise — at the very bottom
 *
 * Hearts float constantly across the whole main page.
 */
export function MainExperience() {
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden relative selection:bg-champagne selection:text-white">
      {/* Constant treats & butterflies across the whole main page */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <FloatingTreats count={22} />
        <FloatingButterflies count={8} />
      </div>

      <ErrorBoundary>
        <main className="scroll-smooth relative z-10">
          {/* 1. Top part: Hero — Happiest Birthday */}
          <HeroSection />

          {/* 2. Two pictures — left & right */}
          <PhotoPair />

          {/* 3. A center photo */}
          <CenterPhoto />

          {/* 4. Secret message part — letter */}
          <BirthdayLetter />

          {/* 5. Make a wish — cake, with image to the right */}
          <CakeWithImage />

          {/* 6. A picture at center */}
          <CenterPhotoCafe />

          {/* 7. Last part at the very bottom */}
          <FinalSurprise />

          <div className="h-24 md:h-32" />
        </main>
      </ErrorBoundary>
    </div>
  );
}

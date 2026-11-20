"use client";

import { useState } from "react";
import { Confetti } from "./Confetti";

export function BirthdayCake() {
  const [wishMade, setWishMade] = useState(false);

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-script text-burgundy italic mb-4">
        Make a Wish 🎂
      </h2>
      <button
        onClick={() => setWishMade(true)}
        className="rounded-full bg-burgundy px-6 py-2 text-white font-playfair"
      >
        Make a Wish ✨
      </button>
      {wishMade && <Confetti isActive={true} />}
      {wishMade && (
        <p className="mt-4 text-xl font-playfair text-burgundy italic">
          May all your wishes come true, Princess! 👑✨
        </p>
      )}
    </section>
  );
}

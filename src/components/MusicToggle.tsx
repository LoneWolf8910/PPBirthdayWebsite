"use client";

import { useCallback, useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";

interface MusicToggleProps {
  className?: string;
}

/* ---------- Soft instrumental birthday melody (Web Audio API) ---------- */

const NOTE_FREQS: Record<string, number> = {
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  F4: 349.23,
  G4: 392.00,
  A4: 440.00,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
  G5: 783.99,
};

const BEAT = 420; // ms per beat

// Gentle princess lullaby melody: [note, beats]
const MELODY: Array<[string, number]> = [
  ["G4", 1],
  ["E4", 1],
  ["D4", 1],
  ["C4", 1],
  ["D4", 1],
  ["E4", 1],
  ["G4", 1],
  ["rest", 1],
  ["E4", 1],
  ["D4", 1],
  ["C4", 1],
  ["D4", 1],
  ["E4", 1],
  ["G4", 1],
  ["A4", 1],
  ["G4", 2],
  ["rest", 2],
];

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let melodyTimer: ReturnType<typeof setTimeout> | null = null;
let noteIndex = 0;
let isPlaying = false;

function ensureAudio() {
  if (!audioCtx) {
    const Ctor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    audioCtx = new Ctor();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.16; // soft
    masterGain.connect(audioCtx.destination);
  }
  if (audioCtx.state === "suspended") {
    void audioCtx.resume();
  }
}

function playNote(note: string, delayMs: number, durationMs: number) {
  if (!audioCtx || !masterGain) return;
  const when = audioCtx.currentTime + delayMs / 1000;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "triangle"; // soft, music-box-like timbre
  osc.frequency.setValueAtTime(NOTE_FREQS[note] ?? 0, when);
  const attack = 0.02;
  const release = Math.max(0.05, durationMs / 1000 - 0.04);
  gain.gain.setValueAtTime(0, when);
  gain.gain.linearRampToValueAtTime(1, when + attack);
  gain.gain.linearRampToValueAtTime(0, when + attack + release);
  osc.connect(gain);
  gain.connect(masterGain);
  osc.start(when);
  osc.stop(when + durationMs / 1000 + 0.05);
}

function startMelody() {
  ensureAudio();
  isPlaying = true;
  noteIndex = 0;
  const step = () => {
    if (!isPlaying) return;
    const entry = MELODY[noteIndex % MELODY.length];
    const [note, beats] = entry;
    if (note !== "rest") {
      playNote(note, 0, beats * BEAT);
    }
    noteIndex++;
    const gap = noteIndex % MELODY.length === 0 ? 900 : 0;
    melodyTimer = setTimeout(step, beats * BEAT + gap);
  };
  step();
}

function stopMelody() {
  isPlaying = false;
  if (melodyTimer) {
    clearTimeout(melodyTimer);
    melodyTimer = null;
  }
  noteIndex = 0;
}

export function MusicToggle({ className }: MusicToggleProps) {
  const [on, setOn] = useState(false);
  const [started, setStarted] = useState(false);

  const toggle = useCallback(() => {
    setStarted(true);
    if (on) {
      stopMelody();
      setOn(false);
    } else {
      startMelody();
      setOn(true);
    }
  }, [on]);

  useEffect(() => {
    return () => stopMelody();
  }, []);

  return (
    <button
      onClick={toggle}
      aria-label={on ? "Pause music" : "Play music"}
      className={`
        relative flex items-center justify-center w-12 h-12 rounded-full
        bg-white/80 backdrop-blur-md border border-rose/30
        text-rose-600 hover:text-burgundy hover:bg-white
        transition-all duration-200 active:scale-95 focus:outline-none
        shadow-md ${className ?? ""}
      `}
    >
      {!started && (
        <>
          <Play className="w-5 h-5 fill-current text-rose-500" />
          <div className="absolute -inset-0.5 rounded-full bg-rose/20 animate-pulse" />
        </>
      )}
      {started && !on && (
        <>
          <Play className="w-5 h-5 fill-current text-rose-500" />
          <div className="absolute -inset-0.5 rounded-full bg-cream/60" />
        </>
      )}
      {started && on && (
        <>
          <Pause className="w-5 h-5 fill-current text-burgundy" />
          <div className="absolute -inset-0.5 rounded-full bg-rose/30 animate-pulse" />
        </>
      )}
    </button>
  );
}

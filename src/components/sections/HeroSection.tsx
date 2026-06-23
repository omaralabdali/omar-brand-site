"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TYPING_LINES = [
  "> initializing Omar.exe...",
  "Engineer. Builder. AI Educator.",
  "> Building the future, one agent at a time.",
];

export default function HeroSection() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [display, setDisplay] = useState("");
  const glitchRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const current = TYPING_LINES[lineIdx];
    const speed = deleting ? 20 : 55;

    const timer = setTimeout(() => {
      if (deleting) {
        const next = charIdx - 1;
        setCharIdx(next);
        setDisplay(current.substring(0, next));
        if (next <= 0) {
          setDeleting(false);
          setLineIdx((lineIdx + 1) % TYPING_LINES.length);
        }
      } else {
        const next = charIdx + 1;
        setCharIdx(next);
        setDisplay(current.substring(0, next));
        if (next >= current.length) {
          setTimeout(() => setDeleting(true), 2000);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, lineIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(57,255,20,0.06), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(57,255,20,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-[650px] px-6 py-8">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 w-[150px] h-[150px] rounded-full bg-surface border-2 border-border overflow-hidden"
          style={{
            boxShadow: "0 0 0 3px #1a3327, 0 0 60px rgba(57,255,20,0.15)",
          }}
        >
          <img
            src="/omar-photo.png"
            alt="Omar"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          ref={glitchRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-display text-[4.5rem] md:text-[5rem] font-bold leading-none tracking-tight text-text"
          whileHover={{
            x: [0, -3, 2, -1, 0],
            filter: [
              "hue-rotate(0deg)",
              "hue-rotate(20deg)",
              "hue-rotate(-10deg)",
              "hue-rotate(5deg)",
              "hue-rotate(0deg)",
            ],
            transition: { duration: 0.3 },
          }}
        >
          OMAR
        </motion.h1>

        {/* Typewriter */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="font-display text-base md:text-lg text-highlight mt-3 mb-6 h-7"
        >
          {display}
          <span className="inline-block w-2 h-[1.2em] bg-highlight ml-1 align-text-bottom animate-pulse" />
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-base md:text-lg text-muted leading-relaxed mb-8 max-w-[480px] mx-auto"
        >
          AI engineer & educator. Building autonomous multi-agent systems.
          Teaching Claude Code and AI automation to developers who want to ship,
          not just talk.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.65 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#videos"
            className="font-display text-sm font-bold uppercase tracking-wider px-6 py-3 bg-highlight text-bg hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] transition-shadow"
          >
            ▶ Watch on YouTube
          </a>
          <a
            href="#blog"
            className="font-display text-sm font-bold uppercase tracking-wider px-6 py-3 border border-border text-highlight hover:border-highlight hover:bg-[rgba(57,255,20,0.05)] transition-colors"
          >
            Read the Blog
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const VIDEOS = [
  { title: "Coming Soon", desc: "Subscribe to catch the first uploads." },
  {
    title: "Claude Code Series",
    desc: "Zero to autonomous agent in 5 episodes.",
  },
  {
    title: "Build Logs",
    desc: "Watch Hermes & Mission Control get built from scratch.",
  },
];

export default function VideosSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="videos" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-xs text-highlight uppercase tracking-[2.5px] mb-2">
          Latest Transmissions
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text leading-tight mb-10">
          YouTube
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {VIDEOS.map(({ title, desc }) => (
            <div
              key={title}
              className="bg-surface border border-border rounded-lg p-8 text-center"
            >
              <div className="text-3xl mb-4">📹</div>
              <h3 className="font-display text-base font-bold text-text mb-1">
                {title}
              </h3>
              <p className="text-sm text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { num: "13", label: "AI Agents" },
  { num: "24/7", label: "Uptime" },
  { num: "5+", label: "AI Models" },
  { num: "50+", label: "Skills Built" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6 max-w-4xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-xs text-highlight uppercase tracking-[2.5px] mb-2">
          About
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text leading-tight mb-4">
          I don&apos;t theorize about AI.
          <br />I deploy it.
        </h2>
        <p className="text-muted leading-relaxed max-w-xl mb-10">
          EEA engineering student at UCBL Lyon 1. Originally from Oman. I build
          real AI systems — not demos, not &quot;proof of concepts.&quot; Hermes
          Agent is a 13-agent autonomous framework running 24/7 on a home server.
          My content bridges the gap between &quot;AI will change
          everything&quot; and &quot;here&apos;s how to build it.&quot;
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ num, label }) => (
            <div
              key={label}
              className="text-center p-6 bg-surface border border-border rounded-lg"
            >
              <div className="font-display text-3xl font-bold text-text">
                {num}
              </div>
              <div className="text-sm text-muted mt-1">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

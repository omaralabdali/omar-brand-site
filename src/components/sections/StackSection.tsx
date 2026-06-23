"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TOOLS = [
  {
    group: "AI Models",
    items: ["Claude (Sonnet 4, Opus)", "DeepSeek V4", "Gemini 2.5 Pro", "GPT-5 / o4-mini"],
  },
  {
    group: "Dev Tools",
    items: ["VS Code / Cursor", "Claude Code CLI", "Codex CLI", "GitHub"],
  },
  {
    group: "Hardware",
    items: ["MSI Sword 16 HX", "Acer 14 (24/7 server)", "Ubuntu 24.04", "ZeroTier"],
  },
  {
    group: "Content",
    items: ["YouTube", "X / Twitter", "LinkedIn", "Beehiiv"],
  },
];

export default function StackSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="uses" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-xs text-highlight uppercase tracking-[2.5px] mb-2">
          Tool Stack
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text leading-tight mb-10">
          What I Use
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOOLS.map(({ group, items }) => (
            <div
              key={group}
              className="bg-surface border border-border rounded-lg p-5"
            >
              <h4 className="font-display text-[11px] text-highlight uppercase tracking-[2px] mb-3 pb-3 border-b border-border">
                {group}
              </h4>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

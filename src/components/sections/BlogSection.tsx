"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const POSTS = [
  {
    title: "How I Built a 13-Agent System on a Laptop",
    date: "Jun 15, 2026",
    tags: ["Hermes", "Claude Code"],
    summary:
      "From zero to autonomous — the architecture, the failures, and the moment it all clicked.",
  },
  {
    title: "Claude Code Is the Developer's New Best Friend",
    date: "Jun 8, 2026",
    tags: ["AI Tools", "Opinion"],
    summary: "Real workflows, not hype. Why Claude Code changes how developers ship.",
  },
  {
    title: "Model Routing: Why One LLM Isn't Enough",
    date: "May 30, 2026",
    tags: ["AI Tools"],
    summary:
      "The case for multi-model orchestration — cost, quality, and speed trade-offs.",
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 md:py-32 px-6 max-w-4xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-xs text-highlight uppercase tracking-[2.5px] mb-2">
          Writing
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text leading-tight mb-10">
          Blog
        </h2>

        <div className="space-y-4">
          {POSTS.map(({ title, date, tags, summary }) => (
            <div
              key={title}
              className="bg-surface border border-border rounded-lg p-5 flex flex-wrap md:flex-nowrap justify-between gap-4"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-display text-[10px] text-highlight uppercase tracking-wider bg-[rgba(57,255,20,0.06)] px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-base font-bold text-text">
                  {title}
                </h3>
                <p className="text-sm text-muted mt-1">{summary}</p>
              </div>
              <div className="font-display text-xs text-muted whitespace-nowrap">
                {date}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PROJECTS = [
  {
    title: "Hermes Agent",
    desc: "Multi-agent AI orchestration with persistent memory, skill system, cron scheduling, and autonomous workflows.",
    tags: ["Python", "Multi-Agent", "Linux", "LLMs"],
  },
  {
    title: "Mission Control",
    desc: "Real-time React dashboard for monitoring AI agent fleets — health, costs, task orchestration, live kanban.",
    tags: ["Next.js", "React", "Tailwind", "Dashboard"],
  },
  {
    title: "Forge Squad",
    desc: "Autonomous coding agents: Claude Code + Codex orchestrated for automated PR creation and adversarial code review.",
    tags: ["CI/CD", "GitHub", "Agents"],
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-xs text-highlight uppercase tracking-[2.5px] mb-2">
          The Lab
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text leading-tight mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {PROJECTS.map(({ title, desc, tags }) => (
            <motion.div
              key={title}
              whileHover={{ y: -4 }}
              className="bg-surface border border-border rounded-lg p-6 transition-colors hover:border-[rgba(57,255,20,0.25)]"
            >
              <h3 className="font-display text-lg font-bold text-text mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-display text-[10px] text-highlight uppercase tracking-wider bg-[rgba(57,255,20,0.06)] px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

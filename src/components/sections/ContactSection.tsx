"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SOCIALS = [
  { label: "X / Twitter", href: "https://x.com/omar4aitech" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "GitHub", href: "#" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 px-6 max-w-3xl mx-auto text-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-xs text-highlight uppercase tracking-[2.5px] mb-2">
          Contact
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text leading-tight mb-10">
          Let&apos;s Build
        </h2>

        <div className="grid md:grid-cols-2 gap-5 text-left mb-10">
          <div className="bg-surface border border-border rounded-lg p-6">
            <h3 className="font-display text-base font-bold text-text mb-2">
              Collab &amp; Media
            </h3>
            <p className="text-sm text-muted mb-3">
              Podcasts, interviews, speaking. I&apos;m open to media inquiries.
            </p>
            <p className="font-display text-sm text-highlight">
              omar@example.com
            </p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-6">
            <h3 className="font-display text-base font-bold text-text mb-2">
              Consulting
            </h3>
            <p className="text-sm text-muted mb-3">
              Need an AI agent system? Claude Code workflow? Let&apos;s talk.
            </p>
            <p className="font-display text-sm text-highlight">
              Available for projects
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          {SOCIALS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-display text-xs text-muted uppercase tracking-wider hover:text-highlight transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

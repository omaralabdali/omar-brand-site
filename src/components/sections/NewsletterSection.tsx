"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function NewsletterSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="newsletter" className="py-24 md:py-32 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto relative overflow-hidden bg-surface border border-border rounded-xl p-10 md:p-14 text-center"
      >
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(57,255,20,0.06), transparent 70%)",
          }}
        />

        <p className="relative z-10 font-display text-xs text-highlight uppercase tracking-[2.5px] mb-2">
          Newsletter
        </p>
        <h2 className="relative z-10 font-display text-2xl md:text-3xl font-bold text-text leading-tight mb-2">
          Get the build logs
        </h2>
        <p className="relative z-10 text-muted mb-6 max-w-sm mx-auto">
          No fluff, no AI hype. Just what I&apos;m actually building, shipped to
          your inbox.
        </p>

        <form
          className="relative z-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            (e.target as HTMLFormElement).reset();
          }}
        >
          <input
            type="email"
            placeholder="you@email.com"
            className="flex-1 bg-bg border border-border rounded-md px-4 py-3 text-sm text-text font-display outline-none focus:border-highlight transition-colors"
          />
          <button
            type="submit"
            className="font-display text-sm font-bold uppercase tracking-wider px-6 py-3 bg-highlight text-bg hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] transition-shadow"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
}

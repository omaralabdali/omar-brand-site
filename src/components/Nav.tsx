"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Lab", href: "#projects" },
  { label: "Videos", href: "#videos" },
  { label: "Blog", href: "#blog" },
  { label: "Stack", href: "#uses" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${
        scrolled ? "shadow-lg shadow-black/30" : ""
      }`}
      style={{
        background: "rgba(8,15,11,0.88)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid #1a3327",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        <a
          href="#"
          className="font-display font-bold text-lg text-text"
        >
          Omar<span className="text-highlight">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted hover:text-highlight transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#newsletter"
            className="text-sm font-semibold px-4 py-2 rounded bg-highlight text-bg hover:shadow-[0_0_25px_rgba(57,255,20,0.15)] transition-shadow"
          >
            Subscribe
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6L18 18M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-border px-6 py-4 space-y-3"
          style={{ background: "rgba(8,15,11,0.95)", backdropFilter: "blur(16px)" }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted hover:text-highlight transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#newsletter"
            onClick={() => setOpen(false)}
            className="inline-block text-sm font-semibold px-4 py-2 rounded bg-highlight text-bg"
          >
            Subscribe
          </a>
        </div>
      )}
    </nav>
  );
}

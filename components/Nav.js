"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#experience", label: "The Experience" },
  { href: "#services", label: "Offerings" },
  { href: "#gallery", label: "Gallery" },
  { href: "#process", label: "The Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#inquiry", label: "Inquire" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-silk ${
        scrolled ? "bg-ivory/90 backdrop-blur-md border-b border-taupe/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#top" className="flex flex-col leading-none">
          <span className="text-sm md:text-base tracking-widest2 uppercase text-espresso">
            Sahara <span className="text-champagne">&amp;</span> Co.
          </span>
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-taupe mt-1">
            Weddings &amp; Events
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.18em] uppercase text-espresso/80 hover:text-champagne transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#inquiry"
          className="hidden md:inline-flex items-center border border-espresso px-5 py-2.5 text-xs tracking-[0.18em] uppercase text-espresso hover:bg-espresso hover:text-ivory transition-colors duration-300"
        >
          Book an Inquiry
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block h-px w-6 bg-espresso transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-espresso transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-ivory border-b border-taupe/30"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-[0.15em] uppercase text-espresso/80"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#inquiry"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center border border-espresso px-5 py-3 text-xs tracking-[0.18em] uppercase text-espresso mt-2"
              >
                Book an Inquiry
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-espresso">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=80"
          alt="Long table set for an evening wedding reception, candlelit under string lights"
          className="h-full w-full object-cover opacity-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-espresso/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[0.7rem] tracking-widest2 uppercase text-champagne mb-7"
        >
          Weddings &amp; Events, Curated
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-extralight leading-[1.15] text-ivory"
        >
          Occasions, held with
          <span className="block italic font-light text-champagne mt-1">quiet, deliberate grace.</span>
        </motion.h1>

        <motion.svg
          viewBox="0 0 260 12"
          className="w-40 md:w-56 mt-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          <motion.path
            d="M2 6 C 60 -2, 100 14, 130 6 S 220 -2, 258 6"
            fill="none"
            stroke="#D8C5A9"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.svg>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg text-sm md:text-base text-ivory/80 font-light leading-relaxed"
        >
          Sahara &amp; Co. designs weddings, corporate affairs, and private celebrations for
          those who notice detail. From first inquiry to final farewell, every element is
          considered.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#inquiry"
            className="inline-flex items-center justify-center bg-ivory text-espresso px-8 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-champagne transition-colors duration-300 min-w-[220px]"
          >
            Book an Inquiry
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center border border-ivory/50 text-ivory px-8 py-3.5 text-xs tracking-[0.2em] uppercase hover:border-champagne hover:text-champagne transition-colors duration-300 min-w-[220px]"
          >
            View Event Gallery
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase text-ivory/60">Scroll</span>
        <span className="h-10 w-px bg-ivory/40" />
      </motion.div>
    </section>
  );
}

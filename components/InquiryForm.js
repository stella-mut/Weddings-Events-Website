"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

const inputClasses =
  "w-full bg-transparent border-b border-taupe px-0 py-3 text-sm text-espresso placeholder:text-taupe/70 focus:border-espresso outline-none transition-colors duration-300";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="inquiry" className="py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-content mx-auto grid md:grid-cols-5 gap-14 md:gap-20">
        <Reveal className="md:col-span-2">
          <p className="eyebrow mb-5">Booking Inquiry</p>
          <h2 className="text-3xl md:text-4xl font-extralight leading-tight mb-6">
            Tell us about your occasion.
          </h2>
          <span className="flourish w-20 mb-6" />
          <p className="text-espresso/70 font-light leading-relaxed mb-8">
            Share a few details and we'll respond within two business days with next
            steps and availability for your date.
          </p>
          <div className="space-y-4 text-sm text-espresso/70">
            <p>
              <span className="block text-[0.65rem] tracking-[0.2em] uppercase text-taupe mb-1">
                Studio Hours
              </span>
              Monday–Friday, 9am–6pm
            </p>
            <p>
              <span className="block text-[0.65rem] tracking-[0.2em] uppercase text-taupe mb-1">
                Email
              </span>
              hello@saharaandco.com
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-3">
          <div className="relative min-h-[520px]">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center h-full min-h-[520px] border border-champagne/60 px-8"
                >
                  <span className="flourish w-16 mb-6" />
                  <h3 className="text-2xl font-extralight mb-3">Thank you.</h3>
                  <p className="text-espresso/70 font-light max-w-sm">
                    Your inquiry has been received. A member of our studio will be in
                    touch within two business days.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="grid sm:grid-cols-2 gap-x-8 gap-y-7"
                >
                  <label className="flex flex-col gap-1 sm:col-span-1">
                    <span className="text-[0.65rem] tracking-[0.18em] uppercase text-taupe">
                      Full Name
                    </span>
                    <input required type="text" name="name" placeholder="Jordan Alvarez" className={inputClasses} />
                  </label>

                  <label className="flex flex-col gap-1 sm:col-span-1">
                    <span className="text-[0.65rem] tracking-[0.18em] uppercase text-taupe">
                      Email
                    </span>
                    <input required type="email" name="email" placeholder="you@email.com" className={inputClasses} />
                  </label>

                  <label className="flex flex-col gap-1 sm:col-span-1">
                    <span className="text-[0.65rem] tracking-[0.18em] uppercase text-taupe">
                      Event Date
                    </span>
                    <input type="date" name="date" className={inputClasses} />
                  </label>

                  <label className="flex flex-col gap-1 sm:col-span-1">
                    <span className="text-[0.65rem] tracking-[0.18em] uppercase text-taupe">
                      Event Type
                    </span>
                    <select name="eventType" defaultValue="" className={inputClasses}>
                      <option value="" disabled>
                        Select one
                      </option>
                      <option>Wedding</option>
                      <option>Corporate Event</option>
                      <option>Private Celebration</option>
                      <option>Editorial / Special Event</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label className="flex flex-col gap-1 sm:col-span-1">
                    <span className="text-[0.65rem] tracking-[0.18em] uppercase text-taupe">
                      Location
                    </span>
                    <input type="text" name="location" placeholder="City, venue, or region" className={inputClasses} />
                  </label>

                  <label className="flex flex-col gap-1 sm:col-span-1">
                    <span className="text-[0.65rem] tracking-[0.18em] uppercase text-taupe">
                      Guest Count
                    </span>
                    <input type="number" min="1" name="guests" placeholder="e.g. 120" className={inputClasses} />
                  </label>

                  <label className="flex flex-col gap-1 sm:col-span-2">
                    <span className="text-[0.65rem] tracking-[0.18em] uppercase text-taupe">
                      Your Vision
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about the occasion, the feeling you're after, and anything else we should know."
                      className={`${inputClasses} resize-none`}
                    />
                  </label>

                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center bg-espresso text-ivory px-9 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-champagne hover:text-espresso transition-colors duration-300 disabled:opacity-60"
                    >
                      {loading ? "Sending…" : "Submit Inquiry"}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

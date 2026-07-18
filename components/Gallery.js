"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Weddings", "Corporate", "Private", "Editorial"];

const images = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    caption: "The Hartley–Osei Wedding",
    tag: "Weddings",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80",
    caption: "Vow Renewal, Amalfi Terrace",
    tag: "Weddings",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f29b1fe0ac?auto=format&fit=crop&w=900&q=80",
    caption: "Meridian Capital, Annual Gala",
    tag: "Corporate",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
    caption: "Reception Details, Ochre & Ivory",
    tag: "Weddings",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
    caption: "The Delacroix 60th Birthday",
    tag: "Private",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
    caption: "Product Launch, Studio Noir",
    tag: "Corporate",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=80",
    caption: "Styled Editorial, Desert Bloom",
    tag: "Editorial",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=900&q=80",
    caption: "The Whitfield Anniversary",
    tag: "Private",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
    caption: "Ceremony, Cypress Grove",
    tag: "Weddings",
    span: "",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? images : images.filter((img) => img.tag === active);

  return (
    <section id="gallery" className="py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-14">
          <div>
            <p className="eyebrow mb-5">Featured Gallery</p>
            <h2 className="text-3xl md:text-4xl font-extralight leading-tight max-w-lg">
              A closer look at recent occasions.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs tracking-[0.14em] uppercase px-4 py-2 border transition-colors duration-300 ${
                  active === cat
                    ? "bg-espresso text-ivory border-espresso"
                    : "border-taupe text-espresso/70 hover:border-champagne hover:text-espresso"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img) => (
              <motion.figure
                layout
                key={img.caption}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden group ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="h-full w-full object-cover transition-transform duration-700 ease-silk group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/0 to-espresso/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-silk">
                  <span className="text-[0.6rem] tracking-[0.2em] uppercase text-champagne block mb-1">
                    {img.tag}
                  </span>
                  <span className="text-ivory text-sm font-light">{img.caption}</span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

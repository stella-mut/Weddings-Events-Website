import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-10 bg-espresso overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=2000&q=80"
          alt="Soft floral arrangement detail"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-espresso/70" />

      <Reveal className="relative z-10 max-w-content mx-auto text-center">
        <span className="flourish w-16 mx-auto mb-8" />
        <h2 className="text-3xl md:text-5xl font-extralight text-ivory leading-tight max-w-2xl mx-auto">
          Let&rsquo;s create something
          <span className="block italic text-champagne mt-1">unforgettable.</span>
        </h2>
        <a
          href="#inquiry"
          className="inline-flex items-center justify-center bg-ivory text-espresso px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-champagne transition-colors duration-300 mt-11"
        >
          Start Your Inquiry
        </a>
      </Reveal>
    </section>
  );
}

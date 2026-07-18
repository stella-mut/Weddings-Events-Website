import Reveal from "@/components/Reveal";

const quotes = [
  {
    quote:
      "From the first call, it felt like they already understood the wedding we hadn't fully articulated yet. Every detail on the day felt like us.",
    name: "Amara & Julian Osei",
    role: "Wedding, October 2025",
  },
  {
    quote:
      "Our annual gala has never run this smoothly. The team anticipated problems before we knew they existed.",
    name: "Priya Nandakumar",
    role: "Meridian Capital, Corporate Gala",
  },
  {
    quote:
      "My mother's 70th felt like a five-star occasion without losing an ounce of warmth. Guests are still talking about it.",
    name: "Diego Fontaine",
    role: "Private Celebration",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-36 px-6 md:px-10 bg-champagne/15">
      <div className="max-w-content mx-auto">
        <Reveal className="max-w-xl mb-16 md:mb-20">
          <p className="eyebrow mb-5">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-extralight leading-tight">
            Told, in their words.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {quotes.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12} className="flex flex-col">
              <span className="text-4xl font-extralight text-champagne leading-none mb-4">
                &ldquo;
              </span>
              <p className="text-espresso/80 font-light leading-relaxed mb-8 flex-1">
                {t.quote}
              </p>
              <div className="pt-5 border-t border-taupe/40">
                <p className="text-sm tracking-wide">{t.name}</p>
                <p className="text-xs text-taupe mt-1 uppercase tracking-[0.14em]">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

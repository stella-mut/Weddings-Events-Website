import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Weddings",
    desc: "Full design and coordination for engagements, rehearsal dinners, ceremonies, and receptions — intimate or grand.",
  },
  {
    title: "Corporate Events",
    desc: "Product launches, galas, and leadership gatherings that carry your brand's tone into physical space.",
  },
  {
    title: "Private Celebrations",
    desc: "Milestone birthdays, anniversaries, and family occasions, planned with the same rigor as our largest weddings.",
  },
  {
    title: "Editorial & Special Events",
    desc: "Styled shoots, brand activations, and one-of-a-kind affairs built for a distinct creative vision.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 px-6 md:px-10 bg-espresso text-ivory">
      <div className="max-w-content mx-auto">
        <Reveal className="max-w-xl mb-16 md:mb-20">
          <p className="text-[0.7rem] tracking-widest2 uppercase text-champagne mb-5">
            Offerings
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight leading-tight">
            Every occasion, considered on its own terms.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ivory/15">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08} className="bg-espresso p-8 md:p-9 group">
              <h3 className="text-lg font-light tracking-wide mb-4 group-hover:text-champagne transition-colors duration-300">
                {service.title}
              </h3>
              <span className="block h-px w-10 bg-champagne/60 mb-5 group-hover:w-16 transition-all duration-500 ease-silk" />
              <p className="text-sm text-ivory/65 font-light leading-relaxed">{service.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 md:mt-16 border-t border-ivory/15 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-ivory/70 font-light max-w-xl">
            Prefer something bespoke? We build custom packages and multi-day experiences
            around whatever the occasion calls for.
          </p>
          <a
            href="#inquiry"
            className="inline-flex items-center justify-center border border-champagne text-champagne px-7 py-3 text-xs tracking-[0.18em] uppercase hover:bg-champagne hover:text-espresso transition-colors duration-300 shrink-0"
          >
            Discuss a Custom Package
          </a>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="experience" className="py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-content mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <Reveal>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1400&q=80"
              alt="Planner arranging fresh florals in soft natural light"
              className="w-full h-[520px] object-cover"
            />
            <div className="hidden md:block absolute -bottom-8 -right-8 w-2/3 border border-champagne p-6 bg-ivory">
              <p className="text-[2.75rem] font-extralight leading-none text-espresso">14</p>
              <p className="text-[0.65rem] tracking-[0.25em] uppercase text-taupe mt-1">
                Years designing celebrated occasions
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="eyebrow mb-5">The Experience</p>
          <h2 className="text-3xl md:text-4xl font-extralight leading-tight mb-6">
            We don&rsquo;t plan events. We compose them.
          </h2>
          <span className="flourish w-20 mb-6" />
          <p className="text-espresso/75 font-light leading-relaxed mb-5">
            Sahara &amp; Co. began with a simple belief: the best celebrations feel inevitable —
            as if they could not have unfolded any other way. We work in small numbers of
            engagements each season, which means every detail, from the weight of the
            place cards to the pacing of the evening, receives our full attention.
          </p>
          <p className="text-espresso/75 font-light leading-relaxed mb-8">
            Our studio pairs meticulous logistics with an editorial eye, drawing on
            relationships with the region&rsquo;s finest florists, chefs, and venues to build
            something that is entirely, recognizably yours.
          </p>
          <ul className="space-y-3">
            {[
              "Dedicated lead planner from first call to last dance",
              "Curated network of trusted vendors and venues",
              "Design-forward approach, tailored to your story",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-espresso/80">
                <span className="mt-2 h-1 w-1 rounded-full bg-champagne shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Inquiry",
    desc: "Share your date, vision, and guest count through our short inquiry form.",
  },
  {
    n: "02",
    title: "Consultation",
    desc: "A conversation to understand your story, priorities, and the feeling you want guests to leave with.",
  },
  {
    n: "03",
    title: "Planning",
    desc: "Design, budget, and vendor selection unfold together, with regular check-ins along the way.",
  },
  {
    n: "04",
    title: "Event Day",
    desc: "Full on-site coordination, so you and your family are fully present for every moment.",
  },
  {
    n: "05",
    title: "Follow-up",
    desc: "Vendor close-out, final details, and a keepsake recap of the day we built together.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <Reveal className="max-w-xl mb-16 md:mb-20">
          <p className="eyebrow mb-5">The Process</p>
          <h2 className="text-3xl md:text-4xl font-extralight leading-tight">
            A clear path, from first message to last toast.
          </h2>
        </Reveal>

        <div className="relative grid md:grid-cols-5 gap-10 md:gap-6">
          <div className="hidden md:block absolute top-[14px] left-0 right-0 h-px bg-taupe/40" />
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1} className="relative">
              <div className="flex md:flex-col items-start md:items-start gap-4 md:gap-0">
                <span className="relative z-10 md:mb-6 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ivory border border-champagne text-[0.65rem] text-espresso">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-base font-light tracking-wide mb-2">{step.title}</h3>
                  <p className="text-sm text-espresso/65 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

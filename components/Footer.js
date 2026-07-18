const navLinks = [
  { href: "#experience", label: "The Experience" },
  { href: "#services", label: "Offerings" },
  { href: "#gallery", label: "Gallery" },
  { href: "#process", label: "The Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#inquiry", label: "Inquire" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory/70 px-6 md:px-10 pt-16 pb-8 border-t border-ivory/10">
      <div className="max-w-content mx-auto grid md:grid-cols-3 gap-12 md:gap-8 mb-14">
        <div>
          <p className="text-base tracking-widest2 uppercase text-ivory mb-2">
            Sahara <span className="text-champagne">&amp;</span> Co.
          </p>
          <p className="text-xs tracking-[0.25em] uppercase text-ivory/40 mb-6">
            Weddings &amp; Events
          </p>
          <p className="text-sm font-light leading-relaxed max-w-xs text-ivory/60">
            Considered celebrations, designed with quiet luxury and meticulous care.
          </p>
        </div>

        <div>
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-taupe mb-5">
            Navigate
          </p>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-light hover:text-champagne transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-taupe mb-5">
            Connect
          </p>
          <a
            href="mailto:hello@saharaandco.com"
            className="text-sm font-light hover:text-champagne transition-colors duration-300 block mb-5"
          >
            hello@saharaandco.com
          </a>
          <ul className="flex gap-5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs tracking-[0.14em] uppercase hover:text-champagne transition-colors duration-300"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-content mx-auto border-t border-ivory/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-ivory/40">
          © {new Date().getFullYear()} Sahara &amp; Co. All rights reserved.
        </p>
        <p className="text-xs text-ivory/40">Designed with quiet intention.</p>
      </div>
    </footer>
  );
}

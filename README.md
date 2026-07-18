# Sahara & Co. — Weddings & Events

A luxurious, one-page site for booking inquiries and event galleries, built with
Next.js (App Router), Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Structure

- `app/layout.js` — loads Inter (via `next/font/google`) and global metadata
- `app/page.js` — assembles all sections
- `app/globals.css` — base styles, focus states, custom scrollbar, the signature "flourish" rule
- `components/` — one file per section (Nav, Hero, About, Services, Gallery, Process,
  Testimonials, InquiryForm, FinalCTA, Footer) plus a shared `Reveal.js` scroll-animation wrapper

## Customizing

- **Colors** live in `tailwind.config.js` under `theme.extend.colors` (`ivory`, `espresso`,
  `taupe`, `champagne`, `sage`) — change them there and they cascade everywhere.
- **Copy** is inline in each component — search for the section you want to edit.
- **Images** currently pull from Unsplash by URL for placeholder photography. Swap the
  `src` values in `Hero.js`, `About.js`, `Gallery.js`, and `FinalCTA.js` for your own
  photography (drop files into `public/` and reference them as `/your-file.jpg`).
- **Inquiry form**: `InquiryForm.js` currently simulates a submission client-side. Wire
  the `handleSubmit` function up to your email service, form backend (e.g. Formspree,
  Resend, a serverless route in `app/api/inquiry/route.js`), or CRM of choice.
- **Gallery filters** are defined in `components/Gallery.js` — add or remove categories
  and images in the `categories` and `images` arrays.

## Notes

- Fully responsive from mobile through desktop.
- Respects `prefers-reduced-motion`.
- Visible keyboard focus states on all interactive elements.

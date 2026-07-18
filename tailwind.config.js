/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F3EE",
        espresso: "#29231F",
        taupe: "#B8AAA0",
        champagne: "#D8C5A9",
        sage: "#A5A99A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      maxWidth: {
        content: "1240px",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

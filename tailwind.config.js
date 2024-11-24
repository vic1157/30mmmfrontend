/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px", // Custom breakpoint for 360px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "jesus-hero": "url('/jesus_hero.avif')",
        "donate-desktop": "url('/donate-horiz.png')",
        "donate-mobile": "url('/donate-vert.png')",
        "lesson-card": "url('/week-card.png')",
      },
      backgroundSize: {
        "w-100-h-auto": "100% auto",
      },
      colors: {
        "placeholder-gray": "#a7afb6",
        "title-black": "#13171B",
        "description-gray": "#5D6B84",
        "gray-bg": "#F2F3F5",
        formfield: "#F9FAFB",
        "primary-red": "#AF3634",
        "accent-red": "#64261C",
        "almost-black": "#1A1A1A",
        "off-white": "#FAFCFE",
      },
      keyframes: {
        roll: {
          "0%": { transform: "scale(0.96) rotate(0deg)", opacity: 1 },
          "50%": { transform: "scale(1.04) rotate(180deg)", opacity: 0.8 },
          "100%": { transform: "scale(0.90) rotate(360deg)", opacity: 1 },
        },
      },
      animation: {
        roll: "roll 1.5s ease-in-out infinite",
      },
      backgroundPosition: {
        "top-4": "left 20% top 0",
        "right-1": "left 20% top 0",
        "right-2": "left 25% top 0",
        "left-1": "left 2rem top 0",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

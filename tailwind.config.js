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
      },
      colors: {
        "placeholder-gray": "#a7afb6",
        "description-gray": "#5D6B84",
        "gray-bg": "#F2F3F5",
        formfield: "#F9FAFB",
        "primary-red": "#AF3634",
        "almost-black": "#1A1A1A",
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
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
  ],
};

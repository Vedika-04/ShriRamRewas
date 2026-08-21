/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeyellow: "#f5e60d",
        themepurple: "#502ec3",
        themecream: "#FAF5E9",
        themelight: "#FFFDF8",
        themedarkbrown: "#3B2418",
        themebrown: "#7A4E28",
        themegold: "#D4A017",
        themegoldhover: "#B8860B",
        themelightgold: "#F4E2A0",
        themegray: "#6F6257",
        themelightgray: "#9A8E84",
        themeborder: "#B78A5A",
        themeorange: "#D9781A",
      },
    },
  },
  plugins: [],
};

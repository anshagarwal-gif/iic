/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: "rgba(255, 255, 255, 0.75)",
        blueviolet: "#9747ff",
        silver: "#aeb7bd",
        blanchedalmond: "#ffefca",
      },
      spacing: {},
      fontFamily: {
        "whyte-inktrap": "'Whyte Inktrap'",
        inter: "Inter",
        "source-sans-pro": "'Source Sans Pro'",
        "barlow-semi-condensed": "'Barlow Semi Condensed'",
        "goblin":"'Goblin One'",
        "sen": "'Sen'",
      },
      borderRadius: {
        "26xl-6": "45.6px",
      },
    },
    fontSize: {
      "5xl": "1.5rem",
      "45xl": "4rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};


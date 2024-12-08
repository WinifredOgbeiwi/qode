import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          white: "#f8f5ff",
          primary1: "#2e104f" /* Deepest purple */,
          primary2: "#46217a" /* Very dark purple */,
          primary3: "#6F5AF0" /* Dark purple */,
          primary4: "#7b6df5" /* Rich purple */,
          primary5: "#9a87f9" /* Vivid purple */,
          primary6: "#b7a3fd" /* Light vivid purple */,
          primary7: "#d2c5ff" /* Soft lavender */,
          primary8: "#e7e3ff" /* Pale lavender */,
          primary9: "#f5f3ffb3" /* Almost white lavender */,
        },
        secondary: {
          lightblue: "#EBF5FF",
          lightpink: "#FFEBF8",
        },
      },

      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        mono: ["Menlo", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;

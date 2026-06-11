import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        museum: {
          paper: "#b8afa4",
          wash: "#c8c0b6",
          ink: "#2b2824",
          muted: "#6a625b",
          line: "rgba(43, 40, 36, 0.16)",
          ivory: "#e6dfd5"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      },
      boxShadow: {
        print: "0 22px 48px rgba(35, 30, 24, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;

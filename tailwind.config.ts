import type { Config } from "tailwindcss";

export default {
  content: [
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/content/**/*.{md,mdx}",
],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        paper: "#FAFAF7",
        mist: "#EEF2FF",
        blush: "#FDE2E4",
        mint: "#DFF7E6",
        sand: "#F4EBDD",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;

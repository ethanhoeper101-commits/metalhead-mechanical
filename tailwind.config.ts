import type { Config } from "tailwindcss";

/**
 * MetalHead Mechanical — Tailwind v4 config.
 *
 * Tailwind v4 reads its theme primarily from the `@theme` block in
 * app/globals.css. This file is referenced from there via `@config` and holds
 * the brand design tokens (colors + font families) as the documented source of
 * truth for the industrial dark/burnt-orange look.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#e05a1a", // burnt orange — primary
          orange: "#e05a1a",
        },
        charcoal: {
          DEFAULT: "#3d3d3d", // dark charcoal — background
          dark: "#2a2a2a", // accent / dark
        },
      },
      fontFamily: {
        // Oswald for headings (bold, condensed, industrial)
        heading: ["var(--font-oswald)", "Impact", "sans-serif"],
        // Inter for body text
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

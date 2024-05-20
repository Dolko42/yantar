import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      textColor: {
        skin: {
          base: "var(--color-base)",
          secondary: "var(--color-secondary)",
          muted: "var(--color-text-muted)",
          invisible: "var(--color-text-invisible)",
          dark: "var(--color-text-dark)",
          grey: "var(--color-text-grey)",
          warning: "var(--color-warning)",
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--color-base)",
          secondary: "var(--color-secondary)",
          secondarymuted: "var(--color-secondary-muted)",
          muted: "var(--color-fill-muted)",
          subtle: "var(--color-fill-subtle)",
          light: "var(--color-fill-light)",
          warning: "var(--color-warning)",
        },
      },
      borderColor: {
        skin: {
          base: "var(--color-border)",
          muted: "var(--color-border-muted)",
          secondary: "var(--color-secondary-border)",
          strong: "var(--color-base)",
        },
      },
      blue: {
        from: "var(--color-blue)",
        via: "var(--color-blue-via)",
        to: "var(--color-blue-to)",
      },
      screens: {
        "3xl": "2200px",
        "4xl": "3200px",
      },
      transitionDuration: {
        DEFAULT: "180ms",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./{shared,widgets,views}/**/*.{ts,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  prefix: "",
  theme: {
    colors: {
      background: "rgb(var(--background) / <alpha-value>)",
      foreground: "rgb(var(--foreground) / <alpha-value>)",
      brand: "rgb(var(--brand) / <alpha-value>)",
      "brand-light": "rgb(var(--brand-light) / <alpha-value>)",
      "brand-dark": "rgb(var(--brand-dark) / <alpha-value>)",
      accent: "rgb(var(--accent) / <alpha-value>)",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

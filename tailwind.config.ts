import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./shared/**/*.{ts,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      background: "rgb(var(--background) / <alpha-value>)",
      foreground: "rgb(var(--foreground) / <alpha-value>)",
      brand: "rgb(var(--brand) / <alpha-value>)",
      "brand-light": "rgb(var(--brand-light) / <alpha-value>)",
      "brand-dark": "rgb(var(--brand-dark) / <alpha-value>)",
      accent: "rgb(var(--accent) / <alpha-value>)",
    },
  },
  plugins: [typography],
} satisfies Config;

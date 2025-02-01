import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "767px",
      // => @media (min-width: 767px) { ... }

      md: "1024px",
      // => @media (min-width: 960px) { ... }

      lg: "1100px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
} satisfies Config;

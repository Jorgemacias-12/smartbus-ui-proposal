import type { Config } from "tailwindcss";


/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: "1px",
        1: "1px",
      },
      colors: {
        shark: {
          50: "#f5f6f6",
          100: "#e5e7e8",
          200: "#cdd0d4",
          300: "#abafb5",
          400: "#81868f",
          500: "#666b74",
          600: "#575b63",
          700: "#4a4d54",
          800: "#424448",
          900: "#3a3c3f",
          950: "#212229",
        },
        smartbus_red: {
          DEFAULT: "#6c1a1b",
        },
        smartbus_blue: {
          DEFAULT: "#144391",
        },
        smartbus_deepblue: {
          DEFAULT: "#141d32",
        },
        smartbus_emerald: {
          DEFAULT: "#205a72",
        },
        black_rain: {
          DEFAULT: "#212529",
          100: "#030404",
          200: "#070708",
          300: "#0a0b0c",
          400: "#0d0f10",
          500: "#111315",
          600: "#141619",
          700: "#171a1d",
          800: "#212529",
          900: "#373b3e",
          950: "#585f64"
        },
        "raisin-black": {
          DEFAULT: "#1a202c",
          100: "#050709",
          200: "#0b0d12",
          300: "#10141b",
          400: "#151a24",
          500: "#1a202c",
          600: "#3b4964",
          700: "#5b719c",
          800: "#90a0be",
          900: "#c8cfdf",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
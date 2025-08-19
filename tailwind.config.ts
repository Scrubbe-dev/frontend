import { heroui } from "@heroui/react";
import tailwindcssAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "0.625rem" /* was 0.75rem (12px) -> now 10px */,
        sm: "0.75rem" /* was 0.875rem (14px) -> now 12px */,
        base: "0.875rem" /* was 1rem (16px) -> now 14px */,
        lg: "1rem" /* was 1.125rem (18px) -> now 16px */,
        xl: "1.0625rem" /* was 1.25rem (20px) -> now 18px */,
        "2xl": "1.375rem" /* was 1.5rem (24px) -> now 22px */,
        "3xl": "1.625rem" /* was 1.875rem (30px) -> now 26px */,
        "4xl": "2.0625rem" /* was 2.25rem (36px) -> now 34px */,
        "5xl": "2.875rem" /* was 3rem (48px) -> now 46px */,
        "6xl": "3.875rem" /* was 4rem (64px) -> now 62px */,
        "7xl": "4.875rem" /* was 5rem (80px) -> now 78px */,
        "8xl": "5.875rem" /* was 6rem (96px) -> now 94px */,
        "9xl": "7.875rem" /* was 8rem (128px) -> now 126px */,
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        trebuchetMs: ["Trebuchet MS"],
        airbnb: ["var(--font-airbnb-cereal)"],
        besley: ["var(--font-bersley)"],
      },
      colors: {
        critical: "#dc2626", // red-600
        high: "#ea580c", // orange-600
        medium: "#fbbf24", // yellow-400
        low: "#3b82f6",
        dark: "#111827",
        subDark: "#1F2937",
        darkEzra: "#110F0F",
        subDarkEzra: "#1F1F24",
        colorScBlack: "#1D2838",
        colorScGreen: "#009FA4",
        colorScBlue: "#2463e9",
        colorScIndigo: "#6A5ACD",
        colorScPale: "#C481B0",
        colorScYello: "#FBDFC1",
        colorScLightBlue: "#DBEAFE",
        colorScPurple: "#682bd7",
        colorScRed: "#ff0000",
        colorScPink: "#ebeaff",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Renamed color scales with generated shades
        bluescrubbe: {
          50: "#e6f0ff",
          100: "#cce0ff",
          200: "#99c2ff",
          250: "#66a3ff",
          300: "#4d95ff",
          400: "#3386ff",
          500: "#2664EA", // Your primary
          600: "#1a4cb3",
          700: "#0d337d",
          800: "#001947",
          900: "#000033",
        },
        limescrubbe: {
          50: "#e6fffc",
          100: "#ccfff9",
          200: "#99fff3",
          300: "#33ffe7",
          400: "#00ffe1",
          500: "#00C9B7", // Your secondary
          600: "#00a89a",
          700: "#00877d",
          800: "#006660",
          900: "#004543",
        },
        grayscrubbe: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        redscrubbe: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          400: "#f87171",
          600: "#dc2626",
          700: "#b91c1c",
        },
        yellowscrubbe: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        greenscrubbe: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-dot": "pulseDot 1.4s infinite ease-in-out",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [heroui(), tailwindcssAnimate],
};
export default config;

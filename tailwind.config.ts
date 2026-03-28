import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          900: "#0f172a",
          800: "#1a365d",
          700: "#1e3a5f",
          600: "#234876",
        },
        accent: {
          red: "#dc2626",
          "red-light": "#ef4444",
          "red-dark": "#b91c1c",
        },
        glass: {
          white: "rgba(255, 255, 255, 0.05)",
          "white-light": "rgba(255, 255, 255, 0.1)",
          "white-medium": "rgba(255, 255, 255, 0.15)",
          "white-strong": "rgba(255, 255, 255, 0.2)",
          border: "rgba(255, 255, 255, 0.1)",
          "border-light": "rgba(255, 255, 255, 0.15)",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        shimmer: "shimmer 3s infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { left: "-100%" },
          "50%, 100%": { left: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "glass-elevated": "0 20px 60px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
        "glass-hover": "0 30px 80px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        "button-primary": "0 8px 32px rgba(220, 38, 38, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
        "button-primary-hover": "0 12px 40px rgba(220, 38, 38, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;

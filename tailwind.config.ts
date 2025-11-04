// tailwind.config.js
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    // 화면 폭 기준
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: { DEFAULT: "1rem", md: "2rem" },
      // 포트폴리오 본문 최대폭
      screens: { "2xl": "1160px" },
    },

    extend: {
      colors: {
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          card: "rgb(var(--surface-card) / <alpha-value>)",
        },
        brand: {
          DEFAULT: "#4C7CF3",
          50: "#EEF3FF",
          100: "#D9E4FF",
          200: "#B8CBFF",
          300: "#94B2FF",
          400: "#6E96F6",
          500: "#4C7CF3",
          600: "#3B6AE0",
          700: "#3159C4",
          800: "#2A4AA2",
          900: "#223B82",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-pretendard)",
          "ui-sans-serif",
          "system-ui",
          "Noto Sans KR",
          "Apple SD Gothic Neo",
          "Segoe UI",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        card: "0 6px 24px rgba(0,0,0,0.06)",
        soft: "0 2px 10px rgba(0,0,0,0.04)",
      },
      transitionDuration: { fast: "150ms", slow: "400ms" },
      transitionTimingFunction: { "out-smooth": "cubic-bezier(.22,.61,.36,1)" },

      maxWidth: {
        container: "1100px",
        "modal-narrow": "960px",
        "modal-wide": "1100px",
      },
    },
  },
  plugins: [typography()],
};

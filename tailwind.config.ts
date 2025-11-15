import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    // 화면 폭 기준
    screens: {
      sm: "640px",
      md: "768px", // 데스크탑 전환 기준
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
} satisfies Config;

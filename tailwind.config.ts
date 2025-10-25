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
    container: {
      center: true,
      padding: { DEFAULT: "1rem", md: "2rem" },
      screens: { "2xl": "1160px" }, // 데스크탑 최대폭
    },
    extend: {
      colors: {
        // CSS 변수 바인딩(라이트/다크 토큰은 global.css에서 관리)
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
      transitionDuration: {
        fast: "150ms",
        slow: "400ms",
      },
      transitionTimingFunction: { "out-smooth": "cubic-bezier(.22,.61,.36,1)" },
      keyframes: {
        type: { "0%": { width: "0" }, "100%": { width: "100%" } },
        caret: { "0%,100%": { opacity: "0" }, "50%": { opacity: "1" } },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        typing: "type 1.2s steps(24, end) 1 both",
        caret: "caret 1s step-end infinite",
        fadeUp: "fadeUp .45s ease-out both",
      },
      maxWidth: { container: "1100px" },
    },
  },
  plugins: [typography()],
};

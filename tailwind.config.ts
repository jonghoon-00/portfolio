/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", md: "2rem" },
      screens: { "2xl": "1160px" },
    },
    extend: {
      colors: {
        surface: {
          // 배경 색상
          DEFAULT: "#F8F9FB", // 페이지
          card: "#FFFFFF", // 카드
        },
        brand: {
          DEFAULT: "4C7CF3",
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
      fontFamily: {},
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
      },
      boxShadow: {
        card: "0 6px 24px rgba(0,0,0,0.06)",
        soft: "0 2px 10px rgba(0,0,0,0.04)",
      },
      transitionDuration: {
        fast: "150ms",
        slow: "400ms",
      },
      animation: {
        typing: "type 1.2s steps(24, end) 1 both",
        caret: "caret 1s step-end infinite",
        fadeUp: "fadeUp .45s ease-out both",
      },
      maxWidth: { container: "1100px" },
      transitionTimingFunction: { "out-smooth": "cubic-bezier(.22,.61,.36,1)" },
    },
  },
  plugins: [
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
  ],
};

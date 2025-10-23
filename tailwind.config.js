/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}", // 길게 쓰는 문구를 MDX로 둘 때
  ],
  theme: {
    extend: {
      colors: {
        brand: { primary: "#", secondary: "#" },
      },
      maxWidth: { container: "1100px" },
      borderRadius: { xl: "12px", "2xl": "16px" },
      boxShadow: { card: "0 6px 20px rgba(0,0,0,.06)" },
      transitionTimingFunction: { "out-smooth": "cubic-bezier(.22,.61,.36,1)" },
    },
  },
  plugins: [],
};

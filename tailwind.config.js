/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg-main)",
        item: "var(--color-bg-item)",
        text: "var(--color-text-main)",
        muted: "var(--color-text-muted)",
        thover: "var(--color-text-hover)",
        border: "var(--color-border)",
        btn: "var(--bg-btn)",
        btnHover: "var(--bg-btn-hover)",
      },
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateY(-10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        "slide-down": "slide-down 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};

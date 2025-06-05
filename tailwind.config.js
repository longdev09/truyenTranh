/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
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
  corePlugins: {
    // đảm bảo `backgroundClip` không bị disable
    backgroundClip: true,
  },
  plugins: [],
};

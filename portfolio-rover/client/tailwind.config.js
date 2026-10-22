/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#080a0f",
        surface: "#0e1219",
        panel: "#121821",
        elevated: "#171e28",
        ink: "#f2efe9",
        muted: "#a8a29a",
        subtle: "#8b857d",
        accent: "#e3b27a",
        "accent-soft": "#f0c795",
        cool: "#8ab4c7",
        mint: "#7db88c",
        danger: "#fca5a5",
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5" }],
        sm: ["0.9375rem", { lineHeight: "1.6" }],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(0, 0, 0, 0.38)",
        card: "0 18px 50px rgba(0, 0, 0, 0.3)",
        lift: "0 26px 70px rgba(0, 0, 0, 0.45)",
        glow: "0 0 50px rgba(227, 178, 122, 0.16)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-9px)" },
        },
        "pulse-soft": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 0 0 rgba(125, 184, 140, 0.32)",
          },
          "50%": {
            opacity: "0.65",
            boxShadow: "0 0 0 6px rgba(125, 184, 140, 0)",
          },
        },
        drift: {
          "0%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(0, -16px, 0) rotate(2deg)" },
          "100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
        },
        "modal-in": {
          "0%": { opacity: "0", transform: "translateY(18px) scale(0.985)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        drift: "drift 22s ease-in-out infinite",
        "modal-in": "modal-in 0.38s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.22s ease-out both",
        "slide-down": "slide-down 0.28s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

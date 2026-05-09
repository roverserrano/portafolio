/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F172A",
        slatePanel: "#1E293B",
        cyanTech: "#38BDF8",
        greenTech: "#10B981",
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 70px rgba(2, 6, 23, 0.35)",
        card: "0 14px 40px rgba(2, 6, 23, 0.26)",
      },
    },
  },
  plugins: [],
};

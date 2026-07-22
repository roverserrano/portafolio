/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Fondo con vida — azul-gris oscuro con cálidez
        "bg-primary": "#13151c",
        "bg-panel": "#1a1d28",
        "bg-elevated": "#222636",
        
        // Texto cálido, no grisáceo
        "text-primary": "#ece9e4",
        "text-secondary": "#a39e96",
        "text-muted": "#6b6560",
        
        // Acentos vibrantes
        "accent-warm": "#d4a574",
        "accent-cool": "#8ab4c7",
        "accent-green": "#7db88c",
        
        // Compatibilidad
        navy: "#13151c",
        slatePanel: "#1a1d28",
        cyanTech: "#d4a574",
        greenTech: "#7db88c",
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        soft: "0 20px 70px rgba(2, 6, 23, 0.4)",
        card: "0 14px 40px rgba(2, 6, 23, 0.3)",
      },
    },
  },
  plugins: [],
};
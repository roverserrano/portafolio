export const projects = [
  {
    name: "BoviSense AI",
    type: "Proyecto de Grado",
    category: "IA",
    stack: ["Python", "TensorFlow", "Jetson Orin Nano", "Flutter", "Fast-API"],
    description:
      "Sistema de deteccion y conteo automatico de ganado bovino con IA. Arquitectura distribuida: app movil -> BLE -> ESP32 -> LoRa -> Jetson Orin Nano con inferencia en tiempo real.",
    highlight: "Integra visión por computadora, hardware embebido y comunicacion inalambrica para un problema agropecuario real.",
  },
  {
    name: "Analisis de Sentimiento & Deteccion de Bots",
    type: "Proyecto Academico",
    category: "IA / NLP",
    stack: ["React", "FastAPI", "Python", "Google Colab", "Plotly", "Chart.js"],
    description:
      "Plataforma web que clasifica comentarios de redes sociales como bueno, neutro o malo y detecta bots. Utiliza dos modelos entrenados de forma independiente con visualizacion de resultados.",
    highlight: "Combina entrenamiento de modelos, API y dashboard para explicar resultados de forma clara.",
  },
  {
    name: "CredenSafe",
    type: "Proyecto Personal",
    category: "Seguridad",
    stack: ["React", "Node.js", "Supabase", "Autenticacion", "Arquitectura modular"],
    description:
      "SaaS de gestion segura de credenciales con autenticacion, control de acceso, con enfoque en seguridad y experiencia de usuario.",
    highlight: "Proyecto orientado a buenas practicas de autenticacion, modularidad de producto.",
  },
  {
    name: "Sistema de Gestión Hospitalaria",
    type: "Proyecto Academico",
    category: "Gestión",
    stack: ["Nest.js", "React", "MySQL", "Git"],
    description:
      "Sistema de referencia para la gestioón de pacientes referidos entre centros hospitalarios",
    highlight: "Proyecto orientado a la gestión de pacientes, gestión de especialidades, gestion de cartera de servicios.",
  },
];

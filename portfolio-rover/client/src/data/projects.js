export const projects = [
  {
    slug: "bovisense",
    name: "BoviSense AI",
    tagline: "Conteo de ganado con visión artificial en el borde.",
    type: "Proyecto de grado",
    category: "IA · IoT · Full Stack",
    timeline: "Ago 2025 — Jun 2026",
    featured: true,
    tone: "#7db88c",
    problem:
      "Los rancheros pierden horas contando ganado manualmente y los errores humanos afectan el control del hato.",
    solution:
      "Una cámara y una Jetson Orin Nano detectan y cuentan bovinos en tiempo real. Los datos viajan por LoRa hasta una app Flutter y un backend Node/Express.",
    outcome:
      "mAP 0.87 en detección. El conteo manual de ~2 horas se redujo a ~5 minutos por lote.",
    role:
      "Arquitectura completa: modelo de detección, integración de hardware, API, app móvil y pruebas end-to-end.",
    stack: [
      "Python",
      "TensorFlow",
      "Jetson Orin Nano",
      "Flutter",
      "Node.js",
      "Firebase",
      "ESP32",
      "LoRa",
    ],
    image: "/projects/bovisense-studio.webp",
    imageSmall: "/projects/bovisense-studio-800.webp",
    imageAlt:
      "Visualización conceptual de BoviSense en una tablet junto a un dispositivo de campo, con detección de ganado.",
    repoUrl: "https://github.com/roverserrano/bovisense-ai",
    demoUrl: null,
    privateNote: null,
    metrics: [
      { value: "0.87", label: "mAP reportado" },
      { value: "~5 min", label: "por lote" },
      { value: "~2 h", label: "conteo manual" },
    ],
    caseStudy: {
      challenge:
        "El conteo manual dependía de recorrer el potrero durante horas. El reto era construir un sistema que detectara bovinos en un entorno real, con conectividad limitada y cómputo restringido en el borde.",
      approach:
        "Entrené y optimicé un modelo de detección para correr en la Jetson, diseñé el flujo de comunicación con ESP32 y LoRa, y conecté el resultado con una app Flutter y un backend Node/Express sobre Firebase.",
      result:
        "El prototipo alcanzó un mAP de 0.87 y redujo una tarea de ~2 horas a ~5 minutos por lote. Se validó con pruebas funcionales, de integración y de extremo a extremo.",
      learnings:
        "Aprendí que la IA útil no termina en el modelo: vive en la latencia, la energía, el hardware y la experiencia de quien opera el sistema.",
    },
  },
  {
    slug: "social-pulse",
    name: "Social Pulse",
    tagline: "Sentimiento y detección de bots en conversaciones sociales.",
    type: "Proyecto académico",
    category: "NLP · Full Stack",
    timeline: "Feb — Jun 2026",
    featured: false,
    tone: "#a78bfa",
    problem:
      "Es difícil distinguir opiniones reales de contenido generado por bots en redes sociales.",
    solution:
      "Plataforma web que clasifica comentarios y detecta contenido automatizado usando dos modelos NLP entrenados de forma independiente.",
    outcome:
      "Dashboard interactivo con inferencia en tiempo real, distribución de sentimiento y scoring de bots.",
    role:
      "Entrenamiento y reentrenamiento de modelos, API con FastAPI y dashboard React con visualizaciones.",
    stack: ["React", "FastAPI", "Python", "NLP", "Google Colab"],
    image: "/projects/social-pulse-studio.webp",
    imageSmall: "/projects/social-pulse-studio-800.webp",
    imageAlt:
      "Recreación del dashboard de análisis de sentimiento y detección de bots, con datos de ejemplo.",
    repoUrl: "https://github.com/roverserrano/analisis-sentimiento-bots",
    demoUrl: null,
    privateNote: null,
    metrics: [
      { value: "2", label: "modelos NLP" },
      { value: "REST", label: "API de inferencia" },
      { value: "React", label: "visualización" },
    ],
    caseStudy: {
      challenge:
        "Los comentarios de redes sociales mezclan lenguaje informal, ironía y cuentas automatizadas. El sistema debía separar sentimiento y bot score sin depender de una sola señal.",
      approach:
        "Preparé el dataset, entrené dos modelos independientes en Google Colab y expuse la inferencia con FastAPI. El dashboard en React muestra la evolución, la distribución y los comentarios con mayor score de bot.",
      result:
        "Una plataforma funcional que clasifica sentimiento y detecta cuentas sospechosas, con visualizaciones para explorar los resultados.",
      learnings:
        "Documentar los datos y los umbrales importa tanto como la métrica: un modelo sin contexto es difícil de defender.",
    },
  },
  {
    slug: "credensafe",
    name: "CredenSafe",
    tagline: "Una bóveda de credenciales que prioriza la seguridad sin sacrificar la experiencia.",
    type: "Proyecto personal",
    category: "Seguridad · Mobile",
    timeline: "Feb — Jun 2026",
    featured: false,
    tone: "#5eead4",
    problem:
      "Las contraseñas personales y de equipos pequeños terminan en notas, capturas o documentos sin protección.",
    solution:
      "App Flutter con bóveda cifrada, contraseña maestra, desbloqueo biométrico, generador de contraseñas y auto-lock; backend con Supabase.",
    outcome:
      "Cifrado XChaCha20-Poly1305, derivación de clave Argon2id y autenticación biométrica en una experiencia mobile-first.",
    role:
      "Diseño y desarrollo de la app Flutter, modelo de seguridad y backend Supabase.",
    stack: ["Flutter", "Dart", "Supabase", "Argon2id", "XChaCha20", "Biometría"],
    image: "/projects/credensafe-studio.webp",
    imageSmall: "/projects/credensafe-studio-800.webp",
    imageCaption: "Visualización conceptual con IA de CredenSafe · interfaz recreada",
    imageAlt:
      "Visualización conceptual de CredenSafe en dos teléfonos, con bóveda de credenciales y desbloqueo biométrico.",
    repoUrl: "https://github.com/roverserrano/credensafe",
    demoUrl: null,
    privateNote: null,
    metrics: [
      { value: "XChaCha20", label: "cifrado" },
      { value: "Argon2id", label: "derivación" },
      { value: "Biometría", label: "desbloqueo" },
    ],
    caseStudy: {
      challenge:
        "Una bóveda de contraseñas tiene que ser segura y, a la vez, suficientemente cómoda para usarla todos los días. La seguridad no podía convertirse en fricción.",
      approach:
        "Separé la experiencia mobile de la capa de seguridad: contraseña maestra, derivación Argon2id, cifrado XChaCha20-Poly1305, biometría y bloqueo automático. La app se construyó en Flutter con Supabase como backend.",
      result:
        "Un producto funcional con bóveda cifrada, generador de contraseñas, biometría y organización de credenciales en una interfaz simple.",
      learnings:
        "La seguridad se diseña en capas: la criptografía protege los datos, pero la UX protege que la gente use el producto correctamente.",
    },
  },
  {
    slug: "referencia-hospitalaria",
    name: "Red de Referencia Hospitalaria",
    tagline: "Trazabilidad de derivaciones entre centros de salud.",
    type: "Proyecto académico",
    category: "Gestión · Full Stack",
    timeline: "Ago — Dic 2024",
    featured: false,
    tone: "#7dd3fc",
    problem:
      "La derivación de pacientes entre centros de salud pierde trazabilidad y dificulta la coordinación operativa.",
    solution:
      "Sistema para registrar, derivar y seguir pacientes entre hospitales, con roles, formularios e historial de cada referencia.",
    outcome:
      "Gestión de roles, estados y datos clínicos para que cada derivación tenga un responsable y un historial.",
    role:
      "Backend con NestJS, base de datos relacional MySQL y frontend React.",
    stack: ["NestJS", "React", "MySQL", "TypeORM"],
    image: "/projects/hospital-studio.webp",
    imageSmall: "/projects/hospital-studio-800.webp",
    imageAlt:
      "Recreación del sistema de referencias hospitalarias con registros ficticios y estados de derivación.",
    repoUrl: null,
    demoUrl: null,
    privateNote: "Caso privado — disponible bajo solicitud",
    metrics: [
      { value: "Roles", label: "control de acceso" },
      { value: "REST", label: "API con NestJS" },
      { value: "SQL", label: "datos relacionales" },
    ],
    caseStudy: {
      challenge:
        "El proceso de referencia entre centros no tenía una fuente única de verdad. Cada derivación dependía de llamadas, mensajes y registros dispersos.",
      approach:
        "Modelé el flujo de una referencia con estados y responsables, construí el backend en NestJS con TypeORM/MySQL y una interfaz React para registrar, consultar y seguir cada caso.",
      result:
        "Un sistema académico funcional que centraliza referencias, roles y estados, con una vista operativa para coordinadores.",
      learnings:
        "En software de gestión, el reto no es la pantalla: es modelar bien los estados y hacer visible quién tiene la pelota.",
    },
  },
];

export const featuredProject = projects.find((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);

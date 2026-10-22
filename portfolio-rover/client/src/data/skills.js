export const levelLabels = {
  core: "Core",
  working: "Intermedio",
  familiar: "Familiar",
};

export const levelDescriptions = {
  core: "Lo uso con frecuencia y tengo proyectos que lo respaldan.",
  working: "Lo he usado en proyectos concretos y sigo profundizando.",
  familiar: "Tengo bases y experiencia puntual; lo aprendo cuando el proyecto lo pide.",
};

export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "React", level: "core" },
      { name: "JavaScript", level: "core" },
      { name: "Tailwind CSS", level: "core" },
      { name: "TypeScript", level: "working" },
      { name: "Vite", level: "working" },
      { name: "HTML / CSS", level: "working" },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: "core" },
      { name: "REST APIs", level: "core" },
      { name: "Express", level: "working" },
      { name: "NestJS", level: "working" },
      { name: "FastAPI", level: "working" },
      { name: "Firebase", level: "working" },
      { name: "Supabase", level: "working" },
    ],
  },
  {
    title: "Datos & IA",
    icon: "spark",
    skills: [
      { name: "Python", level: "core" },
      { name: "SQL", level: "working" },
      { name: "TensorFlow", level: "working" },
      { name: "NLP", level: "working" },
      { name: "Visión por computadora", level: "working" },
      { name: "PyTorch", level: "familiar" },
      { name: "MySQL", level: "working" },
      { name: "MongoDB", level: "familiar" },
    ],
  },
  {
    title: "Mobile & herramientas",
    icon: "terminal",
    skills: [
      { name: "Git / GitHub", level: "core" },
      { name: "Flutter", level: "working" },
      { name: "Docker", level: "working" },
      { name: "Linux", level: "working" },
      { name: "AWS", level: "familiar" },
      { name: "React Native", level: "familiar" },
      { name: "C# / ASP.NET", level: "familiar" },
    ],
  },
];

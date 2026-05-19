export interface EducationItem {
  id: string;
  type: "degree" | "certificate" | "course";
  title: string;
  institution: string;
  period: string;
  description?: string;
  tags?: string[];
}

export const educationItems: EducationItem[] = [
  {
    id: "tecnicatura",
    type: "degree",
    title: "Tecnicatura Superior en Programación",
    institution: "Universidad Del Aconcagua",
    period: "2018 — 2021",
    description:
      "Formación técnica universitaria en programación, algoritmos, estructuras de datos, bases de datos y desarrollo de software.",
    tags: ["Algoritmos", "POO", "Bases de Datos", "Redes"],
  },
  {
    id: "fullstack-mern",
    type: "certificate",
    title: "Full Stack Developer — MERN Stack",
    institution: "Coderhouse",
    period: "2023",
    description:
      "Desarrollo full stack completo con MongoDB, Express, React y Node.js. Proyectos reales con deploy en producción.",
    tags: ["MERN", "React", "Node.js", "MongoDB"],
  },
  {
    id: "backend-nodejs",
    type: "certificate",
    title: "Backend Development con Node.js",
    institution: "Coderhouse",
    period: "2023",
    description:
      "Arquitectura de servidores, APIs REST, autenticación, manejo de errores y deploy de aplicaciones backend.",
    tags: ["Node.js", "Express", "JWT", "REST API"],
  },
  {
    id: "react-frontend",
    type: "certificate",
    title: "Desarrollo Frontend con React",
    institution: "Coderhouse",
    period: "2022",
    description:
      "Fundamentos de React, hooks, estado global, routing y desarrollo de interfaces modernas.",
    tags: ["React", "Hooks", "State Management", "Router"],
  },
  {
    id: "python-django",
    type: "course",
    title: "Python & Django — Full Stack Web",
    institution: "Udemy",
    period: "2023",
    description:
      "Desarrollo web con Python y Django, ORM, autenticación, APIs REST y despliegue.",
    tags: ["Python", "Django", "PostgreSQL", "REST"],
  },
  {
    id: "ai-tools",
    type: "course",
    title: "AI Tools for Developers",
    institution: "Autoformación",
    period: "2024 — Presente",
    description:
      "Integración de LLMs, prompt engineering, AI agents y automatización de flujos con herramientas modernas de IA.",
    tags: ["LLMs", "Claude", "AI Agents", "Automation"],
  },
];

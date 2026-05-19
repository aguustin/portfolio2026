export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  gradient: string;
  accentColor: string;
  tag: string;
  featured?: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "saas-events",
    image: "/png/ipass.png",
    title: "GoTicket — SaaS de Gestión de Eventos",
    description:
      "Plataforma SaaS completa para gestión y venta de entradas a eventos con panel administrativo, roles y procesamiento de pagos.",
    longDescription:
      "Sistema end-to-end que permite a organizadores gestionar eventos, vender entradas y administrar equipos de trabajo con control de acceso por roles y pagos integrados con Mercado Pago.",
    stack: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Mercado Pago"],
    features: [
      "Venta de entradas con pasarela de pago",
      "Gestión de trabajadores y roles",
      "Panel administrativo completo",
      "Dashboard de analytics",
      "Autenticación JWT",
    ],
    gradient: "from-violet-500/10 via-indigo-500/5 to-transparent",
    accentColor: "text-violet-400",
    tag: "SaaS · Payments · MERN",
    featured: true,
    githubUrl: "https://github.com/aguustin/newGomarket/tree/guardandoTransaccion",
  },
   {
    id: "ai-leads",
    image: "/png/ia_jobsearch.png",
    title: "JobSearchAgent — Sistema IA para Aplicación Laboral",
    description:
      "Agente de inteligencia artificial para la búsqueda y gestión de ofertas laborales, capaz de asistir en postulaciones mediante la generación automática de respuestas, preparación para entrevistas, análisis de vacantes y creación de posibles preguntas y respuestas adaptadas a cada oportunidad.",
    longDescription:
      "Sistema de IA que automatiza el proceso de generación de leads mediante análisis de datos, clasificación inteligente y outreach automatizado para maximizar la conversión.",
    stack: ["Python", "AI/LLM", "Node.js", "REST API", "Automation", "Data Processing"],
    features: [
      "Automatización de prospección",
      "Clasificación inteligente con IA",
      "Procesamiento de datos a escala",
      "Outreach automatizado",
      "Dashboard de métricas",
    ],
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    accentColor: "text-amber-400",
    tag: "AI · Automation · Python",
    githubUrl: "https://github.com/aguustin/ia_jobsearch/tree/main",
  },
  {
    id: "task-manager",
    image: "/png/tasks.png",
    title: "TaskFlow — Gestor Colaborativo de Tareas",
    description:
      "Plataforma colaborativa para gestión de proyectos y tareas con estados, comentarios y múltiples colaboradores.",
    longDescription:
      "Aplicación full-stack construida con Python/Django en el backend y Next.js en el frontend que permite a equipos gestionar proyectos con flujos de trabajo personalizables.",
    stack: ["Python", "Django", "Next.js", "TailwindCSS", "PostgreSQL", "REST API"],
    features: [
      "Gestión de proyectos y tareas",
      "Estados y prioridades configurables",
      "Sistema de comentarios",
      "Colaboradores y permisos",
      "Dashboard de productividad",
    ],
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    accentColor: "text-emerald-400",
    tag: "Django · Next.js · Full Stack",
    githubUrl: "https://github.com/aguustin/pythonTasks/tree/final",
  },
  {
    id: "security-platform",
    image: "/png/mobile_security.png",
    title: "SecureGate — Plataforma de Seguridad Privada",
    description:
      "Sistema de seguridad para barrios privados con autenticación biométrica facial, app mobile y gestión en tiempo real.",
    longDescription:
      "Solución end-to-end con reconocimiento facial para control de acceso en barrios privados. Incluye app mobile con Expo y procesamiento concurrente con Worker Threads.",
    stack: ["Node.js", "React Native", "Expo", "face-api.js", "Socket.io", "PostgreSQL"],
    features: [
      "Reconocimiento facial en tiempo real",
      "App mobile iOS y Android",
      "Control de acceso biométrico",
      "Gestión de residentes y visitas",
      "Worker Threads para procesamiento paralelo",
    ],
    gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
    accentColor: "text-blue-400",
    tag: "Mobile · AI · Security",
    githubUrl: "https://github.com/aguustin/seguridad/tree/darkFront",
  },
  {
    id: "saas-stores",
    title: "StoreOS — SaaS de Gestión de Tiendas",
    description:
    "Sistema de gestión comercial para tiendas con dashboard, inventario, punto de venta y herramientas administrativas completas.",
    longDescription:
    "Plataforma SaaS orientada a comercios que centraliza la gestión de inventario, ventas, clientes y reportes en un sistema moderno con experiencia POS integrada.",
    stack: ["React", "Node.js", "MongoDB", "TailwindCSS", "TypeScript", "Mercado Pago"],
    features: [
      "Dashboard de métricas y ventas",
      "Gestión de productos e inventario",
      "Sistema de punto de venta (POS)",
      "Reportes y analytics",
      "Multi-usuario con roles",
    ],
    gradient: "from-rose-500/10 via-pink-500/5 to-transparent",
    accentColor: "text-rose-400",
    tag: "SaaS · Commerce · MERN",
    githubUrl: "https://github.com/aguustin/saas/tree/csvdownload",
  },
  {
    id: "obras_p",
    image: "/png/obras_p.png",
    title: "Obras particulares — Plataforma de Gestión de obras",
    description:
    "Gestor de obras municipales — planos, expedientes y revisión técnica con IA.",
    longDescription:
      "Sistema de gestión de obras particulares para el municipio de Godoy Cruz. Permite a profesionales presentar expedientes con planos PDF, y a técnicos revisarlos y observarlos. Integra análisis automático de documentos vía IA (Ollama) para verificar cumplimiento normativo.",
    stack: ["Node.js", "React", "Vite", "MongoDB", "MinIO", "Docker", "Ollama", "SOAP"],
    features: [
      "Gestión de expedientes con integración SOAP municipal",
      "Presentación y versionado de planos en PDF",
      "Revisión técnica con observaciones y comentarios",
      "Análisis automático de cumplimiento normativo con IA",
      "Control de acceso por roles (Admin, Técnico, Profesional)",
    ],
    gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
    accentColor: "text-blue-400",
    tag: "NodeJS · React · MongoDB · AI Integration",
    githubUrl: "https://github.com/aguustin/obras_particulares/tree/soapIntegration",
  },
];

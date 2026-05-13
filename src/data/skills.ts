export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  bgColor: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "Monitor",
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    skills: [
      { name: "React", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "TailwindCSS", level: 5 },
      { name: "Framer Motion", level: 4 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "Express", level: 5 },
      { name: "Python", level: 4 },
      { name: "Django", level: 4 },
      { name: "REST APIs", level: 5 },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    skills: [
      { name: "MongoDB", level: 5 },
      { name: "PostgreSQL", level: 4 },
      { name: "Mongoose ODM", level: 5 },
      { name: "SQL", level: 4 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "GitBranch",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    skills: [
      { name: "Docker", level: 3 },
      { name: "Git & GitHub", level: 5 },
      { name: "Vercel", level: 5 },
      { name: "Postman", level: 5 },
      { name: "Linux", level: 3 },
    ],
  },
  {
    category: "AI & Automation",
    icon: "Sparkles",
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    skills: [
      { name: "LLM Integration", level: 4 },
      { name: "AI Agents", level: 4 },
      { name: "Prompt Engineering", level: 4 },
      { name: "Claude API", level: 4 },
      { name: "Automation", level: 4 },
    ],
  },
  {
    category: "Mobile",
    icon: "Smartphone",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    skills: [
      { name: "React Native", level: 4 },
      { name: "Expo", level: 4 },
      { name: "Mobile UI/UX", level: 3 },
    ],
  },
];

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
      { name: "React", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "TypeScript", level: 3 },
      { name: "TailwindCSS", level: 4 },
      { name: "Framer Motion", level: 3 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "Python", level: 3 },
      { name: "Django", level: 3 },
      { name: "REST APIs", level: 4 },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    skills: [
      { name: "MongoDB", level: 4 },
      { name: "PostgreSQL", level: 3 },
      { name: "Mongoose ODM", level: 3 },
      { name: "SQL", level: 3 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "GitBranch",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    skills: [
      { name: "Docker", level: 3 },
      { name: "Git & GitHub", level: 4 },
      { name: "Vercel", level: 5 },
      { name: "Postman", level: 5 },
      { name: "Linux", level: 2 },
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

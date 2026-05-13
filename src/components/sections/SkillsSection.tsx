"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  GitBranch,
  Sparkles,
  Smartphone,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, stagger } from "@/lib/animations";
import type { Dictionary } from "@/lib/dictionaries";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Database,
  GitBranch,
  Sparkles,
  Smartphone,
};

function SkillBar({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" as const }}
          style={{ transformOrigin: "left" }}
          className={`h-1 flex-1 rounded-full ${
            i < level ? "bg-current opacity-100" : "bg-white/[0.06] opacity-100"
          }`}
        />
      ))}
    </div>
  );
}

export function SkillsSection({ dict }: { dict: Dictionary }) {
  const t = dict.skills;

  return (
    <section id="skills" className="py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="mb-4">
            <SectionLabel>{t.label}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#fafafa] mb-4"
          >
            {t.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#71717a] text-lg max-w-xl">
            {t.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Monitor;
            return (
              <motion.div
                key={cat.category}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-8 h-8 rounded-xl ${cat.bgColor} flex items-center justify-center`}
                  >
                    <Icon size={15} className={cat.color} />
                  </div>
                  <h3 className="text-sm font-semibold text-[#e4e4e7]">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className={`${cat.color}`}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-[#71717a] font-medium">
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-[#3f3f46] font-mono">
                          {t.levels[skill.level]}
                        </span>
                      </div>
                      <SkillBar level={skill.level} />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional tools row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-8 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
        >
          <p className="text-xs text-[#52525b] font-medium uppercase tracking-widest mb-4">
            {t.also_working}
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Mercado Pago API",
              "Socket.io",
              "JWT Auth",
              "face-api.js",
              "Worker Threads",
              "Axios",
              "Mongoose",
              "Prisma",
              "Shadcn/ui",
              "Zustand",
              "Vercel",
              "Railway",
              "Render",
            ].map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 text-xs text-[#52525b] bg-white/[0.03] border border-white/[0.05] rounded-lg font-mono"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { educationItems } from "@/data/education";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, stagger } from "@/lib/animations";
import type { Dictionary } from "@/lib/dictionaries";

const iconMap = {
  degree: GraduationCap,
  certificate: Award,
  course: BookOpen,
};

const colorMap = {
  degree: {
    icon: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    dot: "bg-violet-400",
  },
  certificate: {
    icon: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    dot: "bg-amber-400",
  },
  course: {
    icon: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    dot: "bg-blue-400",
  },
};

export function EducationSection({ dict }: { dict: Dictionary }) {
  const t = dict.education;

  return (
    <section id="education" className="py-24 lg:py-32 px-6">
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
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent hidden sm:block" />

          <div className="space-y-4">
            {educationItems.map((item) => {
              const Icon = iconMap[item.type];
              const colors = colorMap[item.type];

              return (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="sm:pl-12 relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-5 w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} items-center justify-center hidden sm:flex`}
                  >
                    <Icon size={16} className={colors.icon} />
                  </div>

                  <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 sm:hidden">
                        <div
                          className={`w-7 h-7 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon size={13} className={colors.icon} />
                        </div>
                        <span className="text-xs font-medium text-[#52525b] capitalize">
                          {t.types[item.type]}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-[#e4e4e7] leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#52525b] mt-0.5">
                          {item.institution}
                        </p>
                      </div>

                      <span className="text-xs text-[#3f3f46] font-mono whitespace-nowrap flex-shrink-0">
                        {item.period}
                      </span>
                    </div>

                    {item.description && (
                      <p className="text-xs text-[#52525b] leading-relaxed mt-2 mb-3">
                        {item.description}
                      </p>
                    )}

                    {item.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="default">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Zap, Bot } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, stagger } from "@/lib/animations";
import type { Dictionary } from "@/lib/dictionaries";

const specialtyIcons = [Layers, Code2, Bot, Zap];

export function AboutSection({ dict }: { dict: Dictionary }) {
  const t = dict.about;

  return (
    <section id="about" className="py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-4">
            <SectionLabel>{t.label}</SectionLabel>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mt-10">
            {/* Left: bio text */}
            <motion.div variants={stagger} className="space-y-5">
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#fafafa]"
              >
                {t.heading1}
                <br />
                <span className="gradient-text-accent">{t.heading2}</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-[#71717a] leading-relaxed">
                {t.bio1}
              </motion.p>

              <motion.p variants={fadeUp} className="text-[#71717a] leading-relaxed">
                {t.bio2}
              </motion.p>

              <motion.p variants={fadeUp} className="text-[#71717a] leading-relaxed">
                {t.bio3}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="pt-4 flex flex-wrap gap-2"
              >
                {[
                  "MERN Stack",
                  "Next.js",
                  "Python / Django",
                  "React Native",
                  "TypeScript",
                  "AI Integration",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-[#71717a] bg-white/[0.03] border border-white/[0.06] rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: specialty cards */}
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.specialties.map(({ title, description }, i) => {
                const Icon = specialtyIcons[i];
                return (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/15 transition-colors">
                      <Icon size={16} className="text-indigo-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#e4e4e7] mb-2">
                      {title}
                    </h3>
                    <p className="text-xs text-[#52525b] leading-relaxed">
                      {description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

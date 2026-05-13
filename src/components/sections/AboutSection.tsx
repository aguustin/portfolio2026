"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Zap, Bot } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, stagger } from "@/lib/animations";

const specialties = [
  {
    icon: Layers,
    title: "SaaS Builder",
    description:
      "Design and build complete SaaS products from architecture to deployment, covering backend, frontend, auth, and payments.",
  },
  {
    icon: Code2,
    title: "Full Stack Engineering",
    description:
      "End-to-end development across the entire stack: REST APIs, databases, state management, and modern UI.",
  },
  {
    icon: Bot,
    title: "AI-Assisted Development",
    description:
      "Integrate LLMs and AI agents into real products. Build automation workflows and intelligent features with modern AI tools.",
  },
  {
    icon: Zap,
    title: "Product Mindset",
    description:
      "Ship features that matter. I think from the user's perspective and build systems that solve real problems at scale.",
  },
];

export function AboutSection() {
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
            <SectionLabel>About</SectionLabel>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mt-10">
            {/* Left: bio text */}
            <motion.div variants={stagger} className="space-y-5">
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#fafafa]"
              >
                Building products,
                <br />
                <span className="gradient-text-accent">not just code</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-[#71717a] leading-relaxed">
                I&apos;m Agustín, a Full Stack Product Engineer from Argentina.
                I specialize in building complete web applications and SaaS
                products — from the database design to the user interface —
                with a focus on clean architecture, real-world scalability, and
                great user experience.
              </motion.p>

              <motion.p variants={fadeUp} className="text-[#71717a] leading-relaxed">
                I work across the entire product stack: REST APIs with Node.js
                and Django, modern frontends with React and Next.js, mobile
                apps with React Native, and increasingly, AI-powered features
                using LLMs and automation agents.
              </motion.p>

              <motion.p variants={fadeUp} className="text-[#71717a] leading-relaxed">
                I&apos;m currently pursuing a degree in Programming at UTN
                while simultaneously building real-world products and expanding
                my skills in AI tooling and modern DevOps practices.
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
              {specialties.map(({ icon: Icon, title, description }) => (
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
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

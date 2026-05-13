"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import type { Dictionary } from "@/lib/dictionaries";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const techStack = ["React", "Next.js", "Node.js", "Python", "TypeScript", "MongoDB", "Django"];

export function HeroSection({ dict }: { dict: Dictionary }) {
  const t = dict.hero;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background gradients */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-indigo-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-blue-500/[0.03] rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        {/* Available badge */}
        <FadeUp delay={0} className="mb-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-[#a1a1aa]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {t.available}
            <Sparkles size={11} className="text-indigo-400" />
          </span>
        </FadeUp>

        {/* Main headline */}
        <FadeUp delay={0.1}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
            <span className="text-[#fafafa]">{t.title1}</span>
            <br />
            <span className="gradient-text-accent">{t.title2}</span>
          </h1>
        </FadeUp>

        {/* Subtitle */}
        <FadeUp delay={0.2} className="mb-10">
          <p className="max-w-2xl text-lg sm:text-xl text-[#71717a] leading-relaxed">
            {t.subtitle}
          </p>
        </FadeUp>

        {/* Tech stack pills */}
        <FadeUp delay={0.3} className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono text-[#52525b] bg-white/[0.03] border border-white/[0.06] rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.4} className="mb-12">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#09090b] text-sm font-medium rounded-xl hover:bg-white/90 transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
            >
              {t.cta_projects}
              <ArrowDown size={15} />
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.06] text-[#fafafa] text-sm font-medium rounded-xl border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.14] transition-all duration-200"
            >
              <Download size={15} />
              {t.cta_cv}
            </a>
          </div>
        </FadeUp>

        {/* Social links */}
        <FadeUp delay={0.5}>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/aguustin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#71717a] hover:text-[#fafafa] transition-colors duration-200"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <span className="w-px h-4 bg-white/[0.1]" />
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#71717a] hover:text-[#fafafa] transition-colors duration-200"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <span className="w-px h-4 bg-white/[0.1]" />
            <a
              href="mailto:agustin.molee@gmail.com"
              className="text-sm text-[#71717a] hover:text-[#fafafa] transition-colors duration-200"
            >
              agustin.molee@gmail.com
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/[0.15] to-transparent"
        />
      </motion.div>
    </section>
  );
}

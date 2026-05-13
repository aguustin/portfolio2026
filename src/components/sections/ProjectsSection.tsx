"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, stagger } from "@/lib/animations";
import type { Dictionary } from "@/lib/dictionaries";

type ProjectDict = Dictionary["projects"]["items"][number];

function ProjectCard({
  project,
  projectDict,
  viewGithub,
  featured = false,
}: {
  project: typeof projects[number];
  projectDict: ProjectDict;
  viewGithub: string;
  featured?: boolean;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className={`group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.1] hover:bg-white/[0.03] transition-all duration-300 card-glow ${featured ? "col-span-full" : ""}`}
    >
      {/* Gradient top bar */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.gradient.replace("from-", "from-").replace("/10", "/40").replace("/5", "/20")}`} />

      <div className={`p-6 lg:p-8 ${featured ? "lg:flex lg:gap-12 lg:items-start" : ""}`}>
        {/* Visual */}
        <div
          className={`relative rounded-xl overflow-hidden mb-6 ${featured ? "lg:mb-0 lg:w-1/2 lg:flex-shrink-0" : ""}`}
        >
          {project.image ? (
            <div className={`w-full ${featured ? "h-48 lg:h-64" : "h-44"} relative`}>
              <Image
                src={project.image}
                alt={projectDict.title}
                fill
                className="object-cover object-top"
                sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
              />
              <div className="absolute inset-0 bg-[#09090b]/20" />
            </div>
          ) : (
            <div
              className={`w-full h-48 ${featured ? "lg:h-64" : "h-44"} bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
            >
              <div className="absolute inset-0 bg-[#09090b]/40" />
              <div className="relative z-10 w-full px-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="flex-1 h-5 rounded-md bg-white/[0.06] ml-2" />
                </div>
                <div className="space-y-2">
                  <div className="h-2.5 rounded bg-white/[0.08] w-3/4" />
                  <div className="h-2.5 rounded bg-white/[0.05] w-1/2" />
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="h-12 rounded-lg bg-white/[0.06]" />
                    <div className="h-12 rounded-lg bg-white/[0.04]" />
                    <div className="h-12 rounded-lg bg-white/[0.06]" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={featured ? "lg:flex-1 lg:py-2" : ""}>
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <span className={`text-xs font-mono font-medium ${project.accentColor} mb-1.5 block`}>
                {projectDict.tag}
              </span>
              <h3 className="text-lg font-semibold text-[#fafafa] leading-tight group-hover:text-white transition-colors">
                {projectDict.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 mt-1">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="p-1.5 text-[#52525b] hover:text-[#a1a1aa] rounded-lg hover:bg-white/[0.05] transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon size={15} />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  className="p-1.5 text-[#52525b] hover:text-[#a1a1aa] rounded-lg hover:bg-white/[0.05] transition-all"
                  aria-label="Demo"
                >
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm text-[#71717a] leading-relaxed mb-5">
            {projectDict.description}
          </p>

          {/* Features */}
          <ul className="space-y-1.5 mb-5">
            {projectDict.features.slice(0, featured ? 5 : 3).map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-[#52525b]"
              >
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${project.accentColor.replace("text-", "bg-")}`} />
                {feature}
              </li>
            ))}
          </ul>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTA link */}
          <div className="mt-5 pt-5 border-t border-white/[0.05]">
            <a
              href={project.githubUrl || "#"}
              className={`inline-flex items-center gap-1.5 text-sm font-medium ${project.accentColor} hover:opacity-80 transition-opacity`}
            >
              {viewGithub}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection({ dict }: { dict: Dictionary }) {
  const t = dict.projects;
  const [featuredProject, ...restProjects] = projects;
  const [featuredDict, ...restDicts] = t.items;

  return (
    <section id="projects" className="py-24 lg:py-32 px-6">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          <ProjectCard
            project={featuredProject}
            projectDict={featuredDict}
            viewGithub={t.view_github}
            featured
          />
          {restProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              projectDict={restDicts[i]}
              viewGithub={t.view_github}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

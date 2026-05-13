"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 20);
  });

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-sm font-semibold text-[#fafafa] tracking-tight hover:text-white transition-colors"
          >
            AM<span className="text-indigo-400">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-[#a1a1aa] hover:text-[#fafafa] rounded-lg hover:bg-white/[0.05] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#71717a] hover:text-[#fafafa] rounded-lg hover:bg-white/[0.05] transition-all duration-200"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#71717a] hover:text-[#fafafa] rounded-lg hover:bg-white/[0.05] transition-all duration-200"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href="#contact"
              className="ml-1 px-4 py-1.5 text-sm font-medium bg-white text-[#09090b] rounded-xl hover:bg-white/90 transition-all duration-200"
            >
              Contact
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#a1a1aa] hover:text-white rounded-lg hover:bg-white/[0.05] transition-all"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-0 top-16 z-40 bg-[#09090b]/95 backdrop-blur-xl border-b border-white/[0.06] md:hidden"
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm text-[#a1a1aa] hover:text-[#fafafa] rounded-lg hover:bg-white/[0.05] transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3 mt-2 border-t border-white/[0.06]">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm text-[#a1a1aa] hover:text-white rounded-lg hover:bg-white/[0.05] transition-all"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm text-[#a1a1aa] hover:text-white rounded-lg hover:bg-white/[0.05] transition-all"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, stagger } from "@/lib/animations";
import type { Dictionary } from "@/lib/dictionaries";

const contactIcons = [Mail, GithubIcon, LinkedinIcon];
const contactHrefs = [
  "mailto:agustin.molee@gmail.com",
  "https://github.com/aguustin",
  "https://www.linkedin.com/in/agust%C3%ADn-mol%C3%A9-barolo-b042141b1/",
];
const contactValues = [
  "agustin.molee@gmail.com",
  "github.com/aguustin",
  "linkedin.com/in/agustin-mole",
];

export function ContactSection({ dict }: { dict: Dictionary }) {
  const t = dict.contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 px-6">
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-4"
          >
            {t.links.map(({ label, description }, i) => {
              const Icon = contactIcons[i];
              const href = contactHrefs[i];
              const value = contactValues[i];
              return (
                <motion.a
                  key={label}
                  variants={fadeUp}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.06] transition-colors">
                    <Icon size={16} className="text-[#a1a1aa]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-[#52525b] mb-0.5">{label}</p>
                    <p className="text-sm text-[#e4e4e7] font-medium truncate">{value}</p>
                    <p className="text-xs text-[#3f3f46] mt-0.5">{description}</p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-[#3f3f46] group-hover:text-[#71717a] transition-colors flex-shrink-0"
                  />
                </motion.a>
              );
            })}

            <motion.div
              variants={fadeUp}
              className="mt-6 p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.04]"
            >
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                <span className="text-indigo-400 font-medium">
                  {t.available_text}
                </span>{" "}
                {t.available_detail}
              </p>
            </motion.div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 lg:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#71717a] mb-2 font-medium">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder={t.form.name_placeholder}
                    className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-[#fafafa] placeholder-[#3f3f46] focus:outline-none focus:border-white/[0.18] focus:bg-white/[0.05] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#71717a] mb-2 font-medium">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder={t.form.email_placeholder}
                    className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-[#fafafa] placeholder-[#3f3f46] focus:outline-none focus:border-white/[0.18] focus:bg-white/[0.05] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#71717a] mb-2 font-medium">
                  {t.form.message}
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder={t.form.message_placeholder}
                  className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-[#fafafa] placeholder-[#3f3f46] focus:outline-none focus:border-white/[0.18] focus:bg-white/[0.05] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#09090b] text-sm font-medium rounded-xl hover:bg-white/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "idle" && (
                  <>
                    {t.form.send}
                    <Send size={14} />
                  </>
                )}
                {status === "sending" && (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-[#09090b]/30 border-t-[#09090b] rounded-full animate-spin" />
                    {t.form.sending}
                  </span>
                )}
                {status === "sent" && (
                  <span className="text-emerald-700">{t.form.sent}</span>
                )}
              </button>

              <p className="text-xs text-[#3f3f46] text-center">
                {t.form.response_time}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

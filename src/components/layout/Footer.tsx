import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import type { Dictionary } from "@/lib/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-white/[0.06] py-10 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-[#52525b]">
          <span className="font-medium text-[#71717a]">AM.</span>
          <span>·</span>
          <span>{dict.footer.role}</span>
        </div>

        <div className="flex items-center gap-1">
          <a
            href="mailto:agustin.molee@gmail.com"
            className="p-2 text-[#52525b] hover:text-[#a1a1aa] rounded-lg hover:bg-white/[0.04] transition-all"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://github.com/aguustin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#52525b] hover:text-[#a1a1aa] rounded-lg hover:bg-white/[0.04] transition-all"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://linkedin.com/in/agustin-mole"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#52525b] hover:text-[#a1a1aa] rounded-lg hover:bg-white/[0.04] transition-all"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>

        <p className="text-xs text-[#3f3f46]">
          © {new Date().getFullYear()} Agustín Molé
        </p>
      </div>
    </footer>
  );
}

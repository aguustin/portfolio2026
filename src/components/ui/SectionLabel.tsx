import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase",
        "bg-white/[0.04] border border-white/[0.08] text-[#71717a]",
        className
      )}
    >
      {children}
    </div>
  );
}

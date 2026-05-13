import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-white/[0.06] text-[#a1a1aa] border border-white/[0.06]",
    accent:
      "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
    success:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    outline: "border border-white/[0.12] text-[#a1a1aa]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

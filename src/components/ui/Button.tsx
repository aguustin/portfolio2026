"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
  external?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-white text-[#09090b] hover:bg-white/90 shadow-[0_1px_2px_rgba(0,0,0,0.5)]",
    secondary:
      "bg-white/[0.06] text-[#fafafa] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/[0.14]",
    ghost: "text-[#a1a1aa] hover:text-[#fafafa] hover:bg-white/[0.05]",
    outline:
      "border border-white/[0.12] text-[#fafafa] hover:border-white/[0.2] hover:bg-white/[0.04]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={classes}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}

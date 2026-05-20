"use client";

import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost" | "navy" | "ice";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  id: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  id,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold tracking-tight rounded-xl transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/30";

  const variants = {
    primary: "bg-[#0092ad] text-white shadow-lg shadow-[#0092ad]/20 hover:bg-[#007b94]",
    secondary: "bg-brand-blue text-white hover:bg-brand-blue/90 shadow-sm shadow-brand-blue/10",
    outline: "border border-brand-blue/15 text-brand-blue bg-white/40 backdrop-blur hover:bg-brand-blue/5 hover:border-brand-blue/30",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
    ghost: "text-brand-blue hover:bg-brand-blue/5",
    navy: "bg-brand-navy text-text-on-dark hover:bg-brand-navy/90 border border-white/10",
    ice: "bg-brand-ice text-brand-navy hover:bg-brand-ice/90 shadow-sm shadow-brand-ice/10",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base rounded-2xl gap-2.5",
  };

  return (
    <motion.button
      id={id}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { Star, ShieldCheck, Wind, UserCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/shared/constants";

export default function TrustBar() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const trustItems = [
    {
      label: "5.0 HomeAdvisor Rating",
      icon: <Star className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" />,
    },
    {
      label: "Licensed & Insured",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />,
    },
    {
      label: "Allergy & Air Specialist",
      icon: <Wind className="w-5 h-5 text-brand-ice shrink-0" />,
    },
    {
      label: "Direct-to-Owner Service",
      icon: <UserCheck className="w-5 h-5 text-sky-400 shrink-0" />,
    },
  ];

  return (
    <section
      id="brand-trust-bar"
      className="bg-brand-navy py-6 border-y border-white/10 relative overflow-hidden select-none"
    >
      {/* Decorative clean air subtle glow */}
      <span className="absolute -left-12 top-0 bottom-0 w-48 bg-brand-ice/5 rounded-full blur-2xl pointer-events-none"></span>
      <span className="absolute -right-12 top-0 bottom-0 w-48 bg-sky-500/5 rounded-full blur-2xl pointer-events-none"></span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center justify-between"
        >
          {trustItems.map((item, idx) => (
            <motion.div
              key={item.label}
              id={`trust-bar-item-${idx}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 justify-center md:justify-start bg-white/5 border border-white/5 md:bg-transparent md:border-0 rounded-xl p-3 md:p-0 transition-colors"
            >
              <div className="flex items-center justify-center p-1.5 rounded-lg bg-white/5 md:bg-transparent md:p-0 shrink-0">
                {item.icon}
              </div>
              <span className="font-display text-xs sm:text-sm font-semibold tracking-wide text-text-on-dark text-center md:text-left leading-normal">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

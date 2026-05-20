"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { ShieldCheck, Wind, Star, Check, User } from "lucide-react";
import { BUSINESS_INFO } from "@/shared/constants";
import { useHero } from "./useHero";
import HeroForm from "./HeroForm";

// Framer Motion entry orchestrations
const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
};

const formVariants: Variants = {
  hidden: { opacity: 0, scale: 0.93, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 85, damping: 13, delay: 0.2 },
  },
};

export default function Hero() {
  const hookData = useHero();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-tr from-[#f0f9ff]/80 via-white to-[#e0f2fe]/50 min-h-[92vh] flex items-center"
    >
      {/* Dynamic cooling wind vector streams simulating fresh pure airflow */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 800">
          <path
            d="M -100,250 C 300,100 600,450 1000,200 C 1300,50 1600,180 1800,120"
            fill="none"
            stroke="url(#wind-grad-1)"
            strokeWidth="4"
            strokeLinecap="round"
            className="animate-pulse"
          />
          <path
            d="M -50,450 C 400,320 700,500 1100,350 C 1400,250 1500,400 1900,320"
            fill="none"
            stroke="url(#wind-grad-2)"
            strokeWidth="2.5"
            strokeDasharray="10 12"
          />
          <defs>
            <linearGradient id="wind-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(75% 0.15 195)" stopOpacity="0" />
              <stop offset="50%" stopColor="oklch(75% 0.15 195)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="oklch(35% 0.12 245)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="wind-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(99% 0.005 200)" stopOpacity="0" />
              <stop offset="50%" stopColor="oklch(75% 0.15 195)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="oklch(75% 0.15 195)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Block: Core Value Proposition */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Trust Validation Ribbon */}
            <motion.div variants={textItemVariants} className="inline-flex">
              <span className="inline-flex items-center gap-2 bg-[#e0f2fe] text-brand-blue border border-[#bae6fd] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide">
                <ShieldCheck className="w-4 h-4 text-[#0284c7]" />
                <span>{BUSINESS_INFO.license}</span>
              </span>
            </motion.div>

            {/* The Main Hook Headline */}
            <motion.h1
              variants={textItemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-brand-blue tracking-tight leading-[1.08]"
            >
              Honest Service.<br />
              Clean Air.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-[#0d9488] to-[#0ea5e9]">
                No Speeches.
              </span>
            </motion.h1>

            {/* Sub-headline positioning Javi Air as the honest alternative */}
            <motion.p
              variants={textItemVariants}
              className="font-sans text-base sm:text-lg text-[#324a56] max-w-xl leading-relaxed font-light"
            >
              {BUSINESS_INFO.shortName} provides 5-star A/C repair and specialized air filtration for South Florida homes. No pushy sales—just expert solutions to keep you cool and healthy.
            </motion.p>

            {/* Optimized Vibe Trust Row */}
            <motion.div 
              variants={textItemVariants}
              className="grid gap-3 sm:gap-4 py-4 border-y border-brand-blue/5 my-2"
            >
              <span className="text-[10px] font-bold tracking-widest text-[#5d7d8e] uppercase">
                WHY SOUTH FLORIDA TRUSTS {BUSINESS_INFO.principal.toUpperCase()}:
              </span>
              <div className="grid sm:grid-cols-3 gap-4">
                {/* Stat 1 */}
                <div className="flex items-start gap-2.5 bg-white/50 p-3 rounded-xl border border-brand-blue/5">
                  <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600 mt-0.5 shrink-0">
                    <Star className="w-4 h-4 fill-amber-500 stroke-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-brand-blue leading-tight">5.0 Star Rated</h4>
                    <p className="text-[11px] text-[#4d6675] mt-0.5 leading-tight">100% Recommended</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-start gap-2.5 bg-white/50 p-3 rounded-xl border border-brand-blue/5">
                  <div className="p-1.5 rounded-lg bg-[#e0f2fe] text-[#0284c7] mt-0.5 shrink-0">
                    <Wind className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-brand-blue leading-tight">Air Quality Expert</h4>
                    <p className="text-[11px] text-[#4d6675] mt-0.5 leading-tight">Allergy-Safe Solutions</p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-start gap-2.5 bg-white/50 p-3 rounded-xl border border-brand-blue/5">
                  <div className="p-1.5 rounded-lg bg-[#ccfbf1] text-[#0d9488] mt-0.5 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-brand-blue leading-tight">Direct-To-Owner</h4>
                    <p className="text-[11px] text-[#4d6675] mt-0.5 leading-tight">Deal with {BUSINESS_INFO.principal}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bullet Point Verification */}
            <motion.div variants={textItemVariants} className="flex flex-wrap gap-x-6 gap-y-2">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-[#115e59]">
                <Check className="w-4 h-4 text-[#0d9488] stroke-[3px]" />
                <span>Zero Sales Quotas</span>
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-[#0369a1]">
                <Check className="w-4 h-4 text-[#0284c7] stroke-[3px]" />
                <span>Variable Diagnostics</span>
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-[#334155]">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3px]" />
                <span>Loaded Rapid-Repair Vehicle</span>
              </span>
            </motion.div>
          </motion.div>

          {/* Right Block: High-Converting Lead Form Card using modular form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative"
          >
            <HeroForm {...hookData} />

            {/* Radiant glowing aura backing the lead converter applet */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-ice/20 to-[#a6dce8]/15 rounded-[36px] blur-xl z-0 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

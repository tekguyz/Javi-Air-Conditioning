"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { Wind, Activity, Layers, Wrench, ShieldCheck, CheckCircle2, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO } from "@/shared/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesBento() {
  // Motion card animation profiles
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 14 }
    }
  };

  return (
    <section id="services" className="py-24 bg-brand-cloud relative overflow-hidden">
      {/* Decorative climate circulation accents */}
      <span className="absolute -top-24 right-0 w-96 h-96 bg-brand-ice/5 rounded-full blur-3xl opacity-30 pointer-events-none"></span>
      <span className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl opacity-20 pointer-events-none"></span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="ENGINEERING STANDARDS"
            title={
              <>
                Clinical Air Flow Solutions <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0092ad] to-[#0ea5e9]">
                  Configured with Meticulous Precision
                </span>
              </>
            }
          />
          <p className="font-sans text-xs sm:text-sm text-[#4a6371] max-w-sm font-light leading-relaxed">
            We isolate atmospheric variables, solve load balance bottlenecks, and deploy medical-grade hygiene setups. Zero sales quotas, pure technical craftsmanship.
          </p>
        </div>

        {/* Asymmetric Bento Grid Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          
          {/* Card 1 (Large - Col 8): Allergy-Safe Filtration */}
          <motion.div
            variants={cardVariants}
            id="bento-allergy-card"
            whileHover={{ y: -5 }}
            className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group min-h-[380px]"
          >
            {/* Ice light accent overlay on hover */}
            <span className="absolute -right-12 -top-12 w-64 h-64 bg-brand-ice/5 rounded-full blur-3xl group-hover:bg-brand-ice/15 transition-colors"></span>

            <div className="relative z-10 flex flex-col gap-6">
              {/* Card Meta Indicator */}
              <div className="flex items-center justify-between">
                <div className="p-3 bg-brand-navy rounded-2xl text-brand-ice shadow-sm flex items-center justify-center">
                  <Wind className="w-6 h-6 stroke-[2px]" />
                </div>
                <span className="text-[10px] font-bold px-3 py-1 bg-brand-ice/10 text-[#0092ad] rounded-full uppercase tracking-wider">
                  Clinic Grade Air Filter
                </span>
              </div>

              {/* Title and Copy Block */}
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-xl sm:text-2xl font-black text-brand-navy">
                  Allergy-Safe Filtration
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#4c6371] leading-relaxed font-light max-w-xl">
                  We isolate microscopic dander, dynamic mold pathogens, and atmospheric allergens to configure custom clinic-grade HEPA filters. South Florida&apos;s humidity requires deliberate air-sanitizing workflows, not standard generic paper screens.
                </p>
              </div>

              {/* Specific Tech Columns */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span className="font-sans text-xs font-semibold text-brand-navy">HEPA Screen Arrays</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span className="font-sans text-xs font-semibold text-brand-navy">UV-C Bio Sanitizer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span className="font-sans text-xs font-semibold text-brand-navy">99.8% Efficiency</span>
                </div>
              </div>
            </div>

            {/* Micro interactivity footer line */}
            <div className="relative z-10 pt-6 flex items-center justify-between text-xs font-bold text-[#0ea5e9]">
              <span className="tracking-wider uppercase">Active Atmospheric Inspection</span>
              <a href="#home" className="flex items-center gap-1 hover:underline">
                <span>Free Check</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 2 (Col 4): Expert Diagnostics */}
          <motion.div
            variants={cardVariants}
            id="bento-diagnostics-card"
            whileHover={{ y: -5 }}
            className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group min-h-[380px]"
          >
            <span className="absolute -right-16 -bottom-16 w-48 h-48 bg-sky-500/5 rounded-full blur-2xl"></span>

            <div className="relative z-10 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-brand-navy rounded-2xl text-brand-ice shadow-sm flex items-center justify-center">
                  <Activity className="w-6 h-6 stroke-[2px]" />
                </div>
                <span className="text-[10px] font-bold px-3 py-1 bg-[#f0fdf4] text-[#115e59] rounded-full uppercase tracking-wider">
                  Honest Read
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                <h3 className="font-display text-lg sm:text-xl font-black text-brand-navy leading-snug">
                  Expert Diagnostics
                </h3>
                <span className="inline-block text-[11px] font-bold text-[#0ea5e9] tracking-wider uppercase leading-none">
                  No Sales Speeches
                </span>
                <p className="font-sans text-xs text-[#4c6371] leading-relaxed font-light">
                  We measure electric terminal points, coil heat dissipation ratios, and fluid coefficient cycles with zero quota pressure. You get a direct report matching pure physical read-outs.
                </p>
              </div>
            </div>

            <div className="relative z-10 pt-5 border-t border-slate-100/60">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-xs text-[#4a6371]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span>Javier Lima certified inspection</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-[#4a6371]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span>Flat rates with zero hidden fees</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3 (Col 5): Duct System Design */}
          <motion.div
            variants={cardVariants}
            id="bento-ducts-card"
            whileHover={{ y: -5 }}
            className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group min-h-[350px]"
          >
            <span className="absolute -left-12 -bottom-12 w-48 h-48 bg-brand-ice/5 rounded-full blur-2xl"></span>

            <div className="relative z-10 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-brand-navy rounded-2xl text-brand-ice shadow-sm flex items-center justify-center">
                  <Layers className="w-6 h-6 stroke-[2px]" />
                </div>
                <span className="text-[10px] font-bold px-3 py-1 bg-[#faf5ff] text-indigo-700 rounded-full uppercase tracking-wider">
                  Load Sized
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                <h3 className="font-display text-lg sm:text-xl font-black text-brand-navy leading-snug">
                  Duct System Design
                </h3>
                <p className="font-sans text-xs text-[#4c6371] leading-relaxed font-light">
                  Eliminate hot rooms by restructuring static pressure distributions. We deliver custom load calculations and design clean, insulated duct structures to avoid air loss and condensation mold colonies.
                </p>
              </div>
            </div>

            <div className="relative z-10 pt-5 border-t border-slate-100/60 flex items-center justify-between text-[11px] text-[#4a6371]">
              <span className="font-semibold text-brand-navy">Double-Vapor Sealed</span>
              <a href="#home" className="flex items-center gap-0.5 text-[#0ea5e9] font-bold">
                <span>View Specs</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Card 4 (Col 7): Emergency Repair */}
          <motion.div
            variants={cardVariants}
            id="bento-repair-card"
            whileHover={{ y: -5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group min-h-[350px]"
          >
            <span className="absolute -right-16 -top-16 w-52 h-52 bg-slate-500/5 rounded-full blur-3xl"></span>

            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-brand-navy rounded-2xl text-brand-ice shadow-sm flex items-center justify-center">
                  <Wrench className="w-6 h-6 stroke-[2px]" />
                </div>
                <span className="text-[10px] font-bold px-3 py-1 bg-rose-50 border border-rose-100 text-rose-600 rounded-full uppercase tracking-wider">
                  24/7 Priority Active
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                <h3 className="font-display text-lg sm:text-xl font-black text-brand-navy leading-snug">
                  Emergency Repair
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#4c6371] leading-relaxed font-light max-w-lg">
                  Standard dispatch teams are fully loaded to solve complex electrical relays, condenser fan breakdowns, and system freezes immediately. We don&apos;t keep you waiting in Florida&apos;s humidity.
                </p>
              </div>
            </div>

            <div className="relative z-10 pt-5 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-sans text-[#4a6371] font-light">Loaded Service Fleet</span>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-sans font-extrabold text-[#0092ad] flex items-center gap-1.5 hover:underline">
                <span>Call Javier Direct</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

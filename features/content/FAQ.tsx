"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, ShieldAlert, Sparkles, AlertCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/shared/constants";
import SectionHeading from "@/components/ui/SectionHeading";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What do you mean by 'No Sales Speeches'?",
    answer: "Javier focuses on diagnostics, not scripts. We find the root cause, show it to you, and provide a fair price. We don't employ 'sales techs'."
  },
  {
    question: "Can you really help with my home allergies?",
    answer: "Yes. We specialize in high-efficiency whole-home filtration systems and custom duct designs that significantly reduce dust and allergens at the source."
  },
  {
    question: "How fast can you get here for an emergency?",
    answer: "We prioritize emergency repairs in the Florida heat. Javier and the team are available for 24/7 rapid response."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#f8fafc] border-b border-brand-blue/5 relative overflow-hidden">
      {/* Structural visual currents */}
      <span className="absolute top-0 right-0 w-80 h-80 bg-[#e0f2fe]/40 rounded-full blur-3xl opacity-30 pointer-events-none"></span>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <SectionHeading
            badge="HASSLE-FREE CLARITY"
            title="Frequently Asked Questions"
            subtitle="Get straightforward answers directly from our engineering team—no sales scripts, no exaggerated jargon."
            align="center"
          />
        </div>

        {/* Accordion Stack */}
        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                id={`faq-accordion-item-${index}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#bae6fd] shadow-md shadow-[#0ea5e9]/5"
                    : "bg-white/70 hover:bg-white border-slate-200/80 shadow-sm hover:shadow"
                }`}
              >
                {/* Trigger button */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-5 py-5 sm:px-6 sm:py-5.5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                      isOpen ? "bg-brand-navy text-brand-ice" : "bg-slate-100 text-slate-400"
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="font-display text-sm sm:text-base font-extrabold text-brand-navy leading-snug mt-0.5">
                      {item.question}
                    </span>
                  </div>
                  <div className={`p-1 rounded-lg transition-transform duration-200 shrink-0 ${
                    isOpen ? "bg-[#e0f2fe] text-[#0ea5e9] rotate-180" : "bg-slate-50 text-slate-400"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated content panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="border-t border-slate-100/60 px-5 pb-5 pt-4 sm:px-[62px] sm:pb-6 font-sans text-xs sm:text-sm text-brand-navy/80 leading-relaxed font-light bg-[#f8fafc]/50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Direct Callback Support validation snippet */}
        <div className="mt-12 p-5 rounded-2xl bg-white border border-[#bae6fd]/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#e0f2fe] text-[#0284c7] shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="text-center sm:text-left">
              <span className="block font-display text-sm font-black text-brand-blue">
                Have a different emergency HVAC issue?
              </span>
              <span className="block font-sans text-xs text-slate-500 font-light mt-0.5">
                Speak directly to Javier now for immediate guidance.
              </span>
            </div>
          </div>
          <a
            id="faq-phone-cta"
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="select-none text-center bg-[#0092ad] text-white font-sans font-bold text-xs tracking-wide px-5 py-3 rounded-xl shadow-lg shadow-[#0092ad]/10 hover:bg-[#007b94] transition-all"
          >
            Call Javier Direct: {BUSINESS_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
}

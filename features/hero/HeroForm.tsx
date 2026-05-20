"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Phone, Settings, Sparkles, Check, ShieldCheck, Droplets } from "lucide-react";
import { BUSINESS_INFO } from "@/shared/constants";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

interface HeroFormProps {
  name: string;
  setName: (v: string) => void;
  phone: string;
  handlePhoneChange: (v: string) => void;
  phoneError: string;
  service: string;
  setService: (v: string) => void;
  success: boolean;
  isSubmitting: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function HeroForm({
  name,
  setName,
  phone,
  handlePhoneChange,
  phoneError,
  service,
  setService,
  success,
  isSubmitting,
  handleSubmit,
}: HeroFormProps) {
  return (
    <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-white border border-brand-blue/10 shadow-2xl shadow-brand-blue/10 overflow-hidden">
      {/* Decorative top strip */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-ice via-[#0d9488] to-[#0ea5e9]"></div>

      <div className="flex items-start justify-between border-b border-brand-blue/5 pb-4.5 mb-5.5">
        <div>
          <h3 className="font-display text-lg font-black text-brand-blue tracking-tight leading-none">
            Fast Diagnostic Request
          </h3>
          <span className="inline-block font-sans text-[10px] font-bold tracking-widest text-[#0ea5e9] uppercase leading-none mt-2">
            RESERVE FIRST IN LINE QUEUE
          </span>
        </div>
        <div className="flex items-center gap-1 bg-[#f0f9ff] px-2.5 py-1 rounded-lg border border-[#e0f2fe]">
          <Droplets className="w-3.5 h-3.5 text-[#0284c7]" />
          <span className="font-mono text-[10px] font-black text-[#0284c7]">FL REGS</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-8 text-center flex flex-col items-center justify-center min-h-[300px]"
          >
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-5 border border-emerald-100 shadow-sm animate-bounce">
              <Check className="w-7 h-7 stroke-[3px]" />
            </div>

            <h4 className="font-display text-xl font-black text-brand-blue tracking-tight mb-2.5">
              Request Received!
            </h4>

            <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed font-light px-2 mb-6">
              {BUSINESS_INFO.principal} or a senior tech is being notified now. We&apos;ll call you back in minutes.
            </p>

            <div className="flex items-center gap-2 bg-[#f0fdf4] border border-[#dcfce7] px-4 py-2.5 rounded-xl">
              <Phone className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span className="font-sans text-xs font-bold text-emerald-800">
                Dispatch Call Active 24/7
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            id="lead-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4.5 scroll-mt-24"
          >
            {/* Name Input using our custom Input Atom */}
            <Input
              id="hero-name-input"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="E.g., Michael Johnson"
              label="Homeowner Name"
              icon={<User className="w-4 h-4" />}
            />

            {/* Phone Input using our custom Input Atom */}
            <Input
              id="hero-phone-input"
              type="tel"
              required
              value={phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              placeholder="E.g., (305) 555-0199"
              label="Direct Callback Phone"
              icon={<Phone className="w-4 h-4" />}
              error={phoneError}
            />

            {/* Service Needed Dropdown */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="hero-service-select" className="font-sans text-[10px] font-bold text-[#475569] tracking-wider uppercase">
                Required Service Focus
              </label>
              <div className="relative">
                <Settings className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8ea3b1]" />
                <select
                  id="hero-service-select"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/30 focus:border-[#0ea5e9] text-brand-blue font-sans transition-all cursor-pointer focus:bg-white"
                >
                  <option value="repair">Emergency Repair</option>
                  <option value="install">New System Installation</option>
                  <option value="filtration">Air Quality &amp; Filtration</option>
                  <option value="maintenance">Preventative Lifespan Tune-up</option>
                </select>
              </div>
            </div>

            {/* Reusable Core Button Atom styling matching precisely */}
            <Button
              id="hero-submit-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2.5 py-3.5 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>CONTACTING {BUSINESS_INFO.principal.toUpperCase()}...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4.5 h-4.5 text-[#a5f3fc]" />
                  <span>REQUEST FAST DIAGNOSTIC</span>
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Secure certification seal */}
      <div className="mt-5 pt-4.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#64748b]">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Licensed Florida HVAC Contractor</span>
        </span>
        <span className="font-mono font-bold text-brand-blue">{BUSINESS_INFO.license.split("#")[1]}</span>
      </div>
    </div>
  );
}

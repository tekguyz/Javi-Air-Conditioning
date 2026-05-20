"use client";

import React from "react";
import { Wind, Phone, ShieldCheck, Mail, MapPin, Clock, Star, Heart } from "lucide-react";
import { BUSINESS_INFO } from "@/shared/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-brand-navy text-text-on-dark border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Structural airflow decor */}
      <span className="absolute bottom-0 left-0 w-64 h-64 bg-brand-ice/5 rounded-full blur-3xl opacity-25 pointer-events-none"></span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Categories */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Main Info Column (Col 5) */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <a href="#home" className="flex items-center gap-2 group focus:outline-none">
              <div className="p-2 bg-brand-ice/15 rounded-xl text-brand-ice border border-brand-ice/20 shadow transition-transform group-hover:scale-105">
                <Wind className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-black tracking-tight text-white leading-none">
                  JAVI AIR
                </span>
                <span className="font-sans text-[10px] text-brand-ice tracking-wider uppercase font-bold mt-0.5">
                  Conditioning
                </span>
              </div>
            </a>

            <p className="font-sans text-xs text-[#bae6fd]/80 leading-relaxed font-light max-w-sm">
              Led by Javier Lima, Javi Air Conditioning sets a new standard of technical audit precision. We eliminate commissioning inflation, focus strictly on clean allergy air metrics, and guarantee 100% honest assessments.
            </p>

            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 w-fit">
              <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400 animate-pulse" />
              <span className="font-sans text-[11px] font-semibold text-white/95">
                5.0 Rated with {BUSINESS_INFO.rating.reviewsCount} Google Reviews
              </span>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <span className="font-sans text-[11px] font-bold text-brand-ice tracking-wider uppercase">
                OFFICIAL FL REGULATORY COMPLIANCE:
              </span>
              <div className="flex items-center gap-2 text-xs text-[#bae6fd]">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono font-bold tracking-wider">{BUSINESS_INFO.license}</span>
              </div>
            </div>
          </div>

          {/* Quick Scrolling Categories (Col 3) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-display text-xs font-bold text-brand-ice tracking-wider uppercase">
              Clinical Workflows
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#services" className="font-sans text-xs text-[#bae6fd]/70 hover:text-white transition-colors">
                Central Air Installation
              </a>
              <a href="#services" className="font-sans text-xs text-[#bae6fd]/70 hover:text-white transition-colors">
                Rapid Certified Repair
              </a>
              <a href="#services" className="font-sans text-xs text-[#bae6fd]/70 hover:text-white transition-colors">
                Seasonal Maintenance
              </a>
              <a href="#services" className="font-sans text-xs text-[#bae6fd]/70 hover:text-white transition-colors">
                Hospital-Grade Allergy Filters
              </a>
              <a href="#services" className="font-sans text-xs text-[#bae6fd]/70 hover:text-white transition-colors">
                Energy-Saving Heat Pumps
              </a>
            </div>
          </div>

          {/* Direct Support & Schedule (Col 4) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-display text-xs font-bold text-brand-ice tracking-wider uppercase">
              24/7 Rapid Dispatch
            </h4>
            <p className="font-sans text-xs text-[#bae6fd]/70 leading-relaxed font-light mb-2">
              Our trucks are fully loaded to resolve complex AC electrical switch or compressor issues during our initial diagnostic visit.
            </p>

            <div className="flex flex-col gap-3">
              <a
                id="footer-phone-anchor"
                href="tel:8449415284"
                className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-colors group"
              >
                <div className="p-2 bg-brand-ice/20 rounded-xl text-brand-ice group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] text-[#bae6fd]/60 uppercase leading-none font-bold">
                    CALL JAVIER LIMA DIRECT
                  </span>
                  <span className="font-display text-sm font-extrabold text-[#95dfff] mt-1.5 leading-none">
                    {BUSINESS_INFO.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-xs text-[#bae6fd]/70 font-light px-1">
                <Clock className="w-4 h-4 text-brand-ice shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-white">Always Active Dispatch</span>
                  <span>Same-day turnaround for standard Florida HVAC breakdowns.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Lower compliance block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <p className="font-sans text-center sm:text-left leading-normal">
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved. Registered Florida State HVAC Certified Contractor.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-sans">Honest Sales. Clinical Diagnostics. Clean Air.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="font-sans flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> for Florida
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

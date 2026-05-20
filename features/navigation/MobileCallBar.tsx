"use client";

import React, { useState, useEffect } from "react";
import { Phone, CheckCircle, Flame, Wind } from "lucide-react";
import { BUSINESS_INFO } from "@/shared/constants";

export default function MobileCallBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide bar when scrolled deep near footer so it doesn't overlap text
    const handleScroll = () => {
      const footerElement = document.getElementById("main-footer");
      if (!footerElement) return;

      const footerRect = footerElement.getBoundingClientRect();
      const triggerHeight = window.innerHeight;

      if (footerRect.top <= triggerHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="mobile-action-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/80 px-4 py-3 pb-safe-bottom md:hidden flex items-center justify-between gap-3.5 shadow-[0_-12px_35px_rgba(14,29,37,0.12)]"
    >
      {/* Live response beacon */}
      <div className="flex flex-col gap-0.5 shrink-0 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-sans text-[10px] font-extrabold text-slate-800 tracking-wider uppercase">
            ACTIVE NOW
          </span>
        </div>
        <span className="font-sans text-[9px] text-slate-500 font-medium">
          Dispatch in minutes
        </span>
      </div>

      <div className="flex items-center gap-2 w-full max-w-[70%]">
        {/* Rapid Form Shortcut button */}
        <a
          id="mobile-bar-scroll-btn"
          href="#lead-form"
          className="flex-1 select-none text-center bg-brand-blue/5 hover:bg-brand-blue/10 border border-brand-blue/10 rounded-xl px-3.5 py-2.5 text-xs font-bold text-brand-blue transition-all active:scale-[0.97]"
        >
          Request Fix
        </a>

        {/* Big high-contrast tap-to-call button */}
        <a
          id="mobile-bar-phone-btn"
          href="tel:8449415284"
          className="flex-1 select-none flex items-center justify-center gap-1.5 text-center bg-[#0092ad] text-white rounded-xl px-4 py-2.5 text-xs font-black tracking-wide shadow-md shadow-[#0092ad]/20 active:scale-[0.97] transition-all"
        >
          <Phone className="w-4 h-4 text-[#a5f3fc]" />
          <span>Call</span>
        </a>
      </div>
    </div>
  );
}

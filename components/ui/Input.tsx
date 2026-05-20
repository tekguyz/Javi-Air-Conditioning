"use client";

import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  icon?: React.ReactNode;
  label?: string;
  error?: string;
}

export default function Input({
  id,
  icon,
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={id} className="font-sans text-[10px] font-bold text-[#475569] tracking-wider uppercase">
          {label}
        </label>
      )}
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-[#8ea3b1]">
            {icon}
          </div>
        )}
        <input
          id={id}
          className={`w-full bg-[#f8fafc] border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 text-brand-navy font-sans transition-all placeholder-[#94a3b8] focus:bg-white ${
            icon ? "pl-10" : "pl-4"
          } ${
            error
              ? "border-red-300 focus:ring-red-500/20 focus:border-red-500 bg-red-50/5"
              : "border-slate-200 focus:ring-[#0ea5e9]/30 focus:border-[#0ea5e9]"
          } ${className}`}
          {...props}
        />
      </div>
      {error && (
        <span className="text-[11px] text-red-500 font-medium font-sans leading-none mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
}

"use client";

import React from "react";

interface SectionHeadingProps {
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`flex flex-col gap-3 ${isCenter ? "items-center text-center max-w-2xl mx-auto" : "max-w-xl"}`}>
      <span className="font-sans text-[10px] font-bold tracking-widest text-[#0e8eb5] uppercase bg-[#e0f9ff]/80 px-3.5 py-1.5 rounded-full inline-block border border-[#bfeffa]/80 shadow-sm w-fit">
        {badge}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-xs sm:text-sm text-[#4a6371] font-light leading-relaxed mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}

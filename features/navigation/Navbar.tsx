"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Wind, Phone, Menu, X, Star } from "lucide-react";
import { BUSINESS_INFO } from "@/shared/constants";
import Button from "@/components/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Javi", href: "#why-us" },
    { name: "F.A.Q.", href: "#faq" },
  ];

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-brand-blue/5 shadow-md shadow-brand-blue/2 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <a
              id="nav-logo-link"
              href="#home"
              className="group flex items-center gap-2 focus:outline-none"
            >
              <div className="relative flex items-center justify-center p-2.5 rounded-xl bg-brand-blue text-brand-ice shadow-md shadow-brand-blue/10 group-hover:scale-105 transition-transform">
                <Wind className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-black tracking-tight text-brand-blue leading-tight group-hover:text-brand-blue/90 transition-colors">
                  JAVI AIR
                </span>
                <span className="font-sans text-[10px] font-bold tracking-widest text-[#567a8c] uppercase leading-none">
                  Conditioning
                </span>
              </div>
            </a>

            {/* Google review star validation (Clinical status check) */}
            <div className="hidden lg:flex items-center gap-1.5 bg-brand-blue/5 px-3 py-1.5 rounded-full border border-brand-blue/5">
              <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
              <span className="font-sans text-xs font-semibold text-brand-blue">
                {BUSINESS_INFO.rating.score.toFixed(1)} Rated HVAC Specialist
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  href={link.href}
                  className="font-sans text-sm font-semibold text-brand-blue/75 hover:text-brand-blue transition-colors relative py-1 focus:outline-none focus:text-brand-blue"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <a
                id="navbar-phone-cta"
                href="tel:8449415284"
                className="flex items-center gap-2 px-3 py-2 text-sm font-black text-brand-blue hover:text-brand-blue/80 transition-colors focus:ring-1 focus:ring-brand-blue/20 rounded-xl"
              >
                <Phone className="w-4 h-4 stroke-[2.5px] text-[#0ea5e9] animate-pulse" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <a href="#lead-form" className="focus:outline-none">
                <Button id="navbar-book-btn" variant="primary" size="sm">
                  Rapid Diagnostic Form
                </Button>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-brand-blue hover:bg-brand-blue/5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Slide-out menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-white/95 backdrop-blur-2xl border-b border-brand-blue/5 shadow-xl md:hidden py-6 px-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-base font-semibold text-brand-blue py-2 px-3 rounded-lg hover:bg-brand-blue/5 transition-colors focus:outline-none"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-brand-blue/5 my-2"></div>
              <div className="flex flex-col gap-3 px-3">
                <a
                  id="mobile-phone-link"
                  href="tel:8449415284"
                  className="flex items-center gap-3 font-semibold text-brand-blue py-1 text-base"
                >
                  <Phone className="w-5 h-5 text-brand-ice animate-pulse" />
                  <span>Call Javi: {BUSINESS_INFO.phone}</span>
                </a>
                <span className="font-sans text-xs text-brand-blue/50">
                  License: {BUSINESS_INFO.license}
                </span>
                <a
                  href="#lead-form"
                  onClick={() => setIsOpen(false)}
                  className="w-full focus:outline-none"
                >
                  <Button id="mobile-book-btn" variant="secondary" size="md" className="w-full">
                    Open Diagnostic Form
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

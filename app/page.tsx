import React from "react";
import Navbar from "@/features/navigation/Navbar";
import Hero from "@/features/hero/Hero";
import TrustBar from "@/features/trust/TrustBar"; 
import ServicesBento from "@/features/services/ServicesBento";
import FAQ from "@/features/content/FAQ";
import Footer from "@/features/footer/Footer";
import MobileCallBar from "@/features/navigation/MobileCallBar";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-brand-cloud overflow-x-hidden">
      {/* Precision Navigation Overlay */}
      <Navbar />

      {/* Unified High-Converting Hero with Lead Injector */}
      <Hero />

      {/* Clinical Proof-Pillars & Honesty Assurance */}
      <TrustBar />

      {/* Interactive Air Service Specifications Grid */}
      <ServicesBento />

      {/* Easy FAQ Accordion Desk */}
      <FAQ />

      {/* Compliant Footer Frame */}
      <Footer />

      {/* Direct Quick-Thumb Mobile Action Bar */}
      <MobileCallBar />
    </main>
  );
}

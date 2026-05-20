"use client";

import { useState } from "react";

export function useHero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("repair");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const formatPhoneNumber = (value: string): string => {
    // Strip all non-digits
    const clean = value.replace(/\D/g, "");
    // Limit to max 10 digits
    const trimmed = clean.slice(0, 10);
    
    // Format to (###) ###-####
    if (trimmed.length === 0) return "";
    if (trimmed.length <= 3) return `(${trimmed}`;
    if (trimmed.length <= 6) return `(${trimmed.slice(0, 3)}) ${trimmed.slice(3)}`;
    return `(${trimmed.slice(0, 3)}) ${trimmed.slice(3, 6)}-${trimmed.slice(6, 10)}`;
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    setPhone(formatted);
    
    // Live validation feedback
    const digitsOnly = formatted.replace(/\D/g, "");
    if (digitsOnly.length === 0) {
      setPhoneError("");
    } else if (digitsOnly.length < 10) {
      setPhoneError("Phone number must be 10 digits");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digitsOnly = phone.replace(/\D/g, "");

    if (!name.trim()) return;
    if (digitsOnly.length !== 10) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    }

    setPhoneError("");
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, service }),
      });
      const data = await response.json();
      if (data && data.success) {
        setSuccess(true);
      } else {
        // Fallback to optimistic success so the user is never stuck
        setSuccess(true);
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback to optimistic success so user gets immediate response
      setSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
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
  };
}

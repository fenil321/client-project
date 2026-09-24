"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  Mail,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  // 1. ADDED: Loading and error feedback states
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Email format regex
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  };

  // Restrict phone input to digits only & max 10 characters
  const handlePhoneChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (onlyDigits.length <= 10) {
      setFormData((prev) => ({ ...prev, phone: onlyDigits }));
    }
  };

  // 2. UPDATED: Real API call to your /api/contact route
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // --- Client-side Validations ---
    if (formData.name.trim().length < 2) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (formData.phone.length !== 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setErrorMessage(
        "Please enter a valid email address (e.g. name@company.com).",
      );
      return;
    }

    if (!formData.service) {
      setErrorMessage("Please select a required coating service.");
      return;
    }

    if (formData.message.trim().length < 10) {
      setErrorMessage(
        "Please provide component details (minimum 10 characters).",
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to dispatch email");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setErrorMessage(
        err.message || "Failed to send message. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-industrial-900/50 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <div className="inline-flex items-center gap-3 text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              <span className="w-8 h-[1.5px] bg-amber-500" />
              <span>Get in touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Let&apos;s discuss your finishing requirement.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-10">
              Send us your component drawing or describe the application. We
              typically respond within a working day with feasibility and a
              quote.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-industrial-800 border border-slate-700 text-amber-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    Call
                  </div>
                  <div className="text-white text-sm font-medium mt-1">
                    Harpalsinh Sangdot —{" "}
                    <a
                      href="tel:+919054378300"
                      className="hover:text-amber-400"
                    >
                      +91 90543 78300
                    </a>
                  </div>
                  <div className="text-white text-sm font-medium">
                    Dashrathsinh Sangdot —{" "}
                    <a
                      href="tel:+919825906808"
                      className="hover:text-amber-400"
                    >
                      +91 98259 06808
                    </a>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-industrial-800 border border-slate-700 text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    Visit
                  </div>
                  <address className="text-slate-300 text-sm not-italic mt-1 leading-relaxed">
                    BLK 103 PLT 18, GM Plastic Gali,
                    <br />
                    Village Palod, Taluka Mangrol,
                    <br />
                    Dist. Surat — 394 110, India
                  </address>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-industrial-800 border border-slate-700 text-amber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    Email
                  </div>
                  <a
                    href="mailto:nilkanthindustry24@gmail.com"
                    className="text-white text-sm font-medium mt-1 hover:text-amber-400 block"
                  >
                    nilkanthindustry24@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Interactive RFQ Form */}
          <div className="p-8 rounded-2xl bg-industrial-950 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Request Feasibility & Quote
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill in your requirements below for rapid turnaround.
            </p>

            {submitted ? (
              <div className="p-6 rounded-lg bg-green-950/40 border border-green-800 text-center py-12">
                <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-1">
                  Inquiry Sent Successfully
                </h4>
                <p className="text-xs text-slate-300">
                  We will review your part specifications and contact you
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 3. ADDED: Error message banner if API fails */}
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-md bg-industrial-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Phone Number
                    </label>

                    <div className="relative flex items-center">
                      {/* Locked +91 Prefix & Divider */}
                      <div className="absolute left-0 inset-y-0 pl-3.5 flex items-center pointer-events-none select-none">
                        <span className="text-slate-400 font-medium text-sm">
                          +91
                        </span>
                        <span className="h-4 w-[1px] bg-slate-700 ml-2.5" />
                      </div>

                      {/* Phone Input */}
                      <input
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        required
                        placeholder="Your Number"
                        value={formData.phone}
                        onChange={(e) => {
                          // Strip non-digits and prevent leading '0'
                          let val = e.target.value.replace(/\D/g, "");
                          if (val.startsWith("0")) val = val.slice(1);

                          if (val.length <= 10) {
                            setFormData({ ...formData, phone: val });
                          }
                        }}
                        className="w-full pl-14 pr-4 py-2.5 rounded-md bg-industrial-900 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-500 transition-colors tracking-wide"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-md bg-industrial-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Required Coating Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-md bg-industrial-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    <option value="" disabled hidden>
                      Select a Service...
                    </option>
                    <option value="Hard Anodizing">Hard Anodizing</option>
                    <option value="Black Anodizing">Black Anodizing</option>
                    <option value="Silver Anodizing">Silver Anodizing</option>
                    <option value="Electroless Nickel Plating">
                      Electroless Nickel Plating
                    </option>
                    <option value="Other / Multiple">
                      Other / Multiple Finishes
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Component Details & Quantity
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Material, dimensions, quantity, and any other relevant details..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-md bg-industrial-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 resize-none"
                  />
                </div>

                {/* 4. UPDATED: Button shows loading spinner and disables during dispatch */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-md bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Feasibility Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

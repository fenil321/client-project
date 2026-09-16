"use client";

import { useState } from "react";
import { Phone, MapPin, Mail, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect to your email backend (Resend, Nodemailer, or Supabase)
    console.log("Form data:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
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
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              Get in touch
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
                    href="mailto:info@nilkanthindustries.in"
                    className="text-white text-sm font-medium mt-1 hover:text-amber-400 block"
                  >
                    info@nilkanthindustries.in
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
                    <input
                      type="tel"
                      required
                      placeholder="+91 ..."
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-md bg-industrial-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
                    />
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
                    className="w-full px-4 py-2.5 rounded-md bg-industrial-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500"
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

                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10"
                >
                  <Send className="w-4 h-4" />
                  Submit Feasibility Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

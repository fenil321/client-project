"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Inspection & Masking",
      desc: "Components received, inspected and selectively masked to protect critical surfaces.",
      detail: "Dimensional verification & precision tape application",
    },
    {
      num: "02",
      title: "Pre-treatment",
      desc: "Degreasing, etching and desmutting prepare the substrate for uniform coating adhesion.",
      detail: "Multi-stage alkaline wash & deoxidation",
    },
    {
      num: "03",
      title: "Electrolytic Process",
      desc: "Parts are dipped in controlled-temperature tanks for the selected anodizing or EN cycle.",
      detail: "Current density & temperature regulation",
    },
    {
      num: "04",
      title: "Sealing & Finishing",
      desc: "Hot-water or nickel-acetate sealing locks in colour, hardness and corrosion protection.",
      detail: "Micro-pore hydration lock",
    },
    {
      num: "05",
      title: "QA & Despatch",
      desc: "Thickness, adhesion and visual checks before careful packaging and on-time delivery.",
      detail: "Eddy-current micron testing & secure wrapping",
    },
  ];

  // Motion variants for staged timeline reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="process"
      className="py-24 bg-white text-slate-900 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <span className="w-8 h-[1.5px] bg-amber-500" />
            <span>Our Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            A five-stage path <br />
            to a flawless finish.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal">
            Every part follows the same disciplined workflow — engineered to
            deliver predictable, repeatable results at production scale.
          </p>
        </div>

        {/* --- Timeline Workflow --- */}
        <div className="relative">
          {/* Desktop Connecting Beam */}
          <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-slate-100 z-0">
            {/* Animated Laser Fill Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
              className="h-full w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 origin-left"
            />
          </div>

          {/* Mobile Vertical Track Line */}
          <div className="md:hidden absolute top-6 bottom-12 left-6 w-[2px] bg-slate-100 z-0">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 origin-top"
            />
          </div>

          {/* Animated 5 Steps Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-6 relative z-10"
          >
            {steps.map((step, i) => {
              const isSelected = activeStep === i;

              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  onMouseEnter={() => setActiveStep(i)}
                  className="group relative flex md:flex-col items-start gap-5 md:gap-0 cursor-pointer"
                >
                  {/* Step Node Circle */}
                  <div className="relative shrink-0 md:mb-6">
                    {/* Pulsing Aura on Active Node */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeGlow"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="absolute -inset-2 rounded-full bg-amber-500/20 blur-sm pointer-events-none"
                      />
                    )}

                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-sm tracking-wider transition-all duration-300 border-2 ${
                        isSelected
                          ? "bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/30"
                          : "bg-white text-slate-700 border-slate-200 group-hover:border-amber-400 group-hover:text-amber-500 shadow-sm"
                      }`}
                    >
                      {step.num}
                    </motion.div>
                  </div>

                  {/* Step Text Body */}
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <h3
                        className={`text-base sm:text-lg font-bold transition-colors duration-200 ${
                          isSelected
                            ? "text-amber-600"
                            : "text-slate-900 group-hover:text-amber-600"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isSelected
                            ? "text-amber-500 translate-x-1"
                            : "text-transparent"
                        }`}
                      />
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal mb-3">
                      {step.desc}
                    </p>

                    {/* Micro Technical Sub-label
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
                      <CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" />
                      <span>{step.detail}</span>
                    </div> */}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
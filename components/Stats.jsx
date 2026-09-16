"use client";

import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract numeric part and non-numeric suffix (e.g., "15" and "+", or "99.8" and "%")
  const numericMatch = value.match(/[\d.]+/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = value.replace(/[\d.]+/, "");

  // Detect decimal precision
  const isDecimal = value.includes(".");
  const decimalPlaces = isDecimal
    ? value.split(".")[1].replace(/\D/g, "").length
    : 0;

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 70,
    damping: 25,
    duration: 2000,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(targetNumber);
    }
  }, [isInView, motionValue, targetNumber]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimalPlaces) + suffix;
      }
    });
  }, [springValue, decimalPlaces, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { value: "15+", label: "Years of expertise" },
    { value: "500+", label: "Industrial clients" },
    { value: "4", label: "Coating specialities" },
    { value: "99.8%", label: "On-spec delivery" },
  ];

  return (
    <section className="border-y border-slate-800 bg-[#0b121e] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-left border-l border-slate-800 pl-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                <AnimatedNumber value={stat.value} />
                <span className="text-amber-500">.</span>
              </div>
              <div className="text-sm text-slate-400 mt-1 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

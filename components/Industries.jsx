"use client";

import { motion } from "framer-motion";
import { Car, Plane, Cpu, Cog, Wrench, ShieldAlert } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      name: "Automotive",
      icon: Car,
      animation: {
        rest: { x: 0 },
        hover: {
          x: [0, 8, 0],
          transition: { repeat: Infinity, duration: 1, ease: "easeInOut" },
        },
      },
    },
    {
      name: "Aerospace",
      icon: Plane,
      animation: {
        rest: { x: 0, y: 0, rotate: 0 },
        hover: {
          x: 6,
          y: -7,
          rotate: -24,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      },
    },
    {
      name: "Electronics",
      icon: Cpu,
      animation: {
        rest: { scale: 1 },
        hover: {
          scale: [1, 1.2, 1],
          transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" },
        },
      },
    },
    {
      name: "Machinery",
      icon: Cog,
      animation: {
        rest: { rotate: 0 },
        hover: {
          rotate: 360,
          transition: { repeat: Infinity, duration: 3, ease: "linear" },
        },
      },
    },
    {
      name: "Tooling",
      icon: Wrench,
      animation: {
        rest: { rotate: 0, originX: 0.2, originY: 0.8 },
        hover: {
          rotate: [-25, 20, -15, 10, 0],
          transition: { duration: 0.7, ease: "easeInOut" },
        },
      },
    },
    {
      name: "Defence",
      icon: ShieldAlert,
      animation: {
        rest: { scale: 1, rotate: 0 },
        hover: {
          scale: [1, 1.15, 1],
          rotate: [0, -6, 6, -3, 0],
          transition: { duration: 0.6, ease: "easeInOut" },
        },
      },
    },
  ];

  return (
    <section
      id="industries"
      className="py-24 bg-industrial-900/60 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        {/* Left-Aligned Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-3 text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <span className="w-8 h-[1.5px] bg-amber-500" />
            <span>Industries Served</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Trusted across sectors <br />
            that demand precision.
          </h2>
        </div>

        {/* Interactive Industry Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;

            return (
              <motion.div
                key={i}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative p-6 rounded-lg bg-industrial-950 border border-slate-800 hover:border-amber-500/50 transition-colors text-center group cursor-pointer overflow-hidden select-none"
              >
                {/* Subtle Amber Hover Glow Behind Icon */}
                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Animated Icon Container */}
                <motion.div
                  variants={ind.animation}
                  className="w-8 h-8 mx-auto mb-3 text-amber-400 flex items-center justify-center"
                >
                  <Icon className="w-8 h-8" />
                </motion.div>

                {/* Label */}
                <span className="text-sm font-semibold text-white block relative z-10">
                  {ind.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

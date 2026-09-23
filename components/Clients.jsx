// "use client";

// import { motion } from "framer-motion";
// import { Building2, ShieldCheck } from "lucide-react";

// export default function Clients() {
//   const clients = [
//     { name: "Sutex Engineering", category: "Engineering & Machinery" },
//     { name: "Himson Group", category: "Industrial Leader" },
//     { name: "Shree Shyam Enterprises", category: "Precision Machining" },
//     { name: "Shree Shakti", category: "Manufacturing" },
//     { name: "Sai Shakti", category: "Industrial Fabrication" },
//     { name: "Sigma Tecno", category: "Tooling & Tech" },
//     { name: "Shree Nagal", category: "Industrial Processing" },
//     { name: "Alidra Group", category: "Textile Machinery" },
//     { name: "Regal Alluminum", category: "Aluminium Extrusion" },
//     { name: "Well Tech Engineering", category: "Heavy Engineering" },
//   ];

//   // Duplicate for seamless infinite marquee loop
//   const marqueeItems = [...clients, ...clients];

//   return (
//     <section
//       id="clients"
//       className="py-24 bg-industrial-950 border-t border-slate-800 relative overflow-hidden"
//     >
//       {/* Background Radial Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
//         {/* Header Section */}
//         <div className="max-w-2xl">
//           <div className="inline-flex items-center gap-3 text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
//             <span className="w-8 h-[1.5px] bg-amber-500" />
//             <span>Trusted Partnerships</span>
//           </div>
//           <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
//             Trusted by industry <br />
//             leaders & OEMs.
//           </h2>
//           <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
//             Delivering mission-critical anodizing and electroless nickel plating
//             for Gujarat&apos;s leading manufacturers and engineering houses.
//           </p>
//         </div>
//       </div>

//       {/* --- Infinite Marquee Ribbon --- */}
//       <div className="relative w-full overflow-hidden py-4 border-y border-slate-800/80 bg-industrial-900/30">
//         {/* Gradient edge fades */}
//         <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-industrial-950 to-transparent z-10 pointer-events-none" />
//         <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-industrial-950 to-transparent z-10 pointer-events-none" />

//         <motion.div
//           className="flex gap-6 w-max"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: 28,
//             ease: "linear",
//           }}
//         >
//           {marqueeItems.map((client, idx) => (
//             <div
//               key={idx}
//               className="flex items-center gap-3.5 px-6 py-3.5 rounded-xl bg-industrial-900/80 border border-slate-800/90 shadow-sm backdrop-blur-sm group hover:border-amber-500/50 transition-colors"
//             >
//               <div className="w-8 h-8 rounded-lg bg-industrial-800 border border-slate-700 flex items-center justify-center text-amber-400 font-bold text-xs uppercase group-hover:scale-105 transition-transform">
//                 {client.name.charAt(0)}
//               </div>
//               <div className="whitespace-nowrap">
//                 <span className="text-sm font-semibold text-white tracking-wide block">
//                   {client.name}
//                 </span>
//                 <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
//                   {client.category}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* --- Structured Grid View --- */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
//           {clients.map((client, i) => (
//             <div
//               key={i}
//               className="p-4 sm:p-5 rounded-xl bg-industrial-900/50 border border-slate-800 hover:border-amber-500/40 hover:bg-industrial-900/90 transition-all duration-300 flex flex-col justify-between group"
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <span className="w-7 h-7 rounded-md bg-industrial-800 border border-slate-700/80 flex items-center justify-center text-amber-400 text-xs font-bold">
//                   {client.name.slice(0, 2).toUpperCase()}
//                 </span>
//                 <ShieldCheck className="w-4 h-4 text-slate-600 group-hover:text-amber-500 transition-colors" />
//               </div>

//               <div>
//                 <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
//                   {client.name}
//                 </h3>
//                 <p className="text-[11px] text-slate-500 mt-1">
//                   {client.category}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Clients() {
  const clients = [
    {
      name: "Sutex Engineering",
      logo: "/sutex.png", // Add logo image path when available
      category: "Engineering & Machinery",
    },
    {
      name: "Himson Group",
      logo: "/himson.png",
      category: "Industrial Leader",
    },
    {
      name: "Shree Shyam Enterprises",
      logo: "", // Leave empty if no logo exists yet
      category: "Precision Machining",
    },
    {
      name: "Shree Shakti",
      logo: "/shree-shakti-logo.png",
      category: "Manufacturing",
    },
    {
      name: "Sai Shakti",
      logo: "",
      category: "Industrial Fabrication",
    },
    {
      name: "Sigma Tecno",
      logo: "",
      category: "Tooling & Tech",
    },
    {
      name: "Shree Nagal",
      logo: "",
      category: "Industrial Processing",
    },
    {
      name: "Alidra Group",
      logo: "",
      category: "Textile Machinery",
    },
    {
      name: "Regal Alluminum",
      logo: "/regal-logo.svg",
      category: "Aluminium Extrusion",
    },
    {
      name: "Well Tech Engineering",
      logo: "",
      category: "Heavy Engineering",
    },
  ];

  // Duplicate for smooth infinite marquee loop
  const marqueeItems = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="py-24 bg-industrial-950 border-t border-slate-800 relative overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        {/* Header Section */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3 text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <span className="w-8 h-[1.5px] bg-amber-500" />
            <span>Trusted Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Trusted by industry <br />
            leaders & OEMs.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivering mission-critical anodizing and electroless nickel plating
            for Gujarat&apos;s leading manufacturers and engineering houses.
          </p>
        </div>
      </div>

      {/* --- Infinite Marquee Ribbon --- */}
      <div className="relative w-full overflow-hidden py-4 border-y border-slate-800/80 bg-industrial-900/30">
        {/* Gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-industrial-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-industrial-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 28,
            ease: "linear",
          }}
        >
          {marqueeItems.map((client, idx) => (
            <div
              key={idx}
              className="h-16 px-6 min-w-[170px] flex items-center justify-center rounded-xl bg-industrial-900/80 border border-slate-800/90 shadow-sm backdrop-blur-sm group hover:border-amber-500/50 transition-colors"
            >
              <ClientItemDisplay client={client} isMarquee />
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- Structured Grid View --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {clients.map((client, i) => (
            <div
              key={i}
              className="p-5 min-h-[140px] rounded-xl bg-industrial-900/40 border border-slate-800 hover:border-amber-500/40 hover:bg-industrial-900/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 group-hover:text-amber-400 transition-colors">
                  {client.category}
                </span>
                <ShieldCheck className="w-4 h-4 text-slate-600 group-hover:text-amber-500 transition-colors" />
              </div>

              {/* Center Stage: Shows Logo or falls back to Name */}
              <div className="my-auto py-2 flex items-center justify-center">
                <ClientItemDisplay client={client} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Subcomponent: Handles Logo display with automatic text fallback
function ClientItemDisplay({ client, isMarquee = false }) {
  const [imageError, setImageError] = useState(false);

  // If logo exists and didn't fail to load, display the image
  if (client.logo && !imageError) {
    return (
      <div
        className={`relative ${
          isMarquee ? "w-28 h-10" : "w-full h-12"
        } flex items-center justify-center`}
      >
        <Image
          src={client.logo}
          alt={client.name}
          fill
          sizes="160px"
          className="object-contain filter  transition-all duration-300"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  // Fallback: If no logo is provided or image doesn't exist, show company name
  return (
    <span
      className={`font-semibold tracking-wide text-slate-200 group-hover:text-amber-400 transition-colors text-center ${
        isMarquee ? "text-sm whitespace-nowrap" : "text-sm leading-snug"
      }`}
    >
      {client.name}
    </span>
  );
}

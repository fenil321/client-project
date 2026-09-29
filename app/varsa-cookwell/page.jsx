"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Flame,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export default function VarsaCookwellPage() {
  const products = [
    {
      id: "kadai-01",
      name: "Hard Anodized Deep Kadhai with Lid",
      capacity: "2.5 Litre · 240 mm",
      thickness: "3.25 mm Heavy Gauge",
      price: 1149,
      mrp: 1499,
      image: "/products/kadhai.jpg", // Place in /public/products/
      features: [
        "Non-toxic & Non-staining",
        "Metal spoon friendly",
        "Stay-cool riveted handles",
      ],
    },
    {
      id: "tawa-02",
      name: "Heavy Duty Concave Roti Tawa",
      capacity: "250 mm Diameter",
      thickness: "4.00 mm Extra Thick",
      price: 799,
      mrp: 1099,
      image: "/products/tawa.jpg",
      features: [
        "Even heat dissipation",
        "Zero chemical coating",
        "Long-life anodized layer",
      ],
    },
    {
      id: "frypan-03",
      name: "Precision Anodized Fry Pan",
      capacity: "1.75 Litre · 220 mm",
      thickness: "3.25 mm Heavy Gauge",
      price: 899,
      mrp: 1199,
      image: "/products/frypan.jpg",
      features: [
        "Scratch & abrasion proof",
        "High thermal efficiency",
        "Ergonomic stainless handle",
      ],
    },
    {
      id: "saucepan-04",
      name: "Multi-utility Tea & Saucepan",
      capacity: "1.5 Litre · 160 mm",
      thickness: "3.25 mm Heavy Gauge",
      price: 649,
      mrp: 849,
      image: "/products/saucepan.jpg",
      features: [
        "Easy pour flared lip",
        "Corrosion resistant",
        "Induction & gas compatible",
      ],
    },
    {
      id: "handi-05",
      name: "Biryani & Curry Handi with Lid",
      capacity: "3.5 Litre · 220 mm",
      thickness: "3.50 mm Heavy Gauge",
      price: 1399,
      mrp: 1799,
      image: "/products/handi.jpg",
      features: [
        "Retains natural flavors",
        "Thermal insulation body",
        "Heavy lid for steam lock",
      ],
    },
    {
      id: "tadka-06",
      name: "Commercial Grade Tadka Pan",
      capacity: "100 mm Cup",
      thickness: "3.00 mm Heavy Gauge",
      price: 349,
      mrp: 499,
      image: "/products/tadkapan.jpg",
      features: [
        "Fast high-heat tempering",
        "Reinforced steel wire handle",
        "Easy to clean",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-amber-500 selection:text-black">
      {/* Top Navigation */}
      <nav className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Nilkanth Industries
          </Link>
          <div className="text-right">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-amber-500">
              VARSA COOKWELL
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="py-16 sm:py-20 border-b border-slate-800 bg-gradient-to-b from-industrial-950 via-slate-950 to-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-medium uppercase tracking-widest mb-6">
            Nilkanth Industries Consumer Division
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            Engineered For Chefs. <br />
            <span className="text-amber-500">Built For Daily Life.</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
            Manufactured with the same electrolytic hard-anodizing technology we
            supply to industrial OEMs. Harder than stainless steel, completely
            non-reactive, and designed to last decades.
          </p>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              100% Virgin Aluminium
            </span>
            <span className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" />
              Metal Spoon & High-Heat Safe
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Hard Anodized Oxide Barrier
            </span>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => {
            const discount = Math.round(
              ((item.mrp - item.price) / item.mrp) * 100,
            );

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-industrial-900/60 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
              >
                {/* Product Image Slot */}
                <div className="relative h-60 w-full bg-slate-900 border-b border-slate-800/80 flex items-center justify-center p-6 group">
                  <div className="absolute top-3 left-3 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                    {discount}% OFF
                  </div>
                  <div className="absolute top-3 right-3 text-[11px] font-mono text-slate-400">
                    {item.thickness}
                  </div>
                  <div className="relative h-full w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-amber-500 font-semibold block mb-1">
                      {item.capacity}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                      {item.name}
                    </h3>

                    {/* Features list */}
                    <ul className="space-y-1.5 mb-6 text-xs text-slate-400">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-white">
                          ₹{item.price}
                        </span>
                        <span className="text-xs text-slate-500 line-through">
                          ₹{item.mrp}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400">
                        Incl. of all taxes
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/919054378300?text=${encodeURIComponent(
                        `*New Order Inquiry — VARSA Cookwell*

Hello Nilkanth Industries,
I would like to inquire about ordering this product:

*Product:* ${item.name}
*Specs:* ${item.capacity} (${item.thickness})
*Price:* ₹${item.price} (MRP: ₹${item.mrp})

Please share payment options and delivery details. Thank you!`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold tracking-wide transition-all shadow-md shadow-amber-500/10"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Inquire / Buy
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bulk / Wholesale Footer Banner */}
      <section className="border-t border-slate-800 bg-slate-900/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Looking for wholesale or dealer distribution?
            </h4>
            <p className="text-xs text-slate-400">
              We manufacture and supply custom-branded cookware batches to
              retailers across India.
            </p>
          </div>
          <Link
            href="/#contact"
            className="px-6 py-2.5 rounded-full border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold tracking-wide transition-all"
          >
            Contact B2B Sales
          </Link>
        </div>
      </section>
    </main>
  );
}

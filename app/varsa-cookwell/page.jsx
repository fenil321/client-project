"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ShieldCheck,
  Flame,
  Sparkles,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  X,
  Plus,
  Minus,
  MapPin,
  User,
  Phone as PhoneIcon,
  Truck,
  AlertCircle,
  CookingPot,
} from "lucide-react";

// --- Delivery Information Modal Component ---
function DeliveryModal({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });
  const [error, setError] = useState("");

  const totalPrice = product.price * quantity;
  const totalMrp = product.mrp * quantity;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData.name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (formData.phone.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (formData.address.trim().length < 5) {
      setError("Please enter your detailed delivery address.");
      return;
    }
    if (formData.pincode.length !== 6) {
      setError("Please enter a valid 6-digit pincode.");
      return;
    }

    // Format Structured WhatsApp Message
    const message = `*Order & Delivery Inquiry — VARSA Cookwell*

Hello Nilkanth Industries,
I would like to place an order for delivery:

• *Product:* ${product.name}
• *Specifications:* ${product.capacity} (${product.thickness})
• *Quantity:* ${quantity} unit${quantity > 1 ? "s" : ""}
• *Unit Price:* ₹${product.price}
• *Total Amount:* ₹${totalPrice} (MRP: ₹${totalMrp})

*Delivery Details:*
• *Customer Name:* ${formData.name.trim()}
• *Mobile Number:* +91 ${formData.phone}
• *Address:* ${formData.address.trim()}
• *City:* ${formData.city.trim()}
• *Pincode:* ${formData.pincode.trim()}


Please confirm stock availability and share payment details. Thank you!`;

    const whatsappUrl = `https://wa.me/919054378300?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-lg bg-industrial-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800/80 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 overflow-hidden shrink-0">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-1"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white leading-tight line-clamp-1">
                {product.name}
              </h4>
              <p className="text-xs text-amber-500 font-semibold mt-0.5">
                ₹{product.price}{" "}
                <span className="text-slate-500 line-through text-[11px]">
                  ₹{product.mrp}
                </span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-4 max-h-[75vh] overflow-y-auto"
        >
          {error && (
            <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                Select Quantity
              </span>
              <span className="text-xs text-slate-500">
                Total: <strong className="text-white">₹{totalPrice}</strong>
              </span>
            </div>
            <div className="flex items-center gap-3 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-7 h-7 rounded bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors disabled:opacity-40"
                disabled={quantity <= 1}
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-sm font-bold text-white w-6 text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-7 h-7 rounded bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Customer Name */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => {
                  const value = e.target.value;

                  // Split into words, capitalize the first letter of each, and join them back with spaces
                  const capitalizedValue = value
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");

                  setFormData({ ...formData, name: capitalizedValue });
                }}
                className="w-full pl-10 pr-4 py-2.5  rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Phone Number with +91 lock */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Delivery Phone Number
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-0 inset-y-0 pl-3.5 flex items-center pointer-events-none select-none">
                <span className="text-slate-400 font-medium text-xs sm:text-sm">
                  +91
                </span>
                <span className="h-4 w-[1px] bg-slate-700 ml-2" />
              </div>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                required
                placeholder="9876543210"
                value={formData.phone}
                onChange={(e) => {
                  let val = e.target.value.replace(/\D/g, "");
                  if (val.startsWith("0")) val = val.slice(1);
                  if (val.length <= 10) {
                    setFormData({ ...formData, phone: val });
                  }
                }}
                className="w-full pl-14 pr-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 tracking-wide"
              />
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Complete Delivery Address
            </label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
              <textarea
                rows={2}
                required
                placeholder="House/Flat No., Building name, Street, Area..."
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 resize-none"
              />
            </div>
          </div>

          {/* City & Pincode Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                City / Town
              </label>
              <input
                type="text"
                required
                placeholder="Surat"
                value={formData.city}
                onChange={(e) => {
                  // 1. Remove all numbers using regex
                  const cleanValue = e.target.value.replace(/[0-9]/g, "");

                  // 2. Capitalize the first letter of each word
                  const capitalizedValue = cleanValue
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");

                  setFormData({ ...formData, city: capitalizedValue });
                }}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                Pincode
              </label>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={6}
                required
                placeholder="395001"
                value={formData.pincode}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  if (val.length <= 6) {
                    setFormData({ ...formData, pincode: val });
                  }
                }}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Order Summary & Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              Send Order via WhatsApp (₹{totalPrice})
            </button>
            <p className="text-[11px] text-center text-slate-500 mt-2 flex items-center justify-center gap-1">
              <Truck className="w-3.5 h-3.5 text-amber-500/80" />
              Pay on Delivery / UPI available across India
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

// --- Individual Product Card with Image Slider ---
function ProductCard({ item, onOpenOrder }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };

  const discount = Math.round(((item.mrp - item.price) / item.mrp) * 100);

  return (
    <div className="rounded-2xl bg-industrial-900/60 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300">
      {/* Image Slider Area */}
      <div className="relative h-72 sm:h-80 w-full bg-slate-900/80 border-b border-slate-800/80 flex items-center justify-center p-6 group select-none overflow-hidden">
        <div className="absolute top-4 left-4 z-20 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
          {discount}% OFF
        </div>
        <div className="absolute top-4 right-4 z-20 text-[11px] font-mono text-slate-300 bg-slate-800/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-700/60">
          {item.thickness}
        </div>

        <div className="relative h-full w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative h-full w-full flex items-center justify-center"
            >
              <Image
                src={item.images[currentIdx]}
                alt={`${item.name} - View ${currentIdx + 1}`}
                fill
                //loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-2"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {item.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous view"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-950/70 hover:bg-amber-500 text-white hover:text-black border border-slate-700 hover:border-amber-400 flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next view"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-950/70 hover:bg-amber-500 text-white hover:text-black border border-slate-700 hover:border-amber-400 flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </>
        )}

        {item.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-800">
            {item.images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIdx(dotIdx)}
                aria-label={`Jump to image ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  dotIdx === currentIdx
                    ? "w-4 h-1.5 bg-amber-400"
                    : "w-1.5 h-1.5 bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-amber-500 font-semibold block mb-1">
            {item.capacity}
          </span>
          <h3 className="text-xl font-bold text-white mb-3 leading-snug">
            {item.name}
          </h3>

          <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-400">
            {item.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & Modal Trigger Button */}
        <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black text-white">
                ₹{item.price}
              </span>
              <span className="text-xs sm:text-sm text-slate-500 line-through">
                ₹{item.mrp}
              </span>
            </div>
            <span className="text-[10px] text-slate-400 block mt-0.5">
              Incl. of all taxes · Free Surat delivery
            </span>
          </div>

          <button
            type="button"
            onClick={() => onOpenOrder(item)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg shadow-amber-500/10 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Order on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Main Page Component ---
export default function VarsaCookwellPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: "kadai-01",
      name: "Hard Anodized Deep Kadhai with Lid",
      capacity: "2.5 Litre · 240 mm",
      thickness: "3.25 mm Heavy Gauge",
      price: 1149,
      mrp: 1499,
      images: ["/kadhai-1.jpeg", "/kadhai-2.jpeg", "/kadhai-3.jpeg"],
      features: [
        "Electrolytic non-toxic oxide barrier",
        "Metal spatula & spoon friendly",
        "Heavy-duty stay-cool riveted handles",
        "Uniform heat distribution (no hot spots)",
      ],
    },
    {
      id: "tawa-02",
      name: "Heavy Duty Concave Roti Tawa",
      capacity: "250 mm Diameter",
      thickness: "4.00 mm Extra Thick",
      price: 799,
      mrp: 1099,
      images: ["/tava-1.jpeg", "/tava-2.jpeg"],
      features: [
        "Extra-thick 4mm base prevents warping",
        "100% PFOA and chemical coating-free",
        "Reinforced stainless steel stay-cool handle",
        "Ideal for crisp phulkas, parathas & rotis",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-amber-500 selection:text-black">
      {/* Top Navigation */}
      <nav className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Nilkanth Industries
          </Link>
          <div className="flex items-center justify-end gap-1.5 text-right">
            {/* CookingPot icon visible only on mobile */}
            <CookingPot className="w-4 h-4 text-amber-500 sm:hidden" />

            <span className="text-xs uppercase tracking-[0.2em] font-bold text-amber-500">
              VARSA <span className="hidden sm:inline">COOKWELL</span>
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="py-16 sm:py-20 border-b border-slate-800 bg-gradient-to-b from-industrial-950 via-slate-950 to-slate-900/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-medium uppercase tracking-widest mb-6">
            {/* <Sparkles className="w-3.5 h-3.5" /> */}
            Nilkanth Industries Consumer Division
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            Engineered For Chefs. <br />
            <span className="text-amber-500">Built For Daily Life.</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
            Manufactured with the same electrolytic hard-anodizing technology we
            supply to industrial OEMs. Harder than stainless steel, completely
            non-reactive, and built to withstand decades of daily use.
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

      {/* Product Showcase */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Signature Cookware Lineup
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Click through the images to inspect the craftsmanship, thickness,
            and finish.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onOpenOrder={(product) => setSelectedProduct(product)}
            />
          ))}
        </div>
      </section>

      {/* Bulk / Wholesale Footer Banner */}
      <section className="border-t border-slate-800 bg-slate-900/40 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
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
            className="px-6 py-2.5 rounded-full border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold tracking-wide transition-all shrink-0"
          >
            Contact B2B Sales
          </Link>
        </div>
      </section>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedProduct && (
          <DeliveryModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

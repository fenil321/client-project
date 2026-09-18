import Image from "next/image";
import { CheckCircle2, Layers, CookingPot } from "lucide-react";

export default function About() {
  const highlights = [
    "Customer-first quality philosophy",
    "Precision-controlled process tanks",
    "Consistent batch-to-batch repeatability",
    "Fast turnaround for production volumes",
  ];

  return (
    <section id="about" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Story & Promise */}
          <div>
            <div className="inline-flex items-center gap-3 text-amber-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <span className="w-8 h-[1.5px] bg-amber-500" />
              <span>About Nilkanth</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-black leading-tight mb-6">
              A trusted name <br />
              in surface <br />
              finishing.
            </h2>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
              We specialise in high-quality anodizing and electroless nickel
              plating — engineered to deliver exceptional durability, corrosion
              resistance, and superior finishing across a wide range of
              industrial components.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-slate-500 text-sm font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Promise Box */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-slate-400/50 ">
              <div className="text-[11px] uppercase font-bold text-amber-500 tracking-widest mb-2">
                Our Promise
              </div>
              <p className="text-black font-semibold text-base sm:text-lg">
                &ldquo;We believe in Quality with Customer Satisfaction.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Facility Image & Divisions */}
          <div className="space-y-6">
            {/* Facility Image */}
            <div className="relative h-80 sm:h-[400px] w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src="/about-facility.jpg"
                alt="Nilkanth Industries Facility"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Division Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gray-50 border border-slate-400/80">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                  <Layers className="w-4 h-4 text-amber-500" />
                </div>
                <div className="font-semibold text-black text-sm mb-1">
                  Industrial division
                </div>
                <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                  Coating services for OEMs, fabricators, and component makers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-slate-400/80">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                  <CookingPot className="w-4 h-4 text-amber-500" />
                </div>
                <div className="font-semibold text-black text-sm mb-1">
                  VARSA Cookwell
                </div>
                <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                  Our consumer brand — premium, durable utensils for everyday
                  use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

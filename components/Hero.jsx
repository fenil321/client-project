import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-12 overflow-hidden bg-[#0b121e]"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-right sm:bg-center bg-no-repeat opacity-40 pointer-events-none"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Deep Navy Fade Gradient */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0b121e] via-[#0b121e]/85 to-transparent pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Tagline Accent */}
          <div className="inline-flex items-center gap-3 text-amber-500 text-[11px] font-semibold tracking-[0.25em] uppercase mb-8">
            <span className="w-8 h-[1.5px] bg-amber-500" />
            <span>Surat · Est. Surface Finishing</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Engineered <br />
            finishes for <br />
            <span className="text-amber-500">precision aluminium.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed max-w-xl mb-10 font-normal">
            Hard, black and silver anodizing plus electroless nickel plating —
            delivering durability, corrosion resistance and a flawless surface
            on every industrial component we touch.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs tracking-wide transition-all"
            >
              Explore Services
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-[#111a2e]/90 hover:bg-[#1b273d] border border-slate-700/60 text-white font-medium text-xs tracking-wide transition-all"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

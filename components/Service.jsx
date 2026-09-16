import Image from "next/image";
import { ArrowRight, Layers, Shield, Sparkles, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Hard Anodizing",
      description:
        "Type-III thick oxide layer for maximum wear resistance, hardness and dielectric strength on critical components.",
      tags: ["25–100 μm", "Wear resistant", "High hardness"],
      icon: Shield,
      image: "/service-hard-anodizing.jpg",
    },
    {
      title: "Black Anodizing",
      description:
        "Deep matte black architectural and decorative finish with excellent corrosion resistance and uniform tone.",
      tags: ["Matte / Satin", "UV stable", "Uniform colour"],
      icon: Layers,
      image: "/service-black-anodizing.jpg",
    },
    {
      title: "Silver Anodizing",
      description:
        "Clear/silver anodic coating preserving the natural aluminium look while adding hardness and protection.",
      tags: ["Natural finish", "Corrosion proof", "Class-1 quality"],
      icon: Sparkles,
      image: "/service-silver-anodizing.jpg",
    },
    {
      title: "Electroless Nickel Plating",
      description:
        "Auto-catalytic nickel deposit delivering uniform thickness, hardness and superior corrosion protection on complex geometries.",
      tags: ["Uniform coverage", "EN coating", "High hardness"],
      icon: Zap,
      image: "/service-electroless-nickel.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-[#0b121e] border-t border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              <span className="w-8 h-[1.5px] bg-amber-500" />
              <span>Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Four coatings. One standard of precision.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
          >
            Discuss your part <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article
                key={idx}
                className="relative min-h-[460px] rounded-2xl border border-slate-800/80 overflow-hidden flex flex-col justify-between group shadow-2xl bg-[#111a2e]"
              >
                {/* Full-Card Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b121e] via-[#0b121e]/85 to-[#0b121e]/40 pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="relative z-10 p-6">
                  <div className="w-9 h-9 rounded-lg bg-[#0b121e]/80 backdrop-blur-md border border-slate-700/60 flex items-center justify-center text-amber-500">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 p-8 pt-0">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-300/80 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 rounded-full bg-[#1b273d]/80 backdrop-blur-md border border-slate-700/60 text-xs font-medium text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    Enquire for this finish{" "}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

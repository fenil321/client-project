import { Car, Plane, Cpu, Cog, Wrench, ShieldAlert } from "lucide-react";

export default function Industries() {
  const industries = [
    { name: "Automotive", icon: Car },
    { name: "Aerospace", icon: Plane },
    { name: "Electronics", icon: Cpu },
    { name: "Machinery", icon: Cog },
    { name: "Tooling", icon: Wrench },
    { name: "Defence", icon: ShieldAlert },
  ];

  return (
    <section
      id="industries"
      className=" py-24 bg-industrial-900/60 border-t border-slate-800"
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-lg bg-industrial-950 border border-slate-800 hover:border-amber-500/50 transition-all text-center group"
              >
                <Icon className="w-8 h-8 text-amber-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-white block">
                  {ind.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

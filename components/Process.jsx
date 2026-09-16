export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Inspection & Masking",
      desc: "Components received, inspected and selectively masked to protect critical surfaces.",
    },
    {
      num: "02",
      title: "Pre-treatment",
      desc: "Degreasing, etching and desmutting prepare the substrate for uniform coating adhesion.",
    },
    {
      num: "03",
      title: "Electrolytic Process",
      desc: "Parts are dipped in controlled-temperature tanks for the selected anodizing or EN cycle.",
    },
    {
      num: "04",
      title: "Sealing & Finishing",
      desc: "Hot-water or nickel-acetate sealing locks in colour, hardness and corrosion protection.",
    },
    {
      num: "05",
      title: "QA & Despatch",
      desc: "Thickness, adhesion and visual checks before careful packaging and on-time delivery.",
    },
  ];

  return (
    <section
      id="process"
      className="min-h-screen py-24 bg-white text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-20">
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

        {/* Timeline Grid */}
        <div className="relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[26px] left-[5%] right-[5%] h-[1px] bg-amber-200/60 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-start">
                {/* Number Circle Node */}
                <div className="w-13 h-13 rounded-full bg-white border border-amber-300 flex items-center justify-center text-amber-500 font-bold text-sm mb-6 shadow-sm">
                  {step.num}
                </div>

                {/* Step Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

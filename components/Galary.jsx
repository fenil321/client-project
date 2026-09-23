"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const items = [
    {
      title: "Hard Anodized Extrusion Profiles",
      description:
        "Type-III hard anodized extrusion bars with extreme wear resistance for sliding rail applications.",
      image: "/hard-anoide.png",
    },
    {
      title: "Anodized Motor Housing Batch",
      description:
        "Batch-finished motor housing components in silver anodizing ready for OEM assembly lines.",
      image: "/anodized-motor-batch.png",
    },
    {
      title: "Hard Anodized Long Extrusion Bar",
      description:
        "Extended aluminum extrusion with thick hard anodized oxide layer for heavy-duty structural use.",
      image: "/Bar.png",
    },
    {
      title: "Black Anodized Mounting Plate",
      description:
        "Precision-drilled aluminum panel with deep matte black anodized finish for industrial assemblies.",
      image: "/black-plate.png",
    },
    {
      title: "Silver Anodized Housings & Gears",
      description:
        "Clear anodized machined housings and gears preserving natural aluminum luster with added hardness.",
      image: "/silver.png",
    },
  ];

  useEffect(() => {
    // Only run auto-carousel on mobile screens (< 640px)
    const isMobile = () => window.innerWidth < 640;

    if (!isMobile() || isPaused) return;

    const interval = setInterval(() => {
      const container = carouselRef.current;
      if (!container || !isMobile()) return;

      const firstCard = container.firstElementChild;
      if (!firstCard) return;

      // Card width + 16px (gap-4)
      const scrollStep = firstCard.clientWidth + 16;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      // Loop back to start if at or near the end, otherwise slide to next
      if (container.scrollLeft >= maxScrollLeft - 20) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollStep, behavior: "smooth" });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="gallery"
      className="py-24 bg-white text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Header Section */}
        <div className="max-w-xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <span className="w-8 h-[1.5px] bg-amber-500" />
            <span>Gallery</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Surfaces shaped <br />
            in our shop.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            A glimpse of the finishes, parts and process that come out of
            Nilkanth Industries every day.
          </p>
        </div>

        {/* Swipeable & Auto-scrolling Track */}
        <div
          ref={carouselRef}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-6 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, i) => (
            <figure
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-100 hover:border-slate-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col flex-none w-[80vw] sm:w-auto snap-center sm:snap-align-none"
            >
              {/* Upper Image Frame */}
              <div className="relative w-full h-56 sm:h-60 bg-slate-50/70 overflow-hidden flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Lower Text Content Area */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow bg-white">
                <h3 className="text-slate-900 font-bold text-md sm:text-[15px] leading-snug mb-2 justify-center">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-s sm:text-[14px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

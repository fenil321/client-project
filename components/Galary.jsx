"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const items = [
    {
      title: "Coloured anodized aerospace components",
      tag: "Aerospace",
      image: "/gallery-1.jpg",
    },
    {
      title: "Polished silver anodized tubes",
      tag: "Architectural",
      image: "/gallery-2.jpg",
    },
    {
      title: "Anodizing electrolyte tank process",
      tag: "Facility",
      image: "/gallery-3.jpg",
    },
    {
      title: "Quality inspection with micrometer",
      tag: "QA / Lab",
      image: "/gallery-4.jpg",
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
              className="group relative rounded-2xl h-80 overflow-hidden bg-slate-100 flex flex-col justify-end p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex-none w-[80vw] sm:w-auto snap-center sm:snap-align-none"
            >
              {/* Background Next.js Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Text Content */}
              <div className="relative z-20">
                <span className="px-2.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md text-amber-400 border border-amber-500/30 text-[10px] uppercase font-bold tracking-wider mb-2 inline-block">
                  {item.tag}
                </span>
                <p className="text-white text-sm font-semibold leading-snug">
                  {item.title}
                </p>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

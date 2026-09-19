"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Preloader() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Prevent user scrolling during animation
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Initial State
      gsap.set(logoRef.current, { scale: 0.8, opacity: 0, y: 20 });
      gsap.set(textRef.current, { opacity: 0, y: 15 });
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });

      // 2. Entrance Animation
      tl.to(logoRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.inOut",
          },
          "-=0.4",
        );

      // 3. Coordinate with window load event + minimum display time
      const handleComplete = () => {
        // Exit Curtain Animation
        const exitTl = gsap.timeline({
          onComplete: () => {
            setIsComplete(true);
            document.body.style.overflow = "auto";
          },
        });

        exitTl
          .to([logoRef.current, textRef.current, lineRef.current], {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: "power2.in",
          })
          .to(containerRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut",
          });
      };

      // Check if page already loaded or wait for window 'load'
      if (document.readyState === "complete") {
        tl.add(handleComplete, "+=0.2");
      } else {
        window.addEventListener("load", () => {
          tl.add(handleComplete, "+=0.1");
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "auto";
    };
  }, []);

  if (isComplete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-industrial-950 text-white select-none will-change-transform"
    >
      {/* Background Ambient Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />

      {/* Brand Icon */}
      <div
        ref={logoRef}
        className="relative w-16 h-16 sm:w-20 sm:h-20 mb-5 overflow-hidden rounded-3xl border border-slate-800 bg-industrial-900/80 p-3 shadow-2xl shadow-amber-500/10"
      >
        <Image
          src="/optimized-logo.png"
          alt="Nilkanth Industries Logo"
          fill
          priority
          sizes="80px"
          className="object-contain p-1 rounded-3xl"
        />
      </div>

      {/* Brand Title */}
      <div ref={textRef} className="text-center mb-6">
        <span className="text-xl sm:text-2xl font-bold tracking-wider text-white">
          NILKANTH <span className="text-amber-500 font-light">INDUSTRIES</span>
        </span>
        <span className="block text-[10px] tracking-[0.25em] uppercase text-slate-400 mt-1 font-medium">
          Precision Surface Finishing
        </span>
      </div>

      {/* Loading Progress Bar */}
      <div className="w-48 sm:w-60 h-[2px] bg-slate-800 rounded-full overflow-hidden">
        <div
          ref={lineRef}
          className="h-full w-full bg-gradient-to-r from-amber-600 to-amber-400"
        />
      </div>
    </div>
  );
}

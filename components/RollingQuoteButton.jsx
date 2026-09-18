"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const outgoingVariants = {
  rest: { y: "0%" },
  active: { y: "100%" },
};

const incomingVariants = {
  rest: { y: "-100%" },
  active: { y: "0%" },
};

const transition = {
  duration: 0.3,
  ease: [0.338, 0.015, 0.395, 0.959],
};

export default function RollingQuoteButton({
  href = "#contact",
  text = "Get a Quote",
  className = "",
}) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const activeRef = useRef(false);
  const animating = useRef(false);
  const pendingRequest = useRef(null);
  const hovered = useRef(false);
  const focused = useRef(false);

  const updateActive = (next) => {
    activeRef.current = next;
    setActive(next);
  };

  const requestActive = (next) => {
    if (reduceMotion) return;
    if (next === activeRef.current) {
      pendingRequest.current = null;
      return;
    }
    if (animating.current) {
      pendingRequest.current = next;
      return;
    }
    animating.current = true;
    updateActive(next);
  };

  const completeAnimation = () => {
    if (!animating.current) return;
    animating.current = false;
    if (
      pendingRequest.current !== null &&
      pendingRequest.current !== activeRef.current
    ) {
      const next = pendingRequest.current;
      pendingRequest.current = null;
      animating.current = true;
      updateActive(next);
    } else {
      pendingRequest.current = null;
    }
  };

  return (
    <motion.a
      href={href}
      aria-label={text}
      onHoverStart={() => {
        hovered.current = true;
        requestActive(true);
      }}
      onHoverEnd={() => {
        hovered.current = false;
        requestActive(focused.current);
      }}
      onFocus={() => {
        focused.current = true;
        requestActive(true);
      }}
      onBlur={() => {
        focused.current = false;
        requestActive(hovered.current);
      }}
      className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-colors shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 select-none cursor-pointer overflow-hidden ${className}`}
    >
      {/* Sliding Text Container */}
      <span className="relative block overflow-hidden leading-tight">
        {/* Outgoing Text */}
        <motion.span
          className="block whitespace-nowrap"
          variants={outgoingVariants}
          initial="rest"
          animate={active ? "active" : "rest"}
          onAnimationComplete={completeAnimation}
          transition={transition}
        >
          {text}
        </motion.span>

        {/* Incoming Text */}
        <motion.span
          className="absolute inset-0 block whitespace-nowrap"
          variants={incomingVariants}
          initial="rest"
          animate={active ? "active" : "rest"}
          transition={transition}
          aria-hidden="true"
        >
          {text}
        </motion.span>
      </span>

      {/* Trailing Icon with Subtle Slide */}
      <motion.span
        animate={{ x: active ? 3 : 0 }}
        transition={{ duration: 0.2 }}
        className="shrink-0"
      >
        <ArrowRight className="w-4 h-4" />
      </motion.span>
    </motion.a>
  );
}


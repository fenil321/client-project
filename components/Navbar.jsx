"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import RollingQuoteButton from "./RollingQuoteButton";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Industries", href: "#industries" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navOffset = 80; // Height of the fixed navbar (h-20 = 80px)
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-industrial-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => handleScroll(e, "#top")}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-lg">
            <Image
              src="/optimized-logo.png" // Place your logo PNG inside the /public folder
              alt="Nilkanth Industries Logo"
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
          <span className="font-semibold text-lg tracking-wide text-white">
            Nilkanth{" "}
            <span className="text-amber-500 font-normal">Industries</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Action
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all shadow-md shadow-amber-500/10 hover:shadow-amber-500/20"
          >
            Get a Quote
            <ArrowRight className="w-4 h-4" />
          </a>
        </div> */}
        {/* Desktop Header Action */}
        <div className="hidden md:flex items-center">
          <RollingQuoteButton
            href="#contact"
            text="Get a Quote"
            onClick={(e) => handleScroll(e, "#contact")}
          />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {/* {isOpen && (
        <div className="md:hidden bg-industrial-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block py-2 text-slate-300 hover:text-amber-400 text-base"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center w-full mt-4 py-2.5 rounded-md bg-amber-500 text-black font-semibold text-sm"
          >
            Get a Quote
          </a>
        </div>
      )} */}

      {/* Mobile Drawer with Smooth Accordion Transition */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-industrial-900 border-b border-slate-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="block py-2 text-slate-300 hover:text-amber-400 text-base"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="block text-center w-full mt-4 py-2.5 rounded-md bg-amber-500 text-black font-semibold text-sm"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

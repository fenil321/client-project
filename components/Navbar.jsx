"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, CookingPot } from "lucide-react";
import Image from "next/image";
import RollingQuoteButton from "./RollingQuoteButton";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "About", href: "/#about", isSection: true },
    { name: "Services", href: "/#services", isSection: true },
    { name: "Process", href: "/#process", isSection: true },
    { name: "Industries", href: "/#industries", isSection: true },
    { name: "Gallery", href: "/#gallery", isSection: true },
    // 🍳 VARSA Cookwell Route

    { name: "Contact", href: "/#contact", isSection: true },
    {
      name: "VARSA Cookwell",
      href: "/varsa-cookwell",
      isRoute: true,
      badge: "Cookware",
    },
  ];

  const handleNavClick = (e, link) => {
    setIsOpen(false);

    // If it's the external page route (/varsa-cookwell), let Next.js Link handle it
    if (link.isRoute) return;

    // If we are currently on the homepage, smooth-scroll to the target element
    if (pathname === "/") {
      e.preventDefault();
      setTimeout(() => {
        const targetId = link.href.replace("/#", "").replace("#", "");
        if (targetId === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navHeight = 80;
          const elementTop = targetElement.getBoundingClientRect().top;
          const currentScrollY =
            window.pageYOffset || document.documentElement.scrollTop;
          const targetPosition = elementTop + currentScrollY - navHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }, 150);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-industrial-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo (Works from any route) */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, { href: "/#top", isSection: true })}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-lg">
            <Image
              src="/optimized-logo.png"
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
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-sm font-medium transition-all flex items-center gap-1.5 ${
                  isActive
                    ? "text-amber-400 font-semibold"
                    : link.isRoute
                      ? "text-amber-300 hover:text-amber-400 font-medium"
                      : "text-slate-300 hover:text-amber-400"
                }`}
              >
                {link.isRoute && (
                  <CookingPot className="w-3.5 h-3.5 text-amber-500" />
                )}
                <span>{link.name}</span>
                {/* {link.badge && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    {link.badge}
                  </span>
                )} */}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Header Action */}
        <div className="hidden lg:flex items-center">
          <RollingQuoteButton
            href="/#contact"
            text="Get a Quote"
            onClick={(e) =>
              handleNavClick(e, { href: "/#contact", isSection: true })
            }
          />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer with Smooth Accordion Transition */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-industrial-900 border-b border-slate-800"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-base transition-colors ${
                      isActive
                        ? "bg-industrial-800 text-amber-400 font-semibold"
                        : link.isRoute
                          ? "text-amber-300 bg-amber-500/5 border border-amber-500/20 font-medium"
                          : "text-slate-300 hover:text-amber-400 hover:bg-industrial-800/50"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {/* {link.isRoute && (
                        <CookingPot className="w-4 h-4 text-amber-500" />
                      )} */}
                      {link.name}
                    </span>
                    {link.badge && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded  text-amber-400 ">
                        {/* {link.badge} */}
                        <CookingPot className="w-5 h-5 text-amber-500" />
                      </span>
                    )}
                  </Link>
                );
              })}

              <Link
                href="/#contact"
                onClick={(e) =>
                  handleNavClick(e, { href: "/#contact", isSection: true })
                }
                className="block text-center w-full mt-4 py-3 rounded-xl bg-amber-500 text-black font-bold text-sm tracking-wide shadow-lg shadow-amber-500/10 cursor-pointer"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

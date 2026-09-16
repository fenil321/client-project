import { ChevronRight, Phone, MapPin, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-industrial-950 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                <Image
                  src="/optimized-logo.png" // Place your logo PNG inside the /public folder
                  alt="Nilkanth Industries Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="text-lg font-semibold text-white tracking-wide">
                Nilkanth <span className="text-amber-500">Industries</span>
              </span>
            </div>
            <p className="text-slate-400 font-semibold text-xs sm:text-sm leading-relaxed max-w-sm">
              Specialised anodizing and electroless nickel plating for
              industrial components. We believe in quality with customer
              satisfaction.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <div className="text-sm uppercase font-bold text-amber-500 tracking-wider mb-3">
              Services
            </div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Hard Anodizing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Black Anodizing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Silver Anodizing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Electroless Nickel Plating
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <div className="text-sm uppercase font-bold text-amber-500 tracking-wider mb-3">
              Contact
            </div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                +91 90543 78300
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                +91 98259 06808
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                Mangrol, Surat — 394110
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                info@nilkanthindustries.in
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Nilkanth Industries. All rights
            reserved.
          </div>
          <div className="flex items-center gap-2">
            Also home to{" "}
            <span className="text-slate-300 font-semibold">VARSA Cookwell</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

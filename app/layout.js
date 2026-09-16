import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title:
    "Nilkanth Industries | Precision Aluminium Anodizing & Electroless Nickel Plating",
  description:
    "Industrial surface finishing in Surat, Gujarat. Hard, black, and silver anodizing plus electroless nickel plating for precision components.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-industrial-950 text-slate-200 antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}

import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Galary";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Services from "@/components/Service";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <Industries />
      <Gallery />
      {/* <Clients /> */}
      <Contact />
      <Footer />
    </main>
  );
}

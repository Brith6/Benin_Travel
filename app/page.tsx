import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationFilters from "@/components/DestinationFilters";
import CultureSection from "@/components/CultureSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neo-black selection:bg-neo-green selection:text-neo-black">
      <Navbar />
      <Hero />
      <DestinationFilters />
      <CultureSection />
      <Footer />
    </main>
  );
}

import Image from "next/image";
import Navbar from "./components/Navbar";
import CalendarSection from "./components/CalendarSection";
import Footer from "./components/Footer";
import FormatsSection from "./components/FormatsSection";
import Hero from "./components/Hero";
import LocationsSection from "./components/LocationsSection";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";
import CommunitySection from "./components/ComunitySection";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-triton-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <FormatsSection />
        <LocationsSection />
        <Testimonials />
        <CalendarSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}

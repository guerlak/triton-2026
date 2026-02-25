"use client";
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
import PicGallery from "./components/PicGallery";
import Faq from "./components/Faq";
import CountdownSection from "./components/CountDownSection";
import ShopSection from "./components/ShopSection";
import NumerologySection from "./components/NumerologySection";
import NewsletterSection from "./components/NewsletterSection";
import TritonExperienceCards from "./components/TritonCardsSection";
import RankingSection from "./components/RankingSection";

export default function Page() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-triton-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TritonExperienceCards />
        <CountdownSection />
        <Testimonials />
        <RankingSection />
        <CalendarSection />
        <ShopSection />
        <NewsletterSection />
        <CommunitySection />
      </main>
    </div>
  );
}

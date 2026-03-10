import Navbar from "./components/Navbar";
import CalendarSection from "./components/CalendarSection";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import CommunitySection from "./components/ComunitySection";
import CountdownSection from "./components/CountDownSection";
import ShopSection from "./components/ShopSection";
import NewsletterSection from "./components/NewsletterSection";
import TritonExperienceCards from "./components/TritonCardsSection";
import RankingSection from "./components/RankingSection";
import PartnersSection from "./components/PartnersSection";
import RedLine from "./ui/RedLine";

export default function Page() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-triton-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TritonExperienceCards />
        <CountdownSection />
        <RankingSection />
        <Testimonials />
        <CalendarSection />
        <ShopSection />
        <NewsletterSection />
        <PartnersSection />
        <CommunitySection />
      </main>
    </div>
  );
}

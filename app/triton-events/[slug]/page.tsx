import FormatsSection from "@/app/triton-events/[slug]/FormatsSection";
import LocationsSection from "./LocationsSection";
import CountdownSectionEvent from "./CountDownSectionEvent";
import EventNavBar from "./EventNavBar";
import InfoSection from "./InfoSection";
import ScheduleSection from "./ScheduleSection";
import Testimonials from "@/app/components/Testimonials";
import NewsletterSection from "@/app/components/NewsletterSection";
import PartnersSection from "@/app/components/PartnersSection";
import ShopSection from "@/app/components/ShopSection";
import Hero from "@/app/components/Hero";
import HeroEvent from "./HeroEvent";
import RedLine from "@/app/ui/RedLine";

export default function Page() {
  return (
    <>
      <EventNavBar />
      <main className="text-white bg-black/90">
        <HeroEvent />
        <CountdownSectionEvent />
        <InfoSection />
        <FormatsSection />
        <ScheduleSection />
        <LocationsSection />
        <Testimonials />
        <ShopSection />
        <NewsletterSection />
        <PartnersSection />
      </main>
    </>
  );
}

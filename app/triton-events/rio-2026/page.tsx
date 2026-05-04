import FormatsSection from "@/app/triton-events/[slug]/FormatsSection";
import LocationsSection from "@/app/components/event/LocationsSection";
import CountdownSectionEvent from "@/app/components/event/CountDownSectionEvent";
import EventNavBar from "@/app/components/event/EventNavBar";
import InfoSection from "@/app/components/event/InfoSection";
import ScheduleSection from "@/app/components/event/ScheduleSection";
import Testimonials from "@/app/components/Testimonials";
import NewsletterSection from "@/app/components/NewsletterSection";
import PartnersSection from "@/app/components/PartnersSection";
import ShopSection from "@/app/components/ShopSection";
import HeroEvent from "@/app/components/event/HeroEvent";
import { EVENT_DATA_MAP } from "@/eventdata";

export default function Page() {
  const data = EVENT_DATA_MAP["rio-2026"];

  return (
    <>
      <EventNavBar />
      <main className="text-white bg-black/90">
        <HeroEvent data={data.hero} />
        <CountdownSectionEvent data={data} />
        <InfoSection stats={data.stats} info={data.info} scoring={data.scoring} />
        <FormatsSection />
        <ScheduleSection schedule={data.schedule} />
        <LocationsSection locations={data.locations} />
        <Testimonials />
        <ShopSection />
        <NewsletterSection />
        <PartnersSection />
      </main>
    </>
  );
}

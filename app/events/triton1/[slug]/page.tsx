import LocationsSection from "@/app/components/event/LocationsSection";
import CountdownSectionEvent from "@/app/components/event/CountDownSectionEvent";
import EventNavBar from "@/app/components/event/EventNavBar";
import ScheduleSection from "@/app/components/event/ScheduleSection";
import Testimonials from "@/app/components/Testimonials";
import NewsletterSection from "@/app/components/NewsletterSection";
import PartnersSection from "@/app/components/PartnersSection";
import ShopSection from "@/app/components/ShopSection";
import HeroEvent from "@/app/components/event/HeroEvent";
import { EVENT_DATA_MAP } from "@/eventdata";
import { notFound } from "next/navigation";
import InfoSectionTriton1 from "@/app/components/event/InfoSectionTriton1";
import FormatsSectionTriton1 from "@/app/components/event/FormatsSectionTriton1";
import PartnersSectionEvent from "@/app/components/event/PartnersSectionEvent";
import AfterMovie from "@/app/components/AfterMovie";
import { Metadata } from "next";
import ExtraEvent from "@/app/components/event/ExtraEvent";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = EVENT_DATA_MAP[slug];

  return {
    title: `${data.title} | Triton`,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params;
  const data = EVENT_DATA_MAP[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <EventNavBar language={data.language} registerLink={data.registrationLink} />
      <main className="text-white bg-black/90">
        <HeroEvent data={data.hero} />
        <CountdownSectionEvent data={data} />
        <InfoSectionTriton1 info={data.info} scoring={data.scoring} eventFormat={data.eventFormat} language={data.language} />
        <FormatsSectionTriton1 formats={data.formats} language={data.language} />
        {data.extraEvent && <ExtraEvent {...data.extraEvent} />}
        <ScheduleSection schedule={data.schedule} language={data.language} />
        <LocationsSection locations={data.locations} language={data.language} />
        {data.afterMovie && <AfterMovie youtubeSrc={data.afterMovie.youtubeSrc} language={data.language} />}
        {data.testimonial && <Testimonials testimonials={data.testimonial.testimonials} youtubeSrc={data.testimonial.youtubeSrc} language={data.language} />}
        <ShopSection language={data.language} />
        <NewsletterSection language={data.language} />
        <PartnersSectionEvent partners={data.partners} />
      </main>
    </>
  );
}

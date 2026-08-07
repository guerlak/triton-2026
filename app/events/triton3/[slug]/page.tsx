import FormatsSection from "@/app/components/event/FormatsSection";
import LocationsSection from "@/app/components/event/LocationsSection";
import CountdownSectionEvent from "@/app/components/event/CountDownSectionEvent";
import EventNavBar from "@/app/components/event/EventNavBar";
import InfoSection from "@/app/components/event/InfoSection";
import ScheduleSection from "@/app/components/event/ScheduleSection";
import Testimonials from "@/app/components/Testimonials";
import NewsletterSection from "@/app/components/NewsletterSection";
import ShopSection from "@/app/components/ShopSection";
import HeroEvent from "@/app/components/event/HeroEvent";
import { EVENT_DATA_MAP } from "@/eventdata";
import { notFound } from "next/navigation";
import PartnersSectionEvent from "@/app/components/event/PartnersSectionEvent";
import AfterMovie from "@/app/components/AfterMovie";
import { Metadata } from "next";
import ExtraEvent from "@/app/components/event/ExtraEvent";
import RedLine from "@/app/ui/RedLine";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = EVENT_DATA_MAP[slug];

  return {
    title: `${data.title} | Triton`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = EVENT_DATA_MAP[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <EventNavBar
        language={data.language}
        registerLink={data.registrationLink}
      />
      <main className="text-white bg-black/90">
        <HeroEvent data={data.hero} />
        <CountdownSectionEvent data={data} />
        <InfoSection
          info={data.info}
          scoring={data.scoring}
          eventFormat={data.eventFormat}
          language={data.language}
        />
        <FormatsSection formats={data.formats} language={data.language} />
        {data.extraEvent && <ExtraEvent {...data.extraEvent} />}
        <ScheduleSection schedule={data.schedule} language={data.language} />
        <LocationsSection locations={data.locations} language={data.language} />
        {data.afterMovie && (
          <AfterMovie
            youtubeSrc={data.afterMovie.youtubeSrc}
            language={data.language}
          />
        )}
        <Testimonials
          language={data.language}
          testimonials={data.testimonial?.testimonials}
        />
        <ShopSection language={data.language} />
        <NewsletterSection language={data.language} />
        <PartnersSectionEvent partners={data.partners} />
      </main>
    </>
  );
}

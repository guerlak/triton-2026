import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PREVIEW_DATA_MAP, EVENT_DATA_MAP } from "@/eventdata";
import LocationsSection from "@/app/components/event/LocationsSection";
import CountdownSectionEvent from "@/app/components/event/CountDownSectionEvent";
import EventNavBar from "@/app/components/event/EventNavBar";
import ScheduleSection from "@/app/components/event/ScheduleSection";
import Testimonials from "@/app/components/Testimonials";
import NewsletterSection from "@/app/components/NewsletterSection";
import ShopSection from "@/app/components/ShopSection";
import HeroEvent from "@/app/components/event/HeroEvent";
import InfoSectionTriton1 from "@/app/components/event/InfoSectionTriton1";
import FormatsSectionTriton1 from "@/app/components/event/FormatsSectionTriton1";
import InfoSection from "@/app/components/event/InfoSection";
import FormatsSection from "@/app/components/event/FormatsSection";
import PartnersSectionEvent from "@/app/components/event/PartnersSectionEvent";
import AfterMovie from "@/app/components/AfterMovie";
import ExtraEvent from "@/app/components/event/ExtraEvent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = PREVIEW_DATA_MAP[slug] || EVENT_DATA_MAP[slug];

  if (!data) {
    return {
      title: "Preview Not Found | TRITON",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `[PREVIEW] ${data.title} ${data.year} | TRITON World Series`,
    description: `Private preview for ${data.title} ${data.year}.`,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = PREVIEW_DATA_MAP[slug] || EVENT_DATA_MAP[slug];

  if (!data) {
    notFound();
  }

  const isTriton3 = data.eventFormat === "triton3";

  return (
    <>
      <EventNavBar
        language={data.language}
        registerLink={data.registrationLink}
        isRegistrationClosed={data.isRegistrationClosed}
      />

      <main className="text-white bg-black/90 relative">
        <HeroEvent data={data.hero} />
        <CountdownSectionEvent data={data} />

        {isTriton3 ? (
          <>
            <InfoSection
              language={data.language}
              eventFormat={data.eventFormat}
            />
            <FormatsSection formats={data.formats} language={data.language} />
          </>
        ) : (
          <>
            <InfoSectionTriton1
              eventFormat={data.eventFormat}
              language={data.language}
            />
            <FormatsSectionTriton1
              formats={data.formats}
              language={data.language}
            />
          </>
        )}

        {data.extraEvent && <ExtraEvent {...data.extraEvent} />}
        <ScheduleSection schedule={data.schedule} language={data.language} />
        <LocationsSection locations={data.locations} language={data.language} />

        {data.afterMovie && (
          <AfterMovie
            youtubeSrc={data.afterMovie.youtubeSrc}
            language={data.language}
          />
        )}

        {data.testimonial && (
          <Testimonials
            testimonials={data.testimonial.testimonials}
            youtubeSrc={data.testimonial.youtubeSrc}
            language={data.language}
          />
        )}

        <ShopSection language={data.language} />
        <NewsletterSection language={data.language} />
        {data.partners && <PartnersSectionEvent partners={data.partners} />}

        {/* Floating Preview Indicator Badge */}
        <aside
          aria-label="Preview Indicator"
          className="fixed bottom-4 right-4 z-50 bg-neutral-950/90 border border-amber-500/50 backdrop-blur-md px-3.5 sm:px-4 py-2 rounded-full text-[10px] sm:text-xs font-mono font-bold text-amber-400 shadow-2xl shadow-black/80 flex items-center gap-2 pointer-events-none"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>PREVIEW PRIVADO • NÃO PUBLICADO</span>
        </aside>
      </main>
    </>
  );
}

import LocationsSection from "@/app/components/event/LocationsSection";
import CountdownSectionEvent from "@/app/components/event/CountDownSectionEvent";
import EventNavBar from "@/app/components/event/EventNavBar";
import ScheduleSection from "@/app/components/event/ScheduleSection";
import Testimonials from "@/app/components/Testimonials";
import NewsletterSection from "@/app/components/NewsletterSection";
import ShopSection from "@/app/components/ShopSection";
import HeroWorldFinal from "@/app/ui/HeroWorldFinal";
import { WORLDFINALS_DATA_MAP } from "@/eventdata";
import { notFound } from "next/navigation";
import InfoSectionTriton1 from "@/app/components/event/InfoSectionTriton1";
import FormatsSectionTriton1 from "@/app/components/event/FormatsSectionTriton1";
import PartnersSectionEvent from "@/app/components/event/PartnersSectionEvent";
import AfterMovie from "@/app/components/AfterMovie";
import { Metadata } from "next";
import ExtraEvent from "@/app/components/event/ExtraEvent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = WORLDFINALS_DATA_MAP[slug];

  if (!data) {
    return {
      title: "World Finals | TRITON World Series",
      description:
        "TRITON World Championship Finals - The ultimate endurance season finale.",
    };
  }

  const title = `TRITON World Finals ${data.year} | ${data.location}, ${data.country}`;
  const description = `The official TRITON World Championship Finals ${data.year} in ${
    data.venue || data.location
  }, ${data.country}. The season climax awarding 3× ranking points to crown the world champions across all distances.`;

  const ogImage =
    typeof data.hero?.backgroundImage === "string"
      ? data.hero.backgroundImage
      : (data.hero?.backgroundImage as { src?: string })?.src ||
        "/images/og-image.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/world-finals/${slug}`,
      siteName: "TRITON World Series",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${data.title} ${data.year}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params;

  const data = WORLDFINALS_DATA_MAP[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <EventNavBar language={data.language} registerLink={data.registrationLink} isRegistrationClosed={data.isRegistrationClosed} />
      <main className="text-white bg-black/90">
        <HeroWorldFinal data={data.hero} event={data} />
        <CountdownSectionEvent data={data} />
        <InfoSectionTriton1 eventFormat={data.eventFormat} language={data.language} />
        <FormatsSectionTriton1 formats={data.formats} language={data.language} />
        {data.extraEvent && <ExtraEvent {...data.extraEvent} />}
        <ScheduleSection schedule={data.schedule} language={data.language} />
        <LocationsSection locations={data.locations} language={data.language} />
        {data.afterMovie && <AfterMovie youtubeSrc={data.afterMovie.youtubeSrc} language={data.language} />}
        {data.testimonial && <Testimonials testimonials={data.testimonial.testimonials} youtubeSrc={data.testimonial.youtubeSrc} language={data.language} />}
        <ShopSection language={data.language} />
        <NewsletterSection language={data.language} />
        {data.partners && <PartnersSectionEvent partners={data.partners} />}
      </main>
    </>
  );
}

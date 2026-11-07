import LocationsSection from "@/app/components/event/LocationsSection";
import CountdownSectionEvent from "@/app/components/event/CountDownSectionEvent";
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
import WorldFinalsJourneySection from "@/app/components/event/WorldFinalsJourneySection";
import CustomNavbar, { CustomNavItem } from "@/app/components/CustomNavbar";
import Link from "next/link";

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
  const description = `The official TRITON World Championship Finals ${data.year} in ${data.venue || data.location
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
        }
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

  const navLinks: CustomNavItem[] = [
    { name: "The Final", href: "#journey" },
    { name: "Courses", href: "#formats" },
    { name: "Schedule", href: "#schedule" },
    { name: "Location", href: "#locations" },
    { name: "Global Ranking", href: "/ranking" },

  ];

  return (
    <>
      <CustomNavbar

        links={navLinks}
        actions={
          <>
            {/* <Link
              href={`/world-finals/${slug}/athlete-area`}
              className="px-3 sm:px-3.5 py-1.5 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200"
            >
              Athlete Area
            </Link> */}
            {data.registrationLink && !data.isRegistrationClosed ? (
              <a
                href={data.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 sm:px-4 py-1.5 rounded-full bg-triton-red hover:bg-red-700 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md shadow-red-950/60 transition-all duration-200"
              >
                Register Now
              </a>
            ) : ""}
          </>
        }
      />
      <main className="text-white bg-black/90">
        <HeroWorldFinal data={data.hero} event={data} />
        <CountdownSectionEvent data={data} />
        <WorldFinalsJourneySection language={data.language} />
        {/* <InfoSectionTriton1 eventFormat={data.eventFormat} language={data.language} /> */}
        <FormatsSectionTriton1 formats={data.formats} language={data.language} />
        {data.extraEvent && <ExtraEvent {...data.extraEvent} />}
        <ScheduleSection schedule={data.schedule} language={data.language} />
        <LocationsSection locations={data.locations} language={data.language} />
        {data.afterMovie?.youtubeSrc && <AfterMovie youtubeSrc={data.afterMovie.youtubeSrc} language={data.language} />}
        {data.testimonial && <Testimonials testimonials={data.testimonial.testimonials} youtubeSrc={data.testimonial.youtubeSrc} language={data.language} />}
        <ShopSection language={data.language} />
        <NewsletterSection language={data.language} />
        {data.partners && <PartnersSectionEvent partners={data.partners} />}
      </main>
    </>
  );
}

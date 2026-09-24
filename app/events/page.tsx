import { MapPin, Calendar, ArrowLeft } from "lucide-react";
import { CalendarEvent } from "@/types";
import { EVENT_DATA_MAP } from "@/eventdata";
import Link from "next/link";
import Image from "next/image";

interface EventsPageProps {
  events: CalendarEvent[];
  onBack: () => void;
}

const EventsPage: React.FC<EventsPageProps> = () => {
  const eventsList: CalendarEvent[] = Object.values(EVENT_DATA_MAP)
    .filter((event) => event.status !== "Planned")
    .map(
      (event) => ({
        date: event.dateText,
        location: event.title,
        image: event.locations.experience.image,
        country: event.country,
        flag: event.flag,
        status: event.status,
        year: event.year,
        format: event.subtitle,
        eventFormat: event.eventFormat,
        slug: event.slug,
      }),
    )
    .sort((a, b) => {
      if (a.status === "Confirmed" && b.status === "Completed") return -1;
      if (a.status === "Completed" && b.status === "Confirmed") return 1;
      return 0;
    });

  const groupedEvents = eventsList.reduce(
    (acc, event) => {
      if (!acc[event.country]) {
        acc[event.country] = [];
      }
      acc[event.country].push(event);
      return acc;
    },
    {} as Record<string, CalendarEvent[]>,
  );

  const countries = Object.keys(groupedEvents).sort();

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-xs">
            Back to Home
          </span>
        </Link>

        <header className="mb-20">
          <h1 className="text-6xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
            Global <br />
            <span className="text-triton-red">Calendar</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Explore every TRITON World Series destination across the globe.
          </p>
        </header>

        {countries.map((country) => (
          <section key={country} className="mb-24">
            <div className="flex items-center gap-6 mb-12">
              <span className="text-5xl">
                {groupedEvents[country][0].flag}
              </span>
              <h2 className="text-4xl font-black uppercase tracking-tight">
                {country}
              </h2>
              <div className="h-px flex-grow bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {groupedEvents[country].map((event) => {
                const isCompleted = event.status === "Completed";

                return (
                  <Link
                    href={`/events/${event.eventFormat}/${event.slug}`}
                    key={`${event.location}-${event.date}-${event.year}`}
                    className={`group relative h-[450px] rounded-3xl overflow-hidden bg-neutral-900 border
                     transition-all duration-500 shadow-2xl block ${isCompleted
                        ? "border-white/5 opacity-60 hover:opacity-90 grayscale-[0.25] hover:grayscale-0 hover:border-white/20"
                        : "border-white/5 hover:border-triton-red/30"
                      }`}
                  >
                    {/* Card Background Image */}
                    {event.image && (
                      <Image
                        src={event.image}
                        alt={event.location}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover absolute inset-0 opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 pointer-events-none"
                      />
                    )}
                    {/* Bottom Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent z-1" />

                    {/* Year Badge on Top Left */}
                    <div className="absolute top-8 left-8 z-10">
                      <div
                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-xl border transition-all duration-500 ${isCompleted
                          ? "bg-neutral-900/90 text-gray-500 border-white/10 shadow-md"
                          : "bg-linear-to-r from-triton-red/30 via-neutral-950/80 to-black/90 text-white border-triton-red/50 shadow-[0_0_20px_rgba(235,0,40,0.35)] group-hover:border-triton-red group-hover:shadow-[0_0_30px_rgba(235,0,40,0.6)]"
                          }`}
                      >
                        {!isCompleted && (
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-triton-red opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-triton-red shadow-[0_0_8px_#eb0028]"></span>
                          </span>
                        )}
                        <span className="text-xs font-black tracking-[0.15em] uppercase text-white">
                          {event.year}
                        </span>
                      </div>
                    </div>

                    {/* Triton Format Badge on Top Right */}
                    <div className="absolute top-8 right-8 z-10">
                      <span className="px-4 py-1.5 rounded-md text-[10px] font-black uppercase tracking-[0.2em] bg-triton-red text-white shadow-lg">
                        {event.eventFormat === "triton3" ? "Triton 3" : "Triton 1"}
                      </span>
                    </div>

                    <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                      <div className="mb-6">
                        <span
                          className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] ${event.status === "Confirmed"
                            ? "bg-green-500/10 text-green-400 border border-green-500/20"
                            : isCompleted
                              ? "bg-white/10 text-gray-400 border border-white/10"
                              : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                            }`}
                        >
                          {event.status}
                        </span>
                      </div>

                      <h3
                        className="text-4xl font-black uppercase leading-[0.9] mb-6 group-hover:text-triton-red 
                      transition-colors duration-300"
                      >
                        {event.location}
                      </h3>

                      <div className="space-y-4 text-gray-300">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-triton-red" />
                          <span className="text-sm font-bold tracking-wide uppercase">
                            {event.date} • {event.year}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-triton-red" />
                          <span className="text-sm font-bold tracking-wide uppercase opacity-70">
                            {event.location}, {country}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

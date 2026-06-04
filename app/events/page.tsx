import { MapPin, Calendar, ArrowLeft } from "lucide-react";
import { CalendarEvent } from "@/types";
import { EVENT_DATA_MAP } from "@/eventdata";
import Link from "next/link";

interface EventsPageProps {
  events: CalendarEvent[];
  onBack: () => void;
}

const EventsPage: React.FC<EventsPageProps> = () => {
  const eventsList: CalendarEvent[] = Object.values(EVENT_DATA_MAP)
    .filter((event) => event.status !== "Completed" && event.status !== "Planned")
    .map(
      (event) => ({
        date: event.dateText,
        location: event.title,
        country: event.country,
        flag: event.flag,
        status: event.status,
        year: event.year,
        format: event.subtitle,
        eventFormat: event.eventFormat,
        slug: event.slug,
      }),
    );

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
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
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
              {groupedEvents[country].map((event) => (
                <Link
                  href={`/events/${event.eventFormat}/${event.slug}`}
                  key={`${event.location}-${event.date}`}
                  className="group relative h-[450px] rounded-3xl overflow-hidden bg-neutral-900 border
                   border-white/5 hover:border-triton-red/30 transition-all duration-500 shadow-2xl block"
                >
                  <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                    <div className="mb-6">
                      <span
                        className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]
                           ${event.status === "Confirmed"
                            ? "bg-green-500/10 text-green-400 border border-green-500/20"
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
                          {event.date} {event.year}
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
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

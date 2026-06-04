"use client";
import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import Link from "next/link";
import { EVENT_DATA_MAP } from "@/eventdata";

const CalendarSection: React.FC = () => {
  const calendarEvents = Object.values(EVENT_DATA_MAP)
    .sort((a, b) => a.targetDate.localeCompare(b.targetDate))
    .map((event) => ({
      date: event.dateText,
      location: event.title === "Rio de Janeiro" ? "Rio de Janeiro, RJ" : event.title === "Salvador" ? "Salvador, BA" : event.title,
      country: event.country,
      flag: event.flag,
      status: event.status,
      year: event.year,
      format: event.eventFormat === "triton3" ? "Triton 3" : "Triton 1",
      eventFormat: event.eventFormat,
      slug: event.slug,
    }));

  const events2026 = calendarEvents.filter((e) => e.year === 2026);
  const eventsFuture = calendarEvents.filter(
    (e) => e.year > 2026 || e.status === "Planned"
  );

  return (
    <section id="calendar" className="py-24 bg-triton-gray relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-linear-to-b from-black to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-6 ">
          <div>
            <h2 className="text-triton-red font-bold tracking-widest uppercase mb-2">
              World Series
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase text-white">
              Calendar
            </h3>
          </div>
          <div className="md:text-right">
            <p className="text-xl font-bold text-white">
              GET READY TO RACE
            </p>
            <p className="text-gray-400 text-sm mb-2">+30 nationalities competing</p>
            <Link href="/triton-events" className="text-triton-red text-md font-bold uppercase hover:opacity-75">
              Check Global Calendar &rarr;
            </Link>
          </div>
        </div>

        {/* 2026 Timeline */}
        <div className="mb-10">
          <h4 className="text-2xl font-bold text-white mb-8 border-l-4 border-triton-red pl-4">
            2026 RACES{" "}
            <span className="text-sm font-normal text-gray-500 ml-2">
              *Official series stages
            </span>
          </h4>
          <div className="flex overflow-x-auto snap-x snap-mandatory sm:snap-none sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-6 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {events2026.map((event, idx) => (
              <div
                key={idx}
                className="shrink-0 w-[85%] sm:w-auto snap-center bg-neutral-900 p-6 rounded-xl border-t-4 border-triton-red hover:transform hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl">{event.flag}</span>
                  <div className="flex gap-1.5">
                    {event.status === "Completed" && (
                      <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                        Completed
                      </span>
                    )}
                    {event.location.includes("Final") && (
                      <span className="bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded uppercase">
                        Final Mundial
                      </span>
                    )}
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-triton-red font-bold text-sm flex items-center gap-2">
                    <CalendarIcon size={14} /> {event.date}
                  </span>
                </div>
                <h5 className="text-xl font-black text-white uppercase mb-1">
                  {event.location}
                </h5>
                <p className="text-gray-500 text-sm">{event.country}</p>
                <span className="inline-block bg-white/10 text-white text-[10px] font-bold px-2 py-1 mt-4 rounded uppercase">
                  {event.format}
                </span>
                {event.status !== "Completed" && (
                  <div className="mt-6 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href={`/events/${event.eventFormat}/${event.slug}`} className="text-white text-xs font-bold uppercase hover:text-triton-red">
                      More Info &rarr;
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Future Locations */}
        <div>
          <h4 className="text-xl font-bold text-gray-400 mb-5 md:mb-8 pl-4">
            COMING SOON
          </h4>
          <div className="flex flex-wrap gap-4">
            {eventsFuture.map((event, idx) => (
              <div
                key={idx}
                className="flex items-center bg-white/5 px-6 py-1 md:py-4 rounded-full border border-white/5"
              >
                <span className="mr-3 text-3xl">{event.flag}</span>
                <div>
                  <p className="font-bold text-white uppercase text-xs md:text-sm">
                    {event.location}
                  </p>
                  <p className="text-[10px] text-gray-400">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;

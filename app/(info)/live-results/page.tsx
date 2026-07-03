"use client";

import Navbar from "@/app/components/Navbar";
import MainButton from "@/app/ui/MainButton";
import { Activity, Trophy, Calendar, ArrowRight, ExternalLink, Filter } from "lucide-react";
import { EVENT_DATA_MAP } from "@/eventdata";
import { useState, useMemo } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

import heroImg from "@/public/images/triton-about-002.png";
import HeroSection from "@/app/ui/HeroSection";

interface PastEvent {
  name: string;
  year: number;
  slug: string;
  startList: string;
  results: string;
}

const PAST_EVENTS: PastEvent[] = [
  { name: "Portimão", year: 2022, slug: "portimao-2022", startList: "https://api.raceresult.com/391757/AOGOXB8CKCWGHNE3BLXF2H00YR8YQ330", results: "https://api.raceresult.com/391757/BCIG1MZ4X0FB6Y7H1IBU7AHGPZLOMP1W" },
  { name: "Portimão", year: 2023, slug: "portimao-2023", startList: "https://api.raceresult.com/391757/6OXP3U59ZWG657YXJQRXMG9KJNNWBWLG", results: "https://api.raceresult.com/391757/0MM6R3PVU35DALD2LAQACJ021RAFLYVK" },
  { name: "Lisboa", year: 2023, slug: "lisboa-2023", startList: "https://api.raceresult.com/391757/SM01QXI1IOJO4MHFALSEDYYY3S475Y22", results: "https://api.raceresult.com/391757/IJWTVQCCXTQCKWA9N4JLZ7JGL5INMMQ8" },
  { name: "Lisboa", year: 2024, slug: "lisboa-2024", startList: "https://api.raceresult.com/393982/AOGOXB8CKCWGHNE3BLXF2H00YR8YQ330", results: "https://api.raceresult.com/393982/BCIG1MZ4X0FB6Y7H1IBU7AHGPZLOMP1W" },
  { name: "Rio de Janeiro", year: 2024, slug: "rio-de-janeiro-2024", startList: "https://api.raceresult.com/393982/6OXP3U59ZWG657YXJQRXMG9KJNNWBWLG", results: "https://api.raceresult.com/393982/0MM6R3PVU35DALD2LAQACJ021RAFLYVK" },
  { name: "Salvador", year: 2024, slug: "salvador-2024", startList: "https://api.raceresult.com/393982/NO4KQ4QZSVRKWT4141F7PKVSCO6I4VZ7", results: "https://api.raceresult.com/393982/QM08IZQDSJMC00E0PSVSCY4ATSL7EDW2" },
  { name: "Salvador", year: 2025, slug: "salvador-2025", startList: "https://api.raceresult.com/394163/AOGOXB8CKCWGHNE3BLXF2H00YR8YQ330", results: "https://api.raceresult.com/394163/BCIG1MZ4X0FB6Y7H1IBU7AHGPZLOMP1W" },
  { name: "Rio de Janeiro", year: 2025, slug: "rio-de-janeiro-2025", startList: "https://api.raceresult.com/394163/6OXP3U59ZWG657YXJQRXMG9KJNNWBWLG", results: "https://api.raceresult.com/394163/0MM6R3PVU35DALD2LAQACJ021RAFLYVK" },
  { name: "Lisboa", year: 2025, slug: "lisboa-2025", startList: "https://api.raceresult.com/358558/7Y8TL27JUPEYJU1PEX5V9XPQR8642FE9", results: "https://api.raceresult.com/358558/K88YJLRWDKKMM864MK4NGY58UPZTQ2RG" },
  { name: "Portimão", year: 2025, slug: "portimao-2025", startList: "https://api.raceresult.com/362673/507LIWI3TAGV809R53S442M8CTU25MJQ", results: "https://api.raceresult.com/362673/BC9WES9T0B422JUHYB1X7DX40NYQXE4T" },
];

export default function LiveResultsPage() {
  //redirect("/under-development");

  const now = new Date();
  const [selectedEvent, setSelectedEvent] = useState<string>("All");
  const [selectedYear, setSelectedYear] = useState<string>("All");

  // Find if there is a live event based on the targetDate and format duration
  const liveEvent = Object.values(EVENT_DATA_MAP).find((event) => {
    if (!event.targetDate) return false;
    const eventStart = new Date(event.targetDate);
    const durationDays = event.eventFormat === "triton3" ? 3 : 1;
    const eventEnd = new Date(eventStart.getTime() + durationDays * 24 * 60 * 60 * 1000);
    return now >= eventStart && now <= eventEnd;
  });

  // Extract unique events and years for filters
  const eventNames = useMemo(() => {
    const names = new Set(PAST_EVENTS.map(e => e.name));
    return ["All", ...Array.from(names).sort()];
  }, []);

  const years = useMemo(() => {
    const yrs = new Set(PAST_EVENTS.map(e => e.year.toString()));
    return ["All", ...Array.from(yrs).sort((a, b) => b.localeCompare(a))];
  }, []);

  // Filtered past events
  const filteredEvents = useMemo(() => {
    return PAST_EVENTS.filter(event => {
      const matchEvent = selectedEvent === "All" || event.name === selectedEvent;
      const matchYear = selectedYear === "All" || event.year.toString() === selectedYear;
      return matchEvent && matchYear;
    });
  }, [selectedEvent, selectedYear]);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-triton-red selection:text-white flex flex-col justify-center items-center gap-24 relative overflow-hidden">
      <HeroSection
        backgroundImage={heroImg}
        heightClass="h-[480px]"
        darkFilter={true}
        showChevron={false}
      >
        <div className="max-w-2xl w-full text-center relative z-10 mt-8 flex flex-col items-center">
          {/* Pulsing indicator */}
          <div className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center">
            {liveEvent ? (
              <>
                <div className="absolute inset-0 rounded-full border border-triton-red/30 animate-ping opacity-75" />
                <div className="absolute -inset-4 rounded-full border border-white/5 animate-pulse" />
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-triton-red/50 animate-[spin_10s_linear_infinite]" />
                <div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center shadow-[0_0_25px_rgba(223,31,38,0.25)]">
                  <Activity className="text-triton-red animate-pulse" size={28} />
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 rounded-full border border-white/5" />
                <div className="w-16 h-16 rounded-full bg-neutral-950 border border-white/10 flex items-center justify-center">
                  <Activity className="text-neutral-500" size={28} />
                </div>
              </>
            )}
          </div>

          {/* Badge */}
          <div className={`inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 ${liveEvent
            ? "bg-triton-red/10 border-triton-red/30 text-triton-red"
            : "bg-white/5 border-white/10 text-neutral-400"
            }`}>
            {liveEvent ? (
              <>
                <span className="w-2.5 h-2.5 rounded-full bg-triton-red animate-ping" />
                Event Live Now
              </>
            ) : (
              <>
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                No Live Event
              </>
            )}
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black uppercase italic leading-none mb-6 tracking-tight">
            {liveEvent ? (
              <>
                {liveEvent?.title} <span className="text-triton-red">{liveEvent?.subtitle}</span>
              </>
            ) : (
              <>
                Follow the Race <span className="text-triton-red">Live Results</span>
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            {liveEvent
              ? `Track real-time results from the ongoing ${liveEvent?.title} stage and stay on top of every move.`
              : "Track real-time results from the next TRITON stage and stay on top of every move."
            }
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {liveEvent &&
              <MainButton href={liveEvent?.liveResutsUrl || "#"}>
                Go to Live Results
              </MainButton>
            }
          </div>
        </div>
      </HeroSection>

      {/* Divider */}
      <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent relative z-10" />

      {/* Past Events / All Results Section */}
      <div className="max-w-4xl w-full text-center relative z-10 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-black uppercase italic leading-none mb-6 tracking-tight">
          All Races. <span className="text-triton-red">All Results.</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg font-medium max-w-xl mx-auto mb-12 leading-relaxed">
          Explore startlists and results from every TRITON event. Use the filter to find a specific race.
        </p>

        {/* Filters */}
        <div className="w-full max-w-2xl bg-neutral-900/40 border border-white/10 rounded-2xl p-6 mb-10 backdrop-blur-sm flex flex-col sm:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-2 text-neutral-400 font-bold uppercase tracking-wider text-xs">
            <Filter size={16} className="text-triton-red" />
            <span>Filter Results</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Event Name Filter */}
            <div className="flex flex-col items-start gap-1 w-full sm:w-48">
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Event</label>
              <select
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                className="w-full bg-neutral-950 border border-white/10 rounded-lg px-3 py-2 text-sm font-semibold text-white focus:outline-none focus:border-triton-red transition-colors cursor-pointer"
              >
                {eventNames.map(name => (
                  <option key={name} value={name}>{name === "All" ? "All Locations" : name}</option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div className="flex flex-col items-start gap-1 w-full sm:w-36">
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full bg-neutral-950 border border-white/10 rounded-lg px-3 py-2 text-sm font-semibold text-white focus:outline-none focus:border-triton-red transition-colors cursor-pointer"
              >
                {years.map(yr => (
                  <option key={yr} value={yr}>{yr === "All" ? "All Years" : yr}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid/List */}
        <div className="w-full max-w-3xl space-y-4 text-left">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, idx) => (
              <div
                key={`${event.name}-${event.year}-${idx}`}
                className="group relative bg-neutral-900/25 hover:bg-neutral-900/60 border border-white/5 hover:border-white/10 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all duration-300"
              >
                {/* Event Name & Year */}
                <div className="flex items-center gap-4">
                  <div className="w-15 h-10 rounded-lg bg-neutral-950 border border-white/5 flex items-center justify-center text-sm font-black text-triton-red group-hover:scale-105 transition-transform">
                    {event.year.toString()}
                  </div>
                  <div>
                    <h3 className="font-black uppercase text-lg group-hover:text-triton-red transition-colors leading-none mb-1.5">
                      {event.name}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold">
                      TRITON World Series &bull; {event.year}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <Link
                    href={`/live-results/${event.slug}/start-list`}
                    className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-900 border border-white/10 hover:border-white/20 px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all"
                  >
                    <span>Start List</span>
                    <ArrowRight size={12} className="opacity-60" />
                  </Link>

                  <Link
                    href={`/live-results/${event.slug}/results`}
                    className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-triton-red hover:bg-triton-red/80 px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(223,31,38,0.15)]"
                  >
                    <span>Results</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 border border-dashed border-white/10 rounded-xl">
              <p className="text-neutral-500 font-medium text-sm">
                No races found matching your filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


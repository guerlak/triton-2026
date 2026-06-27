import React from "react";
import Link from "next/link";
import { ArrowLeft, Trophy, FileText, ChevronRight } from "lucide-react";

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

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = PAST_EVENTS.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-black uppercase text-triton-red mb-4">Event Not Found</h1>
        <Link href="/live-results" className="text-sm underline">Back to Live Results</Link>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] bg-black text-white flex flex-col justify-center items-center px-4 py-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-triton-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full relative z-10 text-center">
        <Link
          href="/live-results"
          className="mb-8 inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group mx-auto"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-xs">Back to Results</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
          {event.name}
        </h1>
        <p className="text-triton-red font-black uppercase tracking-widest text-sm mb-12">
          TRITON World Series &bull; {event.year}
        </p>

        <div className="space-y-4">
          <Link
            href={`/live-results/${event.slug}/start-list`}
            className="flex items-center justify-between p-5 bg-neutral-900 border border-white/5 hover:border-white/10 rounded-2xl transition-all group"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center border border-white/5 text-neutral-400 group-hover:text-white transition-colors">
                <FileText size={20} />
              </div>
              <div>
                <h3 className="font-black uppercase tracking-wide text-sm group-hover:text-triton-red transition-colors">Start List</h3>
                <p className="text-xs text-neutral-500">View athlete entries and bib numbers</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-neutral-500 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href={`/live-results/${event.slug}/results`}
            className="flex items-center justify-between p-5 bg-neutral-900 border border-white/5 hover:border-white/10 rounded-2xl transition-all group"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center border border-white/5 text-neutral-400 group-hover:text-white transition-colors">
                <Trophy size={20} />
              </div>
              <div>
                <h3 className="font-black uppercase tracking-wide text-sm group-hover:text-triton-red transition-colors">Race Results</h3>
                <p className="text-xs text-neutral-500">View category ranking and completion times</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-neutral-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

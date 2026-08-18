import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import StartListClientWrapper from "@/app/components/event/StartListClientWrapper";

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

export default async function StartListPage({
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
        <Link href="/results" className="text-sm underline">Back to Results</Link>
      </div>
    );
  }

  let athletes = [];
  let errorMsg = null;

  try {
    const res = await fetch(event.startList, {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    athletes = await res.json();
  } catch (err: any) {
    errorMsg = err?.message || "Could not retrieve start list data.";
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          href="/results"
          className="mb-8 inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-xs">
            Back to Results
          </span>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-triton-red/10 border border-triton-red/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-triton-red mb-4">
            <FileText size={12} />
            Start List
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            {event.name} <span className="text-triton-red">{event.year}</span>
          </h1>

          <p className="text-neutral-400 text-sm md:text-base font-medium mt-2">
            Check the official entry list and bibs for {event.name} {event.year}.
          </p>
        </header>

        {/* Content */}
        {errorMsg ? (
          <div className="bg-neutral-900 border border-triton-red/20 rounded-2xl p-8 text-center">
            <p className="text-triton-red font-bold mb-2">Error Loading Start List</p>
            <p className="text-sm text-neutral-400">{errorMsg}</p>
          </div>
        ) : (
          <StartListClientWrapper initialAthletes={athletes} />
        )}
      </div>
    </div>
  );
}

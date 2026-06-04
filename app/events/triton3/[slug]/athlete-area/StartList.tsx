import StartListClientWrapper from "./StartListClientWrapper";
import { EVENT_DATA_MAP } from "@/eventdata";

export default async function StartList({ slug }: { slug: string }) {
    const eventData = EVENT_DATA_MAP[slug];
    const url = eventData?.startListApiUrl;

    if (!url) {
        return (
            <main className="bg-neutral-950 text-white py-20" id="start-list">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400 text-lg">Start list not available for this event yet.</p>
                </div>
            </main>
        );
    }

    const res = await fetch(url, {
        next: { revalidate: 60 } // Revalidate every 60 seconds
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    const tritonType = eventData.eventFormat === "triton3" ? "TRITON 3" : "TRITON 1";
    const thisEvent = eventData.title;

    return (
        <main className="min-h-screen bg-neutral-950 text-white pt-20 pb-40" id="start-list">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-none">
                            Start<span className="text-triton-red ">List</span>
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Check the startlist of the <strong>{tritonType}</strong> {thisEvent}.
                        </p>
                    </div>
                </div>
                <StartListClientWrapper initialAthletes={data} />
            </div>
        </main>
    );
}




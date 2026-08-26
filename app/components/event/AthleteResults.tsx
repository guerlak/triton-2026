import TopFiveAthletes from "@/app/components/event/TopFIveAthletes";
import AthleteResultsClientWrapper from "@/app/components/event/AthleteResultsClientWrapper";

export default async function AthleteResultsPage({ url, urlTop5 }: { url?: string, urlTop5?: string }) {
  let data = [];
  let dataTop5 = [];

  if (url) {
    try {
      const res = await fetch(url, {
        next: { revalidate: 120 }
      });
      if (res.ok) {
        data = await res.json();
      }
    } catch (error) {
      console.error("Failed to fetch athlete results from API:", error);
    }
  }

  if (urlTop5) {
    try {
      const res = await fetch(urlTop5, {
        next: { revalidate: 120 }
      });
      if (res.ok) {
        dataTop5 = await res.json();
      }
    } catch (error) {
      console.error("Failed to fetch athlete results from API:", error);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white py-20" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-20">
          <TopFiveAthletes initialAthletes={data} />
          <AthleteResultsClientWrapper initialAthletes={dataTop5} />
        </div>
      </div>
    </main>
  );
}

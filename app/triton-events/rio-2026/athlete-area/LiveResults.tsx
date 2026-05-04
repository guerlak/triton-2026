import LiveResultsClientWrapper from "./LiveResultsClientWrapper";
import TopFiveAthletes from "./TopFIveAthletes";

export default async function LiveResultsPage() {

  const url = "https://api.raceresult.com/371805/RQDKNSO0GU02BW4IF4X1G7AF12S073FW"
  const resultsAgeGroupUrl = "https://api.raceresult.com/371805/9WXOB72R7FJ8XA4UU1DW4NC11DJYIZG0"

  const res = await fetch(resultsAgeGroupUrl, {
    next: { revalidate: 2000 } // Revalidate every 33 minutes
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();


  return (
    <main className="min-h-screen bg-black text-white py-20" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          {/* <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-none">
              RESULTS
            </h1>
            <p className="text-gray-400 text-lg">
              Check the results of the <strong>TRITON 1 </strong>Salvador.
            </p>
          </div> */}
        </div>
        <div className="flex flex-col gap-20">
          <TopFiveAthletes initialAthletes={data} />
          <LiveResultsClientWrapper initialAthletes={data} />
        </div>
      </div>
    </main>
  );
}

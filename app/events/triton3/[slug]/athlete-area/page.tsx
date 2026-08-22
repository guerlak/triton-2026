
import StartList from "@/app/components/event/StartList"
import { getEventData } from "@/services/EventService";
import { notFound } from "next/navigation";
import AthleteNavBar from "@/app/components/event/AthleteNavBar";
import RaceGuide from "@/app/components/event/RaceGuide";
import AthleteResults from "@/app/components/event/AthleteResults";
import EventVideo from "@/app/components/event/EventVideo";
import TopFiveAthletes from "@/app/components/event/TopFIveAthletes";
import AthleteResultsClientWrapperTriton3V2 from "@/app/components/event/AthleteResultsClientWrapperTriton3V2";
import { getAthleteResultsFromAPI } from "@/services/RaceResultsService";

export default async function AthleteArePage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	const data = await getEventData(slug);

	if (!data || data.eventFormat === "triton1") {
		notFound();
	}

	const athletes = await getAthleteResultsFromAPI(data.athleteArea?.liveResultsApiUrl);
	const athletesTop5 = await getAthleteResultsFromAPI(data.athleteArea?.topFiveApiUrl);

	return (
		<main className="min-h-screen bg-black text-white">
			<AthleteNavBar liveResultsUrl={data.athleteArea?.liveResultsUrl} targetDate={data.targetDate} mediaPictureUrl={data.athleteArea?.mediaPictureUrl} />
			<RaceGuide raceGuideLink={data.athleteArea?.raceGuideLink} />
			<EventVideo videoBriefingUrl={data.athleteArea?.videoBriefingUrl} />
			{/* <RaceKit /> */}
			{/* <StartList slug={slug} /> */}

			{/* Top 5 Leaderboard Section */}
			<section id="top-five" className="py-12 sm:py-20 bg-black relative border-t border-white/5">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<TopFiveAthletes initialAthletes={athletesTop5} />
				</div>
			</section>

			{/* Full Results Section */}
			<section id="full-results" className="py-12 sm:py-20 bg-black relative border-t border-white/5">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<AthleteResultsClientWrapperTriton3V2 initialAthletes={athletes} />
				</div>
			</section>
		</main>
	);
}

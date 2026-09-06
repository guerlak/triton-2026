import AthleteResults from "@/app/components/event/AthleteResults"
import StartList from "@/app/components/event/StartList"
import { notFound, redirect } from "next/navigation"
import AthleteNavBar from "@/app/components/event/AthleteNavBar"
import { getEventData } from "@/services/EventService";
import RaceGuide from "@/app/components/event/RaceGuide"
import EventVideo from "@/app/components/event/EventVideo"
import TopFiveAthletes from "@/app/components/event/TopFIveAthletes";
import { getAthleteResultsFromAPI } from "@/services/RaceResultsService";
import AthleteResultsClientWrapper from "@/app/components/event/AthleteResultsClientWrapper";

export default async function AthleteArePage({ params }: { params: Promise<{ slug: string }> }) {
	//redirect("/under-development")
	const { slug } = await params;

	const data = await getEventData(slug);

	if (!data) {
		notFound();
	}

	const athletes = await getAthleteResultsFromAPI(data?.athleteArea?.liveResultsApiUrl);
	const athletesTop5 = await getAthleteResultsFromAPI(data?.athleteArea?.topFiveApiUrl);



	return (
		<>
			<AthleteNavBar liveResultsUrl={data.athleteArea?.liveResultsUrl} targetDate={data?.targetDate} mediaPictureUrl={data?.athleteArea?.mediaPictureUrl} />
			<RaceGuide raceGuideLink={data.athleteArea?.raceGuideLink} />
			<EventVideo videoBriefingUrl={data.athleteArea?.videoBriefingUrl} />
			<section id="top-five" className="py-12 sm:py-20 bg-black relative border-t border-white/5">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<TopFiveAthletes initialAthletes={athletesTop5} />
				</div>
			</section>
			<section id="top-five" className="py-12 sm:py-20 bg-black relative border-t border-white/5">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<AthleteResultsClientWrapper initialAthletes={athletes} />
				</div>
			</section>
			{/* <RaceKit /> */}
			<StartList slug={slug} />

		</>
	)
}

import AthleteResults from "@/app/components/event/AthleteResults"
import StartList from "@/app/components/event/StartList"

import { notFound, redirect } from "next/navigation"
import AthleteNavBar from "@/app/components/event/AthleteNavBar"
import { getEventData } from "@/services/EventService";
import RaceGuide from "@/app/components/event/RaceGuide"

export default async function AthleteArePage({ params }: { params: Promise<{ slug: string }> }) {
	//redirect("/under-development")
	const { slug } = await params;

	const data = await getEventData(slug);
	if (!data) {
		notFound();
	}

	return (
		<>
			<AthleteNavBar liveResultsUrl={data.liveResultsUrl} targetDate={data.targetDate} />
			<RaceGuide raceGuideLink={data.raceGuideLink} />
			{/* <RaceKit /> */}
			<StartList slug={slug} />
			<AthleteResults url={data.athleteResultsUrl} />
		</>
	)
}

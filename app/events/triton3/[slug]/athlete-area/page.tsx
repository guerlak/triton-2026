import LiveResults from "./LiveResults"
import StartList from "@/app/components/event/StartList"


import { getEventData } from "@/services/EventService";
import { notFound } from "next/navigation";
import AthleteNavBar from "@/app/components/event/AthleteNavBar";
import RaceGuide from "@/app/components/event/RaceGuide";

export default async function AthleteArePage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	const data = await getEventData(slug);
	if (!data) {
		notFound();
	}


	return (
		<>
			<AthleteNavBar liveResultsUrl={data.liveResultsUrl} />
			<RaceGuide raceGuideLink={data.raceGuideLink} />
			{/* <RaceKit /> */}
			<StartList slug={slug} />
			<LiveResults />
		</>
	)
}

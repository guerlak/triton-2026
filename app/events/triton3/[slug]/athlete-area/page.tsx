import LiveResults from "./LiveResults"
import StartList from "./StartList"
import AthleteNavBar from "./AthleteNavBar"
import RaceGuide from "./RaceGuide"
import { getEventData } from "@/services/EventService";
import { notFound } from "next/navigation";

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

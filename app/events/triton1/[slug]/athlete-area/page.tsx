import LiveResults from "./LiveResults"
import StartList from "@/app/components/event/StartList"

import RaceKit from "./RaceKit"

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
			<AthleteNavBar liveResultsUrl={data.liveResultsUrl} />
			<RaceGuide raceGuideLink={data.raceGuideLink} />
			{/* <RaceKit /> */}
			<StartList slug={slug} />
			<LiveResults />
		</>
	)
}

// KIT
// RACE GUIDE
// Start list
// Results
// reutilizar o componente de filtro e listagem do results
// Full results colocar os results da API T1 T2 Swin Run

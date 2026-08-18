import AthleteResults from "@/app/components/event/AthleteResults"
import StartList from "@/app/components/event/StartList"
import { notFound, redirect } from "next/navigation"
import AthleteNavBar from "@/app/components/event/AthleteNavBar"
import { getEventData } from "@/services/EventService";
import RaceGuide from "@/app/components/event/RaceGuide"
import EventVideo from "@/app/components/event/EventVideo"

export default async function AthleteArePage({ params }: { params: Promise<{ slug: string }> }) {
	//redirect("/under-development")
	const { slug } = await params;

	const data = await getEventData(slug);
	if (!data) {
		notFound();
	}

	return (
		<>
			<AthleteNavBar liveResultsUrl={data.athleteArea?.liveResultsUrl} targetDate={data.targetDate} mediaPictureUrl={data.athleteArea?.mediaPictureUrl} />
			<RaceGuide raceGuideLink={data.athleteArea?.raceGuideLink} />
			<EventVideo videoBriefingUrl={data.athleteArea?.videoBriefingUrl} />
			{/* <RaceKit /> */}
			<StartList slug={slug} />
			<AthleteResults url={data.athleteArea?.liveResultsUrl} />
		</>
	)
}

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
import { ClubRankingPageClient } from "@/app/(info)/ranking/ClubRankingPageClient";
import { fetchClubRanking } from "@/services/RankingService";
import { ApiRankingRepo } from "@/repositories/ApiRankingRepo";

export default async function AthleteArePage({ params }: { params: Promise<{ slug: string }> }) {
	//redirect("/under-development")
	const { slug } = await params;
	const data = await getEventData(slug);
	const rankingRepo = new ApiRankingRepo();

	if (!data) {
		notFound();
	}

	const [athletes, athletesTop5, clubsData] = await Promise.all([
		getAthleteResultsFromAPI(data?.athleteArea?.liveResultsApiUrl),
		getAthleteResultsFromAPI(data?.athleteArea?.topFiveApiUrl),
		fetchClubRanking(rankingRepo),
	]);


	return (
		<>
			<AthleteNavBar
				liveResultsUrl={data.athleteArea?.liveResultsUrl}
				targetDate={data?.targetDate}
				mediaPictureUrl={data?.athleteArea?.mediaPictureUrl}
				videoBriefingUrl={data?.athleteArea?.videoBriefingUrl}
			/>
			<RaceGuide raceGuideLink={data.athleteArea?.raceGuideLink} />
			<section id="top-five" className="py-8 sm:py-12 md:py-20 bg-black relative border-t border-white/5">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<TopFiveAthletes initialAthletes={athletesTop5} />
				</div>
			</section>

			<section id="results" className="py-8 sm:py-12 md:py-20 bg-black relative border-t border-white/5">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<AthleteResultsClientWrapper initialAthletes={athletes} />
				</div>
			</section>

			{/* <section id="club-ranking" className="py-8 sm:py-12 md:py-20 bg-black relative border-t border-white/5">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<ClubRankingPageClient initialClubs={clubsData ?? []} />
				</div>
			</section> */}

			<EventVideo videoBriefingUrl={data.athleteArea?.videoBriefingUrl} />

			<StartList slug={slug} />
		</>
	)
}

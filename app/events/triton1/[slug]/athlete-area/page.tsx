import LiveResults from "./LiveResults"
import StartList from "./StartList"
import AthleteNavBar from "./AthleteNavBar"
import RaceKit from "./RaceKit"
import RaceGuide from "./RaceGuide"

import { redirect } from "next/navigation";

export default async function AthleteArePage({ params }: { params: Promise<{ slug: string }> }) {
	redirect("/under-development");
	const { slug } = await params;
	return (
		<>
			<AthleteNavBar />
			<RaceGuide />
			<RaceKit />
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

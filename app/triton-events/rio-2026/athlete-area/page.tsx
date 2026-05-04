import LiveResults from "./LiveResults"
import StartList from "./StartList"
import AthleteNavBar from "./AthleteNavBar"
import RaceKit from "./RaceKit"
import RaceGuide from "./RaceGuide"

export default function Page() {
	return (
		<>
			<AthleteNavBar />
			<RaceKit />
			<RaceGuide />
			<StartList />
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
//
import React from "react";
import Footer from "../../components/Footer";
import { HelpCircle, ChevronRight, Mail } from "lucide-react";

export default function FAQ() {
	const categories = [
		{ id: "general", title: "General Overview" },
		{ id: "participation", title: "Participation & Eligibility" },
		{ id: "formats", title: "Race Formats & Distances" },
		{ id: "ranking", title: "Global Ranking & Progression" },
		{ id: "registration", title: "Registration & Info" },
		{ id: "race-day", title: "Race Day Experience" },
		{ id: "cut-offs", title: "Cut-off Times" },
		{ id: "rules", title: "Rules & Penalties" },
		{ id: "safety", title: "Safety & Responsibility" },
		{ id: "withdrawals", title: "Withdrawals" },
		{ id: "aid-stations", title: "Aid Stations" },
		{ id: "equipment", title: "Equipment Rules" },
		{ id: "governance", title: "Governance" },
		{ id: "corporate", title: "Corporate & Community" },
		{ id: "final", title: "Final Positioning" },
		{ id: "contact", title: "Contact" },
	];

	return (
		<div className="bg-neutral-950 min-h-screen text-white flex flex-col pt-20 font-sans">
			<main className="grow">
				{/* Header Section */}
				<section className="max-w-7xl mx-auto px-6 py-24 border-b border-white/5">
					<div className="flex items-center gap-3 text-triton-red mb-6">
						<HelpCircle className="w-6 h-6 ml-[-4px]" />
						<span className="font-black uppercase tracking-[0.4em] text-xs">Support</span>
					</div>
					<h1 className="text-5xl md:text-6xl font-black uppercase text-white leading-none mb-8">
						TRITON <span className="text-triton-red italic">WORLD SERIES</span><br />
						<span className="text-3xl md:text-4xl">FREQUENTLY ASKED QUESTIONS (FAQ)</span>
					</h1>
					<p className="text-lg text-gray-500 max-w-3xl leading-relaxed">
						The complete guide to the TRITON ecosystem, formats, rankings, and rules.
					</p>
				</section>

				<div className="max-w-7xl mx-auto px-6 py-20">
					<div className="flex flex-col lg:flex-row gap-16 relative">

						{/* Aside Navigation */}
						<aside className="lg:w-72 shrink-0 lg:sticky lg:top-32 h-fit order-2 lg:order-1">
							<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
								<h3 className="text-xs font-black uppercase tracking-widest text-triton-red mb-6 pb-4 border-b border-white/5">Categories</h3>
								<nav className="space-y-1">
									{categories.map((cat) => (
										<a
											key={cat.id}
											href={`#${cat.id}`}
											className="flex items-center gap-3 text-sm text-gray-500 hover:text-white hover:bg-white/5 py-2 px-3 rounded-lg transition-all group"
										>
											<ChevronRight className="w-3 h-3 text-triton-red opacity-0 group-hover:opacity-100 transition-opacity" />
											{cat.title}
										</a>
									))}
								</nav>
							</div>
						</aside>

						{/* Content Area */}
						<article className="grow space-y-24 order-1 lg:order-2 max-w-4xl">

							{/* 1. GENERAL OVERVIEW */}
							<section id="general" className="space-y-12 scroll-mt-32">
								<h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
									1. GENERAL OVERVIEW
								</h2>
								<div className="space-y-10">
									<FAQItem
										question="WHAT IS TRITON?"
										answer={
											<div className="space-y-4">
												<p>TRITON is a global triathlon platform built around participation, progression, and international competition.</p>
												<p>It operates as a sports IP and global ecosystem, connecting races across multiple countries under a unified structure:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Standardised formats (TRITON 1 and TRITON 3)</li>
													<li>Three scalable distances (Sprint, Middle, Long)</li>
													<li>A global ranking system based on performance and consistency</li>
													<li>Qualification pathways to the TRITON World Championship Finals</li>
												</ul>
												<p>TRITON is not a collection of races.</p>
												<p>It is a progression system where every result contributes to a larger competitive framework.</p>
											</div>
										}
									/>
								</div>
							</section>

							{/* 2. PARTICIPATION & ELIGIBILITY */}
							<section id="participation" className="space-y-12 scroll-mt-32">
								<h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
									2. PARTICIPATION & ELIGIBILITY
								</h2>
								<div className="space-y-10">
									<FAQItem
										question="DO I NEED TO BE AN EXPERIENCED TRIATHLETE?"
										answer={
											<div className="space-y-4">
												<p>No.</p>
												<p>TRITON is designed for all levels, from first-time participants to experienced athletes.</p>
												<p>The three-distance structure allows progressive entry:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Sprint → entry level</li>
													<li>Middle → intermediate</li>
													<li>Long → advanced</li>
												</ul>
											</div>
										}
									/>
									<FAQItem
										question="IS TRITON SUITABLE FOR BEGINNERS?"
										answer={
											<div className="space-y-4">
												<p>Yes.</p>
												<p>TRITON is built to expand participation, not restrict it.</p>
												<p>Key enablers:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>TRITON 3 (3-day format) reduces physical and mental barriers</li>
													<li>Lap-based course design improves safety and confidence</li>
													<li>Structured progression helps athletes evolve over time</li>
												</ul>
											</div>
										}
									/>
									<FAQItem
										question="DO I NEED TO QUALIFY?"
										answer={
											<div className="space-y-4">
												<p>No, for most races.</p>
												<p>Participation is open access via registration.</p>
												<p>Only the TRITON World Championship Finals may require qualification based on:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Ranking</li>
													<li>Performance</li>
													<li>Slot allocation</li>
												</ul>
											</div>
										}
									/>
									<FAQItem
										question="CAN I RACE MULTIPLE EVENTS?"
										answer={
											<div className="space-y-4">
												<p>Yes — and this is a core part of the system.</p>
												<p>TRITON rewards:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Participation</li>
													<li>Consistency</li>
													<li>Improvement over time</li>
												</ul>
												<p>Your best 3 results per season determine your ranking.</p>
											</div>
										}
									/>
								</div>
							</section>

							{/* 3. RACE FORMATS & DISTANCES */}
							<section id="formats" className="space-y-12 scroll-mt-32">
								<h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
									3. RACE FORMATS & DISTANCES
								</h2>
								<div className="space-y-10">
									<FAQItem
										question="WHAT ARE TRITON RACE FORMATS?"
										answer={
											<div className="space-y-6">
												<div>
													<p className="font-bold text-white mb-2 underline decoration-triton-red">TRITON 1</p>
													<ul className="list-disc pl-5 text-gray-400">
														<li>Single-day triathlon</li>
														<li>Continuous: Swim → Bike → Run</li>
														<li>Non-drafting</li>
													</ul>
												</div>
												<div>
													<p className="font-bold text-white mb-2 underline decoration-triton-red">TRITON 3</p>
													<ul className="list-disc pl-5 text-gray-400">
														<li>Three-day stage format</li>
														<li>Day 1: Swim</li>
														<li>Day 2: Bike</li>
														<li>Day 3: Run</li>
														<li>Draft-legal cycling</li>
													</ul>
												</div>
												<p className="italic">Both formats follow global standardisation.</p>
											</div>
										}
									/>
									<FAQItem
										question="WHAT DISTANCES ARE AVAILABLE?"
										answer={
											<div className="space-y-4">
												<p>All races include:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Sprint</li>
													<li>Middle</li>
													<li>Long</li>
												</ul>
												<p>Distances are adapted to local conditions, but always follow this structure.</p>
											</div>
										}
									/>
									<FAQItem
										question="CAN I CHANGE DISTANCE AFTER REGISTERING?"
										answer={
											<div className="space-y-4">
												<p>This depends on the Local Rights Holder (LRH).</p>
												<p>Refer to the specific event page for:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Deadlines</li>
													<li>Fees</li>
													<li>Conditions</li>
												</ul>
											</div>
										}
									/>
								</div>
							</section>

							{/* 4. GLOBAL RANKING & PROGRESSION */}
							<section id="ranking" className="space-y-12 scroll-mt-32">
								<h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
									4. GLOBAL RANKING & PROGRESSION
								</h2>
								<div className="space-y-10">
									<FAQItem
										question="HOW DOES THE RANKING SYSTEM WORK?"
										answer={
											<div className="space-y-4">
												<p>TRITON ranking is based on consistency, not one performance.</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Only your best 3 results count</li>
													<li>Rankings exist across:
														<ul className="pl-5 mt-2 space-y-1 list-circle">
															<li>Global and national</li>
															<li>Gender and age group</li>
															<li>Distance</li>
															<li>Discipline (swim / bike / run)</li>
														</ul>
													</li>
												</ul>
											</div>
										}
									/>
									<FAQItem
										question="DOES EVERY RACE COUNT?"
										answer={
											<div className="space-y-4">
												<p>Yes.</p>
												<p>All official TRITON races contribute to ranking.</p>
												<p>However:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Only the top 3 results are counted</li>
													<li>More races improve your chances</li>
												</ul>
											</div>
										}
									/>
									<FAQItem
										question="WHAT IS THE IMPACT OF THE FINALS?"
										answer={
											<div className="space-y-4">
												<p>The TRITON World Championship Finals:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Award 3× points</li>
													<li>Bring together top global athletes</li>
													<li>Include Nations and Corporate competitions</li>
												</ul>
												<p>This is the highest-impact race in the system.</p>
											</div>
										}
									/>
								</div>
							</section>

							{/* 5. REGISTRATION & EVENT INFORMATION */}
							<section id="registration" className="space-y-12 scroll-mt-32">
								<h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
									5. REGISTRATION & EVENT INFORMATION
								</h2>
								<div className="space-y-10">
									<FAQItem
										question="WHERE DO I REGISTER?"
										answer={
											<div className="space-y-4">
												<p>Registration is managed by the Local Rights Holder (LRH).</p>
												<p>Access via:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>TRITON Events page</li>
													<li>Official race website</li>
												</ul>
											</div>
										}
									/>
									<FAQItem
										question="WHERE CAN I FIND EVENT DETAILS?"
										answer={
											<div className="space-y-4">
												<p>Each race provides:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Schedule</li>
													<li>Maps</li>
													<li>Distances</li>
													<li>Rules</li>
													<li>Logistics</li>
												</ul>
												<p>Always refer to the official race page for final information.</p>
											</div>
										}
									/>
								</div>
							</section>

							{/* 6. RACE DAY EXPERIENCE */}
							<section id="race-day" className="space-y-12 scroll-mt-32">
								<h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
									6. RACE DAY EXPERIENCE
								</h2>
								<div className="space-y-10">
									<FAQItem
										question="WHAT SHOULD I EXPECT ON RACE DAY?"
										answer={
											<div className="space-y-4">
												<p>A standardised professional environment, including:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Marked courses</li>
													<li>Safety and medical support</li>
													<li>Timing systems</li>
													<li>Race office and athlete services</li>
													<li>Centralised venue design</li>
												</ul>
											</div>
										}
									/>
									<FAQItem
										question="HOW ARE RACES TIMED?"
										answer={
											<div className="space-y-4">
												<p>All races use professional chip timing.</p>
												<p>Results:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Are published officially</li>
													<li>Feed into global rankings</li>
													<li>Are stored in your athlete profile</li>
												</ul>
											</div>
										}
									/>
									<FAQItem
										question="ARE RULES THE SAME GLOBALLY?"
										answer={
											<div className="space-y-4">
												<p>Yes — core rules are standardised.</p>
												<p>Local adjustments may apply due to:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Regulations</li>
													<li>Geography</li>
													<li>Safety requirements</li>
												</ul>
											</div>
										}
									/>
								</div>
							</section>

							{/* 7. CUT-OFF TIMES & PERFORMANCE STANDARDS */}
							<section id="cut-offs" className="space-y-12 scroll-mt-32">
								<h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
									7. CUT-OFF TIMES & PERFORMANCE STANDARDS
								</h2>
								<div className="space-y-10">
									<div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10 text-gray-300">
										<p className="mb-4">TRITON cut-off times are calculated based on minimum performance standards per discipline, ensuring:</p>
										<ul className="list-disc pl-5 mb-4 space-y-1">
											<li>Athlete safety</li>
											<li>Operational control</li>
											<li>Global consistency across all events</li>
										</ul>
										<p className="font-bold text-white">Cut-off times are not arbitrary. They are mathematically derived from minimum required pace.</p>
									</div>

									<FAQItem
										question="ARE THERE CUT-OFF TIMES?"
										answer={
											<div className="space-y-4">
												<p>Yes.</p>
												<p>All TRITON races enforce mandatory cut-offs to ensure:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Safety</li>
													<li>Fairness</li>
													<li>Operational control</li>
												</ul>
											</div>
										}
									/>
									<FAQItem
										question="HOW ARE CUT-OFFS CALCULATED?"
										answer={
											<div className="space-y-4">
												<p>Cut-offs are mathematically derived, not arbitrary.</p>
												<p>They are based on:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Distance</li>
													<li>Minimum performance standards</li>
													<li>Transition allowances</li>
												</ul>
												<p>This ensures global consistency.</p>
											</div>
										}
									/>
									<FAQItem
										question="WHAT ARE THE MINIMUM PERFORMANCE STANDARDS?"
										answer={
											<div className="space-y-4">
												<p>All athletes must maintain at least:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Swim: 2:45 / 100m</li>
													<li>Bike: 18 km/h</li>
													<li>Run: 9:00 / km</li>
												</ul>
												<p>These apply globally across all races.</p>
											</div>
										}
									/>

									<FAQItem
										question="WHERE ARE CUT-OFFS ENFORCED?"
										answer={
											<ul className="space-y-2 list-disc pl-5 text-gray-400">
												<li>Swim exit</li>
												<li>Bike segment (cumulative)</li>
												<li>Finish line</li>
											</ul>
										}
									/>
									<FAQItem
										question="WHAT HAPPENS IF I MISS A CUT-OFF?"
										answer={
											<ul className="space-y-2 list-disc pl-5 text-gray-400">
												<li>You will NOT be stopped</li>
												<li>You CAN continue</li>
												<li>You are recorded as DNF</li>
												<li className="text-triton-red font-bold">No exceptions.</li>
											</ul>
										}
									/>
									<FAQItem
										question="DO CUT-OFFS VARY?"
										answer="No — in principle (same performance standard globally)."
									/>
									<FAQItem
										question="IS THERE A MAXIMUM RACE TIME?"
										answer={
											<div className="space-y-4">
												<p>Yes.</p>
												<p>Once reached:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Race closes</li>
													<li>Athletes are removed from course</li>
												</ul>
											</div>
										}
									/>
									<FAQItem
										question="ARE TRITON 3 CUT-OFFS DIFFERENT?"
										answer={
											<div className="space-y-4">
												<p>Yes.</p>
												<p>They include a + 10% adjustment due to:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Multi-day fatigue</li>
													<li>Stage structure</li>
												</ul>
											</div>
										}
									/>
									<FAQItem
										question="CAN CUT-OFF DECISIONS BE APPEALED?"
										answer="Yes. Appeals must be made within 15 minutes after finish. Submitted to head referee."
									/>
								</div>
							</section>

							{/* 8. RULES, PENALTIES & ENFORCEMENT */}
							<section id="rules" className="space-y-12 scroll-mt-32">
								<h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
									8. RULES, PENALTIES & ENFORCEMENT
								</h2>
								<div className="space-y-10">
									<FAQItem
										question="WHAT RULES ARE ENFORCED?"
										answer={
											<div className="space-y-4">
												<p>Strict global competition rules. Common violations:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Drafting (TRITON 1)</li>
													<li>Blocking</li>
													<li>Littering</li>
													<li>Unsafe conduct</li>
													<li>Transition violations</li>
												</ul>
											</div>
										}
									/>
									<FAQItem
										question="WHAT ARE THE PENALTIES?"
										answer={
											<ul className="space-y-2 list-disc pl-5 text-gray-400">
												<li>Yellow / Blue → Time penalty</li>
												<li>Red → Disqualification</li>
												<li className="font-bold text-white mt-4 italic">Failure to serve penalties = disqualification.</li>
											</ul>
										}
									/>
									<FAQItem
										question="CAN I PROTEST?"
										answer={
											<div className="space-y-4">
												<p>Yes:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Within 15 minutes after finish. Submitted to head referee.</li>
												</ul>
											</div>
										}
									/>
								</div>
							</section>

							{/* 9. SAFETY & RESPONSIBILITY */}
							<section id="safety" className="space-y-12 scroll-mt-32">
								<h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
									9. SAFETY & RESPONSIBILITY
								</h2>
								<div className="space-y-10">
									<FAQItem
										question="WHAT ARE MY RESPONSIBILITIES?"
										answer={
											<div className="space-y-4">
												<p>You must:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Follow instructions</li>
													<li>Respect rules and laws</li>
													<li>Act safely</li>
													<li>Assist in emergencies if needed</li>
												</ul>
											</div>
										}
									/>
									<FAQItem
										question="CAN THE RACE BE MODIFIED OR CANCELLED?"
										answer={
											<div className="space-y-4">
												<p>Yes. Due to:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Weather</li>
													<li>Safety</li>
													<li>Force majeure</li>
												</ul>
											</div>
										}
									/>
								</div>
							</section>

							{/* 10. WITHDRAWALS (DNF) */}
							<section id="withdrawals" className="space-y-12 scroll-mt-32">
								<h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
									10. WITHDRAWALS (DNF)
								</h2>
								<div className="space-y-10">
									<FAQItem
										question="WHAT IF I CANNOT FINISH?"
										answer="You must inform officials immediately."
									/>
									<FAQItem
										question="CAN I RETRIEVE MY EQUIPMENT?"
										answer={
											<div className="space-y-4">
												<p>Yes:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>After course clearance</li>
													<li>With identification</li>
												</ul>
											</div>
										}
									/>
								</div>
							</section>

							{/* 11. AID STATIONS */}
							<section id="aid-stations" className="space-y-12 scroll-mt-32">
								<h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
									11. AID STATIONS
								</h2>
								<div className="space-y-10">
									<FAQItem
										question="ARE THERE AID STATIONS?"
										answer={
											<div className="space-y-4">
												<p>Yes. Typical structure:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Bike: 25–30 km intervals</li>
													<li>Run: 2.5 km intervals</li>
													<li>Finish recovery zone</li>
												</ul>
											</div>
										}
									/>
								</div>
							</section>

							{/* 12. EQUIPMENT RULES */}
							<section id="equipment" className="space-y-12 scroll-mt-32">
								<h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
									12. EQUIPMENT RULES
								</h2>
								<div className="space-y-10">
									<FAQItem
										question="WHAT EQUIPMENT IS ALLOWED?"
										answer={
											<div className="space-y-6">
												<div>
													<p className="font-bold text-white mb-2 underline decoration-triton-red">Swim</p>
													<ul className="list-disc pl-5 text-gray-400">
														<li>Wetsuits ≤ 20°C</li>
														<li>No propulsion</li>
													</ul>
												</div>
												<div>
													<p className="font-bold text-white mb-2 underline decoration-triton-red">Bike</p>
													<ul className="list-disc pl-5 text-gray-400">
														<li>TRITON 1: TT allowed / no drafting</li>
														<li>TRITON 3: Road bikes / drafting allowed</li>
													</ul>
												</div>
												<div>
													<p className="font-bold text-white mb-2 underline decoration-triton-red">General</p>
													<ul className="list-disc pl-5 text-gray-400">
														<li>Helmet mandatory</li>
														<li>No headphones</li>
														<li>No motorised assistance</li>
													</ul>
												</div>
											</div>
										}
									/>
								</div>
							</section>

							{/* 13. GOVERNANCE & RESPONSIBILITY */}
							<section id="governance" className="space-y-12 scroll-mt-32">
								<h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
									13. GOVERNANCE & RESPONSIBILITY
								</h2>
								<div className="space-y-10">
									<FAQItem
										question="WHO ORGANISES TRITON RACES?"
										answer={
											<div className="space-y-4">
												<p>Local Rights Holders (LRH).</p>
												<p>They are responsible for:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Operations</li>
													<li>Safety</li>
													<li>Delivery</li>
												</ul>
											</div>
										}
									/>
									<FAQItem
										question="IS TRITON RESPONSIBLE FOR EVENTS?"
										answer={
											<div className="space-y-6">
												<div>
													<p className="font-bold text-white mb-2 underline decoration-triton-red">TRITON:</p>
													<ul className="list-disc pl-5 text-gray-400">
														<li>Owns the brand</li>
														<li>Defines formats and rules</li>
														<li>Operates ranking</li>
													</ul>
												</div>
												<div>
													<p className="font-bold text-white mb-2 underline decoration-triton-red">LRH:</p>
													<ul className="list-disc pl-5 text-gray-400">
														<li>Fully responsible for event execution</li>
													</ul>
												</div>
											</div>
										}
									/>
								</div>
							</section>

							{/* 14. CORPORATE & COMMUNITY */}
							<section id="corporate" className="space-y-12 scroll-mt-32">
								<h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6 mb-12">
									14. CORPORATE & COMMUNITY
								</h2>
								<div className="space-y-10">
									<FAQItem
										question="CAN COMPANIES PARTICIPATE?"
										answer={
											<div className="space-y-4">
												<p>Yes.</p>
												<p>Through the TRITON Corporate Series:</p>
												<ul className="space-y-2 list-disc pl-5 text-gray-400">
													<li>Teams compete globally</li>
													<li>Top teams qualify for Corporate Finals</li>
												</ul>
											</div>
										}
									/>
								</div>
							</section>

							{/* 15. FINAL POSITIONING */}
							<section id="final" className="scroll-mt-32">
								<div className="bg-linear-to-br from-triton-red to-red-900 p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
									<div className="relative z-10">
										<h2 className="text-4xl font-black uppercase text-white mb-8 leading-tight">
											15. FINAL <span className="italic">POSITIONING</span>
										</h2>
										<p className="text-xl text-white/90 mb-8 font-light leading-relaxed">
											TRITON is not about finishing a race. It is about entering a system:
										</p>
										<ul className="space-y-6">
											{[
												"Where performance is measured",
												"Where consistency is rewarded",
												"Where athletes progress",
												"Where every race connects globally"
											].map((text, idx) => (
												<li key={idx} className="flex items-center gap-4 text-white text-lg font-bold uppercase tracking-wider">
													<div className="w-2 h-2 bg-white rotate-45" />
													{text}
												</li>
											))}
										</ul>
									</div>
									<div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
								</div>
							</section>

							{/* Contact Section */}
							<section id="contact" className="bg-triton-red/10 p-10 rounded-2xl border border-triton-red/20 scroll-mt-32">
								<h2 className="text-xl font-black uppercase text-white mb-6 flex items-center gap-2">
									<Mail className="w-5 h-5 text-triton-red" />
									Still Have Questions?
								</h2>
								<p className="text-gray-300 leading-relaxed mb-8">
									For general inquiries, partnerships, or licensing opportunities, please contact the TRITON team directly.
								</p>
								<div className="pt-8 border-t border-white/10">
									<p className="text-xs font-black uppercase tracking-[0.2em] text-triton-red mb-2">Support Email</p>
									<a href="mailto:info@tritonworldseries.com" className="text-2xl font-black text-white hover:text-triton-red transition-colors">
										info@tritonworldseries.com
									</a>
								</div>
							</section>

						</article>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
	return (
		<div className="group border-b border-white/5 pb-10">
			<h3 className="text-xl font-black text-white uppercase tracking-tight mb-4 flex gap-4 transition-colors group-hover:text-triton-red">
				<span className="text-triton-red opacity-50">Q.</span>
				{question}
			</h3>
			<div className="pl-9 text-gray-400 leading-relaxed font-sans text-lg">
				{answer}
			</div>
		</div>
	);
}


// <div className="border-y border-white/5 py-12 my-12">
// 			<h3 className="text-xl font-black text-white uppercase mb-8">22.2. MINIMUM PERFORMANCE STANDARDS</h3>
// 			<p className="text-gray-400 mb-6">All athletes must be capable of maintaining at least:</p>
// 			<div className="space-y-6">
// 				<div>
// 					<p className="text-white font-bold mb-1 underline decoration-triton-red">Swim: 3:00 min / 100m</p>
// 					<p className="text-sm text-gray-500">Swim final cut-off: max swim time</p>
// 				</div>
// 				<div>
// 					<p className="text-white font-bold mb-1 underline decoration-triton-red">Bike: 16 km / h average speed</p>
// 					<p className="text-sm text-gray-500">Bike final cut-off: max swim time + 3 min transition 1 + max bike time</p>
// 				</div>
// 				<div>
// 					<p className="text-white font-bold mb-1 underline decoration-triton-red">Run: 9:00 min / km</p>
// 					<p className="text-sm text-gray-500">Race final cut-off: max swim time + 3 min transition 1 + max bike time + 3 min transiton 2 + max run time</p>
// 				</div>
// 			</div>
// 			<p className="mt-8 text-gray-400 italic">These standards apply across all distances and all events globally. Failure to maintain these minimums will result in removal from the race.</p>
// 		</div>

// 		<div className="py-12 border-b border-white/5">
// 			<h3 className="text-xl font-black text-white uppercase mb-8">22.3. CUT-OFF CALCULATION</h3>
// 			<p className="text-gray-400 mb-6">Cut-off times are calculated based on:</p>
// 			<ul className="space-y-2 list-disc pl-5 text-gray-400 mb-6">
// 				<li>Total distance per discipline</li>
// 				<li>Minimum pace standards</li>
// 				<li>Transition time allowances (3 min each)</li>
// 			</ul>
// 			<p className="text-white font-bold">This creates a dynamic cut-off system, meaning:</p>
// 			<p className="text-gray-400 mt-2">→ Cut-off times vary per race</p>
// 			<p className="text-gray-400">→ But the performance standard is always identical globally</p>
// 		</div>

// 		<div className="py-12 border-b border-white/5">
// 			<h3 className="text-xl font-black text-white uppercase mb-8">22.4. MANDATORY CUT-OFF POINTS</h3>
// 			<p className="text-gray-400 mb-6">All TRITON races include enforced cut-offs at:</p>
// 			<ul className="space-y-2 list-disc pl-5 text-gray-400 mb-6">
// 				<li>Swim Exit</li>
// 				<li>Bike Segment (cumulative time)</li>
// 				<li>Final Finish Line</li>
// 			</ul>
// 			<p className="text-white font-bold mb-4">Athletes who fail to meet any cut-off point:</p>
// 			<ul className="space-y-2 list-disc pl-5 text-gray-400">
// 				<li>Will be stopped by race officials</li>
// 				<li>Will not be allowed to continue</li>
// 				<li>Will be recorded as DNF (Did Not Finish)</li>
// 				<li className="text-triton-red font-bold">No exceptions.</li>
// 			</ul>

// 		</div>
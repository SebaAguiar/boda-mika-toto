// "use client";
import type React from "react";
import HeroSection from "../HeroSection";
import CounterBack from "../CounterBack";
import { PiChurchDuotone, PiConfettiDuotone } from "react-icons/pi";
import WeddingInformation from "./WeddingInformation";
import PartySection from "./PartySection";
import ModalsContainter from "./ModalsContainter";
import PresentsContainer from "./PresentsContainer";
// import { useStore } from "@/zustand/store";

const weddingData = [
	{
		svg: <PiChurchDuotone />,
		title: "Ceremonia",
		date: "2024-12-21T20:00:00",
		place: "Basílica Inmaculada Concepción",
		address: "Urquiza 1000, Concepción del Uruguay",
	},
	{
		svg: <PiConfettiDuotone />,
		title: "Fiesta",
		date: "2024-12-21T20:00:00",
		place: "Basílica Inmaculada Concepción",
		address: "Urquiza 1000, Concepción del Uruguay",
	},
];

const LandingContainer = (): React.JSX.Element => {
	return (
		<>
			<main className="w-full h-full overflow-x-hidden">
				<ModalsContainter />
				<HeroSection />
				<CounterBack />
				<WeddingInformation data={weddingData} />
				<PartySection />
				<PresentsContainer />
			</main>
		</>
	);
};

export default LandingContainer;

import React from "react";
import HeroSection from "../HeroSection";
import CounterBack from "../CounterBack";
import { PiChurchLight, PiConfettiLight } from "react-icons/pi";
import WeddingInformation from "./WeddingInformation";

const weddingData = [
	{
		svg: <PiChurchLight />,
		title: "Ceremonia",
		date: "2024-12-21T20:00:00",
		place: "Basílica Inmaculada Concepción",
		address: "Urquiza 1000, Concepción del Uruguay",
	},
	{
		svg: <PiConfettiLight />,
		title: "Ceremonia",
		date: "2024-12-21T20:00:00",
		place: "Basílica Inmaculada Concepción",
		address: "Urquiza 1000, Concepción del Uruguay",
	},
];

const LandingContainer = async (): Promise<JSX.Element> => {
	return (
		<>
			<main className="w-full h-full">
				<HeroSection />
				<CounterBack />
				<WeddingInformation data={weddingData} />
			</main>
		</>
	);
};

export default LandingContainer;

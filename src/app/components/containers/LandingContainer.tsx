import React from "react";
import HeroSection from "../HeroSection";
import CounterBack from "../CounterBack";

const LandingContainer = () => {
	return (
		<>
			<main className="w-full h-full">
				<HeroSection />
				<CounterBack />
			</main>
		</>
	);
};

export default LandingContainer;

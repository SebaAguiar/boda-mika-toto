import React from "react";
import LandingContainer from "./components/containers/LandingContainer";

const Home = async () => {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
				<LandingContainer />
			</main>
		</>
	);
};

export default Home;

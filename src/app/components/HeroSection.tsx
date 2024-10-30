import React from "react";
const HeroSection = (): JSX.Element => {
	return (
		<>
			<div
				className="w-full h-[20vh] sm:h-[100vh] relative flex flex-col justify-center items-center overflow-hidden gap-4 text-white"
				style={{
					backgroundImage: "url('/arriba-1.jpg')",
					backgroundPosition: "center 40%",
					backgroundAttachment: "fixed",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<div className="flex items-center justify-center">
					<div className="bg-white w-20 md:w-30 h-[1px]" />
					<p className="text-lg md:text-xl mx-7 poppinsFont">21-12-2024</p>
					<div className="bg-white w-20 md:w-30 h-[1px]" />
				</div>
				<div className="w-full flex items-center justify-center">
					<h1 className="text-4xl md:text-7xl cookieFont w-full flex items-center justify-center gap-4">
						Mika{" "}
						<span className="rounded-[100%] bg-white text-slate-600 text-4xl h-10 w-10 flex items-center justify-center">
							&
						</span>{" "}
						Toto
					</h1>
				</div>
				<div className="bg-white w-64 md:w-96 h-[1px] mt-2" />
			</div>
		</>
	);
};

export default HeroSection;

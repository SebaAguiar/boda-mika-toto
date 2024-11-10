import React from "react";
const HeroSection = (): JSX.Element => {
	return (
		<>
			<section
				className="w-full h-[100vh] relative flex flex-col justify-center items-center overflow-hidden gap-4 text-white"
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
					<p className="text-lg md:text-xl lg:text-2xl mx-7 montserratFont">
						21-12-2024
					</p>
					<div className="bg-white w-20 md:w-30 h-[1px]" />
				</div>
				<div className="w-full flex items-center justify-center">
					<h1 className="text-5xl md:text-8xl lg:text-9xl cookieFont w-full flex items-center justify-center gap-4">
						Mica{" "}
						<span className="rounded-[100%] bg-white text-slate-600 text-4xl lg:5xl h-10 w-10 flex items-center justify-center m-2">
							&
						</span>{" "}
						Toto
					</h1>
				</div>
				<div className="bg-white w-64 md:w-96 h-[1px] mt-2" />
			</section>
		</>
	);
};

export default HeroSection;

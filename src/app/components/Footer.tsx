import Link from "next/link";
import React from "react";
const Footer = () => {
	return (
		<footer className="w-full min-h-[10rem] p-4 flex flex-col items-center justify-center bg-[#83968d]">
			<p className="text-white text-5xl font-bold cookieFont text-center self-center relative">
				M{" "}
				<span className="text-2xl relative" style={{ top: "-0.2em" }}>
					&
				</span>{" "}
				T{" "}
			</p>
			<p className="text-white">
				Desarrollado por:{" "}
				<Link className="underline" target="_blank" href="https://arsian.dev">
					Seba Aguiar
				</Link>
			</p>
		</footer>
	);
};
export default Footer;

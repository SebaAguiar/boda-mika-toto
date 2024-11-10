"use client";
import React from "react";
import DivitionFour from "../DivitionFour";

const PresentsContainer = () => {
	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text).then(
			() => {
				alert("Alias copiado al portapapeles!");
			},
			(err) => {
				console.error("Error al copiar el alias: ", err);
			},
		);
	};

	return (
		<>
			<section className="w-full h-max flex flex-col items-center justify-center text-xl montserratFont text-center text-[#83968d] bg-[#efede7]">
				<DivitionFour />
				<div className="w-full flex flex-col items-center justify-center text-center gap-3">
					<h2 className="text-8xl cookieFont">Regalos</h2>
					<p>El regalo más importante es tu presencia, <br/>pero si querés regalarnos algo, te dejamos este alias.</p>
						

				</div>
				<div className="mb-20 mt-3">
					<ul className="decoration-dotted list-disc flex flex-col items-center justify-center gap-1 p-10 break-words">
						<li
							onClick={() => copyToClipboard("BODAMICAYTOTO")}
							onKeyDown={() => ""}
							className="cursor-pointer"
						>
							<strong className="cursor-text">Alias:</strong> BODAMICAYTOTO
						</li>
						<li>
							<strong>Titular:</strong> Osvaldo Abel Aguiar
						</li>
						<li>
							<strong>Banco:</strong> Banco de la Nación Argentina
						</li>
						<li>
							<strong>CUIL:</strong> 20285335354
						</li>
					</ul>
					<p className="mt-5">En la fiesta también habrá una urna.</p>
				</div>
			</section>
		</>
	);
};

export default PresentsContainer;

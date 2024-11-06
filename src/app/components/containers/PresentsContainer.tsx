"use client";
import React from "react";

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
			<section className="w-full h-max flex flex-col items-center justify-center text-xl montserratFont text-center text-[#83968d] gap-3">
				<div className="w-full flex flex-col items-center justify-center text-center">
					<h2 className="text-4xl md:text-6xl cookieFont">Regalos</h2>
					<p>El Regalo Mas importante es tu presencia.</p>
					<p>
						Pero si aun asi quieres puede regalarnos enviando al siguiente cbu
					</p>
				</div>
				<div>
					<ul className="decoration-dotted list-disc flex flex-col items-center justify-center">
						<li
							onClick={() => copyToClipboard("BODAMICAYTOTO")}
							onKeyDown={() => ""}
						>
							<strong>Alias:</strong> BODAMICAYTOTO
						</li>
						<li>
							<strong>Titular:</strong> Osbaldo Abel Aguiar
						</li>
						<li>
							<strong>Banco:</strong> Bancon de la Nacion Argentina
						</li>
						<li>
							<strong>CUIL:</strong> 20285335354
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default PresentsContainer;

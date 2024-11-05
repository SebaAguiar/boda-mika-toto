import type React from "react";
import { PiMusicNotesSimpleThin } from "react-icons/pi";
import PartyDataCard from "../PartyDataCard";
import MusicModalButton from "../MusicModalButton";

const partyData = [
	{
		title: "Musica",
		icon: <PiMusicNotesSimpleThin />,
		text: "¿Cuál es la canción que no puede faltar en la PlayList de la fiesta?",
		button: <MusicModalButton />,
	},
	{
		title: "Dress Code",
		icon: <></>,
		text: "Una orientacion para tu vestuario",
		button: <></>,
	},
	{
		title: "Tips y Notas",
		icon: <></>,
		text: "Información adicional para tener en cuenta",
		button: <></>,
	},
];

const PartySection = (): React.JSX.Element => {
	return (
		<>
			<section className="w-full h-max">
				<div className="w-full flex flex-col items-center justify-center text-center gap-3">
					<h2 className="text-4xl md:text-6xl cookieFont">Fiesta</h2>
					<p>¡Hagamos una fiesta épica!</p>
					<p>Les dejamos algunos detalles a tener en cuenta</p>
				</div>
				<div className="w-full flex flex-col md:flex-row items-center justify-center">
					{partyData.map(
						(data): React.JSX.Element => (
							<PartyDataCard
								key={data.title}
								title={data.title}
								icon={data.icon}
								text={data.text}
								button={data.button}
							/>
						),
					)}
				</div>
			</section>
		</>
	);
};

export default PartySection;

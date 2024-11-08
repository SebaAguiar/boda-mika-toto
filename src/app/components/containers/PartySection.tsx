import type React from "react";
import {
	PiMusicNotesDuotone,
	PiDressDuotone,
	PiNotepadDuotone,
} from "react-icons/pi";
import PartyDataCard from "../PartyDataCard";
import MusicModalButton from "../MusicModalButton";
import DressCodeModalButton from "../DressCodeModalButton";
import ExtraDataModalButton from "../ConfirmModalButton";
import DivitionTwo from "../DivitionTwo";

const partyData = [
	{
		title: "Musica",
		icon: <PiMusicNotesDuotone />,
		text: "¿Cuál es la canción que no puede faltar en la PlayList de la fiesta?",
		button: <MusicModalButton />,
	},
	{
		title: "Dress Code",
		icon: <PiDressDuotone />,
		text: "Una orientacion para tu vestuario",
		button: <DressCodeModalButton />,
	},
	{
		title: "Confirmar",
		icon: <PiNotepadDuotone />,
		text: "Tenes tiempo hasta el 26 de Noviembre",
		button: <ExtraDataModalButton />,
	},
];

const PartySection = (): React.JSX.Element => {
	return (
		<>
			<section className="w-full h-max mb-16">
				<DivitionTwo />
				<div className="w-full flex flex-col items-center justify-center text-center gap-3 montserratFont text-lg text-[#83968d]">
					<h2 className="text-8xl cookieFont">Fiesta</h2>
					<p>¡Hagamos una fiesta épica!</p>
					<p>Les dejamos algunos detalles a tener en cuenta</p>
				</div>
				<div className="w-full flex flex-col lg:flex-row items-center justify-center">
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

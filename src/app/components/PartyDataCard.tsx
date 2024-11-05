import type React from "react";

interface IPartyDataCardProps {
	title: string;
	icon: React.ReactNode;
	text: string;
	button: React.ReactNode;
}

const PartyDataCard: React.FC<IPartyDataCardProps> = ({
	title,
	icon,
	text,
	button,
}): React.JSX.Element => {
	return (
		<>
			<div className="w-[60%] md:w-1/4 h-[400px] rounded-lg text-[#83968d] bg-[#faf7f3] flex flex-col items-center justify-center text-center gap-6 m-4 p-3">
				<h3 className="text-4xl md:text-6xl montserratFont">{title}</h3>
				<div className="w-20 h-20 flex items-center justify-center text-6xl">
					{icon}
				</div>
				<p className="text-xl montserratFont">{text}</p>
				<div className="flex items-center justify-center w-max h-max">
					{button}
				</div>
			</div>
		</>
	);
};

export default PartyDataCard;

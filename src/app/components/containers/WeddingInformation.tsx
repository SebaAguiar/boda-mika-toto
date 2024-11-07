import type React from "react";
import WeddingData from "../WeddingData";
import DivitionThree from "../DivitionThree";

interface IWeddingData {
	title: string;
	svg: React.ReactNode;
	date: string;
	place: string;
	address: string;
}

interface IWeddingInformationProps {
	data: IWeddingData[];
}

export const WeddingInformation: React.FC<IWeddingInformationProps> = ({
	data,
}): React.JSX.Element => {
	return (
		<>
			<div className="w-full h-max flex flex-col tems-center justify-center gap-10">
				<DivitionThree />
				<div className="w-full h-max flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 ">
					{data.map(
						(wedding): JSX.Element => (
							<WeddingData
								key={wedding.title}
								svg={wedding.svg}
								title={wedding.title}
								date={wedding.date}
								place={wedding.place}
								address={wedding.address}
							/>
						),
					)}
				</div>
			</div>
		</>
	);
};

export default WeddingInformation;

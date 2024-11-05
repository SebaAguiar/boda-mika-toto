import { formatDate } from "@/utils/formatDate";
import type React from "react";

interface IWeddingDataProps {
	svg: React.ReactNode;
	title: string;
	date: string;
	place: string;
	address: string;
}
const WeddingData: React.FC<IWeddingDataProps> = ({
	svg,
	title,
	date,
	place,
	address,
}): React.JSX.Element => {
	return (
		<>
			<div className="w-full max-w[100vh] md:w-[50%] h-full flex flex-col items-center justify-center my-5">
				<div className="w-40 h-40 flex items-center justify-center border rounded-full bg-white text-7xl m-2 shadow-lg">
					{svg}
				</div>
				<div className="w-full flex flex-col items-center justify-center text-center gap-3">
					<h2 className="text-4xl md:text-6xl cookieFont">{title}</h2>
					<div>
						<h3 className="text-xl md:text-2xl font-bold montserratFont">
							Día
						</h3>
						<p className="montserratFont text-lg">{formatDate(date)}</p>
					</div>
					<div>
						<h3 className="text-xl md:text-2xl font-bold montserratFont">
							Lugar
						</h3>
						<p className="montserratFont text-lg">{place}</p>
					</div>
					<div>
						<h3 className="text-xl md:text-2xl font-bold montserratFont">
							Dirección
						</h3>
						<p className="montserratFont text-lg">{address}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default WeddingData;

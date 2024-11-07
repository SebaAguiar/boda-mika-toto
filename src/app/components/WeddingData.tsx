import { formatDate } from "@/utils/formatDate";
import type React from "react";
import styles from "@/styles/weddingData.module.css";
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
			<div className="w-full md:w-[40%] h-full flex flex-col items-center justify-center">
				<div className="w-56 h-56 flex items-center justify-center border rounded-full bg-white text-9xl mb-4 shadow-lg text-[#83968d]">
					{svg}
				</div>
				<div className="w-full flex flex-col items-center justify-center text-center gap-3">
					<h2
						id={styles.title}
						className="text-6xl text-white bg-[#83968d] cookieFont p-[8px 30px] w-10/12 md:w-1/2"
					>
						{title}
					</h2>
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

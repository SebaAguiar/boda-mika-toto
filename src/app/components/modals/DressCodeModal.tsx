"use client";
import type React from "react";
import { useStore } from "@/zustand/store";
import { PiDressDuotone } from "react-icons/pi";

const MusicModal: React.FC = (): React.JSX.Element => {
	const setDressCodeOpen = useStore.getState().setDressCodeOpen;
	const handleClick = (): void => {
		setDressCodeOpen();
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
		if (event.key === "Esc") {
			setDressCodeOpen();
		}
	};

	const stopPropagation = (event: React.MouseEvent<HTMLDivElement>): void => {
		event.stopPropagation();
	};

	return (
		<>
			<div
				className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-30"
				onKeyDown={handleKeyDown}
				onClick={handleClick}
			>
				<div
					onClick={stopPropagation}
					onKeyDown={handleKeyDown}
					className="w-[450px] h-[450px] bg-[#efede7] rounded-full flex flex-col items-center justify-start"
				>
					<div className="w-32 h-32 flex items-center justify-center text-6xl bg-white rounded-full relative top-[-20px] text-[#83968d]">
						<PiDressDuotone />
					</div>
					<h2 className="text-5xl cookieFont m-2">Dress Code</h2>
					<div className="w-full h-full rounded-full mx-auto flex flex-col items-center justify-start pt-16 text-xl montserratFont">
						<p className="montserratFont text-xl text-[#83968d]">FORMAL</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default MusicModal;

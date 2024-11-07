"use client";
import { useStore } from "@/zustand/store";
import React from "react";

const DressCodeModalButton = () => {
	const setDressCodeOpen = useStore((state) => state.setDressCodeOpen);
	const handleClick = (): void => {
		setDressCodeOpen();
	};

	return (
		<>
			<button
				className="font-bold bg-white text-[#83968d] hover:text-white hover:bg-[#83968d] w-52 md:w-72 h-10 rounded-3xl transition-all duration-500 shadow-md"
				type="button"
				onClick={handleClick}
			>
				Ver Mas
			</button>
		</>
	);
};

export default DressCodeModalButton;

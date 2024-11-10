"use client";
import { useStore } from "@/zustand/store";
import React from "react";

const ConfirmModalButton = () => {
	const setPartyOpen = useStore((state) => state.setPartyOpen);
	const handleClick = (): void => {
		setPartyOpen();
	};

	return (
		<>
			<button
				className="font-bold bg-white text-[#83968d] hover:text-white hover:bg-[#83968d] w-40 md:w-52 h-10 rounded-3xl transition-all duration-500 shadow-md"
				type="button"
				onClick={handleClick}
			>
				Confirmar
			</button>
		</>
	);
};

export default ConfirmModalButton;

"use client";
import type React from "react";
import { useStore } from "@/zustand/store";

/**************************/
/**
 * A button to open the MusicModal. When clicked, it toggles the "musicOpen" state.
 *
 * @returns A button to open the MusicModal.
 */
/**************************/
const MusicModalButton = (): React.JSX.Element => {
	const setMusicOpen = useStore((state) => state.setMusicOpen);
	const isMusicOpen = useStore((state) => state.musicOpen);

	const handleClick = (): void => {
		setMusicOpen();
		console.log(isMusicOpen);
	};

	return (
		<>
			<button
				className="font-bold bg-white text-[#83968d] hover:text-white hover:bg-[#83968d] w-72 h-10 rounded-3xl transition-all duration-500 shadow-md"
				type="button"
				onClick={handleClick}
			>
				Sugerir Canción
			</button>
		</>
	);
};

export default MusicModalButton;

"use client";
import type React from "react";
import { useStore } from "@/zustand/store";

const MusicModal: React.FC = (): React.JSX.Element => {
	const setMusicOpen = useStore.getState().setMusicOpen;
	const musicOpen = useStore((state) => state.musicOpen);

	console.log(musicOpen);
	const handleClick = (): void => {
		setMusicOpen();
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
		if (event.key === "Escape") {
			setMusicOpen();
		}
	};

	return (
		<>
			<div
				className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
				onKeyDown={handleKeyDown}
				onClick={handleClick}
			>
				MODAL
				{/* <div className="w-200 h-200 bg-[faf7f3] rounded-full"></div> */}
			</div>
		</>
	);
};

export default MusicModal;

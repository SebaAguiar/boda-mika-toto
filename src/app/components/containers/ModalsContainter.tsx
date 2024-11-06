"use client";
import { useStore } from "@/zustand/store";
import React from "react";
import MusicModal from "../modals/MusicModal";

const ModalsContainter = () => {
	const musicOpen = useStore((state) => state.musicOpen);
	return (
		<>
			<div className={`w-full h-full ${musicOpen ? "block" : "hidden"}`}>
				{musicOpen && <MusicModal />}
			</div>
		</>
	);
};

export default ModalsContainter;

"use client";
import { useStore } from "@/zustand/store";
import React from "react";
import MusicModal from "../modals/MusicModal";
import DressCodeModal from "../modals/DressCodeModal";
import ConfirmModal from "../modals/ConfirmModal";

const ModalsContainter = () => {
	const musicOpen = useStore((state) => state.musicOpen);
	const dressCodeOpen = useStore((state) => state.dressCodeOpen);
	const partyOpen = useStore((state) => state.partyOpen);

	console.log(partyOpen);
	return (
		<>
			<div
				className={`w-full h-full ${musicOpen || dressCodeOpen || partyOpen ? "block" : "hidden"}`}
			>
				{musicOpen && <MusicModal />}
				{dressCodeOpen && <DressCodeModal />}
				{partyOpen && <ConfirmModal />}
			</div>
		</>
	);
};

export default ModalsContainter;

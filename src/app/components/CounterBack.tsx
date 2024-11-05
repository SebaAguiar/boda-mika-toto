"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/counterBack.module.css";
import WavySeparator from "./WavySeparator";

interface ITimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}
const calculateTimeLeft = (): ITimeLeft => {
	"use client";
	const difference = +new Date("2024-12-21T00:00:00") - +new Date();
	let timeLeft: ITimeLeft = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	};
	if (difference > 0) {
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	}
	return timeLeft;
};

const CounterBack = (): JSX.Element => {
	const [timeLeft, setTimeLeft] = useState<ITimeLeft>(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, []);
	const timerComponents: JSX.Element[] = [];

	const intervals = ["days", "hours", "minutes", "seconds"] as const;

	for (const interval of intervals) {
		const key = interval as keyof ITimeLeft;
		timerComponents.push(
			<div
				key={interval}
				className="flex flex-col items-center justify-center m-2"
			>
				<p className="font-bold text-2xl poppinsFont text-yellow-400">
					{timeLeft[key]}
				</p>
				<p className="font-thin text-sm text-black">{interval}</p>
			</div>,
		);
	}

	return (
		<section className="w-full h-[400px] flex flex-col">
			<WavySeparator />
			<div className="w-full h-5/6 flex items-center justify-center">
				<div
					id={styles.counterBack}
					className="flex items-center justify-center w-96 h-96 z-20"
				>
					<div className="bg-white w-40 md:w-60 h-40 md:h-60 rounded-full flex items-center justify-center text-black flex-col gap-3 z-0">
						<h2 className="font-thin text-amber-500 text-2xl poppinsFont align-text-top">
							Faltan
						</h2>
						<div className="flex w-full items-center justify-center">
							{timerComponents.length ? (
								timerComponents
							) : (
								<span>Time is up!</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CounterBack;

"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/counterBack.module.css";
import DivitionOne from "./DivitionOne";

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
				className="flex flex-col items-center justify-center m-1"
			>
				<p className="font-bold text-2xl poppinsFont text-[#83968d]">
					{timeLeft[key]}
				</p>
				<p className="font-thin text-sm text-[#83968d]">
					{interval.charAt(0).toUpperCase()}
				</p>
			</div>,
		);
	}

	return (
		<section className="w-full h-[200px] flex flex-col mb-36">
			<DivitionOne />
			<div className="w-full h-5/6 flex items-center justify-center relative bottom-[19rem] md:bottom-[18rem] lg:bottom-[20rem] xl:bottom-[30rem]">
				<div
					id={styles.counterBack}
					className="flex items-center justify-center w-80 h-80 md:w-[30rem] md:h-[30rem] z-20"
				>
					<div className="bg-white w-60 md:w-80 h-60 md:h-80 rounded-full flex items-center justify-center text-black flex-col gap-3 z-0">
						<h2 className="font-thin text-[#83968d] text-2xl poppinsFont align-text-top">
							Falta
						</h2>
						<div className="flex w-[80%] items-center justify-center">
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

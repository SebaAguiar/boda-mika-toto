"use client";
import type React from "react";
import { useStore } from "@/zustand/store";
import { useState } from "react";
import { PiNotepadDuotone } from "react-icons/pi";
import { getUserByName } from '@/app/serrvices/users';

const ConfirmModal: React.FC = (): React.JSX.Element => {
	const formInputs = [
		{
			type: "text",
			name: "floating_username",
			label: "Tu Nombre",
			placeholder: " ",
		},
	];

	const [formData, setFormData] = useState({
		floating_username: "",
	});

	const setPartyOpen = useStore.getState().setPartyOpen;
	const handleClick = (): void => {
		setPartyOpen();
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
		if (event.key === "Esc") {
			setPartyOpen();
		}
	};

	const stopPropagation = (event: React.MouseEvent<HTMLDivElement>): void => {
		event.stopPropagation();
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		console.log('FORM')
		event.preventDefault();
		const users = await getUserByName(formData.floating_username);
		console.log(users)
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
					className="w-[450px] h-[450px] bg-[#efede7] rounded-full flex flex-col items-center justify-center"
				>
					<div className="w-32 h-32 flex items-center justify-center text-6xl bg-white rounded-full relative top-[-20px] text-[#83968d]">
						<PiNotepadDuotone />
					</div>
					<h2 className="text-5xl cookieFont m-2 ">Confirmar</h2>
					<p className="montserratFont text-sm text-center text-[#83968d] break-words p-4">
						<strong>IMPORTANTE:</strong>
						<br />
						Buscate con el mismo nombre con el que te llegó la invitación
					</p>
					<form
						onSubmit={handleSubmit}
						className="w-full h-full rounded-full mx-auto flex items-start justify-center p-10"
					>
						{formInputs.map(
							(input): React.JSX.Element => (
								<div key={input.name} className="relative z-0 w-3/6 mb-5 group">
									<input
										type={input.type}
										name={input.name}
										id={input.name}
										className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#83968d] focus:outline-none focus:ring-0 focus:border-[#83968d] peer"
										placeholder={input.label}
										value={formData[input.name as keyof typeof formData]}
										onChange={handleChange}
									/>
									<label
										htmlFor={input.name}
										className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#83968d] peer-focus:dark:text-[#83968d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>
										{input.placeholder}
									</label>
								</div>
							),
						)}
						<button
							type="submit"
							className="text-white bg-[#83968d] hover:bg-[#83968d] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#83968d] dark:hover:bg-[#83968d] dark:focus:ring-[#83968d] m-5"
						>
							Buscar
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default ConfirmModal;

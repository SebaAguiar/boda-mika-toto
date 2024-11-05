import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Boda Mika y Toto",
	description: "Bienvenidos a nuestra boda",
};

const RootLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body className="max-w-screen h-screen flex flex-col bg-[#efede7]">
				{children}
			</body>
		</html>
	);
};

export default RootLayout;

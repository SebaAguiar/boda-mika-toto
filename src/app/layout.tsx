import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

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
			<body className="max-w-screen h-screen flex flex-col bg-[#faf7f3] overflow-x-hidden overflow-y-auto">
				<div className="flex-grow">{children}</div>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;

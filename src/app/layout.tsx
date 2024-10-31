import React from "react";
import type { Metadata } from "next";
// import { Cookie, Poppins } from 'next/font/google';
import "./globals.css";

// const cookie = Cookie({
//   subsets: ['latin'],
//   variable: '--font-cookie',
//   weight: ['400'],
// });

// const poppins = Poppins({
//   subsets: ['latin'],
//   variable: '--font-poppins',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// });

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
			<body className="max-w-screen h-screen flex flex-col">{children}</body>
		</html>
	);
};

export default RootLayout;

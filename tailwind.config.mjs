// eslint-disable-next-line @typescript-eslint/no-require-imports
const flowbiteConfig = require("flowbite-react/tailwind");

const config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/flowbite/**/*.js",
		flowbiteConfig.content(),
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
		fontFamily: {
			cookie: "var(--font-cookie)",
			poppins: "var(--font-poppins)",
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("flowbite/plugin"), flowbiteConfig.plugin()],
};
export default config;

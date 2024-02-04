import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
		fontSize: {
			xs: ".75rem",
			sm: ".8rem",
			tiny: ".9rem",
			base: "1rem",
			medium: "1.15rem",
			paragraph: "1.10rem",
			lg: "1.25rem",
			xl: "1.5rem",
			"2xl": "1.75rem",
			"3xl": "1.85rem",
			"4xl": "2rem",
			"5xl": "2.25rem",
			"6xl": "2.5rem",
			"7xl": "3rem",
			"8xl": "4rem",
			"9xl": "4rem",
			"10xl": "4.5rem",
			"11xl": "5rem",
			"12xl": "5.5rem",
		},
		colors: {
			// Base colors Variables
			black: "#111",
			grey: "#cecece",
			white: "#ffffff",
			pureBlack: "#000",
			darkGrey: "#8f8f8f",
			lightGrey: "#f7f7f7",
			lightGreyTwo: "#fafafa",

			// Main colors
			blue: {
				default: "#116dff",
				two: "#045dec",
				three: "#0a52c5",
				light: "#3d77f3",
				dark: "#002e5d",
				darker: "#001640",
				darkerTwo: "#09101f",
			},
			aqua: {
				default: "#20ce88",
				two: "#09c87c",
				three: "#0dde8a",
				four: "#01b1af",
				five: "#48d1cc",
				six: "#00ced1",
				flat: "#4ab389",
				dark: "#017473",
				darker: "#015F5E",
				darkerTwo: "#004948",
			},
			orange: {
				default: "#ff4117",
				two: "#ff5512",
				three: "#EC5800",
				light: "#fd542d",
				dark: "#dd3a19",
				darker: "#bc351a",
				darkerTwo: "#92250f",
			},
		},
	},
	plugins: [],
};
export default config;

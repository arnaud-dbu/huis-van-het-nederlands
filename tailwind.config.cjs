/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#38008F",
				secondary: "#F16856",
				tertiary: "#F3FAF8",
				white: "#FFF",
				black: "#000",
			},
			fontFamily: {
				sans: ["Corbel", "sans-serif"],
			},
		},
	},
	plugins: [],
};

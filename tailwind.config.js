module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"fira-code": ['"Fira Code"', "mono"],
			},
		},
	},
	darkMode: "class",

	plugins: [require('@tailwindcss/typography')],
};

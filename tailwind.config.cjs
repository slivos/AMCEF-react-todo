/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",],
	theme: {
		extend: {
			colors: {
				'react-blue': '#5ccfee',
				'aqua': '#B4FEE7'
			},
		},
	},
	plugins: [require("daisyui")],
}

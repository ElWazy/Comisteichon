/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'press-start': ['"Press Start 2P"', 'cursive'],
				'dancing-script': ['"Dancing Script"', 'cursive'],
				'shadow-into': ['"Shadows Into Light"', 'cursive'],

			},
			colors: {
				'regal-blue': '#243c5a',
			},
		},

	},
	plugins: [],

}



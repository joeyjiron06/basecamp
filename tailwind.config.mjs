
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			maxWidth: ({ theme }) => ({
				// '2xl': '42rem',
				// '3xl': '48rem',
				// '4xl': '56rem',
				// 'page': '64rem',
				'page': '72rem',
				// '7xl': '80rem',
			}),
			colors: {
				// for primary buttons, links etc
				"primary": "black",
				"primary-fg": "white", // foreground

				// secondary accent colors
				"secondary": "grey",
				"primary-fg": "white", // foreground


				// backgrounds
				"base": "white",
				"base-100": "#F0F0F0",
				"base-200": "#E0E0E0",

				// foregrounds to contrast against bg colors
				"fg": "black",
				"fg-100": "#373737",
				"fg-200": "#707070",
			}
		}
	},
	plugins: [],
}

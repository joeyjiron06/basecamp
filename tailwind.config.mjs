
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			maxWidth: {
				'page': '72rem',
			},

			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.base-content'),

						// ...
					},
				},
			}),
		}
	},

	// https://coolors.co/11270b-71b340-669d31-d3c1d2-f8fff4
	daisyui: {
		themes: [
			{
				dark: {
					...require("daisyui/src/theming/themes")["black"],
					// primary: "#71B340",
					// secondary: "#D3C1D2",

					primary: "white",
					secondary: "grey",

					// original
					// "base-100": "#000000",
					// "base-200": "#141414",
					// "base-300": "#262626",
					// "base-content": "#d6d6d6",

					"base-100": "#000000",
					"base-200": "#0A0A0A",
					"base-300": "#1A1A1A",
					"base-content": "#E6E6E6",

					"--rounded-box": "0.5rem", // border radius rounded-box utility class, used in card and other large boxes
					"--rounded-btn": "0.25rem", // border radius rounded-btn utility class, used in buttons and similar element
					"--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
					"--animation-btn": "0.25s", // duration of animation when you click on button
					"--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
					"--btn-focus-scale": "0.95", // scale transform of button when you focus on it
					"--border-btn": "1px", // border width of buttons
					"--tab-border": "1px", // border width of tabs
					"--tab-radius": "0.25rem", // border radius of tabs
				},
			},
		],
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("daisyui"),
		require('tailwindcss-hero-patterns'),
	],
}

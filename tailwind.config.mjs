import { createThemes } from 'tw-colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['variant', [
		'@media (prefers-color-scheme: dark) { &:not(.light *) }',
		'&:is(.dark *)',
	]],
	theme: {
		extend: {
			maxWidth: {
				'page': '72rem',
			},
		}
	},
	plugins: [
		createThemes({
			light: {
				// for primary buttons, links etc
				"primary": "black",
				"primary-fg": "white", // foreground

				// secondary accent colors
				"secondary": "grey",
				"secondary-fg": "white", // foreground

				// backgrounds
				"base": "white",
				"base-100": "#F0F0F0",
				"base-200": "#E0E0E0",

				// foregrounds to contrast against bg colors
				"fg": "black",
				"fg-100": "#373737",
				"fg-200": "#707070",
			},
			dark: {
				// for primary buttons, links etc
				"primary": "white",
				"primary-fg": "black", // foreground

				// secondary accent colors
				"secondary": "white",
				"secondary-fg": "grey", // foreground

				// backgrounds
				"base": "black",
				"base-100": "#373737",
				"base-200": "#707070",

				// foregrounds
				"fg": "white",
				"fg-100": "#F0F0F0",
				"fg-200": "#E0E0E0",
			}
		}, {
			defaultTheme: {
				light: 'light',
				dark: 'dark'
			}
		})
	],
}

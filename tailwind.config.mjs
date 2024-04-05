import colors from 'tailwindcss/colors';


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        'page': '72rem',
      },
      colors: {
        surface: colors.neutral,
        foreground: colors.neutral,
        accent: colors.amber,
      }
    }
  },

  plugins: [
    require('./src/tailwind.plugin.js')
  ],
}

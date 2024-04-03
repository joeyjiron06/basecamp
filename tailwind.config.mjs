
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        'page': '72rem',
      },
    }
  },

  plugins: [
    require('./src/tailwind.plugin.js')
  ],
}

/** @type {import('tailwindcss/plugin')} */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors')

module.exports = plugin(({ addBase, theme }) => {
  addBase([
    require('./styles/layout'),
    require('./styles/typography'),
  ])
},

  {
    theme: {
      extend: {
        colors: {
          surface: colors.gray,
          foreground: colors.gray,
          accent: colors.blue,
        },
        borderRadius: {
          DEFAULT: '0.25rem'
        },
      }
    }
  }
)
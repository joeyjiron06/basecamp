/** @type {import('tailwindcss/plugin')} */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors')

module.exports = plugin(({ addBase, theme }) => {
  addBase([
    require('./styles/layout')(theme),
    require('./styles/typography')(theme),
  ])
  // require('./styles/header')(pluginApi);
  // require('./styles/typography')(pluginApi);
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
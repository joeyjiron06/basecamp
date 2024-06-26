import path from 'path';

module.exports = {
  plugins: {
    tailwindcss: {
      config: path.join(__dirname, 'tailwind.config.mjs'),
    },
    autoprefixer: {},
  },
};

/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSameLine: true,
  overrides: [
    {
      files: ['*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
  // htmlWhitespaceSensitivity: 'ignore'
};
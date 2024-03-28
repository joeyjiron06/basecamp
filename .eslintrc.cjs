module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-strict",
    "plugin:mdx/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },

    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {},
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    },
    {
      files: ['*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['react', '@typescript-eslint'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      env: {
        node: false,
        browser: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
    },
    {
      files: '*.cjs',
      env: {
        node: true,
        commonjs: true,
      },
    },
    {
      files: "*.mjs",
      end: {
        node: true,
        es6: true,
      }
    }
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
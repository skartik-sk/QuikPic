const module = require('module');

module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended', // Integrates Prettier with ESLint
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'prettier', // Enables Prettier rules
    ],
    rules: {
      'prettier/prettier': 'error', // Makes Prettier errors into ESLint errors
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off', // You can turn off or on rules using 'off' or 'error'
    },
  };
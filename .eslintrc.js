module.exports = {

  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },

    ecmaVersion: 12,
    sourceType: 'module',
  },

  plugins: ['react'],

  rules: {
    'linebreak-style': [
      'error',
      'windows',
    ],
    'multiline-ternary': [
      'error',
      'always',
    ],
    'import/newline-after-import': [
      'warn',
      { count: 2 },
    ],
    'no-multiple-empty-lines': [
      'error',
      { max: 2 },
    ],
    'function-call-argument-newline': [
      'error',
      'always',
    ],
    'object-property-newline': [
      'warn',
      { allowMultiplePropertiesPerLine: false },
    ],
    'array-element-newline': [
      'warn',
      'always',
    ],
    'array-bracket-newline': [
      'warn',
      { minItems: 2 },
    ],
    'function-paren-newline': [
      'warn',
      { minItems: 2 },
    ],
    'import/exports-last': 'warn',
  },
};

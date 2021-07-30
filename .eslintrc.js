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
    'import/no-unresolved': 'off',
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
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'if',
      },
    ],
    'newline-per-chained-call': [
      'error',
      { ignoreChainWithDepth: 2 },
    ],
    'react/no-array-index-key': 'off',
  },
};

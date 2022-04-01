/* eslint-disable comma-dangle */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/indent': [
      'warn',
      2
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-use-before-define': ['error'],
    'space-before-function-paren': ['error', 'never'],
    'no-use-before-define': 'off',
    'react/prop-types': 'off'
  }
}

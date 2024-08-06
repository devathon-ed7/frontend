module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs','node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ],
    'eqeqeq': ['error', 'always'],
    'no-empty-function': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off"
  },
}
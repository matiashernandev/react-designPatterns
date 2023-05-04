module.exports = {
  env: { browser: true, es2020: true },
  extends: './node_modules/standard/eslintrc.json',
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn'
    /* "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-misused-promises": "off", */
  }
}

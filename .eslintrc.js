/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-console": "warn",
    "prefer-template": "warn",
    "no-loop-func": "warn",
    camelcase: "warn",
    "@typescript-eslint/no-unused-expressions": "error",
    eqeqeq: "error",
    "no-mixed-operators": "warn",
  },
  reportUnusedDisableDirectives: true,
};

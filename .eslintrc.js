module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "react-app",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    tsconfigRootDir: "./",
    project: "./tsconfig.json",
  },
  plugins: ["react", "jsx-a11y"],
  rules: {},
};

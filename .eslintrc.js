module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    swan: "readonly",
    wx: "readonly",
    uni: "readonly",
    plus: "readonly",
    rpx: "readonly",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};

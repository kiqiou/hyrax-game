module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  parser: "vue-eslint-parser", // Парсер для Vue-файлов [1]
  parserOptions: {
    parser: "@typescript-eslint/parser", // Парсер для TS внутри Vue
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended", // Рекомендации для Vue 3 [4]
    "plugin:@typescript-eslint/recommended", // Рекомендации для TS [1]
  ],
  ignores: ["node_modules/", "dist/", "build/", "public/", "*.config.js"],
  rules: {
    // Ваши кастомные правила
  },
};

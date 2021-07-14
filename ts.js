module.exports = {
  extends: [require.resolve("./common.js")],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json", // This setting is required if you want to use rules which require type information
        ecmaVersion: 12,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ["@typescript-eslint"],
      // "rules": {
      // },
      // TODO type-checking 会使校验过程变得比较慢
      // 下面的可以代替 'plugin:@typescript-eslint/recommended',
      extends: [
        "standard-with-typescript", // 需要配合 parserOptions.project
        // "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],
    },
  ],
};

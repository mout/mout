module.exports = {
    parserOptions: {
        ecmaVersion:  2018,
        ecmaFeatures: { modules: true },
        sourceType: "module",
        project: "./tsconfig.json",
    },
    plugins: [
      "prettier"
    ],
    parser: "@typescript-eslint/parser",
    extends: ["eslint:recommended", "google", "prettier"],
    rules: {
        "prettier/prettier": ["warn", {
            "singleQuote": true,
            "tabWidth": 4,
            "useTabs": false
        }],
        "indent": ["error", 4],
        "valid-jsdoc": ["off"],
        "comma-dangle": ["off"],
        "max-len": ["error", 100],
        "require-jsdoc": ["off"],
    }
}
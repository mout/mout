module.exports = {
    parserOptions: {
        ecmaVersion:  2018,
        ecmaFeatures: { modules: true },
        sourceType: "module",
        project: "./tsconfig.json",
    },
    parser: "@typescript-eslint/parser",
    extends: ["eslint:recommended", "google"],
    rules: {
        "indent": ["error", 4],
        "valid-jsdoc": ["off"],
        "max-len": ["error", 100],
    }
}
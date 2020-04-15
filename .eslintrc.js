module.exports = {
    plugins: [
      "prettier"
    ],
    overrides: [
        {
            files: "src/**/*.ts",
            parserOptions: {
                ecmaVersion:  2018,
                ecmaFeatures: { modules: true },
                sourceType: "module",
                project: "./tsconfig.json",
            },
            parser: "@typescript-eslint/parser",
        },
        {
            files: ["_build/*.js", "build.js"],
            parserOptions: {
                ecmaVersion:  2018
            },
            env: {
                node: true
            }
        }
    ],
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
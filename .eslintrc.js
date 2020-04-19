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
            "printWidth": 100,
            "singleQuote": true,
            "tabWidth": 4,
            "useTabs": false,
            "trailingCommas": false
        }],
        "valid-jsdoc": ["off"],
        "require-jsdoc": ["off"],
    }
}
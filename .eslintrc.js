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
            env: {
                browser: true
            }
        },
        {
            files: ["tests/spec/**/*.js"],
            parserOptions: {
                ecmaFeatures: {
                    modules: true
                }
            },
            parser: "babel-eslint",
            env: {
                jasmine: true,
                browser: true
            },
            rules: {
                "no-new-wrappers": ["off"],
                "no-new-object": ["off"],
            }
        },
        {
            files: ["_build/*.js", "build.js", "tests/runner.js"],
            parserOptions: {
                ecmaVersion:  2018
            },
            env: {
                node: true
            }
        },
    ],
    extends: ["eslint:recommended", "google", "prettier"],
    rules: {
        "prettier/prettier": ["error", {
            "printWidth": 100,
            "singleQuote": true,
            "tabWidth": 4,
            "useTabs": false,
            "trailingCommas": false
        }],
        "linebreak-style": ["error", "unix"],
        "valid-jsdoc": ["off"],
        "require-jsdoc": ["off"],
        "no-useless-escape": ["off"],
        "prefer-rest-params": ["off"],
        "no-invalid-this": ["off"],
    }
}
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "react-app/jest",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  ignorePatterns: ["*.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    project: ["./tsconfig.json"],
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  // Documentation for @typescript-eslint rules:
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
  // Documentation for eslint rules:
  // https://eslint.org/docs/rules/
  rules: {
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      { allowExpressions: true },
    ],
    "@typescript-eslint/explicit-module-boundary-types": [
      "warn",
      { allowArgumentsExplicitlyTypedAsAny: true },
    ],

    // @ts-ignore suppresses Typescript compiler error reporting; if we ever use this, linter should trust us
    "@typescript-eslint/ban-ts-ignore": "off",

    "@typescript-eslint/func-call-spacing": "warn",
    "func-call-spacing": "off",

    // empty functions needed for constructors due to Angular dependency injection
    "@typescript-eslint/no-empty-function": "off",

    // use @typescript-eslint's default naming convention, except enforce PascalCase for enum members
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "default",
        format: ["PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "variable",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "enumMember",
        format: ["PascalCase"],
      },
      {
        selector: "typeProperty",
        format: null,
        custom: {
          regex: "^(?:(?:[0-9]{4})|(.*[A-Z].*)|(.*[a-z].*)|φ|ο)",
          match: true,
        },
      },
    ],
    "@typescript-eslint/camelcase": "off", // doc claims that this is deprecated, but it apparently still needs to be explicitly off
    camelcase: "off",
    // @typescript-eslint override
    "@typescript-eslint/quotes": ["warn", "single"],
    quotes: "off",

    // @typescript-eslint override
    "@typescript-eslint/semi": ["warn", "always"],
    semi: "off",

    "@typescript-eslint/ban-types": [
      "warn",
      {
        types: {
          String: {
            message: "Use string instead",
            fixWith: "string",
          },
          Boolean: {
            message: "Use boolean instead",
            fixWith: "boolean",
          },
          Symbol: {
            message: "Use symbol instead",
            fixWith: "symbol",
          },
        },
        // use only what we have defined above, not the rest of the default config for ban-types
        extendDefaults: false,
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        classes: ["field", "constructor", "public-method", "private-method"],
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-require-imports": "warn",
    "@typescript-eslint/prefer-function-type": "warn",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/type-annotation-spacing": "warn",
    "@typescript-eslint/unified-signatures": "warn",
    "arrow-body-style": "warn",
    "brace-style": "off",
    "constructor-super": "warn",
    curly: "warn",
    "dot-notation": "warn",
    "eol-last": "warn",
    eqeqeq: ["error", "smart"],
    "getter-return": "error",
    "max-len": [
      "warn",
      {
        code: 140,
      },
    ],
    "no-caller": "error",
    "no-case-declarations": "warn",
    "no-empty": "warn",
    "no-extra-boolean-cast": "warn",
    "no-eval": "error",
    "no-shadow": "off", // required to be off for typescript
    "@typescript-eslint/no-shadow": "warn",
    "no-trailing-spaces": "warn",
    "no-unexpected-multiline": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": [
      "warn",
      {
        allowTernary: true,
      },
    ],
    "prefer-const": "warn",
    radix: "off",
    "semi-style": "warn",
    "spaced-comment": [
      "warn",
      "always",
      { exceptions: ["\n"], markers: ["*", "/"] },
    ],
    "prettier/prettier": ["error",{
      "endOfLine": "auto"}
    ]
  },
};

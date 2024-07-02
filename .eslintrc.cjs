module.exports = {
  root: true,
  env: { browser: true, es2020: true, es6: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  overrides: [],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // project: "./tsconfig.json",
  },
  plugins: [
    "react",
    "react-refresh",
    "@typescript-eslint",
    "react-hooks",
    "unused-imports",
  ],

  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // 'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': 'error',
    "@typescript-eslint/no-explicit-any": "off",
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "no-console": "warn",
    // "no-console": ["error", { allow: ["warn", "error"] }],
    // "sort-imports": "warn",
    // "sort-imports": [
    //   "warn",
    //   {
    //     // ignoreCase: false,
    //     // ignoreDeclarationSort: false,
    //     ignoreMemberSort: false,
    //     // memberSyntaxSortOrder: ["none"],
    //     // allowSeparatedGroups: false,
    //   },
    // ],
    // "sort-imports": ["error", { "ignoreMemberSort": true }],

    // "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",

    "unused-imports/no-unused-imports": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "public", "__test__"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "unused-imports": unusedImports,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/jsx-runtime": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
      // "no-unused-vars": "off",
      // "@typescript-eslint/no-unused-vars": [
      //   "error",
      //   {
      //     args: "all",
      //     argsIgnorePattern: "^_",
      //     caughtErrors: "all",
      //     caughtErrorsIgnorePattern: "^_",
      //     destructuredArrayIgnorePattern: "^_",
      //     varsIgnorePattern: "^_",
      //     ignoreRestSiblings: true,
      //   },
      // ],
      "@typescript-eslint/no-unused-vars": [
        "warn", // or "error" if you prefer to treat this as an error
        {
          varsIgnorePattern: "^_", // Ignore variables starting with _
          argsIgnorePattern: "^_", // Ignore arguments starting with _
        },
      ],
      "no-console": "warn",
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],

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

      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",

      "unused-imports/no-unused-imports": "error",
    },
  }
);

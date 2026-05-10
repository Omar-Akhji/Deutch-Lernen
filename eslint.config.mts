import { defineConfig, globalIgnores } from "eslint/config";
import { fixupConfigRules } from "@eslint/compat";

import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import unicorn from "eslint-plugin-unicorn";

import type { Linter } from "eslint";

const eslintConfig: Linter.Config[] = defineConfig([
  ...fixupConfigRules(nextVitals),
  ...fixupConfigRules(nextTs),

  unicorn.configs["flat/recommended"],
  {
    rules: {
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],
      "unicorn/prevent-abbreviations": [
        "error",
        {
          replacements: {
            props: false,
            ref: false,
            params: false,
            e: false,
            err: false,
          },
        },
      ],
      "unicorn/no-null": "off", // Controversial in React for refs/JSX
    },
  },

  // ─── Custom quality rules ────────────────────────────
  {
    rules: {
      /* ── TypeScript strictness ────────────────────── */
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",

      /* ── React best practices ─────────────────────── */
      "react/jsx-no-leaked-render": [
        "warn",
        { validStrategies: ["ternary", "coerce"] },
      ],
      "react/self-closing-comp": "error",
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" },
      ],
      "react/jsx-boolean-value": ["warn", "never"],
      "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
      "react/no-array-index-key": "warn",

      /* ── General quality ──────────────────────────── */
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-nested-ternary": "off",
    },
  },

  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },

  // Prettier config — MUST be last
  // disables all ESLint rules that conflict
  // with Prettier (quotes, semi, indent...)
  prettierConfig,

  // Global ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "graphify-out/**",
    "scratch/**",
    "docs/**",
    ".gemini/**",
    ".agents/**",
    "*.md",
  ]),
]) as Linter.Config[];

export default eslintConfig;

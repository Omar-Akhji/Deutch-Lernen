import { defineConfig, globalIgnores } from "eslint/config";
import { fixupConfigRules } from "@eslint/compat";

import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import unicorn from "eslint-plugin-unicorn";
import securityPlugin from "eslint-plugin-security";
import noUnsanitizedPlugin from "eslint-plugin-no-unsanitized";

const eslintConfig = defineConfig([
  ...fixupConfigRules(nextVitals),
  ...fixupConfigRules(nextTs),

  unicorn.configs["flat/recommended"],
  securityPlugin.configs.recommended,
  noUnsanitizedPlugin.configs.recommended,
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
      "unicorn/no-null": "off",
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

      /* ── Security tuning ─────────────────────────── */
      "security/detect-eval-with-expression": "error",
      "security/detect-unsafe-regex": "error",
      "security/detect-buffer-noassert": "error",
      "security/detect-child-process": "error",
      "security/detect-no-csrf-before-method-override": "error",
      "security/detect-pseudoRandomBytes": "error",
      "security/detect-object-injection": "warn",
      "no-unsanitized/method": "error",
      "no-unsanitized/property": "error",
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
]);

export default eslintConfig;

import { fixupConfigRules } from "@eslint/compat";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import nounsanitized from "eslint-plugin-no-unsanitized";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import securityPlugin from "eslint-plugin-security";
import unicorn from "eslint-plugin-unicorn";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...fixupConfigRules(nextVitals),
  ...fixupConfigRules(nextTs),

  // ─── Unicorn ───────────────────────────────────────────────────
  unicorn.configs["flat/recommended"],

  // ─── Security ──────────────────────────────────────────────────
  securityPlugin.configs.recommended,
  nounsanitized.configs.recommended,

  // ─── Unicorn overrides ─────────────────────────────────────────
  {
    rules: {
      "unicorn/filename-case": ["error", { cases: { kebabCase: true, pascalCase: true } }],
      "unicorn/prevent-abbreviations": [
        "error",
        { replacements: { props: false, ref: false, params: false, e: false, err: false } },
      ],
      "unicorn/no-null": "off",
      "unicorn/no-array-reduce": "off",
    },
  },

  // ─── TypeScript ────────────────────────────────────────────────
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
    },
  },

  // ─── React ─────────────────────────────────────────────────────
  {
    files: ["**/*.tsx", "**/*.jsx"],
    rules: {
      "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary", "coerce"] }],
      "react/self-closing-comp": "error",
      "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
      "react/no-array-index-key": "error",
      "react/hook-use-state": "error",
      "react/jsx-no-constructed-context-values": "error",
    },
  },

  // ─── General quality ───────────────────────────────────────────
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-nested-ternary": "off",
      "no-implicit-coercion": "error",
      "no-return-assign": "error",
      "no-throw-literal": "error",
    },
  },

  // ─── Security tuning ───────────────────────────────────────────
  {
    rules: {
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

  // ─── Prettier — MUST be last ───────────────────────────────────
  prettierRecommended,

  // ─── Global ignores ────────────────────────────────────────────
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

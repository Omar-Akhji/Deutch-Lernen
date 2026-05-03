import type { Config } from "prettier";

interface TailwindPrettierConfig extends Config {
  tailwindStylesheet?: string;
  tailwindFunctions?: string[];
}

const config: TailwindPrettierConfig = {
  // ─── Plugins ──────────────────────────────────────────
  plugins: ["prettier-plugin-tailwindcss"],

  // ─── Tailwind CSS v4 ─────────────────────────────────
  tailwindStylesheet: "./app/globals.css",
  tailwindFunctions: ["cn", "cva", "clsx"],

  // ─── Formatting ──────────────────────────────────────
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",

  // ─── Whitespace & line breaks ────────────────────────
  endOfLine: "lf",
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  singleAttributePerLine: false,

  // ─── Embedded languages ──────────────────────────────
  embeddedLanguageFormatting: "auto",
  experimentalTernaries: true,
};

export default config;

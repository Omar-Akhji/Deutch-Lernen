/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],

  tailwindStylesheet: "./app/globals.css",
  tailwindFunctions: ["cn", "cva", "clsx", "twMerge"],

  printWidth: 100,
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

  objectWrap: "collapse",
  experimentalOperatorPosition: "start",

  endOfLine: "lf",
  proseWrap: "always",
  htmlWhitespaceSensitivity: "css",
  singleAttributePerLine: true,

  embeddedLanguageFormatting: "auto",
  experimentalTernaries: true,
};

export default config;

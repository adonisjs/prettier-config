import * as edgePlugin from "prettier-plugin-edgejs";

export default {
  trailingComma: "es5",
  semi: false,
  singleQuote: true,
  useTabs: false,
  quoteProps: "consistent",
  bracketSpacing: true,
  arrowParens: "always",
  printWidth: 100,
  plugins: [edgePlugin],
};

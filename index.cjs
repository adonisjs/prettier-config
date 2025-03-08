module.exports = {
  trailingComma: "es5",
  semi: false,
  singleQuote: true,
  useTabs: false,
  quoteProps: "consistent",
  bracketSpacing: true,
  arrowParens: "always",
  printWidth: 100,
  plugins: [require.resolve("prettier-plugin-edgejs")],
};

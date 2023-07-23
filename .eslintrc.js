module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  "plugins": ["@typescript-eslint/eslint-plugin", "prettier", "no-loops"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "no-loops/no-loops": "error"
  },
  "env": {
    "node": true
  },
  ignorePatterns: ['.eslintrc.js'],
}

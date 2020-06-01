module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
    "prettier/prettier": ["error", {"singleQuote": true, "trailingComma": "es5", "endOfLine":"auto"}],
    "no-unused-vars": "warn",
    "no-console": "warn",
  },
};

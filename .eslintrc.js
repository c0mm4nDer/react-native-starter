module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'prettier/prettier': 0,
        'no-shadow': 'off',
        'no-undef': 'off',
        "parser": "@babel/eslint-parser",
      },
    },
  ],
};

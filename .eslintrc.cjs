module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'mega', 'unused-imports'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'no-unused-vars': 'warn',
    'mega/path-checker': ['error', { alias: '@' }],
    'mega/fsd-incapsulator-modules': [
      'error',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.ts',
          '**/*.story.*',
          '**/StoreDecorator.tsx',
        ],
      },
    ],
    'mega/fsd-layers-import': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: [],
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};

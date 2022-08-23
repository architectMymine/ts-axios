module.exports = {
  extends: ['standard', 'plugin:prettier/recommended'],
  rules: {
    'no-void': ['error', { allowAsStatement: true }]
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['standard-with-typescript', 'prettier'],
      parserOptions: {
        project: ['./tsconfig.eslint.json']
      },
      rules: {
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off'
      }
    },
    {
      files: ['*.spec.ts', '*.test.ts'],
      rules: {}
    },
    {
      files: ['*.md'],
      plugins: ['markdown']
    }
  ]
}

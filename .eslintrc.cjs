module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'prettier',
    'plugin:react/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'src/components/Icon/**/*.svg'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'react-refresh', 'simple-import-sort', 'import', 'unused-imports'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-empty-pattern': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // react
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^react$', '^react-dom$', '^react-router$', '^react-router-dom$', '^@?\\w'],
          // Config import
          ['^@/config'],
          // Absolute imports and Relative imports.
          ['^@/common(/.*|$)'],
          ['^@/modules(/.*|$)'],
          ['^@/containers(/.*|$)'],
          ['^@/layouts(/.*|$)'],
          ['^@/pages(/.*|$)'],
          ['^@/components(/.*|$)'],
          ['^@/translations(/.*|$)'],
          ['^@/assets(/.*|$)'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // images imports
          ['^.+\\.(svg|jpg|png)$'],
          // Style imports.
          ['^.+\\.s?css$'],
          ['^']
        ]
      }
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
    ],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off'
  }
};

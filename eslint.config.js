import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import preferArrowPlugin from 'eslint-plugin-prefer-arrow'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importsSortPlugin from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  eslintPluginPrettierRecommended,
  tseslint.configs.recommended,
  reactHooks.configs['recommended-latest'],
  {
    plugins: {
      'prefer-arrow': preferArrowPlugin,
      'unused-imports': unusedImports,
      react: pluginReact,
      'simple-import-sort': importsSortPlugin,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error',
      'unused-imports/no-unused-imports': 'error',
      'no-duplicate-imports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'error',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          types: {
            object:
              'Не використовуй `object`, краще Record<string, unknown> або інший конкретний тип',
          },
        },
      ],
      'newline-after-var': ['error', 'always'],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          parser: 'typescript',
        },
      ],
      'prefer-arrow/prefer-arrow-functions': [
        'error',
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
])

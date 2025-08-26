import { FlatCompat } from '@eslint/eslintrc';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Configuration for TypeScript files with project references
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // Turned off in favor of unused-imports
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Node.js built-in modules
            ['^node:'],
            // External packages
            ['^@?\\w'],
            // Strapi imports
            ['^@strapi'],
            // Internal imports (absolute paths)
            ['^@/'],
            // Internal imports (relative paths)
            ['^[./]'],
            // Type imports
            ['^.*\\u0000$'],
            // Style imports
            ['^.+\\.css$', '^.+\\.scss$', '^.+\\.sass$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  // Configuration for JavaScript files without project references
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // Turned off in favor of unused-imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Node.js built-in modules
            ['^node:'],
            // External packages
            ['^@?\\w'],
            // Strapi imports
            ['^@strapi'],
            // Internal imports (absolute paths)
            ['^@/'],
            // Internal imports (relative paths)
            ['^[./]'],
            // Type imports
            ['^.*\\u0000$'],
            // Style imports
            ['^.+\\.css$', '^.+\\.scss$', '^.+\\.sass$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.cache/**',
      'database/**',
      'public/**',
      '.strapi/**',
      'src/admin/**',
    ],
  },
];

export default eslintConfig;

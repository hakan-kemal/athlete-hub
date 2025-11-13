import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['.react-router/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.browser },
    rules: { 'no-unused-vars': 'warn', 'no-undef': 'warn' },
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
]);

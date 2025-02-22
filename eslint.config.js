import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default tseslint.config(
    {
        ignores: ['**/node_modules', 'dist', 'build'],
    },
    {
        plugins: {
            react: eslintPluginReact,
            '@typescript-eslint': tseslint.plugin,
            prettier: prettierPlugin,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
            parser: tseslint.parser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-hooks/exhaustive-deps': 'off',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'prettier/prettier': 'error',
            '@typescript-eslint/no-empty-function': 'off',
            'react/react-in-jsx-scope': 'off',
            indent: ['error', 4],
            'linebreak-style': ['error', 'unix'],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    }
);

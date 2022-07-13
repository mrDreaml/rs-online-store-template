module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [],
    globals: {
        process: true,
    },
    rules: {
        semi: [2, 'never'],
        'no-prototype-builtins': 'off',
        camelcase: ['error', { allow:  ['^UNSAFE_'] }],
        'key-spacing': 0,
        quotes: [2, 'single'],
        'max-len': [
            2,
            {
                code: 120,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'object-curly-spacing': [2, 'always'],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'only-multiline',
        }],
        'quote-props': [2, 'as-needed'],
        'no-labels': [2, { allowLoop: true }],
        'no-console': [2, { allow: ['warn', 'error'] }],
        'no-unused-vars': [
            'error',
            { vars: 'all', args: 'all', ignoreRestSiblings: true, varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
        ],
        curly: [2, 'all'],
    },
}

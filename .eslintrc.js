module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    globals: {
    },
    rules: {
        'babel/camelcase': 'off',
        'import/extensions': 'off',
        'react/require-default-props': 'off',
        'react/forbid-component-props': 'off',
    },
    extends: [
        'plugin:mew/react',
        'plugin:react/recommended',
        'plugin:mew/typescript'
    ],
};

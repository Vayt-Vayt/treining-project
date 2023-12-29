module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'eslint:recommended',
		'plugin:i18next/recommended',
		'plugin:storybook/recommended',
	],
	overrides: [{
		env: {
			node: true,
			jest: true,
		},
		files: ['.eslintrc.{js,cjs}', '**/src/**/*.test.{ts,tsx}'],
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
	}],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		// Project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'react/jsx-indent': [2, 4],
		'react/jsx-indent-props': [2, 4],
		indent: [2, 4],
		'react/jsx-filename-extension': [2, {
			extensions: ['.js', '.jsx', '.tsx'],
		}],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		'i18next/no-literal-string': ['error', {
			markupOnly: true,
			ignoreAttribute: ['data-testid', 'to'],
		}],
		'max-len': ['error', {
			ignoreComments: true,
			code: 100,
		}],
	},
	globals: {
		__IS_DEV__: true,
	},
};

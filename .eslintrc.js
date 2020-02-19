module.exports = {
  parserOptions: {
    ecmaVersion: 8
  },
  env: {
    'shared-node-browser': true
  },
  extends: [
    'xo',
    'rem',
    'xo-typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true
        }
      }
    ]
  },
  overrides: [
    {
      files: 'benchmark/**/*.js',
      extends: ['xo', 'rem', 'plugin:prettier/recommended'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              kebabCase: true
            }
          }
        ]
      }
    },
    {
      files: 'Foyfile.js',
      extends: ['xo', 'rem', 'plugin:prettier/recommended'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              pascalCase: true
            }
          }
        ]
      }
    }
  ],
  parser: '@typescript-eslint/parser'
}

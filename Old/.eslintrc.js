module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: ['eslint:recommended'],

  // add your custom rules here
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
  }
}

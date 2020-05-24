module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  plugins: [
    'sonarjs'
  ],
  extends: [
    'standard',
    'plugin:sonarjs/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
  }
}

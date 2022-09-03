module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'airbnb-base',
  ],
  plugins: [],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'vue/multi-word-component-names': 0,
    'vue/html-self-closing': 0,
  },
};

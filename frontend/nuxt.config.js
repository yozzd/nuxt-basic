export default {
  server: { host: '0.0.0.0', port: 5000 },
  head: {
    title: 'Nuxt Basic',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap',
      },
    ],
  },

  css: [
    '@/assets/css/variables.scss',
    '@/assets/css/style.css',
  ],

  plugins: [
    '@/plugins/element-ui',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    'nuxt-windicss',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  axios: {
    baseURL: '/',
  },

  styleResources: {
    scss: [
      '@/assets/css/variables.scss',
    ],
  },

  build: {
    transpile: [/^element-ui/],
  },
};

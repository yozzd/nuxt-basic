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
    '@nuxtjs/date-fns',
  ],

  modules: [
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources',
  ],

  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/dashboard',
      guard: '/guard',
    },
    strategies: {
      local: {
        autoLogout: true,
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer',
          maxAge: 60 * 60 * 2,
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        endpoints: {
          login: { url: 'http://localhost:5001/api/auth/login', method: 'post' },
          logout: false,
          user: { url: 'http://localhost:5001/api/user/me', method: 'get' },
        },
      },
    },
  },

  axios: {
    proxy: true,
  },

  proxy: {
    '/api/': { target: 'http://localhost:5001/api', pathRewrite: { '^/api/': '' } },
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

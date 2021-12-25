export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'filenet',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBvoEKgLs8n36KCDmIuv4NqM1gfUMhsyJg',
          authDomain: 'filenet-17199.firebaseapp.com',
          projectId: 'filenet-17199',
          storageBucket: 'filenet-17199.appspot.com',
          messagingSenderId: '558652622063',
          appId: '1:558652622063:web:871a8a6a19f23ef61b471a',
          measurementId: 'G-FEDVELVC45'
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false, // default
            emulatorPort: 9099,
            emulatorHost: 'http://localhost',
          }
        }
      }
    ]
  ],

  serverMiddleware: {
    '/api': '~/api'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

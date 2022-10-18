import getRoutes from "./utils/getRoutes";

import { createSEOMeta } from "./utils/seo";

export default {
  

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Teamoppy Sports - Performance Analysis',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      ...createSEOMeta({
        title: "TeamOppy Sports",
        description: "Performance Analysis - event tagging, analysis, video analysis, dashboards",
        image: "/images/twitter/charts.svg",
        url: process.env.BASE_URL,
      }),
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-gtag.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-fonts',
    'cookie-universal-nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'cookie-universal-nuxt',
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    optionsPath: './vuetify.config.js'
  },

  content: {

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  sitemap: {
    hostname: process.env.BASE_URL,
    routes() {
      return getRoutes();
    },
  },

  googleFonts: {
    families: {
      Quicksand: {
        wght: [400, 500, 600, 700],
      },
    },
    display: 'swap',
  },
  env: {
    gaProperty: process.env.GA_PROPERTY
  },

  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()
      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  }

}

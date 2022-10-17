import getRoutes from "./utils/getRoutes";
import getSiteMeta from "./utils/getSiteMeta";

const meta = getSiteMeta();

export default {
  

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // router: {
  //   base: '/teamoppysite/'
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - website',
    title: 'Teamoppy Sports - Performance Analysis',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Performance Analysis - event tagging, analysis, video analysis, dashboards' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
      { hid: 'twitter:site', name: 'twitter:site', content: '@teamoppy'},
      { hid: 'twitter:title', name: 'twitter:title', content: 'from TeamOppy Sports'},
      { hid: 'twitter:description', name: 'twitter:description', content: 'Sports Performance Analysis Applications' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://teamoppy.com/images/twitter/charts.svg'},

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


}

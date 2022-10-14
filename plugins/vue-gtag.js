import Vue from 'vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  enable: process.env.NODE_ENV === 'production',
  config: { id: process.env.gaProperty }
})
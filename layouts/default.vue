<template>
  <v-app class="application--toolbar application--footer application--footer-fixed">
    <header-bar></header-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
      <footer-links></footer-links>
    </v-main>

    <v-footer app>
      <v-row>
        <v-col cols="9">
          <span>&copy; {{ new Date().getFullYear() }} teamoppy.com</span>
          <span>
            <v-btn color="#0083eb" icon small href="https://twitter.com/teamoppy">
              <v-icon color="#1d9bf0">mdi-twitter</v-icon>
            </v-btn>
          </span>
        </v-col>
        <v-col cols="3" class="d-flex justify-end">
          <v-btn small outlined rounded @click="$vuetify.theme.dark = !$vuetify.theme.dark">
            {{ $vuetify.theme.dark ? 'light': 'dark'}}
            <v-icon>mdi-weather-night</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>

    <v-bottom-sheet v-model="showCookieMessage">
      <v-sheet class="text-center" >
        <v-banner v-model="showCookieMessage" transition="slide-y-transition" >
          We use cookies to analyze website traffic and optimize your website experience.
          <template v-slot:actions>
            <v-btn outlined @click="dismissCookie">
              OK
            </v-btn>
          </template>
        </v-banner>
      </v-sheet>
    </v-bottom-sheet>

  </v-app>
</template>

<script>
import common from '@/mixins/blog/common.js'

export default {

  mixins: [
    common
  ],
  data: () => ({
    showCookieMessage: false,
  }),
  mounted(){
    if (!this.$cookies.get('cookies-accepted') ){
      this.showCookieMessage = true
    }
  },
  methods: {
    dismissCookie() {
      this.$cookies.set('cookies-accepted', 'true')
      this.showCookieMessage = false
    },
  }
}
</script>

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
          <span>&copy; {{ new Date().getFullYear() }} tagger.teamoppy.com</span>
          <span>
            <v-btn color="#0083eb" icon small href="https://twitter.com/teamoppy">
              <v-icon color="#1d9bf0">mdi-twitter</v-icon>
            </v-btn>
          </span>
        </v-col>
        <v-col>
          <v-spacer></v-spacer>
        </v-col>
        <v-col>
          <v-btn small outlined rounded @click="$vuetify.theme.dark = !$vuetify.theme.dark">
            {{ $vuetify.theme.dark ? 'light': 'dark'}}
            <v-icon>mdi-weather-night</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>

  </v-app>
</template>

<script>
import common from '@/mixins/blog/common.js'

export default {

  mixins: [
    common
  ],
  data: () => ({
  }),
}
</script>

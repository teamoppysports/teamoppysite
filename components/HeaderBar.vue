<template>
  <div>
    <v-navigation-drawer v-if="$vuetify.breakpoint.mdAndDown" v-model="drawer" right fixed app>
      <v-list>
        <v-list-item v-for="link in links" :key="link.name" :to="link.to" @click="drawer = false">
          <v-list-item-icon>
              <v-icon small v-text="link.icon.name" :color="link.icon.color"></v-icon>
            </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="link.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar fixed app extended max-height="150px">
      <v-row class="d-flex align-center" style="height: 150px;">
        <v-col cols="8" md="4">
          <router-link to="/">
            <v-img max-height="250" max-width="250" :src="logoImage" alt="Screenshot" class="screenshot" to="/" />
          </router-link>
        </v-col>

        <v-col cols="4" md="8" class="d-flex justify-end">
          <v-btn v-if="$vuetify.breakpoint.lgAndUp" text v-for="link in links" :key="link.name" :to="link.to">
            {{ link.name }}
          </v-btn>
          <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mdAndDown" @click.stop="drawer = !drawer" />
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
import common from '@/mixins/blog/common.js'

export default {

  mixins: [
    common
  ],
  data: () => ({
    drawer: false,
    links: [
      {
        name: 'Home',
        to: '/',
        icon: {
          name: 'mdi-home',
          color: 'blue'
        },
      },
      {
        name: 'Launchpad',
        to: '/launchpad',
        icon: {
          name: 'mdi-rocket-launch',
          color: 'green'
        },
      },
      {
        name: 'Blog',
        to: '/blog',
        icon: {
          name: 'mdi-post',
          color: 'deep-orange'
        },
      },
      {
        name: 'Docs',
        to: '/docs',
        icon: {
          name: 'mdi-file-document',
          color: 'pink lighten-2'
        },
      },
      {
        name: 'Pricing',
        to: '/pricing',
        icon: {
          name: 'mdi-currency-eur',
          color: 'teal'
        },
      },
      {
        name: 'Help',
        to: '/help',
        icon: {
          name: 'mdi-help-box',
          color: 'teal'
        },
      }
      // {
      //   name: 'Docs',
      //   to: '/docs',
      //   icon: {
      //     name: 'mdi-file-document-multiple',
      //     color: 'grey'
      //   },
      // },
      // {
      //   name: 'About',
      //   to: '/about',
      //   icon: {
      //     name: 'mdi-information',
      //     color: 'amber'
      //   },
      // }
    ]
  }),
}
</script>
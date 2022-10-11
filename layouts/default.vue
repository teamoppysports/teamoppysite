<template>
  <v-app>
    <v-app-bar fixed app extended class="sticky align-center" max-height="150px">
      <v-row class="d-flex align-center" style="height: 150px;">
        <v-col>
          <router-link to="/">
            <v-img max-height="250" max-width="250" src="/tslogo-dark.svg" to="/"></v-img>
          </router-link>
        </v-col>
        <v-col>
          <v-spacer></v-spacer>
        </v-col>
        <v-col>
          <v-btn text v-for="link in links" :key="link.name" :to="link.to">
            {{ link.name }}
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-spacer></v-spacer>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
      
    </v-main>

  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'Blog',
        to: '/blog'
      },
      {
        name: 'Launchpad',
        to: '/launchpad'
      },
      {
        name: 'Docs',
        to: '/docs'
      },
      {
        name: 'About',
        to: '/about'
      }
    ],
  }),
}
</script>

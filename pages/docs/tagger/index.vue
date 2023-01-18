<template>
  <v-row >
    <v-col cols="12" md="2">
      <h3>Table of Contents</h3>
      <nav>
        <ul>
          <li :class="{ 'pl-4': link.depth === 3 }" class="toc-list" v-for="link of doc.toc" :key="link.id">
            <NuxtLink :to="`#${link.id}`" class="font-weight-bold text--primary">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </v-col>
    <v-col cols="12" md="1">
      <v-divider vertical></v-divider>
    </v-col>
    <v-col cols="12" md="9">
      <article>
        <v-col cols="12" md="4">

        </v-col>

        <h1>{{ doc.title }}</h1>
        <h2 class="font-weight-thin">{{ doc.description }}</h2>

        <br><br>
        <nuxt-content :document="doc" />

      </article>
    </v-col>
  </v-row>

</template>

<script>
export default {
  async asyncData({ $content }) {
    const doc = await $content('docs/tagger/index').fetch()

    return {
      doc
    }
  }
}
</script>
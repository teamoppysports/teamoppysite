<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <h1>Tagger Documentation</h1>
    </v-col>
    <v-col cols="12" md="8" offset-md="2">
      <v-col>
      <h3>Table of Contents</h3>
      <nav class="d-flex justify-start">
        <ul>
          <li class="toc-list" v-for="article of articles" :key="article.slug">
            <NuxtLink :to="{ name: 'docs-tagger-slug', params: { slug: article.slug } }" class="font-weight-bold text--primary">{{ article.title }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </v-col>
    </v-col>
  </v-row>

</template>

<script>
export default {
  async asyncData({ $content }) {
    const doc = await $content('docs/tagger/01-introduction').fetch()

    const articles = await $content('docs/tagger')
      .only(['title', 'description', 'image', 'slug', 'author', 'tags', 'publishedAt'])
      .sortBy('slug', 'asc')
      .fetch()

    console.log(articles)

    return {
      doc,
      articles
    }
  },
}
</script>

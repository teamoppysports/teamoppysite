<template>
  <article>
    <v-col class="d-flex justify-start">
      <NuxtLink to="/docs/tagger" class="font-weight-thin text--primary" style="text-decoration: none">
        <v-icon>mdi-arrow-left-thin</v-icon>
        Back to Docs
      </NuxtLink>
    </v-col>
    <h1 class="font-sans">{{ article.title }}</h1>

    <v-row>
      <v-col cols="12" md="8">
        <p>{{ article.description }}</p>
      </v-col>
      <v-col cols="12" md="4">
        <p class="font-weight-thin text-caption">Last updated: {{ formatDate(article.updatedAt) }}</p>
      </v-col>

      <v-col cols="2" v-if="$vuetify.breakpoint.mdAndUp">
        <h3></h3>
        <nav class="d-flex justify-start">
          <ul style="list-style:none;">
            <li class="toc-list" v-for="article of articles" :key="article.slug">
              <NuxtLink :to="{ name: 'docs-tagger-slug', params: { slug: article.slug } }"
                class="font-weight-light text--primary">{{ article.title }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </v-col>

      <v-col cols="12" v-if="$vuetify.breakpoint.smAndDown">
        <h3>Table of Contents</h3>
        <nav>
          <ul style="list-style:none;">
            <li :class="{ 'pl-5': link.depth === 3 }" class="toc-list" v-for="link of article.toc" :key="link.id">
              <NuxtLink :to="`#${link.id}`" class="font-weight-bold text--primary">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </v-col>

      <v-col cols="12" md="7">
        <nuxt-content :document="article" />
      </v-col>

      <v-col cols="12" md="2" v-if="$vuetify.breakpoint.mdAndUp">
        <h3>Table of Contents</h3>
        <nav>
          <ul style="list-style:none;">
            <li :class="{ 'pl-5': link.depth === 3 }" class="toc-list" v-for="link of article.toc" :key="link.id">
              <NuxtLink :to="`#${link.id}`" class="font-weight-bold text--primary">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </v-col>

    </v-row>

    <p></p>

    <!-- <v-divider></v-divider> -->

    <v-chip class="ma-2" outlined v-for="tag of article.tags" :key="tag">{{ tag }}</v-chip>

    <prev-next-docs :prev="prev" :next="next" />

  </article>
</template>

<script>
import { createSEOMeta } from "/utils/seo";

import common from '@/mixins/blog/common.js'

export default {

  head() {

    return {
      title: this.article.title,
      meta:
        [
          ...this.meta,
          {
            property: "article:published_time",
            content: this.article.createdAt,
          },
          {
            property: "article:modified_time",
            content: this.article.updatedAt,
          },
          {
            property: "article:tag",
            content: this.article.tags ? this.article.tags.toString() : "",
          },
        ]
    }
  },
  async asyncData({ $content, params }) {
    const article = await $content('docs/tagger', params.slug).fetch()

    const articles = await $content('docs/tagger')
      .only(['title', 'description', 'image', 'slug', 'author', 'tags', 'publishedAt'])
      .sortBy('slug', 'asc')
      .fetch()

    const [prev, next] = await $content('docs/tagger')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      articles,
      prev,
      next
    }
  },
  mixins: [
    common
  ],
  computed: {
    meta() {
      const url = `${process.env.baseUrl}/docs/tagger/${this.article.slug}`
      const image = `${process.env.baseUrl}${this.article.image}`

      const metaData = {
        type: "article",
        title: this.article.title,
        description: this.article.description,
        url: url,
        image: image,
      };
      return createSEOMeta(metaData);
    }
  },
  methods: {
  }
}
</script>

<style>
h2 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

h3 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

h4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 20px !important;
  font-weight: 300;
  font-size: 16px;
}

li {
  padding: 5px;
}
</style>
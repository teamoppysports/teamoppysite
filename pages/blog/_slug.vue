<template>
  <article>
    <AppSearchInput />
    <h1 class="font-sans">{{ article.title }}</h1>

    <v-row>
      <v-col cols="12" md="8">
        <p>{{ article.description }}</p>
      </v-col>
      <v-col cols="12" md="4">
        <p>Last updated: {{ formatDate(article.updatedAt) }}</p>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <img :src="article.image" :alt="article.alt" :width="imageWidth"/>
      </v-col>
      <v-col cols="12">
        <h3>Table of Contents</h3>
        <nav>
          <ul>
            <li v-for="link of article.toc" :key="link.id">
              <!-- <NuxtLink :to="`#${link.id}`"><span style="color:aliceblue">{{ link.text }}</span></NuxtLink> -->
              <NuxtLink :to="`#${link.id}`" class="font-bold text--primary">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </v-col>
    </v-row>

    <p></p>

    <nuxt-content :document="article" />

    <v-divider></v-divider>

    <v-chip class="ma-2" outlined v-for="tag of article.tags" :key="tag">{{ tag }}</v-chip>

    <prev-next :prev="prev" :next="next" />

  </article>
</template>

<script>
import getSiteMeta from "/utils/getSiteMeta";

import common from '@/mixins/blog/common.js'

export default {

  head() {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
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
        { name: "twitter:label1", content: "Written by" },
        { name: "twitter:data1", content: "Bob Ross" },
        { name: "twitter:label2", content: "Filed under" },
        {
          name: "twitter:data2",
          content: this.article.tags ? this.article.tags.toString() : "",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://bobross.com/articles/${this.$route.params.slug}`,
        },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },
  mixins: [
    common
  ],
  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.article.title,
        description: this.article.description,
        url: `${this.$config.baseUrl}/articles/${this.$route.params.slug}`,
        mainImage: this.article.image,
      };
      return getSiteMeta(metaData);
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
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

</style>
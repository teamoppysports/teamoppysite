<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center">
      <h1>Blog Posts</h1>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <p>
        For all the latest news, feature updates and more, check out our <b>blog posts</b> below.
      </p>
    </v-col>
    <v-col cols="12" lg="10" offset-lg="1" v-for="article of articles" :key="article.slug">

      <v-card class="pa-2" outlined hover :to="{ name: 'blog-slug', params: { slug: article.slug } }">
        <v-row>
          <v-col cols="12" sm="8">
            <v-card-title>
              <span>{{ article.title }}</span>
            </v-card-title>

            <v-card-text>
              {{ article.description }}
            </v-card-text>

            <v-card-text>
              <v-chip class="ma-2" outlined v-for="tag of article.tags" :key="tag">{{ tag }}</v-chip>
            </v-card-text>

            <v-card-text>
              by {{ article.author.name }}
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="4" class="d-flex align-center justify-center">
            <v-img :src="article.image" :aspect-ratio="16/9" :width="imageWidth" contain></v-img>
          </v-col>
        </v-row>

      </v-card>
    </v-col>
  </v-row>

</template>

<script>
import common from '@/mixins/blog/common.js'

export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'image', 'slug', 'author', 'tags'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  },
  mixins: [
    common
  ],

}
</script>
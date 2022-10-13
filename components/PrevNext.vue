<template>
  <v-row>
    <v-col cols="12"></v-col>
    <v-col class="d-flex justify-start">
      <NuxtLink v-if="prev" :to="{ name: 'blog-slug', params: { slug: prev.slug } }" class="font-weight-bold text-caption" style="text-decoration: none">
        <v-icon>mdi-arrow-left-thin</v-icon>
        {{ prev.title }}
      </NuxtLink>
    </v-col>
    <v-col class="d-flex justify-end">
      <NuxtLink v-if="next" :to="{ name: 'blog-slug', params: { slug: next.slug } }" class="font-weight-bold text-caption" style="text-decoration: none">
        {{ next.title }}
        <v-icon>mdi-arrow-right-thin</v-icon>
      </NuxtLink>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<template>
  <article>

    <h1>{{ doc.title }}</h1>
    <h2 class="font-weight-thin">{{ doc.description }}</h2>
    
    <br><br>
    <nuxt-content :document="doc" />

  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const doc = await $content('docs/clipper/index').fetch()

    return {
      doc
    }
  }
}
</script>
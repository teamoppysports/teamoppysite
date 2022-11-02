<template>
  <article>

    <h1>{{ terms.title }}</h1>
    <h2 class="font-weight-thin">{{ terms.description }}</h2>
    
    <br><br>
    <nuxt-content :document="terms" />

  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const terms = await $content('terms/index').fetch()

    return {
      terms
    }
  }
}
</script>
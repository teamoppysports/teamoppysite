<template>
  <article>

    <h1>{{ policy.title }}</h1>
    <h2 class="font-weight-thin">{{ policy.description }}</h2>
    
    <br><br>
    <nuxt-content :document="policy" />

  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const policy = await $content('privacy/index').fetch()

    return {
      policy
    }
  }
}
</script>
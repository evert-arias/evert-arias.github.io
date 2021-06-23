<template>
  <div class="container">
    <article>
      <nuxt-content :document="home" />
      <p>Post last updated: {{ home.createdAt }}</p>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData(context: any) {
    const home = await context.$content('home', context.params.slug).fetch()
    return { home }
  },
})
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  /* align-items: center; */
}
</style>

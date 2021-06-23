<template>
  <div class="layout">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar/Navbar'
export default {
  components: { Navbar },
}
</script>

<style lang="scss">
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  min-width: 270px;
  box-sizing: border-box;
  letter-spacing: 0;
}

body {
  font-family: 'Roboto', sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.layout {
  background-color: $main-background-color;
}
</style>

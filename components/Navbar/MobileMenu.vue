<template>
  <ul v-if="mobileMenuOpen" class="menu">
    <li v-bind:key="item.name" v-for="item in menu">
      <a :href="item.slug">{{ item.name }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MobileMenu',
  data() {
    return {
      mobileMenuOpen: false,
      menu: [],
    }
  },
  async mounted() {
    const menu = await this.$content('menu').fetch()
    this.menu = menu as []
  },
  methods: {
    toggle() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    close() {
      this.mobileMenuOpen = false
    },
  },
})
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
  background-color: $navbar-background-color;
  --item-text-color: #{$button-text-color};
}

.menu li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 6rem;
  margin: 5px;
  border-radius: 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  font-weight: 500;
  background-color: $button-color;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.menu li:hover {
  background-color: $paragraph-color;
  --item-text-color: #{$button-color};
}

.menu li:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.menu li a {
  text-decoration: none;
  text-align: center;
  color: var(--item-text-color);
}

@media screen and (min-width: 768px) {
  .menu {
    display: none;
  }
}
</style>

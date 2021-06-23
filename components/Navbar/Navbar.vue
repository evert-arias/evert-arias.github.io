<template>
  <div>
    <nav class="navbar" v-click-outside="clickOutside">
      <div class="logo">🌴</div>
      <div class="name">Evert Arias</div>
      <ul class="nav-links">
        <li v-bind:key="item.name" v-for="item in menu">
          <a :href="item.slug">{{ item.name }}</a>
        </li>
      </ul>
      <mobile-menu-button :toggle="mobileMenuToggle"></mobile-menu-button>
    </nav>
    <mobile-menu ref="mobileMenu"></mobile-menu>
  </div>
</template>

<script>
import MobileMenuButton from './MobileMenuButton'
import MobileMenu from './MobileMenu'
import vClickOutside from 'v-click-outside'
export default {
  name: 'Navbar',
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: { MobileMenuButton, MobileMenu },
  data() {
    return {
      mobileMenuVisible: false,
      menu: [],
    }
  },
  async mounted() {
    const menu = await this.$content('menu').fetch()
    this.menu = menu
  },
  methods: {
    hrefGenerator(elementId) {
      return '#' + elementId
    },
    mobileMenuToggle() {
      this.$refs.mobileMenu.toggle()
    },
    clickOutside() {
      this.$refs.mobileMenu.close()
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 3.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: $navbar-background-color;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 3.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;

  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

  --logo-translate-x: 0;
  --logo-translate-y: 0;
  --logo-rotate: 0;
  --logo-skew-x: 0;
  --logo-skew-y: 0;
  --logo-scale-x: 1;
  --logo-scale-y: 1;

  transform: translateX(var(--logo-translate-x))
    translateY(var(--logo-translate-y)) rotate(var(--logo-rotate))
    skewX(var(--logo-skew-x)) skewY(var(--logo-skew-y))
    scaleX(var(--logo-scale-x)) scaleY(var(--logo-scale-y));
}

.logo:hover {
  --logo-translate-y: -0.25rem /* -4px */;
  --logo-scale-x: 1.1;
  --logo-scale-y: 1.1;
}

.name {
  color: $paragraph-color;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.nav-links {
  display: none;
}

.nav-links li {
  margin: 0.5rem;
}

.nav-links li:hover {
  color: $button-color;
}

.nav-links li a {
  text-decoration: none;
  color: $button-text-color;
  font-weight: normal;
  font-size: 1.1rem;
}

.nav-links li a:hover {
  color: $button-color;
}

@media screen and (min-width: 768px) {
  .logo {
    margin-left: 10%;
  }
  .name {
    display: none;
  }
  .nav-links {
    margin-right: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    margin-right: 5rem;
    list-style: none;
  }
}

@media screen and (min-width: 1024px) {
  .logo {
    margin-left: 20%;
  }
  .nav-links {
    margin-right: 20%;
  }
}
</style>

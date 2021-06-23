<template>
  <div class="wrapper">
    <a title="menu" @click="toggleMobileMenu">
      <font-awesome-icon icon="bars" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'MobileMenuButton',
  props: {
    toggle: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    // toggle
    toggleMobileMenu() {
      this.toggle()
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 3.5rem;
}

.wrapper a {
  color: $headline-color;
  padding: 0.25rem;
  font-size: 1.5rem;
  line-height: 2rem;

  --btn-translate-x: 0;
  --btn-translate-y: 0;
  --btn-rotate: 0;
  --btn-skew-x: 0;
  --btn-skew-y: 0;
  --btn-scale-x: 1;
  --btn-scale-y: 1;
  
  transform: translateX(var(--btn-translate-x))
    translateY(var(--btn-translate-y)) rotate(var(--btn-rotate))
    skewX(var(--btn-skew-x)) skewY(var(--btn-skew-y)) scaleX(var(--btn-scale-x))
    scaleY(var(--btn-scale-y));
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.wrapper a:hover {
  cursor: pointer;
  color: $button-color;
  --btn-scale-x: 1.05;
  --btn-scale-y: 1.05;
}

.wrapper a:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

@media (min-width: 768px) {
  .wrapper {
    display: none;
  }
}
</style>

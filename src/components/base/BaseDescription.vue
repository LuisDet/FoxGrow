<template>
  <p :style="baseDescStyle">
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    fontSize: {
      type: String,
      default: "1.6",
    },
    centered: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    baseDescStyle() {
      const textCenter = this.centered ? "center" : "left";
      return `font-size: ${this.fontSize}rem; text-align: ${textCenter}`;
    },
  },
};
</script>

<style scoped>
p {
  color: var(--grey-dark);
  line-height: 2.4rem;
  text-align: left;
}
</style>
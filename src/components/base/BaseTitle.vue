<template>
  <h2 :style="baseTitleStyle">
    <slot />
  </h2>
</template>

<script>
export default {
  props: {
    fontSize: {
      type: String,
      default: "36",
    },
    centered: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    baseTitleStyle() {
      const textCenter = this.centered ? "center" : "left";
      return `font-size: ${this.fontSize}px; text-align: ${textCenter}`;
    },
  },
};
</script>

<style scoped>
h2 {
  color: var(--blue-dark);
  font-weight: 700;
  line-height: 3.5rem;
  margin-bottom: 2rem;
}
</style>
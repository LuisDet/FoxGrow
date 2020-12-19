<template>
  <div :style="newPadding">
    <slot />
  </div>
</template>
<script>
export default {
  computed: {
    newPadding() {
      return `padding: 0 ${this.$store.getters["offset"]}px`;
    },
  },
};
</script>
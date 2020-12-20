<template>
  <div class="card" :class="mode" :style="padding">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    mode: String,
    noPadding: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    padding() {
      return this.noPadding ? "padding: 0" : "padding: 2.5rem";
    },
  },
};
</script>
<style scoped>
.card {
  background: var(--white);
  border-radius: 10px;
  box-shadow: 3px 6px 15px rgba(0, 0, 0, 0.2);
  min-width: 25rem;
  overflow: hidden;
  margin-top: 1rem;
  /* background: #ccc; */
}
</style>

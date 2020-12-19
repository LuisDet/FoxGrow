<template>
  <div class="card" :class="mode">
    <slot />
  </div>
</template>
<script>
export default {
  props: ["mode"],
};
</script>
<style scoped>
.card {
  background: var(--white);
  border-radius: 10px;
  box-shadow: 3px 6px 15px rgba(0, 0, 0, 0.2);
  padding: 25px;
  min-width: 25rem;
  /* background: #ccc; */
}
</style>

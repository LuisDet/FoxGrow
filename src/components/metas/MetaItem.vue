<template>
  <base-card :mode="'mb-2'">
    <slot></slot>
    <h2 class="title">{{ title }}</h2>
    <p class="description">
      {{ desc }}
    </p>
  </base-card>
</template>

<script>
export default {
  props: ['title', 'desc'],
};
</script>

<style scoped>
.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #063549;
  text-align: center;
  margin-bottom: 3rem;
}
.description {
  font-size: 1.6rem;
  color: #6f6f73;
}
</style>

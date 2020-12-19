<template>
  <button v-if="!link" :class="mode">
    <slot />
  </button>
  <router-link :to="to" v-else :class="mode">
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    mode: {
      type: String,
      required: true,
      default: "flat",
    },
    to: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 1.4rem 0;
  min-width: 14.5rem;
  font: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  /* margin-right: 0.5rem; */
  display: inline-block;
  border: 0px solid transparent;
  transition: all 0.4s ease;
}

.flat {
  background-color: #d2d2d2;
  color: var(--blue-dark);
  border: 1px solid transparent;
}

.outline {
  background-color: var(--orange);
  color: var(--white);
}

.flat:hover,
.flat:active {
  background-color: var(--blue-dark);
  color: #d2d2d2;
  border: 1px solid #d2d2d2;
  transform: scale(1.05);
}

.outline:hover,
.outline:active {
  background-color: var(--white);
  color: var(--orange);
  transform: scale(1.05);
}
</style>
